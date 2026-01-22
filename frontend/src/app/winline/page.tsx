import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function WinlinePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-bg-grey py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 text-xs text-text-secondary">
          Главная / SIBUR x Winline
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            SIBUR x Winline
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Коллаборация с букмекерской компанией Winline. Эксклюзивная серия спортивного мерча.
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-12 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Спортивная коллекция</h2>
          <p className="mb-8 opacity-90">
            Футболки, худи и аксессуары с символикой партнерства SIBUR и Winline
          </p>
          <Link 
            href="/catalog" 
            className="inline-block bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Смотреть коллекцию
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
