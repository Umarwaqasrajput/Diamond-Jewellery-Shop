// ✅ File: src/components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden rounded-3xl shadow-lg">
      {/* Background Image */}
      <Image
        src="/images/diamond-bg.jpg"
        alt="Diamond Jewellery Background"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Timeless Beauty, Endless Shine
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Explore the world of handcrafted diamond jewellery.
        </p>
        <a
          href="/shop"
          className="inline-block mt-8 px-8 py-3 bg-gold text-white rounded-full shadow-md hover:bg-amber-500 transition"
        >
          Explore Collection →
        </a>
      </motion.div>

      {/* Subtle Shine Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/60" />
    </section>
  );
}
