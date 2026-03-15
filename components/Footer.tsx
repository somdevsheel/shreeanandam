// import Link from "next/link";
// import Image from "next/image";
// import { restaurantInfo } from "@/data/restaurant";

// const navLinks = [
//   { href: "/",        label: "Home"    },
//   { href: "/menu",    label: "Menu"    },
//   { href: "/gallery", label: "Gallery" },
//   { href: "/about",   label: "About"   },
//   { href: "/contact", label: "Contact" },
// ];

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="bg-spice-950 text-cream-300">

//       {/* Main footer */}
//       <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

//         {/* Brand */}
//         <div>
//           <Link href="/" className="flex items-center gap-3 mb-4 group">
//             <div className="relative w-12 h-12 flex-shrink-0">
//               <Image
//                 src="/logo.png"
//                 alt="Shree Anandam Logo"
//                 fill
//                 className="object-contain brightness-90"
//               />
//             </div>
//             <div>
//               <p className="font-display text-xl text-white leading-none">
//                 {restaurantInfo.name}
//               </p>
//               <p className="font-devanagari text-sm text-cream-400 mt-0.5">
//                 {restaurantInfo.nameDevanagari}
//               </p>
//             </div>
//           </Link>
//           <p className="text-cream-500 text-sm leading-relaxed mb-5">
//             {restaurantInfo.description}
//           </p>
//           {/* Social links */}
//           <div className="flex gap-3">
//             <a
//               href={restaurantInfo.social.instagram}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-9 h-9 rounded-full border border-spice-700 flex items-center justify-center text-cream-400 hover:text-white hover:border-saffron-500 transition-colors"
//               aria-label="Instagram"
//             >
//               <InstagramIcon />
//             </a>
//             <a
//               href={restaurantInfo.social.facebook}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-9 h-9 rounded-full border border-spice-700 flex items-center justify-center text-cream-400 hover:text-white hover:border-saffron-500 transition-colors"
//               aria-label="Facebook"
//             >
//               <FacebookIcon />
//             </a>
//             <a
//               href={`https://wa.me/${restaurantInfo.whatsapp}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-9 h-9 rounded-full border border-spice-700 flex items-center justify-center text-cream-400 hover:text-white hover:border-[#25D366] transition-colors"
//               aria-label="WhatsApp"
//             >
//               <WhatsAppIcon />
//             </a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="font-display text-lg text-white mb-4">Quick Links</h4>
//           <ul className="space-y-2.5">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <Link
//                   href={link.href}
//                   className="text-cream-400 hover:text-saffron-400 text-sm transition-colors flex items-center gap-2 group"
//                 >
//                   <span className="text-saffron-700 group-hover:text-saffron-400 transition-colors">›</span>
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="font-display text-lg text-white mb-4">Contact Us</h4>
//           <address className="not-italic space-y-3 text-sm text-cream-400">
//             <p className="leading-relaxed">
//               {restaurantInfo.address.line1},<br />
//               {restaurantInfo.address.line2},<br />
//               {restaurantInfo.address.city}, {restaurantInfo.address.state} – {restaurantInfo.address.pin}
//             </p>
//             <p>
//               <a href={`tel:${restaurantInfo.phone}`} className="hover:text-saffron-400 transition-colors">
//                 {restaurantInfo.phone}
//               </a>
//             </p>
//             <p>
//               <a href={`mailto:${restaurantInfo.email}`} className="hover:text-saffron-400 transition-colors">
//                 {restaurantInfo.email}
//               </a>
//             </p>
//           </address>

//           {/* Hours teaser */}
//           <div className="mt-4 pt-4 border-t border-spice-800">
//             <p className="text-xs text-cream-500 uppercase tracking-wider mb-2">Today's Hours</p>
//             <p className="text-sm text-cream-300">11:00 AM – 11:30 PM</p>
//             <div className="inline-flex items-center gap-1.5 mt-1">
//               <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//               <span className="text-green-400 text-xs font-medium">Open Now</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-spice-800">
//         <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-cream-600">
//           <p>© {year} {restaurantInfo.name}. All rights reserved.</p>
//           <p>Est. {restaurantInfo.estYear} · Pure Vegetarian · {restaurantInfo.address.city}, India</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // Icons
// function InstagramIcon() {
//   return (
//     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//     </svg>
//   );
// }

