'use client';

import { FC } from 'react';

/**
 * Composant qui précharge les ressources critiques pour améliorer le FCP et LCP
 * À utiliser dans le layout principal ou le composant App
 */
const ResourcePreload: FC = () => {
  // Liste des ressources à précharger
  const criticalResources = [
    // Images critiques
    { href: '/images/optimized/maxime.webp', as: 'image' },
    
    // Polices utilisées sur la page d'accueil
    // Remplacez par vos polices si vous en utilisez de personnalisées
    { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', as: 'style' },
  ];

  return (
    <>
      {criticalResources.map((resource, index) => (
        <link 
          key={index}
          rel="preload" 
          href={resource.href} 
          as={resource.as} 
          crossOrigin={resource.as === 'font' ? 'anonymous' : undefined}
        />
      ))}
    </>
  );
};

export default ResourcePreload; 