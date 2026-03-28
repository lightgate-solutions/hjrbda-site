"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FileText, Loader2, Upload, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createTender, updateTender } from "@/lib/actions/tenders";
import {
	TenderStatus,
	type CreateTenderInput,
	createTenderSchema,
} from "@/lib/types/tenders";

type TenderForForm = {
	id: string;
	title: string;
	description: string;
	documentUrl: string | null;
	status: string;
	closingDate: Date | null;
};

interface TenderFormProps {
	tender?: TenderForForm;
	isEditing?: boolean;
}

export function TenderForm({ tender, isEditing = false }: TenderFormProps) {
	const router = useRouter();
	const fileInputRef = useRef<HTMLInputElement>(null);

	const [uploadedUrl, setUploadedUrl] = useState<string | null>(
		tender?.documentUrl ?? null,
	);
	const [uploadedFileName, setUploadedFileName] = useState<string | null>(
		tender?.documentUrl
			? decodeURIComponent(
					tender.documentUrl.split("/").pop()?.replace(/^\d+-/, "") ?? "",
				)
			: null,
	);
	const [isUploading, setIsUploading] = useState(false);

	const form = useForm<CreateTenderInput>({
		resolver: zodResolver(createTenderSchema),
		defaultValues: {
			title: tender?.title ?? "",
			description: tender?.description ?? "",
			documentUrl: tender?.documentUrl ?? "",
			status:
				(tender?.status as CreateTenderInput["status"]) ?? TenderStatus.DRAFT,
			closingDate: tender?.closingDate
				? new Date(tender.closingDate).toISOString().split("T")[0]
				: "",
		},
	});

	const isSubmitting = form.formState.isSubmitting;

	async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		if (!file) return;

		setIsUploading(true);
		try {
			const formData = new FormData();
			formData.append("file", file);

			const res = await fetch("/api/tender-document", {
				method: "POST",
				body: formData,
			});

			const json = await res.json();

			if (!res.ok) {
				toast.error(json.error ?? "Upload failed");
				return;
			}

			setUploadedUrl(json.url);
			setUploadedFileName(file.name);
			form.setValue("documentUrl", json.url);
			toast.success("Document uploaded");
		} catch {
			toast.error("Upload failed");
		} finally {
			setIsUploading(false);
			// reset so same file can be re-selected
			if (fileInputRef.current) fileInputRef.current.value = "";
		}
	}

	function handleRemoveDocument() {
		setUploadedUrl(null);
		setUploadedFileName(null);
		form.setValue("documentUrl", "");
	}

	async function onSubmit(data: CreateTenderInput) {
		try {
			const payload = {
				...data,
				documentUrl: uploadedUrl ?? undefined,
				closingDate:
					data.closingDate && data.closingDate !== ""
						? data.closingDate
						: undefined,
			};

			const result =
				isEditing && tender
					? await updateTender({ id: tender.id, ...payload })
					: await createTender(payload);

			if (result.success) {
				toast.success(
					isEditing ? "Tender updated successfully" : "Tender created successfully",
				);
				router.push("/admin/tenders");
				router.refresh();
			} else {
				toast.error(result.error ?? "Failed to save tender");
			}
		} catch {
			toast.error("An unexpected error occurred");
		}
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
			<div className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="title">Title</Label>
					<Controller
						name="title"
						control={form.control}
						render={({ field }) => (
							<Input
								{...field}
								id="title"
								placeholder="Enter tender title"
								disabled={isSubmitting}
							/>
						)}
					/>
					{form.formState.errors.title && (
						<p className="text-destructive text-xs">
							{form.formState.errors.title.message}
						</p>
					)}
				</div>

				<div className="space-y-2">
					<Label htmlFor="description">Description</Label>
					<p className="text-muted-foreground text-sm">
						A summary of the tender opportunity
					</p>
					<Controller
						name="description"
						control={form.control}
						render={({ field }) => (
							<Textarea
								{...field}
								id="description"
								placeholder="Describe the tender..."
								rows={5}
								disabled={isSubmitting}
							/>
						)}
					/>
					{form.formState.errors.description && (
						<p className="text-destructive text-xs">
							{form.formState.errors.description.message}
						</p>
					)}
				</div>

				{/* Document upload */}
				<div className="space-y-2">
					<Label>Tender document (optional)</Label>
					<p className="text-muted-foreground text-sm">
						PDF or Word document — max 10 MB. Visitors will see a download button.
					</p>

					{uploadedUrl ? (
						<div
							className="flex items-center gap-3 rounded-md border p-3"
							style={{ borderColor: "var(--card-border)" }}
						>
							<FileText
								className="h-5 w-5 shrink-0"
								style={{ color: "var(--accent)" }}
							/>
							<span className="min-w-0 flex-1 truncate text-[var(--text-primary)] text-sm">
								{uploadedFileName ?? "Uploaded document"}
							</span>
							<div className="flex shrink-0 gap-2">
								<a
									href={`/api/tender-document/download?url=${encodeURIComponent(uploadedUrl)}`}
									target="_blank"
									rel="noopener noreferrer"
									className="text-[var(--accent)] text-xs underline"
								>
									Preview
								</a>
								<button
									type="button"
									onClick={handleRemoveDocument}
									className="text-[var(--text-muted)] transition-colors hover:text-destructive"
									aria-label="Remove document"
								>
									<X className="h-4 w-4" />
								</button>
							</div>
						</div>
					) : (
						<div>
							<input
								ref={fileInputRef}
								type="file"
								accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
								className="sr-only"
								onChange={handleFileChange}
								disabled={isUploading || isSubmitting}
							/>
							<Button
								type="button"
								variant="outline"
								onClick={() => fileInputRef.current?.click()}
								disabled={isUploading || isSubmitting}
								className="w-full sm:w-auto"
							>
								{isUploading ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										Uploading...
									</>
								) : (
									<>
										<Upload className="mr-2 h-4 w-4" />
										Upload document
									</>
								)}
							</Button>
						</div>
					)}
				</div>

				<div className="space-y-2">
					<Label htmlFor="closingDate">Closing date (optional)</Label>
					<Controller
						name="closingDate"
						control={form.control}
						render={({ field }) => (
							<Input
								{...field}
								id="closingDate"
								type="date"
								disabled={isSubmitting}
							/>
						)}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="status">Status</Label>
					<Controller
						name="status"
						control={form.control}
						render={({ field }) => (
							<Select {...field} id="status" disabled={isSubmitting}>
								<option value={TenderStatus.DRAFT}>Draft</option>
								<option value={TenderStatus.PUBLISHED}>Published</option>
								<option value={TenderStatus.CLOSED}>Closed</option>
							</Select>
						)}
					/>
				</div>
			</div>

			<div className="flex gap-3">
				<Button type="submit" disabled={isSubmitting || isUploading}>
					{isSubmitting
						? isEditing
							? "Updating..."
							: "Creating..."
						: isEditing
							? "Update Tender"
							: "Create Tender"}
				</Button>
				<Button
					type="button"
					variant="outline"
					onClick={() => router.push("/admin/tenders")}
					disabled={isSubmitting}
				>
					Cancel
				</Button>
			</div>
		</form>
	);
}
