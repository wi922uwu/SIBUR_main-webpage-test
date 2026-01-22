"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { 
  IoPersonOutline, 
  IoMailOutline, 
  IoCallOutline,
  IoLocationOutline,
  IoCartOutline,
  IoTimeOutline,
  IoCheckmarkCircle,
  IoClose
} from "react-icons/io5";
import { formatPrice } from "@/utils/formatPrice";
import { useAuth } from "@/context/AuthContext";

// Mock orders data
const ORDERS = [
  {
    id: "#0001234",
    date: "20 января 2026",
    status: "delivered",
    total: 15400,
    items: 3,
  },
  {
    id: "#0001235",
    date: "18 января 2026",
    status: "processing",
    total: 2200,
    items: 1,
  },
  {
    id: "#0001236",
    date: "10 января 2026",
    status: "cancelled",
    total: 5500,
    items: 2,
  },
];

// Mock statistics
const STATS = {
  totalOrders: 12,
  totalSpent: 125000,
  avgOrderValue: 10416,
  savedItems: 8,
};

const STATUS_CONFIG = {
  delivered: {
    label: "Доставлен",
    color: "bg-green-50 text-green-700 border-green-200",
    icon: IoCheckmarkCircle,
  },
  processing: {
    label: "В обработке",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    icon: IoTimeOutline,
  },
  cancelled: {
    label: "Отменён",
    color: "bg-gray-50 text-gray-600 border-gray-200",
    icon: IoClose,
  },
};

export default function ProfilePage() {
  const router = useRouter();
  const { user, isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-grow bg-bg-grey py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2">Личный кабинет</h1>
            <p className="text-text-secondary">Управляйте заказами и настройками профиля</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Profile Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Card */}
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <IoPersonOutline className="w-8 h-8 text-brand-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-brand-dark">{user.name}</h2>
                    <p className="text-sm text-text-secondary">Клиент с {user.registeredAt}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <IoMailOutline className="w-5 h-5 text-text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-text-secondary mb-0.5">Email</p>
                      <p className="text-sm text-brand-dark">{user.email}</p>
                    </div>
                  </div>

                  {user.phone && (
                    <div className="flex items-start gap-3">
                      <IoCallOutline className="w-5 h-5 text-text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-text-secondary mb-0.5">Телефон</p>
                        <p className="text-sm text-brand-dark">{user.phone}</p>
                      </div>
                    </div>
                  )}

                  {user.address && (
                    <div className="flex items-start gap-3">
                      <IoLocationOutline className="w-5 h-5 text-text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-text-secondary mb-0.5">Адрес доставки</p>
                        <p className="text-sm text-brand-dark">{user.address}</p>
                      </div>
                    </div>
                  )}
                </div>

                <button className="w-full mt-6 py-2.5 border border-brand-primary text-brand-primary font-medium rounded-lg hover:bg-brand-primary hover:text-white transition-colors">
                  Редактировать профиль
                </button>
              </div>

              {/* Statistics Card */}
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-brand-dark mb-4">Статистика</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">Всего заказов</span>
                    <span className="text-lg font-bold text-brand-dark">{STATS.totalOrders}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">Общая сумма</span>
                    <span className="text-lg font-bold text-brand-dark">{formatPrice(STATS.totalSpent)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">Средний чек</span>
                    <span className="text-lg font-bold text-brand-dark">{formatPrice(STATS.avgOrderValue)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">Отложено товаров</span>
                    <span className="text-lg font-bold text-brand-dark">{STATS.savedItems}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Orders */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-brand-dark">Мои заказы</h2>
                  <button className="text-sm text-brand-primary hover:underline">
                    Показать все
                  </button>
                </div>

                {/* Orders List */}
                <div className="space-y-4">
                  {ORDERS.map((order) => {
                    const statusConfig = STATUS_CONFIG[order.status as keyof typeof STATUS_CONFIG];
                    const StatusIcon = statusConfig.icon;

                    return (
                      <div
                        key={order.id}
                        className="border border-gray-100 rounded-lg p-4 hover:border-brand-primary/30 transition-all cursor-pointer"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          {/* Order Info */}
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-bold text-brand-dark">Заказ {order.id}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusConfig.color} flex items-center gap-1`}>
                                <StatusIcon className="w-3.5 h-3.5" />
                                {statusConfig.label}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-text-secondary">
                              <span className="flex items-center gap-1">
                                <IoTimeOutline className="w-4 h-4" />
                                {order.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <IoCartOutline className="w-4 h-4" />
                                {order.items} {order.items === 1 ? "товар" : "товара"}
                              </span>
                            </div>
                          </div>

                          {/* Order Total */}
                          <div className="flex items-center justify-between md:justify-end gap-4">
                            <div className="text-right">
                              <p className="text-sm text-text-secondary mb-0.5">Сумма заказа</p>
                              <p className="text-xl font-bold text-brand-dark">{formatPrice(order.total)}</p>
                            </div>
                            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-brand-dark hover:border-brand-primary hover:text-brand-primary transition-colors">
                              Детали
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Empty State (if no orders) */}
                {ORDERS.length === 0 && (
                  <div className="text-center py-12">
                    <IoCartOutline className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">
                      У вас пока нет заказов
                    </h3>
                    <p className="text-text-secondary mb-6">
                      Начните покупки в нашем каталоге
                    </p>
                    <button className="px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-[#007A82] transition-colors">
                      Перейти в каталог
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
