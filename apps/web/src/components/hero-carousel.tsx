"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    description: "Promoting sustainable water resource management in the Hadaija Jama'are region",
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
    <div className="relative w-full overflow-hidden bg-muted">
      <div className="relative h-[500px] md:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="h-full w-full bg-gradient-to-r from-blue-900/80 to-blue-700/80"
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Placeholder overlay */}
              <div className="flex h-full items-center justify-center bg-muted/50">
                <div className="text-center text-white">
                  <div className="mb-4 text-4xl font-bold md:text-5xl">{slide.title}</div>
                  <div className="text-lg md:text-xl">{slide.description}</div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-8 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white/50"
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
