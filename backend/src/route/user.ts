import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { z } from "zod";
import { sign } from 'hono/jwt'

const app = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        prisma: any
    }
}>();

const signUpSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.string().optional()
})

const signInSchema = z.object({
    email: z.string(),
    password: z.string().min(6)

})

// middleware
app.use("*", async (c, next) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    c.set("prisma", prisma)
    await next()
})

// Signup page
app.post("/signup", async (c) => {
    const prisma = c.get("prisma");
    const body = await c.req.json();
    console.log(body)
    try {
        const { success } = signUpSchema.safeParse(body);
        if (!success) {
            c.status(411)
            return c.json({ error: "Invalid inputs" })
        }

        const newUser = await prisma.user.create({
            data: {
                email: body.email,
                role: body.role,
                name: body.name,
                password: body.password
            }
        })

        const token = await sign(newUser.id, c.env.JWT_SECRET)
        return c.json({ token })

    } catch (e) {
        console.error(e)
        c.status(403)
        return c.json({ error: "Error while signing up" })
    }
})

// Signin page
app.post("/signin", async (c) => {
    const prisma = c.get("prisma");
    const body = await c.req.json();
    console.log(body)
    try {
        const { success } = signInSchema.safeParse(body);
        if (!success) {
            c.status(411)
            return c.json({ error: "Invalid inputs" })
        }
        const existingUser = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password
            }
        })
        if (!existingUser) {
            return c.json({ error: "User not found" })
        }
        const token = await sign(existingUser.id, c.env.JWT_SECRET)
        return c.json({ token })
    }
    catch (e) {
        console.error(e)
        c.status(403)
        return c.json({ error: "Error while signing in" })
    }
})

export default app;