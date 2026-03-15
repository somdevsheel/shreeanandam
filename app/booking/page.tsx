import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Table",
  description:
    "Reserve your table at Anandam Sweets & Restaurant, Bilaspur. Quick and easy online booking.",
};

export default function BookingPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Page Hero */}
      <div className="py-16 md:py-20 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0e0703, #3d1a08)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, #f0820a 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="relative">
          <p className="font-devanagari text-saffron-400 text-2xl mb-2">मेज़ बुक करें</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">Book a Table</h1>
          <p className="text-amber-200/70 max-w-md mx-auto px-4">
            Fill in your details and we'll have your table ready and waiting.
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <section className="py-16 md:py-24" style={{ background: "#1c1008" }}>
        <div className="max-w-2xl mx-auto px-4">
          <BookingForm />
        </div>
      </section>
    </div>
  );
}