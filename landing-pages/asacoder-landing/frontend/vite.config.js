import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0', // Allow external network access
    open: true,
    cors: true, // Enable CORS for cross-origin requests
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '1fd2e51e55f7.ngrok-free.app',
      '.ngrok-free.app' // Allow any ngrok subdomain
    ],
    hmr: {
      // Disable HMR for ngrok to prevent connection issues
      // Use polling instead for better stability
      port: 3000,
      overlay: false // Disable error overlay that might cause flickering
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
    open: true
  }
})
