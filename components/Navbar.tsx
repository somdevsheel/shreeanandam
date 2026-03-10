"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { restaurantInfo } from "@/data/restaurant";

const navLinks = [
  { href: "/",        label: "Home"    },
  { href: "/menu",    label: "Menu"    },
  { href: "/gallery", label: "Gallery" },
  { href: "/about",   label: "About"   },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  // Always dark — matches site theme
  const navBg = scrolled
    ? "bg-[#120a04]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-saffron-900/40"
    : "bg-[#120a04]/80 backdrop-blur-sm";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
            <Image src="/logo.png" alt="Shree Anandam Logo" fill className="object-contain" priority />
          </div>
          <div className="leading-tight">
            <p className="font-display font-bold text-lg md:text-xl leading-none text-amber-100">
              {restaurantInfo.name}
            </p>
            <p className="font-devanagari text-xs leading-none mt-0.5 text-saffron-400">
              {restaurantInfo.nameDevanagari}
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-widest uppercase font-medium transition-colors duration-200 relative
                text-amber-200/80 hover:text-saffron-400
                ${pathname === link.href
                  ? "text-saffron-400 after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-saffron-500 after:rounded-full"
                  : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`tel:${restaurantInfo.phone}`}
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full border-2 border-saffron-500 text-saffron-400 hover:bg-saffron-500 hover:text-white transition-all duration-200 active:scale-95"
        >
          <PhoneIcon /> Call Now
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg text-amber-200"
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-screen" : "max-h-0"}`}>
        <div className="bg-[#1a0d04] border-t border-saffron-900/40 px-6 pb-6 pt-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 border-b border-saffron-900/30 font-medium text-sm tracking-wide uppercase
                ${pathname === link.href ? "text-saffron-400" : "text-amber-200/80"}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a href={`tel:${restaurantInfo.phone}`} className="btn-primary justify-center">
              <PhoneIcon /> Call Now
            </a>
            <a
              href={`https://wa.me/${restaurantInfo.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium px-6 py-3 rounded-full hover:bg-[#1ebe59] transition-colors"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
}
function WhatsAppIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>;
}
function MenuIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>;
}
function XIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;
}
