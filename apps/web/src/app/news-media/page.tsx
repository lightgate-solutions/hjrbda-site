import { getPublishedArticles } from "@hjrbda-site/db/queries/articles";
import Link from "next/link";
import Footer from "@/components/footer";
import PageIntro from "@/components/page-intro";
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
			{/* Intro with accent strip */}
			<div
				className="border-b py-12 md:py-16"
				style={{
					backgroundColor: "var(--section-warm)",
					borderColor: "var(--card-border)",
				}}
			>
				<div className="container mx-auto px-4 sm:px-6">
					<PageIntro
						eyebrow="News"
						title="News & media"
						breadcrumbs={[
							{ href: "/", label: "Home" },
							{ label: "News & media" },
						]}
					/>
					<p className="mt-4 max-w-2xl text-[var(--text-secondary)] text-body leading-relaxed">
						Latest updates, announcements, and stories from the Hadeija
						Jama&apos;are River Basin Development Authority.
					</p>
				</div>
			</div>

			<div className="container mx-auto px-4 py-16 sm:px-6 md:py-24">
				{articles.length === 0 ? (
					<div
						className="rounded-xl border border-dashed py-16 text-center"
						style={{ borderColor: "var(--card-border)" }}
					>
						<p className="text-[var(--text-secondary)] text-base">
							No news articles yet. Check back later.
						</p>
						<Link
							href="/"
							className="mt-4 inline-block font-medium text-base hover:underline"
							style={{ color: "var(--accent)" }}
						>
							← Back to Home
						</Link>
					</div>
				) : (
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{articles.map((article, index) => (
							<ScrollAnimate key={article.id} delay={index * 100}>
								<Card className="card-institutional overflow-hidden">
									<CardHeader className="pt-8 pb-6">
										<div
											className="mb-4 h-1 w-12 rounded-sm"
											style={{ backgroundColor: "var(--accent)" }}
										/>
										<CardTitle className="font-bold font-heading text-[var(--text-primary)] text-h3">
											{article.title}
										</CardTitle>
										<CardDescription className="mt-2 text-[var(--text-secondary)] text-sm">
											By {article.author?.name ?? "HJRBDA"} •{" "}
											{article.publishedAt
												? new Date(article.publishedAt).toLocaleDateString()
												: new Date(article.createdAt).toLocaleDateString()}
											{article.readTime ? ` • ${article.readTime}` : null}
										</CardDescription>
									</CardHeader>
									<CardContent className="pt-6">
										<p className="mb-4 line-clamp-3 text-[var(--text-secondary)] text-description leading-relaxed">
											{article.excerpt}
										</p>
										<Link
											href={`/news-media/${article.slug}`}
											className="font-medium text-base hover:underline"
											style={{ color: "var(--accent)" }}
										>
											Read more →
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
