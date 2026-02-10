import { Download } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer";
import ScrollAnimate from "@/components/scroll-animate";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function TenderPage() {
	const tenders = [
		{
			id: 1,
			title: "INVITATION FOR TENDER 2025FY FOR LOT A30-A32 (WORKS)",
			description:
				"LOWER NIGER RIVER BASIN DEVELOPMENT AUTHORITY, ILORIN. 2025FY LIST OF PREQUALIFIED BIDDERS FOR LOT A30-A32(WORKS)",
			downloadUrl: "#",
			date: "2025-01-20",
		},
		{
			id: 2,
			title: "TENDER FOR DAM CONSTRUCTION PROJECTS",
			description:
				"Invitation for qualified contractors to submit tenders for dam construction and water storage projects.",
			downloadUrl: "#",
			date: "2025-01-15",
		},
		{
			id: 3,
			title: "IRRIGATION PROJECTS TENDER 2025",
			description:
				"Tender opportunities for irrigation infrastructure development projects across the region.",
			downloadUrl: "#",
			date: "2025-01-10",
		},
		{
			id: 4,
			title: "WATER SUPPLY SCHEME TENDERS",
			description:
				"Open tenders for water supply scheme construction and rehabilitation projects.",
			downloadUrl: "#",
			date: "2025-01-05",
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
					<span className="text-foreground">Tender News</span>
				</nav>

				<div className="mb-12">
					<div className="mb-3 font-semibold text-primary text-sm uppercase tracking-wider">
						Tenders
					</div>
					<h1 className="font-bold text-4xl text-foreground tracking-tight md:text-5xl">
						TENDER NEWS
					</h1>
				</div>

				<div className="space-y-6">
					{tenders.map((tender, index) => (
						<ScrollAnimate key={tender.id} delay={index * 100}>
							<Card className="border border-gray-200 bg-white shadow-md">
								<CardHeader className="pt-8 pb-6">
									<div className="mb-4 h-1 w-16 bg-blue-600" />
									<CardTitle className="font-bold text-gray-900 text-xl">
										{tender.title}
									</CardTitle>
									<CardDescription className="mt-2 text-gray-600">
										Published: {new Date(tender.date).toLocaleDateString()}
									</CardDescription>
								</CardHeader>
								<CardContent className="pt-6">
									<p className="mb-6 text-muted-foreground leading-relaxed">
										{tender.description}
									</p>
									<Button className="w-full md:w-auto" asChild>
										<a href={tender.downloadUrl} download>
											<Download className="mr-2 h-4 w-4" />
											CLICK DOWNLOAD
										</a>
									</Button>
								</CardContent>
							</Card>
						</ScrollAnimate>
					))}
				</div>

				<ScrollAnimate delay={400}>
					<div className="mt-12 rounded-lg border bg-muted/50 p-6">
						<h2 className="mb-4 font-bold text-2xl">INTRODUCTION</h2>
						<p className="text-muted-foreground">
							HADAIJA JAMA'ARE RIVER BASIN DEVELOPMENT AUTHORITY. 2025FY LIST OF
							PREQUALIFIED BIDDERS FOR VARIOUS WORKS AND SERVICES.
						</p>
						<p className="mt-4 text-muted-foreground text-sm">
							Interested contractors and service providers are invited to
							download tender documents and submit their bids according to the
							specified guidelines. All tenders must be submitted before the
							closing date indicated in each tender document.
						</p>
					</div>
				</ScrollAnimate>
			</div>
			<Footer />
		</div>
	);
}
