"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IoMailOutline, IoLockClosedOutline, IoPersonOutline, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        // Login
        const success = await login(formData.email, formData.password);
        if (success) {
          router.push("/profile");
        }
      } else {
        // Register
        if (formData.password !== formData.confirmPassword) {
          alert("Пароли не совпадают");
          setIsLoading(false);
          return;
        }
        
        const success = await register(formData.name, formData.email, formData.password);
        if (success) {
          router.push("/profile");
        }
      }
    } catch (error) {
      console.error("Auth error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center px-4 py-12 bg-gradient-to-b from-white to-bg-grey">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-brand-dark mb-2">
              {isLogin ? "Вход в аккаунт" : "Регистрация"}
            </h1>
            <p className="text-text-secondary">
              {isLogin 
                ? "Войдите, чтобы отслеживать заказы и получать бонусы" 
                : "Создайте аккаунт для удобных покупок"}
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name field (only for registration) */}
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-2">
                    Имя
                  </label>
                  <div className="relative">
                    <IoPersonOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                      placeholder="Иван Иванов"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">
                  Email
                </label>
                <div className="relative">
                  <IoMailOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Password field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-brand-dark mb-2">
                  Пароль
                </label>
                <div className="relative">
                  <IoLockClosedOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-dark transition-colors"
                  >
                    {showPassword ? (
                      <IoEyeOffOutline className="w-5 h-5" />
                    ) : (
                      <IoEyeOutline className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password (only for registration) */}
              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-brand-dark mb-2">
                    Подтвердите пароль
                  </label>
                  <div className="relative">
                    <IoLockClosedOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                      placeholder="••••••••"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {/* Remember me & Forgot password (only for login) */}
              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary/20"
                    />
                    <span className="text-text-secondary">Запомнить меня</span>
                  </label>
                  <Link href="/forgot-password" className="text-brand-primary hover:underline">
                    Забыли пароль?
                  </Link>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-[#007A82] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Загрузка..." : isLogin ? "Войти" : "Зарегистрироваться"}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-text-secondary">или</span>
              </div>
            </div>

            {/* Toggle between login/register */}
            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-text-secondary hover:text-brand-primary transition-colors"
              >
                {isLogin ? (
                  <>
                    Нет аккаунта? <span className="font-semibold text-brand-primary">Зарегистрируйтесь</span>
                  </>
                ) : (
                  <>
                    Уже есть аккаунт? <span className="font-semibold text-brand-primary">Войдите</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Additional info */}
          <p className="text-center text-xs text-text-secondary mt-6">
            Регистрируясь, вы соглашаетесь с{" "}
            <Link href="/terms" className="text-brand-primary hover:underline">
              условиями использования
            </Link>{" "}
            и{" "}
            <Link href="/privacy" className="text-brand-primary hover:underline">
              политикой конфиденциальности
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
