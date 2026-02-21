import { FileText, LayoutDashboard, Newspaper, Settings } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
	try {
		const session = await auth.api.getSession({
			headers: await headers(),
		});

		if (!session?.user) {
			redirect("/login");
		}

		const links = [
			{
				href: "/admin/news",
				title: "Manage News",
				description: "Create, edit, and publish news articles",
				icon: FileText,
			},
			{
				href: "/news-media",
				title: "News & Media",
				description: "View all published news on the site",
				icon: Newspaper,
			},
		];

		return (
			<div className="flex min-h-screen flex-col">
				<div className="container mx-auto px-4 py-16 sm:px-6 md:py-24">
					<nav
						className="mb-8 text-[var(--text-muted)] text-caption"
						aria-label="Breadcrumb"
					>
						<Link
							href="/"
							className="transition-colors hover:text-[var(--text-primary)]"
						>
							Home
						</Link>
						<span className="mx-2">/</span>
						<Link
							href="/admin/dashboard"
							className="transition-colors hover:text-[var(--text-primary)]"
						>
							Admin
						</Link>
						<span className="mx-2">/</span>
						<span className="text-[var(--text-primary)]">Dashboard</span>
					</nav>

					<div className="mb-10">
						<div
							className="mb-3 flex items-center gap-2 font-semibold text-caption uppercase tracking-wider"
							style={{ color: "var(--accent)" }}
						>
							<LayoutDashboard className="h-4 w-4" />
							Dashboard
						</div>
						<h1 className="font-bold font-heading text-[var(--text-primary)] text-h1 tracking-tight">
							Welcome back, {session.user.name ?? "User"}
						</h1>
						<p className="mt-2 text-[var(--text-muted)] text-body">
							{session.user.email}
						</p>
					</div>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{links.map((item) => {
							const Icon = item.icon;
							return (
								<Link
									key={item.href}
									href={item.href as "/admin/news" | "/news-media"}
								>
									<Card className="card-institutional h-full overflow-hidden">
										<CardHeader className="pb-2">
											<div
												className="mb-3 flex h-10 w-10 items-center justify-center rounded-md"
												style={{
													backgroundColor: "var(--accent-light)",
													color: "var(--accent)",
												}}
											>
												<Icon className="h-5 w-5" />
											</div>
											<CardTitle className="font-bold font-heading text-[var(--text-primary)] text-h3">
												{item.title}
											</CardTitle>
											<CardDescription className="text-[var(--text-secondary)] text-body">
												{item.description}
											</CardDescription>
										</CardHeader>
										<CardContent className="pt-0">
											<Button
												className="w-full font-medium text-white"
												style={{ backgroundColor: "var(--accent)" }}
												size="sm"
											>
												Open
											</Button>
										</CardContent>
									</Card>
								</Link>
							);
						})}
					</div>

					<div
						className="mt-12 rounded-md border border-dashed p-6"
						style={{
							borderColor: "var(--card-border)",
							backgroundColor: "var(--section-alt)",
						}}
					>
						<div className="flex items-center gap-2 text-[var(--text-muted)] text-base">
							<Settings className="h-4 w-4" />
							<span>
								More options (e.g. profile, settings) can be added here.
							</span>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	} catch {
		redirect("/");
	}
}
