'use client';

// Importation des bibliothèques nécessaires pour générer des documents
import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, BorderStyle, Table, TableRow, TableCell } from 'docx';
import { saveAs } from 'file-saver';

// Données personnelles
const personalInfo = {
  name: "Maxime De Sogus",
  title: "Développeur fullstack Angular & NestJS",
  address: "Route Cantonale 158, Vétroz, Valais, Suisse",
  phone: "+41 76 498 76 31",
  email: "maxime.desogus@gmail.com",
  linkedin: "linkedin.com/in/maximedesogus"
};

// Données d'expérience (importées depuis le composant Experience)
import { experienceData, technicalSkills } from '@/components/Experience';

// Données de formation
const education = [
  {
    degree: "Ingénierie en informatique",
    institution: "ESIMED (Ecole supérieure d'informatique de la Méditerranée), Marseille",
    year: "2017"
  },
  {
    degree: "BTS Informatique et réseaux pour l'industrie et les services",
    institution: "Ecole Saint Jean-Baptiste de la Salle, Avignon",
    year: "2014"
  },
  {
    degree: "Bac Professionnel Systèmes Électroniques et Numériques",
    institution: "Lycée Saint Jean-Baptiste de la Salle, Avignon",
    year: "2012"
  }
];

// Langues
const languages = [
  { language: "Français", level: "Langue maternelle" },
  { language: "Anglais", level: "B2" },
];

/**
 * Génère le CV au format texte
 */
export function generateTextCV(): string {
  let content = `${personalInfo.name}
${personalInfo.title}
${personalInfo.address}
${personalInfo.phone}
${personalInfo.email}
LinkedIn: ${personalInfo.linkedin}

EXPÉRIENCE PROFESSIONNELLE
----------------------------
`;

  // Ajouter les expériences
  experienceData.forEach(job => {
    content += `\n${job.title.toUpperCase()} - ${job.company}\n`;
    content += `${job.period}\n`;
    
    // Ajouter la description
    job.description.forEach(desc => {
      content += `• ${desc}\n`;
    });
    content += '\n';
  });

  // Ajouter les compétences
  content += `COMPÉTENCES
----------------------------\n\n`;
  
  content += `Langages et frameworks:\n`;
  content += `• ${technicalSkills.languages.join(', ')}\n`;
  content += `• ${technicalSkills.frontend.join(', ')}\n`;
  content += `• ${technicalSkills.backend.join(', ')}\n\n`;
  
  content += `Outils et technologies:\n`;
  content += `• ${technicalSkills.tools.slice(0, 5).join(', ')}\n`;
  content += `• ${technicalSkills.databases.join(', ')}\n`;
  content += `• ${technicalSkills.mobile.join(', ')}\n`;
  
  // Ajouter la formation
  content += `\nFORMATION
----------------------------\n\n`;
  
  education.forEach(edu => {
    content += `${edu.degree}\n`;
    content += `${edu.institution}, ${edu.year}\n\n`;
  });
  
  // Ajouter les langues
  content += `LANGUES
----------------------------\n`;
  
  languages.forEach(lang => {
    content += `• ${lang.language}: ${lang.level}\n`;
  });
  
  return content;
}

/**
 * Génère le CV au format PDF
 */
