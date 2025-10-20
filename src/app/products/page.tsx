"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  priceUSD: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Royal Diamond Ring",
    image: "/1.jpg",
    priceUSD: 350,
  },
  {
    id: 2,
    name: "Elegant Gold Bracelet",
    image: "/2.jpg",
    priceUSD: 499,
  },
  {
    id: 3,
    name: "Luxury Diamond Necklace",
    image: "/3.jpg",
    priceUSD: 899,
  },
  {
    id: 4,
    name: "Classic Earrings",
    image: "/4.jpg",
    priceUSD: 250,
  },
];

export default function ProductsPage() {
  const dollarToPKR = 278; // 💰 1 USD = 278 PKR (approx)

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">
        💎 Our Exclusive Diamond Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-700 hover:border-amber-400 transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-5 text-center">
              <h2 className="text-2xl font-semibold mb-3">{product.name}</h2>
              <p className="text-gray-300 mb-2">
                💵 ${product.priceUSD.toFixed(2)} USD
              </p>
              <p className="text-amber-400 font-bold">
                🇵🇰 {(product.priceUSD * dollarToPKR).toLocaleString()} PKR
              </p>
              <button className="mt-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold py-2 px-6 rounded-full hover:opacity-90 transition">
                Buy Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
