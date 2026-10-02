import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import contactHandler from './api/contact.js'

function contactApiPlugin() {
  return {
    name: 'contact-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        try {
          await contactHandler(req, res)
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error('[Vite Dev API Error]', err)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: false, error: err.message }))
        }
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        try {
          await contactHandler(req, res)
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error('[Vite Preview API Error]', err)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: false, error: err.message }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contactApiPlugin()],
})