export async function generatePDF(): Promise<Blob> {
  // Couleurs du thème Light du site
  const colors = {
    primary: '#1A1A1A',    // maxime-primary (texte principal, titres)
    secondary: '#555555',  // maxime-secondary (texte secondaire)
    tertiary: '#F0F0F0',   // maxime-tertiary (fond d'éléments)
    accent: '#4F46E5',     // couleur d'accent (indigo)
    background: '#FFFFFF', // fond blanc
    border: '#E5E5E5'      // couleur de bordure légère
  };

  // Create a new jsPDF instance - utiliser helvetica (même style que le site)
  const doc = new jsPDF();
  
  // Fonction helper pour ajouter un rectangle de fond
  const addBackgroundRect = (x: number, y: number, width: number, height: number, color: string) => {
    doc.setFillColor(color);
    doc.rect(x, y, width, height, 'F');
  };

  // Ajouter un grand rectangle de titre en haut - augmenter la hauteur de 45 à 60 pour englober toutes les coordonnées
  addBackgroundRect(0, 0, 210, 60, colors.tertiary);
  
  try {
    // Charger l'image depuis le dossier public (même que celle du Hero)
    const imgData = "/maxime.jpg"; // Chemin relatif de l'image
    
    // Ajouter l'image de profil (en haut à droite)
    doc.addImage(imgData, 'JPEG', 150, 5, 30, 38); // Largeur réduite pour éviter la déformation
  } catch (error) {
    console.error("Erreur lors du chargement de l'image :", error);
    // Continuer sans image si elle ne peut pas être chargée
  }
  
  // Nom et titre en plus grand en haut, style en-tête du site
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(colors.primary);
  doc.text(personalInfo.name, 20, 20);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(16);
  doc.text(personalInfo.title, 20, 30);
  
  // Coordonnées en plus petit
  doc.setFontSize(9);
  doc.setTextColor(colors.secondary);
  
  // Coordonnées placées sous le titre pour plus de clarté
  doc.text(personalInfo.phone, 20, 40);
  doc.text(personalInfo.email, 20, 45);
  doc.text(personalInfo.address, 20, 50);
  doc.text(`LinkedIn: ${personalInfo.linkedin}`, 20, 55);
  
  // Ajuster la position de départ après l'en-tête et les coordonnées pour tenir compte de la nouvelle hauteur du bandeau
  let yPos = 70; // Augmenté de 65 à 70 pour plus d'espace
  
  // Définir un seuil plus strict pour les sauts de page afin d'éviter les coupures de texte
  const PAGE_HEIGHT = 290;
  const SAFE_MARGIN = 40; // Marge de sécurité pour éviter la coupure de texte
  const NEW_PAGE_THRESHOLD = PAGE_HEIGHT - SAFE_MARGIN; // Seuil pour décider d'ajouter une nouvelle page
  
  // Fonction pour vérifier si une nouvelle page est nécessaire
  const checkForNewPage = (expectedContentHeight: number = 10): void => {
    if (yPos + expectedContentHeight > NEW_PAGE_THRESHOLD) {
      doc.addPage();
      yPos = 20;
    }
  };
  
  // Fonction helper pour les titres de section
  const addSectionTitle = (title: string, y: number): number => {
    // Vérifier si on a besoin d'une nouvelle page pour le titre de section et son contenu attendu
    checkForNewPage(15);
    
    // Fond de la section
    addBackgroundRect(0, y, 210, 10, colors.tertiary);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(colors.primary);
    doc.text(title, 20, y + 7);
    
    return y + 15; // retourne la position après le titre
  };

  // Titre Expérience
  yPos = addSectionTitle("EXPÉRIENCE PROFESSIONNELLE", yPos);
  
  // Expériences
  doc.setFontSize(12);
  
  experienceData.forEach(job => {
    // Vérifier si on a besoin d'une nouvelle page pour ce job
    // On estime qu'un job a besoin d'au moins 30 points + description
    checkForNewPage(30);
    
    // Titre en couleur primaire
    doc.setFont("helvetica", "bold");
    doc.setTextColor(colors.primary);
    doc.text(`${job.title}`, 20, yPos);
    yPos += 6;
    
    // Entreprise en couleur accent
    doc.setFont("helvetica", "normal");
    doc.setTextColor(colors.accent);
    doc.text(`${job.company}`, 20, yPos);
    yPos += 6;
    
    // Période en italique et couleur secondaire
    doc.setFont("helvetica", "italic");
    doc.setTextColor(colors.secondary);
    doc.text(job.period, 20, yPos);
    yPos += 8;
    
    doc.setFont("helvetica", "normal");
    doc.setTextColor(colors.secondary);
    
    // Inclure toutes les descriptions sans limitation
    job.description.forEach(desc => {
      // Estimer la hauteur du texte à venir
      const lines = doc.splitTextToSize(`• ${desc}`, 170);
      const estimatedHeight = lines.length * 6 + 2; // +2 pour marge
      
      // Vérifier si on a besoin d'une nouvelle page pour cette description
      checkForNewPage(estimatedHeight);
      
      // Afficher le texte
      doc.text(lines, 20, yPos);
      yPos += estimatedHeight;
    });
    
    yPos += 8; // Espace après chaque job
  });
  
  // Compétences
  yPos = addSectionTitle("COMPÉTENCES TECHNIQUES", yPos);
  
  // Fonction helper pour ajouter une catégorie de compétences
  const addSkillCategory = (title: string, skills: string[], y: number): number => {
    // Estimer la hauteur du contenu
    const textLines = doc.splitTextToSize(`• ${skills.join(', ')}`, 170);
    const estimatedHeight = textLines.length * 5 + 12; // Hauteur du titre + texte + marge
    
    // Vérifier si on a besoin d'une nouvelle page
    checkForNewPage(estimatedHeight);
    
    // Afficher le titre et les compétences
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(colors.primary);
    doc.text(title, 20, y);
    y += 7;
    
    doc.setFont("helvetica", "normal");
    doc.setTextColor(colors.secondary);
    doc.setFontSize(10);
    
    doc.text(textLines, 20, y);
    return y + textLines.length * 5 + 5;
  };
  
  // Ajouter toutes les catégories de compétences sans limitation
  yPos = addSkillCategory("Langages de programmation:", technicalSkills.languages, yPos);
  yPos = addSkillCategory("Technologies Frontend:", technicalSkills.frontend, yPos);
  yPos = addSkillCategory("Technologies Backend:", technicalSkills.backend, yPos);
  yPos = addSkillCategory("Développement Mobile:", technicalSkills.mobile, yPos);
  yPos = addSkillCategory("Bases de données:", technicalSkills.databases, yPos);
  yPos = addSkillCategory("Outils et environnements:", technicalSkills.tools, yPos);
  yPos = addSkillCategory("Tests et qualité:", technicalSkills.testing, yPos);
  
  // Formation
  // Calculer la hauteur totale nécessaire pour la section Formation
  const formationHeight = 15; // Hauteur du titre de section
  const totalEducationHeight = education.length * 20; // Estimation de la hauteur pour chaque élément d'éducation
  const totalFormationHeight = formationHeight + totalEducationHeight;
  
  // Si on est déjà bas dans la page ou s'il n'y a pas assez de place pour le titre ET au moins le premier élément
  if (yPos > 200 || (yPos + formationHeight + 20) > NEW_PAGE_THRESHOLD) {
    doc.addPage();
    yPos = 20;
  }
  
  yPos = addSectionTitle("FORMATION", yPos);
  
  doc.setFontSize(12);
  education.forEach(edu => {
    // Vérifier si on a besoin d'une nouvelle page
    checkForNewPage(20);
    
    doc.setFont("helvetica", "bold");
    doc.setTextColor(colors.primary);
    doc.text(edu.degree, 20, yPos);
    yPos += 6;
    
    doc.setFont("helvetica", "normal");
    doc.setTextColor(colors.secondary);
    doc.text(`${edu.institution}, ${edu.year}`, 20, yPos);
    yPos += 10;
  });
  
  // Langues - s'assurer que la section Langues commence sur la même page que Formation si possible
  // Calculer d'abord la hauteur totale nécessaire pour la section Langues
  const languesHeight = 15 + (languages.length * 8); // titre + tous les éléments
  
  // Si la position actuelle + la hauteur des langues dépasse le seuil, nouvelle page
  if (yPos + languesHeight > NEW_PAGE_THRESHOLD) {
    doc.addPage();
    yPos = 20;
  }
  
  yPos = addSectionTitle("LANGUES", yPos);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(colors.secondary);
  
  languages.forEach(lang => {
    doc.text(`• ${lang.language}: ${lang.level}`, 20, yPos);
    yPos += 6;
  });
  
  // Ajouter pied de page sur chaque page
  const addFooter = (pageNum: number): void => {
    // Ajouter une fine ligne de pied de page
    doc.setDrawColor(colors.border);
    doc.setLineWidth(0.5);
    doc.line(20, doc.internal.pageSize.height - 20, 190, doc.internal.pageSize.height - 20);
    
    // Texte de pied de page
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(colors.secondary);
    doc.text("CV généré depuis portfolio.maximedesogus.ch", doc.internal.pageSize.width/2, doc.internal.pageSize.height - 15, { align: 'center' });
    doc.text(`${new Date().toLocaleDateString('fr-CH')} | Page ${pageNum}/${doc.getNumberOfPages()}`, doc.internal.pageSize.width/2, doc.internal.pageSize.height - 10, { align: 'center' });
  };
  
  // Ajouter le pied de page à chaque page
  for (let i = 1; i <= doc.getNumberOfPages(); i++) {
    doc.setPage(i);
    addFooter(i);
  }
  
  // Retourner le PDF comme un Blob
  return doc.output('blob');
}

