import { Hono } from "hono";
import userRouter from "./user"
import mealRouter from "./meal"

const app = new Hono();

app.route("/user", userRouter)
app.route("/meal", mealRouter)

export default app;