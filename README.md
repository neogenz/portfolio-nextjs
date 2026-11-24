# Portfolio - Maxime De Sogus

> **Expérimentation technique** - Portfolio développé en 24h avec Bolt.new + Cursor pour tester les outils d'IA modernes.

## 🎯 Objectif de ce repository

Ce portfolio est le résultat d'une **expérimentation intensive** : développer un site complet en 24 heures en utilisant **Bolt.new** puis **Cursor**. L'objectif était de tester les capacités des outils d'IA pour le développement et voir jusqu'où on peut aller rapidement avec les **technologies modernes**.

## 🏗️ Architecture & Choix techniques

### Stack technique moderne
- **Next.js 15** avec App Router - *Adoption précoce des dernières fonctionnalités*
- **React 19** + TypeScript - *Type safety et développement robuste*
- **Tailwind CSS v4** - *Design system scalable et performant*
- **Radix UI** - *Composants accessibles et headless*
- **TanStack Query** - *State management moderne et optimisé*

### Résultats de l'expérimentation 24h

#### 🏛️ Architecture générée
```
src/
├── app/             # App Router + API Routes
├── components/      # Composants générés
│   └── ui/         # Design system Radix
├── hooks/          # Hooks personnalisés
├── lib/            # Utilitaires
└── services/       # Services intégrés
```

#### 🔒 Sécurité & Performance
- **Rate limiting** personnalisé avec Map-based storage
- **Validation stricte** avec Zod schemas
- **Images optimisées** avec Next.js Image + WebP
- **Variables d'environnement** sécurisées (.env.local gitignored)
- **Content Security Policy** headers

#### 🎨 UX/UI Excellence
- **Design system** cohérent avec tokens CSS
- **Dark/Light mode** seamless
- **Responsive design** mobile-first
- **Animations performantes** CSS-based
- **Accessibilité** WCAG compliant

## 💡 Innovations techniques

### 📝 Blog System Custom
```typescript
// Système de blog file-based avec processing Markdown
export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await Promise.all(
    postFiles.map(async (filename) => {
      const { data, content } = matter(source);
      return {
        ...data,
        content: await remark().use(remarkHtml).process(content),
        readingTime: calculateReadingTime(content)
      };
    })
  );
}
```

### 💼 CV PDF
- Source HTML/CSS dans `cv/cv.html`, police Inter embarquée
- `npm run cv:pdf` génère `public/CV_Maxime_De_Sogus_2026.pdf` avec Chrome headless (A4, 2 pages, texte sélectionnable)

### 🛡️ Contact Form Sécurisé
```typescript
// Rate limiting custom avec cleanup automatique
export class RateLimiter {
  private attempts = new Map<string, number[]>();
  
  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];
    
    // Cleanup old attempts
    const validAttempts = userAttempts.filter(
      time => now - time < this.windowMs
    );
    
    return validAttempts.length < this.maxRequests;
  }
}
```

## 🔍 Détails techniques remarquables

### Performance Optimizations
- **Bundle splitting** automatique
- **Resource preloading** stratégique
- **Image optimization** avec formats modernes
- **CSS-in-JS** tree-shaking

### Developer Experience
- **TypeScript strict mode** activé
- **ESLint** configuration Next.js 15
- **Git hooks** pour la qualité du code
- **Hot reload** avec Turbopack

### SEO & Analytics
- **Metadata dynamique** par page
- **Sitemap.xml** généré automatiquement
- **Open Graph** tags optimisés
- **Vercel Analytics** intégré

## 🚀 Live Demo

**Portfolio déployé** : https://www.maximedesogus.ch/

*Testez directement les fonctionnalités :*
- Formulaire de contact avec rate limiting
- Export CV multi-format
- Navigation blog avec recherche
- Performance Lighthouse 100/100

## 🧰 Stack complète

**Frontend**
- React 19, Next.js 15, TypeScript
- Tailwind CSS v4, Radix UI, Lucide Icons

**Backend/Services**
- Next.js API Routes, Nodemailer
- Rate limiting custom, Zod validation

**Tooling**
- ESLint, Vercel Analytics
- Git hooks, Turbopack

**Déploiement**
- Vercel (Edge Functions)
- Environment variables sécurisées

## 🤖 Retour d'expérience IA + Dev

**Bolt.new** (6h) : Prototype rapide, structure de base
**Cursor** (18h) : Raffinement, features avancées, debugging

**Lessons learned :**
- L'IA excelle sur les **patterns connus**
- Gain de vitesse **x10** sur le boilerplate
- Nécessite supervision pour la **cohérence**
- Parfait pour le **prototypage rapide**
- Limite sur la **créativité pure**

## 📊 Métriques de qualité

- ✅ **TypeScript** strict compliance
- ✅ **Lighthouse** 100/100/100/100
- ✅ **Core Web Vitals** all green
- ✅ **WCAG 2.1** AA compliant
- ✅ **0 security** vulnerabilities (npm audit)

---

*Ce repository documente une **expérimentation IA-assisted development** - de l'idée au déploiement en 24h avec les outils modernes.*

**Contact** : maxime.desogus@gmail.com
