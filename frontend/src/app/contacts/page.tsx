import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IoMailOutline, IoCallOutline, IoLocationOutline, IoLogoVk } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-bg-grey py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 text-xs text-text-secondary">
          Главная / Контакты
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12 text-center">
          Контакты
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <IoLocationOutline className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Адрес</h3>
                <p className="text-text-secondary">
                  119415, г. Москва,<br />
                  ул. Ферсмана, д. 5, к. 2
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <IoMailOutline className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <a href="mailto:store@sibur.ru" className="text-brand-primary hover:underline">
                  store@sibur.ru
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <IoCallOutline className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Телефон</h3>
                <a href="tel:+74957772000" className="text-brand-primary hover:underline">
                  +7 (495) 777-20-00
                </a>
                <p className="text-sm text-text-secondary mt-1">
                  Пн-Пт: 9:00 - 18:00
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                  <IoLogoVk className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                  <FaTelegramPlane className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-bg-grey p-8 rounded-xl">
            <h3 className="font-bold text-xl mb-6">Напишите нам</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary outline-none"
              />
              <textarea
                placeholder="Сообщение"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary outline-none resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-brand-primary text-white py-3 rounded-lg font-bold hover:bg-[#007A82] transition-colors"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
