import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Server configuration for ngrok access
  server: {
    host: '0.0.0.0', // Allow external connections (needed for ngrok)
    port: 5173, // Default Vite port
    strictPort: true, // Use exact port specified
    // Enable CORS for ngrok
    cors: true,
    // Allow all origins for development
    origin: ' https://e68cdd6cf3f1.ngrok-free.app'
  }
})
