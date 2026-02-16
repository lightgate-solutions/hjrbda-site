import Footer from "@/components/footer";
import PageIntro from "@/components/page-intro";
import ScrollAnimate from "@/components/scroll-animate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function KeyProjectsPage() {
	const projects = [
		{
			id: 1,
			title: "Irrigation Projects",
			description:
				"Development of comprehensive irrigation schemes to support agricultural productivity in the region.",
			category: "Agriculture",
		},
		{
			id: 2,
			title: "Solar Street Lights",
			description:
				"Installation of solar-powered street lighting systems in rural communities.",
			category: "Infrastructure",
		},
		{
			id: 3,
			title: "Water Supply Projects",
			description:
				"Construction of water supply schemes to provide potable water to communities across the region.",
			category: "Water Supply",
		},
		{
			id: 4,
			title: "Dam Construction",
			description:
				"Building of dams and reservoirs for water storage and flood control purposes.",
			category: "Infrastructure",
		},
		{
			id: 5,
			title: "Flood and Erosion Control",
			description:
				"Implementation of flood and erosion control structures to protect communities and farmlands.",
			category: "Environmental",
		},
		{
			id: 6,
			title: "Land Clearing and Development",
			description:
				"Land clearing and development projects to prepare areas for agricultural and infrastructural development.",
			category: "Development",
		},
	];

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
						eyebrow="Projects"
						title="Key projects"
						breadcrumbs={[
							{ href: "/", label: "Home" },
							{ label: "Key projects" },
						]}
					/>
					<p className="mt-4 max-w-2xl text-[var(--text-secondary)] text-body leading-relaxed">
						The HJRBDA undertakes numerous projects as presented in its yearly
						appropriation—dam construction, irrigation, water supply, flood &
						erosion works, and more.
					</p>
				</div>
			</div>

			<div className="container mx-auto px-4 py-16 sm:px-6 md:py-24">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						<ScrollAnimate key={project.id} delay={index * 75}>
							<Card className="card-institutional overflow-hidden">
								<div
									className="flex h-48 items-center justify-center border-b"
									style={{
										borderColor: "var(--card-border)",
										backgroundColor: "var(--section-alt)",
									}}
								>
									<span className="text-center font-medium text-[var(--text-muted)] text-base">
										{project.title}
									</span>
								</div>
								<CardHeader className="pt-8 pb-6">
									<div
										className="mb-4 h-1 w-12 rounded-sm"
										style={{ backgroundColor: "var(--accent)" }}
									/>
									<div className="mb-2">
										<span
											className="font-semibold text-base uppercase tracking-wide"
											style={{ color: "var(--accent)" }}
										>
											{project.category}
										</span>
									</div>
									<CardTitle className="font-bold font-heading text-[var(--text-primary)] text-h3">
										{project.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="pt-6">
									<p className="text-[var(--text-secondary)] text-body leading-relaxed">
										{project.description}
									</p>
								</CardContent>
							</Card>
						</ScrollAnimate>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
