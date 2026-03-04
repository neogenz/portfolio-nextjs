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
            Marseillais expatrié en Valais depuis bientôt 10 ans, je construis des applications dans le monde des transports publics. En dehors du code, vous me trouverez probablement en train de perfectionner un ramen maison ou de planifier mon prochain voyage.
          </p>
          <p className="text-lg mb-6 text-maxime-secondary dark:text-maxime-white/90">
            Quand un sujet me passionne, je creuse jusqu'au bout. C'est comme ça que je fonctionne, que ce soit pour trouver le bon équilibre d'umami dans un bouillon, pour comprendre une nouvelle techno, ou pour résoudre un problème d'architecture logicielle. Et ce que j'apprends, j'aime le partager — en pair programming, en partageant avec mon équipe, ou simplement autour d'un café.
          </p>
          <p className="text-lg mb-6 text-maxime-secondary dark:text-maxime-white/90">
            Ce qui me motive au quotidien, c'est de bosser avec des gens que j'apprécie sur des sujets qui comptent. Je préfère un environnement où on peut se dire les choses franchement, s'entraider quand c'est tendu, et célébrer quand ça marche. C'est simple, mais c'est ce qui fait la différence.
          </p>
          <p className="text-lg mb-6 text-maxime-secondary dark:text-maxime-white/90">
            Les voyages nourrissent tout le reste. Gravir le mont Batur à Bali au lever du soleil, nager avec les dauphins à l'île Maurice, arpenter la Silicon Valley pour sentir l'énergie du lieu — chaque destination remet les compteurs à zéro. Et impossible de voyager sans goûter à tout : un bon voyage, c'est aussi une bonne assiette.
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