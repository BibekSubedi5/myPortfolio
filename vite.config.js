import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  server: {
    // Allow serving files from node_modules
    fs: {
      allow: ['..'] // Allow serving files from parent directories
    }
  },
  plugins: [react()],
  css:{
    modules:{
      localsConvention:"camelCase",
    }
  }
})
