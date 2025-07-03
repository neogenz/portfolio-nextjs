import { MetadataRoute } from "next";

const VERCEL_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // Disallow crawling of API routes
    },
    sitemap: `${VERCEL_URL}/sitemap.xml`,
  };
}
