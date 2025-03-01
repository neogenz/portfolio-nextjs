'use client';

import { FC, ReactNode } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

/**
 * Composant conteneur de section avec lazy loading
 * Utilise l'Intersection Observer pour déclencher l'animation de fade-in
 * uniquement lorsque la section devient visible
 */
const SectionContainer: FC<SectionContainerProps> = ({ 
  children, 
  id,
  className = ''
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1, // Déclenche dès que 10% de la section est visible
    rootMargin: '100px', // Précharger avant que la section ne soit visible
  });

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-opacity duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer; 