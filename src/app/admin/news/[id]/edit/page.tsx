import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleForm } from "@/components/articles/article-form";
import { Button } from "@/components/ui/button";
import { getArticleById } from "@/lib/actions/articles";

interface EditArticlePageProps {
	params: Promise<{ id: string }>;
}

export default async function EditArticlePage({
	params,
}: EditArticlePageProps) {
	const { id } = await params;
	const article = await getArticleById(id);

	if (!article) {
		notFound();
	}

	return (
		<div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
			<div className="mb-8">
				<Button variant="ghost" size="sm" asChild className="mb-4">
					<Link href="/admin/news">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to news
					</Link>
				</Button>
				<h1 className="mb-2 font-bold font-heading text-2xl text-[var(--text-primary)] tracking-tight">
					Edit article
				</h1>
				<p className="text-[var(--text-secondary)] text-body">
					Update the article details below
				</p>
			</div>

			<ArticleForm
				article={{
					id: article.id,
					title: article.title,
					excerpt: article.excerpt,
					content: article.content,
					coverImageUrl: article.coverImageUrl,
					category: article.category,
					status: article.status,
					featured: article.featured,
				}}
				isEditing
			/>
		</div>
	);
}
