import { index, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const tender = pgTable(
	"tender",
	{
		id: text("id").primaryKey(),
		title: text("title").notNull(),
		description: text("description").notNull(),
		documentUrl: text("document_url"),
		status: text("status").notNull().default("draft"),
		closingDate: timestamp("closing_date"),
		publishedAt: timestamp("published_at"),
		createdAt: timestamp("created_at").defaultNow().notNull(),
		updatedAt: timestamp("updated_at")
			.defaultNow()
			.$onUpdate(() => new Date())
			.notNull(),
	},
	(table) => [
		index("tender_status_idx").on(table.status),
		index("tender_publishedAt_idx").on(table.publishedAt),
	],
);
