/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.vercel.com", "images.unsplash.com"]
  }
};

module.exports = nextConfig;
