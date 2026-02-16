import { getPublishedArticles } from "@hjrbda-site/db/queries/articles";
import Link from "next/link";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel";
import ScrollAnimate from "@/components/scroll-animate";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

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
								The Hadeija Jama&apos;are River Basin Development Authority is
								committed to the sustainable development and management of water
								resources in the region.
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
										To ensure effective and efficient implementation of the
										nation&apos;s water resources development policies, through
										optimal exploitation, conservation and overall development
										of the nation&apos;s abundant surface and underground water
										resources potentials, with a view to improving the quality
										of life of every Nigerian particularly those within the
										Hadeija Jama&apos;are Basin of the River Niger.
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
										To serve as a viable and veritable implementing agency of
										Government in the effective utilization of all the water
										resources potentials with the Hadeija Jama&apos;are Basin
										with a view to improving the quality of lives of the people
										through development of irrigation agronomy, bulk and potable
										water supply and other water shed management project.
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
										To ensure prompt efficient and effective service delivery to
										our end users; to remain responsive to the demands and
										aspirations of the beneficiaries; to ensure quality service
										in all aspects of our endeavour and interaction with our
										clients; to uphold firm principles of transparency,
										accountability and reliable service delivery.
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
								id: "surveying",
								title: "Surveying / Hydromet Equipment",
								description:
									"Total Station, Global Navigation Satellites Systems (GNSS) receiver, Apache 5 kit for Bathymetric survey, DJI Phantom 4 Pro Quad Copter Drone, Automatic level, Vale port current meter and Radar Depth Sensor.",
							},
							{
								id: "dam-construction",
								title: "Dam / Weir Construction",
								description:
									"Dam, Weir and Dyke Construction stand at the centre of the function of the HJRBDA.",
							},
							{
								id: "flood-control",
								title: "Flood and Erosion Control",
								description:
									"The HJRBDA has constructed a number of flood and erosion control structures across its area of coverage.",
							},
							{
								id: "agricultural",
								title: "Agricultural Produce",
								description:
									"The HJRBDA also cultivates crops and rears livestock which are sold to generate IGR to the government.",
							},
							{
								id: "ppp",
								title: "Public–Private Partnership",
								description:
									"Public–Private Partnership arrangement for harvesting and processing of dry season paddy produced by the Water Users' Association (WUA).",
							},
							{
								id: "guest-house",
								title: "Guest House",
								description:
									"The HJRBDA also constructs Guest Houses for accommodation purposes.",
							},
						].map((service, index) => (
							<ScrollAnimate key={service.id} delay={index * 50}>
								<Card className="card-institutional overflow-hidden">
									<CardHeader className="pt-8 pb-4 md:pb-6">
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

			{/* Recent Projects */}
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
								Recent Projects
							</h2>
							<p className="mx-auto max-w-3xl text-[var(--text-secondary)] text-lg leading-relaxed md:text-xl">
								The HJRBDA undertakes numerous projects as presented in its
								yearly appropriation. These projects range from dam
								construction, construction of irrigation projects, water supply
								scheme, flood & erosion works...
							</p>
						</div>
					</ScrollAnimate>
					<div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
						{[
							{
								id: "irrigation",
								title: "Irrigation Projects",
								image: "/placeholder-project-1.jpg",
							},
							{
								id: "solar-lights",
								title: "Solar Street Lights",
								image: "/placeholder-project-2.jpg",
							},
							{
								id: "water-supply",
								title: "Water Supply Projects",
								image: "/placeholder-project-3.jpg",
							},
							{
								id: "dam-construction",
								title: "Dam Construction",
								image: "/placeholder-project-4.jpg",
							},
						].map((project, index) => (
							<ScrollAnimate key={project.id} delay={index * 75}>
								<Card className="card-institutional overflow-hidden">
									<div
										className="flex h-44 items-center justify-center md:h-48"
										style={{ backgroundColor: "var(--accent-muted)" }}
									>
										<span
											className="text-center font-medium text-sm"
											style={{ color: "var(--accent)" }}
										>
											{project.title}
										</span>
									</div>
									<CardHeader
										className="pt-6"
										style={{ backgroundColor: "var(--card-bg)" }}
									>
										<CardTitle className="font-bold font-heading text-[var(--text-primary)] text-lg">
											{project.title}
										</CardTitle>
									</CardHeader>
								</Card>
							</ScrollAnimate>
						))}
					</div>
					<ScrollAnimate delay={300}>
						<div className="mt-12 text-center">
							<Button
								size="lg"
								className="rounded-lg px-8 py-5 font-semibold text-white shadow-md transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-lg md:px-10 md:py-6 md:text-lg"
								style={{ backgroundColor: "var(--accent)" }}
								asChild
							>
								<Link href="/key-projects">Show more projects</Link>
							</Button>
						</div>
					</ScrollAnimate>
				</div>
			</section>

			<Footer />
		</div>
	);
}
