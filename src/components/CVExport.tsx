'use client';

import { useState } from 'react';
import { DownloadIcon, FileTextIcon, FileIcon, FileTypeIcon } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { generateAndDownloadCV } from '@/services/CVGenerator';

interface Format {
  id: 'pdf' | 'docx' | 'txt';
  name: string;
  icon: React.ReactNode;
}

const CVExport = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const formats: Format[] = [
    {
      id: 'pdf',
      name: 'PDF',
      icon: <FileIcon className="mr-2 h-4 w-4" />
    },
    {
      id: 'docx',
      name: 'Word (.docx)',
      icon: <FileTextIcon className="mr-2 h-4 w-4" />
    },
    {
      id: 'txt',
      name: 'Texte (.txt)',
      icon: <FileTypeIcon className="mr-2 h-4 w-4" />
    }
  ];

  // Fonction pour gérer le téléchargement
  const handleDownload = async (format: 'pdf' | 'docx' | 'txt') => {
    setIsDownloading(true);
    try {
      // Utiliser le générateur de CV pour créer et télécharger dynamiquement le CV
      await generateAndDownloadCV(format);
    } catch (error) {
      console.error('Erreur lors du téléchargement du CV:', error);
      alert('Une erreur est survenue lors de la génération du CV. Veuillez réessayer.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button 
          className="flex items-center space-x-2 px-4 py-2 rounded-md bg-maxime-tertiary dark:bg-maxime-dark-card text-maxime-primary dark:text-maxime-white transition-colors hover:bg-maxime-tertiary/70 dark:hover:bg-maxime-dark-card/70"
          disabled={isDownloading}
        >
          {isDownloading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
              <span>Génération...</span>
            </>
          ) : (
            <>
              <DownloadIcon className="h-4 w-4" />
              <span>Télécharger CV</span>
            </>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Format</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {formats.map((format) => (
          <DropdownMenuItem 
            key={format.id}
            onClick={() => handleDownload(format.id)}
            disabled={isDownloading}
          >
            {format.icon}
            <span>{format.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CVExport; 