'use client';

import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', delay = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spans = container.querySelectorAll('span');
    
    spans.forEach((span, index) => {
      span.style.animationDelay = `${delay + (index * 0.05)}s`;
      // Set animation-play-state to running to start the animation after delay is set
      setTimeout(() => {
        span.style.animationPlayState = 'running';
      }, 10);
    });

    container.style.opacity = '1';
  }, [delay]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`} style={{ opacity: 0 }}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="inline-block animate-char-reveal"
          style={{ 
            animationPlayState: 'paused',
            animationFillMode: 'forwards'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
