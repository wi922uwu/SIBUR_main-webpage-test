"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IoMailOutline, IoArrowBack, IoCheckmarkCircle } from "react-icons/io5";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center px-4 py-12 bg-gradient-to-b from-white to-bg-grey">
        <div className="w-full max-w-md">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-brand-dark mb-2">
                  Восстановление пароля
                </h1>
                <p className="text-text-secondary">
                  Введите email, указанный при регистрации
                </p>
              </div>

              {/* Form */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <IoMailOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-[#007A82] transition-colors shadow-sm"
                  >
                    Отправить инструкции
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link 
                    href="/login" 
                    className="inline-flex items-center gap-2 text-text-secondary hover:text-brand-primary transition-colors"
                  >
                    <IoArrowBack className="w-4 h-4" />
                    Вернуться к входу
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Success Message */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-4">
                  <IoCheckmarkCircle className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-brand-dark mb-2">
                  Проверьте почту
                </h2>
                <p className="text-text-secondary mb-6">
                  Мы отправили инструкции по восстановлению пароля на <strong>{email}</strong>
                </p>
                <p className="text-sm text-text-secondary mb-6">
                  Письмо может прийти в течение 5-10 минут. Не забудьте проверить папку "Спам".
                </p>
                <Link 
                  href="/login"
                  className="inline-block px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-[#007A82] transition-colors"
                >
                  Вернуться к входу
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
