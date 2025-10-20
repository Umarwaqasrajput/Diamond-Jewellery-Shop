// ✅ File: src/components/ProductCard.tsx
"use client";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

export default function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <div className="product-card">
      <Image src={image} alt={title} width={300} height={300} />
      <h3>{title}</h3>
      <p>{price}</p>
      <button>Buy Now</button>
    </div>
  );
}
