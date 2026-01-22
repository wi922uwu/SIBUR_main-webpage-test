"use client";

import { useState } from "react";
import { Hero } from "@/components/home/Hero";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductModal } from "@/components/catalog/ProductModal";
import { PRODUCTS, Product } from "@/data/catalog";
import Image from "next/image";
import Link from "next/link";
import { BiCollection, BiCrown } from "react-icons/bi";
import { IoShirtOutline } from "react-icons/io5";

const COLLECTIONS = [
  {
    id: 1,
    title: "Спортивные товары",
    subtitle: "Одежда, мячи, коврики для йоги",
    image: "/collections/sport.jpg",
    link: "/collections",
  },
  {
    id: 2,
    title: "Сумки и рюкзаки",
    subtitle: "Городские и корпоративные модели",
    image: "/collections/bags.jpg",
    link: "/collections",
  },
  {
    id: 3,
    title: "Товары для дома",
    subtitle: "Увлажнители, пледы",
    image: "/collections/home.jpg",
    link: "/collections",
  },
  {
    id: 4,
    title: "Электроника",
    subtitle: "Зарядные устройства",
    image: "/collections/electronics.png",
    link: "/collections",
  },
  {
    id: 5,
    title: "Посуда",
    subtitle: "Бутылки, термокружки",
    image: "/collections/tableware.png",
    link: "/collections",
  },
  {
    id: 6,
    title: "Письменные принадлежности",
    subtitle: "Блокноты, ручки, наборы",
    image: "/collections/stationery.png",
    link: "/collections",
  },
  {
    id: 7,
    title: "Лимитированные коллекции",
    subtitle: "Коллаборации и спецсерии",
    image: "/collections/limited.jpg",
    link: "/collections",
  },
  {
    id: 8,
    title: "ЭКО-товары",
    subtitle: "Из сырья СИБУР",
    image: "/collections/eco.png",
    link: "/collections",
  },
];

// Используем товары из каталога
const BESTSELLERS = PRODUCTS.filter(p => p.isHit).slice(0, 4);
const CLOTHING = PRODUCTS.filter(p => p.category === "clothing").slice(0, 4);

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex-grow">
          <Hero />
          
          {/* About Section */}
          <section className="container mx-auto px-4 py-12 md:py-16 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-brand-dark mb-4 md:mb-6">
              <span className="text-brand-primary">SIBUR Store</span> – магазин одежды, гаджетов, аксессуаров и умных устройств.
            </h1>
            <p className="text-base md:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Исключительно качественные материалы, оригинальный дизайн,
              ненавязчивый брендинг – это <span className="font-bold text-brand-primary">SIBUR Store</span>
            </p>
          </section>

          {/* Collections Section */}
          <section className="container mx-auto px-4 mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
              <BiCollection className="w-6 h-6 md:w-8 md:h-8 text-brand-dark" />
              <h2 className="text-xl md:text-2xl font-bold text-brand-dark">Коллекции</h2>
            </div>
            
            {/* Grid: 2 columns on mobile, 4 on large screens */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                {COLLECTIONS.map((item) => (
                    <Link key={item.id} href={item.link}>
                      <div className="group cursor-pointer flex flex-col items-center">
                          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-3 md:mb-4 bg-bg-grey">
                              <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                              />
                          </div>
                          <h3 className="text-xs md:text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors text-center line-clamp-2">
                              {item.title}
                          </h3>
                          {item.subtitle && (
                            <p className="text-[10px] md:text-xs text-text-secondary text-center line-clamp-2 mt-1">
                              {item.subtitle}
                            </p>
                          )}
                      </div>
                    </Link>
                ))}
            </div>

            {/* Carousel Indicators (Mock) */}
            <div className="flex justify-center gap-2">
                <div className="w-6 md:w-8 h-1 md:h-1.5 bg-brand-dark rounded-full"></div>
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-gray-300 rounded-full"></div>
            </div>
          </section>

          {/* Bestsellers Section */}
          <section className="container mx-auto px-4 mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
              <BiCrown className="w-6 h-6 md:w-8 md:h-8 text-brand-dark" />
              <h2 className="text-xl md:text-2xl font-bold text-brand-dark">Бестселлеры</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12 mb-8">
                {BESTSELLERS.map((item) => (
                    <div key={item.id} onClick={() => handleProductClick(item)}>
                      <ProductCard 
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        badge={item.isNew ? { text: "NEW", color: "bg-brand-light" } : item.isHit ? { text: "HIT", color: "bg-accent-orange" } : undefined}
                      />
                    </div>
                ))}
            </div>
            
            {/* Carousel Indicators (Mock) */}
            <div className="flex justify-center gap-2">
                <div className="w-6 md:w-8 h-1 md:h-1.5 bg-brand-dark rounded-full"></div>
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-gray-300 rounded-full"></div>
            </div>
          </section>

          {/* Clothing Section */}
          <section className="container mx-auto px-4 mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
              <IoShirtOutline className="w-6 h-6 md:w-8 md:h-8 text-brand-dark" />
              <h2 className="text-xl md:text-2xl font-bold text-brand-dark">Одежда</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12">
                {CLOTHING.map((item) => (
                    <div key={item.id} onClick={() => handleProductClick(item)}>
                      <ProductCard 
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                      />
                    </div>
                ))}
            </div>
          </section>
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
