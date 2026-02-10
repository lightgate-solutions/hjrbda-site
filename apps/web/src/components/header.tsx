"use client";
import Link from "next/link";

import UserMenu from "./user-menu";

export default function Header() {
	const links = [
		{ to: "/", label: "HOME" },
		{ to: "/about", label: "ABOUT" },
		{ to: "/key-projects", label: "KEY PROJECTS" },
		{ to: "/news-media", label: "NEWS & MEDIA" },
		{ to: "/tender", label: "TENDER" },
		{ to: "/apply-for-gyes", label: "APPLY FOR GYES" },
		{ to: "/contact", label: "CONTACT" },
	] as const;

	return (
		<header className="sticky top-0 z-50 w-full border-gray-200 border-b bg-white/95 shadow-sm backdrop-blur-md">
			<div className="container mx-auto flex h-20 items-center justify-between px-6">
				<Link href="/" className="flex items-center space-x-3">
					<div className="flex flex-col">
						<span className="font-bold text-2xl text-gray-900 tracking-tight">
							HJRBDA
						</span>
						<span className="font-normal text-gray-600 text-xs">
							Hadaija Jama'are River Basin Development Authority
						</span>
					</div>
				</Link>
				<nav className="hidden items-center gap-8 lg:flex">
					{links.map(({ to, label }) => {
						return (
							<Link
								key={to}
								href={to}
								className="border-transparent border-b-2 pb-1 font-semibold text-gray-700 text-sm transition-colors hover:border-blue-600 hover:text-blue-600"
							>
								{label}
							</Link>
						);
					})}
				</nav>
				<div className="flex items-center gap-3">
					<UserMenu />
				</div>
			</div>
		</header>
	);
}
