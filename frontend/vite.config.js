import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import frappeui from 'frappe-ui/vite'

export default defineConfig({
  plugins: [
    frappeui({
      frappeProxy: true,
      lucideIcons: true,
      jinjaBootData: true,
      buildConfig: {
        outDir: '../compass_admin/public/frontend',
        indexHtmlPath: '../compass_admin/www/admin.html',
        emptyOutDir: true,
      },
    }),
    vue(),
  ],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, 'src') },
    dedupe: ['vue', 'vue-router', 'frappe-ui'],
  },
  optimizeDeps: { exclude: ['frappe-ui'] },
})
