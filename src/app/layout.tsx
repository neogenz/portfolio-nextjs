import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import ResourcePreload from "@/components/ResourcePreload";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: "Portfolio - Maxime De Sogus",
  description: "Portfolio de Maxime De Sogus - Développeur Fullstack, expert Angular et développeur frontend avec plus de 8 ans d'expérience.",
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Portfolio - Maxime De Sogus",
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    url: 'https://maximedesogus.ch',
    title: 'Portfolio - Maxime De Sogus',
    description: 'Portfolio de Maxime De Sogus - Développeur Fullstack, expert Angular et développeur frontend avec plus de 8 ans d\'expérience.',
    siteName: 'Portfolio de Maxime De Sogus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Maxime De Sogus',
    description: 'Portfolio de Maxime De Sogus - Développeur Fullstack, expert Angular et développeur frontend',
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <ResourcePreload />
        {/* DNS Prefetch pour les domaines tiers */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <GoogleAnalytics />
      </head>
      <body className="overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
