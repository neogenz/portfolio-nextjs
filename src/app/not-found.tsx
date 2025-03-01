'use client';

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Page non trouvée</h2>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        Désolé, la page que vous recherchez n&apos;existe pas.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-maxime-primary text-white rounded-md hover:bg-maxime-primary/90 transition-colors"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
} 