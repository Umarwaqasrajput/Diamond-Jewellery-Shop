// ✅ File: src/app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#faf8f6] text-center">
      <h1 className="text-5xl font-bold text-gold">404</h1>
      <p className="text-gray-600 mt-4">Oops! Page not found.</p>
      <a
        href="/"
        className="mt-6 inline-block bg-gold text-white px-6 py-3 rounded-full hover:bg-amber-500"
      >
        Back to Home
      </a>
    </div>
  );
}
