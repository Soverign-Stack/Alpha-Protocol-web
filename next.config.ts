import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The download and dashboard pages point at installers that are not published yet.
  async redirects() {
    return [
      { source: "/download", destination: "https://go.alphaprotocol.network/download", permanent: false },
      { source: "/dashboard", destination: "/join", permanent: false },
      // Old page names, kept working for existing links.
      { source: "/learn", destination: "/network", permanent: true },
      { source: "/develop", destination: "/build", permanent: true },
    ];
  },
};

export default nextConfig;
