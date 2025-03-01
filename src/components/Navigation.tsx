'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, Moon, Sun, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import CVExport from './CVExport';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setIsScrolled(currentPosition > 50);
      setShowScrollTop(currentPosition > 300);
      
      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (currentPosition / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1350);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
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
        <div className={`absolute bottom-0 left-0 h-0.5 bg-maxime-primary dark:bg-maxime-white transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} 
          style={{ width: `${scrollProgress}%` }}
        ></div>
        
        <div className="container-padding mx-auto flex justify-between items-center relative">
          {/* Logo */}
          <a href="#" className="text-2xl relative z-10 -mt-1">
            🚀
          </a>

          {/* Desktop Navigation - Adaptatif selon la taille d'écran */}
          <div className={`hidden lg:flex items-center ${isWideScreen ? 'absolute left-1/2 transform -translate-x-1/2' : 'mx-auto'}`}>
            <nav className="flex items-center space-x-6 lg:space-x-8">
              <a href="#about" className="text-sm text-maxime-primary dark:text-maxime-white hover:opacity-70 transition-opacity duration-300">À propos</a>
              <a href="#experience" className="text-sm text-maxime-primary dark:text-maxime-white hover:opacity-70 transition-opacity duration-300">Expérience</a>
              <a href="#projects" className="text-sm text-maxime-primary dark:text-maxime-white hover:opacity-70 transition-opacity duration-300">Projets</a>
              <a href="#contact" className="text-sm text-maxime-primary dark:text-maxime-white hover:opacity-70 transition-opacity duration-300">Contact</a>
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
          <a href="#about" className="text-maxime-primary dark:text-maxime-white hover:opacity-70 transition-opacity duration-300" onClick={closeMobileMenu}>À propos</a>
          <a href="#experience" className="text-maxime-primary dark:text-maxime-white hover:opacity-70 transition-opacity duration-300" onClick={closeMobileMenu}>Expérience</a>
          <a href="#projects" className="text-maxime-primary dark:text-maxime-white hover:opacity-70 transition-opacity duration-300" onClick={closeMobileMenu}>Projets</a>
          <a href="#contact" className="text-maxime-primary dark:text-maxime-white hover:opacity-70 transition-opacity duration-300" onClick={closeMobileMenu}>Contact</a>
          
          {/* CV Export in Mobile Menu */}
          <div className="mt-4">
            <CVExport />
          </div>
        </nav>
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop} 
        className={`fixed bottom-8 right-8 w-12 h-12 bg-maxime-primary dark:bg-maxime-white dark:text-maxime-primary text-maxime-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md z-50 ${
          showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
        aria-label="Retour en haut"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
};

export default Navigation;
