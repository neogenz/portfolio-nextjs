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
    "Senior Fullstack Engineer & Tech Lead 🧭",
    "Basé en Valais, Suisse 🏔️", 
    "Développeur fullstack 💻",
    "Spécialiste TypeScript 🔧",
    "Développeur mobile 📱",
    "Développeur frontend 🎨",
    "Ingénieur logiciel 🧠",
    "Passionné de tech ❤️‍🔥",
    "Agentic AI engineering 🤖",
    "Context & harness engineering 🧩",
    "Développeur backend 🔐",
    "Intégrateur d'API 🔄",
    "Évangéliste Craft 🔥",
    "Enthousiaste & curieux 🧐",
    "Toujours en train de créer 🔄",
    "Très sociable 🤝",
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
        <div className="rotate-180">Fullstack & Tech Lead</div>
        <div className="rotate-180">Portfolio</div>
      </div>

      {/* Main content */}
      <div
        ref={heroRef}
        className="grid relative z-10 grid-cols-12 gap-4 max-sm:w-full mx-auto opacity-0 transition-[opacity,translate] duration-700 translate-y-4 container-padding md:gap-6 lg:gap-8"
      >
        {/* Left column - Text content */}
        <div className="flex flex-col col-span-12 justify-center lg:col-span-7 2xl:col-span-7">
          {/* Stats */}
          <div
            className={`stats-container flex items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-7 md:mb-8 lg:mb-10 transition-[opacity,translate] duration-1000 delay-300 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div>
              <h3 className="text-2xl font-light sm:text-3xl md:text-3xl lg:text-4xl">
                +10
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
            className={`name-heading mb-5 sm:mb-6 md:mb-7 landscape:max-sm:mb-3 landscape:sm:mb-4 transition-[opacity,translate] duration-1000 delay-500 ${
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
            className={`transition-[opacity,translate] duration-1000 delay-800 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* 2 lignes réservées sous sm : le titre long passe sur 2 lignes sans décaler le bouton */}
            <p className="py-1 pl-6 mb-6 min-h-[calc(2lh+0.5rem)] sm:min-h-0 text-xl border-l-2 sm:text-2xl landscape:max-md:text-xl portrait:xs:text-xl landscape:max-md:mb-4 portrait:xs:mb-5 border-maxime-secondary portrait:xs:pl-4">
              —{" "}
              {/* En ligne sous sm : le tiret reste devant le texte au lieu d'être seul sur sa ligne */}
              <span className="relative sm:inline-block sm:min-w-[320px]">
                <span>{typewriterText}</span>
                <span className="inline-block w-[2px] h-[1em] bg-maxime-primary dark:bg-maxime-white animate-pulse ml-0.5 align-middle"></span>
              </span>
            </p>
          </div>

          {/* CTA Button */}
          <div
            className={`mt-5 landscape:max-md:mt-3 portrait:xs:mt-4 transition-[opacity,translate] duration-1000 delay-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="#projects"
              className="inline-block px-8 py-3 border transition duration-300 active:scale-[0.96] cursor-pointer outline-none landscape:max-md:px-6 landscape:max-md:py-2 landscape:max-md:text-sm border-maxime-primary dark:border-maxime-white hover:bg-maxime-primary hover:text-maxime-white dark:hover:bg-maxime-white dark:hover:text-maxime-primary focus-visible:ring-2 focus-visible:ring-maxime-primary dark:focus-visible:ring-maxime-white focus-visible:ring-offset-2"
            >
              Voir mes projets
            </Link>
          </div>
        </div>

        {/* Right column - Image (Safari-optimized) */}
        <div className="hidden justify-center items-center w-full lg:flex lg:col-span-5 2xl:col-span-5">
          <div
            ref={imageRef}
            className={`relative flex items-center justify-center mx-auto overflow-hidden max-w-[450px] max-h-[70vh] h-auto outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10 transition-opacity duration-800 ease-in-out ${
              showImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              // Fix pour Safari - Ces propriétés ne sont pas encore disponibles dans Tailwind
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* Photo du hero : pull noir en thème sombre, pull blanc en thème clair (même cadrage, fondu au changement de thème).
                Servies telles quelles : le réencodage AVIF de Next lissait les détails du visage */}
            <OptimizedImage
              src="/images/optimized/maxime-2026-dark.webp"
              alt="Maxime De Sogus"
              width={1122}
              height={1402}
              priority={true}
              unoptimized
              className="w-full h-full object-cover object-center object-[50%_15%]"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAADwAwCdASoQABQAPu1iqU2ppaQiMAgBMB2JaQAD4ckhi2X8FFikBToAAP3d2re/1repXEctZw8VWGmZjVvXjjHVS5vBpoAKJklCAQQl3G7J97sKU3+ZAeu8E0/2jtF6mAAAAA=="
              style={{
                // Fix pour Safari - propriétés non disponibles en Tailwind
                transform: "none",
                WebkitTransform: "none",
              }}
            />
            <div className="absolute inset-0 transition-opacity duration-700 ease-out dark:opacity-0">
              <OptimizedImage
                src="/images/optimized/maxime-2026-light.webp"
                alt=""
                width={1122}
                height={1402}
                priority={true}
                unoptimized
                className="w-full h-full object-cover object-center object-[50%_15%]"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAADQAwCdASoQABQAPu1iqU2ppaOiMAgBMB2JaQAAQy2jg1RW1P0txsAA/sV/+SmvC+Ac+KwUmdSEDKJ4elGkwTpj3kygB7WXjnJzJapUQiGKpwSxkr/reVror5qr9IQhhLYAAA=="
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-6 sm:bottom-10 landscape:max-md:bottom-2 left-1/2 -translate-x-1/2 transition-[opacity,translate,background-color] duration-1000 delay-1200 
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
