import { Hono } from 'hono';
import { PrismaClient } from '../../../generated/prisma/index.js';

const prisma = new PrismaClient();

export const clerkWebhooks = new Hono();

clerkWebhooks.post('/clerk', async c => {
    try {
        const event = await c.req.json();

        // Process webhook asynchronously without blocking response
        setImmediate(async () => {
            try {
                switch (event.type) {
                    case 'user.created':
                        await handleUserCreated(event.data);
                        break;
                    case 'user.updated':
                        await handleUserUpdated(event.data);
                        break;
                    case 'user.deleted':
                        await handleUserDeleted(event.data);
                        break;
                    default:
                        console.log(`Unhandled event type: ${event.type}`);
                }
            } catch (error: any) {
                console.error('Webhook processing error:', error);
            }
        });

        // Return immediately to Clerk
        return c.json({ received: true }, 200);
    } catch (error: any) {
        console.error('Webhook parsing error:', error);
        return c.json({ error: 'Webhook parsing failed' }, 400);
    }
});

async function handleUserCreated(userData: any) {
    try {
        await prisma.user.create({
            data: {
                userId: userData.id,
                name:
                    `${userData.first_name || ''} ${userData.last_name || ''}`.trim() ||
                    'User',
                email: userData.email_addresses[0]?.email_address || '',
            },
        });
        console.log(`User created in database: ${userData.id}`);
    } catch (error: any) {
        console.error('Error creating user in database:', error);
        if (error.code === 'P2002') {
            console.log('User already exists in database');
        }
    }
}

async function handleUserUpdated(userData: any) {
    try {
        await prisma.user.update({
            where: { userId: userData.id },
            data: {
                name:
                    `${userData.first_name || ''} ${userData.last_name || ''}`.trim() ||
                    'User',
                email: userData.email_addresses[0]?.email_address || '',
            },
        });
        console.log(`User updated in database: ${userData.id}`);
    } catch (error: any) {
        console.error('Error updating user in database:', error);
    }
}

async function handleUserDeleted(userData: any) {
    try {
        await prisma.user.delete({
            where: { userId: userData.id },
        });
        console.log(`User deleted from database: ${userData.id}`);
    } catch (error: any) {
        console.error('Error deleting user from database:', error);
    }
}
