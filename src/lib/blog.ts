import fs from 'fs';
import path from 'path';
// @ts-ignore
import matter from 'gray-matter';
// @ts-ignore
import { remark } from 'remark';
// @ts-ignore
import html from 'remark-html';

// Types pour les articles de blog
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  slug: string;
  image?: string;
  categories: string[];
  readingTime: string;
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

// Fonction pour récupérer tous les articles de blog
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Récupérer les noms de fichiers sous /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  
  // Récupérer les données de chaque article
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Récupérer le slug à partir du nom de fichier (en enlevant l'extension .md)
      const slug = fileName.replace(/\.md$/, '');
      
      // Lire le contenu du fichier Markdown
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Utiliser gray-matter pour parser les métadonnées
      const matterResult = matter(fileContents);
      
      // Utiliser remark pour convertir le markdown en HTML
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();
      
      // Calculer le temps de lecture
      const readingTime = calculateReadingTime(matterResult.content);
      
      // Retourner les données combinées
      return {
        id: slug,
        slug,
        content: contentHtml,
        readingTime,
        ...(matterResult.data as { 
          title: string; 
          excerpt: string; 
          date: string; 
          image?: string;
          categories: string[];
        })
      };
    })
  );
  
  // Trier les articles par date
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Fonction pour récupérer un article spécifique par son slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    // Vérifier si le fichier existe
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Utiliser gray-matter pour parser les métadonnées
    const matterResult = matter(fileContents);
    
    // Utiliser remark pour convertir le markdown en HTML
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
    
    // Calculer le temps de lecture
    const readingTime = calculateReadingTime(matterResult.content);
    
    // Retourner les données combinées
    return {
      id: slug,
      slug,
      content: contentHtml,
      readingTime,
      ...(matterResult.data as { 
        title: string; 
        excerpt: string; 
        date: string; 
        image?: string;
        categories: string[];
      })
    };
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'article ${slug}:`, error);
    return null;
  }
}

// Formater la date au format suisse
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-CH', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

// Calculer le temps de lecture estimé
export const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min`;
}; 