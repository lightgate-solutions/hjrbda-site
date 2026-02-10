import { db } from "@hjrbda-site/db";
import * as schema from "@hjrbda-site/db/schema/auth";
import { env } from "@hjrbda-site/env/server";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

// Only initialize auth if database is configured
const authConfig: Parameters<typeof betterAuth>[0] = {
	secret:
		env.BETTER_AUTH_SECRET ||
		"default-secret-key-for-development-only-change-in-production",
	trustedOrigins: env.CORS_ORIGIN
		? [env.CORS_ORIGIN]
		: ["http://localhost:3000"],
	emailAndPassword: {
		enabled: true,
	},
	plugins: [nextCookies()],
};

// Add database adapter only if DATABASE_URL is provided and db is available
if (env.DATABASE_URL && db) {
	authConfig.database = drizzleAdapter(db, {
		provider: "pg",
		schema: schema,
	});
}

export const auth = betterAuth(authConfig);
