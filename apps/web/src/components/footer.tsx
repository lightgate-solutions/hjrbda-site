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
				<div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
					<div>
						<h3 className="mb-5 font-heading font-semibold text-h3 text-white">
							Who we are
						</h3>
						<p className="text-body text-white/75 leading-relaxed">
							The Hadeija Jama&apos;are River Basin Development Authority, a
							Parastatal of the Federal Ministry of Water Resources was
							established to develop water resources and promote sustainable
							development in the region.
						</p>
					</div>

					<div>
						<h3 className="mb-5 font-heading font-semibold text-h3 text-white">
							Working hours
						</h3>
						<ul className="space-y-2 text-body text-white/75">
							<li>Mon – Fri: 8 AM – 4 PM</li>
							<li>Saturday: Closed</li>
							<li>Sunday: Closed</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-5 font-heading font-semibold text-h3 text-white">
							Our services
						</h3>
						<ul className="space-y-2 text-base">
							<li>
								<Link
									href="/"
									className="text-white/75 transition-colors hover:text-white"
								>
									Flood and Erosion Control
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-white/75 transition-colors hover:text-white"
								>
									Land clearing and development
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-white/75 transition-colors hover:text-white"
								>
									Sales of Agricultural Produce
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-white/75 transition-colors hover:text-white"
								>
									Water & Plantation
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
