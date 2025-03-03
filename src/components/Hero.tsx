'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import OptimizedImage from './ui/OptimizedImage';
import useTypewriter from '../hooks/useTypewriter';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showImage, setShowImage] = useState(false);
  
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
  
  // Hook pour l'effet machine à écrire
  const { text: typewriterText } = useTypewriter({
    texts: textArray,
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDelay: 1250
  });

  // Initialisation et effet de scroll
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;
    
    // Animation initiale
    setTimeout(() => {
      setIsLoaded(true);
      heroElement.classList.add('opacity-100');
      heroElement.classList.remove('translate-y-4');
    }, 100);

    // Parallax au scroll
    const handleScroll = () => {
      if (heroElement) {
        heroElement.style.transform = `translateY(${window.scrollY * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation de l'image (optimisée pour Safari)
  useEffect(() => {
    // Forcer le calcul des dimensions avant l'animation
    const imageContainer = imageRef.current;
    if (imageContainer) {
      void imageContainer.offsetHeight;
    }
    
    // Délai avant de révéler l'image
    const timer = setTimeout(() => setShowImage(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-maxime-white text-maxime-primary dark:bg-maxime-dark-bg dark:text-maxime-white">
      {/* Vertical text */}
      <div className="absolute right-2 xr:left-6 xr:right-auto top-16 bottom-0 flex flex-col justify-between text-xs text-maxime-secondary dark:text-maxime-white/60 tracking-widest uppercase [writing-mode:vertical-rl] transform rotate-180 max-h-[500px] landscape:max-md:hidden">
        <div className="transform rotate-180">Expert Angular</div>
        <div className="transform rotate-180">Portfolio</div>
      </div>
      
      {/* Main content */}
      <div 
        ref={heroRef}
        className="px-5 sm:px-8 md:px-12 lg:px-16 xl:container-padding mx-auto opacity-0 translate-y-4 transition-all duration-700 relative z-10 grid grid-cols-12 gap-6 md:gap-10 lg:gap-16 landscape:max-md:gap-4"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Left column - Text content */}
        <div className="col-span-12 lg:col-span-6 2xl:col-span-7 flex flex-col justify-center pr-0 lg:pr-6">
          {/* Stats */}
          <div className={`flex items-start gap-12 md:gap-16 mb-12 md:mb-16 landscape:max-md:mb-3 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <h3 className="text-3xl md:text-4xl landscape:max-md:text-2xl font-light mb-1 landscape:max-md:mb-0">+8</h3>
              <p className="text-sm landscape:max-md:text-xs text-maxime-secondary dark:text-maxime-white/60">Années d&apos;expérience</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl landscape:max-md:text-2xl font-light mb-1 landscape:max-md:mb-0">+20</h3>
              <p className="text-sm landscape:max-md:text-xs text-maxime-secondary dark:text-maxime-white/60">Projets réalisés</p>
            </div>
          </div>
          
          {/* Name heading */}
          <div className={`mb-8 landscape:mb-3 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-7xl md:text-8xl xl:text-9xl landscape:text-5xl md:landscape:text-6xl lg:landscape:text-7xl font-light mb-2 landscape:mb-0 tracking-tight">
              Maxime
            </h1>
            <h1 className="text-7xl md:text-8xl xl:text-9xl landscape:text-5xl md:landscape:text-6xl lg:landscape:text-7xl font-light tracking-tight text-maxime-secondary whitespace-nowrap">
              De Sogus
            </h1>
          </div>
          
          {/* Typewriter text */}
          <div className={`transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl landscape:max-md:text-lg mb-12 landscape:max-md:mb-3 border-l-2 border-maxime-secondary pl-6 py-1">
              — <span className="relative">
                  {typewriterText}
                  <span className="absolute right-0 border-r-2 border-maxime-primary dark:border-maxime-white h-full animate-pulse"></span>
                </span>
            </p>
          </div>
          
          {/* CTA Button */}
          <div className={`mt-8 landscape:max-md:mt-3 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a 
              href="#projects" 
              className="px-8 py-3 landscape:max-md:px-6 landscape:max-md:py-2 landscape:max-md:text-sm border border-maxime-primary dark:border-maxime-white inline-block hover:bg-maxime-primary hover:text-maxime-white dark:hover:bg-maxime-white dark:hover:text-maxime-primary transition duration-300 outline-none focus-visible:ring-2 focus-visible:ring-maxime-primary dark:focus-visible:ring-maxime-white focus-visible:ring-offset-2"
            >
              Voir mes projets
            </a>
          </div>
        </div>
        
        {/* Right column - Image (Safari-optimized) */}
        <div className="hidden lg:flex lg:col-span-6 2xl:col-span-5 relative flex items-center justify-center w-full">
          <div 
            ref={imageRef}
            className="relative lg:flex lg:items-center lg:justify-center mx-auto w-[85%] lg:w-[80%] xl:w-[450px] 2xl:w-[520px] landscape:max-md:w-[380px] aspect-[3/4] overflow-hidden" 
            style={{ 
              opacity: showImage ? 1 : 0,
              transition: 'opacity 800ms ease',
              height: 'auto',
              maxHeight: '70vh',
              // Fix pour Safari
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-maxime-tertiary/80 to-transparent dark:from-maxime-dark-bg/80 mix-blend-multiply z-10"></div>
            
            {/* Profile image */}
            <OptimizedImage 
              src="/images/optimized/maxime.webp"
              alt="Maxime De Sogus"
              width={1143}
              height={1432}
              priority={true}
              className="w-full h-full object-cover object-center"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRhYBAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSE4AAAARL0AmYJrNQpJsux//938UEVEDHpKcTaoK3AP2oLqqBdgD5gEAAMxujQc8GjyYcQCjvv/Mf87VZWC5/r9B1G4eIDOHiP4PAFZQOCBMAAAAcAIAnQEqEAAQAAJAOCWwAnS6MEQn56eg/+FiA/AD3zK3w1X6YMKWV37N42XyctFbbZpIoM+6ufZPGbIYTgA3pHnnXWfbvH8yDZOJF7OvLGzfFxZ8Wj9oiUV1GupuJQFxE3PdmQU8P2Xg10cUjUvxkuimqgAALOqGIOEvKJQX7+GdYIyqDAAA"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
              quality={90}
              style={{ 
                // Fix pour Safari
                transform: 'none',
                WebkitTransform: 'none',
                // Ajustement pour éviter le débordement
                objectPosition: '50% 15%'
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className={`absolute bottom-6 sm:bottom-10 landscape:max-md:bottom-2 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1200 
          flex flex-col items-center z-20 
          bg-white/40 dark:bg-maxime-dark-bg/40 backdrop-blur-sm rounded-md px-3 py-1 landscape:max-md:py-0.5
          hover:bg-white/60 dark:hover:bg-maxime-dark-bg/60
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        aria-label="Défiler vers la section À propos"
      >
        <span className="text-xs tracking-widest uppercase mb-1 landscape:max-md:mb-0 text-maxime-primary dark:text-maxime-white font-medium">Défiler</span>
        <ArrowDown className="h-4 w-4 landscape:max-md:h-3 landscape:max-md:w-3 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;