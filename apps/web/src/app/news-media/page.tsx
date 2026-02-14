import { getPublishedArticles } from "@hjrbda-site/db/queries/articles";
import Link from "next/link";
import Footer from "@/components/footer";
import ScrollAnimate from "@/components/scroll-animate";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function NewsMediaPage() {
	const articles = await getPublishedArticles({ limit: 24 });

	return (
		<div className="flex min-h-screen flex-col">
			<div className="container mx-auto px-6 py-12">
				<nav className="mb-8 text-muted-foreground text-sm">
					<Link href="/" className="transition-colors hover:text-foreground">
						Home
					</Link>
					<span className="mx-2">/</span>
					<span className="text-foreground">News & Media</span>
				</nav>

				<div className="mb-12">
					<div className="mb-3 font-semibold text-primary text-sm uppercase tracking-wider">
						News
					</div>
					<h1 className="font-bold text-4xl text-foreground tracking-tight md:text-5xl">
						NEWS & MEDIA
					</h1>
				</div>

				{articles.length === 0 ? (
					<div className="rounded-md border border-dashed py-16 text-center">
						<p className="text-muted-foreground">
							No news articles yet. Check back later.
						</p>
						<Link
							href="/"
							className="mt-4 inline-block font-semibold text-primary text-sm hover:underline"
						>
							← Back to Home
						</Link>
					</div>
				) : (
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{articles.map((article, index) => (
							<ScrollAnimate key={article.id} delay={index * 100}>
								<Card className="border-border/60 shadow-sm transition-shadow hover:shadow-md">
									<CardHeader className="pt-8 pb-6">
										<div className="mb-4 h-1 w-12 bg-blue-600" />
										<CardTitle className="font-bold text-gray-900 text-lg">
											{article.title}
										</CardTitle>
										<CardDescription className="mt-2 text-gray-600">
											By {article.author?.name ?? "HJRBDA"} •{" "}
											{article.publishedAt
												? new Date(article.publishedAt).toLocaleDateString()
												: new Date(article.createdAt).toLocaleDateString()}
											{article.readTime ? ` • ${article.readTime}` : null}
										</CardDescription>
									</CardHeader>
									<CardContent className="pt-6">
										<p className="mb-6 line-clamp-3 text-muted-foreground leading-relaxed">
											{article.excerpt}
										</p>
										<Link
											href={`/news-media/${article.slug}`}
											className="font-semibold text-primary text-sm hover:underline"
										>
											Read More →
										</Link>
									</CardContent>
								</Card>
							</ScrollAnimate>
						))}
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
}
