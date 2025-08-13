# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application for "Servicios Shaddai" - a pickup truck rental service landing page. The project uses modern web technologies including:

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui with Radix UI primitives
- **Icons**: Lucide React

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

### Directory Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/components/ui/` - Reusable UI components (Shadcn/ui)
- `src/lib/` - Utility functions and shared logic
- `public/` - Static assets

### Key Components
- **Main Page**: `src/app/page.tsx` - Complete pickup rental landing page
- **UI Components**: Located in `src/components/ui/` - includes Button, Card, Input, Label, Select, Textarea, Badge
- **Utils**: `src/lib/utils.ts` - Contains `cn()` utility for className merging

### Styling System
- Uses Tailwind CSS v4 with CSS variables
- Components follow Shadcn/ui patterns with class-variance-authority for variants
- Base color scheme: neutral
- Custom configuration in `components.json`

### Import Aliases
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`

## Content & Features

The landing page includes:
- Hero section with pickup truck imagery
- Fleet showcase (Ford F-150, Chevrolet Silverado, RAM 1500, Toyota Hilux, etc.)
- Target audience sections (consumers, institutions, businesses, NGOs)
- WhatsApp integration for reservations
- Customer testimonials
- Contact information and reservation form

## Technology Stack Details

- **Next.js 15**: Uses App Router, React 19
- **Shadcn/ui**: "new-york" style with RSC support
- **Tailwind CSS**: v4 with postcss integration
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js configuration