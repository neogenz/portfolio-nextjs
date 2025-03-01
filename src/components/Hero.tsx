'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import OptimizedImage from './ui/OptimizedImage';
import useTypewriter from '../hooks/useTypewriter';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Séquence des textes à afficher
  const textArray = [
    "Développeur fullstack 💻", 
    "Ninja Angular 🥷",
    "Développeur frontend 🎨",
    "Ingénieur logiciel 🧠",
    "Développeur mobile 📱",
    "Passionné de tech ❤️‍🔥",
    "Utilisateur aguéri d'IA 🤖",
    "Développeur backend 🔐",
    "Intégrateur d'API 🔄",
    "Évangéliste Craft 🔥",
    "Enthouiaste & curieux 🧐",
    "Toujours en train de créer 🔄",
    "Très sociable 🤝"
  ];
  
  // Utiliser notre hook personnalisé au lieu de la logique interne
  const { text: typewriterText, isDeleting } = useTypewriter({
    texts: textArray,
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDelay: 1250
  });

  useEffect(() => {
    const heroElement = heroRef.current;
    
    if (!heroElement) return;
    
    setTimeout(() => {
      setIsLoaded(true);
      heroElement.classList.add('opacity-100');
      heroElement.classList.remove('translate-y-4');
    }, 100);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (heroElement) {
        heroElement.style.transform = `translateY(${scrollTop * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-maxime-white text-maxime-primary dark:bg-maxime-dark-bg dark:text-maxime-white">
      {/* Vertical text - adaptatif selon la taille d'écran */}
      <div className="absolute right-2 xr:left-6 xr:right-auto top-6 bottom-0 flex flex-col justify-between py-10 text-xs text-maxime-secondary dark:text-maxime-white/60 tracking-widest uppercase writing-mode-vertical transform rotate-180">
        <div className="transform rotate-180">Expert Angular</div>
        <div className="transform rotate-180">Portfolio</div>
      </div>
      
      {/* Main content */}
      <div 
        ref={heroRef}
        className="container-padding mx-auto opacity-0 translate-y-4 transition-all duration-700 relative z-10 grid grid-cols-12 gap-8"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          {/* Stats */}
          <div className={`flex items-start space-x-12 mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <h3 className="text-3xl md:text-4xl font-light mb-1">+8</h3>
              <p className="text-sm text-maxime-secondary dark:text-maxime-white/60">Années d'expérience</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-light mb-1">+20</h3>
              <p className="text-sm text-maxime-secondary dark:text-maxime-white/60">Projets réalisés</p>
            </div>
          </div>
          
          {/* Main heading */}
          <div className={`mb-8 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-7xl md:text-8xl xl:text-9xl font-light mb-2 leading-tight tracking-tight">
              Maxime
            </h1>
            <h1 className="text-7xl md:text-8xl xl:text-9xl font-light leading-tight tracking-tight text-maxime-secondary">
              De Sogus
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl mb-12 border-l-2 border-maxime-secondary pl-6 py-1">
              — <span className="relative">
                  {typewriterText}
                  <span className="absolute right-0 border-r-2 border-maxime-primary dark:border-maxime-white h-full animate-pulse"></span>
                </span>
            </p>
          </div>
          
          {/* CTA Button */}
          <div className={`mt-8 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a 
              href="#projects" 
              className="px-8 py-3 border border-maxime-primary dark:border-maxime-white inline-block hover:bg-maxime-primary hover:text-maxime-white dark:hover:bg-maxime-white dark:hover:text-maxime-primary transition-colors duration-300"
            >
              Voir mes projets
            </a>
          </div>
        </div>
        
        <div className="hidden lg:block lg:col-span-5 relative">
          <div className={`relative h-full flex items-center justify-center transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="w-full max-w-[600px] xl:max-w-[750px] 2xl:max-w-[850px] aspect-3/4 overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-b from-maxime-tertiary/80 to-transparent dark:from-maxime-dark-bg/80 mix-blend-multiply z-10"></div>
              <OptimizedImage 
                src="/images/optimized/maxime.webp"
                alt="Maxime De Sogus"
                width={1143}
                height={1432}
                priority={true}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - ajusté pour une meilleure visibilité */}
      <button 
        onClick={scrollToAbout}
        className={`absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 flex flex-col items-center z-20 bg-white/40 dark:bg-maxime-dark-bg/40 backdrop-blur-xs rounded-md px-3 py-1 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        aria-label="Défiler vers la section À propos"
      >
        <span className="text-xs tracking-widest uppercase mb-1 text-maxime-primary dark:text-maxime-white font-medium">Défiler</span>
        <ArrowDown className="h-4 w-4 animate-bounce-small" />
      </button>
    </section>
  );
};

export default Hero;