import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ArticleForm } from "@/components/articles/article-form";
import { Button } from "@/components/ui/button";

export default function NewArticlePage() {
	return (
		<div className="container mx-auto max-w-4xl px-4 py-8">
			<div className="mb-8">
				<Button variant="ghost" size="sm" asChild className="mb-4">
					<Link href="/admin/news">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to News
					</Link>
				</Button>
				<h1 className="mb-2 font-bold text-3xl">Create New Article</h1>
				<p className="text-muted-foreground">
					Fill in the details below to create a new article
				</p>
			</div>

			<ArticleForm />
		</div>
	);
}
