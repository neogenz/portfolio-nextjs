'use client';

import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import CVExport from './CVExport';

// Hook personnalisé pour gérer le scroll (similaire à celui du portfolio)
const useScroll = () => {
  const [scrollState, setScrollState] = useState({
    isScrolled: false,
    showScrollTop: false,
    scrollProgress: 0
  });

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return scrollState;
};

// Interface pour les catégories du blog
interface BlogCategory {
  name: string;
  slug: string;
}

const BlogNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { isScrolled, scrollProgress } = useScroll();
  
  // Simulons quelques catégories (à remplacer par vos vraies catégories)
  const categories: BlogCategory[] = [
    { name: 'Développement Web', slug: 'dev-web' },
    { name: 'Design UX/UI', slug: 'design' },
    { name: 'Technologies', slug: 'tech' }
  ];

  // Monter le composant
  useEffect(() => {
    setMounted(true);
    
    if (mounted && theme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }
  }, [mounted, theme, setTheme]);

  // Fonction de basculement de thème
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
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
  const linkStyles = "text-sm text-maxime-primary dark:text-maxime-white hover:opacity-70 transition-opacity duration-300";

  const navLinks = [
    { href: "/blog", label: "Tous les articles" },
    { href: "/blog/categories", label: "Catégories" }
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
        {/* Barre de progression */}
        <div 
          className={`absolute bottom-0 left-0 h-0.5 bg-maxime-primary dark:bg-maxime-white transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} 
          style={{ width: `${scrollProgress}%` }}
        ></div>
        
        <div className="container-padding mx-auto flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/blog" className="text-2xl relative z-10 -mt-1 flex items-center">
            🚀
            <span className="ml-2 text-xl font-medium text-maxime-primary dark:text-maxime-white">Blog</span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center space-x-6 lg:space-x-8">
              {navLinks.map(link => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={linkStyles}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Actions à droite */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Bouton retour au portfolio */}
            <Link 
              href="/" 
              className="hidden lg:flex items-center gap-1 text-sm text-maxime-primary dark:text-maxime-white border-b border-maxime-primary/20 dark:border-maxime-white/20 pb-1 hover:border-maxime-primary dark:hover:border-maxime-white transition-all duration-300"
              aria-label="Retour au portfolio"
            >
              <ArrowLeft className="w-3 h-3 mr-1" />
              Portfolio
            </Link>
            
            {/* Bouton thème */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-maxime-tertiary dark:hover:bg-maxime-dark-card/50 transition-colors duration-300"
              aria-label={isDarkMode ? "Passer en mode clair" : "Passer en mode sombre"}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            {/* Menu mobile */}
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

      {/* Menu mobile */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-maxime-dark-bg z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex flex-col items-center space-y-8 text-2xl">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-maxime-primary dark:text-maxime-white hover:opacity-70 transition-opacity duration-300 text-xl md:text-2xl py-2`}
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Catégories dans le menu mobile */}
          <div className="mt-4 space-y-2">
            {categories.map((category) => (
              <Link 
                key={category.slug} 
                href={`/blog/categorie/${category.slug}`}
                className="block py-1 text-base text-maxime-primary dark:text-maxime-white hover:opacity-70"
                onClick={closeMobileMenu}
              >
                {category.name}
              </Link>
            ))}
          </div>
          
          {/* Retour au portfolio en mobile */}
          <Link 
            href="/"
            className="flex items-center text-maxime-primary dark:text-maxime-white hover:opacity-70 transition-opacity duration-300 mt-8 text-base"
            onClick={closeMobileMenu}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au portfolio
          </Link>
        </nav>
      </div>
    </>
  );
};

export default BlogNavigation; 