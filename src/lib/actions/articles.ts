"use server";

import { and, eq, like, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { article, db } from "@/lib/db";
import {
	getAdminArticles,
	getAdminArticlesCount,
	getArticleById,
} from "@/lib/db/queries/articles";
import {
	ArticleStatus,
	type CreateArticleInput,
	calculateReadTime,
	createArticleSchema,
	type UpdateArticleInput,
	updateArticleSchema,
} from "@/lib/types/articles";
import { ensureUniqueSlug, generateSlug } from "@/lib/utils/slug";

async function requireAdmin() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session?.user) {
		throw new Error("Unauthorized: Please log in");
	}

	return session.user;
}

export async function createArticle(data: CreateArticleInput) {
	try {
		const user = await requireAdmin();
		if (!db) throw new Error("Database not configured");

		const validatedData = createArticleSchema.parse(data);

		let slug = validatedData.slug ?? generateSlug(validatedData.title);

		const existingArticles = await db
			.select({ slug: article.slug })
			.from(article)
			.where(like(article.slug, `${slug}%`));

		const existingSlugs = existingArticles.map((a) => a.slug);
		slug = ensureUniqueSlug(slug, existingSlugs);

		const readTime = calculateReadTime(validatedData.content);
		const id = crypto.randomUUID();
		const publishedAt =
			validatedData.status === ArticleStatus.PUBLISHED ? new Date() : null;

		await db.insert(article).values({
			id,
			slug,
			title: validatedData.title,
			excerpt: validatedData.excerpt,
			content: validatedData.content,
			coverImageUrl:
				validatedData.coverImageUrl && validatedData.coverImageUrl !== ""
					? validatedData.coverImageUrl
					: null,
			category: validatedData.category,
			status: validatedData.status,
			featured: validatedData.featured,
			readTime,
			publishedAt,
			authorId: user.id,
		});

		revalidatePath("/news");
		revalidatePath("/news-media");
		revalidatePath("/admin/news");

		return { success: true, id, slug };
	} catch (error) {
		console.error("Create article error:", error);
		if (error instanceof Error) {
			return { success: false, error: error.message };
		}
		return { success: false, error: "Failed to create article" };
	}
}

export async function updateArticle(data: UpdateArticleInput) {
	try {
		await requireAdmin();
		if (!db) throw new Error("Database not configured");

		const validatedData = updateArticleSchema.parse(data);

		if (!validatedData.id) {
			throw new Error("Article ID is required");
		}

		const existingArticle = await getArticleById(validatedData.id);
		if (!existingArticle) {
			throw new Error("Article not found");
		}

		const updateData: Record<string, unknown> = {};

		if (validatedData.title !== undefined) {
			updateData.title = validatedData.title;
			if (validatedData.title !== existingArticle.title) {
				let newSlug = generateSlug(validatedData.title);
				const existingArticles = await db
					.select({ slug: article.slug })
					.from(article)
					.where(
						and(
							like(article.slug, `${newSlug}%`),
							not(eq(article.id, validatedData.id)),
						),
					);
				const existingSlugs = existingArticles.map((a) => a.slug);
				newSlug = ensureUniqueSlug(newSlug, existingSlugs);
				updateData.slug = newSlug;
			}
		}

		if (validatedData.excerpt !== undefined)
			updateData.excerpt = validatedData.excerpt;
		if (validatedData.content !== undefined) {
			updateData.content = validatedData.content;
			updateData.readTime = calculateReadTime(validatedData.content);
		}
		if (validatedData.coverImageUrl !== undefined) {
			updateData.coverImageUrl =
				validatedData.coverImageUrl && validatedData.coverImageUrl !== ""
					? validatedData.coverImageUrl
					: null;
		}
		if (validatedData.category !== undefined)
			updateData.category = validatedData.category;
		if (validatedData.status !== undefined) {
			updateData.status = validatedData.status;
			if (
				validatedData.status === ArticleStatus.PUBLISHED &&
				existingArticle.status !== ArticleStatus.PUBLISHED
			) {
				updateData.publishedAt = new Date();
			}
		}
		if (validatedData.featured !== undefined)
			updateData.featured = validatedData.featured;

		await db
			.update(article)
			.set(updateData)
			.where(eq(article.id, validatedData.id));

		revalidatePath("/news");
		revalidatePath("/news-media");
		revalidatePath(`/news-media/${existingArticle.slug}`);
		revalidatePath("/admin/news");

		return { success: true };
	} catch (error) {
		console.error("Update article error:", error);
		if (error instanceof Error) {
			return { success: false, error: error.message };
		}
		return { success: false, error: "Failed to update article" };
	}
}

export async function deleteArticle(id: string) {
	try {
		await requireAdmin();
		if (!db) throw new Error("Database not configured");

		const existingArticle = await getArticleById(id);
		if (!existingArticle) {
			throw new Error("Article not found");
		}

		await db.delete(article).where(eq(article.id, id));

		revalidatePath("/news");
		revalidatePath("/news-media");
		revalidatePath(`/news-media/${existingArticle.slug}`);
		revalidatePath("/admin/news");

		return { success: true };
	} catch (error) {
		console.error("Delete article error:", error);
		if (error instanceof Error) {
			return { success: false, error: error.message };
		}
		return { success: false, error: "Failed to delete article" };
	}
}

export { getAdminArticles, getAdminArticlesCount, getArticleById };
