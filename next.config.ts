// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    domains: [
      "skillicons.dev",
      "user-images.githubusercontent.com",
      "cdn-icons-png.flaticon.com",
    ],
  },
};

module.exports = nextConfig;
