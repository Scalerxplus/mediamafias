import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/listen",
        destination: "/links",
        permanent: false,
      },
      {
        source: "/bio",
        destination: "/links",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
