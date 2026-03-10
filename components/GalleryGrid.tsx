import Image from "next/image";
import { galleryImages } from "@/data/gallery";

export default function GalleryGrid() {
  return (
    <section className="py-16 md:py-24 bg-spice-950" id="gallery">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-devanagari text-saffron-400 text-xl mb-2">हमारी रसोई</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream-100 leading-tight">
            From Our Kitchen
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-px w-16 bg-saffron-700" />
            <span className="text-saffron-400">✦</span>
            <div className="h-px w-16 bg-saffron-700" />
          </div>
          <p className="text-cream-400 text-lg max-w-xl mx-auto">
            A feast for the eyes before it becomes a feast for the soul.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              className={`gallery-img relative rounded-2xl overflow-hidden
                ${i === 0 ? "col-span-2 row-span-2" : ""}
                ${i === 5 ? "col-span-2" : ""}
              `}
              style={{ aspectRatio: i === 0 ? "1/1" : i === 5 ? "2/1" : "1/1" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-spice-950/0 hover:bg-spice-950/40 transition-all duration-300 flex items-end p-4">
                <p className="text-white/0 hover:text-white/90 text-xs font-medium transition-all duration-300 leading-tight">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
