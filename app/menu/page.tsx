import type { Metadata } from "next";
import MenuSection from "@/components/MenuSection";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the full menu at Shree Anandam — from crispy starters and rich main courses to fresh breads, traditional desserts, and refreshing beverages. All 100% vegetarian.",
};

export default function MenuPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Page Hero */}
      <div
        className="py-16 md:py-24 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0e0703, #3d1a08)" }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, #f0820a 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />
        <div className="relative">
          <p className="font-devanagari text-saffron-300 text-2xl mb-2">हमारा मेनू</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">Our Menu</h1>
          <p className="text-cream-300 max-w-xl mx-auto px-4">
            Fresh, traditional, and made with love — every item on our menu tells a story.
          </p>
        </div>
      </div>

      <MenuSection />
    </div>
  );
}
