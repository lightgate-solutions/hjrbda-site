import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import LeaderPhoto from "@/components/leader-photo";
import PageIntro from "@/components/page-intro";
import ScrollAnimate from "@/components/scroll-animate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDirectorateBySlug, getDirectorateSlugs } from "@/data/departments";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
	return getDirectorateSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const dir = getDirectorateBySlug(slug);
	if (!dir) return { title: "Directorate | HJRBDA" };
	return {
		title: `${dir.name} | About | HJRBDA`,
		description: dir.shortDescription,
	};
}

export default async function DepartmentPage({ params }: Props) {
	const { slug } = await params;
	const directorate = getDirectorateBySlug(slug);
	if (!directorate) notFound();

	const breadcrumbs = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ label: directorate.name },
	];

	return (
		<div className="flex min-h-screen flex-col">
			<div
				className="border-b py-12 md:py-16"
				style={{
					backgroundColor: "var(--section-alt)",
					borderColor: "var(--card-border)",
				}}
			>
				<div className="container mx-auto px-4 sm:px-6">
					<PageIntro
						eyebrow="Directorate"
						title={directorate.name}
						breadcrumbs={breadcrumbs}
					/>
				</div>
			</div>

			<div className="container mx-auto px-4 py-16 sm:px-6 md:py-24">
				{/* Executive Director */}
				<section
					className="mb-20 rounded-lg px-6 py-8 md:px-8"
					style={{ backgroundColor: "var(--section-alt)" }}
				>
					<ScrollAnimate>
						<h2 className="mb-8 font-bold font-heading text-[var(--text-primary)] text-h2 tracking-tight">
							Executive Director
						</h2>
						<div className="flex flex-col gap-8 sm:flex-row sm:items-start">
							<LeaderPhoto
								src={directorate.ed.image}
								alt={directorate.ed.name}
								fallbackInitials={directorate.ed.name
									.split(" ")
									.map((w) => w[0])
									.filter(Boolean)
									.slice(0, 2)
									.join("")
									.toUpperCase()}
							/>
							<div>
								<p
									className="mb-1 font-medium text-[var(--accent)] uppercase tracking-wider"
									style={{ fontSize: "var(--text-caption)" }}
								>
									{directorate.ed.title}
								</p>
								<h3 className="mb-4 font-bold font-heading text-[var(--text-primary)] text-h3">
									{directorate.ed.name}
								</h3>
								<p className="mb-4 text-[var(--text-secondary)] text-body leading-relaxed">
									{directorate.shortDescription}
								</p>
								{(directorate.ed.phone || directorate.ed.email) && (
									<ul className="space-y-1 text-[var(--text-muted)] text-caption">
										{directorate.ed.phone && (
											<li>
												<span className="font-medium">Phone:</span>{" "}
												{directorate.ed.phone}
											</li>
										)}
										{directorate.ed.email && (
											<li>
												<span className="font-medium">Email:</span>{" "}
												<a
													href={`mailto:${directorate.ed.email}`}
													className="text-[var(--accent)] hover:underline"
												>
													{directorate.ed.email}
												</a>
											</li>
										)}
									</ul>
								)}
							</div>
						</div>
					</ScrollAnimate>
				</section>

				{/* Division heads */}
				<section
					className="mb-20 rounded-lg px-6 py-8 md:px-8"
					style={{ backgroundColor: "var(--section-warm)" }}
				>
					<ScrollAnimate delay={100}>
						<h2 className="mb-8 font-bold font-heading text-[var(--text-primary)] text-h2 tracking-tight">
							Heads of divisions
						</h2>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{directorate.divisions.map((head) => (
								<Card
									key={head.division}
									className="card-institutional overflow-hidden border border-[var(--card-border)]"
								>
									<CardHeader className="pb-2">
										<div
											className="mb-3 h-1 w-12 rounded-sm"
											style={{ backgroundColor: "var(--accent)" }}
										/>
										<CardTitle className="font-heading font-semibold text-[var(--text-primary)] text-h3">
											{head.name}
										</CardTitle>
									</CardHeader>
									<CardContent className="pt-0">
										<p className="mb-3 text-[var(--text-secondary)] text-body">
											{head.division}
										</p>
										{(head.phone || head.email) && (
											<ul className="space-y-1 text-[var(--text-muted)] text-caption">
												{head.phone && <li>Phone: {head.phone}</li>}
												{head.email && (
													<li>
														<a
															href={`mailto:${head.email}`}
															className="text-[var(--accent)] hover:underline"
														>
															{head.email}
														</a>
													</li>
												)}
											</ul>
										)}
									</CardContent>
								</Card>
							))}
						</div>
					</ScrollAnimate>
				</section>

				{/* Back to About */}
				<section
					className="rounded-lg px-6 py-8 md:px-8"
					style={{ backgroundColor: "var(--section-alt)" }}
				>
					<Link
						href="/about"
						className="inline-flex items-center gap-2 font-medium text-[var(--accent)] text-body hover:underline"
					>
						← Back to About
					</Link>
				</section>
			</div>
			<Footer />
		</div>
	);
}
