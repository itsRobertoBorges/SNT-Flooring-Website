import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/SNT-Flooring-Website/',   // <-- EXACT repo name, leading & trailing slash
  plugins: [react()],
})
