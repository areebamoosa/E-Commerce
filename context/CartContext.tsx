"use client";

import { createContext, useState, useEffect } from "react";

import type { ProductProps } from "@/types";

type CartItem = ProductProps & {
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: ProductProps) => void;
  removeFromCart: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};


export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cart");
      if (saved) setCart(JSON.parse(saved));
    } catch (error) {
      console.error("Error loading cart:", error);
    }
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cart]);

  // Adding items
  const addToCart = (product: ProductProps) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      // If product exists already the it increases it's quantity by 1
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // If not it keeps the previous items annd then adds the new product with the quantity 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Removing items from the cart
  const removeFromCart = (id: number) => {
    // This only keeps the items whose id is not equal to the id we're removing
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Decreasing Quantity
  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
