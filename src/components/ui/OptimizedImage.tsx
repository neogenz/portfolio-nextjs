import { FC, useState, memo } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  onLoad?: () => void;
  style?: React.CSSProperties;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

/**
 * Composant d'image optimisé qui utilise l'API d'optimisation d'images de Next.js:
 * - Lazy loading automatique pour les images non prioritaires
 * - Optimisation automatique du format (WebP, AVIF)
 * - Redimensionnement automatique 
 * - Attributs de dimension pour éviter le layout shift
 * - Placeholder et animation de chargement
 * - Support des images responsive
 */
const OptimizedImage: FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  sizes = '(max-width: 480px) 100vw, (max-width: 768px) 80vw, 700px',
  priority = false,
  onLoad,
  style,
  quality = 80,
  placeholder = 'empty',
  blurDataURL,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={{ 
        ...style,
        aspectRatio: width && height ? `${width} / ${height}` : 'auto',
      }}
    >
      {/* Placeholder et animation de chargement */}
      {!isLoaded && placeholder === 'empty' && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}
      
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        sizes={sizes}
        quality={quality}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
      />
    </div>
  );
};

export default memo(OptimizedImage); 