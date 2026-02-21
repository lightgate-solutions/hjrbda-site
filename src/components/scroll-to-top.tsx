"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scrolls the window to the top when the route (pathname) changes.
 * Fixes Next.js client-side navigation preserving the previous scroll position.
 */
export default function ScrollToTop() {
	const pathname = usePathname();

	// pathname is required: we need to re-run when route changes to scroll to top
	// biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger for scroll on navigation
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}
