import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function UsefulPage() {
  const articles = [
    {
      title: "Как выбрать качественный корпоративный мерч",
      excerpt: "Полное руководство по выбору мерча для вашей компании.",
      date: "15.01.2025"
    },
    {
      title: "Тренды корпоративной атрибутики 2025",
      excerpt: "Узнайте, какие товары будут популярны в этом году.",
      date: "10.01.2025"
    },
    {
      title: "Экологичные материалы в производстве",
      excerpt: "Почему важно выбирать товары из переработанных материалов.",
      date: "05.01.2025"
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-bg-grey py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 text-xs text-text-secondary">
          Главная / Полезное
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12 text-center">
          Полезные материалы
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article key={article.title} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-xs text-text-secondary mb-3">{article.date}</div>
              <h3 className="font-bold text-lg mb-3 text-brand-dark">{article.title}</h3>
              <p className="text-sm text-text-secondary mb-4">{article.excerpt}</p>
              <span className="text-brand-primary font-medium text-sm hover:underline">
                Читать далее →
              </span>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
