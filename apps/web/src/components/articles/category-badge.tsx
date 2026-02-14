import type { ArticleCategory } from "@/lib/types/articles";
import { cn } from "@/lib/utils";

export function CategoryBadge({
	category,
	className,
}: {
	category: ArticleCategory;
	className?: string;
}) {
	return (
		<span
			className={cn(
				"inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 font-medium text-primary text-xs",
				className,
			)}
		>
			{category}
		</span>
	);
}
