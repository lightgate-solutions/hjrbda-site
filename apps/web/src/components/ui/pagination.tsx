import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Pagination({
	currentPage,
	totalPages,
	basePath = "/admin/news",
	queryParams = {},
}: {
	currentPage: number;
	totalPages: number;
	basePath?: string;
	queryParams?: Record<string, string>;
}) {
	if (totalPages <= 1) return null;

	const prevPage = currentPage > 1 ? currentPage - 1 : null;
	const nextPage = currentPage < totalPages ? currentPage + 1 : null;

	const buildUrl = (page: number): string => {
		const params = new URLSearchParams(queryParams);
		params.set("page", String(page));
		const q = params.toString();
		return q ? `${basePath}?${q}` : basePath;
	};

	return (
		<nav className="flex items-center justify-center gap-2">
			{prevPage ? (
				<Button variant="outline" size="sm" asChild>
					<Link href={buildUrl(prevPage) as "/admin/news"}>Previous</Link>
				</Button>
			) : (
				<Button variant="outline" size="sm" disabled>
					Previous
				</Button>
			)}
			<span className="text-muted-foreground text-xs">
				Page {currentPage} of {totalPages}
			</span>
			{nextPage ? (
				<Button variant="outline" size="sm" asChild>
					<Link href={buildUrl(nextPage) as "/admin/news"}>Next</Link>
				</Button>
			) : (
				<Button variant="outline" size="sm" disabled>
					Next
				</Button>
			)}
		</nav>
	);
}
