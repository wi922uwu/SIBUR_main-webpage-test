import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FiGift } from "react-icons/fi";

export default function CertificatePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-bg-grey py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 text-xs text-text-secondary">
          Главная / Подарочные сертификаты
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 flex-grow">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <FiGift className="w-16 h-16 mx-auto text-brand-primary mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Подарочные сертификаты
          </h1>
          <p className="text-lg text-text-secondary">
            Порадуйте коллег качественным мерчем от SIBUR. Универсальный подарок на любой случай.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[5000, 10000, 25000].map((amount) => (
            <div key={amount} className="border-2 border-brand-primary rounded-xl p-8 text-center hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-4xl font-bold text-brand-primary mb-2">
                {amount.toLocaleString('ru-RU')} ₽
              </div>
              <p className="text-sm text-text-secondary mb-6">Номинал сертификата</p>
              <button className="w-full bg-brand-primary text-white py-3 rounded-lg font-bold hover:bg-[#007A82] transition-colors">
                Заказать
              </button>
            </div>
          ))}
        </div>

        <div className="bg-bg-grey p-8 rounded-xl">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Как использовать сертификат</h2>
          <ol className="space-y-3 text-text-secondary list-decimal list-inside">
            <li>Получите сертификат на указанный email</li>
            <li>Выберите товары в каталоге</li>
            <li>При оформлении заказа введите код сертификата</li>
            <li>Сумма сертификата будет автоматически вычтена из итоговой стоимости</li>
          </ol>
          <p className="text-sm text-text-secondary mt-4">
            Срок действия сертификата — 12 месяцев с даты покупки.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
