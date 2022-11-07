/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['unsplash.com', 'images.unsplash.com'] },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
