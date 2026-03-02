# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Production build**: `npm run build` (includes BUILD_DATE environment variable injection)
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`
- **Type checking**: TypeScript checking is handled by Next.js build process
- **Testing**: No test framework currently configured

## Technology Stack & Architecture

This is a **Next.js 15** portfolio site using the **App Router** architecture with the following key technologies:

### Core Framework
- **Next.js 15** with App Router (src/app directory structure)
- **React 19** with TypeScript
- **Tailwind CSS v4** for styling

### Key Libraries
- **Radix UI** components for accessible UI primitives
- **TanStack Query** for state management and data fetching
- **next-themes** for theme switching
- **gray-matter + remark** for markdown blog post processing
- **jsPDF + docx** for CV generation functionality
- **nodemailer** for contact form email handling
- **zod** for schema validation
- **limiter** for rate limiting functionality

### Architecture Overview

#### Content Management
- **Blog posts**: Stored as markdown files in `src/content/blog/`
- Blog processing handled by `src/lib/blog.ts` using gray-matter and remark
- Dynamic blog routes: `/blog/[slug]` with static generation

#### Component Structure
- **UI Components**: `src/components/ui/` contains Radix-based reusable components
- **Page Components**: `src/components/` contains larger page-specific components
- **Providers**: Global providers in `src/components/providers.tsx` handle TanStack Query, themes, and toast notifications

#### Services & Utilities
- **CV Generation**: `src/services/CVGenerator.ts` handles PDF/DOCX/TXT export
- **Rate Limiting**: `src/lib/rate-limiter.ts` for API protection using Map-based storage
- **Blog API**: `src/app/api/blog/[slug]/` for blog post data
- **Contact API**: `src/app/api/contact/route.ts` with nodemailer integration and rate limiting
- **SEO Configuration**: `src/lib/seo-config.ts` centralizes SEO metadata and sitemap settings
- **Utilities**: `src/lib/utils.ts` contains cn() for className merging and other helpers

#### Styling System
- **Custom Tailwind colors**: `maxime-primary`, `maxime-secondary`, `maxime-tertiary` defined in config
- **Dark mode**: Implemented with next-themes using class-based switching
- **Responsive breakpoints**: Custom `xs` (375px) and `xr` (414px) breakpoints
- **Animations**: Uses `tailwindcss-animate` plugin for smooth transitions

#### Environment & Configuration
- **Environment Variables**: Stored in `.env.local` (gitignored)
- **Next.js Config**: `next.config.ts` includes image optimization, cache headers, CSP policies
- **ESLint**: Configured for Next.js 15 with build-time linting disabled
- **TypeScript**: Strict mode enabled with Next.js integration

## Development Rules

### Next.js 15 Practices
- Use Next.js 15 types and practices
- Leverage App Router patterns for routing and layouts
- Use server components by default, client components when needed

### Tailwind v4 Guidelines
- Use Tailwind v4 directives and syntax
- For gradients, use theme-defined color names rather than CSS variables directly
- Define custom colors in theme configuration when needed
- Custom breakpoints: `xs` (375px) and `xr` (414px) available for mobile-first design
- Use `cn()` utility from `src/lib/utils.ts` for conditional className merging

### Code Conventions
- Components use TypeScript with proper typing
- Client components marked with 'use client' directive
- Consistent error handling with try-catch blocks
- French language used for user-facing content and metadata

### Content & Blog
- Blog posts require frontmatter with: title, excerpt, date, categories
- Images stored in `public/images/` with optimized WebP versions
- Reading time calculated automatically from content

### Performance Optimizations
- Image optimization with Next.js Image component (AVIF/WebP formats)
- Resource preloading in layout via `ResourcePreload` component
- DNS prefetching for external domains (fonts.googleapis.com, images.unsplash.com)
- Proper hydration handling in client components
- Cache headers configured in `next.config.ts` (1h for pages, 24h for images, 1yr for static assets)
- Bundle optimization with Turbopack in development

### API & Security
- **Rate Limiting**: Implemented in contact API using custom Map-based limiter
- **Input Validation**: Zod schemas for form validation
- **Email Integration**: Nodemailer configured for contact form submissions
- **CSP Headers**: Content Security Policy configured for SVG safety
- **Environment Security**: Sensitive data in `.env.local` (gitignored)