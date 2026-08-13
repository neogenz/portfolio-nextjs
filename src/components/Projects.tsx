'use client';

import { ArrowUpRight, Github } from 'lucide-react';

// Project data based on the detailed information
const projects = [
  {
    id: 9,
    role: 'Lead fullstack & Product',
    title: 'Pulpe — Application de gestion budgétaire',
    subtitle: 'Budget Planning & Finances Personnelles',
    client: 'Projet personnel (Suisse)',
    category: 'Application Web + Mobile',
    description: 'Application web et iOS de gestion budgétaire pour le marché suisse. Les utilisateurs planifient leur année financière avec des templates mensuels réutilisables, avec visibilité permanente sur ce qu\'ils peuvent dépenser et épargner.',
    details: [
      'Architecture monorepo Turborepo : Angular 21+ (frontend), NestJS 11+ (backend), SwiftUI (iOS), Next.js (landing)',
      'Frontend signals-first avec Angular 21+, Material 21, Tailwind v4, pattern Signal Store (SWR, resource())',
      'Chiffrement AES-256-GCM split-key des montants financiers (PBKDF2 client + HKDF backend) — même l\'admin ne peut pas lire les données',
      'ApiClient centralisé avec validation Zod obligatoire sur tous les appels HTTP',
      'Mode démo backend-first via utilisateurs Supabase éphémères (RLS, cron cleanup toutes les 6h)',
      'Quality gate : tests unitaires Vitest, e2e Playwright, CI/CD, lint/prettier, git hooks',
    ],
    image: '',
    url: 'pulpe.app',
    link: 'https://github.com/neogenz/pulpe',
    skills: ['Angular 21', 'NestJS', 'SwiftUI', 'Supabase', 'PostgreSQL', 'TypeScript', 'Signals', 'Zod', 'Turborepo', 'Playwright', 'Tailwind v4', 'Angular Material', 'Lefthook', 'GitHub Actions', 'Figma', 'Linear', 'Claude Code'],
  },
  {
    id: 8,
    role: 'Lead frontend',
    title: 'Application de Gestion du Personnel',
    subtitle: 'Planning & Gestion de flotte',
    client: 'OpenIT SA',
    category: 'Application Web',
    description: 'Application web d\'administration pour gérer le planning et la flotte des chauffeurs.',
    details: [
      'Architecture par feature avec Angular 21+, PrimeNG et Tailwind CSS',
      'Gestion d\'état avec RxJS et Signals, chargement optimisé des états',
      'Mise en place de quality gate : tests unitaires Vitest, e2e Playwright, git hooks lint/prettier, CI/CD GitLab',
      'Design et conception depuis un design system d\'entreprise sur Figma',
      'Développement d\'un backend .NET RESTful et communication via Swagger',
    ],
    image: '',
    url: '',
    link: '#',
    skills: ['Angular 21', '.NET', 'PrimeNG', 'TailwindCSS', 'REST API', 'MSSql', 'Signals', 'Playwright', 'Figma', 'Claude Code']
  },
  {
    id: 1,
    role: 'Lead technique & Architecte',
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
    image: '',
    url: 'openit.ch/sae',
    link: '#',
    skills: ['Angular 19', 'RxJS', 'Signals', 'TailwindCSS', 'REST API', 'CI/CD', 'Jest', 'Playwright', 'Sentry']
  },
  {
    id: 10,
    role: 'Développeur',
    title: 'CGN — Prochains départs',
    subtitle: 'Information voyageurs accessible par QR code',
    client: 'CGN · OpenIT SA',
    category: 'Application Web',
    description: 'Application mobile-first donnant accès aux prochains départs depuis chaque embarcadère de la CGN. Les voyageurs l’ouvrent directement en scannant le QR code présent à quai.',
    details: [
      'Consultation des prochains départs contextualisée par embarcadère',
      'Sélection d’une date et d’une heure pour préparer un trajet',
      'Changement d’embarcadère depuis la même interface',
      'Accès direct et sans installation depuis les QR codes déployés à quai',
      'Interface responsive développée avec Angular 21',
    ],
    image: '',
    url: '',
    link: 'https://qr.cgn.ch/LAUSA0',
    skills: ['Angular 21', 'TypeScript', 'Responsive', 'Information voyageurs'],
  },
  {
    id: 2,
    role: 'Lead technique & Architecte',
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
    image: '',
    url: 'lost.openit.ch',
    link: '#',
    skills: ['Angular 19', 'NestJS', 'Prisma', 'MongoDB', 'IA', 'RxJS', 'Python Flask', 'HuggingFace', 'GPT']
  },
  {
    id: 3,
    role: 'Développeur',
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
    image: '',
    url: 'openit.ch/mobile',
    link: '#',
    skills: ['Angular 5 à 19', 'Ionic', 'Capacitor', 'NX', 'RxJS', 'Mobile', 'Swift', 'Java', 'NgRx', 'Leaflet']
  },
  {
    id: 4,
    role: 'Développeur',
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
    image: '',
    url: 'api.openit.ch',
    link: '#',
    skills: ['NestJS', 'MongoDB', 'GraphQL', 'REST API', 'RxJS', 'Jest', 'TSMockito', 'Batch Processing']
  },
  {
    id: 5,
    role: 'Développeur',
    title: 'Système de Comptage Passagers',
    subtitle: 'Répartition des Revenus',
    client: 'OpenIT',
    category: 'Fullstack',
    description: 'Suivi des passagers et gestion des recettes pour opérateurs de transport. Frontend Angular & Backend Java Spring Boot. Objectif: Optimisation financière et meilleure répartition des revenus entre opérateurs.',
    details: [
      'Comptage des passagers et répartition des bénéfices entre sociétés de transport',
      'Calcul automatisé de la répartition des bénéfices',
      'Suivi en temps réel du nombre de passagers via RxJS & géolocalisation',
      'Automatisation des calculs via architecture scalable'
    ],
    image: '',
    url: 'count.openit.ch',
    link: '#',
    skills: ['Angular 8 à 17', 'Java Spring', 'RxJS', 'Géolocalisation', 'Automatisation']
  },
  {
    id: 6,
    role: 'Développeur',
    title: 'Applications Opérationnelles',
    subtitle: 'Informations Voyageurs en gare',
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
    image: '',
    url: 'tracking.openit.ch',
    link: '#',
    skills: ['Angular 6 à 19', 'Ionic', 'Electron', 'Windows', 'GPS', 'Capacitor', 'Temps réel']
  },
  {
    id: 7,
    role: 'Développeur',
    title: 'Backend de Vente',
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
    image: '',
    url: 'poc.openit.ch',
    link: '#',
    skills: ['.NET', 'EntityFramework', 'PostgreSQL', 'Angular 19', 'Swagger', 'REST API']
  }
];

