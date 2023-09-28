import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// vite.config.js
export  default {
  build: {
    rollupOptions: {
      output: {
        format: 'es', // or 'module' for ES modules
      },
    },
  },
};
