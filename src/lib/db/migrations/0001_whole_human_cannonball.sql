CREATE TABLE "contact_submission" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"subject" text NOT NULL,
	"message" text NOT NULL,
	"status" text DEFAULT 'unread' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "contact_status_idx" ON "contact_submission" USING btree ("status");--> statement-breakpoint
CREATE INDEX "contact_createdAt_idx" ON "contact_submission" USING btree ("created_at");