'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h1 className="text-6xl font-bold mb-4">Erreur Système</h1>
          <h2 className="text-2xl mb-6">Une erreur critique est survenue</h2>
          <p className="mb-8">
            Nous sommes désolés, une erreur critique s&apos;est produite.
          </p>
          <button
            onClick={reset}
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
} 