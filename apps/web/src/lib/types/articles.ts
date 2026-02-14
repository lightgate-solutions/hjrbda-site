import { z } from "zod";

export const ArticleStatus = {
	DRAFT: "draft",
	PUBLISHED: "published",
} as const;

export type ArticleStatusType =
	(typeof ArticleStatus)[keyof typeof ArticleStatus];

export const ArticleCategories = [
	"Company News",
	"Market Insights",
	"Investment Tips",
	"Industry Analysis",
	"Economic Outlook",
	"Financial Planning",
] as const;

export type ArticleCategory = (typeof ArticleCategories)[number];

export const createArticleSchema = z.object({
	title: z
		.string()
		.min(1, "Title is required")
		.max(200, "Title must be less than 200 characters"),
	excerpt: z
		.string()
		.min(1, "Excerpt is required")
		.max(500, "Excerpt must be less than 500 characters"),
	content: z.string().min(1, "Content is required"),
	coverImageUrl: z
		.string()
		.url("Must be a valid URL")
		.optional()
		.or(z.literal("")),
	category: z.enum(ArticleCategories),
	status: z.enum([ArticleStatus.DRAFT, ArticleStatus.PUBLISHED]),
	featured: z.boolean(),
	slug: z.string().optional(),
});

export const updateArticleSchema = createArticleSchema.partial().extend({
	id: z.string().min(1, "Article ID is required"),
});

export type CreateArticleInput = z.infer<typeof createArticleSchema>;
export type UpdateArticleInput = z.infer<typeof updateArticleSchema>;

export function calculateReadTime(content: string): string {
	const text = content.replace(/<[^>]*>/g, "");
	const words = text.trim().split(/\s+/).length;
	const wordsPerMinute = 200;
	const minutes = Math.ceil(words / wordsPerMinute) || 1;
	return `${minutes} min read`;
}
