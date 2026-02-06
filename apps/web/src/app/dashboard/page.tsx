import { auth } from "@hjrbda-site/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import Dashboard from "./dashboard";

export default async function DashboardPage() {
	try {
		const session = await auth.api.getSession({
			headers: await headers(),
		});

		if (!session?.user) {
			redirect("/login");
		}

		return (
			<div>
				<h1>Dashboard</h1>
				<p>Welcome {session.user.name}</p>
				<Dashboard session={session} />
			</div>
		);
	} catch {
		// If auth is not configured (no database), redirect to home
		redirect("/");
	}
}
