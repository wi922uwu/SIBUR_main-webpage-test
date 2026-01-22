"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { IoTrashOutline, IoAddOutline, IoRemoveOutline, IoCartOutline } from "react-icons/io5";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-white flex flex-col">
        <Header />
        
        <div className="bg-bg-grey py-3 border-b border-gray-100">
          <div className="container mx-auto px-4 text-xs text-text-secondary">
            Главная / Корзина
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-16 flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <IoCartOutline className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Корзина пуста
            </h1>
            <p className="text-text-secondary mb-8">
              Добавьте товары из каталога, чтобы оформить заказ
            </p>
            <Link
              href="/catalog"
              className="inline-block bg-brand-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-[#007A82] transition-colors"
            >
              Перейти в каталог
            </Link>
          </div>
        </div>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-bg-grey py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 text-xs text-text-secondary">
          Главная / Корзина
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 flex-grow">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-brand-dark">
            Корзина
          </h1>
          <button
            onClick={clearCart}
            className="text-sm text-red-500 hover:text-red-700 transition-colors flex items-center gap-2"
          >
            <IoTrashOutline className="w-5 h-5" />
            <span className="hidden md:inline">Очистить корзину</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div
                key={`${item.product.id}-${item.selectedSize || "no-size"}-${index}`}
                className="bg-white border border-gray-100 rounded-xl p-4 md:p-6 flex gap-4"
              >
                {/* Product Image */}
                <div className="relative w-20 h-20 md:w-28 md:h-28 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={item.product.image}
                    alt={item.product.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-grow">
                  <h3 className="font-bold text-base md:text-lg text-brand-dark mb-1 line-clamp-2">
                    {item.product.title}
                  </h3>
                  {item.selectedSize && (
                    <p className="text-xs md:text-sm text-text-secondary mb-2">
                      Размер: <span className="font-medium">{item.selectedSize}</span>
                    </p>
                  )}
                  <div className="text-lg md:text-xl font-bold text-brand-primary">
                    {formatPrice(item.product.price)}
                  </div>
                </div>

                {/* Quantity Controls & Remove */}
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Удалить"
                  >
                    <IoTrashOutline className="w-5 h-5" />
                  </button>

                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.quantity - 1,
                          item.selectedSize
                        )
                      }
                      className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-brand-dark transition-colors"
                    >
                      <IoRemoveOutline className="w-4 h-4" />
                    </button>
                    <div className="w-10 text-center text-sm font-bold text-brand-dark">
                      {item.quantity}
                    </div>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.quantity + 1,
                          item.selectedSize
                        )
                      }
                      className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-brand-dark transition-colors"
                    >
                      <IoAddOutline className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-bg-grey rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-brand-dark mb-6">Итого</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Товары ({items.reduce((sum, item) => sum + item.quantity, 0)})</span>
                  <span className="font-medium">{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Доставка</span>
                  <span className="font-medium text-green-600">Бесплатно</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-lg font-bold text-brand-dark">Итого:</span>
                  <span className="text-2xl font-bold text-brand-primary">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
              </div>

              <button className="w-full bg-brand-primary text-white py-3 rounded-lg font-bold hover:bg-[#007A82] transition-colors shadow-lg mb-3">
                Оформить заказ
              </button>

              <Link
                href="/catalog"
                className="block w-full text-center text-brand-primary font-medium py-2 hover:underline"
              >
                Продолжить покупки
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
