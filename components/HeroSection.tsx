import Link from "next/link";
import Image from "next/image";
import { restaurantInfo } from "@/data/restaurant";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1920&q=85"
          alt="Indian food spread"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Strong multi-layer dark overlay — fixes text readability */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        {/* Warm saffron tint */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 60% 40%, rgba(160,60,10,0.35) 0%, transparent 65%)"
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">

        {/* Est. badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-8">
          <span className="text-saffron-300 text-xs tracking-widest uppercase font-medium">Est. {restaurantInfo.estYear}</span>
          <span className="text-white/50">•</span>
          <span className="text-saffron-300 text-xs tracking-widest uppercase font-medium">Pure Vegetarian</span>
        </div>

        {/* Devanagari */}
        <p className="font-devanagari text-3xl md:text-4xl text-saffron-300 mb-3 leading-relaxed drop-shadow-lg">
          {restaurantInfo.nameDevanagari}
        </p>

        {/* Main heading — strong white with text-shadow */}
        <h1
          className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-6"
          style={{ textShadow: "0 4px 32px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)" }}
        >
          {restaurantInfo.name}
        </h1>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-saffron-400" />
          <svg className="w-5 h-5 text-saffron-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L9.19 8.63L2 9.24L7 13.97L5.82 21L12 17.27L18.18 21L17 13.97L22 9.24L14.81 8.63L12 2Z"/>
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-saffron-400" />
        </div>

        {/* Tagline */}
        <p
          className="font-display italic text-xl md:text-2xl lg:text-3xl text-cream-100 mb-3"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
        >
          "{restaurantInfo.tagline}"
        </p>
        <p className="font-devanagari text-cream-300 text-base md:text-lg mb-12" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>
          {restaurantInfo.taglineHindi}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-saffron-500 hover:bg-saffron-400 text-white font-medium text-base px-8 py-4 rounded-full shadow-xl transition-all duration-200 active:scale-95">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            View Menu
          </Link>

          <a href={`tel:${restaurantInfo.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-spice-800 font-medium text-base px-8 py-4 rounded-full transition-all duration-200 active:scale-95">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>

          <a href="https://maps.google.com/?q=Shree+Anandam+Restaurant+Chennai"
            target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-saffron-400 text-saffron-300 hover:bg-saffron-500 hover:border-saffron-500 hover:text-white font-medium text-base px-8 py-4 rounded-full transition-all duration-200 active:scale-95">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Get Directions
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex justify-center animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
