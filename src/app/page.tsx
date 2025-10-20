"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ یہ لائن add کرو

interface Product {
  id: number;
  name: string;
  image: string;
  priceUSD: number;
}

const products: Product[] = [
  { id: 1, name: "Royal Diamond Ring", image: "/h1.jpg", priceUSD: 299 },
  { id: 2, name: "Elegant Diamond Necklace", image: "/h2.jpg", priceUSD: 450 },
  { id: 3, name: "Luxury Gold Bracelet", image: "/h3.jpg", priceUSD: 380 },
  { id: 4, name: "Royal Sapphire Earrings", image: "/h5.jpg", priceUSD: 520 },
];

export default function HomePage() {
  const usdToPKR = 277; // 💵 Conversion rate

  return (
    <main style={{ padding: "40px 20px", textAlign: "center" }}>
      <h1>💎 Welcome to Royal Diamond Jewelry</h1>
      <p style={{ marginTop: "10px", opacity: "0.8" }}>
        Explore our premium diamond collection with prices in USD & PKR
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          marginTop: "60px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: "linear-gradient(180deg, #111, #000)",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 0 20px rgba(255,255,255,0.1)",
              transition: "0.4s",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "15px",
              }}
            />
            <h3>{product.name}</h3>
            <p style={{ marginTop: "8px", fontSize: "1.1rem" }}>
              💰 ${product.priceUSD.toFixed(2)}{" "}
              <span style={{ color: "#40e0d0" }}>
                (PKR ≈ {(product.priceUSD * usdToPKR).toLocaleString("en-PK")})
              </span>
            </p>
            <Link href={`/products/${product.id}`}>
              <button style={{ marginTop: "15px" }}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
