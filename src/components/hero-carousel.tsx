"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface CarouselSlide {
	id: number;
	title: string;
	description: string;
}

const slides: CarouselSlide[] = [
	{
		id: 1,
		title: "Water Resources Development",
		description:
			"Promoting sustainable water resource management in the Hadejia-Jama'are region",
	},
	{
		id: 2,
		title: "Agricultural Development",
		description: "Supporting irrigation projects and agricultural productivity",
	},
	{
		id: 3,
		title: "Infrastructure Projects",
		description: "Building dams, weirs, and water supply systems",
	},
];

export default function HeroCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	const goToPrevious = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const goToNext = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	return (
		<div
			className="relative w-full overflow-hidden"
			style={{
				background:
					"linear-gradient(160deg, var(--hero-darker) 0%, var(--hero-dark) 45%, #0f2c2e 100%)",
			}}
		>
			<div className="relative h-[420px] sm:h-[480px] md:h-[550px] lg:h-[620px]">
				{slides.map((slide, index) => (
					<div
						key={slide.id}
						className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
							index === currentSlide ? "opacity-100" : "opacity-0"
						}`}
					>
						<div
							className="flex h-full w-full items-center justify-center px-4 sm:px-6"
							style={{
								background:
									"linear-gradient(to right, var(--hero-darker) 0%, var(--hero-dark) 40%, var(--hero-dark) 60%, var(--hero-darker) 100%)",
							}}
						>
							<div className="container mx-auto max-w-4xl text-center">
								<h1 className="mb-4 font-bold font-heading text-2xl text-white tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
									{slide.title}
								</h1>
								<p className="mx-auto max-w-2xl font-normal text-base text-white/90 sm:text-lg md:text-xl lg:text-2xl">
									{slide.description}
								</p>
							</div>
						</div>
					</div>
				))}

				<Button
					type="button"
					variant="outline"
					size="icon"
					className="absolute top-1/2 left-3 h-10 w-10 -translate-y-1/2 border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:left-6"
					onClick={goToPrevious}
					aria-label="Previous slide"
				>
					<ChevronLeft className="h-5 w-5" />
				</Button>
				<Button
					type="button"
					variant="outline"
					size="icon"
					className="absolute top-1/2 right-3 h-10 w-10 -translate-y-1/2 border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:right-6"
					onClick={goToNext}
					aria-label="Next slide"
				>
					<ChevronRight className="h-5 w-5" />
				</Button>

				<div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-8">
					{slides.map((slide, index) => (
						<button
							key={slide.id}
							type="button"
							className={`h-1.5 w-8 rounded-full transition-all sm:w-10 ${
								index === currentSlide
									? "bg-white"
									: "bg-white/40 hover:bg-white/60"
							}`}
							onClick={() => goToSlide(index)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
