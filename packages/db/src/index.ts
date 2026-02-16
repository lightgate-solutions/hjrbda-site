import { env } from "@hjrbda-site/env/server";
import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema";

// Only create db connection if DATABASE_URL is provided and valid
let db: ReturnType<typeof drizzle> | null = null;

try {
	if (env.DATABASE_URL && env.DATABASE_URL.trim().length > 0) {
		db = drizzle(env.DATABASE_URL, { schema });
	}
} catch (error) {
	// Silently fail if database connection cannot be established
	// This allows the app to run without a database
	console.warn(
		"[DB] Database connection failed:",
		error instanceof Error ? error.message : "Unknown error",
	);
	db = null;
}

export { db };

// Type guard to check if db is available
export function isDbAvailable(
	dbValue: typeof db,
): dbValue is ReturnType<typeof drizzle> {
	return dbValue !== null;
}

export * from "./schema";