/**
 * Génère le CV au format DOCX
 */
export async function generateDOCX(): Promise<Blob> {
  // Couleurs du thème Light du site
  const colors = {
    primary: '#1A1A1A',    // maxime-primary (texte principal, titres)
    secondary: '#555555',  // maxime-secondary (texte secondaire)
    tertiary: '#F0F0F0',   // maxime-tertiary (fond d'éléments)
    accent: '#4F46E5',     // couleur d'accent (indigo)
    background: '#FFFFFF', // fond blanc
    border: '#E5E5E5'      // couleur de bordure légère
  };

  // Création du document avec Arial comme police principale (disponible sur Mac et Windows)
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: "Arial",
          }
        }
      }
    },
    sections: [{
      properties: {},
      children: [
        // Header avec image et information personnelle
        new Paragraph({
          children: [
            new TextRun({
              text: personalInfo.name,
              bold: true,
              size: 36,
              color: colors.primary,
              font: "Arial",
            }),
          ],
          spacing: {
            after: 120,
          },
          shading: {
            type: 'clear',
            fill: colors.tertiary,
          },
          border: {
            bottom: {
              color: colors.border,
              size: 1,
              style: BorderStyle.SINGLE,
            },
          },
          indent: {
            left: 360, // ~0.5 inch
          },
        }),
        
        // Tenter d'ajouter l'image (l'API docx ne supporte pas directement les images depuis les chemins relatifs)
        // Nous allons donc utiliser une référence à l'image
        new Paragraph({
          children: [
            new TextRun({
              text: "(Image de profil disponible sur le site portfolio.maximedesogus.ch)",
              size: 20,
              italics: true,
              color: colors.secondary,
              font: "Arial",
            }),
          ],
          alignment: 'right',
          spacing: {
            after: 120,
          },
        }),
        
        new Paragraph({
          children: [
            new TextRun({
              text: personalInfo.title,
              size: 28,
              color: colors.primary,
              font: "Arial",
            }),
          ],
          indent: {
            left: 360, // ~0.5 inch
          },
        }),
        
        // Informations de contact avec un style plus moderne
        new Paragraph({
          children: [
            new TextRun({
              text: personalInfo.phone,
              size: 20,
              color: colors.secondary,
              font: "Arial",
            }),
            new TextRun({
              text: " | ",
              size: 20,
              color: colors.secondary,
              font: "Arial",
            }),
            new TextRun({
              text: personalInfo.email,
              size: 20,
              color: colors.secondary,
              font: "Arial",
            }),
          ],
          indent: {
            left: 360, // ~0.5 inch
          },
        }),
        
        new Paragraph({
          children: [
            new TextRun({
              text: personalInfo.address,
              size: 20,
              color: colors.secondary,
              font: "Arial",
            }),
          ],
          indent: {
            left: 360, // ~0.5 inch
          },
          spacing: {
            after: 240,
          },
        }),
        
        // Section Expérience
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "EXPÉRIENCE PROFESSIONNELLE",
              bold: true,
              size: 28,
              color: colors.primary,
              font: "Arial",
            }),
          ],
          border: {
            bottom: {
              color: colors.accent,
              space: 1,
              size: 8,
              style: BorderStyle.SINGLE,
            },
          },
          spacing: {
            after: 200,
          },
          shading: {
            type: 'clear',
            fill: colors.tertiary,
          },
        }),
        
        // Expériences professionnelles
        ...experienceData.flatMap(job => [
          new Paragraph({
            children: [
              new TextRun({
                text: job.title,
                bold: true,
                size: 26,
                color: colors.primary,
                font: "Arial",
              }),
            ],
            spacing: {
              after: 80,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: job.company,
                size: 24,
                color: colors.accent,
                font: "Arial",
              }),
            ],
            spacing: {
              after: 80,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: job.period,
                italics: true,
                size: 22,
                color: colors.secondary,
                font: "Arial",
              }),
            ],
            spacing: {
              after: 120,
            },
          }),
          
          // Ajout de toutes les descriptions sans limitation
          ...job.description.map(desc => 
            new Paragraph({
              children: [
                new TextRun({
                  text: `• ${desc}`,
                  size: 22,
                  color: colors.secondary,
                  font: "Arial",
                }),
              ],
              spacing: {
                after: 120,
              },
            })
          ),
          
          new Paragraph({ text: "" }),
        ]),
        
        // Section Compétences
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "COMPÉTENCES TECHNIQUES",
              bold: true,
              size: 28,
              color: colors.primary,
              font: "Arial",
            }),
          ],
          border: {
            bottom: {
              color: colors.accent,
              space: 1,
              size: 8,
              style: BorderStyle.SINGLE,
            },
          },
          spacing: {
            after: 200,
          },
          shading: {
            type: 'clear',
            fill: colors.tertiary,
          },
        }),
        
        // Helper function pour créer une section de compétences
        ...[
          { title: "Langages de programmation:", skills: technicalSkills.languages },
          { title: "Technologies Frontend:", skills: technicalSkills.frontend },
          { title: "Technologies Backend:", skills: technicalSkills.backend },
          { title: "Développement Mobile:", skills: technicalSkills.mobile },
          { title: "Bases de données:", skills: technicalSkills.databases },
          { title: "Outils et environnements:", skills: technicalSkills.tools },
          { title: "Tests et qualité:", skills: technicalSkills.testing }
        ].flatMap(category => [
          new Paragraph({
            children: [
              new TextRun({
                text: category.title,
                bold: true,
                size: 24,
                color: colors.primary,
                font: "Arial",
              }),
            ],
            spacing: {
              after: 120,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `• ${category.skills.join(', ')}`,
                size: 22,
                color: colors.secondary,
                font: "Arial",
              }),
            ],
            spacing: {
              after: 160,
            },
          }),
        ]),
        
        // Section Formation
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "FORMATION",
              bold: true,
              size: 28,
              color: colors.primary,
              font: "Arial",
            }),
          ],
          border: {
            bottom: {
              color: colors.accent,
              space: 1,
              size: 8,
              style: BorderStyle.SINGLE,
            },
          },
          spacing: {
            after: 200,
          },
          shading: {
            type: 'clear',
            fill: colors.tertiary,
          },
        }),
        
        // Ajout des formations
        ...education.flatMap(edu => [
          new Paragraph({
            children: [
              new TextRun({
                text: edu.degree,
                bold: true,
                size: 24,
                color: colors.primary,
                font: "Arial",
              }),
            ],
            spacing: {
              after: 80,
            },
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: `${edu.institution}, ${edu.year}`,
                size: 22,
                color: colors.secondary,
                font: "Arial",
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
        ]),
        
        // Section Langues
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "LANGUES",
              bold: true,
              size: 28,
              color: colors.primary,
              font: "Arial",
            }),
          ],
          border: {
            bottom: {
              color: colors.accent,
              space: 1,
              size: 8,
              style: BorderStyle.SINGLE,
            },
          },
          spacing: {
            after: 200,
          },
          shading: {
            type: 'clear',
            fill: colors.tertiary,
          },
        }),
        
        // Ajout des langues
        ...languages.map(lang => 
          new Paragraph({
            children: [
              new TextRun({
                text: `• ${lang.language}: ${lang.level}`,
                size: 22,
                color: colors.secondary,
                font: "Arial",
              }),
            ],
            spacing: {
              after: 120,
            },
          })
        ),
        
        // Pied de page
        new Paragraph({
          children: [
            new TextRun({
              text: "CV généré depuis portfolio.maximedesogus.ch",
              size: 16,
              italics: true,
              color: colors.secondary,
              font: "Arial",
            }),
          ],
          spacing: {
            before: 200,
          },
          alignment: 'center',
        }),
        
        new Paragraph({
          children: [
            new TextRun({
              text: new Date().toLocaleDateString('fr-CH'),
              size: 16,
              italics: true,
              color: colors.secondary,
              font: "Arial",
            }),
          ],
          alignment: 'center',
        }),
      ],
    }],
  });
  
  // Générer le fichier DOCX
  return await Packer.toBlob(doc);
}

/**
 * Fonction principale pour générer et télécharger le CV dans le format spécifié
 */
export async function generateAndDownloadCV(format: 'pdf' | 'docx' | 'txt'): Promise<void> {
  try {
    switch (format) {
      case 'txt': {
        const content = generateTextCV();
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, `maxime-desogus-cv.txt`);
        break;
      }
      case 'pdf': {
        const blob = await generatePDF();
        saveAs(blob, `maxime-desogus-cv.pdf`);
        break;
      }
      case 'docx': {
        const blob = await generateDOCX();
        saveAs(blob, `maxime-desogus-cv.docx`);
        break;
      }
      default:
        throw new Error(`Format non pris en charge: ${format}`);
    }
  } catch (error) {
    console.error('Erreur lors de la génération du CV:', error);
    throw error;
  }
} 