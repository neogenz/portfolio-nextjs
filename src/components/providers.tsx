'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  // Créer une nouvelle instance de QueryClient pour chaque session utilisateur
  const [queryClient] = useState(() => new QueryClient());
  
  // Assurer que le composant est rendu uniquement côté client pour éviter les erreurs d'hydratation
  const [mounted, setMounted] = useState(false);
  
  // Effet pour marquer le montage et appliquer les styles après que le composant soit monté côté client
  useEffect(() => {
    setMounted(true);
    // Appliquer les classes bg après le montage côté client
    document.body.classList.add('bg-maxime-white');
    
    // Vérifier les préférences du thème sombre 
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark:bg-maxime-dark-bg');
    }
  }, []);
  
  // Supprime/cache le contenu jusqu'à ce que le client soit prêt
  if (!mounted) {
    return (
      <QueryClientProvider client={queryClient}>
        <div style={{ visibility: 'hidden' }}>{children}</div>
      </QueryClientProvider>
    );
  }
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
} 