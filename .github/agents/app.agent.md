# GitHub Copilot Instructions

## Project Overview

**awesome-playwright** is a React + TypeScript single-page application that serves as a curated "awesome list" of Playwright testing resources.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (`components.json`)
- **Linting**: ESLint (`eslint.config.js`)
- **Package Manager**: Bun (preferred; `bun.lockb` present); `package-lock.json` also tracked

## Key Files & Directories

```
src/               # Application source
public/            # Static assets
components.json    # shadcn/ui configuration
tailwind.config.ts # Tailwind theme/plugin config
vite.config.ts     # Vite build config
tsconfig.json      # Root TypeScript config
tsconfig.app.json  # App-specific TS config
tsconfig.node.json # Node/Vite config TS settings
eslint.config.js   # Flat ESLint config
```

## Build & Dev Commands

```bash
bun install          # Install dependencies
bun run dev          # Start dev server
bun run build        # Production build (tsc + vite build)
bun run lint         # Run ESLint
bun run preview      # Preview production build
```

## Conventions

- **TypeScript**: Strict mode; use explicit types for props, function return values, and data models.
- **Components**: Use shadcn/ui primitives from `src/components/ui/`; add new shadcn components via `bunx shadcn@latest add <component>`.
- **Styling**: Tailwind utility classes only — no custom CSS files unless extending via `tailwind.config.ts`.
- **File naming**: PascalCase for React components (`ResourceCard.tsx`), camelCase for utilities/hooks.
- **Imports**: Use path aliases configured in `tsconfig.app.json` (e.g., `@/components`, `@/lib`).
- **No default exports** for utility modules; use named exports. React components may use default exports.
