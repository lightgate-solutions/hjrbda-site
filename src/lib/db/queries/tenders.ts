import { and, count, desc, eq, ilike, or, sql } from "drizzle-orm";
import { db } from "../index";
import { tender } from "../schema";

export interface GetTendersParams {
	status?: string;
	search?: string;
	limit?: number;
	offset?: number;
}

export async function getPublishedTenders(params: GetTendersParams = {}) {
	if (!db) return [];

	try {
		const { search, limit = 20, offset = 0 } = params;

		const conditions = [eq(tender.status, "published")];

		if (search) {
			conditions.push(
				or(
					ilike(tender.title, `%${search}%`),
					ilike(tender.description, `%${search}%`),
				) ?? sql`true`,
			);
		}

		return await db
			.select()
			.from(tender)
			.where(and(...conditions))
			.orderBy(desc(tender.publishedAt))
			.limit(limit)
			.offset(offset);
	} catch (error) {
		console.warn("[DB] Query failed:", error instanceof Error ? error.message : "Unknown error");
		return [];
	}
}

export async function getAdminTenders(params: GetTendersParams = {}) {
	if (!db) return [];

	try {
		const { status, search, limit = 10, offset = 0 } = params;

		const conditions: ReturnType<typeof eq>[] = [];

		if (status) {
			conditions.push(eq(tender.status, status));
		}

		if (search) {
			conditions.push(
				or(
					ilike(tender.title, `%${search}%`),
					ilike(tender.description, `%${search}%`),
				) ?? sql`true`,
			);
		}

		const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

		return await db
			.select()
			.from(tender)
			.where(whereClause)
			.orderBy(desc(tender.updatedAt))
			.limit(limit)
			.offset(offset);
	} catch (error) {
		console.warn("[DB] Query failed:", error instanceof Error ? error.message : "Unknown error");
		return [];
	}
}

export async function getAdminTendersCount(params: GetTendersParams = {}) {
	if (!db) return 0;

	try {
		const { status, search } = params;

		const conditions: ReturnType<typeof eq>[] = [];

		if (status) {
			conditions.push(eq(tender.status, status));
		}

		if (search) {
			conditions.push(
				or(
					ilike(tender.title, `%${search}%`),
					ilike(tender.description, `%${search}%`),
				) ?? sql`true`,
			);
		}

		const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

		const result = await db.select({ count: count() }).from(tender).where(whereClause);
		return result[0]?.count ?? 0;
	} catch (error) {
		console.warn("[DB] Query failed:", error instanceof Error ? error.message : "Unknown error");
		return 0;
	}
}

export async function getTenderById(id: string) {
	if (!db) return null;

	try {
		const result = await db.select().from(tender).where(eq(tender.id, id)).limit(1);
		return result[0] ?? null;
	} catch (error) {
		console.warn("[DB] Query failed:", error instanceof Error ? error.message : "Unknown error");
		return null;
	}
}
