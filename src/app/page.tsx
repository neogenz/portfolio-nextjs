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
  title: "Expert Angular & Développeur Fullstack Suisse",
  description:
    "Développeur Angular expert basé en Suisse (Valais). ✓ +8 ans d'expérience ✓ Disponible Lausanne, Vaud ✓ Applications web performantes ✓ TypeScript, Next.js, React. Contactez-moi pour vos projets.",
  keywords: [
    "Expert Angular Suisse",
    "Développeur Angular Valais",
    "Développeur Fullstack Lausanne",
    "Développeur Angular Vaud",
    "TypeScript expert Suisse",
    "Next.js développeur Valais",
    "React développeur Lausanne",
    "Freelance Angular Suisse romande",
    "Applications web Suisse",
    "+10 ans expérience Angular",
  ],
  openGraph: {
    url: "/",
    title: "Maxime De Sogus | Expert Angular & Développeur Fullstack Suisse",
    description:
      "Développeur Angular expert basé en Suisse (Valais). +8 ans d'expérience. Disponible Lausanne, Vaud. Applications web performantes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxime De Sogus | Expert Angular & Développeur Fullstack Suisse",
    description:
      "Développeur Angular expert basé en Suisse (Valais). +8 ans d'expérience. Disponible Lausanne, Vaud.",
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
