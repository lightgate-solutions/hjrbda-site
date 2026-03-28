"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import { Input } from "@/components/ui/input";

export function TenderSearch({
	placeholder = "Search tenders...",
}: {
	placeholder?: string;
}) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();
	const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const handleSearch = (term: string) => {
		if (debounceRef.current) clearTimeout(debounceRef.current);
		debounceRef.current = setTimeout(() => {
			const params = new URLSearchParams(searchParams.toString());
			if (term) {
				params.set("search", term);
				params.set("page", "1");
			} else {
				params.delete("search");
			}
			const href = params.toString() ? `${pathname}?${params.toString()}` : pathname;
			router.replace(href as "/admin/tenders");
		}, 300);
	};

	return (
		<div className="relative">
			<Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
			<Input
				type="text"
				placeholder={placeholder}
				defaultValue={searchParams.get("search") ?? ""}
				onChange={(e) => handleSearch(e.target.value)}
				className="pl-10"
			/>
		</div>
	);
}
