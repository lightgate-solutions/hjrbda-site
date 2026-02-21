import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/lib/db";
import * as schema from "@/lib/db/schema/auth";
import { env } from "@/lib/env/server";

// Only initialize auth if database is configured
const authConfig: Parameters<typeof betterAuth>[0] = {
	secret:
		env.BETTER_AUTH_SECRET ||
		"default-secret-key-for-development-only-change-in-production",
	baseURL: env.BETTER_AUTH_URL || "http://localhost:3000",
	trustedOrigins: env.CORS_ORIGIN
		? [env.CORS_ORIGIN]
		: ["http://localhost:3000"],
	emailAndPassword: {
		enabled: true,
	},
	plugins: [nextCookies()],
};

// Add database adapter only if DATABASE_URL is provided and db is available
try {
	if (env.DATABASE_URL && env.DATABASE_URL.trim().length > 0 && db) {
		authConfig.database = drizzleAdapter(db, {
			provider: "pg",
			schema: schema,
		});
	}
} catch (error) {
	// Silently fail if database adapter cannot be initialized
	// Auth will work without database (no user persistence)
	console.warn(
		"[Auth] Database adapter initialization failed:",
		error instanceof Error ? error.message : "Unknown error",
	);
}

export const auth = betterAuth(authConfig);
