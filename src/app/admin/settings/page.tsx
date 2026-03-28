import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AdminNav } from "@/components/admin-nav";
import { PasswordForm, ProfileForm } from "@/components/admin/settings-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session?.user) redirect("/login");

	return (
		<div className="flex min-h-screen flex-col">
			<AdminNav breadcrumbs={[{ label: "Settings" }]} />
			<div className="container mx-auto max-w-2xl px-4 py-16 sm:px-6 md:py-24">
				<div className="mb-10">
					<h1 className="mb-2 font-bold font-heading text-[var(--text-primary)] text-h1 tracking-tight">
						Settings
					</h1>
					<p className="text-[var(--text-secondary)] text-body">
						Manage your account details and security
					</p>
				</div>

				<div className="space-y-8">
					<Card className="card-institutional">
						<CardHeader>
							<CardTitle className="font-bold font-heading text-[var(--text-primary)] text-h3">
								Profile
							</CardTitle>
							<CardDescription className="text-[var(--text-secondary)] text-body">
								Update your display name. Your email is{" "}
								<span className="font-medium text-[var(--text-primary)]">
									{session.user.email}
								</span>
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ProfileForm currentName={session.user.name ?? ""} />
						</CardContent>
					</Card>

					<Card className="card-institutional">
						<CardHeader>
							<CardTitle className="font-bold font-heading text-[var(--text-primary)] text-h3">
								Password
							</CardTitle>
							<CardDescription className="text-[var(--text-secondary)] text-body">
								Change your password. Must be at least 8 characters.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<PasswordForm />
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
