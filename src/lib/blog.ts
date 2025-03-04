// Types pour les articles de blog
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  slug: string;
  image?: string;
  categories: string[];
  readingTime: string;
}

// Articles de blog fictifs (à remplacer par des données réelles ultérieurement)
export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Comment j\'ai construit mon portfolio avec Next.js et Tailwind',
    excerpt: 'Découvrez les étapes de création de ce portfolio moderne en utilisant les dernières technologies web.',
    date: '2024-03-04',
    slug: 'creation-portfolio-nextjs-tailwind',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1000&auto=format&fit=crop',
    categories: ['Next.js', 'Tailwind', 'Développement Web'],
    readingTime: '5 min',
    content: `
      <p>La création d'un portfolio de développeur est une étape essentielle pour présenter ses compétences et réalisations. J'ai récemment construit mon portfolio en utilisant Next.js et Tailwind CSS, deux technologies modernes qui offrent une excellente expérience de développement et des performances optimales.</p>
      
      <h2>Pourquoi Next.js ?</h2>
      <p>Next.js est un framework React qui propose des fonctionnalités puissantes comme le rendu serveur, la génération de sites statiques, et un système de routage intégré. Ces caractéristiques en font un choix idéal pour un site portfolio qui doit être rapide, bien référencé par les moteurs de recherche, et facile à maintenir.</p>
      
      <h2>L'apport de Tailwind CSS</h2>
      <p>Tailwind CSS est un framework CSS utilitaire qui m'a permis de styliser mon site rapidement tout en gardant une cohérence visuelle. Plutôt que d'écrire du CSS personnalisé pour chaque composant, j'ai pu assembler des classes utilitaires directement dans mes composants React, accélérant considérablement le processus de développement.</p>
      
      <h2>Structure du projet</h2>
      <p>J'ai organisé mon projet en suivant l'architecture recommandée par Next.js 13+ avec l'App Router. Cette approche basée sur les dossiers rend la navigation dans le code plus intuitive et facilite l'ajout de nouvelles sections.</p>
      
      <h2>Performance et accessibilité</h2>
      <p>Une attention particulière a été portée à l'optimisation des performances et à l'accessibilité. L'utilisation des Images optimisées de Next.js, la mise en œuvre du mode sombre, et le respect des normes WCAG ont été des priorités dès le début du projet.</p>
      
      <h2>Conclusion</h2>
      <p>La combinaison de Next.js et Tailwind CSS s'est avérée extrêmement efficace pour créer un portfolio moderne, performant et facile à maintenir. Je continuerai à enrichir ce site avec de nouvelles fonctionnalités et sections, comme ce blog que vous êtes en train de lire !</p>
    `
  },
  {
    id: '2',
    title: 'Les meilleures pratiques pour un code React maintenable',
    excerpt: 'Conseils et techniques pour écrire du code React propre, performant et facile à maintenir sur le long terme.',
    date: '2024-02-28',
    slug: 'meilleures-pratiques-react',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1000&auto=format&fit=crop',
    categories: ['React', 'Bonnes pratiques', 'Front-end'],
    readingTime: '7 min',
    content: `
      <p>Après plusieurs années à développer des applications React, j'ai identifié certaines pratiques qui contribuent grandement à la maintenabilité du code. Voici mes recommandations pour un code React propre et durable.</p>
      
      <h2>Structurer ses composants</h2>
      <p>La division en petits composants réutilisables est essentielle. Un composant ne devrait avoir qu'une seule responsabilité et ne pas dépasser 200-300 lignes. J'utilise souvent le pattern de "composition" plutôt que la "prop drilling" pour les composants complexes.</p>
      
      <h2>Gérer l'état efficacement</h2>
      <p>Le choix de la solution de gestion d'état doit être adapté à la taille du projet. Pour de petites applications, les hooks useState et useReducer sont suffisants. Pour des projets plus importants, des bibliothèques comme Redux Toolkit ou Zustand peuvent être plus appropriées.</p>
      
      <h2>Tests automatisés</h2>
      <p>L'écriture de tests est souvent négligée mais cruciale pour la maintenabilité. Je recommande d'utiliser Testing Library pour les tests de composants et Jest pour les tests unitaires. Viser une couverture de 70-80% est un bon objectif.</p>
      
      <h2>Performance</h2>
      <p>Utiliser React.memo, useCallback et useMemo à bon escient peut améliorer significativement les performances. L'outil React Profiler aide à identifier les rendus inutiles. Attention toutefois à ne pas optimiser prématurément.</p>
      
      <h2>Conclusion</h2>
      <p>Ces bonnes pratiques m'ont permis de maintenir des codebases React sur plusieurs années sans accumuler de dette technique excessive. La clé est de rester cohérent et de refactoriser régulièrement.</p>
    `
  },
  {
    id: '3',
    title: 'Comment j\'ai optimisé les performances de mon site',
    excerpt: 'Stratégies d\'optimisation pour améliorer significativement les scores Lighthouse et l\'expérience utilisateur.',
    date: '2024-02-15',
    slug: 'optimisation-performances-web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    categories: ['Performance', 'SEO', 'UX'],
    readingTime: '6 min',
    content: `
      <p>L'optimisation des performances web est devenue un facteur critique pour l'expérience utilisateur et le référencement. Voici comment j'ai considérablement amélioré les performances de mon site portfolio.</p>
      
      <h2>Analyse initiale</h2>
      <p>J'ai commencé par effectuer un audit avec Lighthouse pour identifier les problèmes principaux. Mon score initial était de 72 en performance, principalement en raison de ressources bloquant le rendu et d'images non optimisées.</p>
      
      <h2>Optimisation des images</h2>
      <p>L'utilisation du composant Image de Next.js m'a permis d'optimiser automatiquement les images, de les servir dans des formats modernes comme WebP, et d'implémenter le lazy loading. Cette amélioration a eu un impact majeur sur les temps de chargement.</p>
      
      <h2>Chargement des ressources</h2>
      <p>J'ai mis en place un préchargement intelligent des ressources critiques et différé le chargement des scripts non essentiels. L'utilisation de Resource Hints (preload, prefetch, dns-prefetch) a également contribué à améliorer les performances perçues.</p>
      
      <h2>Réduction du JavaScript</h2>
      <p>La réduction de la taille du bundle JavaScript a été réalisée en utilisant le tree shaking, en chargeant les bibliothèques externes de manière différée, et en divisant le code en chunks plus petits grâce au code splitting de Next.js.</p>
      
      <h2>Résultats</h2>
      <p>Après ces optimisations, mon score Lighthouse est passé à 98 en performance. Plus important encore, les métriques Web Vitals comme le LCP et le CLS ont été considérablement améliorées, offrant une expérience utilisateur beaucoup plus fluide.</p>
      
      <h2>Conclusion</h2>
      <p>L'optimisation des performances est un processus continu qui nécessite une surveillance régulière. Les efforts investis dans ce domaine sont largement récompensés par une meilleure expérience utilisateur et un meilleur référencement.</p>
    `
  }
];

// Fonctions pour récupérer les articles
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  // Dans un cas réel, cette fonction pourrait récupérer les articles depuis une API ou un CMS
  return BLOG_POSTS;
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  // Dans un cas réel, cette fonction pourrait récupérer un article spécifique depuis une API ou un CMS
  return BLOG_POSTS.find(post => post.slug === slug) || null;
};

// Formater la date au format suisse
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-CH', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

// Calculer le temps de lecture estimé
export const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min`;
}; 