import { Clock, Mail, MapPin, Phone } from "lucide-react";
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

export default function ContactPage() {
	return (
		<div className="flex min-h-screen flex-col">
			<div className="container mx-auto px-6 py-12">
				{/* Breadcrumb */}
				<nav className="mb-8 text-muted-foreground text-sm">
					<Link href="/" className="transition-colors hover:text-foreground">
						Home
					</Link>
					<span className="mx-2">/</span>
					<span className="text-foreground">Contact</span>
				</nav>

				<div className="mb-12">
					<div className="mb-3 font-semibold text-primary text-sm uppercase tracking-wider">
						Contact
					</div>
					<h1 className="font-bold text-4xl text-foreground tracking-tight md:text-5xl">
						CONTACT US
					</h1>
				</div>

				<div className="grid gap-8 md:grid-cols-2">
					{/* Contact Information */}
					<ScrollAnimate>
						<div className="space-y-6">
							<Card className="border border-gray-200 bg-white shadow-md">
								<CardHeader className="pt-8 pb-6">
									<div className="mb-4 h-1 w-16 bg-blue-600" />
									<CardTitle className="font-bold text-gray-900 text-xl">
										Get in Touch
									</CardTitle>
									<CardDescription className="mt-2 text-gray-600">
										We'd love to hear from you. Send us a message and we'll
										respond as soon as possible.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4 pt-6">
									<div className="flex items-start gap-4">
										<MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
										<div>
											<h3 className="mb-2 font-semibold text-foreground">
												Address
											</h3>
											<p className="text-muted-foreground text-sm leading-relaxed">
												Hadaija Jama'are River Basin Development Authority
												<br />
												[Address to be updated]
												<br />
												Nigeria
											</p>
										</div>
									</div>

									<div className="flex items-start gap-4">
										<Phone className="mt-1 h-5 w-5 text-muted-foreground" />
										<div>
											<h3 className="mb-2 font-semibold text-foreground">
												Phone
											</h3>
											<p className="text-muted-foreground text-sm leading-relaxed">
												[Phone number to be updated]
											</p>
										</div>
									</div>

									<div className="flex items-start gap-4">
										<Mail className="mt-1 h-5 w-5 text-muted-foreground" />
										<div>
											<h3 className="mb-2 font-semibold text-foreground">
												Email
											</h3>
											<p className="text-muted-foreground text-sm leading-relaxed">
												[Email address to be updated]
											</p>
										</div>
									</div>

									<div className="flex items-start gap-4">
										<Clock className="mt-1 h-5 w-5 text-muted-foreground" />
										<div>
											<h3 className="mb-2 font-semibold text-foreground">
												Working Hours
											</h3>
											<p className="text-muted-foreground text-sm leading-relaxed">
												Monday - Friday: 8:00 AM - 4:00 PM
												<br />
												Saturday - Sunday: Closed
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</ScrollAnimate>

					{/* Contact Form */}
					<ScrollAnimate delay={100}>
						<Card className="border border-gray-200 bg-white shadow-md">
							<CardHeader className="pt-8 pb-6">
								<div className="mb-4 h-1 w-16 bg-blue-600" />
								<CardTitle className="font-bold text-gray-900 text-xl">
									Send us a Message
								</CardTitle>
								<CardDescription className="mt-2 text-gray-600">
									Fill out the form below and we'll get back to you as soon as
									possible.
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-6">
								<form className="space-y-4">
									<div>
										<label
											htmlFor="name"
											className="mb-2 block font-medium text-sm"
										>
											Full Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
											placeholder="Enter your full name"
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="mb-2 block font-medium text-sm"
										>
											Email Address
										</label>
										<input
											type="email"
											id="email"
											name="email"
											className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
											placeholder="Enter your email address"
										/>
									</div>

									<div>
										<label
											htmlFor="subject"
											className="mb-2 block font-medium text-sm"
										>
											Subject
										</label>
										<input
											type="text"
											id="subject"
											name="subject"
											className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
											placeholder="Enter subject"
										/>
									</div>

									<div>
										<label
											htmlFor="message"
											className="mb-2 block font-medium text-sm"
										>
											Message
										</label>
										<textarea
											id="message"
											name="message"
											rows={5}
											className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
											placeholder="Enter your message"
										/>
									</div>

									<Button type="submit" className="w-full">
										Send Message
									</Button>
								</form>
							</CardContent>
						</Card>
					</ScrollAnimate>
				</div>
			</div>
			<Footer />
		</div>
	);
}
