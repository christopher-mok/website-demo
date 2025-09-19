"use client";


import React from "react";
import Image from "next/image";
import { useCart } from "./CartContext";

export const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { cartItems, addToCart } = useCart();

  const amountInCart = cartItems[id] || 0;

  return (
    <div className="product">
      <Image src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>

      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart{amountInCart > 0 ? ` (${amountInCart})` : ""}
      </button>
    </div>
  );
};