export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  images?: string[]; // Дополнительные изображения для галереи
  category: "clothing" | "electronics" | "accessories" | "eco";
  sizes?: string[];
  isNew?: boolean;
  isHit?: boolean;
  colors?: string[];
  material?: string;
  minQuantity?: number; // Минимальное количество для заказа
  stock?: number; // Остаток на складе
  productionTime?: string; // Время производства
  logoTypes?: string[]; // Варианты нанесения логотипа
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Стёганый жилет из водоотталкивающей ткани",
    description: "Стёганый жилет из водоотталкивающей ткани, сделанной из переработанного полиэстера. Модель с воротником-стойкой и двусторонней молнией. Два кармана на молнии по бокам и два больших прорезных кармана на внутренней стороне. Эластичные края на проймах и прямом подоле. Наполнитель из полимерной технологии - альтернатива пуху и перьям.",
    price: 0, // Цена будет указана позже
    image: "/products/jacket/photo_2026-01-20_15-42-49.jpg",
    images: [
      "/products/jacket/photo_2026-01-20_15-42-49.jpg",
      "/products/jacket/photo_2025-12-24_19-44-28.jpg",
      "/products/jacket/photo_2025-12-24_19-44-29.jpg",
      "/products/jacket/photo_2025-12-24_22-19-08.jpg",
    ],
    category: "clothing",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "2XL"],
    material: "100% полиэстер (переработанная ткань/переработанный утеплитель). Ультралёгкий материал микрорипстоп. Утеплитель из полимерной технологии Sorona®: 100% эластомультиэстер. Подкладка: 100% полиамид",
    isNew: true,
    minQuantity: 1,
  },
  {
    id: 2,
    title: "Бутылка для воды",
    description: "Полупрозрачный цветной корпус и эргономичная крышка со встроенной ручкой обеспечивают удобство использования и привлекательный внешний вид. Благодаря удобной форме и компактным размерам бутылка легко помещается в рюкзак или сумку, не занимая много места. Она идеально подходит для ежедневного использования, будь то занятия спортом или длительные прогулки.",
    price: 0,
    image: "/products/bottle/Screenshot_43.png",
    images: [
      "/products/bottle/Screenshot_43.png",
      "/products/bottle/Screenshot_44.png",
    ],
    category: "eco",
    material: "Не содержит бисфенол А",
    isHit: true,
    minQuantity: 1,
    stock: 50,
    productionTime: "7-10 рабочих дней",
  },
  {
    id: 3,
    title: "Шоппер из переработанного материала с ЭКО-наполнителем",
    description: "Легкий и удобный шоппер от СБЕР - модный аксессуар для городской жизни. Компактный и лёгкий он может выдержать любой вес до 10 кг. Материал, из которого изготовлен шоппер - курточная водоотталкивающая и ветрозащитная ткань. Изделие произведено согласно концепции осознанного потребления ESG – это значит, что, пользуясь им вы привносите свой вклад в развитие осознанного подхода к потреблению.",
    price: 0,
    image: "/products/shopper/DSC8739.jpg",
    images: [
      "/products/shopper/DSC8739.jpg",
      "/products/shopper/DSC8740.jpg",
      "/products/shopper/DSC8743.jpg",
    ],
    category: "eco",
    colors: ["Тёмно-серый"],
    material: "Внутренний наполнитель: 100% переработанные бутылки PET. Плотность: 200 гр",
    sizes: ["380х380 мм"],
    isNew: true,
    minQuantity: 1,
    productionTime: "10-14 рабочих дней",
  },
  {
    id: 4,
    title: "Баскетбольный мяч Wilson Evolution",
    description: "Wilson Evolution отличается высоким качеством и предназначен для игр и соревнований в средних школах. Мяч выполнен из запатентованной, впитывающей влагу композитной кожи (микрофибра). Революционная система AquaGrip обеспечивает уверенное владение мячом, так как его поверхность остается сухой, и это исключает потерю (выскальзывание) мяча во время игры. Структура каналов создает единообразное ощущение текстуры всей поверхности мяча, обеспечивая беспрецедентный контроль для лучшего захвата. Технология Cushion Core: запатентованный губчатый каркас для максимального смягчения при ударе. Наиболее аэродинамическая траектория полета.",
    price: 0,
    image: "/products/ball/j658infrr6t5ut4thmvkg3yswdriveh3.jpg",
    images: [
      "/products/ball/j658infrr6t5ut4thmvkg3yswdriveh3.jpg",
    ],
    category: "accessories",
    material: "Композитная кожа (микрофибра)",
    isHit: true,
    minQuantity: 1,
    stock: 30,
  },
  {
    id: 5,
    title: "Плед из переработанного материала с ЭКО-наполнителем",
    description: "Этот плед согреет вас в холодные дни. За счёт своего большого размера, он очень вместительный, поэтому этот плед – спасение для любого пикника – он отлично подойдёт для больших компаний. Его также удобно брать с собой на прогулки. Важно: изделие произведено согласно концепции осознанного потребления ESG – это значит, что, пользуясь им вы привносите свой вклад в развитие осознанного подхода к потреблению.",
    price: 0,
    image: "/products/rug/DSC8718.jpg",
    images: [
      "/products/rug/DSC8718.jpg",
      "/products/rug/DSC8722.jpg",
      "/products/rug/DSC8727.jpg",
      "/products/rug/sber2305_26255.jpg",
      "/products/rug/sber2305_26261.jpg",
      "/products/rug/sber2305_26263.jpg",
      "/products/rug/sber2305_26265.jpg",
    ],
    category: "eco",
    colors: ["Серебро"],
    material: "Материал верха: плащевая ткань. Внутренний наполнитель: 100% переработанные бутылки PET. Вид: стёганный. Плотность: 150 гр",
    sizes: ["1700х1400 мм"],
    isNew: true,
    minQuantity: 1,
    productionTime: "14-21 рабочий день",
  },
  {
    id: 6,
    title: "Детская футболка унисекс",
    description: "Детская футболка унисекс свободного кроя с боковыми швами. Спущенная линия плеча. Круглая горловина выполнена резинкой 1х1. Укрепляющая тесьма по вороту изнутри.",
    price: 0,
    image: "/products/kids/Screenshot_53.png",
    images: [
      "/products/kids/Screenshot_53.png",
      "/products/kids/Screenshot_54.png",
      "/products/kids/Screenshot_55.png",
    ],
    category: "clothing",
    sizes: ["98", "104", "110", "116", "122", "128", "134", "140", "146", "152", "158", "164", "170"],
    material: "Хлопок 92%, эластан 8%, плотность 200 г/м²; джерси",
    isNew: true,
    minQuantity: 1,
    productionTime: "7-10 рабочих дней",
  },
  {
    id: 7,
    title: "Футболка унисекс свободного кроя",
    description: "Футболка унисекс свободного кроя с боковыми швами. Спущенная линия плеча. Круглая горловина выполнена резинкой 1х1. Укрепляющая тесьма по вороту изнутри.",
    price: 0,
    image: "/products/t-shirt/Screenshot_45.png",
    images: [
      "/products/t-shirt/Screenshot_45.png",
      "/products/t-shirt/Screenshot_46.png",
      "/products/t-shirt/Screenshot_47.png",
      "/products/t-shirt/Screenshot_48.png",
      "/products/t-shirt/Screenshot_49.png",
      "/products/t-shirt/Screenshot_50.png",
      "/products/t-shirt/Screenshot_51.png",
      "/products/t-shirt/Screenshot_52.png",
    ],
    category: "clothing",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "2XL"],
    material: "Хлопок 92%, эластан 8%, плотность 200 г/м²; джерси",
    isNew: true,
    minQuantity: 1,
    productionTime: "7-10 рабочих дней",
  },
  {
    id: 8,
    title: "Детский коврик",
    description: "Детский круглый коврик – прекрасный аксессуар для комнаты юного мечтателя! Мягкая поверхность с ярким изображением сказочного дракона создаёт волшебную атмосферу для игр и отдыха. Противоскользящая основа надежно фиксирует коврик на полу. Подходит для активных детей, обеспечивая устойчивость и защиту от падений.",
    price: 0,
    image: "/products/baby/image.jpg",
    category: "accessories",
    material: "Полиэстер",
    sizes: ["80х80 см"],
    isNew: true,
    minQuantity: 1,
  },
  {
    id: 9,
    title: "Лежанка для животных",
    description: "Мягкая и стильная лежанка станет идеальным местом для отдыха вашего питомца и впишется в любой интерьер. Лежанка подходит для кошек и собак малых пород, благодаря водоотталкивающему дну, гипоаллергенному наполнителю и простому уходу станет прекрасным вариантом для щенков и котят. Лежанку можно стирать в машинке, при стирке не садится и не теряет форму.",
    price: 0,
    image: "/products/couch/1.jpg",
    images: ["/products/couch/1.jpg", "/products/couch/2.jpg"],
    category: "accessories",
    sizes: ["48х40х15 см"],
    isNew: true,
    minQuantity: 1,
  },
  {
    id: 10,
    title: "Поводок-рулетка для животных",
    description: "Удобный и надежный поводок-рулетка для выгула собак мелких и средних пород. Эргономичная ручка удобно лежит в руке, а надежный механизм фиксации позволяет легко регулировать длину поводка.",
    price: 0,
    image: "/products/leash/preview.jpg",
    images: ["/products/leash/preview.jpg", "/products/leash/1.jpg", "/products/leash/2.jpg"],
    category: "accessories",
    isNew: true,
    minQuantity: 1,
  },
];
