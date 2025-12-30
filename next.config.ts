import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disable Lightning CSS optimization to avoid missing native binary on Vercel
    optimizeCss: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
