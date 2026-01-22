import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { IoGameControllerOutline } from "react-icons/io5";

export default function KidsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-bg-grey py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 text-xs text-text-secondary">
          Главная / Детям
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 text-center">
          Товары для детей
        </h1>
        <p className="text-text-secondary mb-12 text-center max-w-2xl mx-auto">
          Детская одежда, игрушки и развивающие конструкторы от СИБУР.
        </p>

        <div className="text-center py-20">
          <div className="w-24 h-24 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
            <IoGameControllerOutline className="w-12 h-12 text-purple-600" />
          </div>
          <p className="text-lg text-text-secondary mb-8">
            Раздел находится в разработке. <br />
            Скоро здесь появятся товары для самых маленьких.
          </p>
          <Link 
            href="/catalog" 
            className="inline-block bg-brand-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-[#007A82] transition-colors"
          >
            Перейти в каталог
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
