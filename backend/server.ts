import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger';
import { eventsRoute } from './routes/eventsRoute';
import { serveStatic } from '@hono/node-server/serve-static'


const app = new Hono()
const port = 3000

app.use("*", logger())

app.route('/', eventsRoute)

app.use('*', serveStatic({ root: './frontend/dist' }))
// Serve index.html for all routes
app.use('*', serveStatic({ path: './frontend/dist/index.html' }))

console.log(`[BE] is running on port ${port}`)

serve({
  fetch: app.fetch, 
  port  
})


