/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'localhost',
      'localhost:3000',
      'ronnielutalo.github.io',
    ],
  },
};

module.exports = nextConfig;
