export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "food" | "ambience" | "special";
}

// ✅ Using your own real menu photos — 100% guaranteed pure veg
// These are the same images you already have in /public/images/menu/
export const galleryImages: GalleryImage[] = [
  { id: "g1",  src: "/images/menu/steamed momos.jpg",   alt: "Steamed Momos",       category: "food" },
  { id: "g2",  src: "/images/menu/fried momos.jpg",     alt: "Fried Momos",         category: "food" },
  { id: "g3",  src: "/images/menu/chilli momos.jpg",    alt: "Chilli Momos",        category: "food" },
  { id: "g4",  src: "/images/menu/Tandoori Momos.jpg",  alt: "Tandoori Momos",      category: "food" },
  { id: "g5",  src: "/images/menu/kurkure momos.jpg",   alt: "Kurkure Momos",       category: "food" },
  { id: "g6",  src: "/images/menu/Cheese Burger.jpg",   alt: "Cheese Burger",       category: "food" },
  { id: "g7",  src: "/images/menu/paneer burger.jpg",   alt: "Paneer Burger",       category: "food" },
  { id: "g8",  src: "/images/menu/Spring Roll.jpg",     alt: "Spring Roll",         category: "food" },
  { id: "g9",  src: "/images/menu/Paneer Chowmein.jpg", alt: "Paneer Chowmein",     category: "food" },
  { id: "g10", src: "/images/menu/Fried Rice.jpg",      alt: "Veg Fried Rice",      category: "food" },
  { id: "g11", src: "/images/menu/Hakka Noodles.jpg",   alt: "Hakka Noodles",       category: "food" },
  { id: "g12", src: "/images/menu/Bread Pakora.jpg",    alt: "Bread Pakora",        category: "food" },
  { id: "g13", src: "/images/menu/Chhole Bhature.jpg",  alt: "Chole Bhature",       category: "food" },
  { id: "g14", src: "/images/menu/Chole Puri.jpg",      alt: "Chole Puri",          category: "food" },
  { id: "g15", src: "/images/menu/Chai.jpg",            alt: "Masala Chai",         category: "food" },
  { id: "g16", src: "/images/menu/Coffee.jpg",          alt: "Hot Coffee",          category: "food" },
  { id: "g17", src: "/images/menu/Veg Cream Burger.jpg",alt: "Veg Cream Burger",    category: "food" },
];
