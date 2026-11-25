import { MetadataRoute } from "next";
import { seoConfig, getBuildDate, SITE_URL } from "@/lib/seo-config";

/**
 * Récupère la date de modification la plus récente parmi toutes les dates de contenu et la date de build.
 * C'est la date qui sera utilisée pour l'unique entrée du sitemap.
 * @param buildDate La date de build du site.
 * @returns La date la plus récente.
 */
const getMostRecentDate = (buildDate: Date): Date => {
  const contentDates = Object.values(seoConfig.lastModified);
  const allDates = [...contentDates, buildDate];

  // Trouve la date la plus récente (le plus grand timestamp)
  return new Date(Math.max(...allDates.map((d) => d.getTime())));
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const buildDate = getBuildDate();
  const mostRecentDate = getMostRecentDate(buildDate);

  // Pour une SPA, il est préférable de n'avoir qu'une seule entrée dans le sitemap.
  // La date de dernière modification reflète le changement le plus récent sur l'ensemble du site,
  // que ce soit un changement de contenu (dates manuelles) ou un déploiement (date de build).
  return [
    {
      url: baseUrl,
      lastModified: mostRecentDate,
      changeFrequency: seoConfig.changeFrequency.homepage,
      priority: seoConfig.priority.homepage,
    },
  ];
}
