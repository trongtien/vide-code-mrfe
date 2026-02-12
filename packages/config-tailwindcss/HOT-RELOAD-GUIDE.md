# Tailwind CSS Hot Reload Configuration Guide

This guide explains how to use the Tailwind CSS v4+ configuration with hot reload in the Zephyr monorepo.

## What's Configured

The monorepo now includes:

1. **`packages/config-tailwindcss`** - Shared Tailwind CSS v4+ configuration
2. **Tailwind CSS v4** - Latest version with native CSS support
3. **Hot Module Replacement (HMR)** - Enabled in Rsbuild for instant updates
4. **Live Reload** - Automatic browser refresh when CSS changes

## How Hot Reload Works

Tailwind CSS v4 with Rsbuild provides three levels of hot reload:

### 1. **Class Name Changes** (Instant - No Page Reload)
When you change Tailwind class names in your components, the styles update instantly without a full page reload.

**Example:**
```tsx
// Change this:
<div className="bg-blue-500 p-4">Hello</div>

// To this:
<div className="bg-red-500 p-8">Hello</div>

// Result: Styles update instantly, no page reload
```

### 2. **CSS File Changes** (Fast - Partial Reload)
When you modify the Tailwind CSS configuration in `packages/config-tailwindcss/src/index.css`, the styles update quickly with minimal reload.

### 3. **Component Structure Changes** (Full Reload)
When you change component structure or JSX, HMR attempts to preserve state, but may require a full reload.

## Usage in Your App

### Step 1: Add Dependencies

In your app's `package.json`:

```json
{
  "devDependencies": {
    "config-tailwindcss": "*",
    "tailwindcss": "^4.0.0"
  }
}
```

### Step 2: Import in Your Main CSS

In your `src/index.css` or main CSS file:

```css
@import "config-tailwindcss";

/* Your custom styles here */
```

### Step 3: Use Tailwind Classes

In your components (see `apps/host-shell/src/components/Header.tsx:3-5`):

```tsx
export function Header() {
  return (
    <nav className="p-4 bg-blue-600 text-white">
      <h1 className="m-0 font-semibold text-2xl">LakeTest</h1>
    </nav>
  );
}
```

### Step 4: Start Dev Server

```bash
npm run dev
```

Now try changing class names in your components - the styles will update instantly!

## Testing Hot Reload

### Test 1: Change Background Color
1. Start dev server: `npm run dev`
2. Open `apps/host-shell/src/components/Header.tsx`
3. Change `bg-blue-600` to `bg-green-600`
4. Save the file
5. **Result**: Background changes instantly without page reload

### Test 2: Change Padding
1. Change `p-4` to `p-8`
2. Save the file
3. **Result**: Padding changes instantly

### Test 3: Change Text Size
1. Change `text-2xl` to `text-4xl`
2. Save the file
3. **Result**: Text size changes instantly

## Configuration Files

### Rsbuild Configuration
Located at `apps/host-shell/rsbuild.config.ts:32-35`:

```typescript
dev: {
  hmr: true,           // Hot Module Replacement
  liveReload: true,    // Live reload fallback
}
```

### Tailwind CSS Configuration
Located at `packages/config-tailwindcss/src/index.css`:

```css
@import "tailwindcss";

/* Base Tailwind CSS v4+ configuration */
/* This file provides the foundation for all projects */
```

## Customizing the Configuration

To add custom theme tokens, edit `packages/config-tailwindcss/src/index.css`:

```css
@import "tailwindcss";

@theme {
  /* Custom colors */
  --color-brand: #ff6b6b;
  
  /* Custom spacing */
  --spacing-18: 4.5rem;
  
  /* Custom fonts */
  --font-family-custom: "Inter", sans-serif;
}

/* Custom utilities */
@utility text-balance {
  text-wrap: balance;
}
```

## Troubleshooting

### Hot Reload Not Working?

1. **Check dev server is running**: Ensure `npm run dev` is active
2. **Clear browser cache**: Hard refresh with Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. **Restart dev server**: Stop and restart `npm run dev`

### Styles Not Applying?

1. **Verify CSS import**: Ensure `@import "config-tailwindcss";` is in your main CSS file
2. **Check class names**: Use valid Tailwind utility classes
3. **Build the project**: Run `npm run build` to ensure no errors

### Performance Issues?

Tailwind CSS v4 is optimized for performance, but if you experience slow updates:

1. **Reduce file watchers**: Close unused files in your editor
2. **Limit extensions**: Disable unnecessary VS Code extensions
3. **Use selective imports**: Only import styles you need

## Benefits of This Setup

1. **Instant Feedback** - See changes immediately without page reload
2. **Faster Development** - No manual browser refresh needed
3. **State Preservation** - React component state is preserved during updates
4. **Shared Configuration** - Consistent styling across all apps
5. **Type Safety** - Full TypeScript support in configuration

## Next Steps

1. Explore all Tailwind CSS utilities: https://tailwindcss.com/docs
2. Customize the theme in `packages/config-tailwindcss/src/index.css`
3. Add custom utilities for your design system
4. Share the configuration with other apps in the monorepo

---

**Note**: The hot reload feature works automatically when using `npm run dev`. For production builds, use `npm run build` which generates optimized CSS.
