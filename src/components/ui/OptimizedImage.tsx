import { FC, useState, memo } from 'react';

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
}

/**
 * Composant d'image optimisé qui implémente automatiquement les meilleures pratiques:
 * - Lazy loading pour les images non prioritaires
 * - Format WebP si disponible
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
  sizes = '100vw',
  priority = false,
  onLoad,
  style,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Déterminer le chemin de base sans extension
  const basePath = src.replace(/\.(jpg|jpeg|png|gif)$/, '');
  
  // Vérifier si c'est déjà une URL WebP ou si c'est déjà dans le dossier optimized
  const isWebP = src.endsWith('.webp');
  const isAlreadyOptimized = src.includes('/optimized/');
  
  // Construire les chemins pour différentes tailles si ce n'est pas déjà optimisé
  const srcWebP = isWebP || isAlreadyOptimized 
    ? src 
    : `${basePath.replace('public/', '/images/optimized/')}.webp`;
  
  const srcSmall = isWebP || isAlreadyOptimized 
    ? src.replace('.webp', '-sm.webp') 
    : `${basePath.replace('public/', '/images/optimized/')}-sm.webp`;
  
  const srcMedium = isWebP || isAlreadyOptimized 
    ? src.replace('.webp', '-md.webp') 
    : `${basePath.replace('public/', '/images/optimized/')}-md.webp`;
  
  const srcLarge = isWebP || isAlreadyOptimized 
    ? src.replace('.webp', '-lg.webp') 
    : `${basePath.replace('public/', '/images/optimized/')}-lg.webp`;

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  // Attributs supplémentaires pour l'image
  const imgProps = {} as any;
  
  // Utilisation d'un data-attribute personnalisé pour la priorité
  // React ne se plaindra pas de cet attribut
  if (priority) {
    imgProps['data-priority'] = 'high';
  }

  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={{ 
        ...style,
        aspectRatio: width && height ? `${width} / ${height}` : 'auto',
      }}
    >
      {/* Placeholders et animation de chargement */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}
      
      <picture>
        {/* Sources pour différentes tailles d'écran */}
        <source srcSet={srcSmall} media="(max-width: 480px)" type="image/webp" />
        <source srcSet={srcMedium} media="(max-width: 768px)" type="image/webp" />
        <source srcSet={srcLarge} media="(min-width: 769px)" type="image/webp" />
        
        {/* Image par défaut */}
        <img
          src={srcWebP}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          sizes={sizes}
          {...imgProps}
        />
      </picture>
    </div>
  );
};

export default memo(OptimizedImage); 