import Link from "next/link";

export default function Footer() {
	return (
		<footer className="border-border/40 border-t bg-slate-900 text-slate-200">
			<div className="container mx-auto px-6 py-16">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-4">
					{/* Who We Are */}
					<div>
						<h3 className="mb-6 font-semibold text-lg text-white">
							Who We Are
						</h3>
						<p className="text-slate-400 leading-relaxed">
							The Hadaija Jama'are River Basin Development Authority, a
							Parastatal of the Federal Ministry of Water Resources was
							established to develop water resources and promote sustainable
							development in the region.
						</p>
					</div>

					{/* Working Hours */}
					<div>
						<h3 className="mb-6 font-semibold text-lg text-white">
							Working Hours
						</h3>
						<ul className="space-y-3 text-slate-400 text-sm">
							<li className="flex items-center">
								<span className="mr-2">•</span>
								<span>Mon - Fri. : 8 AM - 4 PM</span>
							</li>
							<li className="flex items-center">
								<span className="mr-2">•</span>
								<span>Saturday : Closed</span>
							</li>
							<li className="flex items-center">
								<span className="mr-2">•</span>
								<span>Sunday : Closed</span>
							</li>
						</ul>
					</div>

					{/* Our Services */}
					<div>
						<h3 className="mb-6 font-semibold text-lg text-white">
							Our Services
						</h3>
						<ul className="space-y-3 text-sm">
							<li>
								<Link
									href="/"
									className="text-slate-400 transition-colors hover:text-white"
								>
									Flood and Erosion Control
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-slate-400 transition-colors hover:text-white"
								>
									Land clearing and development
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-slate-400 transition-colors hover:text-white"
								>
									Sales of Agricultural Produce
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-slate-400 transition-colors hover:text-white"
								>
									Water & Plantation
								</Link>
							</li>
						</ul>
					</div>

					{/* Recent Posts */}
					<div>
						<h3 className="mb-6 font-semibold text-lg text-white">
							Recent Posts
						</h3>
						<ul className="space-y-3 text-sm">
							<li>
								<Link
									href="/news-media"
									className="text-slate-400 transition-colors hover:text-white"
								>
									Latest News Updates
								</Link>
							</li>
							<li>
								<Link
									href="/tender"
									className="text-slate-400 transition-colors hover:text-white"
								>
									New Tender Announcements
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 border-slate-800 border-t pt-8 text-center">
					<p className="text-slate-400 text-sm">
						Copyright © HJRBDA {new Date().getFullYear()}. All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
}
