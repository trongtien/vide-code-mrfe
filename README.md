# Zephyr - Modular Micro-Frontend Platform

A modern, scalable micro-frontend platform built with Rsbuild, TanStack Router, and TypeScript.

## Project Structure

```
.
├── apps/
│   └── host-shell/          # Main host application
│       ├── src/
│       │   ├── routes/      # TanStack Router routes
│       │   ├── App.tsx      # Root application component
│       │   ├── main.tsx     # Application entry point
│       │   └── index.css    # Global styles
│       ├── rsbuild.config.ts
│       ├── tsconfig.json
│       └── package.json
├── packages/                # Shared packages (future)
└── package.json            # Root package.json (monorepo)
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# The app will be available at http://localhost:3000
# Browser will open automatically
```

### Building

```bash
# Build host-shell for production (default)
npm run build

# Explicitly build only host-shell
npm run build:host

# Preview production build
npm run preview
```

**Note**: By default, only the host-shell app is built. Other apps in the monorepo are skipped unless explicitly specified.

### Linting & Type Checking

```bash
# Run linter
npm run lint

# Run type checking
npm run type-check
```

## Technology Stack

### Host Shell (@zephyr/host-shell)

- **Rsbuild**: Fast build tool based on Rspack
- **TanStack Router**: Type-safe, file-based routing
- **React 19**: Latest React with improved performance
- **TypeScript**: Full type safety
- **Oxlint**: Fast, Rust-based linting

## Architecture

This project follows a clean monorepo architecture:

- **apps/**: Contains the host application and future micro-frontends
- **packages/**: Shared libraries and utilities (coming soon)

### Monorepo Features

- Workspace-based dependency management
- Shared configuration across packages
- Type-safe imports between packages
- Independent versioning for each app

## Host Shell

The host shell is the main entry point for the application. It provides:

- Application shell and layout
- Route configuration
- Module federation setup (future)
- Shared state management (future)

## Future Enhancements

- Module Federation for micro-frontends
- Shared component library
- Common utilities package
- Additional remote applications
- CI/CD pipeline
- E2E testing setup

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run oxlint on source files |
| `npm run type-check` | Run TypeScript type checking |
| `npm run clean` | Clean all dependencies and build artifacts |

## Contributing

1. Create a feature branch
2. Make your changes
3. Run linting and type checking
4. Submit a pull request

## License

ISC
