import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import ResourcePreload from "@/components/ResourcePreload";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  viewportFit: "cover",
};

const VERCEL_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(VERCEL_URL),
  title: {
    default: "Maxime De Sogus | Développeur Angular & Fullstack en Suisse",
    template: `%s | Maxime De Sogus`,
  },
  description:
    "Développeur Angular et Fullstack basé en Suisse (Valais). Je conçois des applications web performantes et modernes. Disponible pour des mandats à Lausanne, en Vaud et dans toute la Suisse romande.",
  keywords: [
    "Maxime De Sogus",
    "Développeur Angular",
    "Développeur Frontend",
    "Développeur Fullstack",
    "Angular",
    "TypeScript",
    "Next.js",
    "React",
    "Développeur Valais",
    "Développeur Vaud",
    "Développeur Lausanne",
    "Développeur Suisse",
    "Développeur web Suisse",
    "Freelance",
  ],
  authors: [{ name: "Maxime De Sogus", url: VERCEL_URL }],
  creator: "Maxime De Sogus",
  publisher: "Maxime De Sogus",

  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Maxime De Sogus - Portfolio",
  },

  // Icons pour PWA et applications mobiles
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  // Configuration technique globale
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },

  // OpenGraph de base - sera override par page.tsx pour la page d'accueil
  openGraph: {
    type: "website",
    locale: "fr_CH",
    siteName: "Maxime De Sogus - Portfolio",
    images: [
      {
        url: "/images/optimized/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Maxime De Sogus - Développeur Angular & Fullstack en Suisse",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maxime De Sogus",
    url: VERCEL_URL,
    image: `${VERCEL_URL}/images/optimized/maxime.webp`,
    jobTitle: "Développeur Angular & Fullstack",
    description:
      "Développeur Angular et Fullstack basé en Suisse (Valais), spécialisé dans la création d'applications web modernes et performantes. Disponible pour des mandats à Lausanne, Vaud et dans toute la Suisse romande.",
    knowsAbout: [
      "Angular",
      "TypeScript",
      "Next.js",
      "React",
      "Développement Web",
      "Développement Frontend",
      "Développement Fullstack",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valais",
      addressCountry: "CH",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de développement web",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Développement Angular",
            description: "Création d'applications web avec Angular",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Développement Fullstack",
            description: "Applications web complètes frontend et backend",
          },
        },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "professional",
      availableLanguage: ["French", "English"],
    },
    sameAs: [
      "https://www.linkedin.com/in/maxime-de-sogus",
      "https://github.com/neogenz",
    ],
  };

  return (
    <html lang="fr" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <ResourcePreload />
        {/* DNS Prefetch pour les domaines tiers */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="overflow-x-hidden">
        <Providers>{children}</Providers>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
