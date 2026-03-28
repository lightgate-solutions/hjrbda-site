import { Edit, FileText, Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { AdminNav } from "@/components/admin-nav";
import { DeleteTenderDialog } from "@/components/tenders/delete-tender-dialog";
import { TenderSearch } from "@/components/tenders/tender-search";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";
import { getAdminTenders, getAdminTendersCount } from "@/lib/actions/tenders";

interface AdminTendersPageProps {
	searchParams: Promise<{
		search?: string;
		status?: string;
		page?: string;
	}>;
}

const statusColors: Record<string, string> = {
	published: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
	draft: "",
	closed: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

export default async function AdminTendersPage({
	searchParams,
}: AdminTendersPageProps) {
	const params = await searchParams;
	const search = params.search ?? "";
	const status = params.status ?? "";
	const page = Number.parseInt(params.page ?? "1", 10);
	const limit = 10;
	const offset = (page - 1) * limit;

	const [tenders, totalCount] = await Promise.all([
		getAdminTenders({ search, status, limit, offset }),
		getAdminTendersCount({ search, status }),
	]);

	const totalPages = Math.ceil(Number(totalCount) / limit);
	const queryParams: Record<string, string> = {};
	if (search) queryParams.search = search;
	if (status) queryParams.status = status;

	return (
		<div className="flex min-h-screen flex-col">
			<AdminNav breadcrumbs={[{ label: "Tenders" }]} />
			<div className="container mx-auto px-4 py-16 sm:px-6 md:py-24">
				<div className="mb-8 flex items-center justify-between">
					<div>
						<h1 className="mb-2 font-bold font-heading text-[var(--text-primary)] text-h1 tracking-tight">
							Manage tenders
						</h1>
						<p className="text-[var(--text-secondary)] text-base">
							Create, edit, and manage tender notices
						</p>
					</div>
					<Button
						className="font-medium text-white"
						style={{ backgroundColor: "var(--accent)" }}
						asChild
					>
						<Link href="/admin/tenders/new">
							<Plus className="mr-2 h-4 w-4" />
							New tender
						</Link>
					</Button>
				</div>

				<div className="mb-6">
					<Suspense
						fallback={
							<div className="text-[var(--text-muted)] text-sm">Loading...</div>
						}
					>
						<TenderSearch placeholder="Search tenders..." />
					</Suspense>
				</div>

				{tenders.length === 0 ? (
					<EmptyState
						title="No tenders found"
						description={
							search
								? "Try adjusting your search terms"
								: "Get started by creating your first tender"
						}
						icon={<FileText className="h-16 w-16" />}
						action={
							!search ? (
								<Button
									className="font-medium text-white"
									style={{ backgroundColor: "var(--accent)" }}
									asChild
								>
									<Link href="/admin/tenders/new">
										<Plus className="mr-2 h-4 w-4" />
										Create tender
									</Link>
								</Button>
							) : null
						}
					/>
				) : (
					<>
						<div className="mb-6 grid gap-4">
							{tenders.map((t) => (
								<Card key={t.id} className="card-institutional overflow-hidden">
									<CardHeader>
										<div className="flex items-start justify-between gap-4">
											<div className="flex-1">
												<div className="mb-2 flex items-center gap-2">
													<span
														className={`rounded px-2 py-1 text-xs ${statusColors[t.status] ?? ""}`}
														style={
															!statusColors[t.status]
																? {
																		backgroundColor: "var(--section-alt)",
																		color: "var(--text-muted)",
																	}
																: undefined
														}
													>
														{t.status}
													</span>
													{t.closingDate && (
														<span className="text-[var(--text-muted)] text-xs">
															Closes: {new Date(t.closingDate).toLocaleDateString()}
														</span>
													)}
												</div>
												<CardTitle className="font-bold font-heading text-[var(--text-primary)] text-h3">
													{t.title}
												</CardTitle>
												<CardDescription className="mt-1 line-clamp-2 text-[var(--text-secondary)] text-body">
													{t.description}
												</CardDescription>
											</div>
											<div className="flex gap-2">
												<Button variant="outline" size="sm" asChild>
													<Link href={`/admin/tenders/${t.id}/edit`}>
														<Edit className="mr-1 h-4 w-4" />
														Edit
													</Link>
												</Button>
												<DeleteTenderDialog
													tenderId={t.id}
													tenderTitle={t.title}
												/>
											</div>
										</div>
									</CardHeader>
									<CardFooter className="flex flex-wrap items-center gap-4 text-[var(--text-muted)] text-base">
										{t.publishedAt && (
											<span>
												Published {new Date(t.publishedAt).toLocaleDateString()}
											</span>
										)}
										<span>
											Updated {new Date(t.updatedAt).toLocaleDateString()}
										</span>
									</CardFooter>
								</Card>
							))}
						</div>

						{totalPages > 1 && (
							<Pagination
								currentPage={page}
								totalPages={totalPages}
								basePath="/admin/tenders"
								queryParams={queryParams}
							/>
						)}
					</>
				)}
			</div>
		</div>
	);
}
