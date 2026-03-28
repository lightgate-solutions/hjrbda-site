import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AdminNav } from "@/components/admin-nav";
import { TenderForm } from "@/components/tenders/tender-form";
import { Button } from "@/components/ui/button";

export default function NewTenderPage() {
	return (
		<div className="flex min-h-screen flex-col">
			<AdminNav
				breadcrumbs={[
					{ href: "/admin/tenders", label: "Tenders" },
					{ label: "New tender" },
				]}
			/>
			<div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
				<div className="mb-8">
					<Button variant="ghost" size="sm" asChild className="mb-4">
						<Link href="/admin/tenders" className="inline-flex items-center gap-2">
							<ArrowLeft className="h-4 w-4" />
							Back to tenders
						</Link>
					</Button>
					<h1 className="mb-2 font-bold font-heading text-[var(--text-primary)] text-h1 tracking-tight">
						Create new tender
					</h1>
					<p className="text-[var(--text-secondary)] text-body">
						Fill in the details below to create a new tender notice
					</p>
				</div>

				<TenderForm />
			</div>
		</div>
	);
}
