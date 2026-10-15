import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  images: { formats: ["image/avif", "image/webp"] },
  turbopack: { root: process.cwd() },
};

export default nextConfig;
