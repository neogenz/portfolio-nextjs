import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageLoadHandler from "@/components/PageLoadHandler";

export const metadata: Metadata = {
  title: "Maxime De Sogus | Développeur Angular Expert Valais Suisse",
  description:
    "Maxime De Sogus - Développeur Angular Expert basé en Valais, Suisse. +10 ans d'expérience Angular, TypeScript, JavaScript, Ionic. Portfolio et compétences en développement web moderne. Applications performantes.",
  keywords: [
    "Maxime De Sogus",
    "Développeur Angular Valais",
    "Développeur Angular Suisse",
    "Expert Angular Suisse romande",
    "Développeur TypeScript Suisse",
    "Développeur JavaScript Suisse",
    "Développeur Ionic Suisse",
    "Portfolio développeur Suisse",
    "Angular developer Switzerland",
    "+10 ans expérience Angular",
  ],
  openGraph: {
    url: "/",
    title: "Maxime De Sogus | Développeur Angular Expert Valais Suisse",
    description:
      "Maxime De Sogus - Développeur Angular Expert basé en Valais, Suisse. +10 ans d'expérience. Portfolio et compétences en développement web moderne.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxime De Sogus | Développeur Angular Expert Valais Suisse",
    description:
      "Maxime De Sogus - Développeur Angular Expert basé en Valais, Suisse. +10 ans d'expérience. Portfolio et compétences techniques.",
    images: ["/images/optimized/og-image.webp"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative">
        <PageLoadHandler />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
