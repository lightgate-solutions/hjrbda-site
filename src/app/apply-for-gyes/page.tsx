import { redirect } from "next/navigation";
import Link from "next/link";
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

export default function ApplyForGyesPage() {
	redirect("/");
	return (
		<div className="flex min-h-screen flex-col">
			{/* Intro with accent strip — opportunity / youth focus */}
			<div
				className="border-b py-12 md:py-16"
				style={{
					backgroundColor: "var(--accent-light)",
					borderColor: "var(--accent-muted)",
				}}
			>
				<div className="container mx-auto px-4 sm:px-6">
					<PageIntro
						eyebrow="Application"
						title="Apply for GYES"
						breadcrumbs={[
							{ href: "/", label: "Home" },
							{ label: "Apply for GYES" },
						]}
					/>
					<p className="mt-4 max-w-2xl text-[var(--text-secondary)] text-body leading-relaxed">
						Government Youth Employment Scheme—employment opportunities for
						young people in water resources, agriculture, and more.
					</p>
				</div>
			</div>

			<div className="container mx-auto px-4 py-16 sm:px-6 md:py-24">
				<div className="mx-auto max-w-3xl">
					<ScrollAnimate>
						<Card className="card-institutional overflow-hidden">
							<CardHeader className="pt-8 pb-6">
								<div
									className="mb-4 h-1 w-16 rounded-sm"
									style={{ backgroundColor: "var(--accent)" }}
								/>
								<CardTitle className="font-bold font-heading text-[var(--text-primary)] text-h3">
									Government Youth Employment Scheme (GYES)
								</CardTitle>
								<CardDescription className="mt-2 text-[var(--text-secondary)] text-lg">
									Application portal for the Government Youth Employment Scheme
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								<div>
									<h3 className="mb-2 font-heading font-semibold text-[var(--text-primary)] text-lg">
										About GYES
									</h3>
									<p className="text-[var(--text-secondary)] text-body">
										The Government Youth Employment Scheme (GYES) is an
										initiative designed to provide employment opportunities for
										young people in various sectors including water resources
										management, agriculture, infrastructure development, and
										administrative services.
									</p>
								</div>

								<div>
									<h3 className="mb-2 font-heading font-semibold text-[var(--text-primary)] text-lg">
										Eligibility requirements
									</h3>
									<ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)] text-body">
										<li>Must be between 18 and 35 years of age</li>
										<li>
											Must possess a minimum of SSCE or equivalent qualification
										</li>
										<li>Must be a citizen of Nigeria</li>
										<li>Must be willing to work in the assigned location</li>
										<li>Must not be currently employed in the public sector</li>
									</ul>
								</div>

								<div>
									<h3 className="mb-2 font-heading font-semibold text-[var(--text-primary)] text-lg">
										Available positions
									</h3>
									<ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)] text-body">
										<li>Water Resources Management</li>
										<li>Agricultural Extension Services</li>
										<li>Infrastructure Maintenance</li>
										<li>Administrative Support</li>
										<li>Technical Support Services</li>
									</ul>
								</div>

								<div>
									<h3 className="mb-2 font-heading font-semibold text-[var(--text-primary)] text-lg">
										Application process
									</h3>
									<ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)] text-body">
										<li>Fill out the online application form</li>
										<li>Upload required documents (CV, certificates, etc.)</li>
										<li>Submit your application</li>
										<li>Wait for shortlisting notification</li>
										<li>Attend interview if shortlisted</li>
									</ol>
								</div>

								<div className="pt-4">
									<Button
										size="lg"
										className="w-full font-medium text-white"
										style={{ backgroundColor: "var(--accent)" }}
										asChild
									>
										<Link href="/apply-for-gyes">Start application</Link>
									</Button>
								</div>

								<div
									className="rounded-lg border p-4"
									style={{
										borderColor: "var(--card-border)",
										backgroundColor: "var(--section-alt)",
									}}
								>
									<p className="text-[var(--text-secondary)] text-body">
										<strong>Note:</strong> Application forms are currently being
										prepared. Please check back soon or contact our office for
										more information.
									</p>
								</div>
							</CardContent>
						</Card>
					</ScrollAnimate>
				</div>
			</div>
			<Footer />
		</div>
	);
}
