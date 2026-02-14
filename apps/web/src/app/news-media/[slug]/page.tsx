import { getArticleBySlug } from "@hjrbda-site/db/queries/articles";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryBadge } from "@/components/articles/category-badge";
import Footer from "@/components/footer";
import type { ArticleCategory } from "@/lib/types/articles";

interface ArticlePageProps {
	params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
	const { slug } = await params;
	const article = await getArticleBySlug(slug, false);

	if (!article) {
		notFound();
	}

	const date = article.publishedAt ?? article.createdAt;

	return (
		<div className="flex min-h-screen flex-col">
			<div className="container mx-auto max-w-3xl px-6 py-12">
				<nav className="mb-8 text-muted-foreground text-sm">
					<Link href="/" className="transition-colors hover:text-foreground">
						Home
					</Link>
					<span className="mx-2">/</span>
					<Link
						href="/news-media"
						className="transition-colors hover:text-foreground"
					>
						News & Media
					</Link>
					<span className="mx-2">/</span>
					<span className="line-clamp-1 text-foreground">{article.title}</span>
				</nav>

				<article>
					<div className="mb-6 flex flex-wrap items-center gap-2">
						<CategoryBadge category={article.category as ArticleCategory} />
						{article.readTime && (
							<span className="text-muted-foreground text-xs">
								{article.readTime}
							</span>
						)}
					</div>

					<h1 className="font-bold text-3xl text-foreground tracking-tight md:text-4xl">
						{article.title}
					</h1>

					<p className="mt-4 text-muted-foreground text-sm">
						By {article.author?.name ?? "HJRBDA"} •{" "}
						{date ? new Date(date).toLocaleDateString() : ""}
					</p>

					{article.coverImageUrl && (
						<div className="mt-8 overflow-hidden rounded-md">
							{/* biome-ignore lint/performance/noImgElement: Cover URL may be external */}
							<img
								src={article.coverImageUrl}
								alt=""
								className="h-auto w-full object-cover"
							/>
						</div>
					)}

					<div
						className="prose prose-gray dark:prose-invert mt-8 max-w-none prose-headings:font-bold prose-a:text-primary prose-p:leading-relaxed prose-a:no-underline hover:prose-a:underline"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: Article body is HTML from admin editor
						dangerouslySetInnerHTML={{ __html: article.content }}
					/>
				</article>

				<div className="mt-12 border-t pt-8">
					<Link
						href="/news-media"
						className="font-semibold text-primary text-sm hover:underline"
					>
						← Back to News & Media
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
}
