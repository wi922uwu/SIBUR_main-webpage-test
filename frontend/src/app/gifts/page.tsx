import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { FiGift } from "react-icons/fi";

export default function GiftsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-bg-grey py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 text-xs text-text-secondary">
          Главная / Подарки коллегам
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 flex-grow">
        <div className="text-center mb-12">
          <FiGift className="w-16 h-16 mx-auto text-brand-primary mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Подарки для коллег
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Корпоративные подарочные наборы, сувениры и памятные подарки для особых событий.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
            <h3 className="font-bold text-xl mb-4 text-purple-900">Подарочные наборы</h3>
            <p className="text-sm text-purple-700 mb-6">
              Готовые наборы мерча в фирменной упаковке. Идеально для корпоративных мероприятий.
            </p>
            <Link href="/catalog" className="text-brand-primary font-bold hover:underline">
              Смотреть наборы →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
            <h3 className="font-bold text-xl mb-4 text-blue-900">Индивидуальные решения</h3>
            <p className="text-sm text-blue-700 mb-6">
              Создадим уникальный подарок по вашим требованиям с персональным брендированием.
            </p>
            <Link href="/contacts" className="text-brand-primary font-bold hover:underline">
              Заказать →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/certificate" 
            className="inline-block bg-brand-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-[#007A82] transition-colors"
          >
            Купить подарочный сертификат
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
