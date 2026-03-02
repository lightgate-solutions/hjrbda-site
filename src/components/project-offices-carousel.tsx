"use client";

import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { PROJECT_OFFICES } from "@/data/project-offices";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function ProjectOfficesCarousel() {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % PROJECT_OFFICES.length);
		}, 4500);
		return () => clearInterval(timer);
	}, []);

	const goPrev = () => {
		setCurrent(
			(prev) => (prev - 1 + PROJECT_OFFICES.length) % PROJECT_OFFICES.length,
		);
	};

	const goNext = () => {
		setCurrent((prev) => (prev + 1) % PROJECT_OFFICES.length);
	};

	return (
		<div className="relative min-w-0 max-w-full">
			<div className="overflow-hidden">
				{PROJECT_OFFICES.map((office, index) => (
					<div
						key={office.id}
						className={`transition-opacity duration-500 ease-out ${
							index === current ? "block opacity-100" : "hidden opacity-0"
						}`}
						aria-hidden={index !== current}
					>
						<Card className="card-institutional min-w-0 overflow-hidden border-2">
							<CardHeader
								className="pt-6 pb-2 sm:pt-8"
								style={{ borderColor: "var(--card-border)" }}
							>
								<div
									className="mb-3 h-1 w-10 rounded-sm sm:mb-4 sm:w-12"
									style={{ backgroundColor: "var(--accent)" }}
								/>
								<h3 className="break-words font-bold font-heading text-[var(--text-primary)] text-lg leading-tight sm:text-xl md:text-2xl">
									{office.title}
								</h3>
							</CardHeader>
							<CardContent className="flex items-center gap-2 pb-6 text-[var(--text-secondary)] text-body sm:pb-8">
								<MapPin
									className="h-4 w-4 shrink-0"
									style={{ color: "var(--accent)" }}
									aria-hidden
								/>
								<span className="min-w-0 font-medium text-body">
									{office.location}
								</span>
							</CardContent>
						</Card>
					</div>
				))}
			</div>

			<div className="mt-4 flex min-w-0 max-w-full flex-wrap items-center justify-center gap-2 sm:mt-6 sm:gap-4">
				<Button
					type="button"
					variant="outline"
					size="icon"
					className="h-9 w-9 shrink-0 rounded-full border-2 sm:h-10 sm:w-10"
					style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
					onClick={goPrev}
					aria-label="Previous project office"
				>
					<ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
				</Button>

				<div className="flex min-w-0 shrink justify-center gap-1">
					{PROJECT_OFFICES.map((office, index) => (
						<button
							key={office.id}
							type="button"
							className={`h-1.5 w-3 shrink-0 rounded-full transition-all sm:w-5 md:w-6 ${
								index === current
									? "opacity-100"
									: "opacity-40 hover:opacity-70"
							}`}
							style={{
								backgroundColor:
									index === current ? "var(--accent)" : "var(--text-muted)",
							}}
							onClick={() => setCurrent(index)}
							aria-label={`Go to office ${index + 1}`}
						/>
					))}
				</div>

				<Button
					type="button"
					variant="outline"
					size="icon"
					className="h-9 w-9 shrink-0 rounded-full border-2 sm:h-10 sm:w-10"
					style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
					onClick={goNext}
					aria-label="Next project office"
				>
					<ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
				</Button>
			</div>

			<p className="mt-4 text-center text-[var(--text-muted)] text-sm sm:mt-6">
				{current + 1} of {PROJECT_OFFICES.length} project offices
			</p>
		</div>
	);
}
