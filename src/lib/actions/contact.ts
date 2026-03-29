"use server";

import { and, count, desc, eq, ilike, lt, or } from "drizzle-orm";
import { headers } from "next/headers";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { contactSubmission } from "@/lib/db/schema";

const contactSchema = z.object({
	name: z.string().min(1, "Name is required").max(100),
	email: z.string().email("Invalid email address"),
	subject: z.string().min(1, "Subject is required").max(200),
	message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

export async function submitContactForm(data: unknown) {
	try {
		if (!db) throw new Error("Database not configured");

		const validated = contactSchema.parse(data);

		await db.insert(contactSubmission).values({
			id: crypto.randomUUID(),
			name: validated.name,
			email: validated.email,
			subject: validated.subject,
			message: validated.message,
			status: "unread",
		});

		return { success: true };
	} catch (error) {
		if (error instanceof z.ZodError) {
			return { success: false, error: error.issues[0]?.message ?? "Invalid input" };
		}
		console.error("Contact form error:", error);
		return { success: false, error: "Failed to send message. Please try again." };
	}
}

async function requireAdmin() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session?.user) throw new Error("Unauthorized");
}

export async function markContactRead(id: string) {
	try {
		await requireAdmin();
		if (!db) throw new Error("Database not configured");
		await db
			.update(contactSubmission)
			.set({ status: "read" })
			.where(eq(contactSubmission.id, id));
		return { success: true };
	} catch (error) {
		return { success: false, error: error instanceof Error ? error.message : "Failed" };
	}
}

export async function deleteContactSubmission(id: string) {
	try {
		await requireAdmin();
		if (!db) throw new Error("Database not configured");
		await db.delete(contactSubmission).where(eq(contactSubmission.id, id));
		return { success: true };
	} catch (error) {
		return { success: false, error: error instanceof Error ? error.message : "Failed" };
	}
}

export async function getAdminContacts(params: {
	search?: string;
	status?: string;
	limit?: number;
	offset?: number;
} = {}) {
	if (!db) return [];
	try {
		const { search, status, limit = 20, offset = 0 } = params;
		const conditions: ReturnType<typeof eq>[] = [];

		if (status) conditions.push(eq(contactSubmission.status, status));
		if (search) {
			conditions.push(
				or(
					ilike(contactSubmission.name, `%${search}%`),
					ilike(contactSubmission.email, `%${search}%`),
					ilike(contactSubmission.subject, `%${search}%`),
				) ?? eq(contactSubmission.status, contactSubmission.status),
			);
		}

		return await db
			.select()
			.from(contactSubmission)
			.where(conditions.length > 0 ? and(...conditions) : undefined)
			.orderBy(desc(contactSubmission.createdAt))
			.limit(limit)
			.offset(offset);
	} catch {
		return [];
	}
}

export async function getAdminContactsCount(params: {
	search?: string;
	status?: string;
} = {}) {
	if (!db) return 0;
	try {
		const { search, status } = params;
		const conditions: ReturnType<typeof eq>[] = [];

		if (status) conditions.push(eq(contactSubmission.status, status));
		if (search) {
			conditions.push(
				or(
					ilike(contactSubmission.name, `%${search}%`),
					ilike(contactSubmission.email, `%${search}%`),
					ilike(contactSubmission.subject, `%${search}%`),
				) ?? eq(contactSubmission.status, contactSubmission.status),
			);
		}

		const result = await db
			.select({ count: count() })
			.from(contactSubmission)
			.where(conditions.length > 0 ? and(...conditions) : undefined);

		return result[0]?.count ?? 0;
	} catch {
		return 0;
	}
}

export async function deleteExpiredContacts() {
	if (!db) return { deleted: 0 };
	const cutoff = new Date();
	cutoff.setFullYear(cutoff.getFullYear() - 1);
	const result = await db
		.delete(contactSubmission)
		.where(lt(contactSubmission.createdAt, cutoff));
	const deleted = result.rowCount ?? 0;
	console.log(`[CRON] Deleted ${deleted} contact submission(s) older than 12 months`);
	return { deleted };
}

export async function getUnreadContactsCount() {
	if (!db) return 0;
	try {
		const result = await db
			.select({ count: count() })
			.from(contactSubmission)
			.where(eq(contactSubmission.status, "unread"));
		return result[0]?.count ?? 0;
	} catch {
		return 0;
	}
}
