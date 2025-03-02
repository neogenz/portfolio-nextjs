'use client';

import { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

// Project data based on the detailed information
const projects = [
  {
    id: 1,
    title: 'Système d\'Aide à l\'Exploitation (SAE)',
    subtitle: 'Application d\'Administration Multi-Client',
    client: 'OpenIT SA',
    category: 'Application Web',
    description: 'Interface de gestion en temps réel du réseau de transport. Solution multi-client avec navigation spécifique, écrans et fonctionnalités partagées ou spécifiques selon les clients, construite autour d\'un noyau commun. Objectif principal: Offrir un suivi en temps réel pour améliorer la gestion opérationnelle.',
    details: [
      'Architecture modulaire par domaine métier permettant une grande flexibilité et personnalisation',
      'Développement from scratch d\'une interface complexe en Angular 19 avec Angular Material et TailwindCSS',
      'Gestion des flux temps réel avec RxJS et Signals',
      'Performance optimisée : grâce à un chargement efficace des données & une gestion performante des états de l\'application',
      'Intégration REST avec un serveur C# via Swagger',
      'CI/CD automatisé avec Docker & GitLab',
      'Monitoring des erreurs et réduction de 90% des crashs grâce à Sentry',
      'Tests unitaires et end-to-end avec Jest et Playwright',
      'Utilisation avancée des fonctionnalités d\'Angular (Signals, Resources, lazy loading, standalone components)'
    ],
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f',
    url: 'openit.ch/sae',
    link: '#',
    skills: ['Angular 19', 'RxJS', 'Signals', 'TailwindCSS', 'REST API', 'CI/CD', 'Jest', 'Playwright', 'Sentry']
  },
  {
    id: 2,
    title: 'Plateforme de Gestion des Objets Trouvés',
    subtitle: 'Automatisation de recherche',
    client: 'OpenIT SA',
    category: 'Fullstack',
    description: 'Automatisation de la recherche et récupération d\'objets perdus. Développement Fullstack Angular / NestJS / Prisma / MongoDB. Objectif: Réduire le coût de gestion des objets trouvés et augmenter le taux de récupération.',
    details: [
      'Développement full-stack d\'une solution avec Angular/Material/Tailwind et NestJS/Prisma/MongoDB',
      'Gestion réactive des recherches et mises à jour avec RxJS',
      'Automatisation du matching via IA et embeddings (HuggingFace, GPT, Python Flask)',
      'Interface utilisateur intuitive pour les réclamations',
      'Gestion complète du flux d\'identification, de stockage et de restitution des objets perdus',
      'Optimisation de la récupération des objets grâce à une interface utilisateur intuitive'
    ],
    image: 'https://images.unsplash.com/photo-1541726260-e6b6a6a08b27',
    url: 'lost.openit.ch',
    link: '#',
    skills: ['Angular', 'NestJS', 'Prisma', 'MongoDB', 'IA', 'RxJS', 'Python Flask', 'HuggingFace', 'GPT']
  },
  {
    id: 3,
    title: 'Application Mobile Multi-Clients',
    subtitle: 'Transports Publics',
    client: 'OpenIT SA',
    category: 'Application Mobile',
    description: 'Information voyageur et gestion de titres de transport. Architecture monorepo NX avec Angular / Ionic / Capacitor. Objectif: Fournir une application performante pour les usagers des transports publics.',
    details: [
      'Architecture monorepo NX intégrant Angular, Ionic et Capacitor',
      'Migration progressive Angular 5 → dernière version stable',
      'Développement d\'une carte interactive en temps réel avec Leaflet & RxJS',
      'Implémentation de plugins natifs hybrides en Swift (iOS) et Java (Android)',
      'Intégration d\'authentification sécurisée JWT, Swisspass',
      'Gestion d\'état avancée avec NgRx et Redux DevTools',
      'Information en temps réel sur les horaires et perturbations',
      'Achat et gestion de titres de transport',
      'Optimisation pour performances proches des applications natives'
    ],
    image: 'https://images.unsplash.com/photo-1621955964441-c173e01c6b4a',
    url: 'openit.ch/mobile',
    link: '#',
    skills: ['Angular', 'Ionic', 'Capacitor', 'NX', 'RxJS', 'Mobile', 'Swift', 'Java', 'NgRx', 'Leaflet']
  },
  {
    id: 4,
    title: 'Système de Vente et Gestion',
    subtitle: 'Titres de Transport',
    client: 'OpenIT SA',
    category: 'Backend',
    description: 'Solution de vente multi-clients avec APIs REST & GraphQL. Backend NestJS & MongoDB. Objectif: Offrir une expérience utilisateur fluide et une gestion optimisée des transactions.',
    details: [
      'Conception d\'un backend scalable avec NestJS et MongoDB',
      'Implémentation d\'APIs REST et GraphQL',
      'Système de batch processing pour achats différés',
      'Optimisation des flux de transactions avec RxJS',
      'Optimisation des processus de vente et de gestion des stocks',
      'Tests unitaires & intégration (Jest, TSMockito)'
    ],
    image: 'https://images.unsplash.com/photo-1545987796-200677ee1011',
    url: 'api.openit.ch',
    link: '#',
    skills: ['NestJS', 'MongoDB', 'GraphQL', 'REST API', 'RxJS', 'Jest', 'TSMockito', 'Batch Processing']
  },
  {
    id: 5,
    title: 'Système de Comptage Passagers',
    subtitle: 'Répartition des Revenus',
    client: 'OpenIT SA',
    category: 'Fullstack',
    description: 'Suivi des passagers et gestion des recettes pour opérateurs de transport. Frontend Angular & Backend Java Spring Boot. Objectif: Optimisation financière et meilleure répartition des revenus entre opérateurs.',
    details: [
      'Comptage des passagers et répartition des bénéfices entre sociétés de transport',
      'Calcul automatisé de la répartition des bénéfices',
      'Suivi en temps réel du nombre de passagers via RxJS & géolocalisation',
      'Automatisation des calculs via architecture scalable'
    ],
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e',
    url: 'count.openit.ch',
    link: '#',
    skills: ['Angular', 'Java Spring', 'RxJS', 'Géolocalisation', 'Automatisation']
  },
  {
    id: 6,
    title: 'Applications Opérationnelles',
    subtitle: 'Informations Voyageurs',
    client: 'OpenIT SA',
    category: 'Multi-Platformes',
    description: 'Communication en temps réel avec les usagers des transports publics. Objectif: Améliorer l\'efficacité du service de transport et la qualité des informations.',
    details: [
      'Application tablette pour le suivi GPS des bus en temps réel (Angular/Ionic/Capacitor)',
      'Application Windows/Electron pour maintenance maritime',
      'Affichage d\'informations voyageurs dans gares et arrêts de bus',
      'Mise à jour en temps réel des horaires et des itinéraires',
      'Interface optimisée pour utilisation sur tablette',
      'Suivi GPS des bus en temps réel'
    ],
    image: 'https://images.unsplash.com/photo-1532939163844-547f958e91b4',
    url: 'tracking.openit.ch',
    link: '#',
    skills: ['Angular', 'Ionic', 'Electron', 'Windows', 'GPS', 'Capacitor', 'Temps réel']
  },
  {
    id: 7,
    title: 'POC Backend de Vente',
    subtitle: 'Titres de Transport .NET',
    client: 'OpenIT SA',
    category: 'Fullstack',
    description: 'Système de vente centralisé pour titres de transport. Objectif: Tester la faisabilité d\'un système de vente centralisé avec .NET.',
    details: [
      'Backend en .NET avec EntityFramework et PostgreSQL',
      'Frontend Angular avec gestion réactive des états et formulaires',
      'APIs REST avec documentation Swagger',
      'Architecture orientée services pour une scalabilité optimale'
    ],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
    url: 'poc.openit.ch',
    link: '#',
    skills: ['.NET', 'EntityFramework', 'PostgreSQL', 'Angular', 'Swagger', 'REST API']
  }
];

// Technical stack grouped by category
const technicalStack = {
  development: [
    'TypeScript, JavaScript (ES5/ES6)',
    'Angular (5 → 19)', 'RxJS', 'Signals', 'Standalone Components',
    'NestJS', 'MongoDB', 'PostgreSQL', '.NET', 'Spring Boot', 'C#', 'Java',
    'Mobile : Ionic, Capacitor, Swift, Java Android',
    'Gestion d\'état : NgRx, Redux',
    'HTML5, CSS3, GraphQL'
  ],
  devops: [
    'Docker',
    'Git, GitLab, TFS',
    'CI/CD GitLab, automatisation des tests (Jest, Jasmine, Karma, Protractor, Playwright, TSMockito)',
    'Monitoring et logs avancés : Sentry, Chrome Profiler',
    'TDD & Software Craftsmanship'
  ],
  tools: [
    'Jira, Confluence',
    'Postman, Sentry',
    'npm, yarn',
    'VSCode, WebStorm, Visual Studio',
    'Android Studio, Xcode',
    'Figma, Notion'
  ],
  databases: [
    'MongoDB',
    'PostgreSQL',
    'SQLServer',
    'Oracle',
    'MySQL'
  ],
  softSkills: [
    'Lead technique sur projets critiques',
    'Revue de code & Architecture',
    'Animation d\'ateliers techniques & veille techno'
  ]
};

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-maxime-tertiary dark:bg-maxime-dark-card">
      <div className="container-padding mx-auto">
        {/* Minimal Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4 reveal">
            <span className="w-2 h-2 rounded-full bg-maxime-primary dark:bg-maxime-white"></span>
            <span className="text-sm uppercase tracking-widest text-maxime-secondary dark:text-maxime-white/70">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-maxime-primary dark:text-maxime-white reveal mb-6" style={{ animationDelay: '0.2s' }}>
            Projets Principaux
          </h2>
          <p className="text-maxime-secondary dark:text-maxime-white/70 max-w-2xl reveal" style={{ animationDelay: '0.3s' }}>
            Au cours des dernières années, j'ai eu l'opportunité de travailler sur des projets innovants 
            dans le domaine du transport public, collaborant avec diverses équipes pour créer des solutions 
            techniques performantes et intuitives.
          </p>
          <a href="#contact" className="inline-flex items-center mt-6 text-maxime-primary dark:text-maxime-white gap-2 reveal border-b border-maxime-primary/20 dark:border-maxime-white/20 pb-1 hover:border-maxime-primary dark:hover:border-maxime-white transition-all duration-300" style={{ animationDelay: '0.4s' }}>
            Discuter d'un projet <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        
        {/* Projects List */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group border-b border-maxime-primary/10 dark:border-maxime-white/10 pb-16 reveal"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-light text-maxime-primary dark:text-maxime-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xl font-light text-maxime-secondary dark:text-maxime-white/90 mb-3">{project.subtitle}</p>
                  <p className="text-maxime-secondary dark:text-maxime-white/70 mb-6">{project.client}</p>
                </div>
                
                <div className="md:w-2/3">
                  <div className="flex flex-col space-y-6">
                    <div>
                      <div className="text-sm inline-block px-3 py-1 bg-maxime-white/40 dark:bg-maxime-dark-bg/40 text-maxime-primary dark:text-maxime-white/90 rounded-full mb-4">
                        {project.category}
                      </div>
                      
                      <blockquote className="border-l-2 border-maxime-primary/20 dark:border-maxime-white/20 pl-4 mb-6 italic text-maxime-secondary dark:text-maxime-white/80">
                        {project.description}
                      </blockquote>
                      
                      <ul className="list-disc list-inside space-y-2 mb-6 text-maxime-secondary dark:text-maxime-white/70">
                        {project.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center gap-4 mb-6">
                        <a 
                          href={project.link}
                          className="text-sm text-maxime-primary dark:text-maxime-white underline-offset-4 hover:underline flex items-center gap-1"
                          onMouseEnter={() => setHoveredProject(project.id)}
                          onMouseLeave={() => setHoveredProject(null)}
                        >
                          {project.url} <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="text-sm px-4 py-2 bg-maxime-white dark:bg-maxime-dark-bg text-maxime-primary dark:text-maxime-white/70 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 reveal" style={{ animationDelay: '0.6s' }}>
          {projects.slice(0, 3).map((project, index) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-4/3 overflow-hidden bg-maxime-white dark:bg-maxime-dark-bg rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg"
                  loading="lazy"
                />
              </div>
              
              <div className="py-3">
                <h3 className="text-base font-light text-maxime-primary dark:text-maxime-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Description */}
        <div className="mt-16 flex justify-between items-start reveal" style={{ animationDelay: '0.7s' }}>
          <p className="text-maxime-secondary dark:text-maxime-white/70 max-w-2xl">
            De la conception d'interfaces utilisateur fluides au développement d'architectures backend robustes,
            chaque projet a contribué à renforcer mon expertise et ma passion pour l'ingénierie logicielle.
            Je suis constamment à la recherche de nouveaux défis techniques pour continuer à évoluer.
          </p>
          <a href="#contact" className="bg-maxime-primary dark:bg-maxime-white w-14 h-14 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-6 h-6 text-maxime-white dark:text-maxime-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
