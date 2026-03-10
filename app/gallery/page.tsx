import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual feast from Shree Anandam's kitchen — browse our food photography and restaurant ambience gallery.",
};

export default function GalleryPage() {
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
          <p className="font-devanagari text-saffron-300 text-2xl mb-2">हमारी रसोई</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">Gallery</h1>
          <p className="text-cream-300 max-w-xl mx-auto px-4">
            A feast for the eyes before it becomes a feast for the soul.
          </p>
        </div>
      </div>

      <GalleryGrid />
    </div>
  );
}
