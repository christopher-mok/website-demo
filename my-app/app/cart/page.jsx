"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";
import { PRODUCTS } from "@/products";

export default function CartPage() {
  const { cartItems, addToCart, decrement, removeItem, clearCart } = useCart();

  const items = useMemo(
    () => PRODUCTS.filter((p) => cartItems[p.id] > 0),
    [cartItems]
  );

  const subtotal = items.reduce(
    (sum, p) => sum + p.price * (cartItems[p.id] || 0),
    0
  );

  if (items.length === 0) {
    return (
      <main className="container mx-auto py-16">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <p className="mb-6">Your cart is empty.</p>
        <Link href="/" className="underline">Continue shopping →</Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="cart-list space-y-6">
        {items.map((p) => {
          const qty = cartItems[p.id];
          const line = p.price * qty;
          return (
            <div key={p.id} className="cart-row flex items-center gap-6 border-b pb-6">
              <img src={p.productImage} alt={p.productName} className="w-28 h-auto rounded" />
              <div className="flex-1">
                <div className="font-semibold">{p.productName}</div>
                <div className="text-sm text-gray-500">${p.price}</div>

                <div className="mt-3 flex items-center gap-3">
                  <button className="qty-btn" onClick={() => decrement(p.id)}>-</button>
                  <span className="min-w-6 text-center font-medium">{qty}</span>
                  <button className="qty-btn" onClick={() => addToCart(p.id)}>+</button>

                  <button className="ml-4 text-sm underline" onClick={() => removeItem(p.id)}>
                    remove
                  </button>
                </div>
              </div>

              <div className="font-semibold">${line.toFixed(2)}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button className="text-sm underline" onClick={clearCart}>Clear cart</button>

        <div className="text-right">
          <div className="text-lg">Subtotal: <b>${subtotal.toFixed(2)}</b></div>
          <div className="mt-3 flex gap-3">
            <Link href="/" className="pill-btn-outline">Continue shopping</Link>
            <Link href="/checkout" className="pill-btn">Checkout</Link>
          </div>
        </div>
      </div>
    </main>
  );
}