import { ArrowUpRight, Github } from 'lucide-react';

interface Practice {
  category: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  link?: { label: string; href: string };
}

const practices: Practice[] = [
  {
    category: 'Méthode',
    title: 'Plan, code, revue, vérification',
    description:
      "Chaque changement suit le même cycle avec le framework open source AIDD : plan, implémentation, revue indépendante, vérification. Avant d'écrire une ligne, je fais challenger le plan par le skill grilling de Matt Pocock. Chaque tâche, sous-tâche et phase du développement tourne avec le modèle et le niveau de réflexion qui lui conviennent.",
    tags: ['AIDD', 'Grilling', 'Revue indépendante', 'Choix du modèle'],
    link: { label: 'Framework AIDD', href: 'https://github.com/ai-driven-dev/framework' },
    featured: true,
  },
  {
    category: 'Context engineering',
    title: 'Des skills plutôt que des MCP',
    description:
      "J'ai remplacé tous mes serveurs MCP par des skills : l'agent ne charge un outil que quand il en a besoin, et son contexte reste léger. Chaque repo porte sa propre mémoire de projet (AGENTS.md, aidd_docs).",
    tags: ['Skills', 'AGENTS.md', 'Mémoire de projet'],
    link: { label: 'Mes skills', href: 'https://github.com/neogenz/skills' },
  },
  {
    category: 'Économie de tokens',
    title: 'Chaque token compte',
    description:
      "Le skill dev-browser a remplacé le computer use et le browser use : l'agent pilote le navigateur par de courts scripts, ce qui économise un maximum de tokens. Ponytail et RTK réduisent encore la consommation.",
    tags: ['dev-browser', 'Ponytail', 'RTK'],
  },
  {
    category: 'Harness engineering',
    title: 'Des harness indépendants du modèle',
    description:
      "Depuis plusieurs mois, j'expérimente des harness qui fonctionnent avec n'importe quel LLM (OpenCode, T3 Code, Conductor), à côté de Claude Code et Codex. Hooks, sous-agents et objectifs longs avec /goal.",
    tags: ['OpenCode', 'T3 Code', 'Conductor', '/goal'],
  },
  {
    category: 'Interfaces',
    title: 'Des interfaces soignées, en série',
    description:
      "Je construis les interfaces avec les skills Make Interfaces Feel Better et Impeccable, que j'industrialise de plus en plus sur mes projets.",
    tags: ['Make Interfaces Feel Better', 'Impeccable', 'UI'],
  },
  {
    category: 'Agents autonomes',
    title: 'Des agents qui tournent en continu',
    description:
      'Sur mon VPS, des agents personnels (Hermes, puis OpenBot) tournent 24 h/24 : ils surveillent la production de Pulpe toutes les 20 minutes et pilotent mes outils par des skills.',
    tags: ['Hermes', 'OpenBot', 'VPS'],
  },
  {
    category: 'QA',
    title: 'Des vidéos de démo générées',
    description:
      "Un skill enregistre la vidéo de démo d'un ticket pour le PO : Playwright pilote Chromium sur une base de QA isolée, avec curseur visible, légendes de scénario et étapes horodatées.",
    tags: ['Playwright', 'Vidéo', 'QA'],
  },
  {
    category: 'Contenus',
    title: 'Des pubs avec ma voix clonée',
    description:
      'J\'ai connecté mes outils pour produire les publicités vidéo de mes produits : scénario, montage avec Remotion et voix off avec ma voix clonée.',
    tags: ['Remotion', 'Voix clonée', 'Ads'],
  },
  {
    category: 'Documentation',
    title: 'Une doc qui se régénère',
    description:
      "Plus de 400 pages Confluence obsolètes remplacées par une documentation Astro Starlight construite avec des workflows agentiques, régénérée avec ses captures d'écran par la CI.",
    tags: ['Astro Starlight', 'CI', 'Workflows agentiques'],
  },
  {
    category: 'Software factory',
    title: 'Une software factory qui apprend',
    description:
      'Une boucle de correction tourne dans chaque projet : une erreur relevée en revue devient une règle, un skill ou un test. Le système qui écrit le code s\'améliore de jour en jour.',
    tags: ['Boucle de correction', 'Software craft'],
    featured: true,
  },
];

const AgenticAI = () => (
  <section
    id="agentic-ai"
    className="section-padding border-t border-maxime-primary/10 bg-maxime-white dark:border-maxime-white/10 dark:bg-maxime-dark-bg"
  >
    <div className="container-padding mx-auto">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 reveal">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-maxime-primary dark:bg-maxime-white" />
            <span className="text-sm uppercase tracking-widest text-maxime-secondary dark:text-maxime-white/70">
              IA agentique
            </span>
          </div>
          <h2 className="mb-6 text-5xl font-light tracking-tight text-maxime-primary dark:text-maxime-white md:text-6xl">
            Développer avec des agents, avec méthode.
          </h2>
          <p className="mb-6 max-w-2xl text-xl text-maxime-primary dark:text-maxime-white/90">
            Je suis convaincu que mon métier va changer en profondeur dans les dix prochaines années. Depuis plus de deux
            ans et demi, je travaille donc énormément avec l&apos;IA et je fais évoluer mes méthodes.
          </p>
          <p className="max-w-2xl text-maxime-secondary dark:text-maxime-white/70">
            J&apos;utilise Claude Code depuis sa sortie, en février 2025. Aujourd&apos;hui, je développe chaque jour avec
            Claude Code et Codex, sur plusieurs abonnements Max et Ultra depuis un an.
            Mon objectif : livrer du code de niveau software craft grâce à l&apos;IA. J&apos;ai passé des centaines d&apos;heures à outiller ce travail : le contexte que lisent les agents, le cadre
            dans lequel ils travaillent, la vérification de ce qu&apos;ils livrent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 md:gap-x-8">
          {practices.map((practice, index) => (
            <article
              key={practice.title}
              className={`${practice.featured ? 'md:col-span-2' : ''} flex flex-col justify-between border-t border-maxime-primary/15 py-7 dark:border-maxime-white/15 reveal`}
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
            >
              <div>
                <div className="mb-5 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.16em] text-maxime-secondary dark:text-maxime-white/60">
                  <span>{practice.category}</span>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className={`${practice.featured ? 'text-3xl' : 'text-2xl'} font-light text-maxime-primary dark:text-maxime-white`}>
                  {practice.title}
                </h3>
                <p className={`${practice.featured ? 'max-w-2xl' : ''} mt-4 text-maxime-secondary dark:text-maxime-white/75`}>
                  {practice.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-wider text-maxime-secondary/80 dark:text-maxime-white/55">
                  {practice.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {practice.link && (
                  <a
                    href={practice.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 border-b border-maxime-primary/20 pb-1 text-sm text-maxime-primary transition-colors hover:border-maxime-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maxime-primary dark:border-maxime-white/20 dark:text-maxime-white dark:hover:border-maxime-white dark:focus-visible:outline-maxime-white"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    {practice.link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AgenticAI;
