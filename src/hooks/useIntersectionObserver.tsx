'use client';

import { useEffect, useState, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
}

/**
 * Hook personnalisé pour observer quand un élément devient visible dans le viewport
 * Utile pour le lazy loading des sections ou des images
 */
export default function useIntersectionObserver<T extends Element>(
  options: IntersectionObserverOptions = {}
): [RefObject<T>, boolean] {
  const { 
    threshold = 0.1,
    rootMargin = '0px',
    root = null
  } = options;
  
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Mettre à jour l'état lorsque l'élément devient visible
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin, root }
    );

    // Observer l'élément
    observer.observe(element);

    // Nettoyer l'observer lors du démontage
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, root]);

  return [elementRef, isVisible] as [RefObject<T>, boolean];
} 