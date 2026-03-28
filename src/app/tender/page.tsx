import { Download, FileX } from "lucide-react";
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
import { getPublishedTenders } from "@/lib/db/queries/tenders";

export default async function TenderPage() {
	const tenders = await getPublishedTenders();

	return (
		<div className="flex min-h-screen flex-col">
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
				{tenders.length === 0 ? (
					<ScrollAnimate>
						<div
							className="flex flex-col items-center justify-center rounded-lg border py-20 text-center"
							style={{
								borderColor: "var(--card-border)",
								backgroundColor: "var(--section-alt)",
							}}
						>
							<FileX
								className="mb-4 h-12 w-12"
								style={{ color: "var(--text-muted)" }}
							/>
							<h2 className="mb-2 font-bold font-heading text-[var(--text-primary)] text-xl">
								No open tenders at this time
							</h2>
							<p className="max-w-md text-[var(--text-secondary)] text-body">
								Check back soon for new tender opportunities from H-JRBDA.
							</p>
						</div>
					</ScrollAnimate>
				) : (
					<div className="space-y-6">
						{tenders.map((tender, index) => (
							<ScrollAnimate key={tender.id} delay={index * 100}>
								<Card className="card-institutional min-w-0 overflow-hidden">
									<CardHeader className="pt-6 pb-4 sm:pt-8 sm:pb-6">
										<div
											className="mb-4 h-1 w-16 rounded-sm"
											style={{ backgroundColor: "var(--accent)" }}
										/>
										<div className="mb-2 flex flex-wrap items-center gap-2">
											{tender.status === "closed" && (
												<span className="rounded bg-red-100 px-2 py-1 font-medium text-red-800 text-xs dark:bg-red-900 dark:text-red-300">
													Closed
												</span>
											)}
											{tender.closingDate && tender.status !== "closed" && (
												<span
													className="rounded px-2 py-1 text-xs"
													style={{
														backgroundColor: "var(--accent-light)",
														color: "var(--accent)",
													}}
												>
													Closes: {new Date(tender.closingDate).toLocaleDateString()}
												</span>
											)}
										</div>
										<CardTitle className="break-words font-bold font-heading text-[var(--text-primary)] text-h3">
											{tender.title}
										</CardTitle>
										<CardDescription className="mt-2 text-[var(--text-secondary)] text-body">
											Published:{" "}
											{tender.publishedAt
												? new Date(tender.publishedAt).toLocaleDateString()
												: new Date(tender.createdAt).toLocaleDateString()}
										</CardDescription>
									</CardHeader>
									<CardContent className="pt-6">
										<p className="mb-6 text-[var(--text-secondary)] text-body leading-relaxed">
											{tender.description}
										</p>
										{tender.documentUrl ? (
											<Button
												className="w-full font-medium text-white md:w-auto"
												style={{ backgroundColor: "var(--accent)" }}
												asChild
											>
												<a href={`/api/tender-document/download?url=${encodeURIComponent(tender.documentUrl)}`}>
													<Download className="mr-2 h-4 w-4" />
													Download
												</a>
											</Button>
										) : (
											<p className="text-[var(--text-muted)] text-sm italic">
												Document not yet available
											</p>
										)}
									</CardContent>
								</Card>
							</ScrollAnimate>
						))}
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
}
