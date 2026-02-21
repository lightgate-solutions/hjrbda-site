"use client";

import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

const PROJECT_OFFICES = [
	{
		id: 1,
		title: "Kano River Irrigation Project (West Branch)",
		location: "Kura",
	},
	{
		id: 2,
		title: "Kano River Irrigation Project (East Branch)",
		location: "Bunkure",
	},
	{ id: 3, title: "Hadejia Valley Irrigation Project", location: "Hadejia" },
	{ id: 4, title: "Tiga Dam Project", location: "Tiga" },
	{
		id: 5,
		title: "Challawa Gorge Dam and Irrigation Project",
		location: "Karaye",
	},
	{
		id: 6,
		title: "Galala and Kafin Zaki Dams and Irrigation Project",
		location: "Nasaru",
	},
	{ id: 7, title: "Jama'are Valley Project", location: "Zigau" },
	{ id: 8, title: "Katagum Irrigation Project", location: "Katagum" },
	{ id: 9, title: "Shongai Model Farm", location: "Wudil" },
	{ id: 10, title: "Gari Irrigation Project", location: "Kazaure" },
	{ id: 11, title: "Maigatari Irrigation Project", location: "Maigatari" },
] as const;

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
		<div className="relative">
			<div className="overflow-hidden">
				{PROJECT_OFFICES.map((office, index) => (
					<div
						key={office.id}
						className={`transition-opacity duration-500 ease-out ${
							index === current ? "block opacity-100" : "hidden opacity-0"
						}`}
						aria-hidden={index !== current}
					>
						<Card className="card-institutional overflow-hidden border-2">
							<CardHeader
								className="pt-8 pb-2"
								style={{ borderColor: "var(--card-border)" }}
							>
								<div
									className="mb-4 h-1 w-12 rounded-sm"
									style={{ backgroundColor: "var(--accent)" }}
								/>
								<h3 className="font-bold font-heading text-[var(--text-primary)] text-xl leading-tight md:text-2xl">
									{office.title}
								</h3>
							</CardHeader>
							<CardContent className="flex items-center gap-2 pb-8 text-[var(--text-secondary)] text-body">
								<MapPin
									className="h-4 w-4 shrink-0"
									style={{ color: "var(--accent)" }}
									aria-hidden
								/>
								<span className="font-medium text-body">{office.location}</span>
							</CardContent>
						</Card>
					</div>
				))}
			</div>

			<div className="mt-6 flex items-center justify-center gap-4">
				<Button
					type="button"
					variant="outline"
					size="icon"
					className="h-10 w-10 shrink-0 rounded-full border-2"
					style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
					onClick={goPrev}
					aria-label="Previous project office"
				>
					<ChevronLeft className="h-5 w-5" />
				</Button>

				<div className="flex gap-1.5">
					{PROJECT_OFFICES.map((office, index) => (
						<button
							key={office.id}
							type="button"
							className={`h-1.5 w-6 rounded-full transition-all sm:w-8 ${
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
					className="h-10 w-10 shrink-0 rounded-full border-2"
					style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
					onClick={goNext}
					aria-label="Next project office"
				>
					<ChevronRight className="h-5 w-5" />
				</Button>
			</div>

			<p className="mt-6 text-center text-[var(--text-muted)] text-sm">
				{current + 1} of {PROJECT_OFFICES.length} project offices
			</p>
		</div>
	);
}
