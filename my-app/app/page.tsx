import React from "react";
import { PRODUCTS } from "../products";
import { Product } from "../components/Product";

export default function Home() {
  return (
    <div className="main-page">
      <section className="py-24">
        <div className="container">
          <h1 className="text-3xl font-bold">Website</h1>
        </div>
      </section>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
      <button className="addToCartButton"> Add To Cart</button>
    </div>
  );
}