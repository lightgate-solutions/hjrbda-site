"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createArticle, updateArticle } from "@/lib/actions/articles";
import type {
	ArticleCategory,
	ArticleStatusType,
	CreateArticleInput,
} from "@/lib/types/articles";
import {
	ArticleCategories,
	ArticleStatus,
	createArticleSchema,
} from "@/lib/types/articles";
import { ArticleEditor } from "./article-editor";

type ArticleForForm = {
	id: string;
	title: string;
	excerpt: string;
	content: string;
	coverImageUrl: string | null;
	category: string;
	status: string;
	featured: boolean;
};

interface ArticleFormProps {
	article?: ArticleForForm;
	isEditing?: boolean;
}

export function ArticleForm({ article, isEditing = false }: ArticleFormProps) {
	const router = useRouter();

	const form = useForm<CreateArticleInput>({
		resolver: zodResolver(createArticleSchema),
		defaultValues: {
			title: article?.title ?? "",
			excerpt: article?.excerpt ?? "",
			content: article?.content ?? "",
			coverImageUrl: article?.coverImageUrl ?? "",
			category: (article?.category as ArticleCategory) ?? ArticleCategories[0],
			status: (article?.status as ArticleStatusType) ?? ArticleStatus.DRAFT,
			featured: article?.featured ?? false,
		},
	});

	const isSubmitting = form.formState.isSubmitting;

	async function onSubmit(data: CreateArticleInput) {
		try {
			const payload = {
				...data,
				coverImageUrl:
					data.coverImageUrl && data.coverImageUrl !== ""
						? data.coverImageUrl
						: undefined,
			};
			const result =
				isEditing && article
					? await updateArticle({ id: article.id, ...payload })
					: await createArticle(payload);

			if (result.success) {
				toast.success(
					isEditing
						? "Article updated successfully"
						: "Article created successfully",
				);
				router.push("/admin/news");
				router.refresh();
			} else {
				toast.error(result.error ?? "Failed to save article");
			}
		} catch {
			toast.error("An unexpected error occurred");
		}
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
			<div className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="title">Title</Label>
					<Controller
						name="title"
						control={form.control}
						render={({ field }) => (
							<Input
								{...field}
								id="title"
								placeholder="Enter article title"
								disabled={isSubmitting}
							/>
						)}
					/>
					{form.formState.errors.title && (
						<p className="text-destructive text-xs">
							{form.formState.errors.title.message}
						</p>
					)}
				</div>

				<div className="space-y-2">
					<Label htmlFor="excerpt">Excerpt</Label>
					<p className="text-muted-foreground text-sm">
						A short summary (shown in cards)
					</p>
					<Controller
						name="excerpt"
						control={form.control}
						render={({ field }) => (
							<Textarea
								{...field}
								id="excerpt"
								placeholder="Brief excerpt"
								rows={3}
								disabled={isSubmitting}
							/>
						)}
					/>
					{form.formState.errors.excerpt && (
						<p className="text-destructive text-xs">
							{form.formState.errors.excerpt.message}
						</p>
					)}
				</div>

				<div className="space-y-2">
					<Label>Content</Label>
					<Controller
						name="content"
						control={form.control}
						render={({ field }) => (
							<ArticleEditor
								content={field.value}
								onChange={field.onChange}
								placeholder="Start writing..."
							/>
						)}
					/>
					{form.formState.errors.content && (
						<p className="text-destructive text-xs">
							{form.formState.errors.content.message}
						</p>
					)}
				</div>

				<div className="space-y-2">
					<Label htmlFor="coverImageUrl">Cover image URL (optional)</Label>
					<Controller
						name="coverImageUrl"
						control={form.control}
						render={({ field }) => (
							<Input
								{...field}
								id="coverImageUrl"
								placeholder="https://..."
								disabled={isSubmitting}
							/>
						)}
					/>
					{form.formState.errors.coverImageUrl && (
						<p className="text-destructive text-xs">
							{form.formState.errors.coverImageUrl.message}
						</p>
					)}
				</div>

				<div className="space-y-2">
					<Label htmlFor="category">Category</Label>
					<Controller
						name="category"
						control={form.control}
						render={({ field }) => (
							<Select {...field} id="category" disabled={isSubmitting}>
								{ArticleCategories.map((cat) => (
									<option key={cat} value={cat}>
										{cat}
									</option>
								))}
							</Select>
						)}
					/>
					{form.formState.errors.category && (
						<p className="text-destructive text-xs">
							{form.formState.errors.category.message}
						</p>
					)}
				</div>

				<div className="space-y-2">
					<Label htmlFor="status">Status</Label>
					<Controller
						name="status"
						control={form.control}
						render={({ field }) => (
							<Select {...field} id="status" disabled={isSubmitting}>
								<option value={ArticleStatus.DRAFT}>Draft</option>
								<option value={ArticleStatus.PUBLISHED}>Published</option>
							</Select>
						)}
					/>
				</div>

				<div className="flex items-center gap-2">
					<Controller
						name="featured"
						control={form.control}
						render={({ field: { value, onChange, ...rest } }) => (
							<Checkbox
								{...rest}
								id="featured"
								checked={value}
								onCheckedChange={(checked) => onChange(!!checked)}
								disabled={isSubmitting}
							/>
						)}
					/>
					<Label htmlFor="featured" className="cursor-pointer font-normal">
						Featured (show prominently)
					</Label>
				</div>
				{form.formState.errors.featured && (
					<p className="text-destructive text-xs">
						{form.formState.errors.featured.message}
					</p>
				)}
			</div>

			<div className="flex gap-3">
				<Button type="submit" disabled={isSubmitting}>
					{isSubmitting
						? isEditing
							? "Updating..."
							: "Creating..."
						: isEditing
							? "Update Article"
							: "Create Article"}
				</Button>
				<Button
					type="button"
					variant="outline"
					onClick={() => router.push("/admin/news")}
					disabled={isSubmitting}
				>
					Cancel
				</Button>
			</div>
		</form>
	);
}
