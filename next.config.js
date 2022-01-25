/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}

module.exports = {
  images: {
    domains: ['avatars.githubusercontent.com', 'github.com', 'via.placeholder.com'],
  },
};