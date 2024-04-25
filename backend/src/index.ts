import { Hono } from 'hono'
import mainRouter from "./route/index"


const app = new Hono()

app.route("/api/v1", mainRouter)
export default app

