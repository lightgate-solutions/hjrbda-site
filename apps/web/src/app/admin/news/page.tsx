import { Edit, FileText, Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { ArticleSearch } from "@/components/articles/article-search";
import { CategoryBadge } from "@/components/articles/category-badge";
import { DeleteArticleDialog } from "@/components/articles/delete-article-dialog";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";
import {
	getAdminArticles,
	getAdminArticlesCount,
} from "@/lib/actions/articles";
import type { ArticleCategory } from "@/lib/types/articles";

interface AdminNewsPageProps {
	searchParams: Promise<{
		search?: string;
		status?: string;
		category?: string;
		page?: string;
	}>;
}

export default async function AdminNewsPage({
	searchParams,
}: AdminNewsPageProps) {
	const params = await searchParams;
	const search = params.search ?? "";
	const status = params.status ?? "";
	const category = params.category ?? "";
	const page = Number.parseInt(params.page ?? "1", 10);
	const limit = 10;
	const offset = (page - 1) * limit;

	const [articles, totalCount] = await Promise.all([
		getAdminArticles({ search, status, category, limit, offset }),
		getAdminArticlesCount({ search, status, category }),
	]);

	const totalPages = Math.ceil(Number(totalCount) / limit);
	const queryParams: Record<string, string> = {};
	if (search) queryParams.search = search;
	if (status) queryParams.status = status;
	if (category) queryParams.category = category;

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-8 flex items-center justify-between">
				<div>
					<h1 className="mb-2 font-bold text-3xl">Manage News</h1>
					<p className="text-muted-foreground">
						Create, edit, and manage news articles
					</p>
				</div>
				<Button asChild>
					<Link href="/admin/news/new">
						<Plus className="mr-2 h-4 w-4" />
						New Article
					</Link>
				</Button>
			</div>

			<div className="mb-6">
				<Suspense
					fallback={
						<div className="text-muted-foreground text-sm">Loading...</div>
					}
				>
					<ArticleSearch placeholder="Search articles..." />
				</Suspense>
			</div>

			{articles.length === 0 ? (
				<EmptyState
					title="No articles found"
					description={
						search
							? "Try adjusting your search terms"
							: "Get started by creating your first article"
					}
					icon={<FileText className="h-16 w-16" />}
					action={
						!search ? (
							<Button asChild>
								<Link href="/admin/news/new">
									<Plus className="mr-2 h-4 w-4" />
									Create Article
								</Link>
							</Button>
						) : null
					}
				/>
			) : (
				<>
					<div className="mb-6 grid gap-4">
						{articles.map((article) => (
							<Card key={article.id}>
								<CardHeader>
									<div className="flex items-start justify-between gap-4">
										<div className="flex-1">
											<div className="mb-2 flex items-center gap-2">
												<CategoryBadge
													category={article.category as ArticleCategory}
												/>
												<span
													className={`rounded px-2 py-1 text-xs ${
														article.status === "published"
															? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
															: "bg-muted text-muted-foreground"
													}`}
												>
													{article.status}
												</span>
												{article.featured && (
													<span className="rounded bg-primary/10 px-2 py-1 text-primary text-xs">
														Featured
													</span>
												)}
											</div>
											<CardTitle className="text-xl">{article.title}</CardTitle>
											<CardDescription className="mt-1 line-clamp-2">
												{article.excerpt}
											</CardDescription>
										</div>
										<div className="flex gap-2">
											<Button variant="outline" size="sm" asChild>
												<Link href={`/admin/news/${article.id}/edit`}>
													<Edit className="mr-1 h-4 w-4" />
													Edit
												</Link>
											</Button>
											<DeleteArticleDialog
												articleId={article.id}
												articleTitle={article.title}
											/>
										</div>
									</div>
								</CardHeader>
								<CardFooter className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
									<span>By {article.author?.name ?? "Unknown"}</span>
									<span>•</span>
									<span>
										Updated{" "}
										{article.updatedAt
											? new Date(article.updatedAt).toLocaleDateString()
											: "N/A"}
									</span>
									{article.publishedAt && (
										<>
											<span>•</span>
											<span>
												Published{" "}
												{new Date(article.publishedAt).toLocaleDateString()}
											</span>
										</>
									)}
								</CardFooter>
							</Card>
						))}
					</div>

					{totalPages > 1 && (
						<Pagination
							currentPage={page}
							totalPages={totalPages}
							basePath="/admin/news"
							queryParams={queryParams}
						/>
					)}
				</>
			)}
		</div>
	);
}
