"use client";

import { CheckCheck, Trash2 } from "lucide-react";
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
import { deleteContactSubmission, markContactRead } from "@/lib/actions/contact";

export function MarkReadButton({ id, status }: { id: string; status: string }) {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	if (status === "read") return null;

	async function handle() {
		setLoading(true);
		try {
			const result = await markContactRead(id);
			if (result.success) {
				router.refresh();
			} else {
				toast.error(result.error ?? "Failed");
			}
		} catch {
			toast.error("An unexpected error occurred");
		} finally {
			setLoading(false);
		}
	}

	return (
		<Button variant="outline" size="sm" onClick={handle} disabled={loading}>
			<CheckCheck className="mr-1 h-4 w-4" />
			Mark read
		</Button>
	);
}

export function DeleteContactDialog({ id, subject }: { id: string; subject: string }) {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	async function handle() {
		setLoading(true);
		try {
			const result = await deleteContactSubmission(id);
			if (result.success) {
				toast.success("Message deleted");
				setOpen(false);
				router.refresh();
			} else {
				toast.error(result.error ?? "Failed to delete");
			}
		} catch {
			toast.error("An unexpected error occurred");
		} finally {
			setLoading(false);
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
					<AlertDialogTitle>Delete message</AlertDialogTitle>
					<AlertDialogDescription>
						Are you sure you want to delete &quot;{subject}&quot;? This cannot be undone.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
					<AlertDialogAction
						onClick={(e) => { e.preventDefault(); handle(); }}
						disabled={loading}
						className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
					>
						{loading ? "Deleting..." : "Delete"}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
