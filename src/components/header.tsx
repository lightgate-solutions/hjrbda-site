"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import UserMenu from "./user-menu";

const links = [
	{ to: "/", label: "Home" },
	{ to: "/about", label: "About" },
	{ to: "/key-projects", label: "Projects" },
	{ to: "/news-media", label: "News" },
	{ to: "/tender", label: "Tender" },
	{ to: "/apply-for-gyes", label: "GYES" },
	{ to: "/contact", label: "Contact" },
] as const;

export default function Header() {
	const pathname = usePathname();
	const [mobileOpen, setMobileOpen] = useState(false);

	const closeMobile = useCallback(() => setMobileOpen(false), []);

	// Close on route change (e.g. after clicking a link)
	useEffect(() => {
		closeMobile();
	}, [closeMobile]);

	// Close on escape
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeMobile();
		};
		window.addEventListener("keydown", handleEscape);
		return () => window.removeEventListener("keydown", handleEscape);
	}, [closeMobile]);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (mobileOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);

	return (
		<header className="sticky top-0 z-50 w-full border-[var(--header-border)] border-b bg-[var(--header-bg)] shadow-sm backdrop-blur-md">
			<div className="container mx-auto flex h-16 min-h-14 items-center justify-between gap-4 px-4 sm:px-6">
				{/* Logo - HJRBDA only to reduce congestion */}
				<Link
					href="/"
					className="flex shrink-0 items-center rounded focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
				>
					<span className="font-bold font-heading text-[var(--header-logo)] text-lg tracking-tight sm:text-xl">
						HJRBDA
					</span>
				</Link>

				{/* Desktop nav */}
				<nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
					{links.map(({ to, label }) => (
						<Link
							key={to}
							href={to}
							className={`border-transparent border-b-2 pb-1 font-medium text-[var(--nav-fg)] text-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] ${
								pathname === to
									? "border-[var(--accent)] text-[var(--accent)]"
									: ""
							}`}
						>
							{label}
						</Link>
					))}
				</nav>

				{/* Right: User menu + mobile toggle */}
				<div className="flex items-center gap-2">
					<UserMenu />
					<Button
						type="button"
						variant="ghost"
						size="icon"
						className="h-10 w-10 rounded-md text-[var(--nav-fg)] hover:bg-[var(--nav-hover)] lg:hidden"
						onClick={() => setMobileOpen((o) => !o)}
						aria-expanded={mobileOpen}
						aria-label={mobileOpen ? "Close menu" : "Open menu"}
					>
						{mobileOpen ? (
							<X className="h-5 w-5" aria-hidden />
						) : (
							<Menu className="h-5 w-5" aria-hidden />
						)}
					</Button>
				</div>
			</div>

			{/* Mobile / tablet menu */}
			<div
				className={`overflow-hidden transition-[height,opacity] duration-300 ease-out lg:hidden ${
					mobileOpen ? "h-[calc(100vh-4rem)] opacity-100" : "h-0 opacity-0"
				}`}
				aria-hidden={!mobileOpen}
			>
				<nav
					className="border-[var(--header-border)] border-t bg-[var(--header-bg)] px-4 py-6 sm:px-6"
					aria-label="Mobile"
				>
					<ul className="flex flex-col gap-1">
						{links.map(({ to, label }) => (
							<li key={to}>
								<Link
									href={to}
									onClick={closeMobile}
									className={`block rounded-lg px-4 py-3 font-medium text-[var(--nav-fg)] text-sm transition-colors hover:bg-[var(--nav-hover)] hover:text-[var(--accent)] focus:bg-[var(--nav-hover)] focus:text-[var(--accent)] focus:outline-none ${
										pathname === to
											? "bg-[var(--nav-hover)] text-[var(--accent)]"
											: ""
									}`}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
					<p className="mt-6 px-4 text-[var(--muted-fg)] text-sm sm:px-6">
						Hadejia Jama&apos;are River Basin Development Authority
					</p>
				</nav>
			</div>
		</header>
	);
}
