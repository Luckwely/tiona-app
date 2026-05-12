// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),

    // Plugin to serve .wasm files with correct MIME type
    {
      name: 'wasm-mime',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.endsWith('.wasm')) {
            res.setHeader('Content-Type', 'application/wasm');
          }
          next();
        });
      }
    }
  ],
  assetsInclude: ['**/*.wasm'],
  optimizeDeps: {
    exclude: ['@capacitor-community/sqlite', 'jeep-sqlite']
  },
  server: {
    fs: {
      allow: ['..']
    }
  },
  build: {
    assetsInlineLimit: 0
  }
})