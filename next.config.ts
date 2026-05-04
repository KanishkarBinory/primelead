import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.primeleed.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/academics",
        destination: "/academics/overview",
        permanent: true,
      },
      {
        source: "/apply-form",
        destination: "/admission/how-to-apply",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
