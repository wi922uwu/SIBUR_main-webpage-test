"use client";

import { useEffect, useMemo, useState } from "react";
import { Product } from "@/data/catalog";
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";
import { IoCloseOutline, IoCheckmarkCircle } from "react-icons/io5";
import { useCart } from "@/context/CartContext";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const images = useMemo(
    () => (product?.images && product.images.length > 0 ? product.images : product ? [product.image] : []),
    [product]
  );
  const [activeImage, setActiveImage] = useState<string | null>(images[0] ?? null);
  
  const { addToCart } = useCart();

  useEffect(() => {
    setActiveImage(images[0] ?? null);
  }, [images]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      setError("Пожалуйста, выберите размер");
      return;
    }
    
    setError("");
    addToCart(product, quantity, selectedSize || undefined);
    
    // Show success message
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedSize(null);
      setQuantity(1);
      onClose();
    }, 1500);
  };

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:h-auto animate-in fade-in zoom-in duration-300">
        
        {/* Success Overlay */}
        {showSuccess && (
          <div className="absolute inset-0 bg-white/95 z-50 flex items-center justify-center">
            <div className="text-center">
              <IoCheckmarkCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <p className="text-xl font-bold text-brand-dark">Добавлено в корзину!</p>
            </div>
          </div>
        )}
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-colors shadow-sm"
        >
          <IoCloseOutline className="w-6 h-6 text-gray-500" />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-1/2 bg-gray-50 relative aspect-square md:aspect-auto h-64 md:h-auto">
          {activeImage && (
            <Image
              src={activeImage}
              alt={product.title}
              fill
              className="object-contain p-6 md:p-8"
            />
          )}
          {product.isNew && (
            <span className="absolute top-4 left-4 md:top-6 md:left-6 bg-brand-light text-white text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1 rounded-full">
              NEW
            </span>
          )}
          {product.isHit && (
            <span className="absolute top-4 left-4 md:top-6 md:left-6 bg-accent-orange text-white text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1 rounded-full">
              HIT
            </span>
          )}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 flex gap-2 overflow-x-auto">
              {images.map((image) => (
                <button
                  key={image}
                  onClick={() => setActiveImage(image)}
                  className={`relative shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg border bg-white/90 ${
                    activeImage === image ? "border-brand-primary" : "border-gray-200"
                  }`}
                  aria-label="Показать фото товара"
                  type="button"
                >
                  <Image src={image} alt={product.title} fill className="object-contain p-1" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info Side */}
        <div className="w-full md:w-1/2 p-5 md:p-8 flex flex-col overflow-y-auto max-h-[calc(90vh-16rem)] md:max-h-[80vh]">
          <div className="mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-1 md:mb-2 leading-tight">
              {product.title}
            </h2>
            <div className="text-xs md:text-sm text-text-secondary">
              Артикул: {product.id.toString().padStart(6, "0")}
            </div>
          </div>

          <div className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 md:mb-6">
            {formatPrice(product.price)}
          </div>

          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-4 md:mb-6">
              <div className="text-sm font-bold text-brand-dark mb-2 md:mb-3">Размер:</div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setError("");
                    }}
                    className={`min-w-[40px] h-10 md:min-w-[48px] md:h-12 rounded-lg border flex items-center justify-center text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "border-brand-primary bg-brand-primary text-white"
                        : "border-gray-200 text-text-primary hover:border-brand-primary/50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </div>
          )}

          {/* Description */}
          <div className="mb-6 md:mb-8 flex-grow">
            <div className="text-sm font-bold text-brand-dark mb-2">Описание:</div>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
              {product.description}
            </p>
            {product.material && (
               <p className="text-xs md:text-sm text-text-secondary mt-2">
                 <span className="font-medium">Состав:</span> {product.material}
               </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 border-t border-gray-100">
            {/* Quantity */}
            <div className="flex items-center border border-gray-200 rounded-lg h-10 md:h-12">
              <button 
                onClick={decrement}
                className="w-8 md:w-10 h-full flex items-center justify-center text-gray-500 hover:text-brand-dark transition-colors"
              >
                -
              </button>
              <div className="w-8 md:w-10 text-center text-sm md:text-base font-bold text-brand-dark">
                {quantity}
              </div>
              <button 
                onClick={increment}
                className="w-8 md:w-10 h-full flex items-center justify-center text-gray-500 hover:text-brand-dark transition-colors"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="flex-1 h-10 md:h-12 bg-brand-primary hover:bg-[#007A82] text-white text-sm md:text-base font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2"
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
