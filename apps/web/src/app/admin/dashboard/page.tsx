import { auth } from "@hjrbda-site/auth";
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
				<div className="container mx-auto px-6 py-12">
					<nav className="mb-8 text-muted-foreground text-sm">
						<Link href="/" className="transition-colors hover:text-foreground">
							Home
						</Link>
						<span className="mx-2">/</span>
						<Link
							href="/admin/dashboard"
							className="transition-colors hover:text-foreground"
						>
							Admin
						</Link>
						<span className="mx-2">/</span>
						<span className="text-foreground">Dashboard</span>
					</nav>

					<div className="mb-10">
						<div className="mb-3 flex items-center gap-2 font-semibold text-primary text-sm uppercase tracking-wider">
							<LayoutDashboard className="h-4 w-4" />
							Dashboard
						</div>
						<h1 className="font-bold text-4xl text-foreground tracking-tight md:text-5xl">
							Welcome back, {session.user.name ?? "User"}
						</h1>
						<p className="mt-2 text-muted-foreground">{session.user.email}</p>
					</div>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{links.map((item) => {
							const Icon = item.icon;
							return (
								<Link
									key={item.href}
									href={item.href as "/admin/news" | "/news-media"}
								>
									<Card className="h-full border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
										<CardHeader className="pb-2">
											<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
												<Icon className="h-5 w-5" />
											</div>
											<CardTitle className="font-bold text-gray-900 text-lg">
												{item.title}
											</CardTitle>
											<CardDescription className="text-gray-600">
												{item.description}
											</CardDescription>
										</CardHeader>
										<CardContent className="pt-0">
											<Button
												className="w-full bg-blue-600 text-white hover:bg-blue-700"
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

					<div className="mt-12 rounded-md border border-gray-200 border-dashed bg-gray-50/50 p-6 dark:border-gray-700 dark:bg-gray-900/20">
						<div className="flex items-center gap-2 text-muted-foreground text-sm">
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
