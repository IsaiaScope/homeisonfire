import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger';
import { eventsRoute } from './routes/eventsRoute';

const app = new Hono()
const port = 3000
console.log(`🧊 ~ port: `, port);

app.use("*", logger())

app.route('/events', eventsRoute)



console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch, 
  port  
})


