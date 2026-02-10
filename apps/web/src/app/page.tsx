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

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			{/* Hero Carousel */}
			<HeroCarousel />

			{/* Welcome Section */}
			<section className="bg-gradient-to-b from-white to-gray-50 py-20">
				<div className="container mx-auto px-6">
					<ScrollAnimate>
						<div className="mx-auto max-w-4xl text-center">
							<div className="mb-4 font-semibold text-blue-600 text-sm uppercase tracking-[0.15em]">
								Welcome
							</div>
							<h2 className="mb-6 font-bold text-5xl text-gray-900 tracking-tight md:text-6xl">
								WELCOME TO HJRBDA
							</h2>
							<p className="mx-auto font-light text-gray-600 text-xl leading-relaxed md:text-2xl">
								The Hadaija Jama'are River Basin Development Authority is
								committed to the sustainable development and management of water
								resources in the region.
							</p>
						</div>
					</ScrollAnimate>
				</div>
			</section>

			{/* Vision, Mission, Mandate Blocks */}
			<section className="bg-white py-20">
				<div className="container mx-auto px-6">
					<ScrollAnimate>
						<div className="mb-16 text-center">
							<div className="mb-4 font-semibold text-blue-600 text-sm uppercase tracking-[0.15em]">
								Our Foundation
							</div>
							<h2 className="font-bold text-4xl text-gray-900 tracking-tight md:text-5xl">
								Vision, Mission & Mandate
							</h2>
						</div>
					</ScrollAnimate>
					<div className="grid gap-8 md:grid-cols-3">
						<ScrollAnimate delay={0}>
							<Card className="group border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
								<CardHeader className="pt-8 pb-6">
									<div className="mb-4 h-1 w-16 bg-blue-600" />
									<CardTitle className="font-bold text-2xl text-gray-900">
										Our Vision
									</CardTitle>
								</CardHeader>
								<CardContent className="pt-0 pb-8">
									<p className="mb-8 text-gray-600 leading-relaxed">
										To ensure effective and efficient implementation of the
										nation's water resources development policies, through
										optimal exploitation, conservation and overall development
										of the nation's abundant surface and underground water
										resources potentials...
									</p>
									<Button
										className="w-full bg-blue-600 text-white transition-colors hover:bg-blue-700"
										asChild
									>
										<Link href="/about#vision">READ MORE</Link>
									</Button>
								</CardContent>
							</Card>
						</ScrollAnimate>

						<ScrollAnimate delay={100}>
							<Card className="group border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
								<CardHeader className="pt-8 pb-6">
									<div className="mb-4 h-1 w-16 bg-blue-600" />
									<CardTitle className="font-bold text-2xl text-gray-900">
										Our Mission
									</CardTitle>
								</CardHeader>
								<CardContent className="pt-0 pb-8">
									<p className="mb-8 text-gray-600 leading-relaxed">
										To serve as a viable and veritable implementing agency of
										Government in the effective utilization of all the water
										resources potentials with the Lower Basin of the River Niger
										with a view to improving the quality of lives of the
										people...
									</p>
									<Button
										className="w-full bg-blue-600 text-white transition-colors hover:bg-blue-700"
										asChild
									>
										<Link href="/about#mission">READ MORE</Link>
									</Button>
								</CardContent>
							</Card>
						</ScrollAnimate>

						<ScrollAnimate delay={200}>
							<Card className="group border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
								<CardHeader className="pt-8 pb-6">
									<div className="mb-4 h-1 w-16 bg-blue-600" />
									<CardTitle className="font-bold text-2xl text-gray-900">
										Our Mandate
									</CardTitle>
								</CardHeader>
								<CardContent className="pt-0 pb-8">
									<p className="mb-8 text-gray-600 leading-relaxed">
										To supply water from the Authority's completed storage
										schemes to all users for a fee to ensure prompt efficient
										and effective service delivery to our end users. To remain
										responsive to the demands and aspirations of the
										beneficiaries...
									</p>
									<Button
										className="w-full bg-blue-600 text-white transition-colors hover:bg-blue-700"
										asChild
									>
										<Link href="/about#mandate">READ MORE</Link>
									</Button>
								</CardContent>
							</Card>
						</ScrollAnimate>
					</div>
				</div>
			</section>

			{/* Latest News */}
			<section className="bg-gray-50 py-20">
				<div className="container mx-auto px-6">
					<ScrollAnimate>
						<div className="mb-16 text-center">
							<div className="mb-4 font-semibold text-blue-600 text-sm uppercase tracking-[0.15em]">
								Updates
							</div>
							<h2 className="font-bold text-4xl text-gray-900 tracking-tight md:text-5xl">
								Latest News
							</h2>
						</div>
					</ScrollAnimate>
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
						].map((news, index) => (
							<ScrollAnimate key={news.id} delay={index * 100}>
								<Card className="border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
									<CardHeader className="border-gray-100 border-b pb-4">
										<CardTitle className="font-bold text-gray-900 text-lg">
											{news.title}
										</CardTitle>
										<CardDescription className="mt-2 text-gray-500 text-xs">
											By {news.author} •{" "}
											{new Date(news.date).toLocaleDateString()}
										</CardDescription>
									</CardHeader>
									<CardContent className="pt-6">
										<p className="mb-6 text-gray-600 leading-relaxed">
											{news.preview}
										</p>
										<Button
											className="w-full bg-blue-600 text-white hover:bg-blue-700"
											size="sm"
											asChild
										>
											<Link href="/news-media">Read More</Link>
										</Button>
									</CardContent>
								</Card>
							</ScrollAnimate>
						))}
					</div>
				</div>
			</section>
			<section className="bg-white py-20">
				<div className="container mx-auto px-6">
					<ScrollAnimate>
						<div className="mb-16 text-center">
							<div className="mb-4 font-semibold text-blue-600 text-sm uppercase tracking-[0.15em]">
								What We Do
							</div>
							<h2 className="font-bold text-4xl text-gray-900 tracking-tight md:text-5xl">
								OUR SERVICES
							</h2>
						</div>
					</ScrollAnimate>
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
						].map((service, index) => (
							<ScrollAnimate key={service.id} delay={index * 50}>
								<Card className="group border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
									<CardHeader className="pt-8 pb-6">
										<div className="mb-4 h-1 w-12 bg-blue-600" />
										<CardTitle className="font-bold text-gray-900 text-lg">
											{service.title}
										</CardTitle>
									</CardHeader>
									<CardContent className="pt-0 pb-8">
										<p className="text-gray-600 leading-relaxed">
											{service.description}
										</p>
									</CardContent>
								</Card>
							</ScrollAnimate>
						))}
					</div>
				</div>
			</section>
			<section className="bg-gradient-to-b from-gray-50 to-white py-20">
				<div className="container mx-auto px-6">
					<ScrollAnimate>
						<div className="mb-12 text-center">
							<div className="mb-4 font-semibold text-blue-600 text-sm uppercase tracking-[0.15em]">
								Our Work
							</div>
							<h2 className="mb-6 font-bold text-4xl text-gray-900 tracking-tight md:text-5xl">
								RECENT PROJECTS
							</h2>
							<p className="mx-auto max-w-3xl font-light text-gray-600 text-xl leading-relaxed">
								The HJRBDA undertakes numerous projects as presented in its
								yearly appropriation. These projects range from dam
								construction, construction of irrigation projects, water supply
								scheme, flood & erosion works...
							</p>
						</div>
					</ScrollAnimate>
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
						].map((project, index) => (
							<ScrollAnimate key={project.id} delay={index * 75}>
								<Card className="overflow-hidden border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
									<div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
										<span className="font-semibold text-blue-700 text-sm">
											{project.title}
										</span>
									</div>
									<CardHeader className="bg-white">
										<CardTitle className="font-bold text-base text-gray-900">
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
								className="bg-blue-600 px-10 py-6 font-semibold text-lg text-white hover:bg-blue-700"
								asChild
							>
								<Link href="/key-projects">SHOW MORE</Link>
							</Button>
						</div>
					</ScrollAnimate>
				</div>
			</section>

			<Footer />
		</div>
	);
}
