"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState({}); // { [id]: qty }

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

    const decrement = (id) => {
    setCartItems((prev) => {
      const next = { ...prev };
      if (!next[id]) return next;
      if (next[id] > 1) next[id] -= 1;
      else delete next[id];
      return next;
    });
  };

  const removeItem = (id) => {
    setCartItems((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

    const clearCart = () => setCartItems({});

  const value = useMemo(
    () => ({ cartItems, addToCart, decrement, removeItem, clearCart }),
    [cartItems]
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}