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
  
  // Effet pour marquer le montage - pas de manipulation directe des classes DOM avec Tailwind v4
  useEffect(() => {
    setMounted(true);
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
      <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
} 