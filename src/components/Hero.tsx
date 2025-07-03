"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import OptimizedImage from "./ui/OptimizedImage";
import useTypewriter from "../hooks/useTypewriter";
import Link from "next/link";

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
    "Enthousiaste & curieux 🧐",
    "Toujours en train de créer 🔄",
    "Très sociable 🤝"
  ];

  // Hook pour l'effet machine à écrire
  const { text: typewriterText } = useTypewriter({
    texts: textArray,
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDelay: 1250,
  });

  // Initialisation et animation d'entrée
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    // Animation initiale - déclenchée une seule fois
    setTimeout(() => {
      setIsLoaded(true);
      heroElement.classList.add("opacity-100");
      heroElement.classList.remove("translate-y-4");
    }, 100);
  }, []);

  // Animation de l'image
  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex overflow-hidden relative items-center h-screen bg-maxime-white text-maxime-primary dark:bg-maxime-dark-bg dark:text-maxime-white">
      {/* Styles spécifiques pour les écrans de faible hauteur - conservés car ils utilisent une media query globale */}
      <style jsx>{`
        @media (max-height: 650px) {
          .name-heading h1 {
            font-size: 4.5rem !important;
          }
          .stats-container {
            margin-bottom: 0.5rem !important;
          }
        }
      `}</style>

      {/* Vertical text */}
      <div className="absolute right-2 xr:left-6 xr:right-auto top-16 bottom-0 flex flex-col justify-between text-xs text-maxime-secondary dark:text-maxime-white/60 tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 max-h-[500px] landscape:max-md:hidden">
        <div className="rotate-180">Expert Angular</div>
        <div className="rotate-180">Portfolio</div>
      </div>

      {/* Main content */}
      <div
        ref={heroRef}
        className="grid relative z-10 grid-cols-12 gap-4 mx-auto opacity-0 transition-all duration-700 translate-y-4 container-padding md:gap-6 lg:gap-8"
      >
        {/* Left column - Text content */}
        <div className="flex flex-col col-span-12 justify-center lg:col-span-7 2xl:col-span-7">
          {/* Stats */}
          <div
            className={`stats-container flex items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-7 md:mb-8 lg:mb-10 transition-all duration-1000 delay-300 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div>
              <h3 className="text-2xl font-light sm:text-3xl md:text-3xl lg:text-4xl">
                +8
              </h3>
              <p className="text-sm text-maxime-secondary dark:text-maxime-white/60">
                Années d&apos;expérience
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light sm:text-3xl md:text-3xl lg:text-4xl">
                +20
              </h3>
              <p className="text-sm text-maxime-secondary dark:text-maxime-white/60">
                Projets réalisés
              </p>
            </div>
          </div>

          {/* Name heading - nous rétablissons la classe name-heading pour le ciblage par style JSX */}
          <div
            className={`name-heading mb-5 sm:mb-6 md:mb-7 landscape:max-sm:mb-3 landscape:sm:mb-4 transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-6xl font-light tracking-tight sm:text-7xl md:text-8xl xl:text-9xl">
              Maxime
            </h1>
            <h1 className="text-6xl font-light tracking-tight whitespace-nowrap sm:text-7xl md:text-8xl xl:text-9xl text-maxime-secondary">
              De Sogus
            </h1>
          </div>

          {/* Typewriter text */}
          <div
            className={`transition-all duration-1000 delay-800 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="py-1 pl-6 mb-6 text-xl border-l-2 sm:text-2xl landscape:max-md:text-xl portrait:xs:text-xl landscape:max-md:mb-4 portrait:xs:mb-5 border-maxime-secondary portrait:xs:pl-4">
              —{" "}
              <span className="relative inline-block min-w-[320px]">
                <span className="inline-block">{typewriterText}</span>
                <span className="inline-block w-[2px] h-[1em] bg-maxime-primary dark:bg-maxime-white animate-pulse ml-0.5 align-middle"></span>
              </span>
            </p>
          </div>

          {/* CTA Button */}
          <div
            className={`mt-5 landscape:max-md:mt-3 portrait:xs:mt-4 transition-all duration-1000 delay-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="#projects"
              className="inline-block px-8 py-3 border transition duration-300 cursor-pointer outline-none landscape:max-md:px-6 landscape:max-md:py-2 landscape:max-md:text-sm border-maxime-primary dark:border-maxime-white hover:bg-maxime-primary hover:text-maxime-white dark:hover:bg-maxime-white dark:hover:text-maxime-primary focus-visible:ring-2 focus-visible:ring-maxime-primary dark:focus-visible:ring-maxime-white focus-visible:ring-offset-2"
            >
              Voir mes projets
            </Link>
          </div>
        </div>

        {/* Right column - Image (Safari-optimized) */}
        <div className="hidden justify-center items-center w-full lg:flex lg:col-span-5 2xl:col-span-5">
          <div
            ref={imageRef}
            className={`relative flex items-center justify-center mx-auto overflow-hidden max-h-[70vh] h-auto transition-opacity duration-800 ease-in-out ${
              showImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              // Fix pour Safari - Ces propriétés ne sont pas encore disponibles dans Tailwind
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* Overlay gradient - optimisé pour Tailwind v4 avec tous les niveaux de dégradé explicites */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b to-transparent mix-blend-multiply from-maxime-tertiary/80 via-maxime-tertiary/40 dark:from-maxime-dark-bg/80 dark:via-maxime-dark-bg/40 dark:to-transparent"></div>

            {/* Profile image */}
            <OptimizedImage
              src="/images/optimized/maxime.webp"
              alt="Maxime De Sogus"
              width={1143}
              height={1432}
              priority={true}
              className="w-full h-full object-cover object-center object-[50%_15%]"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRhYBAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSE4AAAARL0AmYJrNQpJsux//938UEVEDHpKcTaoK3AP2oLqqBdgD5gEAAMxujQc8GjyYcQCjvv/Mf87VZWC5/r9B1G4eIDOHiP4PAFZQOCBMAAAAcAIAnQEqEAAQAAJAOCWwAnS6MEQn56eg/+FiA/AD3zK3w1X6YMKWV37N42XyctFbbZpIoM+6ufZPGbIYTgA3pHnnXWfbvH8yDZOJF7OvLGzfFxZ8Wj9oiUV1GupuJQFxE3PdmQU8P2Xg10cUjUvxkuimqgAALOqGIOEvKJQX7+GdYIyqDAAA"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
              quality={90}
              style={{
                // Fix pour Safari - propriétés non disponibles en Tailwind
                transform: "none",
                WebkitTransform: "none",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-6 sm:bottom-10 landscape:max-md:bottom-2 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1200 
          flex flex-col items-center z-20 cursor-pointer
          bg-white/40 dark:bg-maxime-dark-bg/40 backdrop-blur-sm rounded-md px-3 py-1 landscape:max-md:py-0.5
          hover:bg-white/60 dark:hover:bg-maxime-dark-bg/60
          ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        aria-label="Défiler vers la section À propos"
      >
        <span className="mb-1 text-xs font-medium tracking-widest uppercase landscape:max-md:mb-0 text-maxime-primary dark:text-maxime-white">
          Défiler
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce landscape:max-md:h-3 landscape:max-md:w-3" />
      </button>
    </section>
  );
};

export default Hero;
