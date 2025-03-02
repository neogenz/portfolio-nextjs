import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Portfolio - Maxime De Sogus",
  description: "Portfolio de Maxime De Sogus - Développeur Fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-maxime-white text-maxime-primary dark:bg-maxime-dark-bg dark:text-maxime-white`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
