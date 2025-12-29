# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro, featuring internationalization (i18n) support for English and Spanish. The site showcases professional experience and is designed with a modern, responsive layout using Tailwind CSS.

## Commands

All commands are run from the root of the project:

```bash
npm install              # Install dependencies
npm run dev             # Start dev server at localhost:4321
npm run build           # Type-check with astro check, then build to ./dist/
npm run preview         # Preview production build locally
npm run astro           # Run Astro CLI commands
```

## Architecture

### Tech Stack
- **Framework**: Astro 4.x (static site generator with component-based architecture)
- **Styling**: Tailwind CSS with custom gradient backgrounds
- **Internationalization**: astro-i18next (default: English, supported: English/Spanish)
- **Typography**: Onest Variable font from Fontsource
- **TypeScript**: Strict mode enabled via astro/tsconfigs/strict

### Internationalization (i18n)

The site uses `astro-i18next` for multi-language support:

- **Configuration**: [astro-i18next.config.mjs](astro-i18next.config.mjs) - defines locales (en, es)
- **Translation files**: [public/locales/{locale}/translation.json](public/locales/) - JSON files containing all translatable strings
- **Usage in components**: Import `t` from `i18next` and use `t("key.path")` to access translations
- **Language switching**: Pages for each locale exist in [src/pages/](src/pages/) and [src/pages/es/](src/pages/es/)
- **Language selector**: Header component includes `<LanguageSelector>` from astro-i18next

When adding new text content:
1. Add translation keys to both [public/locales/en/translation.json](public/locales/en/translation.json) and [public/locales/es/translation.json](public/locales/es/translation.json)
2. Use `t("namespace.key")` in components
3. Set language context with `changeLanguage("locale")` in page frontmatter

### Project Structure

```
src/
├── components/       # Reusable Astro components
│   ├── Badge.astro
│   ├── Experience.astro      # Lists all experience items
│   ├── ExperienceItem.astro  # Individual experience entry
│   ├── Footer.astro
│   ├── Header.astro          # Navigation with language selector
│   ├── Projects.astro
│   ├── SectionContainer.astro
│   └── SocialList.astro
├── icons/           # SVG icon components
├── layouts/         # Page layout templates
│   └── Layout.astro # Main layout with head, body structure
└── pages/           # File-based routing
    ├── index.astro  # English homepage
    └── es/
        └── index.astro # Spanish homepage
```

### Styling Approach

- **Global styles**: Defined in [src/layouts/Layout.astro](src/layouts/Layout.astro) using `<style is:global>`
- **Dark mode**: Automatic via `color-scheme: light dark` and `prefers-color-scheme` media queries
- **Responsive design**: Mobile-first using Tailwind's responsive prefixes (md:, lg:, xl:)
- **Background**: Custom radial gradient that adapts to light/dark mode
- **Layout constraint**: Main content centered with max-width of 1120px on xl screens

### Component Patterns

1. **Data-driven lists**: Experience items are defined as arrays in component frontmatter, then mapped to child components
2. **Props interface**: TypeScript interfaces define component props in frontmatter
3. **Conditional rendering**: Use `{condition && <element>}` pattern for optional elements
4. **Section anchors**: Use `id` prop on SectionContainer for navigation anchors (#about, #experience)

### Key Files

- [astro.config.mjs](astro.config.mjs) - Astro configuration with Tailwind and i18next integrations
- [tailwind.config.mjs](tailwind.config.mjs) - Tailwind configuration with content paths
- [src/layouts/Layout.astro](src/layouts/Layout.astro) - Main layout defining HTML structure, fonts, and global styles
- [src/pages/index.astro](src/pages/index.astro) - Main page content and structure
