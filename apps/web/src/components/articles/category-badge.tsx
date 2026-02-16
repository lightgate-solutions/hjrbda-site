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
				"inline-flex items-center rounded-md px-2 py-0.5 font-medium text-xs",
				className,
			)}
			style={{
				backgroundColor: "var(--accent-light)",
				color: "var(--accent)",
			}}
		>
			{category}
		</span>
	);
}
