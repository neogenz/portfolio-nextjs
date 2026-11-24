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
  title: "Maxime De Sogus | Senior Fullstack Engineer & Tech Lead · Angular, Valais",
  description:
    "Maxime De Sogus, Senior Fullstack Engineer & Tech Lead basé en Valais, Suisse. Plus de 10 ans d'expérience : Angular, TypeScript, NestJS, .NET, et un workflow de développement fondé sur l'IA agentique.",
  keywords: [
    "Maxime De Sogus",
    "Développeur Angular Valais",
    "Développeur Angular Suisse",
    "Tech Lead Angular Suisse romande",
    "Développeur TypeScript Suisse",
    "Développeur JavaScript Suisse",
    "Développeur Ionic Suisse",
    "Portfolio développeur Suisse",
    "Angular developer Switzerland",
    "+10 ans expérience Angular",
  ],
  openGraph: {
    url: "/",
    title: "Maxime De Sogus | Senior Fullstack Engineer & Tech Lead · Angular, Valais",
    description:
      "Maxime De Sogus, Senior Fullstack Engineer & Tech Lead basé en Valais, Suisse. Plus de 10 ans d'expérience : Angular, TypeScript, NestJS, .NET, et un workflow de développement fondé sur l'IA agentique.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxime De Sogus | Senior Fullstack Engineer & Tech Lead · Angular, Valais",
    description:
      "Maxime De Sogus, Senior Fullstack Engineer & Tech Lead basé en Valais, Suisse. Plus de 10 ans d'expérience : Angular, TypeScript, NestJS, .NET, et un workflow de développement fondé sur l'IA agentique.",
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
