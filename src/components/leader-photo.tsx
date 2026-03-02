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
			className={`relative aspect-[3/4] w-full min-w-[140px] max-w-[200px] overflow-hidden rounded-lg bg-[var(--section-alt)] ${className ?? ""}`}
		>
			{!error ? (
				<Image
					src={src}
					alt={alt}
					width={200}
					height={267}
					className="object-cover"
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
