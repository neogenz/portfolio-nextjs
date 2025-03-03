'use client';

import { ArrowUp, ArrowUpRight, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState, useCallback } from 'react';
import CVExport from './CVExport';

// Hook personnalisé pour gérer le scroll et les dimensions
const useScrollAndResize = () => {
  const [scrollState, setScrollState] = useState({
    isScrolled: false,
    showScrollTop: false,
    scrollProgress: 0
  });
  const [isWideScreen, setIsWideScreen] = useState(false);

  // Fonction pour gérer le scroll
  const handleScroll = useCallback(() => {
    const currentPosition = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (currentPosition / scrollHeight) * 100 : 0;
    
    setScrollState({
      isScrolled: currentPosition > 50,
      showScrollTop: currentPosition > 300,
      scrollProgress: progress
    });
  }, []);

  // Fonction pour gérer le redimensionnement
  const handleResize = useCallback(() => {
    setIsWideScreen(window.innerWidth > 1350);
  }, []);

  // Configurer les écouteurs d'événements
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialisation
      handleScroll();
      handleResize();
      
      // Ajouter les écouteurs
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
      
      // Nettoyage
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [handleScroll, handleResize]);

  return { ...scrollState, isWideScreen };
};

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { isScrolled, showScrollTop, scrollProgress, isWideScreen } = useScrollAndResize();

  // Monter le composant
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fonctions de navigation simplifiées
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Éviter le rendu non correspondant
  if (!mounted) return null;

  const isDarkMode = theme === 'dark';

  // Styles communs extraits en constantes
  const linkStyles = "text-sm text-maxime-primary dark:text-maxime-white hover:opacity-70 transition-opacity duration-300";
  const mobileLinkStyles = "text-maxime-primary dark:text-maxime-white hover:opacity-70 transition-opacity duration-300";

  const navLinks = [
    { href: "#about", label: "À propos" },
    { href: "#experience", label: "Expérience" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-white/95 dark:bg-maxime-dark-bg/95 backdrop-blur-sm shadow-sm' 
            : 'py-6 bg-transparent'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div 
          className={`absolute bottom-0 left-0 h-0.5 bg-maxime-primary dark:bg-maxime-white transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} 
          style={{ width: `${scrollProgress}%` }}
        ></div>
        
        <div className="container-padding mx-auto flex justify-between items-center relative">
          {/* Logo */}
          <a href="#" className="text-2xl relative z-10 -mt-1">
            🚀
          </a>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center ${isWideScreen ? 'absolute left-1/2 transform -translate-x-1/2' : 'mx-auto'}`}>
            <nav className="flex items-center space-x-6 lg:space-x-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className={linkStyles}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-2 md:space-x-4 flex-none">
            <a href="#contact" className="hidden lg:flex items-center gap-1 text-sm text-maxime-primary dark:text-maxime-white border-b border-maxime-primary/20 dark:border-maxime-white/20 pb-1 hover:border-maxime-primary dark:hover:border-maxime-white transition-all duration-300">
              Prendre rendez-vous <ArrowUpRight className="w-3 h-3" />
            </a>
            
            {/* CV Export Button */}
            <div className="hidden lg:block">
              <CVExport />
            </div>

            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-maxime-tertiary dark:hover:bg-maxime-dark-card/50 transition-colors duration-300"
              aria-label="Changer le thème"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span 
                className={`block w-6 h-0.5 bg-maxime-primary dark:bg-maxime-white transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                }`}
              ></span>
              <span 
                className={`block w-6 h-0.5 bg-maxime-primary dark:bg-maxime-white transition-opacity duration-300 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span 
                className={`block w-6 h-0.5 bg-maxime-primary dark:bg-maxime-white transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                }`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-maxime-dark-bg z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex flex-col items-center space-y-8 text-2xl">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className={mobileLinkStyles} 
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          ))}
          
          {/* CV Export in Mobile Menu */}
          <div className="mt-4">
            <CVExport />
          </div>
        </nav>
      </div>

      {/* Bouton de retour en haut */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 p-3 rounded-full shadow-lg bg-maxime-tertiary dark:bg-maxime-dark-card transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-5 h-5 text-maxime-primary dark:text-maxime-white" />
      </button>
    </>
  );
};

export default Navigation;
