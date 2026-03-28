"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { tender } from "@/lib/db/schema";
import {
	TenderStatus,
	type CreateTenderInput,
	type UpdateTenderInput,
	createTenderSchema,
	updateTenderSchema,
} from "@/lib/types/tenders";
import {
	getAdminTenders,
	getAdminTendersCount,
	getTenderById,
} from "@/lib/db/queries/tenders";

async function requireAdmin() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session?.user) {
		throw new Error("Unauthorized: Please log in");
	}

	return session.user;
}

export async function createTender(data: CreateTenderInput) {
	try {
		await requireAdmin();
		if (!db) throw new Error("Database not configured");

		const validatedData = createTenderSchema.parse(data);

		const id = crypto.randomUUID();
		const publishedAt =
			validatedData.status === TenderStatus.PUBLISHED ? new Date() : null;

		const closingDate =
			validatedData.closingDate && validatedData.closingDate !== ""
				? new Date(validatedData.closingDate)
				: null;

		await db.insert(tender).values({
			id,
			title: validatedData.title,
			description: validatedData.description,
			documentUrl:
				validatedData.documentUrl && validatedData.documentUrl !== ""
					? validatedData.documentUrl
					: null,
			status: validatedData.status,
			closingDate,
			publishedAt,
		});

		revalidatePath("/tender");
		revalidatePath("/admin/tenders");

		return { success: true, id };
	} catch (error) {
		console.error("Create tender error:", error);
		if (error instanceof Error) {
			return { success: false, error: error.message };
		}
		return { success: false, error: "Failed to create tender" };
	}
}

export async function updateTender(data: UpdateTenderInput) {
	try {
		await requireAdmin();
		if (!db) throw new Error("Database not configured");

		const validatedData = updateTenderSchema.parse(data);

		if (!validatedData.id) {
			throw new Error("Tender ID is required");
		}

		const existingTender = await getTenderById(validatedData.id);
		if (!existingTender) {
			throw new Error("Tender not found");
		}

		const updateData: Record<string, unknown> = {};

		if (validatedData.title !== undefined) updateData.title = validatedData.title;
		if (validatedData.description !== undefined) updateData.description = validatedData.description;
		if (validatedData.documentUrl !== undefined) {
			updateData.documentUrl =
				validatedData.documentUrl && validatedData.documentUrl !== ""
					? validatedData.documentUrl
					: null;
		}
		if (validatedData.status !== undefined) {
			updateData.status = validatedData.status;
			if (
				validatedData.status === TenderStatus.PUBLISHED &&
				existingTender.status !== TenderStatus.PUBLISHED
			) {
				updateData.publishedAt = new Date();
			}
		}
		if (validatedData.closingDate !== undefined) {
			updateData.closingDate =
				validatedData.closingDate && validatedData.closingDate !== ""
					? new Date(validatedData.closingDate)
					: null;
		}

		await db.update(tender).set(updateData).where(eq(tender.id, validatedData.id));

		revalidatePath("/tender");
		revalidatePath("/admin/tenders");

		return { success: true };
	} catch (error) {
		console.error("Update tender error:", error);
		if (error instanceof Error) {
			return { success: false, error: error.message };
		}
		return { success: false, error: "Failed to update tender" };
	}
}

export async function deleteTender(id: string) {
	try {
		await requireAdmin();
		if (!db) throw new Error("Database not configured");

		const existingTender = await getTenderById(id);
		if (!existingTender) {
			throw new Error("Tender not found");
		}

		await db.delete(tender).where(eq(tender.id, id));

		revalidatePath("/tender");
		revalidatePath("/admin/tenders");

		return { success: true };
	} catch (error) {
		console.error("Delete tender error:", error);
		if (error instanceof Error) {
			return { success: false, error: error.message };
		}
		return { success: false, error: "Failed to delete tender" };
	}
}

export { getAdminTenders, getAdminTendersCount, getTenderById };
