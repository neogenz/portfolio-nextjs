import { DownloadIcon } from 'lucide-react';

// PDF généré depuis cv/cv.html avec `npm run cv:pdf`
export const CV_URL = '/CV_Maxime_De_Sogus_2026.pdf';

const CVExport = () => (
  <a
    href={CV_URL}
    download
    className="flex items-center space-x-2 px-4 py-2 rounded-md bg-maxime-tertiary dark:bg-maxime-dark-card text-maxime-primary dark:text-maxime-white transition-[background-color,scale] active:scale-[0.96] hover:bg-maxime-tertiary/70 dark:hover:bg-maxime-dark-card/70"
  >
    <DownloadIcon className="h-4 w-4" />
    <span>Télécharger CV</span>
  </a>
);

export default CVExport;
