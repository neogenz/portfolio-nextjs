import { Tag } from 'lucide-react';

interface CategoryTagProps {
  category: string;
  showIcon?: boolean;
  className?: string;
}

export default function CategoryTag({ category, showIcon = false, className = '' }: CategoryTagProps) {
  return (
    <div 
      className={`flex items-center text-xs px-3 py-1 bg-maxime-primary/20 dark:bg-maxime-primary/30 text-maxime-primary dark:text-maxime-white rounded-full ${className}`}
    >
      {showIcon && <Tag className="w-3 h-3 mr-1" />}
      {category}
    </div>
  );
} 