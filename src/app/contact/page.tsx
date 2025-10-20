"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center bg-gray-900 p-10 rounded-2xl shadow-lg border border-gray-700 max-w-md w-full"
      >
        {/* 💎 Owner Image */}
        <Image
          src="/um.jpg"
          alt="Diamond Shop Owner"
          width={280}
          height={280}
          className="mx-auto rounded-full border-4 border-amber-400 mb-5 object-cover"
        />

        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">💎 Diamond Shop Owner</h1>
        <p className="text-gray-400 mb-6">Royal Diamond Jewellery, Sargodha</p>

        {/* Contact Info */}
        <div className="space-y-3 mb-8">
          <p className="flex items-center justify-center gap-2 text-lg">
            <Mail className="text-amber-400" /> 
            <span>umarwaqasrajput552@gmail.com</span>
          </p>
          <p className="flex items-center justify-center gap-2 text-lg">
            <Phone className="text-amber-400" /> 
            <span>+92 300 119 6030</span>
          </p>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923001195030?text=Hello%20Royal%20Diamond%20Shop!%20I%20want%20to%20know%20more%20about%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-semibold py-3 px-8 rounded-full hover:opacity-90 transition"
        >
          <MessageCircle /> Send Message on WhatsApp
        </a>
      </motion.div>
    </div>
  );
}
