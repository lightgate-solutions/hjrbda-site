import { MapPin } from "lucide-react";
import Footer from "@/components/footer";
import PageIntro from "@/components/page-intro";
import { PROJECT_OFFICES } from "@/data/project-offices";

export default function KeyProjectsPage() {
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
						eyebrow="Projects"
						title="Project offices"
						breadcrumbs={[
							{ href: "/", label: "Home" },
							{ label: "Project offices" },
						]}
					/>
					<p className="mt-4 max-w-2xl text-[var(--text-secondary)] text-body leading-relaxed">
						Apart from the four established Directorates, the Authority has
						Project areas that provide services within its catchment areas of
						Kano, Jigawa and two-thirds of Bauchi states.
					</p>
					<p className="mt-3 max-w-2xl text-[var(--text-secondary)] text-body leading-relaxed">
						Each project office provides services within the Authority&apos;s
						catchment area (Kano, Jigawa and two-thirds of Bauchi states).
					</p>
				</div>
			</div>

			<div className="container mx-auto px-4 py-16 sm:px-6 md:py-24">
				<div
					className="overflow-hidden rounded-xl border"
					style={{
						backgroundColor: "var(--card-bg)",
						borderColor: "var(--card-border)",
					}}
				>
					{/* Column headers — visible on md+ */}
					<div
						className="hidden border-b px-5 py-4 md:grid md:grid-cols-[1fr_auto] md:gap-4"
						style={{ borderColor: "var(--card-border)" }}
					>
						<span
							className="font-semibold text-sm uppercase tracking-wide"
							style={{ color: "var(--text-muted)" }}
						>
							Project office
						</span>
						<span
							className="font-semibold text-sm uppercase tracking-wide"
							style={{ color: "var(--text-muted)" }}
						>
							Location
						</span>
					</div>

					{PROJECT_OFFICES.map((office, index) => (
						<div
							key={office.id}
							className="grid grid-cols-1 gap-2 border-b px-4 py-4 last:border-b-0 sm:px-5 md:grid-cols-[1fr_auto] md:items-center md:gap-4"
							style={{
								borderColor: "var(--card-border)",
								backgroundColor:
									index % 2 === 1 ? "var(--section-alt)" : undefined,
							}}
						>
							<span className="min-w-0 break-words font-medium text-[var(--text-primary)] text-base">
								{office.title}
							</span>
							<span className="flex items-center gap-2 text-[var(--text-secondary)] text-body md:justify-end">
								<MapPin
									className="h-4 w-4 shrink-0 md:hidden"
									style={{ color: "var(--accent)" }}
									aria-hidden
								/>
								{office.location}
							</span>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
