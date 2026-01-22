import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IoHappyOutline, IoTimeOutline, IoWalletOutline, IoAlertCircleOutline } from "react-icons/io5";

export default function ReturnPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-bg-grey py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 text-xs text-text-secondary">
          Главная / Если что-то пошло не так
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 flex-grow max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
          Если что-то не подошло
        </h1>
        <p className="text-lg text-text-secondary mb-10 leading-relaxed">
          Мы понимаем: бывает, что размер не угадали или цвет в жизни оказался другим. 
          Ничего страшного! Мы без проблем обменяем товар или вернем деньги. 
          Главное — сохраните вещь новой.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Как все сделать?</h2>
            <div className="bg-bg-grey rounded-2xl p-8 space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex-shrink-0 flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Напишите нам</h4>
                  <p className="text-text-secondary">
                    Отправьте письмо на <a href="mailto:help@siburstore.ru" className="text-brand-primary font-medium hover:underline">help@siburstore.ru</a>. 
                    В теме укажите "Возврат заказа №..." и приложите фото товара.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex-shrink-0 flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Отправьте посылку</h4>
                  <p className="text-text-secondary">
                    Мы пришлем вам трек-номер для СДЭК. Вам останется только отнести посылку в ближайший пункт выдачи.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex-shrink-0 flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Получите деньги</h4>
                  <p className="text-text-secondary">
                    Как только мы проверим товар на складе, деньги вернутся на ту карту, с которой вы платили.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-amber-50 rounded-2xl p-6 md:p-8 flex gap-4 items-start">
            <IoAlertCircleOutline className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg text-amber-900 mb-2">Важный момент</h3>
              <p className="text-amber-800/90 leading-relaxed">
                Мы очень хотим, чтобы вам все подошло. Но мы не сможем принять назад ношеные вещи, 
                товары без бирок или товары, сделанные по индивидуальному заказу (например, с вашей фамилией). 
                Также возврату не подлежат нижнее белье и носки — это правило гигиены.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
