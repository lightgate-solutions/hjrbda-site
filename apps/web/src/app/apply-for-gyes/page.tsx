import Link from "next/link";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function ApplyForGyesPage() {
	return (
		<div className="flex min-h-screen flex-col">
			<div className="container mx-auto px-6 py-12">
				{/* Breadcrumb */}
				<nav className="mb-8 text-muted-foreground text-sm">
					<Link href="/" className="transition-colors hover:text-foreground">
						Home
					</Link>
					<span className="mx-2">/</span>
					<span className="text-foreground">Apply for GYES</span>
				</nav>

				<div className="mb-12">
					<div className="mb-3 font-semibold text-primary text-sm uppercase tracking-wider">
						Application
					</div>
					<h1 className="font-bold text-4xl text-foreground tracking-tight md:text-5xl">
						APPLY FOR GYES
					</h1>
				</div>

				<div className="mx-auto max-w-3xl">
					<Card className="border-border/60 shadow-sm">
						<CardHeader className="border-border/40 border-b bg-slate-50/50 dark:bg-slate-900/50">
							<CardTitle className="font-semibold text-2xl text-foreground">
								Government Youth Employment Scheme (GYES)
							</CardTitle>
							<CardDescription className="mt-2">
								Application portal for the Government Youth Employment Scheme
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div>
								<h3 className="mb-2 font-semibold text-lg">About GYES</h3>
								<p className="text-muted-foreground">
									The Government Youth Employment Scheme (GYES) is an initiative
									designed to provide employment opportunities for young people
									in various sectors including water resources management,
									agriculture, infrastructure development, and administrative
									services.
								</p>
							</div>

							<div>
								<h3 className="mb-2 font-semibold text-lg">
									Eligibility Requirements
								</h3>
								<ul className="list-disc space-y-2 pl-6 text-muted-foreground">
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
								<h3 className="mb-2 font-semibold text-lg">
									Available Positions
								</h3>
								<ul className="list-disc space-y-2 pl-6 text-muted-foreground">
									<li>Water Resources Management</li>
									<li>Agricultural Extension Services</li>
									<li>Infrastructure Maintenance</li>
									<li>Administrative Support</li>
									<li>Technical Support Services</li>
								</ul>
							</div>

							<div>
								<h3 className="mb-2 font-semibold text-lg">
									Application Process
								</h3>
								<ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
									<li>Fill out the online application form</li>
									<li>Upload required documents (CV, certificates, etc.)</li>
									<li>Submit your application</li>
									<li>Wait for shortlisting notification</li>
									<li>Attend interview if shortlisted</li>
								</ol>
							</div>

							<div className="pt-4">
								<Button size="lg" className="w-full" asChild>
									<Link href="/apply-for-gyes">Start Application</Link>
								</Button>
							</div>

							<div className="rounded-lg border bg-muted/50 p-4">
								<p className="text-muted-foreground text-sm">
									<strong>Note:</strong> Application forms are currently being
									prepared. Please check back soon or contact our office for
									more information.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
			<Footer />
		</div>
	);
}
