import type { ReactNode } from "react";

export function EmptyState({
	title,
	description,
	icon,
	action,
}: {
	title: string;
	description?: string;
	icon?: ReactNode;
	action?: ReactNode;
}) {
	return (
		<div className="flex flex-col items-center justify-center rounded-md border border-dashed p-12 text-center">
			{icon && <div className="mb-4 text-muted-foreground">{icon}</div>}
			<h3 className="font-medium text-sm">{title}</h3>
			{description && (
				<p className="mt-1 text-muted-foreground text-xs">{description}</p>
			)}
			{action && <div className="mt-4">{action}</div>}
		</div>
	);
}
