'use client';

import { ArrowUp, ArrowUpRight, Moon, Sun, ArrowLeft } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import CVExport from './CVExport';

// Type pour les liens de navigation
interface NavLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

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
  // Détermine si nous sommes sur une page de blog
  const [isOnBlogPage, setIsOnBlogPage] = useState(false);

  // Monter le composant
  useEffect(() => {
    setMounted(true);
    
    // Si initialement en system, définir une valeur explicite
    if (mounted && theme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }

    // Vérifier si nous sommes sur une page de blog
    const path = window.location.pathname;
    setIsOnBlogPage(path.startsWith('/blog'));
  }, [mounted, theme, setTheme]);

  // Fonction de basculement de thème simplifiée (uniquement light/dark)
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
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

  // Fonction de gestion des clics sur les liens de navigation
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLink) => {
    // Si c'est un lien externe ou si nous sommes sur une page de blog et que le lien n'est pas "/blog"
    if (link.isExternal || (isOnBlogPage && link.href !== "/blog")) {
      // Si nous sommes sur une page de blog et que le lien pointe vers la page principale
      if (isOnBlogPage && link.href.startsWith('#')) {
        // Pas besoin d'empêcher le comportement par défaut car Link s'en charge
        return;
      }
      // Sinon, laissez le comportement par défaut (navigation normale)
      return;
    }
    
    // Pour les liens internes sur la page principale
    e.preventDefault();
    const element = document.querySelector(link.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <div className="flex items-center gap-2">
            {isOnBlogPage && (
              <Link 
                href="/"
                className="flex items-center text-sm text-maxime-primary dark:text-maxime-white hover:opacity-70 transition-opacity duration-300 mr-4"
                aria-label="Retour au portfolio"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Portfolio</span>
              </Link>
            )}
            {isOnBlogPage ? (
              <Link href="/" className="text-2xl relative z-10 -mt-1">
                🚀
              </Link>
            ) : (
              <a href="#" className="text-2xl relative z-10 -mt-1">
                🚀
              </a>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center ${isWideScreen ? 'absolute left-1/2 transform -translate-x-1/2' : 'mx-auto'}`}>
            <nav className="flex items-center space-x-6 lg:space-x-8">
              {navLinks.map(link => (
                <Link 
                  key={link.href} 
                  href={isOnBlogPage && link.href.startsWith('#') ? '/' + link.href : link.href} 
                  className={`${linkStyles} ${
                    isOnBlogPage && link.href === '/blog' ? 'font-medium text-maxime-primary/90 dark:text-maxime-white/90 border-b border-maxime-primary/30 dark:border-maxime-white/30 pb-0.5' : ''
                  }`}
                  onClick={(e) => handleNavLinkClick(e, link)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-2 md:space-x-4 flex-none">
            <a href="#contact" className="hidden lg:flex items-center gap-1 text-sm text-maxime-primary dark:text-maxime-white border-b border-maxime-primary/20 dark:border-maxime-white/20 pb-1 hover:border-maxime-primary dark:hover:border-maxime-white transition-all duration-300">
              Prendre rendez-vous <ArrowUpRight className="w-3 h-3" />
            </a>
            
            {/* Blog Button */}
            <Link 
              href="/blog" 
              className="hidden lg:flex items-center space-x-2 px-4 py-2 rounded-md bg-maxime-tertiary dark:bg-maxime-dark-card text-maxime-primary dark:text-maxime-white transition-colors hover:bg-maxime-tertiary/70 dark:hover:bg-maxime-dark-card/70"
            >
              Blog
            </Link>
            
            {/* CV Export Button */}
            <div className="hidden lg:block">
              <CVExport />
            </div>

            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-maxime-tertiary dark:hover:bg-maxime-dark-card/50 transition-colors duration-300"
              aria-label={isDarkMode ? "Passer en mode clair" : "Passer en mode sombre"}
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
          {isOnBlogPage && (
            <Link 
              href="/"
              className={`${mobileLinkStyles} text-xl md:text-2xl py-2 flex items-center`}
              onClick={closeMobileMenu}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour au portfolio
            </Link>
          )}
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={isOnBlogPage && link.href.startsWith('#') ? '/' + link.href : link.href}
              className={`${mobileLinkStyles} text-xl md:text-2xl py-2 ${
                isOnBlogPage && link.href === '/blog' ? 'font-medium text-maxime-primary/90 dark:text-maxime-white/90' : ''
              }`}
              onClick={(e) => {
                const result = handleNavLinkClick(e, link);
                closeMobileMenu();
                return result;
              }}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Blog Button in Mobile Menu */}
          <Link 
            href="/blog"
            className="text-maxime-primary bg-maxime-tertiary hover:bg-maxime-tertiary/80 dark:bg-maxime-dark-card dark:hover:bg-maxime-dark-card/90 px-6 py-2 rounded-md transition-all duration-300 text-base"
            onClick={closeMobileMenu}
          >
            Blog
          </Link>
          
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
