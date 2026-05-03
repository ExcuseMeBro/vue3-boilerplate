import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const port = Number(env.VITE_DEV_PORT ?? 3000)

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: '0.0.0.0',
      port,
      strictPort: true,
    },
    preview: {
      port,
      strictPort: true,
    },
    build: {
      target: 'es2022',
      sourcemap: mode !== 'production',
      chunkSizeWarningLimit: 1200,
    },
  }
})
