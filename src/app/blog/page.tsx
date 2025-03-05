import BlogNavigation from '@/components/BlogNavigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import BlogTitle from '@/components/BlogTitle';
import CategoryTag from '@/components/CategoryTag';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getAllBlogPosts, formatDate } from '@/lib/blog';

export default async function Blog() {
  const posts = await getAllBlogPosts();

  return (
    <SmoothScroll>
      <div className="relative min-h-screen flex flex-col bg-maxime-white dark:bg-maxime-dark-bg">
        <BlogNavigation />
        <main className="pt-24 md:pt-32 flex-grow px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full py-8 md:py-12">
            <div className="mb-16 max-w-3xl mx-auto">
              <BlogTitle 
                title="Blog" 
                className="mb-8"
              />
              <p className="text-center text-base md:text-lg text-maxime-secondary dark:text-maxime-white/80 px-4">
                Mes réflexions sur le développement web, les nouvelles technologies et les bonnes pratiques de programmation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map(post => (
                <Link 
                  href={`/blog/${post.slug}`} 
                  key={post.id}
                  className="group bg-maxime-tertiary dark:bg-maxime-dark-card/40 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full blog-card"
                >
                  <div className="h-48 bg-maxime-tertiary/50 dark:bg-maxime-dark-card/60 relative overflow-hidden">
                    {post.image ? (
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-maxime-tertiary/80 to-maxime-tertiary dark:from-maxime-dark-bg dark:to-maxime-dark-card"></div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.categories.map((category, index) => (
                        <CategoryTag 
                          key={index} 
                          category={category}
                        />
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-maxime-primary dark:text-maxime-white group-hover:text-maxime-primary/80 dark:group-hover:text-maxime-white/80 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-sm text-maxime-secondary dark:text-maxime-white/80 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center mt-auto pt-3 border-t border-maxime-white/30 dark:border-maxime-dark-bg/30">
                      <span className="text-xs text-maxime-secondary dark:text-maxime-white/60">
                        {formatDate(post.date)}
                      </span>
                      <span className="text-maxime-primary dark:text-maxime-white flex items-center text-sm">
                        Lire <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
} 