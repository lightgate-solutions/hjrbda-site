import { index, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const contactSubmission = pgTable(
	"contact_submission",
	{
		id: text("id").primaryKey(),
		name: text("name").notNull(),
		email: text("email").notNull(),
		subject: text("subject").notNull(),
		message: text("message").notNull(),
		status: text("status").notNull().default("unread"),
		createdAt: timestamp("created_at").defaultNow().notNull(),
	},
	(table) => [
		index("contact_status_idx").on(table.status),
		index("contact_createdAt_idx").on(table.createdAt),
	],
);
