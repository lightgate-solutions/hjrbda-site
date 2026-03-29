import { Clock, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import Footer from "@/components/footer";
import PageIntro from "@/components/page-intro";
import ScrollAnimate from "@/components/scroll-animate";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function ContactPage() {
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
						eyebrow="Contact"
						title="Contact us"
						breadcrumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
					/>
					<p className="mt-4 max-w-2xl text-[var(--text-secondary)] text-body leading-relaxed">
						Get in touch with the Hadejia Jama&apos;are River Basin Development
						Authority.
					</p>
				</div>
			</div>
			<div className="container mx-auto min-w-0 px-4 py-16 sm:px-6 md:py-24">
				<div className="grid gap-8 md:grid-cols-2">
					<ScrollAnimate>
						<div className="space-y-6">
							<Card className="card-institutional overflow-hidden">
								<CardHeader className="pt-8 pb-6">
									<div
										className="mb-4 h-1 w-14 rounded-sm"
										style={{ backgroundColor: "var(--accent)" }}
									/>
									<CardTitle className="font-bold font-heading text-[var(--text-primary)] text-xl">
										Get in touch
									</CardTitle>
									<CardDescription className="mt-2 text-[var(--text-secondary)] text-lg">
										We&apos;d love to hear from you. Send us a message and
										we&apos;ll respond as soon as possible.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4 pt-6">
									<div className="flex items-start gap-4">
										<MapPin
											className="mt-1 h-5 w-5 shrink-0"
											style={{ color: "var(--accent)" }}
										/>
										<div>
											<h3 className="mb-2 font-semibold text-[var(--text-primary)]">
												Address
											</h3>
											<p className="text-[var(--text-secondary)] text-body leading-relaxed">
												Hadejia Jama&apos;are River Basin Development Authority
												<br />
												Hotoro, Maiduguri Road, Kano
												<br />
												P.M.B. 3168, Kano. Nigeria
											</p>
										</div>
									</div>

									<div className="flex items-start gap-4">
										<Mail
											className="mt-1 h-5 w-5 shrink-0"
											style={{ color: "var(--accent)" }}
										/>
										<div>
											<h3 className="mb-2 font-semibold text-[var(--text-primary)]">
												Email
											</h3>
											<p className="text-[var(--text-secondary)] text-body leading-relaxed">
												<a
													href="mailto:servicomhjrbda@gmail.com"
													className="hover:underline"
													style={{ color: "var(--accent)" }}
												>
													servicomhjrbda@gmail.com
												</a>
											</p>
										</div>
									</div>

									<div className="flex items-start gap-4">
										<Clock
											className="mt-1 h-5 w-5 shrink-0"
											style={{ color: "var(--accent)" }}
										/>
										<div>
											<h3 className="mb-2 font-semibold text-[var(--text-primary)]">
												Working hours
											</h3>
											<p className="text-[var(--text-secondary)] text-body leading-relaxed">
												Monday – Friday: 8:00 AM – 4:00 PM
												<br />
												Saturday – Sunday: Closed
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</ScrollAnimate>

					<ScrollAnimate delay={100}>
						<Card className="card-institutional overflow-hidden">
							<CardHeader className="pt-8 pb-6">
								<div
									className="mb-4 h-1 w-14 rounded-sm"
									style={{ backgroundColor: "var(--accent)" }}
								/>
								<CardTitle className="font-bold font-heading text-[var(--text-primary)] text-xl">
									Send us a message
								</CardTitle>
								<CardDescription className="mt-2 text-[var(--text-secondary)] text-lg">
									Fill out the form below and we&apos;ll get back to you as soon
									as possible.
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-6">
								<ContactForm />
							</CardContent>
						</Card>
					</ScrollAnimate>
				</div>
			</div>
			<Footer />
		</div>
	);
}
