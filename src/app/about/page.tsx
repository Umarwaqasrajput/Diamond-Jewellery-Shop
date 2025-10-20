"use client";

import React from "react";

export default function AboutPage() {
  return (
    <main style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>💎 About Royal Diamond Jewelry</h1>

      <section style={{ marginTop: "30px", lineHeight: "1.8", fontSize: "1.1rem" }}>
        <p>
          Welcome to <strong>Royal Diamond Jewelry</strong> — where elegance meets perfection.
          Established with a passion for excellence, we bring you the most exquisite diamond and
          gold jewelry crafted with unmatched artistry. Our goal is to redefine luxury through
          authenticity, craftsmanship, and trust.
        </p>

        <p style={{ marginTop: "20px" }}>
          Every piece at <em>Royal Diamond</em> tells a story of timeless beauty. Our diamonds are
          ethically sourced and certified, ensuring you wear brilliance with pride. Whether you’re
          looking for a royal engagement ring, a luxury necklace, or a custom-made bracelet, we
          promise perfection in every sparkle.
        </p>

        <p style={{ marginTop: "20px" }}>
          From traditional designs to modern aesthetics, our expert craftsmen blend innovation and
          culture to produce jewelry that stands out. Our collections are inspired by heritage,
          designed for today’s fashion-forward world, and built to last generations.
        </p>

        <h2 style={{ marginTop: "40px" }}>💍 Why Choose Royal Diamond Jewelry?</h2>
        <ul style={{ marginTop: "20px", listStyle: "none", paddingLeft: "0" }}>
          <li>✨ 100% Genuine Certified Diamonds</li>
          <li>💰 Transparent Pricing in USD & PKR</li>
          <li>🧠 Modern + Traditional Artistic Designs</li>
          <li>🚚 Worldwide Fast & Safe Delivery</li>
          <li>🎁 Personalized Gift Packaging</li>
        </ul>

        <p style={{ marginTop: "30px" }}>
          Our commitment goes beyond jewelry — it’s about trust, elegance, and emotion.
          We’re honored to be part of your life’s most precious moments. 💖
        </p>

        <p style={{ marginTop: "20px", fontWeight: "bold", color: "#40e0d0" }}>
          “Wear Royal. Shine Forever.” — <em>Royal Diamond Jewelry</em>
        </p>
      </section>

      <section
        style={{
          marginTop: "60px",
          padding: "30px",
          background: "linear-gradient(180deg, #111, #000)",
          borderRadius: "16px",
          boxShadow: "0 0 25px rgba(255,255,255,0.1)",
        }}
      >
        <h2>🏢 Our Mission & Vision</h2>
        <p style={{ marginTop: "15px" }}>
          At <strong>Royal Diamond Jewelry</strong>, our mission is to make world-class jewelry
          accessible, sustainable, and unforgettable. We envision a world where every individual can
          express their inner sparkle with confidence and pride.
        </p>

        <p style={{ marginTop: "15px" }}>
          Our vision extends to digital luxury — with seamless online shopping, transparent pricing,
          and global shipping, you can now bring home elegance with just one click.
        </p>
      </section>

      <section style={{ marginTop: "60px", textAlign: "center" }}>
        <h2>📍 Visit or Contact Us</h2>
        <p style={{ marginTop: "15px" }}>
          📞 +92 300 119 6030 | ✉️ contact@royaldiamond.com
        </p>
        <p>🏠 Main Mall Road, Sargodha, Pakistan</p>
      </section>
    </main>
  );
}
