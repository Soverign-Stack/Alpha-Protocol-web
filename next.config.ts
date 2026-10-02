import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The download and dashboard pages point at installers that are not published yet.
  async redirects() {
    return [
      { source: "/download", destination: "/#join", permanent: false },
      { source: "/dashboard", destination: "/#join", permanent: false },
    ];
  },
};

export default nextConfig;
