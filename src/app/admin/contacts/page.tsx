import { Inbox } from "lucide-react";
import { Suspense } from "react";
import { AdminNav } from "@/components/admin-nav";
import { DeleteContactDialog, MarkReadButton } from "@/components/contacts/contact-actions";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";
import { getAdminContacts, getAdminContactsCount } from "@/lib/actions/contact";

interface AdminContactsPageProps {
	searchParams: Promise<{ status?: string; page?: string }>;
}

export default async function AdminContactsPage({ searchParams }: AdminContactsPageProps) {
	const params = await searchParams;
	const status = params.status ?? "";
	const page = Number.parseInt(params.page ?? "1", 10);
	const limit = 15;
	const offset = (page - 1) * limit;

	const [messages, totalCount] = await Promise.all([
		getAdminContacts({ status, limit, offset }),
		getAdminContactsCount({ status }),
	]);

	const totalPages = Math.ceil(Number(totalCount) / limit);
	const queryParams: Record<string, string> = {};
	if (status) queryParams.status = status;

	const filterLinks = [
		{ label: "All", value: "" },
		{ label: "Unread", value: "unread" },
		{ label: "Read", value: "read" },
	];

	return (
		<div className="flex min-h-screen flex-col">
			<AdminNav breadcrumbs={[{ label: "Contacts" }]} />
			<div className="container mx-auto px-4 py-16 sm:px-6 md:py-24">
				<div className="mb-8">
					<h1 className="mb-2 font-bold font-heading text-[var(--text-primary)] text-h1 tracking-tight">
						Contact messages
					</h1>
					<p className="text-[var(--text-secondary)] text-base">
						Messages submitted through the public contact form
					</p>
				</div>

				{/* Filter tabs */}
				<div className="mb-6 flex gap-2">
					{filterLinks.map((f) => {
						const active = status === f.value;
						return (
							<a
								key={f.value}
								href={f.value ? `/admin/contacts?status=${f.value}` : "/admin/contacts"}
								className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
									active
										? "text-white"
										: "text-[var(--text-secondary)] hover:bg-[var(--section-alt)]"
								}`}
								style={active ? { backgroundColor: "var(--accent)" } : undefined}
							>
								{f.label}
							</a>
						);
					})}
				</div>

				{messages.length === 0 ? (
					<EmptyState
						title="No messages"
						description={status === "unread" ? "No unread messages" : "No messages yet"}
						icon={<Inbox className="h-16 w-16" />}
					/>
				) : (
					<>
						<div className="space-y-4">
							{messages.map((msg) => (
								<div
									key={msg.id}
									className="rounded-none border p-6 transition-shadow hover:shadow-md"
									style={{
										borderColor: "var(--card-border)",
										backgroundColor:
											msg.status === "unread"
												? "var(--accent-light)"
												: "var(--card-bg)",
										borderLeftWidth: msg.status === "unread" ? "4px" : "1px",
										borderLeftColor:
											msg.status === "unread"
												? "var(--accent)"
												: "var(--card-border)",
									}}
								>
									<div className="mb-3 flex flex-wrap items-start justify-between gap-3">
										<div>
											<div className="flex flex-wrap items-center gap-2">
												<span className="font-semibold text-[var(--text-primary)]">
													{msg.name}
												</span>
												<span className="text-[var(--text-muted)] text-sm">
													&lt;{msg.email}&gt;
												</span>
												{msg.status === "unread" && (
													<span
														className="rounded px-2 py-0.5 font-medium text-xs text-white"
														style={{ backgroundColor: "var(--accent)" }}
													>
														New
													</span>
												)}
											</div>
											<p className="mt-1 font-medium text-[var(--text-primary)] text-sm">
												{msg.subject}
											</p>
										</div>
										<span className="text-[var(--text-muted)] text-xs">
											{new Date(msg.createdAt).toLocaleString()}
										</span>
									</div>

									<p className="mb-4 whitespace-pre-wrap text-[var(--text-secondary)] text-body leading-relaxed">
										{msg.message}
									</p>

									<div className="flex gap-2">
										<Suspense fallback={null}>
											<MarkReadButton id={msg.id} status={msg.status} />
										</Suspense>
										<a
											href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}
											className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm transition-colors hover:bg-[var(--section-alt)]"
											style={{ borderColor: "var(--card-border)", color: "var(--text-secondary)" }}
										>
											Reply by email
										</a>
										<DeleteContactDialog id={msg.id} subject={msg.subject} />
									</div>
								</div>
							))}
						</div>

						{totalPages > 1 && (
							<div className="mt-8">
								<Pagination
									currentPage={page}
									totalPages={totalPages}
									basePath="/admin/contacts"
									queryParams={queryParams}
								/>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
}
