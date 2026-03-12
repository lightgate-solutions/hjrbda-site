import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel";
import ProjectOfficesCarousel from "@/components/project-offices-carousel";
import ScrollAnimate from "@/components/scroll-animate";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getPublishedArticles } from "@/lib/db/queries/articles";

export const dynamic = "force-dynamic";

export default async function Home() {
	const latestArticles = await getPublishedArticles({ limit: 3 });

	return (
		<div className="flex min-h-screen flex-col">
			<HeroCarousel />

			{/* Welcome */}
			<section
				className="py-16 md:py-24"
				style={{ backgroundColor: "var(--section-warm)" }}
			>
				<div className="container mx-auto px-4 sm:px-6">
					<ScrollAnimate>
						<div className="mx-auto max-w-3xl text-center">
							<p
								className="mb-3 font-medium text-sm uppercase tracking-[0.2em]"
								style={{ color: "var(--accent)" }}
							>
								Welcome
							</p>
							<h2 className="mb-5 font-bold font-heading text-[var(--text-primary)] text-h2 tracking-tight">
								Welcome to HJRBDA
							</h2>
							<p className="mx-auto font-normal text-[var(--text-secondary)] text-lg leading-relaxed md:text-xl">
								The Hadejia Jama&apos;are River Basin Development Authority
								(H-JRBDA) is committed to the comprehensive development of
								surface and underground water resources for irrigated
								agriculture, water supply and other uses within the
								Hadejia-Jama&apos;are River Basin.
							</p>
						</div>
					</ScrollAnimate>
				</div>
			</section>

			{/* Vision, Mission, Mandate — editorial block */}
			<section
				className="py-16 md:py-24"
				style={{ backgroundColor: "var(--section-white)" }}
			>
				<div className="container mx-auto px-4 sm:px-6">
					<ScrollAnimate>
						<div className="mb-12 text-center md:mb-16">
							<p
								className="mb-3 font-medium text-base uppercase tracking-[0.2em]"
								style={{ color: "var(--accent)" }}
							>
								Our foundation
							</p>
							<h2 className="font-bold font-heading text-[var(--text-primary)] text-h2 tracking-tight">
								Vision, Mission & Mandate
							</h2>
						</div>
					</ScrollAnimate>
					<div className="grid gap-10 md:grid-cols-3 md:gap-12">
						<ScrollAnimate delay={0}>
							<div className="flex gap-4">
								<div
									className="mt-1 h-auto w-1 shrink-0 self-stretch rounded-full"
									style={{ backgroundColor: "var(--accent)" }}
									aria-hidden
								/>
								<div>
									<h3 className="mb-3 font-bold font-heading text-[var(--text-primary)] text-h3">
										Vision
									</h3>
									<p className="text-[var(--text-secondary)] text-body leading-relaxed">
										To be a leading River Basin Development Authority in the
										sustainable development and management of water resources to
										stimulate agricultural growth and economic self-reliance of
										the nation in line with the provision of the Nation water
										resources masterplan.
									</p>
								</div>
							</div>
						</ScrollAnimate>
						<ScrollAnimate delay={100}>
							<div className="flex gap-4">
								<div
									className="mt-1 h-auto w-1 shrink-0 self-stretch rounded-full"
									style={{ backgroundColor: "var(--accent)" }}
									aria-hidden
								/>
								<div>
									<h3 className="mb-3 font-bold font-heading text-[var(--text-primary)] text-h3">
										Mission
									</h3>
									<p className="text-[var(--text-secondary)] text-body leading-relaxed">
										Comprehensive development of surface and underground water
										resources for irrigated agriculture, water supply and other
										uses within the Hadejia-Jama&apos;are River Basin.
									</p>
								</div>
							</div>
						</ScrollAnimate>
						<ScrollAnimate delay={200}>
							<div className="flex gap-4">
								<div
									className="mt-1 h-auto w-1 shrink-0 self-stretch rounded-full"
									style={{ backgroundColor: "var(--accent)" }}
									aria-hidden
								/>
								<div>
									<h3 className="mb-3 font-bold font-heading text-[var(--text-primary)] text-h3">
										Mandate
									</h3>
									<p className="text-[var(--text-secondary)] text-body leading-relaxed">
										Development of surface and underground water resources;
										flood and erosion control; construction and maintenance of
										dams, irrigation and drainage; water supply; contract works;
										and plant and equipment hire within the
										Hadejia-Jama&apos;are River Basin.
									</p>
								</div>
							</div>
						</ScrollAnimate>
					</div>
					<ScrollAnimate delay={300}>
						<p className="mt-10 text-center md:mt-12">
							<Link
								href="/about"
								className="font-medium text-body hover:underline"
								style={{ color: "var(--accent)" }}
							>
								Full Vision, Mission & Mandate on About →
							</Link>
						</p>
					</ScrollAnimate>
				</div>
			</section>

			{/* Latest News */}
			<section
				className="py-16 md:py-24"
				style={{ backgroundColor: "var(--section-alt)" }}
			>
				<div className="container mx-auto px-4 sm:px-6">
					<ScrollAnimate>
						<div className="mb-12 text-center md:mb-16">
							<p
								className="mb-3 font-medium text-sm uppercase tracking-[0.2em]"
								style={{ color: "var(--accent)" }}
							>
								Updates
							</p>
							<h2 className="font-bold font-heading text-[var(--text-primary)] text-h2 tracking-tight">
								Latest News
							</h2>
						</div>
					</ScrollAnimate>
					<div className="grid gap-6 md:grid-cols-3 md:gap-8">
						{latestArticles.length === 0 ? (
							<div
								className="col-span-full rounded-xl border border-dashed py-12 text-center"
								style={{
									borderColor: "var(--card-border)",
									backgroundColor: "var(--card-bg)",
								}}
							>
								<p className="text-[var(--text-muted)] text-base">
									No news articles yet.
								</p>
								<Button
									className="mt-4 rounded-lg font-medium text-white shadow-md hover:shadow-lg"
									size="sm"
									style={{ backgroundColor: "var(--accent)" }}
									asChild
								>
									<Link href="/news-media">View News & Media</Link>
								</Button>
							</div>
						) : (
							latestArticles.map((article, index) => (
								<ScrollAnimate key={article.id} delay={index * 100}>
									<Card className="card-institutional overflow-hidden">
										<CardHeader
											className="border-b pb-4"
											style={{ borderColor: "var(--card-border)" }}
										>
											<CardTitle className="font-bold font-heading text-[var(--text-primary)] text-h3">
												{article.title}
											</CardTitle>
											<CardDescription className="mt-2 text-[var(--text-muted)] text-sm">
												By {article.author?.name ?? "HJRBDA"} •{" "}
												{(article.publishedAt ?? article.createdAt)
													? new Date(
															article.publishedAt ?? article.createdAt,
														).toLocaleDateString()
													: ""}
											</CardDescription>
										</CardHeader>
										<CardContent className="pt-6">
											<p className="mb-4 line-clamp-3 text-[var(--text-secondary)] text-description leading-relaxed">
												{article.excerpt}
											</p>
											<Link
												href={`/news-media/${article.slug}` as never}
												className="font-medium hover:underline"
												style={{ color: "var(--accent)" }}
											>
												Read more →
											</Link>
										</CardContent>
									</Card>
								</ScrollAnimate>
							))
						)}
					</div>
					{latestArticles.length > 0 && (
						<div className="mt-10 text-center">
							<Button
								variant="outline"
								size="sm"
								className="rounded-lg border-2 font-medium transition-colors hover:bg-[var(--accent-light)]"
								style={{
									borderColor: "var(--accent)",
									color: "var(--accent)",
								}}
								asChild
							>
								<Link href="/news-media">View all news →</Link>
							</Button>
						</div>
					)}
				</div>
			</section>

			{/* Our Services */}
			<section
				id="services"
				className="py-16 md:py-24"
				style={{ backgroundColor: "var(--section-white)" }}
			>
				<div className="container mx-auto px-4 sm:px-6">
					<ScrollAnimate>
						<div className="mb-12 text-center md:mb-16">
							<p
								className="mb-3 font-medium text-sm uppercase tracking-[0.2em]"
								style={{ color: "var(--warm-accent)" }}
							>
								What we do
							</p>
							<h2 className="font-bold font-heading text-[var(--text-primary)] text-h2 tracking-tight">
								Our Services
							</h2>
						</div>
					</ScrollAnimate>
					<div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
						{[
							{
								id: "water-resources",
								title: "Water resources development",
								description:
									"Undertaking a comprehensive development of underground and surface water resources for multiple purposes, emphasising the provision of Irrigation water.",
								image: "/WhatsApp Image 2026-03-07 at 15.37.39 (1).jpeg",
							},
							{
								id: "flood-erosion",
								title: "Flood and erosion control",
								description:
									"Undertaking schemes for flood and erosion control and watershed management, including afforestation and orchard development.",
								image: "/WhatsApp Image 2026-03-07 at 15.37.25.jpeg",
							},
							{
								id: "dams-irrigation",
								title: "Dams, irrigation and drainage",
								description:
									"Construction and maintenance of dams dykes polders, wells, boreholes, irrigation and drainage systems.",
								image: "/WhatsApp Image 2026-03-07 at 15.37.39.jpeg",
							},
							{
								id: "water-supply",
								title: "Water from reservoirs",
								description:
									"Providing water from reservoirs and Lakes for irrigation purposes to farmers and urban and rural water supply.",
								image: "/WhatsApp Image 2026-03-07 at 15.37.30 (2).jpeg",
							},
							{
								id: "water-legislation",
								title: "Water legislation and master plan",
								description:
									"Implementing water legislation and control measures and development, and updating water resources master plan of the areas of Authority's development and management.",
								image: "/WhatsApp Image 2026-03-07 at 15.37.33 (1).jpeg",
							},
							{
								id: "contract-works",
								title: "Contract works",
								description:
									"Undertaking jobs on a contract basis for Federal, State and Local Governments and private clients.",
								image: "/WhatsApp Image 2026-03-07 at 15.37.29.jpeg",
							},
							{
								id: "small-schemes",
								title: "Small irrigation schemes",
								description:
									"Construction of small irrigation schemes and small earth dams.",
								image: "/WhatsApp Image 2026-03-07 at 15.37.28.jpeg",
							},
							{
								id: "irrigation-maintenance",
								title: "Irrigation infrastructure maintenance",
								description:
									"Maintenance of irrigation infrastructures (Water Conveyance System).",
								image: "/WhatsApp Image 2026-03-07 at 15.37.23.jpeg",
							},
							{
								id: "feeder-roads",
								title: "Feeder roads",
								description:
									"Construction and maintenance of feeder roads within the schemes.",
								image: "/WhatsApp Image 2026-03-07 at 15.37.30 (1).jpeg",
							},
							{
								id: "hydromet",
								title: "Hydro metrological stations",
								description:
									"Establishment and management of Hydro metrological stations within the Basin.",
								image: "/WhatsApp Image 2026-03-07 at 15.37.23 (2).jpeg",
							},
							{
								id: "plant-hire",
								title: "Plant and equipment hire",
								description: "Plant and equipment hire.",
								image: "/WhatsApp Image 2026-03-07 at 15.37.41 (2).jpeg",
							},
						].map((service, index) => (
							<ScrollAnimate key={service.id} delay={index * 50}>
								<Card className="card-institutional min-w-0 overflow-hidden pt-0">
									<div className="relative h-56 w-full overflow-hidden">
										<Image
											src={service.image}
											alt={service.title}
											fill
											className="object-cover"
										/>
									</div>
									<CardHeader className="pt-6 pb-4 sm:pt-8 md:pb-6">
										<div
											className="mb-4 h-1 w-12 rounded-sm"
											style={{ backgroundColor: "var(--accent)" }}
										/>
										<CardTitle className="font-bold font-heading text-[var(--text-primary)] text-h3">
											{service.title}
										</CardTitle>
									</CardHeader>
									<CardContent className="pt-0 pb-8">
										<p className="text-[var(--text-secondary)] text-description leading-relaxed">
											{service.description}
										</p>
									</CardContent>
								</Card>
							</ScrollAnimate>
						))}
					</div>
				</div>
			</section>

			{/* Project offices carousel */}
			<section
				className="py-16 md:py-24"
				style={{ backgroundColor: "var(--section-warm)" }}
			>
				<div className="container mx-auto px-4 sm:px-6">
					<ScrollAnimate>
						<div className="mb-10 text-center md:mb-12">
							<p
								className="mb-3 font-medium text-sm uppercase tracking-[0.2em]"
								style={{ color: "var(--accent)" }}
							>
								Our work
							</p>
							<h2 className="mb-5 font-bold font-heading text-[var(--text-primary)] text-h2 tracking-tight">
								Project offices
							</h2>
							<p className="mx-auto max-w-3xl text-[var(--text-secondary)] text-lg leading-relaxed md:text-xl">
								Apart from the four established Directorates, the Authority has
								Project areas that provide services within its catchment areas
								of Kano, Jigawa and two-thirds of Bauchi states.
							</p>
						</div>
					</ScrollAnimate>
					<div className="mx-auto max-w-2xl">
						<ProjectOfficesCarousel />
					</div>
					<ScrollAnimate delay={200}>
						<div className="mt-12 text-center">
							<Button
								size="lg"
								className="rounded-lg px-8 py-5 font-semibold text-white shadow-md transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-lg md:px-10 md:py-6 md:text-lg"
								style={{ backgroundColor: "var(--accent)" }}
								asChild
							>
								<Link href="/key-projects">View all project offices</Link>
							</Button>
						</div>
					</ScrollAnimate>
				</div>
			</section>

			<Footer />
		</div>
	);
}
