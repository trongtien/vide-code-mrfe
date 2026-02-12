# Host Shell

The Zephyr Host Shell is the main entry point and orchestrator for the micro-frontend platform.

## Features

- File-based routing with TanStack Router
- Hot Module Replacement (HMR)
- Type-safe routing and navigation
- React 19 with latest features
- Fast builds with Rsbuild

## Development

```bash
# From root directory
npm run dev

# Or from this directory
npm run dev
```

## Building

```bash
# From root directory
npm run build

# Or from this directory
npm run build
```

## Project Structure

```
src/
├── routes/              # File-based routes
│   ├── __root.tsx      # Root layout
│   └── index.tsx       # Home page
├── App.tsx             # Router configuration
├── main.tsx            # Application entry
└── index.css           # Global styles
```

## Adding New Routes

Create a new file in `src/routes/` following TanStack Router conventions:

```tsx
// src/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  return <div>About Page</div>;
}
```

## Configuration

- **rsbuild.config.ts**: Build and dev server configuration
- **tsconfig.json**: TypeScript configuration
- **package.json**: Dependencies and scripts
