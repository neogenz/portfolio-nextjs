'use client';

import { FC } from 'react';
import { useEffect } from 'react';

interface Resource {
  href: string;
  as: string;
  importance?: 'high' | 'low' | 'auto';
}

/**
 * Composant qui précharge les ressources critiques pour améliorer le FCP et LCP
 * À utiliser dans le layout principal ou le composant App
 */
const ResourcePreload: FC = () => {
  // Liste des ressources à précharger
  const criticalResources: Resource[] = [
    // Images critiques
    { href: '/images/optimized/maxime.webp', as: 'image', importance: 'high' },
    
    // Polices utilisées sur la page d'accueil
    { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', as: 'style', importance: 'high' },
    
    // Scripts tiers critiques (si applicable)
    // { href: '/scripts/critical.js', as: 'script', importance: 'high' },
  ];

  // Préchargement en différé des ressources non-critiques
  useEffect(() => {
    // Fonction pour précharger les ressources après le chargement initial
    const preloadLowPriorityResources = () => {
      const lowPriorityResources: Resource[] = [
        // Images non-critiques qui seront visibles sous le pli mais pas immédiatement
        // Ajouter les images des projets, par exemple
      ];

      // Créer dynamiquement les liens de préchargement
      lowPriorityResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.as === 'font') link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Attendre que la page soit chargée avant de précharger les ressources de faible priorité
    if (document.readyState === 'complete') {
      preloadLowPriorityResources();
    } else {
      window.addEventListener('load', preloadLowPriorityResources);
      return () => window.removeEventListener('load', preloadLowPriorityResources);
    }
  }, []);

  return (
    <>
      {criticalResources.map((resource, index) => (
        <link 
          key={index}
          rel="preload" 
          href={resource.href} 
          as={resource.as} 
          crossOrigin={resource.as === 'font' ? 'anonymous' : undefined}
          // @ts-ignore - 'importance' est un attribut valide pour l'élément link mais non reconnu par TypeScript
          importance={resource.importance}
        />
      ))}
    </>
  );
};

export default ResourcePreload; 