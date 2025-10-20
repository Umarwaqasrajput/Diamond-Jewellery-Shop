// ✅ File: src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <Link href="/" className="btn home">🏠 Home</Link>
        <Link href="/about" className="btn about">💬 About</Link>
        <Link href="/products" className="btn products">💍 Products</Link>
        <Link href="/contact" className="btn contact">📞 Contact</Link>
      </div>
      <p>© 2025 Diamond Luxe | Crafted with ❤️ by Umar Waqas Rajput</p>
    </footer>
  );
}
