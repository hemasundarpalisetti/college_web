import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : './',
  server: {
    port: 5173,
    host: true,
    watch: {
      ignored: ['**/*.mp4', '**/*.mkv', '**/*.avi', '**/*.pdf', '**/.git/**']
    }
  }
}))


