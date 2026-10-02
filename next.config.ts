import type { NextConfig } from "next";

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: SECURITY_HEADERS }];
  },
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
