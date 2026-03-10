// export interface GalleryImage {
//   id: string;
//   src: string;
//   alt: string;
//   category: "food" | "ambience" | "special";
// }

// export const galleryImages: GalleryImage[] = [
//   {
//     id: "g1",
//     src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
//     alt: "Dal Makhani - slow cooked black lentils",
//     category: "food",
//   },
//   {
//     id: "g2",
//     src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
//     alt: "Freshly baked naan breads",
//     category: "food",
//   },
//   {
//     id: "g3",
//     src: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&q=80",
//     alt: "Paneer Tikka from the tandoor",
//     category: "food",
//   },
//   {
//     id: "g4",
//     src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80",
//     alt: "Traditional Indian thali spread",
//     category: "food",
//   },
//   {
//     id: "g5",
//     src: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
//     alt: "Aromatic Veg Biryani",
//     category: "food",
//   },
//   {
//     id: "g6",
//     src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80",
//     alt: "Gulab Jamun in rose syrup",
//     category: "food",
//   },
//   {
//     id: "g7",
//     src: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=600&q=80",
//     alt: "Warm restaurant ambience",
//     category: "ambience",
//   },
//   {
//     id: "g8",
//     src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
//     alt: "Restaurant interior dining area",
//     category: "ambience",
//   },
//   {
//     id: "g9",
//     src: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=600&q=80",
//     alt: "Masala Chai served in kulhad",
//     category: "food",
//   },
//   {
//     id: "g10",
//     src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
//     alt: "Special festival thali",
//     category: "special",
//   },
//   {
//     id: "g11",
//     src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
//     alt: "Samosa chaat with chutneys",
//     category: "food",
//   },
//   {
//     id: "g12",
//     src: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80",
//     alt: "Mango lassi in tall glass",
//     category: "food",
//   },
// ];






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