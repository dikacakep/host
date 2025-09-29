/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false, // URL tanpa slash di akhir
  poweredByHeader: false, // Hilangkan header "X-Powered-By: Next.js"
  swcMinify: true, // Aktifkan compiler cepat
};

module.exports = nextConfig;
