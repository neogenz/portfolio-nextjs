'use client';

import { ArrowRight } from 'lucide-react';

export const experienceData = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "OpenIT SA",
    period: "Octobre 2018 - Présent",
    location: "Lausanne, Suisse",
    description: [
      "Développement et architecture d'un Système d'Aide à l'Exploitation (SAE) - Interface Angular 19 avec architecture modulaire, flux temps réel (RxJS/Signals), performance optimisée (gestion efficace des états de l'application) et monitoring avancé (Sentry).",
      "Création d'une Plateforme de Gestion des Objets Trouvés - Solution fullstack Angular/NestJS/MongoDB avec automatisation du matching via IA (GPT, HuggingFace, Flask) et optimisation des flux de recherche.",
      "Développement d'une application mobile multi-client monorepo NX (Angular/Ionic/Capacitor) avec migration progressive & régulière d'Angular 5 vers la dernière version stable, carte interactive Leaflet/RxJS et plugins natifs Swift/Java.",
      "Conception d'un backend de vente scalable (NestJS/MongoDB) avec APIs GraphQL/REST et système batch pour la gestion des achats différés.",
      "Réalisation d'applications opérationnelles diverses: tablettes GPS pour chauffeurs, solution Windows/Electron pour maintenance maritime, système de comptage passagers avec répartition automatisée des bénéfices (Angular/Java Spring)."
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Sigmalis",
    period: "Octobre 2017 - Octobre 2018",
    location: "Lausanne, Suisse",
    description: [
      "Développement d'applications mobiles hybrides (Ionic/Angular) avec fonctionnalités temps réel, notifications push et cartographie interactive.",
      "Établissement de l'architecture technique pour projets web et mobiles hybrides, assurant robustesse et scalabilité.",
      "Maintenance et évolution d'applications web Angular communicant en REST",
      "Création de solutions pour environnements, thèmes et configurations dynamiques dans les applications.",
      "Mise en place d'outils comme Postman et Docker pour améliorer les flux de développement.",
      "Gestion de projets multi-clients en méthodologie Agile avec cycles courts de développement."
    ]
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "CBA Informatique Libérale",
    period: "Septembre 2016 - Septembre 2017",
    location: "Avignon, France",
    description: [
      "Audit et refactorisation complète du code frontend JavaScript d'une application web servant 28'000 clients pour améliorer la stabilité et les performances.",
      "Conception d'une nouvelle architecture technique JavaScript basée sur les patterns Revealing module, prototype et IIFE.",
      "Refactorisation de la partie asynchrone avec optimisation des promises pour améliorer les performances.",
      "Réalisation d'une API technique JEE pour l'introspection de base de données Postgres via Hibernate pour les opérations structurelles.",
      "Présentation et adoption de Bootstrap 3 et de nouvelles normes de codage JavaScript pour harmoniser les pratiques de l'équipe.",
      "Participation active aux sprints agiles avec réalisation de diverses stories et mise en production réussie de l'application en Janvier 2017."
    ]
  },
  {
    id: 4,
    title: "Apprenti Ingénieur Développement Web",
    company: "Spir Communication",
    period: "Septembre 2014 - Septembre 2016",
    location: "Aix-En-Provence, France",
    description: [
      "Conception et développement d'un store d'applications internes en AngularJS 1.4, Telerik, CSS3, Bootstrap 3 et HTML5.",
      "Réécriture d'APIs .NET métier en Javascript pour améliorer les performances frontend.",
      "Intégration de l'API Leaflet pour développer des fonctionnalités cartographiques avancées.",
      "Mise en place d'une architecture orientée composants avec AngularJS 1.5 pour améliorer la maintenabilité.",
      "Développement de tests unitaires et end-to-end avec JasmineJS et Protractor pour garantir la qualité du code.",
      "Intégration du projet au service de déploiement continu avec Grunt pour optimiser le processus de release.",
      "Maintenance et évolution du site e-commerce www.topannonces.fr en ASP.NET MVC 4.5 avec focus sur les performances et l'expérience utilisateur."
    ]
  }
];

// Compétences techniques par catégorie
export const technicalSkills = {
  languages: [
    'TypeScript', 'JavaScript', 'HTML5/CSS3/SCSS', 'C# (intermédaire)', 'Java (intermédaire)'
  ],
  frontend: [
    'Angular (2 à 19)', 'RxJS & Signals', 'NgRx', 'Angular Material', 'TailwindCSS', 'NX Monorepo', 'MapLibre & Leaflet'
  ],
  backend: [
    'NestJS & node', 'Prisma', 'Mongoose', 'JEE (junior)', '.NET MVC (junior)', 'Spring Boot (junior)'
  ],
  mobile: [
    'Ionic & Capacitor', 'Swift (junior)', 'Kotlin (junior)', 'Flutter (junior)'
  ],
  databases: [
    'MongoDB', 'PostgreSQL', 'SQLServer', 'Oracle', 'MySQL'
  ],
  tools: [
    'Docker', 'GitLab', 'Jira & Confluence', 'Postman', 'Sentry',
    'CI/CD', 'VSCode', 'WebStorm', 'Android Studio', 'Xcode',
    'Figma', 'Notion', 'Arc', 'Warp', 'Cursor', 'Claude', 'GPT', 'NotebookLM', 'Perplexity'
  ],
  testing: [
    'Jest', 'Jasmine', 'Karma', 'Protractor', 'Playwright'
  ]
};

