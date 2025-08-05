import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning only; doesn’t fail builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
