"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Product } from "@/data/catalog";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number, selectedSize?: string) => void;
  removeFromCart: (productId: number, selectedSize?: string) => void;
  updateQuantity: (productId: number, quantity: number, selectedSize?: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to load cart:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, quantity: number, selectedSize?: string) => {
    setItems((prevItems) => {
      // Check if item already exists (same product and size)
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === selectedSize
      );

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      } else {
        // Add new item
        return [...prevItems, { product, quantity, selectedSize }];
      }
    });
  };

  const removeFromCart = (productId: number, selectedSize?: string) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(item.product.id === productId && item.selectedSize === selectedSize)
      )
    );
  };

  const updateQuantity = (productId: number, quantity: number, selectedSize?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedSize);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId && item.selectedSize === selectedSize
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
