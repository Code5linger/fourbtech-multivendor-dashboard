/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  experimental: {
    serverActions: true,
  },
  transpilePackages: ['@clerk/nextjs'],
};

module.exports = nextConfig;
