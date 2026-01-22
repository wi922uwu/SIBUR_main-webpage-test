"use client";

import Link from "next/link";
import { useState } from "react";
import { IoSearchOutline, IoCartOutline, IoMenuOutline, IoCloseOutline, IoChevronDown, IoPersonOutline } from "react-icons/io5";
import { BiCollection } from "react-icons/bi";
import { FiGift } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

const TOP_MENU = [
  { label: "Доставка", href: "/delivery" },
  { label: "Подарочный сертификат", href: "/certificate", icon: FiGift },
  { label: "Обмен и возврат", href: "/return" },
  { label: "Полезное", href: "/useful" },
  { label: "Помощь", href: "/help" },
  { label: "Контакты", href: "/contacts" },
  { label: "СМИ о нас", href: "/press" },
];

const MAIN_MENU = [
  { 
    label: "Коллекции", 
    href: "/collections", 
    icon: BiCollection, 
    highlight: true,
    submenu: [
      { label: "Все коллекции", href: "/collections" },
      { label: "Спортивные товары", href: "/collections" },
      { label: "Сумки и рюкзаки", href: "/collections" },
      { label: "Товары для дома", href: "/collections" },
      { label: "Электроника", href: "/collections" },
      { label: "Посуда", href: "/collections" },
      { label: "Письменные принадлежности", href: "/collections" },
      { label: "Лимитированные коллекции", href: "/collections" },
      { label: "ЭКО-товары", href: "/collections" },
    ]
  },
  { label: "ЭКО-Линейка Vivilen", href: "/vivilen" },
  { label: "Одежда и обувь", href: "/clothing" },
  { label: "Электроника", href: "/electronics" },
  { label: "Детям", href: "/kids" },
  { label: "Подарки коллегам", href: "/gifts", icon: FiGift, highlight: true, color: "text-purple-600" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { isLoggedIn, user, logout } = useAuth();
  const cartItemsCount = getTotalItems();

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-[#F9FAFB] border-b border-gray-100">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs text-gray-500">
          <nav className="flex items-center gap-6">
            {TOP_MENU.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-brand-primary transition-colors flex items-center gap-1.5"
              >
                {item.icon && <item.icon className="w-3.5 h-3.5" />}
                {item.label}
              </Link>
            ))}
          </nav>
          {isLoggedIn ? (
            <div 
              className="relative"
              onMouseEnter={() => setIsUserMenuOpen(true)}
              onMouseLeave={() => setIsUserMenuOpen(false)}
            >
              <button className="flex items-center gap-2 hover:text-brand-primary transition-colors font-medium">
                <IoPersonOutline className="w-4 h-4" />
                {user?.name || "Мой аккаунт"}
                <IoChevronDown className="w-3 h-3" />
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-lg py-2 z-50">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-brand-dark hover:bg-gray-50"
                  >
                    Личный кабинет
                  </Link>
                  <Link
                    href="/profile#orders"
                    className="block px-4 py-2 text-sm text-brand-dark hover:bg-gray-50"
                  >
                    Мои заказы
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                  >
                    Выйти
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login" className="hover:text-brand-primary transition-colors font-medium">
              Войти
            </Link>
          )}
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 -ml-2 text-brand-dark"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <IoMenuOutline className="w-8 h-8" />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="text-xl md:text-2xl font-bold text-brand-primary tracking-tight flex items-center gap-1">
             SIBUR <span className="text-brand-dark">STORE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {MAIN_MENU.map((item) => (
            <div 
              key={item.label} 
              className="relative"
              onMouseEnter={() => item.submenu && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-2 whitespace-nowrap transition-colors py-2 ${
                  item.color || "text-brand-dark hover:text-brand-primary"
                }`}
              >
                {item.icon && <item.icon className="w-5 h-5" />}
                <span className={item.highlight ? "font-bold" : ""}>{item.label}</span>
                {item.submenu && <IoChevronDown className="w-4 h-4" />}
              </Link>

              {/* Dropdown Menu */}
              {item.submenu && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-brand-primary shadow-xl rounded-b-lg overflow-hidden animate-in slide-in-from-top-2 duration-200">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.label}
                      href={subitem.href}
                      className="block px-6 py-3 text-white hover:bg-[#007A82] transition-colors border-b border-white/10 last:border-0"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Search">
            <IoSearchOutline className="w-6 h-6 text-brand-dark" />
          </button>
          <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative" aria-label="Cart">
            <IoCartOutline className="w-6 h-6 text-brand-dark" />
            {cartItemsCount > 0 && (
              <span className="absolute top-1 right-0 bg-accent-orange text-white text-[10px] min-w-[16px] h-4 px-1 flex items-center justify-center rounded-full font-bold">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 md:hidden backdrop-blur-sm animate-in fade-in">
          <div className="absolute top-0 left-0 w-[80%] max-w-sm h-full bg-white shadow-2xl overflow-y-auto animate-in slide-in-from-left duration-300">
            {/* Mobile Menu Header */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="font-bold text-xl text-brand-primary">Меню</div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-gray-500"
              >
                <IoCloseOutline className="w-8 h-8" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="p-4 space-y-6">
              <nav className="flex flex-col gap-4">
                {MAIN_MENU.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 text-base font-medium ${
                        item.color || "text-brand-dark"
                      }`}
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      {item.label}
                    </Link>
                    
                    {/* Mobile Submenu */}
                    {item.submenu && (
                      <div className="ml-8 mt-2 space-y-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-sm text-text-secondary hover:text-brand-primary"
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              
              <div className="h-px bg-gray-100 w-full" />
              
              <nav className="flex flex-col gap-3 text-sm text-gray-500">
                {TOP_MENU.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    {item.label}
                  </Link>
                ))}
                {isLoggedIn ? (
                  <>
                    <Link 
                      href="/profile" 
                      className="text-brand-primary font-medium mt-2 flex items-center gap-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <IoPersonOutline className="w-5 h-5" />
                      Личный кабинет
                    </Link>
                    <button
                      className="text-red-600 font-medium flex items-center gap-2 mt-2 text-sm"
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Выйти
                    </button>
                  </>
                ) : (
                  <Link 
                    href="/login" 
                    className="text-brand-primary font-medium mt-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Войти в аккаунт
                  </Link>
                )}
              </nav>
            </div>
          </div>
          
          {/* Close on click outside */}
          <div className="absolute inset-0 z-[-1]" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};
