import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";

interface ProductCardProps {
  title: string;
  description?: string;
  price: number;
  image: string;
  badge?: {
    text: string;
    color?: string; // e.g. "bg-green-500"
  };
}

export const ProductCard = ({
  title,
  description,
  price,
  image,
  badge,
}: ProductCardProps) => {
  return (
    <div className="group flex flex-col items-center text-center cursor-pointer h-full">
      {/* Image Container */}
      <div className="relative w-full aspect-square bg-[#F9F9F9] rounded-xl overflow-hidden mb-3 md:mb-4 hover:shadow-lg transition-shadow duration-300">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <div className={`absolute top-2 right-2 md:top-3 md:right-3 w-8 h-8 md:w-10 md:h-10 rounded-full ${badge.color || 'bg-brand-success'} text-white text-[8px] md:text-[10px] font-bold flex items-center justify-center shadow-md`}>
            {badge.text}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow w-full">
        <h3 className="text-xs md:text-sm font-bold text-brand-dark mb-2 line-clamp-2 min-h-[32px] md:min-h-[40px] leading-tight group-hover:text-brand-primary transition-colors">
          {title}
        </h3>
        {/* Description removed from card view for uniformity */}
        
        <div className="text-sm md:text-base font-bold text-brand-dark mt-auto pt-2 border-t border-gray-100 w-full flex justify-between items-center">
          <span>{formatPrice(price)}</span>
          <span className="text-[10px] text-brand-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
            Подробнее →
          </span>
        </div>
      </div>
    </div>
  );
};
