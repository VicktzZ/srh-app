import { Hono } from "hono";

const app = new Hono()

console.log('SERVER WORKING');

app.get('/', (c) => {
    return c.json({ message: 'working' })
})

export default app