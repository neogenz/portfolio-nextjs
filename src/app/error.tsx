'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">Erreur</h1>
      <h2 className="text-2xl mb-6">Une erreur est survenue</h2>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        Nous sommes désolés, une erreur inattendue s&apos;est produite.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-maxime-primary text-white rounded-md hover:bg-maxime-primary/90 transition-colors"
        >
          Réessayer
        </button>
        <Link 
          href="/" 
          className="px-6 py-3 border border-maxime-primary text-maxime-primary rounded-md hover:bg-maxime-primary/10 transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
} 