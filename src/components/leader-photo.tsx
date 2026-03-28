"use client";

import Image from "next/image";
import { useState } from "react";

export default function LeaderPhoto({
	src,
	alt,
	fallbackInitials,
	className,
}: {
	src: string;
	alt: string;
	fallbackInitials: string;
	className?: string;
}) {
	const [error, setError] = useState(false);

	return (
		<div
			className={`relative aspect-[4/3] w-full max-w-[320px] shrink-0 overflow-hidden rounded-lg bg-[var(--section-alt)] ${className ?? ""}`}
		>
			{!error ? (
				<Image
					src={src}
					alt={alt}
					fill
					className="object-cover object-center"
					onError={() => setError(true)}
				/>
			) : null}
			{error ? (
				<div
					className="absolute inset-0 flex items-center justify-center font-bold font-heading text-2xl text-[var(--accent)]"
					aria-hidden
				>
					{fallbackInitials}
				</div>
			) : null}
		</div>
	);
}
