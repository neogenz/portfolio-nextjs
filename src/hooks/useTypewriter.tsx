'use client';

import { useState, useEffect } from 'react';

interface TypewriterOptions {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
}

/**
 * Hook personnalisé pour l'effet machine à écrire
 * Optimisé pour gérer correctement les emojis et réduire les re-rendus
 */
export default function useTypewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDelay = 1250
}: TypewriterOptions) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    if (!texts.length) return;
    
    // Initialiser avec le premier texte
    setText(texts[0]);
    
    // Reste de la logique...
  }, []);
  
  useEffect(() => {
    if (!texts.length) return;
    
    const current = loopNum % texts.length;
    const fullText = texts[current];

    let timeout: NodeJS.Timeout;
    
    if (isDeleting) {
      // Phase de suppression
      timeout = setTimeout(() => {
        // Traiter correctement les emojis en utilisant les points de code Unicode
        const textArray = [...fullText];
        const currentTextArray = [...text];
        currentTextArray.pop(); // Supprimer le dernier caractère (peut être un emoji complet)
        setText(currentTextArray.join(''));
        
        // Si le texte est complètement supprimé, passer au texte suivant
        if (text.length <= 1) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }, deletingSpeed);
    } else {
      // Phase d'écriture
      timeout = setTimeout(() => {
        // Traiter correctement les emojis en utilisant les points de code Unicode
        const textArray = [...fullText];
        const currentTextArray = [...text];
        
        if (currentTextArray.length < textArray.length) {
          // Ajouter le caractère suivant (peut être un emoji complet)
          currentTextArray.push(textArray[currentTextArray.length]);
          setText(currentTextArray.join(''));
        }
        
        // Si le texte est complet, commencer à supprimer après une pause
        if (text.length >= fullText.length) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDelay);
        }
      }, typingSpeed);
    }
    
    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, pauseDelay]);

  return { text, isDeleting };
} 