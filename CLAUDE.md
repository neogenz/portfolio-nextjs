# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Production build**: `npm run build` 
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

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
- **Rate Limiting**: `src/lib/rate-limiter.ts` for API protection
- **Blog API**: `src/app/api/blog/[slug]/` for blog post data
- **Contact API**: `src/app/api/contact/route.ts` with nodemailer integration

#### Styling System
- **Custom Tailwind colors**: `maxime-primary`, `maxime-secondary`, `maxime-tertiary` defined in config
- **Dark mode**: Implemented with next-themes using class-based switching
- **Responsive breakpoints**: Custom `xs` (375px) and `xr` (414px) breakpoints

## Development Rules

### Next.js 15 Practices
- Use Next.js 15 types and practices
- Leverage App Router patterns for routing and layouts
- Use server components by default, client components when needed

### Tailwind v4 Guidelines
- Use Tailwind v4 directives and syntax
- For gradients, use theme-defined color names rather than CSS variables directly
- Define custom colors in theme configuration when needed

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
- Image optimization with Next.js Image component
- Resource preloading in layout
- DNS prefetching for external domains
- Proper hydration handling in client components