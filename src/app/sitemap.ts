import { siteConfig } from "@/lib/site";
import { vehicles } from "@/lib/data/vehicles";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/inventory",
    "/sourcing",
    "/imports",
    "/customization",
    "/about",
    "/contact",
    "/request",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    })),
    ...vehicles.map((v) => ({
      url: `${base}/inventory/${v.slug}`,
      lastModified: new Date(),
    })),
  ];
}
