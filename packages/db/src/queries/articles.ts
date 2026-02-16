import { and, count, desc, eq, ilike, or, sql } from "drizzle-orm";
import { db } from "../index";
import { article, user } from "../schema";
import type { GetArticlesParams } from "../types/articles";

export type { GetArticlesParams } from "../types/articles";

export async function getPublishedArticles(params: GetArticlesParams = {}) {
	if (!db) {
		return [];
	}

	const { category, search, featured, limit = 10, offset = 0 } = params;

	const conditions = [eq(article.status, "published")];

	if (category) {
		conditions.push(eq(article.category, category));
	}

	if (search) {
		conditions.push(
			or(
				ilike(article.title, `%${search}%`),
				ilike(article.excerpt, `%${search}%`),
			) ?? sql`true`,
		);
	}

	if (featured !== undefined) {
		conditions.push(eq(article.featured, featured));
	}

	const articles = await db
		.select({
			id: article.id,
			slug: article.slug,
			title: article.title,
			excerpt: article.excerpt,
			coverImageUrl: article.coverImageUrl,
			category: article.category,
			featured: article.featured,
			readTime: article.readTime,
			publishedAt: article.publishedAt,
			createdAt: article.createdAt,
			author: {
				id: user.id,
				name: user.name,
				image: user.image,
			},
		})
		.from(article)
		.leftJoin(user, eq(article.authorId, user.id))
		.where(and(...conditions))
		.orderBy(desc(article.publishedAt))
		.limit(limit)
		.offset(offset);

	return articles;
}

export async function getPublishedArticlesCount(
	params: GetArticlesParams = {},
) {
	if (!db) {
		return 0;
	}

	const { category, search } = params;

	const conditions = [eq(article.status, "published")];

	if (category) {
		conditions.push(eq(article.category, category));
	}

	if (search) {
		conditions.push(
			or(
				ilike(article.title, `%${search}%`),
				ilike(article.excerpt, `%${search}%`),
			) ?? sql`true`,
		);
	}

	const result = await db
		.select({ count: count() })
		.from(article)
		.where(and(...conditions));

	return result[0]?.count ?? 0;
}

export async function getAdminArticles(params: GetArticlesParams = {}) {
	if (!db) {
		return [];
	}

	const { status, category, search, limit = 10, offset = 0 } = params;

	const conditions: ReturnType<typeof eq>[] = [];

	if (status) {
		conditions.push(eq(article.status, status));
	}

	if (category) {
		conditions.push(eq(article.category, category));
	}

	if (search) {
		conditions.push(
			or(
				ilike(article.title, `%${search}%`),
				ilike(article.excerpt, `%${search}%`),
			) ?? sql`true`,
		);
	}

	const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

	const articles = await db
		.select({
			id: article.id,
			slug: article.slug,
			title: article.title,
			excerpt: article.excerpt,
			coverImageUrl: article.coverImageUrl,
			category: article.category,
			status: article.status,
			featured: article.featured,
			readTime: article.readTime,
			publishedAt: article.publishedAt,
			createdAt: article.createdAt,
			updatedAt: article.updatedAt,
			author: {
				id: user.id,
				name: user.name,
				image: user.image,
			},
		})
		.from(article)
		.leftJoin(user, eq(article.authorId, user.id))
		.where(whereClause)
		.orderBy(desc(article.updatedAt))
		.limit(limit)
		.offset(offset);

	return articles;
}

export async function getAdminArticlesCount(params: GetArticlesParams = {}) {
	if (!db) {
		return 0;
	}

	const { status, category, search } = params;

	const conditions: ReturnType<typeof eq>[] = [];

	if (status) {
		conditions.push(eq(article.status, status));
	}

	if (category) {
		conditions.push(eq(article.category, category));
	}

	if (search) {
		conditions.push(
			or(
				ilike(article.title, `%${search}%`),
				ilike(article.excerpt, `%${search}%`),
			) ?? sql`true`,
		);
	}

	const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

	const result = await db
		.select({ count: count() })
		.from(article)
		.where(whereClause);

	return result[0]?.count ?? 0;
}

export async function getArticleBySlug(
	slug: string,
	includeUnpublished = false,
) {
	if (!db) {
		return null;
	}

	const conditions = [eq(article.slug, slug)];

	if (!includeUnpublished) {
		conditions.push(eq(article.status, "published"));
	}

	const result = await db
		.select({
			id: article.id,
			slug: article.slug,
			title: article.title,
			excerpt: article.excerpt,
			content: article.content,
			coverImageUrl: article.coverImageUrl,
			category: article.category,
			status: article.status,
			featured: article.featured,
			readTime: article.readTime,
			publishedAt: article.publishedAt,
			createdAt: article.createdAt,
			updatedAt: article.updatedAt,
			author: {
				id: user.id,
				name: user.name,
				image: user.image,
			},
		})
		.from(article)
		.leftJoin(user, eq(article.authorId, user.id))
		.where(and(...conditions))
		.limit(1);

	return result[0] ?? null;
}

export async function getArticleById(id: string) {
	if (!db) {
		return null;
	}

	const result = await db
		.select({
			id: article.id,
			slug: article.slug,
			title: article.title,
			excerpt: article.excerpt,
			content: article.content,
			coverImageUrl: article.coverImageUrl,
			category: article.category,
			status: article.status,
			featured: article.featured,
			readTime: article.readTime,
			publishedAt: article.publishedAt,
			createdAt: article.createdAt,
			updatedAt: article.updatedAt,
			authorId: article.authorId,
			author: {
				id: user.id,
				name: user.name,
				image: user.image,
			},
		})
		.from(article)
		.leftJoin(user, eq(article.authorId, user.id))
		.where(eq(article.id, id))
		.limit(1);

	return result[0] ?? null;
}

export async function getFeaturedArticles(limit = 3) {
	if (!db) {
		return [];
	}

	const articles = await db
		.select({
			id: article.id,
			slug: article.slug,
			title: article.title,
			excerpt: article.excerpt,
			coverImageUrl: article.coverImageUrl,
			category: article.category,
			featured: article.featured,
			readTime: article.readTime,
			publishedAt: article.publishedAt,
			author: {
				id: user.id,
				name: user.name,
				image: user.image,
			},
		})
		.from(article)
		.leftJoin(user, eq(article.authorId, user.id))
		.where(and(eq(article.status, "published"), eq(article.featured, true)))
		.orderBy(desc(article.publishedAt))
		.limit(limit);

	return articles;
}
