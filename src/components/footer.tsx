import Link from "next/link";

export default function Footer() {
	return (
		<footer
			className="border-t py-12 md:py-16"
			style={{
				backgroundColor: "var(--hero-darker)",
				borderColor: "rgba(255,255,255,0.08)",
				color: "rgba(255,255,255,0.9)",
			}}
		>
			<div className="container mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
					<div>
						<h3 className="mb-5 font-heading font-semibold text-h3 text-white">
							Who we are
						</h3>
						<p className="text-body text-white/75 leading-relaxed">
							Hadejia-Jama&apos;are River Basin Development Authority (H-JRBDA)
							was established in 1976. We develop surface and underground water
							resources for irrigated agriculture, water supply and other uses
							within the Hadejia-Jama&apos;are River Basin.
						</p>
					</div>

					<div>
						<h3 className="mb-5 font-heading font-semibold text-h3 text-white">
							Working hours
						</h3>
						<ul className="space-y-2 text-body text-white/75">
							<li>Monday – Friday: 8:00 AM – 4:00 PM</li>
							<li>Saturday – Sunday: Closed</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-5 font-heading font-semibold text-h3 text-white">
							Our services
						</h3>
						<ul className="space-y-2 text-base">
							<li>
								<Link
									href="/#services"
									className="text-white/75 transition-colors hover:text-white"
								>
									Water resources development
								</Link>
							</li>
							<li>
								<Link
									href="/#services"
									className="text-white/75 transition-colors hover:text-white"
								>
									Flood and erosion control
								</Link>
							</li>
							<li>
								<Link
									href="/#services"
									className="text-white/75 transition-colors hover:text-white"
								>
									Dams, irrigation and drainage
								</Link>
							</li>
							<li>
								<Link
									href="/#services"
									className="text-white/75 transition-colors hover:text-white"
								>
									Water supply &amp; plant hire
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-5 font-heading font-semibold text-h3 text-white">
							Recent posts
						</h3>
						<ul className="space-y-2 text-body">
							<li>
								<Link
									href="/news-media"
									className="text-white/75 transition-colors hover:text-white"
								>
									Latest News Updates
								</Link>
							</li>
							<li>
								<Link
									href="/tender"
									className="text-white/75 transition-colors hover:text-white"
								>
									New Tender Announcements
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div
					className="mt-10 border-t pt-8 text-center md:mt-12"
					style={{ borderColor: "rgba(255,255,255,0.08)" }}
				>
					<p className="text-caption text-white/60">
						Copyright © HJRBDA {new Date().getFullYear()}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
