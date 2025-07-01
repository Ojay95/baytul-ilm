/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
  swcMinify: false,
  experimental: {
    esmExternals: false,
  },
}

module.exports = nextConfig