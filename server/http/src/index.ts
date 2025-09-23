import { serve } from '@hono/node-server';
import { clerkMiddleware } from '@hono/clerk-auth';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { v1 } from './routes/v1/v1.js';
import { PrismaClient } from './generated/prisma/index.js';
import dotenv from 'dotenv';
dotenv.config();

const app = new Hono();

export const prisma = new PrismaClient();

// todo - remove when production
app.use(
    '*',
    cors({
        origin: ['http://localhost:3000'],
    })
);

app.use(
    '/*',
    clerkMiddleware({
        secretKey: process.env.CLERK_SECRET_KEY,
        publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    })
);

app.get('/', c => {
    return c.text('Hello Hono!');
});

app.route('/api/v1', v1);

serve(
    {
        fetch: app.fetch,
        port: 8000,
    },
    info => {
        console.log(`Server is running on http://localhost:${info.port}`);
    }
);
