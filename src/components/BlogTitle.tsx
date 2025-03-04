'use client';

import React from 'react';

interface BlogTitleProps {
  title: string;
  className?: string;
  textAlign?: 'left' | 'center' | 'right';
}

const BlogTitle: React.FC<BlogTitleProps> = ({ 
  title, 
  className = '',
  textAlign = 'center'
}) => {
  return (
    <div className={`w-full px-4 ${textAlign === 'center' ? 'text-center' : textAlign === 'right' ? 'text-right' : 'text-left'}`}>
      <h1 
        className={`text-4xl md:text-5xl lg:text-6xl font-bold text-maxime-primary dark:text-maxime-white break-words hyphens-auto overflow-wrap-break-word max-w-full ${className}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default BlogTitle; 