import { serve } from "@hono/node-server";
import { Hono } from "hono";
import AuthRouter from "./auth/adapters/HonoRouter";
import { PrismaClient } from '@prisma/client';
import { PrismaUserRepository } from './auth/repositories/PrismaUserRepository';

const app = new Hono();
export const prisma = new PrismaClient();

export const userRepository = PrismaUserRepository()

app.route("/auth", AuthRouter);

app.get("/", (c) => {
	return c.text("Hello from Hono!");
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
