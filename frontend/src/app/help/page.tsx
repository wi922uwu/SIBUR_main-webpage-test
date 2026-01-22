import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function HelpPage() {
  const faqs = [
    {
      question: "Как сделать заказ?",
      answer: "Выберите товары, добавьте их в корзину, заполните контактные данные и подтвердите заказ. Менеджер свяжется с вами для согласования деталей."
    },
    {
      question: "Какие способы оплаты доступны?",
      answer: "Мы принимаем безналичный расчет для юридических лиц, оплату по счету с ЭДО, а также банковские карты при самовывозе."
    },
    {
      question: "Можно ли нанести логотип компании?",
      answer: "Да, мы предлагаем услуги нанесения логотипа различными методами (шелкография, вышивка, тампопечать). Стоимость рассчитывается индивидуально."
    },
    {
      question: "Есть ли минимальная сумма заказа?",
      answer: "Минимальная сумма заказа составляет 5 000 рублей."
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-bg-grey py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 text-xs text-text-secondary">
          Главная / Помощь
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 flex-grow max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12 text-center">
          Часто задаваемые вопросы
        </h1>

        <div className="space-y-6 mb-12">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-bg-grey p-6 rounded-xl group">
              <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                {faq.question}
                <span className="text-brand-primary transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-text-secondary leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="bg-brand-primary/5 p-8 rounded-xl border border-brand-primary/20 text-center">
          <h2 className="text-xl font-bold text-brand-dark mb-4">
            Не нашли ответ на свой вопрос?
          </h2>
          <p className="text-text-secondary mb-6">
            Свяжитесь с нами любым удобным способом, и мы с радостью поможем.
          </p>
          <Link 
            href="/contacts"
            className="inline-block bg-brand-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-[#007A82] transition-colors"
          >
            Связаться с нами
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
