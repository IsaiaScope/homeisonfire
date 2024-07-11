import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger';
import { eventsRoute } from './routes/eventsRoute';

const app = new Hono()
const port = 3000

app.use("*", logger())

app.route('/', eventsRoute)



console.log(`[BE] is running on port ${port}`)

serve({
  fetch: app.fetch, 
  port  
})


