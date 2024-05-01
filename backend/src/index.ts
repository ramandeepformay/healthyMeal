import { Hono } from 'hono'
import mainRouter from "./route/index"
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors())
app.route("/api/v1", mainRouter)
export default app

