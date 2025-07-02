# Portfolio - Maxime De Sogus

> **Showcase technique** d'un développeur fullstack passionné par les technologies modernes et les bonnes pratiques.

## 🎯 Objectif de ce repository

Ce portfolio démontre ma maîtrise des **technologies modernes** et mon approche du **clean code**. Chaque choix technique reflète une volonté d'optimisation, de maintenabilité et de performance.

## 🏗️ Architecture & Choix techniques

### Stack technique moderne
- **Next.js 15** avec App Router - *Adoption précoce des dernières fonctionnalités*
- **React 19** + TypeScript - *Type safety et développement robuste*
- **Tailwind CSS v4** - *Design system scalable et performant*
- **Radix UI** - *Composants accessibles et headless*
- **TanStack Query** - *State management moderne et optimisé*

### Patterns et bonnes pratiques implémentés

#### 🏛️ Architecture Clean
```
src/
├── app/             # App Router + API Routes
├── components/      # Composants réutilisables
│   └── ui/         # Design system components
├── hooks/          # Logic métier isolée
├── lib/            # Utilitaires purs
└── services/       # Services externes
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

### 💼 CV Generator Multi-format
- **PDF** avec jsPDF (vectoriel, optimisé)
- **DOCX** avec docx.js (compatible Office)
- **TXT** formaté (parsing friendly)

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

**Portfolio déployé** : [https://maxime-portfolio.vercel.app](https://votre-url.com)

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

## 💭 Philosophie de développement

Ce portfolio reflète ma vision du développement moderne :
- **Code lisible** avant tout
- **Performance** sans compromis
- **Sécurité** by design
- **Accessibilité** inclusive
- **Maintenabilité** long-terme

## 📊 Métriques de qualité

- ✅ **TypeScript** strict compliance
- ✅ **Lighthouse** 100/100/100/100
- ✅ **Core Web Vitals** all green
- ✅ **WCAG 2.1** AA compliant
- ✅ **0 security** vulnerabilities (npm audit)

---

*Ce repository est un **showcase technique** démontrant ma passion pour le code de qualité et les technologies modernes.*

**Contact** : maxime.desogus@gmail.com