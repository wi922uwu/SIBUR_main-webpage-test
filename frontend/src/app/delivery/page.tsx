import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IoCubeOutline, IoLocationOutline, IoRocketOutline, IoWalletOutline } from "react-icons/io5";

export default function DeliveryPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-bg-grey py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 text-xs text-text-secondary">
          Главная / Как получить заказ
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 flex-grow max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">
            Доставка и оплата
          </h1>
          <div className="text-sm text-text-secondary bg-bg-grey px-4 py-2 rounded-lg">
            Работаем только с юридическими лицами
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Левая колонка - Основная информация (2/3 ширины) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Секция 1: Способы получения (Таблица) */}
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-100 pb-2">
                Способы получения
              </h2>
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm md:text-base">
                  <thead className="bg-bg-grey text-brand-dark font-bold">
                    <tr>
                      <th className="p-4 border-b border-gray-200">Способ</th>
                      <th className="p-4 border-b border-gray-200">Сроки</th>
                      <th className="p-4 border-b border-gray-200">Стоимость</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="p-4 align-top">
                        <div className="font-bold text-brand-dark mb-1">Транспортная компания</div>
                        <div className="text-text-secondary text-sm">СДЭК, Деловые Линии</div>
                      </td>
                      <td className="p-4 text-text-secondary align-top">
                        3–7 рабочих дней
                      </td>
                      <td className="p-4 align-top">
                        <div className="text-brand-dark font-medium">По тарифам ТК</div>
                        <div className="text-xs text-brand-primary mt-1">Бесплатно от 50 000 ₽</div>
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="p-4 align-top">
                        <div className="font-bold text-brand-dark mb-1">Самовывоз</div>
                        <div className="text-text-secondary text-sm">Москва, ул. Кржижановского, 16к1</div>
                      </td>
                      <td className="p-4 text-text-secondary align-top">
                        В день готовности
                      </td>
                      <td className="p-4 align-top">
                        <div className="text-brand-dark font-medium">0 ₽</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Секция 2: Оплата (Списки) */}
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-100 pb-2">
                Финансовые условия
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
                    <IoWalletOutline className="text-brand-primary" />
                    Порядок оплаты
                  </h3>
                  <ul className="space-y-3 text-sm text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary font-bold">01.</span>
                      <span>Оформление заказа на сайте</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary font-bold">02.</span>
                      <span>Выставление счета (с НДС 20%)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary font-bold">03.</span>
                      <span>100% предоплата безналичным переводом</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
                    <IoCubeOutline className="text-brand-primary" />
                    Документооборот
                  </h3>
                  <ul className="space-y-3 text-sm text-text-secondary">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5"></span>
                      <span>Работаем через ЭДО (Диадок, СБИС)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5"></span>
                      <span>Предоставляем УПД и оригинал счета</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5"></span>
                      <span>Договор поставки (по запросу)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Правая колонка - Важное/Контакты (1/3 ширины) */}
          <div className="space-y-6">
            <div className="bg-bg-grey p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wide">
                Важная информация
              </h3>
              <div className="space-y-4 text-sm text-text-secondary">
                <div>
                  <div className="font-bold text-brand-dark mb-1">Для самовывоза</div>
                  <p>Необходим паспорт для оформления пропуска и доверенность (форма М-2) для получения груза.</p>
                </div>
                <div>
                  <div className="font-bold text-brand-dark mb-1">График работы склада</div>
                  <p>Пн-Пт: 09:00 — 18:00</p>
                  <p>Сб-Вс: Выходной</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark text-white p-6 rounded-xl">
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wide opacity-80">
                Остались вопросы?
              </h3>
              <p className="text-sm mb-4 opacity-90">
                Отдел логистики поможет рассчитать точную стоимость доставки крупной партии.
              </p>
              <a href="tel:+74950000000" className="block text-xl font-bold hover:text-brand-primary transition-colors mb-1">
                +7 (495) 000-00-00
              </a>
              <a href="mailto:logistics@sibur.ru" className="text-sm underline opacity-80 hover:opacity-100">
                logistics@sibur.ru
              </a>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
