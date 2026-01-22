"use client";

import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

interface FiltersProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

const CATEGORIES = [
  { id: "clothing", name: "Одежда" },
  { id: "electronics", name: "Электроника" },
  { id: "accessories", name: "Аксессуары" },
  { id: "eco", name: "ЭКО-Товары" },
];

export const FilterSidebar = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
}: FiltersProps) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
      {/* Categories */}
      <div className="border-b border-gray-100 pb-6">
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="flex items-center justify-between w-full font-bold text-brand-dark mb-4"
        >
          <span>Категории</span>
          {isCategoryOpen ? <IoChevronUp /> : <IoChevronDown />}
        </button>
        
        {isCategoryOpen && (
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`text-sm transition-colors ${
                  selectedCategory === null
                    ? "text-brand-primary font-bold"
                    : "text-text-secondary hover:text-brand-primary"
                }`}
              >
                Все товары
              </button>
            </li>
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-sm transition-colors ${
                    selectedCategory === cat.id
                      ? "text-brand-primary font-bold"
                      : "text-text-secondary hover:text-brand-primary"
                  }`}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Price Range */}
      <div className="border-b border-gray-100 pb-6">
         <button
          onClick={() => setIsPriceOpen(!isPriceOpen)}
          className="flex items-center justify-between w-full font-bold text-brand-dark mb-4"
        >
          <span>Цена</span>
          {isPriceOpen ? <IoChevronUp /> : <IoChevronDown />}
        </button>
        
        {isPriceOpen && (
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-gray-400">от</span>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-full pl-8 pr-2 py-2 border border-gray-200 rounded-md text-sm focus:border-brand-primary outline-none"
                />
              </div>
              <div className="text-gray-400">-</div>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-gray-400">до</span>
                 <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full pl-8 pr-2 py-2 border border-gray-200 rounded-md text-sm focus:border-brand-primary outline-none"
                />
              </div>
            </div>
            {/* Range Slider could go here */}
          </div>
        )}
      </div>
    </aside>
  );
};
