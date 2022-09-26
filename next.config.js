/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'localhost:8888',
      'sdgsfupre-ereyomi.000webhostapp.com',
    ],
  },
};

module.exports = nextConfig;
