import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import LeaderPhoto from "@/components/leader-photo";
import PageIntro from "@/components/page-intro";
import ScrollAnimate from "@/components/scroll-animate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { directorates, managingDirector } from "@/data/departments";

export default function AboutPage() {
	return (
		<div className="flex min-h-screen flex-col">
			{/* Intro with accent strip */}
			<div
				className="border-b py-12 md:py-16"
				style={{
					backgroundColor: "var(--section-alt)",
					borderColor: "var(--card-border)",
				}}
			>
				<div className="container mx-auto px-4 sm:px-6">
					<PageIntro
						eyebrow="About"
						title="About us"
						breadcrumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
					/>
				</div>
			</div>

			<div className="container mx-auto px-4 py-16 sm:px-6 md:py-24">
				{/* Managing Director / CEO */}
				<section
					className="mb-16 rounded-lg px-4 py-6 sm:px-6 sm:py-8 md:mb-20 md:px-8"
					style={{ backgroundColor: "var(--section-alt)" }}
				>
					<ScrollAnimate>
						<h2 className="mb-6 font-bold font-heading text-[var(--text-primary)] text-h2 tracking-tight sm:mb-8">
							Leadership
						</h2>
						<div className="flex flex-col gap-8 sm:flex-row sm:items-start">
							<LeaderPhoto
								src={managingDirector.image}
								alt={managingDirector.name}
								fallbackInitials="RSY"
							/>
							<div>
								<p
									className="mb-1 font-medium text-[var(--accent)] uppercase tracking-wider"
									style={{ fontSize: "var(--text-caption)" }}
								>
									{managingDirector.title}
								</p>
								<h3 className="mb-2 font-bold font-heading text-[var(--text-primary)] text-h3">
									{managingDirector.name}
								</h3>
								{managingDirector.qualification && (
									<p className="mb-4 text-[var(--text-muted)] text-body">
										{managingDirector.qualification}
									</p>
								)}
								<p className="text-[var(--text-secondary)] text-body leading-relaxed">
									The Authority&apos;s Chief Executive Officer is the Managing
									Director, responsible for the overall leadership of H-JRBDA.
								</p>
							</div>
						</div>
					</ScrollAnimate>
				</section>

				{/* Directorates (clickable departments) */}
				<section
					className="mb-16 rounded-lg px-4 py-6 sm:px-6 sm:py-8 md:mb-20 md:px-8"
					style={{ backgroundColor: "var(--section-warm)" }}
				>
					<h2 className="mb-6 font-bold font-heading text-[var(--text-primary)] text-h2 tracking-tight sm:mb-8">
						Directorates
					</h2>
					<p className="mb-8 text-[var(--text-secondary)] text-body leading-relaxed sm:mb-10">
						The Authority has four Directorates. Each is headed by an Executive
						Director. Click a directorate to view details and division heads.
					</p>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{directorates.map((dir) => (
							<ScrollAnimate key={dir.slug} delay={dir.slug.length * 50}>
								<Link
									href={`/about/departments/${dir.slug}`}
									className="block h-full transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
								>
									<Card className="card-institutional h-full overflow-hidden border-2 border-[var(--card-border)] shadow-md transition-shadow hover:border-[var(--accent)]/30 hover:shadow-lg">
										<div className="relative -mt-4 aspect-[4/3] w-full overflow-hidden">
											<Image
												src={dir.ed.image}
												alt={dir.ed.name}
												fill
												className="object-cover object-top"
											/>
										</div>
										<CardHeader className="pb-2">
											<div
												className="mb-3 h-1 w-12 rounded-sm"
												style={{ backgroundColor: "var(--accent)" }}
											/>
											<CardTitle className="font-bold font-heading text-[var(--text-primary)] text-h3">
												{dir.name}
											</CardTitle>
										</CardHeader>
										<CardContent className="pt-0">
											<p className="mb-4 line-clamp-3 text-[var(--text-secondary)] text-body leading-relaxed">
												{dir.shortDescription}
											</p>
											<div className="flex flex-col gap-1 border-[var(--card-border)] border-t pt-4">
												<p className="font-semibold text-[var(--text-primary)] text-sm">
													{dir.ed.name}
												</p>
												<p className="text-[var(--text-muted)] text-caption">
													{dir.ed.title}
												</p>
											</div>
											<span className="mt-4 inline-flex items-center gap-1 font-medium text-[var(--accent)] text-sm">
												View directorate
												<ChevronRight className="h-4 w-4" aria-hidden />
											</span>
										</CardContent>
									</Card>
								</Link>
							</ScrollAnimate>
						))}
					</div>
				</section>

				<section
					className="mb-16 rounded-lg px-4 py-6 sm:px-6 sm:py-8 md:mb-20 md:px-8"
					style={{ backgroundColor: "var(--section-alt)" }}
				>
					<h2 className="mb-6 font-bold font-heading text-[var(--text-primary)] text-h2 tracking-tight sm:mb-8">
						About H-JRBDA
					</h2>
					<div className="space-y-6">
						<h3 className="font-heading font-semibold text-[var(--text-primary)] text-lg">
							About the Hadejia-Jama&apos;are River Basin Development Authority,
							Kano (H-JRBDA)
						</h3>
						<p className="text-[var(--text-secondary)] text-body leading-relaxed">
							Hadejia-Jama&apos;are River Basin Development Authority was
							established in 1976 under Decree No. 25 (now Act) titled
							&quot;River Basins Development Authorities Decree&quot; and
							consolidated by Decrees No. 87 of 1979 and No. 35 of 1987. The
							Authority derived its name from the two rivers, River Hadejia in
							Kano and Jigawa States and River Jama&apos;are in Bauchi State; it
							covers an area of 45,000km² (the whole of Kano and the Jigawa
							States and about two-thirds of Bauchi State) with an irrigation
							development potential of about 240,000 hectares within the Valleys
							of Hadejia and Jama&apos;are Rivers. The main activities of the
							Authority are the development of underground and surface water
							resources and provision of access to water for all the people
							within the Basin for agriculture, domestic and other uses in a
							sustainable way.
						</p>
					</div>
				</section>

				<section
					id="vision"
					className="mb-16 rounded-lg px-4 py-6 sm:px-6 sm:py-8 md:mb-20 md:px-8"
					style={{ backgroundColor: "var(--section-warm)" }}
				>
					<ScrollAnimate>
						<Card className="card-institutional overflow-hidden border-2 border-[var(--accent)]/20">
							<CardHeader className="pt-8 pb-6">
								<div
									className="mb-4 h-1 w-16 rounded-sm"
									style={{ backgroundColor: "var(--accent)" }}
								/>
								<CardTitle className="font-bold font-heading text-[var(--text-primary)] text-h3">
									Our vision
								</CardTitle>
							</CardHeader>
							<CardContent className="pt-0 pb-8">
								<p className="text-[var(--text-secondary)] text-body leading-relaxed">
									To be a leading River Basin Development Authority in the
									sustainable development and management of water resources to
									stimulate agricultural growth and economic self-reliance of
									the nation in line with the provision of the Nation water
									resources masterplan.
								</p>
							</CardContent>
						</Card>
					</ScrollAnimate>
				</section>

				<section
					id="mission"
					className="mb-16 rounded-lg px-4 py-6 sm:px-6 sm:py-8 md:mb-20 md:px-8"
					style={{ backgroundColor: "var(--section-alt)" }}
				>
					<ScrollAnimate delay={100}>
						<Card
							className="card-institutional overflow-hidden"
							style={{
								borderLeft: "4px solid var(--warm-accent)",
							}}
						>
							<CardHeader className="pt-8 pb-6">
								<div
									className="mb-4 h-1 w-16 rounded-sm"
									style={{ backgroundColor: "var(--warm-accent)" }}
								/>
								<CardTitle className="font-bold font-heading text-[var(--text-primary)] text-h3">
									Our mission
								</CardTitle>
							</CardHeader>
							<CardContent className="pt-0 pb-8">
								<p className="text-[var(--text-secondary)] text-body leading-relaxed">
									Comprehensive development of surface and underground water
									resources for irrigated agriculture, water supply and other
									uses within the Hadejia-Jama&apos;are River Basin.
								</p>
							</CardContent>
						</Card>
					</ScrollAnimate>
				</section>

				<section
					id="mandate"
					className="mb-16 rounded-lg px-4 py-6 sm:px-6 sm:py-8 md:mb-20 md:px-8"
					style={{ backgroundColor: "var(--section-warm)" }}
				>
					<ScrollAnimate delay={200}>
						<Card className="card-institutional overflow-hidden shadow-lg">
							<CardHeader className="pt-8 pb-6">
								<div
									className="mb-4 h-1 w-16 rounded-sm"
									style={{ backgroundColor: "var(--accent)" }}
								/>
								<CardTitle className="font-bold font-heading text-[var(--text-primary)] text-h3">
									Our mandate
								</CardTitle>
							</CardHeader>
							<CardContent className="pt-0 pb-8">
								<p className="mb-4 text-[var(--text-secondary)] text-body leading-relaxed">
									The following are the mandates/services rendered by the
									Authority:
								</p>
								<ul className="list-disc space-y-3 pl-6 text-[var(--text-secondary)] text-body leading-relaxed">
									<li>
										Undertaking a comprehensive development of underground and
										surface water resources for multiple purposes, emphasising
										the provision of Irrigation water.
									</li>
									<li>
										Undertaking schemes for flood and erosion control and
										watershed management, including afforestation and orchard
										development.
									</li>
									<li>
										Construction and maintenance of dams dykes polders, wells,
										boreholes, irrigation and drainage systems.
									</li>
									<li>
										Providing water from reservoirs and Lakes for irrigation
										purposes to farmers and urban and rural water supply.
									</li>
									<li>
										Implementing water legislation and control measures and
										development, and updating water resources master plan of the
										areas of Authority&apos;s development and management.
									</li>
									<li>
										Undertaking jobs on a contract basis for Federal, State and
										Local Governments and private clients.
									</li>
									<li>
										Construction of small irrigation schemes and small earth
										dams.
									</li>
									<li>
										Maintenance of irrigation infrastructures (Water Conveyance
										System).
									</li>
									<li>
										Construction and maintenance of feeder roads within the
										schemes.
									</li>
									<li>
										Establishment and management of Hydro metrological stations
										within the Basin.
									</li>
									<li>Plant and equipment hire.</li>
								</ul>
							</CardContent>
						</Card>
					</ScrollAnimate>
				</section>
			</div>
			<Footer />
		</div>
	);
}
