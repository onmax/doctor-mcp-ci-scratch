import { defineConfig } from 'vite'
import { vitehub } from 'vite-hub'
import { doctor } from 'vite-doctor/plugin'

export default defineConfig({
  server: { port: 4417, strictPort: true },
  plugins: [
    vitehub({ mcp: { auth: false } }),
    doctor({ run: 'serve', extends: ['auto', 'strict'], mcp: [{ url: '/mcp' }] }),
  ],
})
