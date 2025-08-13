import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config for ngrok with HMR disabled to prevent WebSocket issues
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0', // Allow external network access
    open: false, // Don't auto-open browser
    cors: true, // Enable CORS for cross-origin requests
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '476edd4dd8ed.ngrok-free.app',
      '.ngrok-free.app' // Allow any ngrok subdomain
    ],
    hmr: false, // Disable HMR for ngrok to prevent WebSocket issues
    watch: {
      usePolling: true // Use polling instead of file system events
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  preview: {
    port: 4173,
    host: '0.0.0.0',
    open: false
  }
})
