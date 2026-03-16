/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Required for video streaming on Vercel
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [
          { key: "Accept-Ranges",  value: "bytes"                },
          { key: "Cache-Control",  value: "public, max-age=31536000, immutable" },
          { key: "Content-Type",   value: "video/mp4"            },
        ],
      },
    ];
  },
};

module.exports = nextConfig;