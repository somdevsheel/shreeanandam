"use client";

import { useState } from "react";
import Image from "next/image";
import { menuData, MenuCategory } from "@/data/menu";

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(menuData[0].id);
  const active = menuData.find((c) => c.id === activeTab) as MenuCategory;

  return (
    <section className="py-16 md:py-24" style={{ background: "#1c1008" }} id="menu">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-12">
          <p className="font-devanagari text-saffron-500 text-xl mb-2">हमारा मेनू</p>
          <h2 className="section-heading">Our Menu</h2>
          <div className="divider-ornament"><span className="text-saffron-500 text-lg">✦</span></div>
          <p className="section-subheading max-w-xl mx-auto">
            Fresh, made-to-order food at prices everyone can enjoy.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-10 -mx-4 px-4">
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                ${activeTab === cat.id
                  ? "bg-saffron-500 text-white shadow-lg shadow-saffron-900/40 scale-105"
                  : "text-amber-200/70 border border-saffron-900/50 hover:border-saffron-500 hover:text-saffron-400"
                }`}
              style={activeTab !== cat.id ? { background: "rgba(38,21,7,0.8)" } : {}}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
              <span className={`text-xs rounded-full px-1.5 py-0.5 font-medium
                ${activeTab === cat.id ? "bg-white/20 text-white" : "bg-black/30 text-amber-400"}`}>
                {cat.items.length}
              </span>
            </button>
          ))}
        </div>

        {/* Menu Item Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {active.items.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 hover:-translate-y-1"
              style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.18)" }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                {/* Veg dot */}
                <div className="absolute top-3 left-3">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center shadow border-2 border-green-700">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-700" />
                  </div>
                </div>

                {item.popular && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-saffron-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">★ Popular</span>
                  </div>
                )}

                {/* Price badge */}
                <div className="absolute bottom-3 right-3">
                  {item.priceHalf && item.priceFull ? (
                    <div className="flex items-center gap-1.5">
                      <span className="bg-black/70 text-amber-200 text-xs font-semibold px-2.5 py-1 rounded-full shadow">½ ₹{item.priceHalf}</span>
                      <span className="bg-saffron-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">Full ₹{item.priceFull}</span>
                    </div>
                  ) : (
                    <span className="bg-black/70 text-amber-100 font-display text-lg font-bold px-3 py-1 rounded-full shadow">₹{item.price}</span>
                  )}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-xl text-amber-100 mb-1.5 leading-tight">{item.name}</h3>
                <p className="text-amber-200/55 text-sm leading-relaxed line-clamp-2">{item.description}</p>

                {item.priceHalf && item.priceFull && (
                  <div className="flex gap-5 mt-3 pt-3 border-t border-saffron-900/40">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-amber-400/60 uppercase tracking-wide">Half</span>
                      <span className="font-display text-base text-amber-300 font-semibold">₹{item.priceHalf}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-amber-400/60 uppercase tracking-wide">Full</span>
                      <span className="font-display text-base text-saffron-400 font-semibold">₹{item.priceFull}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-amber-400/40 text-xs mt-10">
          All prices in INR. Portions subject to availability.
        </p>
      </div>
    </section>
  );
}
