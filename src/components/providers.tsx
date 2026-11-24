'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useState } from "react";
import useMounted from "@/hooks/useMounted";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  // Créer une nouvelle instance de QueryClient pour chaque session utilisateur
  const [queryClient] = useState(() => new QueryClient());
  
  // Assurer que le composant est rendu uniquement côté client pour éviter les erreurs d'hydratation
  const mounted = useMounted();
  
  // ThemeProvider rendu dès le serveur : son script applique le thème avant le premier affichage.
  // Le contenu reste caché jusqu'à l'hydratation, comme avant.
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
        {mounted ? (
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        ) : (
          <div style={{ visibility: 'hidden' }}>{children}</div>
        )}
      </ThemeProvider>
    </QueryClientProvider>
  );
} 