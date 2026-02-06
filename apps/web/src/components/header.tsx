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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">HJRBDA</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          {links.map(({ to, label }) => {
            return (
              <Link
                key={to}
                href={to}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
