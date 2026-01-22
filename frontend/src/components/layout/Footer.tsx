"use client";

import Link from "next/link";
import { FaVk, FaTelegramPlane } from "react-icons/fa"; // Social icons

const FOOTER_LINKS = [
  {
    title: "Интернет-магазин",
    links: [
      { label: "Каталог", href: "/catalog" },
      { label: "Акции", href: "/promo" },
      { label: "Новинки", href: "/new" },
      { label: "Бренды", href: "/brands" },
    ],
  },
  {
    title: "Покупателям",
    links: [
      { label: "Доставка и оплата", href: "/delivery" },
      { label: "Обмен и возврат", href: "/return" },
      { label: "Таблица размеров", href: "/sizes" },
      { label: "Подарочные сертификаты", href: "/certificates" },
    ],
  },
  {
    title: "О компании",
    links: [
      { label: "Контакты", href: "/contacts" },
      { label: "Новости", href: "/news" },
      { label: "Вакансии", href: "/careers" },
      { label: "Реквизиты", href: "/details" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo & Socials */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-xl md:text-2xl font-bold text-white tracking-tight">
                SIBUR <span className="text-brand-primary">STORE</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Корпоративный магазин одежды и сувениров.
              <br />
              Качество, стиль и экологичность.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
                aria-label="VK"
              >
                <FaVk className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
                aria-label="Telegram"
              >
                <FaTelegramPlane className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6">{section.title}</h4>
              <ul className="space-y-3 md:space-y-4 text-sm text-gray-400">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-brand-primary transition-colors block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 text-center md:text-left">
          <div>
            © 2025 ПАО «СИБУР Холдинг». Все права защищены.
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Публичная оферта
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
