import { Hono } from 'hono';
import { clerkWebhooks } from './webhooks/clerk.js';
import { users } from './users/users.js';

export const v1 = new Hono();
v1.route('/webhooks', clerkWebhooks);
v1.route('/users', users);
