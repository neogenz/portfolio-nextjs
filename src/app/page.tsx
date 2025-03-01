'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  useEffect(() => {
    // Initial page loading animation
    document.body.classList.add('overflow-hidden');
    
    const timer = setTimeout(() => {
      document.body.classList.remove('overflow-hidden');
    }, 1500);
    
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('overflow-hidden');
    };
  }, []);
  
  return (
    <SmoothScroll>
      <div className="relative">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
