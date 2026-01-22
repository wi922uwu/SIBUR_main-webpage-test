"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ui/ProductCard";
import { FilterSidebar } from "@/components/catalog/FilterSidebar";
import { ProductModal } from "@/components/catalog/ProductModal";
import { PRODUCTS, Product } from "@/data/catalog";
import { IoFilter, IoSearchOutline } from "react-icons/io5";

type SortOption = "newest" | "price_asc" | "price_desc";

export default function CatalogPage() {
  // State
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Mobile Filters State
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by Category
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by Price
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    switch (sortOption) {
      case "price_asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); // Newest first
        break;
    }

    return result;
  }, [selectedCategory, priceRange, sortOption]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Breadcrumbs Placeholder (Optional) */}
      <div className="bg-bg-grey py-3 border-b border-gray-100">
          <div className="container mx-auto px-4 text-xs text-text-secondary">
              Главная / Каталог
          </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8 flex-grow">
        <h1 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 md:mb-8">Каталог товаров</h1>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Mobile Filter Toggle */}
          <button 
            className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg text-sm font-medium bg-gray-50 active:bg-gray-100"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <IoFilter className="w-5 h-5" /> 
            {isMobileFiltersOpen ? "Скрыть фильтры" : "Показать фильтры"}
          </button>

          {/* Sidebar Filters */}
          <div className={`${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block`}>
             <FilterSidebar 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
             />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sorting Toolbar */}
            <div className="flex justify-between items-center mb-6">
                <div className="text-xs md:text-sm text-text-secondary">
                    Найдено: <span className="font-bold text-brand-dark">{filteredProducts.length}</span>
                </div>
                
                <select 
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value as SortOption)}
                    className="border-none text-xs md:text-sm font-medium text-brand-dark focus:ring-0 cursor-pointer bg-transparent"
                >
                    <option value="newest">Сначала новые</option>
                    <option value="price_asc">Сначала дешевле</option>
                    <option value="price_desc">Сначала дороже</option>
                </select>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
                 <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-10">
                    {filteredProducts.map((product) => (
                        <div key={product.id} onClick={() => handleProductClick(product)}>
                             <ProductCard
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                image={product.image}
                                badge={
                                    product.isNew ? { text: "NEW", color: "bg-brand-light" } : 
                                    product.isHit ? { text: "HIT", color: "bg-accent-orange" } : undefined
                                }
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <IoSearchOutline className="w-10 h-10 md:w-12 md:h-12 text-gray-400" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-brand-dark mb-2">Ничего не найдено</h3>
                    <p className="text-sm md:text-base text-text-secondary max-w-md">
                        Попробуйте изменить параметры фильтрации или сбросить фильтры.
                    </p>
                    <button 
                        onClick={() => {
                            setSelectedCategory(null);
                            setPriceRange([0, 20000]);
                        }}
                        className="mt-6 text-brand-primary font-medium hover:underline"
                    >
                        Сбросить фильтры
                    </button>
                </div>
            )}
          </div>
        </div>
      </div>

      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </main>
  );
}
