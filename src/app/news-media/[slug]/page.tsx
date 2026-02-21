import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryBadge } from "@/components/articles/category-badge";
import Footer from "@/components/footer";
import { getArticleBySlug } from "@/lib/db/queries/articles";
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
			<div className="container mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
				<nav
					className="mb-8 text-[var(--text-muted)] text-caption"
					aria-label="Breadcrumb"
				>
					<Link
						href="/"
						className="transition-colors hover:text-[var(--text-primary)]"
					>
						Home
					</Link>
					<span className="mx-2">/</span>
					<Link
						href="/news-media"
						className="transition-colors hover:text-[var(--text-primary)]"
					>
						News & media
					</Link>
					<span className="mx-2">/</span>
					<span className="line-clamp-1 text-[var(--text-primary)]">
						{article.title}
					</span>
				</nav>

				<article>
					<div className="mb-6 flex flex-wrap items-center gap-2">
						<CategoryBadge category={article.category as ArticleCategory} />
						{article.readTime && (
							<span className="text-[var(--text-muted)] text-caption">
								{article.readTime}
							</span>
						)}
					</div>

					<h1 className="font-bold font-heading text-[var(--text-primary)] text-h1 tracking-tight">
						{article.title}
					</h1>

					<p className="mt-4 text-[var(--text-muted)] text-body">
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
						className="prose prose-gray dark:prose-invert mt-8 max-w-none prose-headings:font-bold prose-headings:font-heading prose-p:text-body prose-p:leading-relaxed prose-a:no-underline hover:prose-a:underline [&_a]:[color:var(--accent)]"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: Article body is HTML from admin editor
						dangerouslySetInnerHTML={{ __html: article.content }}
					/>
				</article>

				<div
					className="mt-12 border-t pt-8"
					style={{ borderColor: "var(--card-border)" }}
				>
					<Link
						href="/news-media"
						className="font-medium text-body hover:underline"
						style={{ color: "var(--accent)" }}
					>
						← Back to News & media
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
}
