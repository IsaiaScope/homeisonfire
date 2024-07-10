import { Hono } from 'hono';

export const eventsRoute = new Hono().get('/', c => {
	return c.json({ message: 'Hello from events' });
});
