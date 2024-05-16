import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['@fontsource/outfit', '@fontsource/roboto']
    }
  },
  server: {
    fs: {
      allow: ['..'] // Allow serving files from parent directories
    }
  },
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  }
});
