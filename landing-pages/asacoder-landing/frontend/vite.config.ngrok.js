import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config specifically for ngrok - disables HMR to prevent connection issues
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0', // Allow external network access
    open: false, // Don't auto-open browser
    cors: true, // Enable CORS for cross-origin requests
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '1fd2e51e55f7.ngrok-free.app',
      '.ngrok-free.app' // Allow any ngrok subdomain
    ],
    hmr: false, // Completely disable HMR for ngrok
    watch: {
      usePolling: true // Use polling instead of file system events
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
    open: false
  }
})
