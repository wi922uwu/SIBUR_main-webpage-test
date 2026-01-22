import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/catalog";
import Link from "next/link";

export default function ElectronicsPage() {
  const electronicsProducts = PRODUCTS.filter(p => p.category === "electronics");

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-bg-grey py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 text-xs text-text-secondary">
          Главная / Электроника
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Электроника
        </h1>
        <p className="text-text-secondary mb-12">
          Гаджеты и электронные устройства с логотипом СИБУР.
        </p>

        {electronicsProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-10">
            {electronicsProducts.map((product) => (
              <Link key={product.id} href="/catalog">
                <ProductCard
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  badge={product.isNew ? { text: "NEW" } : undefined}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-text-secondary mb-6">В этой категории пока нет товаров.</p>
            <Link href="/catalog" className="text-brand-primary font-bold hover:underline">
              Перейти в каталог →
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
