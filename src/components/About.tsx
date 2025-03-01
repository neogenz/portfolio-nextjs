'use client';

import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-maxime-tertiary dark:bg-maxime-dark-card">
      <div className="container-padding mx-auto">
        {/* Minimal Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-3 mb-4 reveal">
            <span className="w-2 h-2 rounded-full bg-maxime-primary dark:bg-maxime-white"></span>
            <span className="text-sm uppercase tracking-widest text-maxime-secondary dark:text-maxime-white/70">À propos</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-maxime-primary dark:text-maxime-white reveal" style={{ animationDelay: '0.2s' }}>
            L'humain derrière le code
          </h2>
        </div>

        {/* About Content */}
        <div className="max-w-3xl mx-auto mb-20 reveal" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg mb-6 text-maxime-secondary dark:text-maxime-white/90">
          👋 Je suis Maxime, un Marseillais expatrié en Valais 🇨🇭🏔️ depuis bientôt 10 ans, développeur dans le monde des transports publics 🚆, passionné de technologie 💻, de cuisine 🍜 et de voyages ✈️.
          </p>
          <p className="text-lg mb-6 text-maxime-secondary dark:text-maxime-white/90">
            <span className="font-medium text-maxime-primary dark:text-maxime-white">🚀 Passion et partage</span><br />
            Quand un sujet m'intéresse, je plonge à fond dedans. Mais je ne suis pas juste un geek enfermé dans son code 👨‍💻. J'aime partager ce que j'apprends, échanger des idées 💡 et trouver des solutions qui ont un vrai impact.
          </p>
          <p className="text-lg mb-6 text-maxime-secondary dark:text-maxime-white/90">
            <span className="font-medium text-maxime-primary dark:text-maxime-white">💙 Bienveillance</span><br />
            On me décrit souvent comme quelqu'un de bienveillant et enthousiaste 🤩. J'essaie toujours d'apporter une énergie positive dans mon équipe, que ce soit en partageant mes connaissances ou en donnant un coup de main. J'aime créer un environnement positif autour de moi, que ce soit dans mon travail ou avec mes proches 💎.
          </p>
          <p className="text-lg mb-6 text-maxime-secondary dark:text-maxime-white/90">
            <span className="font-medium text-maxime-primary dark:text-maxime-white">🔍 Curiosité insatiable</span><br />
            J'adore comprendre comment les choses fonctionnent et trouver la meilleure façon de les améliorer 🛠️. Que ce soit en trouvant l'umami parfait pour un ramen maison 🍜, en planifiant un road trip efficace 🗺️, ou en optimisant mon code avec l'IA 🤖, j'aime chercher la meilleure approche.
          </p>
          
          <p className="text-lg mb-6 text-maxime-secondary dark:text-maxime-white/90">
            <span className="font-medium text-maxime-primary dark:text-maxime-white">🌍 Voyages inspirants</span><br />
            Les voyages, c'est ce qui m'inspire et me fait rêver. M'immerger dans l'effervescence de la Silicon Valley 🌉, nager avec les dauphins à l'île Maurice 🐬, gravir le mont Batur à Bali 🌋… Chaque voyage m'apporte une nouvelle perspective. Et pour moi, impossible de voyager sans goûter à la cuisine locale 🍜 – parce qu'un bon voyage, c'est aussi (et surtout !) une bonne assiette !
          </p>

          <div className="text-center">
            <a href="#contact" className="button-secondary inline-flex items-center">
              Me contacter <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;