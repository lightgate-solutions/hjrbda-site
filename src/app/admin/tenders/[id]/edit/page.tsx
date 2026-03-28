import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminNav } from "@/components/admin-nav";
import { TenderForm } from "@/components/tenders/tender-form";
import { Button } from "@/components/ui/button";
import { getTenderById } from "@/lib/actions/tenders";

interface EditTenderPageProps {
	params: Promise<{ id: string }>;
}

export default async function EditTenderPage({ params }: EditTenderPageProps) {
	const { id } = await params;
	const tender = await getTenderById(id);

	if (!tender) {
		notFound();
	}

	return (
		<div className="flex min-h-screen flex-col">
			<AdminNav
				breadcrumbs={[
					{ href: "/admin/tenders", label: "Tenders" },
					{ label: "Edit tender" },
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
					<h1 className="mb-2 font-bold font-heading text-2xl text-[var(--text-primary)] tracking-tight">
						Edit tender
					</h1>
					<p className="text-[var(--text-secondary)] text-body">
						Update the tender details below
					</p>
				</div>

				<TenderForm
					tender={{
						id: tender.id,
						title: tender.title,
						description: tender.description,
						documentUrl: tender.documentUrl,
						status: tender.status,
						closingDate: tender.closingDate,
					}}
					isEditing
				/>
			</div>
		</div>
	);
}
