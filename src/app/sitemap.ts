import { MetadataRoute } from "next";

const VERCEL_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  // Seulement les vraies pages/routes - pas d'ancres
  const staticRoutes = [""];

  return staticRoutes.map((route) => ({
    url: `${VERCEL_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