// function FacebookIcon() {
//   return (
//     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//     </svg>
//   );
// }

// function WhatsAppIcon() {
//   return (
//     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
//     </svg>
//   );
// }



// import Link from "next/link";
// import Image from "next/image";
// import { restaurantInfo } from "@/data/restaurant";

// const navLinks = [
//   { href: "/",         label: "Home"       },
//   { href: "/menu",     label: "Menu"       },
//   { href: "/gallery",  label: "Gallery"    },
//   { href: "/about",    label: "About"      },
//   { href: "/contact",  label: "Contact"    },
//   { href: "/booking",  label: "Book Table" },
// ];

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer style={{ background: "#0e0703" }} className="text-amber-200/60">

//       {/* Map strip */}
//       <div className="w-full h-56 md:h-72 relative overflow-hidden"
//         style={{ borderBottom: "1px solid rgba(200,120,30,0.15)" }}>
//         <iframe
//           src={restaurantInfo.mapEmbedUrl}
//           width="100%"
//           height="100%"
//           style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           title="Anandam Sweets & Restaurant Location"
//         />
//         {/* Get Directions overlay button */}
//         <a
//           href="https://maps.google.com/?q=28.894417,79.257833"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="absolute bottom-4 right-4 flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full shadow-lg transition-all active:scale-95"
//           style={{ background: "#ff7d0a", color: "#fff" }}
//         >
//           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//             <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//           </svg>
//           Get Directions
//         </a>
//       </div>

//       {/* Main footer grid */}
//       <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

//         {/* Brand */}
//         <div className="md:col-span-1">
//           <Link href="/" className="flex items-center gap-3 mb-4">
//             <div className="relative w-12 h-12 flex-shrink-0">
//               <Image src="/logo.png" alt="Anandam Logo" fill className="object-contain brightness-90" />
//             </div>
//             <div>
//               <p className="font-display text-lg text-amber-100 leading-none">{restaurantInfo.name}</p>
//               <p className="font-devanagari text-xs text-saffron-500 mt-0.5">{restaurantInfo.nameDevanagari}</p>
//             </div>
//           </Link>
//           <p className="text-amber-200/45 text-sm leading-relaxed mb-5">{restaurantInfo.description}</p>
//           {/* Social */}
//           <div className="flex gap-3">
//             <a href={restaurantInfo.social.instagram} target="_blank" rel="noopener noreferrer"
//               className="w-9 h-9 rounded-full flex items-center justify-center text-amber-200/50 hover:text-white hover:border-saffron-500 transition-colors"
//               style={{ border: "1px solid rgba(200,120,30,0.25)" }} aria-label="Instagram">
//               <InstagramIcon />
//             </a>
//             <a href={restaurantInfo.social.facebook} target="_blank" rel="noopener noreferrer"
//               className="w-9 h-9 rounded-full flex items-center justify-center text-amber-200/50 hover:text-white hover:border-saffron-500 transition-colors"
//               style={{ border: "1px solid rgba(200,120,30,0.25)" }} aria-label="Facebook">
//               <FacebookIcon />
//             </a>
//             <a href={`https://wa.me/${restaurantInfo.whatsapp}`} target="_blank" rel="noopener noreferrer"
//               className="w-9 h-9 rounded-full flex items-center justify-center text-amber-200/50 hover:text-white hover:border-green-500 transition-colors"
//               style={{ border: "1px solid rgba(200,120,30,0.25)" }} aria-label="WhatsApp">
//               <WhatsAppIcon />
//             </a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="font-display text-base text-saffron-400 mb-4 uppercase tracking-wider">Quick Links</h4>
//           <ul className="space-y-2.5">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <Link href={link.href}
//                   className="text-amber-200/50 hover:text-saffron-400 text-sm transition-colors flex items-center gap-2 group">
//                   <span className="text-saffron-700 group-hover:text-saffron-400 transition-colors">›</span>
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="font-display text-base text-saffron-400 mb-4 uppercase tracking-wider">Contact</h4>
//           <address className="not-italic space-y-3 text-sm text-amber-200/50">
//             <p className="leading-relaxed">
//               {restaurantInfo.address.line1},<br />
//               {restaurantInfo.address.line2},<br />
//               {restaurantInfo.address.city}, {restaurantInfo.address.state} – {restaurantInfo.address.pin}
//             </p>
//             {restaurantInfo.phones.map((p) => (
//               <p key={p.number}>
//                 <a href={`tel:${p.number}`} className="hover:text-saffron-400 transition-colors">
//                   {p.number}
//                 </a>
//                 <span className="text-amber-200/30 text-xs ml-1">({p.label})</span>
//               </p>
//             ))}
//             <p>
//               <a href={`mailto:${restaurantInfo.email}`} className="hover:text-saffron-400 transition-colors">
//                 {restaurantInfo.email}
//               </a>
//             </p>
//           </address>
//         </div>

