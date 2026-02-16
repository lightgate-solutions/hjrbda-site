import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ArticleForm } from "@/components/articles/article-form";
import { Button } from "@/components/ui/button";

export default function NewArticlePage() {
	return (
		<div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
			<div className="mb-8">
				<Button variant="ghost" size="sm" asChild className="mb-4">
					<Link href="/admin/news">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to news
					</Link>
				</Button>
				<h1 className="mb-2 font-bold font-heading text-[var(--text-primary)] text-h1 tracking-tight">
					Create new article
				</h1>
				<p className="text-[var(--text-secondary)] text-body">
					Fill in the details below to create a new article
				</p>
			</div>

			<ArticleForm />
		</div>
	);
}
