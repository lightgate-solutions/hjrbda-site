import Link from "next/link";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			{/* Hero Carousel */}
			<HeroCarousel />

			{/* Welcome Section */}
			<section className="border-border/40 border-b bg-background py-16">
				<div className="container mx-auto px-6">
					<div className="mx-auto max-w-4xl text-center">
						<div className="mb-3 font-semibold text-primary text-sm uppercase tracking-wider">
							Welcome
						</div>
						<h2 className="mb-6 font-bold text-4xl text-foreground tracking-tight md:text-5xl">
							WELCOME TO HJRBDA
						</h2>
						<p className="mx-auto text-lg text-muted-foreground leading-relaxed md:text-xl">
							The Hadaija Jama'are River Basin Development Authority is
							committed to the sustainable development and management of water
							resources in the region.
						</p>
					</div>
				</div>
			</section>

			{/* Vision, Mission, Mandate Blocks */}
			<section className="border-border/40 border-b bg-slate-50/50 py-16 dark:bg-slate-950/30">
				<div className="container mx-auto px-6">
					<div className="mb-12 text-center">
						<div className="mb-3 font-semibold text-primary text-sm uppercase tracking-wider">
							Our Foundation
						</div>
						<h2 className="font-bold text-3xl text-foreground tracking-tight md:text-4xl">
							Vision, Mission & Mandate
						</h2>
					</div>
					<div className="grid gap-8 md:grid-cols-3">
						<Card className="border-border/60 shadow-sm transition-shadow hover:shadow-md">
							<CardHeader className="border-border/40 border-b bg-slate-50/50 dark:bg-slate-900/50">
								<CardTitle className="font-semibold text-foreground text-xl">
									Our Vision
								</CardTitle>
							</CardHeader>
							<CardContent className="pt-6">
								<p className="mb-6 text-muted-foreground leading-relaxed">
									To ensure effective and efficient implementation of the
									nation's water resources development policies, through optimal
									exploitation, conservation and overall development of the
									nation's abundant surface and underground water resources
									potentials...
								</p>
								<Button variant="outline" className="w-full" asChild>
									<Link href="/about#vision">READ MORE</Link>
								</Button>
							</CardContent>
						</Card>

						<Card className="border-border/60 shadow-sm transition-shadow hover:shadow-md">
							<CardHeader className="border-border/40 border-b bg-slate-50/50 dark:bg-slate-900/50">
								<CardTitle className="font-semibold text-foreground text-xl">
									Our Mission
								</CardTitle>
							</CardHeader>
							<CardContent className="pt-6">
								<p className="mb-6 text-muted-foreground leading-relaxed">
									To serve as a viable and veritable implementing agency of
									Government in the effective utilization of all the water
									resources potentials with the Lower Basin of the River Niger
									with a view to improving the quality of lives of the people...
								</p>
								<Button variant="outline" className="w-full" asChild>
									<Link href="/about#mission">READ MORE</Link>
								</Button>
							</CardContent>
						</Card>

						<Card className="border-border/60 shadow-sm transition-shadow hover:shadow-md">
							<CardHeader className="border-border/40 border-b bg-slate-50/50 dark:bg-slate-900/50">
								<CardTitle className="font-semibold text-foreground text-xl">
									Our Mandate
								</CardTitle>
							</CardHeader>
							<CardContent className="pt-6">
								<p className="mb-6 text-muted-foreground leading-relaxed">
									To supply water from the Authority's completed storage schemes
									to all users for a fee to ensure prompt efficient and
									effective service delivery to our end users. To remain
									responsive to the demands and aspirations of the
									beneficiaries...
								</p>
								<Button variant="outline" className="w-full" asChild>
									<Link href="/about#mandate">READ MORE</Link>
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Latest News */}
			<section className="border-border/40 border-b bg-background py-16">
				<div className="container mx-auto px-6">
					<div className="mb-12 text-center">
						<div className="mb-3 font-semibold text-primary text-sm uppercase tracking-wider">
							Updates
						</div>
						<h2 className="font-bold text-3xl text-foreground tracking-tight md:text-4xl">
							Latest News
						</h2>
					</div>
					<div className="grid gap-8 md:grid-cols-3">
						{[
							{
								id: 1,
								title: "New Water Supply Project Launched",
								author: "Admin",
								date: "2025-01-15",
								preview:
									"The Authority has launched a new water supply project to serve rural communities...",
							},
							{
								id: 2,
								title: "Irrigation Scheme Completion",
								author: "Admin",
								date: "2025-01-10",
								preview:
									"The latest irrigation scheme has been completed, benefiting over 500 farmers...",
							},
							{
								id: 3,
								title: "Tender Announcement for 2025",
								author: "Admin",
								date: "2025-01-05",
								preview:
									"New tenders are now open for various infrastructure projects...",
							},
						].map((news) => (
							<Card
								key={news.id}
								className="border-border/60 shadow-sm transition-shadow hover:shadow-md"
							>
								<CardHeader className="border-border/40 border-b">
									<CardTitle className="font-semibold text-foreground text-lg">
										{news.title}
									</CardTitle>
									<CardDescription className="mt-2 text-xs">
										By {news.author} •{" "}
										{new Date(news.date).toLocaleDateString()}
									</CardDescription>
								</CardHeader>
								<CardContent className="pt-6">
									<p className="mb-4 text-muted-foreground leading-relaxed">
										{news.preview}
									</p>
									<Button
										variant="outline"
										size="sm"
										className="w-full"
										asChild
									>
										<Link href="/news-media">Read More</Link>
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Our Services */}
			<section className="border-border/40 border-b bg-slate-50/50 py-16 dark:bg-slate-950/30">
				<div className="container mx-auto px-6">
					<div className="mb-12 text-center">
						<div className="mb-3 font-semibold text-primary text-sm uppercase tracking-wider">
							What We Do
						</div>
						<h2 className="font-bold text-3xl text-foreground tracking-tight md:text-4xl">
							OUR SERVICES
						</h2>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{[
							{
								id: "surveying",
								title: "Surveying/Hydromet Equipment",
								description:
									"Total Station, Global Navigation Satellites Systems (GNSS) receiver, Apache 5 kit for Bathymetric survey, DJI Phantom 4 Pro Quad Copter Drone, Automatic level, Vale port current meter and Radar Depth Sensor.",
							},
							{
								id: "dam-construction",
								title: "Dam/Weir Construction",
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
									"The HJRBDA also cultivates crops and rear livestocks which are sold to generate IGR to the government",
							},
							{
								id: "ppp",
								title: "Public-Private Partnership",
								description:
									"Public - Private Partnership arrangement for harvesting and processing of dry season paddy produced by the Water Users' Association (WUA).",
							},
							{
								id: "guest-house",
								title: "Guest House",
								description:
									"The HJRBDA also construct Guest Houses for accommodation purposes",
							},
						].map((service) => (
							<Card
								key={service.id}
								className="border-border/60 shadow-sm transition-shadow hover:shadow-md"
							>
								<CardHeader className="border-border/40 border-b bg-slate-50/50 dark:bg-slate-900/50">
									<CardTitle className="font-semibold text-foreground text-lg">
										{service.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="pt-6">
									<p className="text-muted-foreground leading-relaxed">
										{service.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Recent Projects */}
			<section className="border-border/40 border-b bg-background py-16">
				<div className="container mx-auto px-6">
					<div className="mb-8 text-center">
						<div className="mb-3 font-semibold text-primary text-sm uppercase tracking-wider">
							Our Work
						</div>
						<h2 className="mb-4 font-bold text-3xl text-foreground tracking-tight md:text-4xl">
							RECENT PROJECTS
						</h2>
						<p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
							The HJRBDA undertakes numerous projects as presented in its yearly
							appropriation. These projects range from dam construction,
							construction of irrigation projects, water supply scheme, flood &
							erosion works...
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
						].map((project) => (
							<Card
								key={project.id}
								className="overflow-hidden border-border/60 shadow-sm transition-shadow hover:shadow-md"
							>
								<div className="flex h-48 items-center justify-center border-border/40 border-b bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900">
									<span className="font-medium text-muted-foreground text-sm">
										{project.title}
									</span>
								</div>
								<CardHeader className="bg-slate-50/50 dark:bg-slate-900/50">
									<CardTitle className="font-semibold text-base text-foreground">
										{project.title}
									</CardTitle>
								</CardHeader>
							</Card>
						))}
					</div>
					<div className="mt-12 text-center">
						<Button size="lg" className="px-8" asChild>
							<Link href="/key-projects">SHOW MORE</Link>
						</Button>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
