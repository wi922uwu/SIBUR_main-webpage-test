import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

export default function CollectionsPage() {
  const collections = [
    {
      id: 1,
      name: "Спортивные товары",
      description: "Одежда, спорт инвентарь, мячи, коврики для йоги",
      image: "/collections/sport.jpg",
    },
    {
      id: 2,
      name: "Сумки и рюкзаки",
      description: "Городские и корпоративные модели",
      image: "/collections/bags.jpg",
    },
    {
      id: 3,
      name: "Товары для дома",
      description: "Увлажнители, пледы",
      image: "/collections/home.jpg",
    },
    {
      id: 4,
      name: "Электроника",
      description: "Зарядные устройства",
      image: "/collections/electronics.png",
    },
    {
      id: 5,
      name: "Посуда",
      description: "Бутылки, термокружки",
      image: "/collections/tableware.png",
    },
    {
      id: 6,
      name: "Письменные принадлежности",
      description: "Блокноты, ручки, наборы",
      image: "/collections/stationery.png",
    },
    {
      id: 7,
      name: "Лимитированные коллекции и коллаборации",
      description: "Спецсерии и партнерские запуски",
      image: "/collections/limited.jpg",
    },
    {
      id: 8,
      name: "ЭКО-товары",
      description: "Товары из сырья СИБУР",
      image: "/collections/eco.png",
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-bg-grey py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 text-xs text-text-secondary">
          Главная / Коллекции
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 text-center">
          Наши коллекции
        </h1>
        <p className="text-text-secondary mb-12 text-center max-w-2xl mx-auto">
          Каждая коллекция создана с учетом современных трендов и корпоративной идентичности.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <Link key={collection.id} href="/catalog">
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-bg-grey">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-brand-primary transition-colors">
                  {collection.name}
                </h3>
                <p className="text-sm text-text-secondary">
                  {collection.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
