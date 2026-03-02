import type * as React from "react";

import { cn } from "@/lib/utils";

function Select({
	className,
	children,
	...props
}: React.ComponentProps<"select">) {
	return (
		<select
			data-slot="select"
			className={cn(
				"h-11 w-full rounded-md border border-input bg-white px-3 py-2.5 text-base outline-none transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive dark:bg-input/30",
				className,
			)}
			{...props}
		>
			{children}
		</select>
	);
}

export { Select };
