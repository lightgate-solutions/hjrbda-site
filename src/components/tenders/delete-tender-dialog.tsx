"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteTender } from "@/lib/actions/tenders";

export function DeleteTenderDialog({
	tenderId,
	tenderTitle,
}: {
	tenderId: string;
	tenderTitle: string;
}) {
	const [open, setOpen] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const router = useRouter();

	async function handleDelete() {
		setIsDeleting(true);
		try {
			const result = await deleteTender(tenderId);
			if (result.success) {
				toast.success("Tender deleted successfully");
				setOpen(false);
				router.refresh();
			} else {
				toast.error(result.error ?? "Failed to delete tender");
			}
		} catch {
			toast.error("An unexpected error occurred");
		} finally {
			setIsDeleting(false);
		}
	}

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<Button variant="outline" size="sm">
					<Trash2 className="mr-1 h-4 w-4" />
					Delete
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Delete Tender</AlertDialogTitle>
					<AlertDialogDescription>
						Are you sure you want to delete &quot;{tenderTitle}&quot;? This
						action cannot be undone.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
					<AlertDialogAction
						onClick={(e) => {
							e.preventDefault();
							handleDelete();
						}}
						disabled={isDeleting}
						className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
					>
						{isDeleting ? "Deleting..." : "Delete"}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
