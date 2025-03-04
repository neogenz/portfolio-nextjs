'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import BlogTitle from '@/components/BlogTitle';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAllBlogPosts, formatDate } from '@/lib/blog';
import type { BlogPost } from '@/lib/blog';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Charger les articles
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await getAllBlogPosts();
        setPosts(allPosts);
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des articles:', error);
        setIsLoading(false);
      }
    };

    // Ajouter un délai artificiel pour simuler le chargement
    const timer = setTimeout(() => {
      fetchPosts();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen flex flex-col">
        <Navigation />
        <main className="pt-24 md:pt-32 flex-grow px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full py-8 md:py-12">
            <div className="mb-16 max-w-3xl mx-auto">
              <BlogTitle 
                title="Blog" 
                className="mb-8"
              />
              <p className="text-center text-base md:text-lg text-maxime-gray dark:text-maxime-light-gray px-4">
                Mes réflexions sur le développement web, les nouvelles technologies et les bonnes pratiques de programmation.
              </p>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-gray-100 dark:bg-maxime-dark-accent animate-pulse rounded-xl overflow-hidden h-[350px]"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {posts.map(post => (
                  <Link 
                    href={`/blog/${post.slug}`} 
                    key={post.id}
                    className="group bg-white dark:bg-maxime-dark-accent rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full blog-card"
                  >
                    <div className="h-48 bg-gray-200 dark:bg-maxime-dark-bg relative overflow-hidden">
                      {post.image ? (
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-maxime-primary/20 to-maxime-primary/40 dark:from-maxime-dark-bg dark:to-maxime-dark-accent"></div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col h-full">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {post.categories.map((category, index) => (
                          <span 
                            key={index} 
                            className="text-xs px-2 py-1 bg-maxime-primary/10 dark:bg-maxime-primary/20 text-maxime-primary rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-maxime-primary dark:text-maxime-white group-hover:text-maxime-primary/80 dark:group-hover:text-maxime-white/80 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-sm text-maxime-gray dark:text-maxime-light-gray mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100 dark:border-maxime-dark-bg/50">
                        <span className="text-xs text-maxime-gray dark:text-maxime-light-gray">
                          {formatDate(post.date)}
                        </span>
                        <span className="text-maxime-primary flex items-center text-sm">
                          Lire <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
} 