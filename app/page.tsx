import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { restaurantInfo } from "@/data/restaurant";
import { menuData } from "@/data/menu";

export default function HomePage() {
  const popularItems = menuData
    .flatMap((cat) => cat.items.filter((item) => item.popular))
    .slice(0, 6);

  return (
    <>
      <HeroSection />

      {/* Why Us — dark card section */}
      <section className="py-16 md:py-20" style={{ background: "#160e05" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-devanagari text-saffron-500 text-xl mb-2">हमारी विशेषता</p>
            <h2 className="section-heading">Why Families Love Us</h2>
            <div className="divider-ornament"><span className="text-saffron-500 text-lg">✦</span></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🌿", title: "100% Pure Veg",       desc: "No eggs, no non-veg items — ever. A sanctuary for vegetarians." },
              { icon: "👨‍🍳", title: "Traditional Recipes", desc: "Generations-old recipes passed down with care and love." },
              { icon: "🥟", title: "Momo Specialists",    desc: "Five kinds of handcrafted momos — steamed, fried, chilli, tandoori & kurkure." },
              { icon: "💰", title: "Budget Friendly",     desc: "Delicious meals starting at just ₹10. Great food for everyone." },
            ].map((feat) => (
              <div key={feat.title} className="card-ornate rounded-2xl p-6 text-center card-hover">
                <div className="text-4xl mb-4">{feat.icon}</div>
                <h3 className="font-display text-xl text-saffron-300 mb-2">{feat.title}</h3>
                <p className="text-amber-200/60 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-16 md:py-20" style={{ background: "#1c1008" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="font-devanagari text-saffron-500 text-xl mb-2">सबसे पसंदीदा</p>
            <h2 className="section-heading">Customer Favourites</h2>
            <div className="divider-ornament"><span className="text-saffron-500 text-lg">✦</span></div>
            <p className="section-subheading">The dishes our regulars keep coming back for.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularItems.map((item) => (
              <div key={item.id}
                className="group rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.2)" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="bg-saffron-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">★ Popular</span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    {item.priceHalf && item.priceFull ? (
                      <div className="flex gap-1.5">
                        <span className="bg-black/70 text-amber-200 text-xs font-semibold px-2 py-1 rounded-full">½ ₹{item.priceHalf}</span>
                        <span className="bg-saffron-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Full ₹{item.priceFull}</span>
                      </div>
                    ) : (
                      <span className="bg-black/70 text-amber-100 font-display text-base font-bold px-3 py-1 rounded-full">₹{item.price}</span>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-amber-100 mb-1.5">{item.name}</h3>
                  <p className="text-amber-200/55 text-sm leading-relaxed line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="btn-primary">
              View Full Menu
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/booking"
              className="inline-flex items-center justify-center gap-2 border-2 border-saffron-500 text-saffron-400 hover:bg-saffron-500 hover:text-white font-medium px-8 py-3 rounded-full transition-all duration-200 active:scale-95">
              🍽️ Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0e0703, #3d1a08)" }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle, #f0820a 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="font-devanagari text-saffron-400 text-2xl mb-3">हमारी कहानी</p>
          <h2 className="font-display text-4xl md:text-5xl text-amber-100 mb-6 leading-tight">
            A Legacy of Taste Since {restaurantInfo.estYear}
          </h2>
          <p className="text-amber-200/70 text-lg leading-relaxed mb-10">
            What started as a humble family kitchen has grown into a beloved spot for momos, burgers, Chinese, and classic Indian bites — all made fresh, every day.
          </p>
          <Link href="/about"
            className="inline-flex items-center gap-2 border-2 border-saffron-500 text-saffron-400 hover:bg-saffron-500 hover:text-white font-medium px-8 py-3.5 rounded-full transition-all duration-200 active:scale-95">
            Read Our Story
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-10 bg-saffron-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-1.5">
              <p className="text-white/70 text-xs uppercase tracking-widest">Address</p>
              <p className="text-white font-medium">{restaurantInfo.address.line1}, {restaurantInfo.address.city}</p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <p className="text-white/70 text-xs uppercase tracking-widest">Phone</p>
              <a href={`tel:${restaurantInfo.phone}`} className="text-white font-semibold text-lg hover:underline">{restaurantInfo.phone}</a>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <p className="text-white/70 text-xs uppercase tracking-widest">Open Today</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                <p className="text-white font-medium">11:00 AM – 11:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
