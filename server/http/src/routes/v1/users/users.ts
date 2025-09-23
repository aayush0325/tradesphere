import { getAuth } from "@hono/clerk-auth";
import { Hono } from "hono";
import { prisma } from "../../../index.js";
import { createUserSchema } from "../../../zod/v1/users/schemas.js";

export const users = new Hono()

users.post('/sync', async (c) => {
    const auth = getAuth(c)

    if ( !auth?.userId ) {
        return c.json({
            msg: "unauthorized"
        }, 401)
    }

    const user = await prisma.user.findUnique({
        where: {
            userId: auth.userId
        }
    })

    if ( user ) {
        return c.json({
            msg: "user exists"
        }, 200)
    }


    const body = await c.req.json()
    const { success, data } = createUserSchema.safeParse(body)
    if ( !success ) {
        return c.json({
            msg: "invalid request body"
        }, 400)
    }

    const newUser = await prisma.user.create({
        data: {
            userId: auth.userId,
            name: data.name,
            email: data.email
        }
    })

    if (newUser) {
        return c.json({
            msg: "user created"
        }, 200)
    }

    return c.json({
        msg: "user creation failed"
    }, 500)
})