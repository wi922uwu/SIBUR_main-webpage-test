import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/catalog";
import { IoLeafOutline } from "react-icons/io5";

export default function VivilenPage() {
  const ecoProducts = PRODUCTS.filter(p => p.category === "eco");

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-bg-grey py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 text-xs text-text-secondary">
          Главная / ЭКО-Линейка Vivilen
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            ЭКО-Линейка Vivilen
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Товары из переработанного пластика Vivilen®. Экологичность и забота об окружающей среде в каждом продукте.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 md:p-12 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center">
              <IoLeafOutline className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Переработанный пластик Vivilen®
            </h2>
            <p className="text-green-800">
              Vivilen® – это инновационный материал от СИБУР, созданный из переработанного полиэтилена.
              Используя товары из Vivilen, вы способствуете сокращению пластиковых отходов и защите природы.
            </p>
          </div>
        </div>

        {ecoProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-6 text-center">Товары из Vivilen</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-10">
              {ecoProducts.map((product) => (
                <Link key={product.id} href="/catalog">
                  <ProductCard
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    badge={product.isNew ? { text: "ECO" } : undefined}
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
