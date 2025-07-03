// Configuration SEO centralisée pour les dates de modification
export const seoConfig = {
  // Dates de dernière modification des sections principales
  lastModified: {
    about: new Date("2024-12-15"), // Dernière mise à jour de votre profil/bio
    experience: new Date("2024-12-20"), // Dernière expérience ajoutée
    projects: new Date("2024-12-20"), // Dernier projet ajouté
    contact: new Date("2024-12-01"), // Dernière modification des infos de contact
    skills: new Date("2024-12-10"), // Dernière mise à jour des compétences
  },

  // Fréquences de mise à jour pour le sitemap
  changeFrequency: {
    homepage: "monthly" as const,
    about: "yearly" as const,
    experience: "monthly" as const,
    projects: "weekly" as const,
    contact: "yearly" as const,
  },

  // Priorités SEO (0.0 à 1.0)
  priority: {
    homepage: 1.0,
    experience: 0.9,
    projects: 0.9,
    about: 0.8,
    contact: 0.7,
  },
};

// 🔧 Fonction utilitaire pour obtenir la date de build automatique
export const getBuildDate = (): Date => {
  // Option 1: Variable d'environnement Vercel (Git commit date)
  if (process.env.VERCEL_GIT_COMMIT_DATE) {
    return new Date(process.env.VERCEL_GIT_COMMIT_DATE);
  }

  // Option 2: Variable d'environnement de build personnalisée
  if (process.env.BUILD_DATE) {
    return new Date(process.env.BUILD_DATE);
  }

  // Option 3: Fallback sur la date actuelle
  return new Date();
};
