import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', port: 3000, strictPort: true,
    // Подготовлено для ЛР-6. В ЛР-5 приложение не вызывает /api.
    proxy: { '/api': { target: 'http://localhost:8090', changeOrigin: true } },
  },
})
