// ✅ File: src/app/shop/page.tsx
"use client";
import ProductList from "../../components/ProductList";
import { motion } from "framer-motion";

export default function ShopPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-10"
    >
      <h1 className="text-4xl font-bold text-center text-gold mb-10">
        Explore Our Diamond Jewellery 💍
      </h1>
      <ProductList />
    </motion.div>
  );
}
