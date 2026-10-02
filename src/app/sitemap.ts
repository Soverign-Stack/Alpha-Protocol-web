import type { MetadataRoute } from "next";

const BASE = "https://www.alphaprotocol.network";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/network", "/use-cases", "/build", "/roadmap", "/join"].map((path) => ({ url: BASE + path }));
}
