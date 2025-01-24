import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Habilita los mapas de fuente
  },
  server: {
    sourcemap: true, // Asegúrate de habilitarlo también para el modo de desarrollo
  },
})
