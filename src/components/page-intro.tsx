import Link from "next/link";

type BreadcrumbItem = {
	href?: string;
	label: string;
};

type PageIntroProps = {
	eyebrow?: string;
	title: string;
	breadcrumbs: BreadcrumbItem[];
};

export default function PageIntro({
	eyebrow,
	title,
	breadcrumbs,
}: PageIntroProps) {
	return (
		<>
			<nav
				className="mb-8 text-[var(--text-muted)] text-caption"
				aria-label="Breadcrumb"
			>
				{breadcrumbs.map((item, i) => (
					<span key={`${item.label}-${i}`}>
						{i > 0 && <span className="mx-2">/</span>}
						{item.href ? (
							<Link
								href={item.href as never}
								className="transition-colors hover:text-[var(--text-primary)]"
							>
								{item.label}
							</Link>
						) : (
							<span className="text-[var(--text-primary)]">{item.label}</span>
						)}
					</span>
				))}
			</nav>
			<div className="mb-12">
				{eyebrow && (
					<p
						className="mb-3 font-medium text-base uppercase tracking-wider"
						style={{ color: "var(--accent)" }}
					>
						{eyebrow}
					</p>
				)}
				<h1 className="break-words font-bold font-heading text-[var(--text-primary)] text-h1 tracking-tight">
					{title}
				</h1>
			</div>
		</>
	);
}
