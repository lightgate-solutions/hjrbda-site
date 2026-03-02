import { Download } from "lucide-react";
import Footer from "@/components/footer";
import PageIntro from "@/components/page-intro";
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
				"HADEJIA-JAMA'ARE RIVER BASIN DEVELOPMENT AUTHORITY (H-JRBDA), KANO. 2025FY LIST OF PREQUALIFIED BIDDERS FOR LOT A30-A32 (WORKS).",
			downloadUrl: "#",
			date: "2025-01-20",
		},
		{
			id: 2,
			title: "TENDER FOR DAM CONSTRUCTION PROJECTS",
			description:
				"H-JRBDA, Kano. Invitation for qualified contractors to submit tenders for dam construction and water storage projects within the Hadejia-Jama'are River Basin.",
			downloadUrl: "#",
			date: "2025-01-15",
		},
		{
			id: 3,
			title: "IRRIGATION PROJECTS TENDER 2025",
			description:
				"H-JRBDA, Kano. Tender opportunities for irrigation infrastructure development projects across the Authority's catchment area (Kano, Jigawa and two-thirds of Bauchi states).",
			downloadUrl: "#",
			date: "2025-01-10",
		},
		{
			id: 4,
			title: "WATER SUPPLY SCHEME TENDERS",
			description:
				"H-JRBDA, Kano. Open tenders for water supply scheme construction and rehabilitation projects within the Basin.",
			downloadUrl: "#",
			date: "2025-01-05",
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
						eyebrow="Tenders"
						title="Tender news"
						breadcrumbs={[
							{ href: "/", label: "Home" },
							{ label: "Tender news" },
						]}
					/>
					<p className="mt-4 max-w-2xl text-[var(--text-secondary)] text-body leading-relaxed">
						Open tender opportunities and invitations for qualified contractors
						and service providers.
					</p>
				</div>
			</div>

			<div className="container mx-auto px-4 py-16 sm:px-6 md:py-24">
				<div className="space-y-6">
					{tenders.map((tender, index) => (
						<ScrollAnimate key={tender.id} delay={index * 100}>
							<Card className="card-institutional min-w-0 overflow-hidden">
								<CardHeader className="pt-6 pb-4 sm:pt-8 sm:pb-6">
									<div
										className="mb-4 h-1 w-16 rounded-sm"
										style={{ backgroundColor: "var(--accent)" }}
									/>
									<CardTitle className="break-words font-bold font-heading text-[var(--text-primary)] text-h3">
										{tender.title}
									</CardTitle>
									<CardDescription className="mt-2 text-[var(--text-secondary)] text-body">
										Published: {new Date(tender.date).toLocaleDateString()}
									</CardDescription>
								</CardHeader>
								<CardContent className="pt-6">
									<p className="mb-6 text-[var(--text-secondary)] text-body leading-relaxed">
										{tender.description}
									</p>
									<Button
										className="w-full font-medium text-white md:w-auto"
										style={{ backgroundColor: "var(--accent)" }}
										asChild
									>
										<a href={tender.downloadUrl} download>
											<Download className="mr-2 h-4 w-4" />
											Download
										</a>
									</Button>
								</CardContent>
							</Card>
						</ScrollAnimate>
					))}
				</div>

				<ScrollAnimate delay={400}>
					<div
						className="mt-12 rounded-lg border p-6"
						style={{
							borderColor: "var(--card-border)",
							backgroundColor: "var(--section-alt)",
						}}
					>
						<h2 className="mb-4 font-bold font-heading text-[var(--text-primary)] text-xl">
							Introduction
						</h2>
						<p className="text-[var(--text-secondary)] text-body">
							HADEJIA-JAMA&apos;ARE RIVER BASIN DEVELOPMENT AUTHORITY (H-JRBDA),
							KANO. 2025FY LIST OF PREQUALIFIED BIDDERS FOR VARIOUS WORKS AND
							SERVICES.
						</p>
						<p className="mt-4 text-[var(--text-muted)] text-body">
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
