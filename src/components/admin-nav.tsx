import { LayoutDashboard, Newspaper, ScrollText } from "lucide-react";
import Link from "next/link";

type BreadcrumbItem = { href?: string; label: string };

export function AdminNav({ breadcrumbs }: { breadcrumbs: BreadcrumbItem[] }) {
	return (
		<header
			className="border-b bg-white py-4"
			style={{ borderColor: "var(--card-border)" }}
		>
			<div className="container mx-auto px-4 sm:px-6">
				<nav
					className="flex flex-wrap items-center justify-between gap-4"
					aria-label="Admin navigation"
				>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/admin"
							className="font-semibold text-[var(--text-primary)] text-base hover:text-[var(--accent)]"
						>
							Admin
						</Link>
						<span className="text-[var(--text-muted)]">/</span>
						<div className="flex flex-wrap items-center gap-2 text-[var(--text-muted)] text-sm">
							{breadcrumbs.map((item, i) => (
								<span
									key={`${item.label}-${i}`}
									className="flex items-center gap-2"
								>
									{i > 0 && (
										<span className="text-[var(--card-border)]">/</span>
									)}
									{item.href ? (
										<Link
											href={
												item.href as
													| "/admin/news"
													| "/admin/tenders"
													| "/admin/settings"
											}
											className="transition-colors hover:text-[var(--text-primary)] hover:underline"
										>
											{item.label}
										</Link>
									) : (
										<span className="font-medium text-[var(--text-primary)]">
											{item.label}
										</span>
									)}
								</span>
							))}
						</div>
					</div>
					<div className="flex flex-shrink-0 items-center gap-1 sm:gap-2">
						<Link
							href="/admin"
							className="flex items-center gap-2 rounded-md px-3 py-3 font-medium text-sm transition-colors hover:bg-[var(--section-alt)] sm:px-3 sm:py-2"
							style={{ color: "var(--text-secondary)" }}
						>
							<LayoutDashboard className="h-4 w-4 shrink-0" aria-hidden />
							<span className="hidden sm:inline">Dashboard</span>
						</Link>
						<Link
							href="/admin/news"
							className="flex items-center gap-2 rounded-md px-3 py-3 font-medium text-sm transition-colors hover:bg-[var(--section-alt)] sm:px-3 sm:py-2"
							style={{ color: "var(--text-secondary)" }}
						>
							<Newspaper className="h-4 w-4 shrink-0" aria-hidden />
							<span className="hidden sm:inline">News</span>
						</Link>
						<Link
							href="/admin/tenders"
							className="flex items-center gap-2 rounded-md px-3 py-3 font-medium text-sm transition-colors hover:bg-[var(--section-alt)] sm:px-3 sm:py-2"
							style={{ color: "var(--text-secondary)" }}
						>
							<ScrollText className="h-4 w-4 shrink-0" aria-hidden />
							<span className="hidden sm:inline">Tenders</span>
						</Link>
					</div>
				</nav>
			</div>
		</header>
	);
}
