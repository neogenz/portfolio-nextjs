'use client';

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import BlogTitle from '@/components/BlogTitle';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { getBlogPostBySlug, formatDate } from '@/lib/blog';
import type { BlogPost } from '@/lib/blog';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Récupérer l'article correspondant au slug
  useEffect(() => {
    const fetchPost = async () => {
      if (typeof slug !== 'string') {
        notFound();
        return;
      }

      try {
        const foundPost = await getBlogPostBySlug(slug);
        
        if (!foundPost) {
          notFound();
          return;
        }
        
        setPost(foundPost);
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement de l\'article:', error);
        notFound();
      }
    };

    // Ajouter un délai artificiel pour simuler le chargement
    const timer = setTimeout(() => {
      fetchPost();
    }, 500);

    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) {
    return (
      <SmoothScroll>
        <div className="relative min-h-screen flex flex-col">
          <Navigation />
          <main className="pt-24 md:pt-32 flex-grow px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto w-full py-8">
              <div className="h-8 w-1/2 bg-gray-200 dark:bg-maxime-dark-accent rounded animate-pulse mb-4"></div>
              <div className="h-4 w-1/4 bg-gray-200 dark:bg-maxime-dark-accent rounded animate-pulse mb-8"></div>
              <div className="h-64 w-full bg-gray-200 dark:bg-maxime-dark-accent rounded animate-pulse mb-8"></div>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="h-4 w-full bg-gray-200 dark:bg-maxime-dark-accent rounded animate-pulse mb-3"></div>
              ))}
            </div>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    );
  }

  if (!post) return null;

  return (
    <SmoothScroll>
      <div className="relative min-h-screen flex flex-col">
        <Navigation />
        <main className="pt-24 md:pt-32 flex-grow px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto py-8 md:py-12">
            <article>
              <div className="mb-12">
                <Link 
                  href="/blog" 
                  className="inline-flex items-center text-maxime-primary hover:opacity-80 transition-opacity duration-300 mb-8"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" /> Retour aux articles
                </Link>
                
                <BlogTitle 
                  title={post.title} 
                  className="mb-8"
                  textAlign="left"
                />
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-maxime-gray dark:text-maxime-light-gray">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readingTime} de lecture</span>
                  </div>
                </div>
              </div>
              
              {post.image && (
                <div className="w-full h-[350px] mb-10 overflow-hidden rounded-lg">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="flex flex-wrap gap-2 mb-10">
                {post.categories.map((category, index) => (
                  <div 
                    key={index} 
                    className="flex items-center text-xs px-3 py-1 bg-maxime-primary/10 dark:bg-maxime-primary/20 text-maxime-primary rounded-full"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {category}
                  </div>
                ))}
              </div>
              
              <div 
                className="prose prose-lg dark:prose-invert prose-headings:text-maxime-primary dark:prose-headings:text-maxime-white prose-a:text-maxime-primary hover:prose-a:opacity-80 max-w-none prose-img:rounded-lg prose-p:text-maxime-gray dark:prose-p:text-maxime-light-gray prose-strong:text-maxime-primary dark:prose-strong:text-maxime-white mb-16"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
} 