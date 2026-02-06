import { env } from "@hjrbda-site/env/server";
import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema";

// Only create db connection if DATABASE_URL is provided
export const db = env.DATABASE_URL
	? drizzle(env.DATABASE_URL, { schema })
	: (null as unknown as ReturnType<typeof drizzle>);
