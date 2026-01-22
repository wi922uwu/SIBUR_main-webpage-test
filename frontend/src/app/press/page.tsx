import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PressPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-bg-grey py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 text-xs text-text-secondary">
          Главная / СМИ о нас
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 flex-grow max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8 text-center">
          СМИ о нас
        </h1>
        
        <div className="text-center mb-12">
          <p className="text-lg text-text-secondary">
            Новости и публикации о SIBUR Store
          </p>
        </div>

        <div className="space-y-6">
          <div className="border-l-4 border-brand-primary pl-6 py-4">
            <div className="text-xs text-text-secondary mb-2">Коммерсантъ • 20.12.2024</div>
            <h3 className="font-bold text-lg mb-2">СИБУР запустил корпоративный магазин мерча</h3>
            <p className="text-text-secondary">
              Компания открыла онлайн-магазин с фирменной продукцией для сотрудников и партнеров.
            </p>
          </div>

          <div className="border-l-4 border-brand-primary pl-6 py-4">
            <div className="text-xs text-text-secondary mb-2">Ведомости • 15.12.2024</div>
            <h3 className="font-bold text-lg mb-2">Тренд на экологичные материалы в корпоративном мерче</h3>
            <p className="text-text-secondary">
              SIBUR использует переработанный пластик Vivilen для производства товаров.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
