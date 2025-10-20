"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px 20px",
        color: "white",
        background: "linear-gradient(180deg, #000, #111)",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>404 - Page Not Found</h1>
      <p style={{ fontSize: "1.2rem", opacity: 0.8 }}>
        The page you’re looking for doesn’t exist.
      </p>
      <Link href="/" style={{ textDecoration: "none" }}>
        <button
          style={{
            marginTop: "30px",
            background: "#40e0d0",
            color: "#000",
            padding: "12px 25px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          🔙 Go Back Home
        </button>
      </Link>
    </div>
  );
}
