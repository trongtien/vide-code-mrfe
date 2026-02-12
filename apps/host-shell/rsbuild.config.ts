import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack';
import tailwindcss from '@tailwindcss/postcss';
import type { RsbuildConfig } from '@rsbuild/core';

const config: RsbuildConfig = {
  plugins: [pluginReact()],
  html: {
    template: './index.html',
  },
  source: {
    entry: {
      index: './src/main.tsx',
    },
  },
  resolve: {
    alias: {
      '@': './src',
      '@zephyr/host-shell': './src',
    },
  },
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack()],
    },
    postcss: (opts) => {
      opts.postcssOptions = {
        plugins: [
          tailwindcss(),
        ],
      };
    },
  },
  server: {
    port: 3000,
    host: 'localhost',
    open: true,
  },
  dev: {
    hmr: true,
    liveReload: true,
  },
};

export default defineConfig(config);
