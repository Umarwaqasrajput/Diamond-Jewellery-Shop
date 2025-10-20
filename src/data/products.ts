// Local Product type because ../types.d.ts is not a module
type Product = {
  id: string;
  title: string;
  price: number;
  karat: string;
  images: string[];
  slug: string;
  description?: string;
};

export const products: Product[] = [
  {
    id: "p1",
    title: "Royal Solitaire Diamond Ring",
    price: 3499,
    karat: "18K",
    images: ["/images/ring-1.jpg", "/images/ring-1-2.jpg"],
    slug: "royal-solitaire-diamond-ring",
    description: "Elegant solitaire ring with certified diamond. Perfect for proposals."
  },
  {
    id: "p2",
    title: "Classic Diamond Stud Earrings",
    price: 1999,
    karat: "18K",
    images: ["/images/earrings-1.jpg"],
    slug: "classic-diamond-stud-earrings",
    description: "Timeless studs crafted for daily luxury."
  }
];
