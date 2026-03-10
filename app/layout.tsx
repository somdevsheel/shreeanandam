import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { restaurantInfo } from "@/data/restaurant";

export const metadata: Metadata = {
  title: {
    default: `${restaurantInfo.name} – ${restaurantInfo.tagline}`,
    template: `%s | ${restaurantInfo.name}`,
  },
  description: `${restaurantInfo.name} is a traditional pure-vegetarian Indian restaurant in ${restaurantInfo.address.city}. ${restaurantInfo.description}`,
  keywords: [
    "Shree Anandam",
    "vegetarian restaurant Chennai",
    "Indian restaurant Chennai",
    "traditional Indian food",
    "pure veg restaurant",
    "dal makhani Chennai",
    "paneer tikka Chennai",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shreeanandam.in",
    siteName: restaurantInfo.name,
    title: `${restaurantInfo.name} – ${restaurantInfo.tagline}`,
    description: restaurantInfo.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${restaurantInfo.name} Restaurant`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${restaurantInfo.name} – ${restaurantInfo.tagline}`,
    description: restaurantInfo.description,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