interface OpenSourceProject {
  title: string;
  category: string;
  description: string;
  tags: string[];
  featured?: boolean;
  links: Array<{
    label: string;
    href: string;
    kind: 'github' | 'external';
  }>;
}

const openSourceProjects: OpenSourceProject[] = [
  {
    title: 'ziflux',
    category: 'Librairie Angular',
    description:
      "Une couche de cache SWR et de mutations pour resource(), pensée avec les primitives d'Angular : Signals, invalidation ciblée, mises à jour optimistes et zéro dépendance runtime.",
    tags: ['Angular 22+', 'TypeScript', 'Signals', '6,2 kB brotli'],
    featured: true,
    links: [
      { label: 'Documentation', href: 'https://ziflux.dev', kind: 'external' },
      { label: 'GitHub', href: 'https://github.com/neogenz/ziflux', kind: 'github' },
    ],
  },
  {
    title: 'Skills pour agents IA',
    category: 'Agentic engineering',
    description:
      "Des skills réutilisables pour cadrer l'architecture Angular, concevoir des APIs NestJS et auditer la qualité du code avec des agents spécialisés.",
    tags: ['Angular', 'NestJS', 'Agents IA'],
    links: [
      { label: 'GitHub', href: 'https://github.com/neogenz/skills', kind: 'github' },
    ],
  },
  {
    title: 'Angular Routing Viewer',
    category: 'CLI & analyse statique',
    description:
      "Un CLI qui analyse le routing d'un projet Angular et génère un graphe interactif autonome, sans serveur ni code exécuté dans l'application cible.",
    tags: ['Angular', 'TypeScript', 'Nx', 'npm'],
    links: [
      {
        label: 'npm',
        href: 'https://www.npmjs.com/package/angular-routing-viewer',
        kind: 'external',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/neogenz/angular-routing-viewer',
        kind: 'github',
      },
    ],
  },
  {
    title: 'Skillui',
    category: 'Application macOS',
    description:
      "Une app de barre de menus qui unifie les skills installés entre Claude Code, Codex, Cursor et d'autres agents, détecte les mises à jour et les applique en un clic.",
    tags: ['SwiftUI', 'macOS', 'Agent skills'],
    links: [
      { label: 'GitHub', href: 'https://github.com/neogenz/skillui', kind: 'github' },
    ],
  },
  {
    title: 'ngx-unicode-spinners',
    category: 'Composants Angular',
    description:
      "18 animations de chargement en caractères Unicode braille pour Angular, accessibles, personnalisables et sans dépendance runtime.",
    tags: ['Angular 22+', 'TypeScript', 'A11y'],
    links: [
      {
        label: 'Démo',
        href: 'https://neogenz.github.io/ngx-unicode-spinners/',
        kind: 'external',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/neogenz/ngx-unicode-spinners',
        kind: 'github',
      },
    ],
  },
];

