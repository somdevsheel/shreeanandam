// import Image from "next/image";
// import { galleryImages } from "@/data/gallery";

// export default function GalleryGrid() {
//   return (
//     <section className="py-16 md:py-24 bg-spice-950" id="gallery">
//       <div className="max-w-6xl mx-auto px-4">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <p className="font-devanagari text-saffron-400 text-xl mb-2">हमारी रसोई</p>
//           <h2 className="font-display text-4xl md:text-5xl text-cream-100 leading-tight">
//             From Our Kitchen
//           </h2>
//           <div className="flex items-center justify-center gap-3 my-4">
//             <div className="h-px w-16 bg-saffron-700" />
//             <span className="text-saffron-400">✦</span>
//             <div className="h-px w-16 bg-saffron-700" />
//           </div>
//           <p className="text-cream-400 text-lg max-w-xl mx-auto">
//             A feast for the eyes before it becomes a feast for the soul.
//           </p>
//         </div>

//         {/* Responsive Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
//           {galleryImages.map((img, i) => (
//             <div
//               key={img.id}
//               className={`gallery-img relative rounded-2xl overflow-hidden
//                 ${i === 0 ? "col-span-2 row-span-2" : ""}
//                 ${i === 5 ? "col-span-2" : ""}
//               `}
//               style={{ aspectRatio: i === 0 ? "1/1" : i === 5 ? "2/1" : "1/1" }}
//             >
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 fill
//                 className="object-cover transition-transform duration-500 hover:scale-110"
//                 sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
//               />
//               {/* Hover overlay */}
//               <div className="absolute inset-0 bg-spice-950/0 hover:bg-spice-950/40 transition-all duration-300 flex items-end p-4">
//                 <p className="text-white/0 hover:text-white/90 text-xs font-medium transition-all duration-300 leading-tight">
//                   {img.alt}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }









// "use client";

// import Image from "next/image";
// import { useRef } from "react";
// import { galleryItems, GalleryItem } from "@/data/gallery";

// function VideoCard({ item, featured }: { item: GalleryItem; featured?: boolean }) {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   return (
//     <div
//       className={`relative rounded-2xl overflow-hidden group cursor-pointer ${featured ? "col-span-2 row-span-2" : ""}`}
//       style={{ aspectRatio: featured ? "1/1" : "1/1" }}
//     >
//       <video
//         ref={videoRef}
//         src={item.src}
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//       />
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />

//       {/* Video badge */}
//       <div className="absolute top-3 left-3">
//         <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
//           <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M8 5v14l11-7z"/>
//           </svg>
//           Video
//         </span>
//       </div>

//       {/* Label on hover */}
//       <div className="absolute inset-0 flex items-end p-4">
//         <p className="text-white/0 group-hover:text-white/90 text-xs font-medium transition-all duration-300 leading-tight">
//           {item.alt}
//         </p>
//       </div>
//     </div>
//   );
// }

// function ImageCard({ item, featured, wide }: { item: GalleryItem; featured?: boolean; wide?: boolean }) {
//   return (
//     <div
//       className={`gallery-img relative rounded-2xl overflow-hidden group
//         ${featured ? "col-span-2 row-span-2" : ""}
//         ${wide ? "col-span-2" : ""}
//       `}
//       style={{ aspectRatio: featured ? "1/1" : wide ? "2/1" : "1/1" }}
//     >
//       <Image
//         src={item.src}
//         alt={item.alt}
//         fill
//         className="object-cover transition-transform duration-500 group-hover:scale-110"
//         sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
//       />
//       {/* Hover overlay */}
//       <div className="absolute inset-0 bg-spice-950/0 group-hover:bg-spice-950/40 transition-all duration-300 flex items-end p-4">
//         <p className="text-white/0 group-hover:text-white/90 text-xs font-medium transition-all duration-300 leading-tight">
//           {item.alt}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function GalleryGrid() {
//   return (
//     <section className="py-16 md:py-24 bg-spice-950" id="gallery">
//       <div className="max-w-6xl mx-auto px-4">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <p className="font-devanagari text-saffron-400 text-xl mb-2">हमारी रसोई</p>
//           <h2 className="font-display text-4xl md:text-5xl text-cream-100 leading-tight">
//             From Our Kitchen
//           </h2>
//           <div className="flex items-center justify-center gap-3 my-4">
//             <div className="h-px w-16 bg-saffron-700" />
//             <span className="text-saffron-400">✦</span>
//             <div className="h-px w-16 bg-saffron-700" />
//           </div>
//           <p className="text-cream-400 text-lg max-w-xl mx-auto">
//             A feast for the eyes before it becomes a feast for the soul.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
//           {galleryItems.map((item, i) => {
//             const featured = i === 0;
//             const wide     = i === 5;

//             if (item.type === "video") {
//               return <VideoCard key={item.id} item={item} featured={featured} />;
//             }
//             return <ImageCard key={item.id} item={item} featured={featured} wide={wide} />;
//           })}
//         </div>

//         {/* Video count badge */}
//         {galleryItems.some(i => i.type === "video") && (
//           <p className="text-center text-amber-200/30 text-xs mt-6">
//             🎥 Videos play automatically without sound
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { useRef } from "react";
import { galleryItems, GalleryItem } from "@/data/gallery";

function VideoCard({ item, featured }: { item: GalleryItem; featured?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden group cursor-pointer ${featured ? "col-span-2 row-span-2" : ""}`}
      style={{ aspectRatio: featured ? "1/1" : "1/1" }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      >
        <source src={item.src} type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />

      {/* Video badge */}
      <div className="absolute top-3 left-3">
        <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          Video
        </span>
      </div>

      {/* Label on hover */}
      <div className="absolute inset-0 flex items-end p-4">
        <p className="text-white/0 group-hover:text-white/90 text-xs font-medium transition-all duration-300 leading-tight">
          {item.alt}
        </p>
      </div>
    </div>
  );
}

function ImageCard({ item, featured, wide }: { item: GalleryItem; featured?: boolean; wide?: boolean }) {
  return (
    <div
      className={`gallery-img relative rounded-2xl overflow-hidden group
        ${featured ? "col-span-2 row-span-2" : ""}
        ${wide ? "col-span-2" : ""}
      `}
      style={{ aspectRatio: featured ? "1/1" : wide ? "2/1" : "1/1" }}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-spice-950/0 group-hover:bg-spice-950/40 transition-all duration-300 flex items-end p-4">
        <p className="text-white/0 group-hover:text-white/90 text-xs font-medium transition-all duration-300 leading-tight">
          {item.alt}
        </p>
      </div>
    </div>
  );
}

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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item, i) => {
            const featured = i === 0;
            const wide     = i === 5;

            if (item.type === "video") {
              return <VideoCard key={item.id} item={item} featured={featured} />;
            }
            return <ImageCard key={item.id} item={item} featured={featured} wide={wide} />;
          })}
        </div>

        {/* Video count badge */}
        {galleryItems.some(i => i.type === "video") && (
          <p className="text-center text-amber-200/30 text-xs mt-6">
          
          </p>
        )}
      </div>
    </section>
  );
}