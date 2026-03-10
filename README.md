# 🍛 Shree Anandam — Restaurant Website

A complete, production-ready restaurant website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 📁 Project Structure

```
shree-anandam/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx            # Root layout (Navbar + Footer + SEO metadata)
│   ├── page.tsx              # Home page
│   ├── menu/
│   │   └── page.tsx          # Full menu page
│   ├── gallery/
│   │   └── page.tsx          # Photo gallery page
│   ├── about/
│   │   └── page.tsx          # About / Our Story page
│   └── contact/
│       └── page.tsx          # Contact & Directions page
│
├── components/               # Reusable components
│   ├── Navbar.tsx            # Sticky navigation with mobile menu
│   ├── HeroSection.tsx       # Full-screen hero with CTA buttons
│   ├── MenuSection.tsx       # Tabbed menu with category filter
│   ├── GalleryGrid.tsx       # Responsive photo gallery grid
│   ├── ContactSection.tsx    # Contact info, hours, map embed
│   └── Footer.tsx            # Site footer with links & social
│
├── data/                     # Static data files — easy to edit
│   ├── menu.ts               # All menu categories and items
│   ├── restaurant.ts         # Restaurant info, hours, address, phone
│   └── gallery.ts            # Gallery image list
│
├── public/                   # Static assets
│   ├── logo.png              # ← REPLACE with real logo (keep filename)
│   └── logo.svg              # SVG version of logo
│
├── styles/
│   └── globals.css           # Global CSS, Tailwind directives, fonts
│
├── tailwind.config.ts        # Custom color palette & fonts
├── next.config.js            # Image domains config
├── tsconfig.json             # TypeScript config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Visit **http://localhost:3000** in your browser.

---

## 🖼️ Replacing the Logo

The logo is intentionally designed as a drop-in replacement:

1. Place your logo file at: `public/logo.png`
2. For best results: **120×120px or 240×240px PNG** with transparent background
3. No code changes required — it auto-updates everywhere (Navbar + Footer)

**Optional:** Also update `public/logo.svg` if you have an SVG version for sharper rendering.

---

## 📝 Updating Restaurant Content

All content is in the `/data` folder — **no component editing needed**.

### Change Restaurant Info (phone, address, hours, social):
```
data/restaurant.ts
```

### Add / Edit Menu Items:
```
data/menu.ts
```
Each item follows this structure:
```typescript
{
  id: "unique-id",
  name: "Dish Name",
  description: "Short description of the dish.",
  price: 250,           // in INR
  veg: true,            // true = veg (green dot), false = non-veg (red dot)
  popular: true,        // optional — shows "Popular" badge
}
```

### Update Google Maps Embed:
1. Go to [Google Maps](https://maps.google.com)
2. Search your restaurant
3. Click **Share → Embed a map → Copy HTML**
4. Extract the `src="..."` URL
5. Paste it into `data/restaurant.ts` → `mapEmbedUrl`

### Change Gallery Images:
Edit `data/gallery.ts`. Images can be local (`/images/photo.jpg`) or from Unsplash.

---

## 🎨 Customising Colors & Fonts

### Colors (in `tailwind.config.ts`):
- `saffron` — Primary orange/saffron palette
- `spice` — Deep red-brown accent
- `cream` — Warm off-white backgrounds

### Fonts (in `styles/globals.css`):
- **Display/Headings**: Cormorant Garamond (elegant serif)
- **Body**: DM Sans (clean, readable)
- **Hindi/Devanagari**: Noto Serif Devanagari

To change fonts, update the Google Fonts `@import` at the top of `globals.css`.

---

## 📱 Features Checklist

- [x] Responsive mobile-first layout
- [x] Fixed navbar with scroll detection
- [x] Full-screen hero with 3 CTA buttons (Menu, Call, Directions)
- [x] Tabbed menu with 5 categories (35+ items)
- [x] Responsive photo gallery grid
- [x] About page with story, values & timeline
- [x] Contact page with hours, address, phone
- [x] Embedded Google Maps
- [x] Click-to-call button
- [x] WhatsApp floating button
- [x] Veg/non-veg indicators on menu
- [x] "Popular" badges on menu items
- [x] Basic SEO metadata + OpenGraph tags
- [x] Accessible markup with ARIA labels

---

## ☁️ Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# From project root
vercel

# Follow prompts:
# - Link to your Vercel account
# - Set project name: shree-anandam
# - Deploy!
```

Your site will be live at `https://shree-anandam.vercel.app`

### Option 2: GitHub + Vercel Dashboard

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Shree Anandam website"
   git remote add origin https://github.com/YOUR_USERNAME/shree-anandam.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Done! ✅

### Custom Domain

After deploying on Vercel:
1. Go to Project Settings → Domains
2. Add your domain: `shreeanandam.in`
3. Update DNS records as instructed by Vercel

---

## 🛠️ Production Build

```bash
npm run build    # Build for production
npm run start    # Start production server locally
npm run lint     # Run ESLint
```

---

## 📸 Adding Real Food Photos

Replace Unsplash images with your own:

1. Add photos to `public/images/` folder
2. Update `data/gallery.ts`:
   ```typescript
   src: "/images/your-photo.jpg",
   ```

Recommended image dimensions:
- Gallery: **600×600px** (square) or **1200×600px** (landscape for featured)
- Hero: **1920×1080px**
- Logo: **240×240px** (with transparent background)

---

## 💡 WhatsApp Integration

The WhatsApp button uses this format:
```
https://wa.me/919876543210?text=Hi%2C%20I'd%20like%20to%20make%20a%20reservation
```

Update your number in `data/restaurant.ts` → `whatsapp` (country code + number, no spaces or +).

---

## 🔧 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | React framework, routing, SSR/SSG |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Google Fonts | Cormorant Garamond, DM Sans, Noto Serif Devanagari |
| Vercel | Hosting & deployment |

---

*Built with ❤️ for Shree Anandam Restaurant*
