import Link from "next/link";
import Footer from "@/components/footer";
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
			<div className="container mx-auto px-6 py-12">
				{/* Breadcrumb */}
				<nav className="mb-8 text-muted-foreground text-sm">
					<Link href="/" className="transition-colors hover:text-foreground">
						Home
					</Link>
					<span className="mx-2">/</span>
					<span className="text-foreground">Key Projects</span>
				</nav>

				<div className="mb-12">
					<div className="mb-3 font-semibold text-primary text-sm uppercase tracking-wider">
						Projects
					</div>
					<h1 className="mb-6 font-bold text-4xl text-foreground tracking-tight md:text-5xl">
						KEY PROJECTS
					</h1>
				</div>

				<p className="mb-12 text-lg text-muted-foreground leading-relaxed">
					The HJRBDA undertakes numerous projects as presented in its yearly
					appropriation. These projects range from dam construction,
					construction of irrigation projects, water supply scheme, flood &
					erosion works, and other developmental initiatives.
				</p>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						<ScrollAnimate key={project.id} delay={index * 75}>
							<Card className="overflow-hidden border-border/60 shadow-sm transition-shadow hover:shadow-md">
								<div className="flex h-48 items-center justify-center border-border/40 border-b bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900">
									<span className="font-medium text-muted-foreground text-sm">
										{project.title}
									</span>
								</div>
								<CardHeader className="pt-8 pb-6">
									<div className="mb-4 h-1 w-12 bg-blue-600" />
									<div className="mb-2">
										<span className="font-semibold text-blue-600 text-xs uppercase tracking-wide">
											{project.category}
										</span>
									</div>
									<CardTitle className="font-bold text-gray-900 text-xl">
										{project.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="pt-6">
									<p className="text-muted-foreground leading-relaxed">
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