//         {/* Hours */}
//         <div>
//           <h4 className="font-display text-base text-saffron-400 mb-4 uppercase tracking-wider">Opening Hours</h4>
//           <div className="space-y-3">
//             {restaurantInfo.hours.map((h, i) => (
//               <div key={i}>
//                 <p className="text-amber-200/70 text-xs font-medium">{h.days}</p>
//                 <p className="text-amber-200/45 text-xs mt-0.5">{h.time}</p>
//               </div>
//             ))}
//           </div>
//           <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(200,120,30,0.15)" }}>
//             <div className="inline-flex items-center gap-1.5">
//               <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//               <span className="text-green-400 text-xs font-medium">Open Now</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div style={{ borderTop: "1px solid rgba(200,120,30,0.12)" }}>
//         <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-amber-200/25">
//           <p>© {year} {restaurantInfo.name}. All rights reserved.</p>
//           <p>Pure Vegetarian · {restaurantInfo.address.city}, {restaurantInfo.address.state}, India</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function InstagramIcon() {
//   return (
//     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//     </svg>
//   );
// }

// function FacebookIcon() {
//   return (
//     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//     </svg>
//   );
// }

// function WhatsAppIcon() {
//   return (
//     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
//     </svg>
//   );
// }



// import Link from "next/link";
// import Image from "next/image";
// import { restaurantInfo } from "@/data/restaurant";

// const navLinks = [
//   { href: "/",         label: "Home"       },
//   { href: "/menu",     label: "Menu"       },
//   { href: "/gallery",  label: "Gallery"    },
//   { href: "/about",    label: "About"      },
//   { href: "/contact",  label: "Contact"    },
//   { href: "/booking",  label: "Book Table" },
// ];

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer style={{ background: "#0e0703" }} className="text-amber-200/60">

//       {/* Map strip */}
//       <div className="w-full h-56 md:h-72 relative overflow-hidden"
//         style={{ borderBottom: "1px solid rgba(200,120,30,0.15)" }}>
//         <iframe
//           src={restaurantInfo.mapEmbedUrl}
//           width="100%"
//           height="100%"
//           style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           title="Anandam Sweets & Restaurant Location"
//         />
//         {/* Get Directions overlay button */}
//         <a
//           href="https://maps.google.com/?q=28.894417,79.257833"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="absolute bottom-4 right-4 flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full shadow-lg transition-all active:scale-95"
//           style={{ background: "#ff7d0a", color: "#fff" }}
//         >
//           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//             <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//           </svg>
//           Get Directions
//         </a>
//       </div>

//       {/* Main footer grid */}
//       <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

