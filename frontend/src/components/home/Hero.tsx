"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const BANNERS = [
  {
    id: 1,
    title: "Новогодние подарки",
    subtitle: "по приятной цене",
    image: "/banner/banner169.png",
    buttonText: "Купить",
    theme: "dark"
  },
  {
    id: 2,
    title: "ЭКО-Линейка",
    subtitle: "С заботой о природе",
    image: "/banner/banner169.png",
    buttonText: "Смотреть",
    theme: "green"
  },
  {
    id: 3,
    title: "Спорт и достижения",
    subtitle: "Коллекция спортивного мерча",
    image: "/banner/banner169.png",
    buttonText: "Выбрать",
    theme: "blue"
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-04-01T00:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-brand-dark group">
      {/* 16:9 Aspect Ratio for full visibility without cropping */}
      <div className="relative w-full aspect-[16/9] max-h-[80vh]">
        {BANNERS.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                {/* Fallback gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${
                    banner.theme === 'dark' ? 'from-[#001E2B] to-[#00313C]' :
                    banner.theme === 'green' ? 'from-[#006A70] to-[#008C95]' :
                    'from-[#00313C] to-[#008DFC]'
                }`} />
                
                {banner.image && (
                    <Image 
                        src={banner.image} 
                        alt={banner.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                )}
                
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Content Centered - Countdown */}
            <div className="relative z-20 text-center text-white max-w-5xl px-4 flex flex-col items-center justify-center h-full pb-8 md:pb-16">
              <h2 
                className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-10 md:mb-16 tracking-widest drop-shadow-xl uppercase text-center"
                style={{ color: '#FFFFFF' }}
              >
                ДО НАЧАЛА СЕЗОНА
              </h2>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <div className="flex flex-col items-center">
                  <span className="text-5xl sm:text-7xl md:text-8xl font-bold font-mono text-white drop-shadow-xl leading-none">{timeLeft.days}</span>
                  <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] mt-2 md:mt-4 font-bold text-white drop-shadow-md">Дней</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-5xl sm:text-7xl md:text-8xl font-bold font-mono text-white drop-shadow-xl leading-none">{timeLeft.hours.toString().padStart(2, '0')}</span>
                  <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] mt-2 md:mt-4 font-bold text-white drop-shadow-md">Часов</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-5xl sm:text-7xl md:text-8xl font-bold font-mono text-white drop-shadow-xl leading-none">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                  <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] mt-2 md:mt-4 font-bold text-white drop-shadow-md">Минут</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-5xl sm:text-7xl md:text-8xl font-bold font-mono text-white drop-shadow-xl leading-none">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] mt-2 md:mt-4 font-bold text-white drop-shadow-md">Секунд</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Индикаторы (точки по центру) */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {BANNERS.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`rounded-full transition-all duration-300 shadow-md ${
                        index === currentSlide 
                        ? "w-8 h-2 bg-brand-primary" 
                        : "w-2 h-2 bg-white/50 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
        
        {/* Navigation Arrows (visible on hover) - Hidden on mobile to save space */}
        <button 
            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
            onClick={() => setCurrentSlide(prev => (prev - 1 + BANNERS.length) % BANNERS.length)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>
        <button 
            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
            onClick={() => setCurrentSlide(prev => (prev + 1) % BANNERS.length)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </button>
      </div>
    </section>
  );
};
