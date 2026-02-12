# config-tailwindcss

Shared Tailwind CSS v4+ configuration for the Zephyr monorepo.

## Features

- 🎨 Tailwind CSS v4+ with modern `@theme` syntax
- 🔥 Hot reload support for class changes
- 📦 Workspace-based configuration
- 🎯 Multiple configuration presets (full and minimal)

## Usage

### Installation

Add to your package's `package.json`:

```json
{
  "devDependencies": {
    "config-tailwindcss": "workspace:*",
    "tailwindcss": "^4.0.0"
  }
}
```

### Import in your main CSS/entry file

```css
/* For full configuration with custom theme */
@import "config-tailwindcss";

/* Or for minimal configuration */
@import "config-tailwindcss/base";
```

### Hot Reload Configuration

Tailwind CSS v4 supports hot reloading out of the box. When you change class names in your components, the styles will automatically update without a full page refresh.

For Rsbuild projects, ensure your CSS is imported in your entry point:

```tsx
// src/index.tsx
import './index.css'; // This imports your Tailwind CSS
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
```

## Custom Theme Tokens

The configuration includes:

- Custom primary color palette (50-900)
- Font family tokens for sans and mono
- Custom spacing utilities
- Responsive breakpoints
- Text wrapping utilities (`text-balance`, `text-pretty`)

## Extending the Configuration

To add custom utilities or theme tokens, edit:
- `src/index.css` - Full configuration with custom theme
- `src/base.css` - Minimal configuration