//         {/* Brand */}
//         <div className="md:col-span-1">
//           <Link href="/" className="flex items-center gap-3 mb-4">
//             <div className="relative w-12 h-12 flex-shrink-0">
//               <Image src="/logo.png" alt="Anandam Logo" fill className="object-contain brightness-90" />
//             </div>
//             <div>
//               <p className="font-display text-lg text-amber-100 leading-none">{restaurantInfo.name}</p>
//               <p className="font-devanagari text-xs text-saffron-500 mt-0.5">{restaurantInfo.nameDevanagari}</p>
//             </div>
//           </Link>
//           <p className="text-amber-200/45 text-sm leading-relaxed mb-5">{restaurantInfo.description}</p>
//           {/* Social */}
//           <div className="flex gap-3">
//             <a href={restaurantInfo.social.instagram} target="_blank" rel="noopener noreferrer"
//               className="w-12 h-12 rounded-full flex items-center justify-center text-amber-200/60 hover:text-white hover:bg-pink-600 hover:border-pink-500 transition-all duration-200"
//               style={{ border: "1px solid rgba(200,120,30,0.35)" }} aria-label="Instagram">
//               <InstagramIcon />
//             </a>
//             <a href={restaurantInfo.social.facebook} target="_blank" rel="noopener noreferrer"
//               className="w-12 h-12 rounded-full flex items-center justify-center text-amber-200/60 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-200"
//               style={{ border: "1px solid rgba(200,120,30,0.35)" }} aria-label="Facebook">
//               <FacebookIcon />
//             </a>
//             <a href={`https://wa.me/${restaurantInfo.whatsapp}`} target="_blank" rel="noopener noreferrer"
//               className="w-12 h-12 rounded-full flex items-center justify-center text-amber-200/60 hover:text-white hover:bg-[#25D366] hover:border-green-500 transition-all duration-200"
//               style={{ border: "1px solid rgba(200,120,30,0.35)" }} aria-label="WhatsApp">
//               <WhatsAppIcon />
//             </a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="font-display text-base text-saffron-400 mb-4 uppercase tracking-wider">Quick Links</h4>
//           <ul className="space-y-2.5">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <Link href={link.href}
//                   className="text-amber-200/50 hover:text-saffron-400 text-sm transition-colors flex items-center gap-2 group">
//                   <span className="text-saffron-700 group-hover:text-saffron-400 transition-colors">›</span>
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="font-display text-base text-saffron-400 mb-4 uppercase tracking-wider">Contact</h4>
//           <address className="not-italic space-y-3 text-sm text-amber-200/50">
//             <p className="leading-relaxed">
//               {restaurantInfo.address.line1},<br />
//               {restaurantInfo.address.line2},<br />
//               {restaurantInfo.address.city}, {restaurantInfo.address.state} – {restaurantInfo.address.pin}
//             </p>
//             {restaurantInfo.phones.map((p) => (
//               <p key={p.number}>
//                 <a href={`tel:${p.number}`} className="hover:text-saffron-400 transition-colors">
//                   {p.number}
//                 </a>
//                 <span className="text-amber-200/30 text-xs ml-1">({p.label})</span>
//               </p>
//             ))}
//             <p>
//               <a href={`mailto:${restaurantInfo.email}`} className="hover:text-saffron-400 transition-colors">
//                 {restaurantInfo.email}
//               </a>
//             </p>
//           </address>
//         </div>

//         {/* Hours */}
//         <div>
//           <h4 className="font-display text-base text-saffron-400 mb-4 uppercase tracking-wider">Opening Hours</h4>
//           <div className="space-y-3">
//             {restaurantInfo.hours.map((h, i) => (
//               <div key={i}>
//                 <p className="text-amber-200/70 text-xs font-medium">{h.days}</p>
//                 <p className="text-amber-200/45 text-xs mt-0.5">{h.time}</p>
//               </div>
//             ))}
//           </div>
//           <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(200,120,30,0.15)" }}>
//             <div className="inline-flex items-center gap-1.5">
//               <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//               <span className="text-green-400 text-xs font-medium">Open Now</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div style={{ borderTop: "1px solid rgba(200,120,30,0.12)" }}>
//         <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-amber-200/25">
//           <p>© {year} {restaurantInfo.name}. All rights reserved.</p>
//           <p>Pure Vegetarian · {restaurantInfo.address.city}, {restaurantInfo.address.state}, India</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function InstagramIcon() {
//   return (
//     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//     </svg>
//   );
// }

// function FacebookIcon() {
//   return (
//     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//     </svg>
//   );
// }

