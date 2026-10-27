import type { MetadataRoute } from "next";
import { celebrations } from "@/data/celebrations";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/weddings-events", "/portfolio", "/about", "/contact"];
  const celebrationPaths = celebrations.map((celebration) => `/weddings-events/${celebration.slug}`);

  return [...staticPaths, ...celebrationPaths].map((path) => ({
    url: `${siteConfig.url}${path}`,
  }));
}
