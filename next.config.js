/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local images in /public are served automatically.
    // Unsplash remote pattern kept for hero/gallery images.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
