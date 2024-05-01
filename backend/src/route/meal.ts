import { Hono } from "hono"
import { verify } from 'hono/jwt'
import { PrismaClient, UserRole } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { z } from "zod"

const app = new Hono<{
    Bindings: {
        JWT_SECRET: string,
        DATABASE_URL: string
    },
    Variables: {
        userId: string,
        prisma: any
    }
}>();

const createSchema = z.object({
    title: z.string(),
    description: z.string(),
    price: z.number()
})

app.use("*", async (c, next) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    c.set("prisma", prisma)
    await next()
})

app.use("/*", async (c, next) => {
    const authorization = c.req.header("Authorization");
    try {
        if (!authorization) {
            c.status(403)
            return c.json({ error: "unauthorized" })
        }
        const token = authorization.split(" ")[1];
        const verifiedtoken = await verify(token, c.env.JWT_SECRET);
        c.set("userId", verifiedtoken)
        await next();

    } catch (e) {
        console.error(e);
        c.status(403);
        c.json({ msg: "Error while authorizing" })
    }
})

// creating meal
app.post("/", async (c) => {
    const prisma = c.get("prisma");
    const userId = c.get("userId");
    try {
        const body = await c.req.json();
        const { success } = createSchema.safeParse(body);
        if (!success) {
            c.status(403)
            return c.json({ error: "Invalid Inputs" })
        }

        const createMeal = await prisma.meal.create({
            data: {
                title: body.title,
                description: body.description,
                price: body.price,
                authorId: userId
            }
        })
        return c.json({ id: createMeal.id })
    } catch (e) {
        console.error(e)
        c.status(403);
        return c.json({ msg: "error while creating" })
    }

})

app.get("/", async (c) => {
    const prisma = c.get("prisma");
    const userId = c.get("userId");

    try {
        console.log("yes", userId)
        const meals = await prisma.user.findMany({
            where: {
                role: "ADMIN",
                email: "aman@gmail.com"
            }, 
            select: {
                meal: true
            }
        })

        return c.json(meals)
    } catch (e) {
        console.error(e)
        return c.json({ Error: "Error while getting all meals" })
    }

})

export default app;