import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    hmr: {
      overlay: false
    },
    allowedHosts: [
      '.trycloudflare.com',  // Permitir todos los subdominios de trycloudflare.com
      'localhost',
      '.localhost'
    ]
  }
})
