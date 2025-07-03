import { MetadataRoute } from "next";

// Configuration du domaine de base selon l'environnement
const getBaseUrl = () => {
  // En production, utiliser le domaine principal
  if (process.env.NODE_ENV === 'production') {
    return 'https://maximedesogus.ch';
  }
  
  // En développement, utiliser Vercel URL ou localhost
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  
  // Routes statiques importantes pour le SEO
  const staticRoutes = [
    {
      url: "",
      lastModified: new Date("2024-12-20"), // Date de dernière modification du contenu
      changeFrequency: "monthly" as const,
      priority: 1.0, // Page d'accueil = priorité maximale
    },
    // Pas d'ancres dans le sitemap car c'est une SPA
    // Les sections sont accessibles via la page principale
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
