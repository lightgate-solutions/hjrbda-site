"use client";
import Link from "next/link";

import { ModeToggle } from "./mode-toggle";
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
		<header className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/98 shadow-sm backdrop-blur-md">
			<div className="container mx-auto flex h-20 items-center justify-between px-6">
				<Link href="/" className="flex items-center space-x-3">
					<div className="flex flex-col">
						<span className="font-bold text-foreground text-xl tracking-tight">
							HJRBDA
						</span>
						<span className="font-normal text-muted-foreground text-xs">
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
								className="border-transparent border-b-2 pb-1 font-medium text-foreground/70 text-sm transition-colors hover:border-primary/50 hover:text-foreground"
							>
								{label}
							</Link>
						);
					})}
				</nav>
				<div className="flex items-center gap-3">
					<ModeToggle />
					<UserMenu />
				</div>
			</div>
		</header>
	);
}
