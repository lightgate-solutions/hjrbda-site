"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface CarouselSlide {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
}

const slides: CarouselSlide[] = [
	{
		id: 1,
		title: "Water Resources Development",
		description:
			"Promoting sustainable water resource management in the Hadaija Jama'are region",
		imageUrl: "/placeholder-hero-1.jpg",
	},
	{
		id: 2,
		title: "Agricultural Development",
		description: "Supporting irrigation projects and agricultural productivity",
		imageUrl: "/placeholder-hero-2.jpg",
	},
	{
		id: 3,
		title: "Infrastructure Projects",
		description: "Building dams, weirs, and water supply systems",
		imageUrl: "/placeholder-hero-3.jpg",
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
		<div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
			<div className="relative h-[550px] md:h-[650px]">
				{slides.map((slide, index) => (
					<div
						key={slide.id}
						className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
							index === currentSlide ? "opacity-100" : "opacity-0"
						}`}
					>
						<div
							className="h-full w-full bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95"
							style={{
								backgroundImage: `url(${slide.imageUrl})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							{/* Professional overlay */}
							<div className="flex h-full items-center justify-center bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80">
								<div className="container mx-auto px-6 text-center">
									<div className="mb-6 font-bold text-4xl text-white tracking-tight md:text-5xl lg:text-6xl">
										{slide.title}
									</div>
									<div className="mx-auto max-w-2xl font-light text-lg text-slate-200 md:text-xl lg:text-2xl">
										{slide.description}
									</div>
								</div>
							</div>
						</div>
					</div>
				))}

				{/* Navigation buttons */}
				<Button
					variant="outline"
					size="icon"
					className="absolute top-1/2 left-6 -translate-y-1/2 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
					onClick={goToPrevious}
				>
					<ChevronLeft className="h-5 w-5" />
				</Button>
				<Button
					variant="outline"
					size="icon"
					className="absolute top-1/2 right-6 -translate-y-1/2 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
					onClick={goToNext}
				>
					<ChevronRight className="h-5 w-5" />
				</Button>

				{/* Slide indicators */}
				<div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
					{slides.map((slide, index) => (
						<button
							key={slide.id}
							type="button"
							className={`h-1.5 w-10 rounded-full transition-all ${
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
