// ✅ File: src/components/ProductList.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Diamond Ring",
    price: "$899",
    image: "/images/ring.jpg",
  },
  {
    id: 2,
    name: "Gold Necklace",
    price: "$1,299",
    image: "/images/necklace.jpg",
  },
  {
    id: 3,
    name: "Silver Bracelet",
    price: "$499",
    image: "/images/bracelet.jpg",
  },
  {
    id: 4,
    name: "Diamond Earrings",
    price: "$699",
    image: "/images/earrings.jpg",
  },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <motion.div
          key={product.id}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-3xl shadow-md p-4 text-center hover:shadow-xl transition"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-2xl mx-auto object-cover"
          />
          <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
          <p className="text-gold font-bold mt-2">{product.price}</p>
          <button className="mt-4 px-6 py-2 bg-gold text-white rounded-full hover:bg-amber-500 transition">
            Add to Cart
          </button>
        </motion.div>
      ))}
    </div>
  );
}
