import Footer from "@/components/footer";
import PageIntro from "@/components/page-intro";
import ScrollAnimate from "@/components/scroll-animate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
				<section
					className="mb-20 rounded-lg px-6 py-8 md:px-8"
					style={{ backgroundColor: "var(--section-alt)" }}
				>
					<h2 className="mb-8 font-bold font-heading text-[var(--text-primary)] text-h2 tracking-tight">
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
					className="mb-20 rounded-lg px-6 py-8 md:px-8"
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
					className="mb-20 rounded-lg px-6 py-8 md:px-8"
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
					className="mb-20 rounded-lg px-6 py-8 md:px-8"
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
