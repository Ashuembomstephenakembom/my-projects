import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external network access
    port: 5173, // Default Vite port
    strictPort: true, // Use exact port
    hmr: {
      host: 'localhost', // Use localhost for HMR
      port: 5173, // Same port as server
      protocol: 'ws' // WebSocket for local development
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 4173
  }
})