// function WhatsAppIcon() {
//   return (
//     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
//     </svg>
//   );
// }




import Link from "next/link";
import Image from "next/image";
import { restaurantInfo } from "@/data/restaurant";

const navLinks = [
  { href: "/",         label: "Home"       },
  { href: "/menu",     label: "Menu"       },
  { href: "/gallery",  label: "Gallery"    },
  { href: "/about",    label: "About"      },
  { href: "/contact",  label: "Contact"    },
  { href: "/booking",  label: "Book Table" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0e0703" }} className="text-amber-200/60">

      {/* Map strip */}
      <div className="w-full h-36 md:h-44 relative overflow-hidden"
        style={{ borderBottom: "1px solid rgba(200,120,30,0.15)" }}>
        <iframe
          src={restaurantInfo.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Anandam Sweets & Restaurant Location"
        />
        {/* Get Directions overlay button */}
        <a
          href="https://maps.google.com/?q=28.894417,79.257833"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full shadow-lg transition-all active:scale-95"
          style={{ background: "#ff7d0a", color: "#fff" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Get Directions
        </a>
      </div>

      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image src="/logo.png" alt="Anandam Logo" fill className="object-contain brightness-90" />
            </div>
            <div>
              <p className="font-display text-lg text-amber-100 leading-none">{restaurantInfo.name}</p>
              <p className="font-devanagari text-xs text-saffron-500 mt-0.5">{restaurantInfo.nameDevanagari}</p>
            </div>
          </Link>
          <p className="text-amber-200/45 text-sm leading-relaxed mb-5">{restaurantInfo.description}</p>
          {/* Social */}
          <div className="flex gap-3">
            <a href={restaurantInfo.social.instagram} target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-amber-200/60 hover:text-white hover:bg-pink-600 hover:border-pink-500 transition-all duration-200"
              style={{ border: "1px solid rgba(200,120,30,0.35)" }} aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={restaurantInfo.social.facebook} target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-amber-200/60 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-200"
              style={{ border: "1px solid rgba(200,120,30,0.35)" }} aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href={`https://wa.me/${restaurantInfo.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-amber-200/60 hover:text-white hover:bg-[#25D366] hover:border-green-500 transition-all duration-200"
              style={{ border: "1px solid rgba(200,120,30,0.35)" }} aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-base text-saffron-400 mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}
                  className="text-amber-200/50 hover:text-saffron-400 text-sm transition-colors flex items-center gap-2 group">
                  <span className="text-saffron-700 group-hover:text-saffron-400 transition-colors">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-base text-saffron-400 mb-4 uppercase tracking-wider">Contact</h4>
          <address className="not-italic space-y-3 text-sm text-amber-200/50">
            <p className="leading-relaxed">
              {restaurantInfo.address.line1},<br />
              {restaurantInfo.address.line2},<br />
              {restaurantInfo.address.city}, {restaurantInfo.address.state} – {restaurantInfo.address.pin}
            </p>
            {restaurantInfo.phones.map((p) => (
              <p key={p.number}>
                <a href={`tel:${p.number}`} className="hover:text-saffron-400 transition-colors">
                  {p.number}
                </a>
                <span className="text-amber-200/30 text-xs ml-1">({p.label})</span>
              </p>
            ))}
            <p>
              <a href={`mailto:${restaurantInfo.email}`} className="hover:text-saffron-400 transition-colors">
                {restaurantInfo.email}
              </a>
            </p>
          </address>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display text-base text-saffron-400 mb-4 uppercase tracking-wider">Opening Hours</h4>
          <div className="space-y-3">
            {restaurantInfo.hours.map((h, i) => (
              <div key={i}>
                <p className="text-amber-200/70 text-xs font-medium">{h.days}</p>
                <p className="text-amber-200/45 text-xs mt-0.5">{h.time}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(200,120,30,0.15)" }}>
            <div className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-medium">Open Now</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(200,120,30,0.12)" }}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-amber-200/25">
          <p>© {year} {restaurantInfo.name}. All rights reserved.</p>
          <p>Pure Vegetarian · {restaurantInfo.address.city}, {restaurantInfo.address.state}, India</p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}