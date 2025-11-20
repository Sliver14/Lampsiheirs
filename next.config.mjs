/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep your existing settings (safe for now)
  typescript: {
    ignoreBuildErrors: true, // Remove this later when you're ready
  },
  images: {
    unoptimized: true, // You're using <Image> from 'next/image'? We can fix this later too
  },

  // REQUIRED: This makes the 'geist' font package work perfectly
  transpilePackages: ['geist'],

  // Optional but recommended for performance & future-proofing
  reactStrictMode: true,
  swcMinify: true,
}

export default nextConfig