type Project = (typeof projects)[number];

const ExternalLink = ({
  href,
  label,
  kind = 'external',
}: {
  href: string;
  label: string;
  kind?: 'github' | 'external';
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-1.5 border-b border-maxime-primary/20 pb-1 text-sm text-maxime-primary transition-colors hover:border-maxime-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maxime-primary dark:border-maxime-white/20 dark:text-maxime-white dark:hover:border-maxime-white dark:focus-visible:outline-maxime-white"
  >
    {kind === 'github' && <Github className="h-3.5 w-3.5" aria-hidden="true" />}
    {label}
    {kind === 'external' && <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
  </a>
);

const ProjectRow = ({ project, withDivider = true }: { project: Project; withDivider?: boolean }) => (
  <article
    className={`${withDivider ? 'border-b border-maxime-primary/10 dark:border-maxime-white/10' : ''} pb-16 reveal`}
  >
    <div className="flex flex-col gap-8 md:flex-row lg:gap-10">
      <div className="md:w-1/3">
        <h3 className="mb-1 text-2xl font-light text-maxime-primary dark:text-maxime-white">
          {project.title}
        </h3>
        <p className="mb-3 text-xl font-light text-maxime-secondary dark:text-maxime-white/90">
          {project.subtitle}
        </p>
        <div className="mb-6 text-maxime-secondary dark:text-maxime-white/70">
          <p>{project.client}</p>
          {project.role && <p>Rôle sur le projet : {project.role}</p>}
        </div>

        {project.link !== '#' && (
          <div className="flex flex-wrap gap-4">
            {project.url && (
              <ExternalLink href={`https://${project.url}`} label="Voir le projet" />
            )}
            <ExternalLink
              href={project.link}
              label={project.link.includes('github.com') ? 'GitHub' : 'Voir le projet'}
              kind={project.link.includes('github.com') ? 'github' : 'external'}
            />
          </div>
        )}
      </div>

      <div className="md:w-2/3">
        <div className="flex flex-col space-y-6">
          <div>
            <div className="mb-4 inline-block rounded-full border border-maxime-primary/10 bg-maxime-white/90 px-4 py-1.5 text-sm font-medium text-maxime-primary dark:border-maxime-white/10 dark:bg-maxime-dark-bg/90 dark:text-maxime-white/80">
              {project.category}
            </div>

            <blockquote className="mb-6 border-l-2 border-maxime-primary/20 pl-4 italic text-maxime-secondary dark:border-maxime-white/20 dark:text-maxime-white/80">
              {project.description}
            </blockquote>

            <ul className="mb-6 list-inside list-disc space-y-2 text-maxime-secondary dark:text-maxime-white/70">
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-maxime-white px-4 py-2 text-sm text-maxime-primary dark:bg-maxime-dark-bg dark:text-maxime-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
);

const OpenSourcePortfolio = () => (
  <div className="border-y border-maxime-primary/10 py-16 dark:border-maxime-white/10 md:py-20">
    <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.75fr)] lg:gap-16">
      <div className="reveal">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-maxime-primary dark:bg-maxime-white" />
          <span className="text-sm uppercase tracking-widest text-maxime-secondary dark:text-maxime-white/70">
            Open source
          </span>
        </div>
        <h3 className="max-w-sm text-3xl font-light tracking-tight text-maxime-primary dark:text-maxime-white md:text-4xl">
          Les outils qui me manquaient, publiés pour les autres.
        </h3>
        <p className="mt-5 max-w-sm text-maxime-secondary dark:text-maxime-white/70">
          Des briques ciblées pour Angular et les workflows agentiques, développées à partir de problèmes rencontrés sur de vrais projets.
        </p>
        <div className="mt-7">
          <ExternalLink href="https://github.com/neogenz" label="Voir tous mes dépôts" kind="github" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-x-8">
        {openSourceProjects.map((project, index) => (
          <article
            key={project.title}
            className={`${project.featured ? 'md:col-span-2' : ''} group flex min-h-56 flex-col justify-between border-t border-maxime-primary/15 py-7 dark:border-maxime-white/15 reveal`}
            style={{ animationDelay: `${0.08 * (index + 1)}s` }}
          >
            <div>
              <div className="mb-5 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.16em] text-maxime-secondary dark:text-maxime-white/60">
                <span>{project.category}</span>
                <span aria-hidden="true">0{index + 1}</span>
              </div>
              <h4 className={`${project.featured ? 'text-3xl' : 'text-2xl'} font-light text-maxime-primary dark:text-maxime-white`}>
                {project.title}
              </h4>
              <p className={`${project.featured ? 'max-w-2xl' : ''} mt-4 text-maxime-secondary dark:text-maxime-white/75`}>
                {project.description}
              </p>
            </div>

            <div className="mt-8">
              <div className="mb-5 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-wider text-maxime-secondary/80 dark:text-maxime-white/55">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-5">
                {project.links.map((link) => (
                  <ExternalLink key={link.href} {...link} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
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
            Des produits construits de bout en bout, des outils open source publiés quand une brique manque,
            et une sélection de systèmes métier développés pour les transports publics.
          </p>
          <a href="#contact" className="inline-flex items-center mt-6 text-maxime-primary dark:text-maxime-white gap-2 reveal border-b border-maxime-primary/20 dark:border-maxime-white/20 pb-1 hover:border-maxime-primary dark:hover:border-maxime-white transition-all duration-300" style={{ animationDelay: '0.4s' }}>
            Discuter d&apos;un projet <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        
        {/* Personal product and open-source work */}
        <div className="space-y-20">
          <ProjectRow project={projects[0]} withDivider={false} />
          <OpenSourcePortfolio />

          <div className="pt-4">
            <div className="mb-14 reveal">
              <span className="text-sm uppercase tracking-widest text-maxime-secondary dark:text-maxime-white/70">
                Projets professionnels sélectionnés
              </span>
              <h3 className="mt-3 text-3xl font-light tracking-tight text-maxime-primary dark:text-maxime-white md:text-4xl">
                Concevoir des systèmes métier qui tiennent dans la durée.
              </h3>
            </div>

            <div className="space-y-20">
              {projects.slice(1).map((project, index) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  withDivider={index < projects.length - 2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
