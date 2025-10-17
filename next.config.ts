import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/dify-api/:path*',
        destination: 'http://dify.deskterior.ai/:path*',
      },
    ];
  },
};

export default nextConfig;
