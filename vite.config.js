import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Optional: opens the app in the browser on start
  },
  build: {
    outDir: 'dist', // Ensure this matches Vercel's default behavior
  },
  resolve: {
    alias: {
      // Your aliases, if any
    },
  },
});