// Organiser les compétences pour l'affichage
const techCategoriesDisplay = {
  'Langages': technicalSkills.languages,
  'Frontend': technicalSkills.frontend,
  'Backend': technicalSkills.backend,
  'Bases de données': technicalSkills.databases,
  'Mobile': technicalSkills.mobile,
  'Outils': [...technicalSkills.tools, ...technicalSkills.testing]
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-maxime-white dark:bg-maxime-dark-bg">
      <div className="container-padding mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Minimal Header */}
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-3 mb-4 reveal">
              <span className="w-2 h-2 rounded-full bg-maxime-primary dark:bg-maxime-white"></span>
              <span className="text-sm uppercase tracking-widest text-maxime-secondary dark:text-maxime-white/70">Parcours</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-maxime-primary dark:text-maxime-white reveal" style={{ animationDelay: '0.2s' }}>
              Expérience Professionnelle
            </h2>
          </div>

          <div className="mt-12 relative">
            {/* Timeline Line */}
            <div className="absolute left-5 md:left-1/2 top-0 h-full w-px bg-maxime-primary/20 dark:bg-maxime-white/20 md:-translate-x-1/2"></div>

            {experienceData.map((job, index) => (
              <div key={job.id} className="relative mb-12 pl-11 md:pl-0 reveal" style={{ animationDelay: `${0.2 * index}s` }}>
                {/* Timeline Dot */}
                <div className="absolute left-5 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-maxime-primary dark:border-maxime-white bg-maxime-white dark:bg-maxime-dark-bg z-10"></div>

                <div className="md:flex md:items-start">
                  {/* Left Side (Date & Location) */}
                  <div className="hidden md:block md:w-1/2 md:pr-8 md:text-right">
                    <div className="text-sm font-medium text-maxime-secondary dark:text-maxime-white/70">
                      <span className="inline-block">{job.period}</span>
                      <span className="block mt-1">{job.location}</span>
                    </div>
                  </div>

                  {/* Right Side (Content) */}
                  <div className="md:w-1/2 md:pl-8">
                    {/* Mobile-only date display */}
                    <div className="md:hidden mb-2 text-sm font-medium text-maxime-secondary dark:text-maxime-white/70">
                      {job.period} • {job.location}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-1 text-maxime-primary dark:text-maxime-white">{job.title}</h3>
                    <p className="text-base md:text-lg font-medium text-maxime-secondary dark:text-maxime-white/90 mb-4">{job.company}</p>
                    <ul className="space-y-3">
                      {job.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-maxime-primary dark:text-maxime-white min-w-4 mr-2 mt-1.5">•</span>
                          <p className="text-maxime-secondary dark:text-maxime-white/80 flex-1">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies Section */}
          <div className="pt-16 mt-16 border-t border-maxime-primary/10 dark:border-maxime-white/10">
            {/* Technologies Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4 reveal">
                <span className="w-2 h-2 rounded-full bg-maxime-primary dark:bg-maxime-white"></span>
                <span className="text-sm uppercase tracking-widest text-maxime-secondary dark:text-maxime-white/70">Technologies</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-maxime-primary dark:text-maxime-white reveal" style={{ animationDelay: '0.2s' }}>
                Stack Technique
              </h3>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Catégories principales en 5 colonnes */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
                {Object.entries(techCategoriesDisplay)
                  .filter(([category]) => category !== 'Outils')
                  .map(([category, technologies], categoryIndex) => (
                    <div key={category} className="reveal" style={{ animationDelay: `${0.1 * categoryIndex}s` }}>
                      <div className="flex flex-col">
                        <h4 className="text-lg font-light text-maxime-primary dark:text-maxime-white mb-4">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {technologies.map((tech, techIndex) => (
                            <span
                              key={`${category}-${techIndex}`}
                              className="text-sm px-4 py-2 bg-maxime-tertiary dark:bg-maxime-dark-card text-maxime-primary dark:text-maxime-white/70 rounded-full whitespace-nowrap"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Outils en dernière section, sur toute la largeur */}
              {Object.entries(techCategoriesDisplay)
                .filter(([category]) => category === 'Outils')
                .map(([category, technologies]) => (
                  <div key={category} className="reveal" style={{ animationDelay: '0.4s' }}>
                    <div className="flex flex-col">
                      <h4 className="text-lg font-light text-maxime-primary dark:text-maxime-white mb-4">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, techIndex) => (
                          <span
                            key={`${category}-${techIndex}`}
                            className="text-sm px-4 py-2 bg-maxime-tertiary dark:bg-maxime-dark-card text-maxime-primary dark:text-maxime-white/70 rounded-full whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-12 text-center reveal">
            <a href="/resume.pdf" className="button-secondary inline-flex items-center" target="_blank" rel="noopener noreferrer">
              Voir CV Complet <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;