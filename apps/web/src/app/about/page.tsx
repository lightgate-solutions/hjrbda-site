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
						About HJRBDA
					</h2>
					<div className="space-y-6">
						<h3 className="font-heading font-semibold text-[var(--text-primary)] text-lg">
							Brief history of HJRBDA
						</h3>
						<p className="text-[var(--text-secondary)] text-body leading-relaxed">
							The Hadeija Jama&apos;are River Basin Development Authority, a
							Parastatal of the Federal Ministry of Water Resources was
							established to embark on, among other functions, the development
							of both surface and underground water resources potentials of the
							nation for multipurpose use but with particular emphasis on the
							development of irrigated agriculture.
						</p>
						<p className="text-[var(--text-secondary)] text-body leading-relaxed">
							The Authority has been working diligently to manage water
							resources and promote sustainable development in the Hadeija
							Jama&apos;are region, focusing on irrigation, water supply, flood
							control, and agricultural development.
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
									To ensure effective and efficient implementation of the
									Nation&apos;s Water Resources Development Policies, through
									optimal exploitation, conservation and overall development of
									the nation&apos;s abundant surface and underground water
									resources potentials, with a view to improving the quality of
									life of every Nigerian particularly those within the Hadeija
									Jama&apos;are Basin of the River Niger.
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
									To serve as a viable and veritable implementing Agency of
									Government in the effective utilization of all the water
									resources potentials with the Hadeija Jama&apos;are Basin with
									a view to improving the quality of lives of the people in the
									areas through development of irrigation agronomy, bulk and
									potable water supply and other water shed management project.
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
								<ul className="list-disc space-y-3 pl-6 text-[var(--text-secondary)] text-body leading-relaxed">
									<li>
										To ensure prompt efficient and effective service delivery to
										our end users.
									</li>
									<li>
										To remain responsive to the demands and aspirations of the
										beneficiaries of our services.
									</li>
									<li>
										To ensure quality service in all aspect of our endeavour and
										interaction with our clients.
									</li>
									<li>
										To uphold firm principles of transparency, accountability
										and reliable service delivery.
									</li>
									<li>
										To abhor all external and internal impediments inimical to
										effective and efficient service delivery.
									</li>
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
