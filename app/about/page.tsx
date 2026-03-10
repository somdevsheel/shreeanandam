import type { Metadata } from "next";
import { restaurantInfo } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story of Shree Anandam — a family-run traditional vegetarian restaurant in Chennai, serving authentic Indian cuisine since 1987.",
};

export default function AboutPage() {
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
          <p className="font-devanagari text-saffron-300 text-2xl mb-2">हमारी कहानी</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">Our Story</h1>
          <p className="text-cream-300 max-w-xl mx-auto px-4">
            A family's passion for food, turned into a city's favourite dining destination.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16 md:py-24" style={{ background: "#1c1008" }}>
        <div className="max-w-4xl mx-auto px-4">

          {/* Est badge */}
          <div className="flex items-center justify-center mb-10">
            <div className="inline-flex items-center gap-3 bg-saffron-50 border border-saffron-200 rounded-full px-6 py-3">
              <span className="font-devanagari text-saffron-700">श्री आनन्दम्</span>
              <span className="text-saffron-300">|</span>
              <span className="text-saffron-700 font-medium text-sm tracking-widest">EST. {restaurantInfo.estYear}</span>
            </div>
          </div>

          {/* Story text */}
          <div className="prose-like space-y-6 text-cream-800 text-lg leading-relaxed">
            <p>
              It was the summer of {restaurantInfo.estYear} when Smt. Kamala Devi Sharma first opened the doors of
              a small, eight-table eatery on Mahatma Gandhi Road in Chennai. Armed with generations of family recipes,
              an unfailing dedication to purity, and an enormous heart, she set out to feed her neighbours
              the way she fed her own family — with love, honesty, and the finest ingredients she could find.
            </p>

            <blockquote className="border-l-4 border-saffron-400 pl-6 py-2 my-8">
              <p className="font-display text-2xl text-spice-800 italic leading-snug">
                "Anna daan is the greatest daan. Feed people well, and God will take care of the rest."
              </p>
              <cite className="text-cream-600 text-sm mt-2 block not-italic">— Smt. Kamala Devi Sharma, Founder</cite>
            </blockquote>

            <p>
              Word spread quickly. The dal makhani that simmered through the night, the butter-soft naans
              that emerged from the clay tandoor, and the gulab jamuns that dissolved on your tongue —
              these weren't just dishes. They were memories in the making.
            </p>

            <p>
              By the 1990s, Shree Anandam had become a Sunday ritual for hundreds of Chennai families.
              The restaurant expanded, but the kitchen philosophy never changed: no shortcuts, no compromises,
              no frozen ingredients. Every morning begins with fresh deliveries and every evening ends with
              satisfied smiles.
            </p>

            <p>
              Today, Kamala Devi's grandson, Rohan Sharma, carries forward the torch — honouring every
              recipe exactly as it was written in her hand, in a battered notebook that still lives beside
              the stove. New dishes have been added over the decades, but the soul of Shree Anandam
              remains exactly what it was: a family's gift to the city they love.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20" style={{ background: "#160e05" }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading">What We Stand For</h2>
            <div className="divider-ornament"><span className="text-saffron-400 text-lg">✦</span></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌿",
                title: "Purity",
                desc: "We are proudly 100% pure vegetarian. No eggs, no cross-contamination, no compromise — ever. Guests with all dietary preferences can dine with complete peace of mind.",
              },
              {
                icon: "🤝",
                title: "Hospitality",
                desc: "Atithi Devo Bhava — the guest is God. We treat every person who walks through our doors as a cherished guest in our home, not just a customer.",
              },
              {
                icon: "📖",
                title: "Tradition",
                desc: "Our recipes are not innovation projects. They are living heritage — tested through decades, refined by experience, and cooked with an almost ritualistic care.",
              },
            ].map((val) => (
              <div key={val.title} className="card-ornate rounded-2xl p-7 text-center card-hover">
                <div className="text-5xl mb-5">{val.icon}</div>
                <h3 className="font-display text-2xl text-spice-800 mb-3">{val.title}</h3>
                <p className="text-cream-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20" style={{ background: "#1c1008" }}>
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Journey</h2>
            <div className="divider-ornament"><span className="text-saffron-400 text-lg">✦</span></div>
          </div>

          <div className="space-y-0">
            {[
              { year: "1987", event: "Smt. Kamala Devi Sharma opens Shree Anandam with 8 tables and a vision." },
              { year: "1995", event: "Expanded to a 60-seater restaurant following overwhelming demand." },
              { year: "2003", event: "Introduced the now-legendary Weekend Thali, still served every Saturday and Sunday." },
              { year: "2012", event: "Second generation joins — preserving recipes while adding new classics." },
              { year: "2018", event: "Celebrated 30+ years and 3 generations of diners. Fully renovated space." },
              { year: "Today", event: "Continuing the legacy with third-generation leadership, serving Chennai's families." },
            ].map((item, i, arr) => (
              <div key={item.year} className="flex gap-6">
                {/* Left year */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-saffron-500 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                  {i < arr.length - 1 && <div className="w-0.5 flex-1 bg-saffron-200 my-1" />}
                </div>
                {/* Right content */}
                <div className="pb-8 flex-1">
                  <p className="font-display text-xl text-saffron-600 mb-1">{item.year}</p>
                  <p className="text-cream-700 leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
