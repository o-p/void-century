import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9487,
  },
  resolve: {
    alias: {
      '~assets': '/src/assets',
      '~components': '/src/components',
      '~scenes': '/src/scenes',
      '~states': '/src/states',
    },
  },
})
