"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";

export function ProfileForm({ currentName }: { currentName: string }) {
	const [name, setName] = useState(currentName);
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		const trimmed = name.trim();
		if (!trimmed || trimmed === currentName) return;

		setLoading(true);
		try {
			const result = await authClient.updateUser({ name: trimmed });
			if (result.error) {
				toast.error(result.error.message ?? "Failed to update profile");
			} else {
				toast.success("Profile updated");
			}
		} catch {
			toast.error("An unexpected error occurred");
		} finally {
			setLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="name">Display name</Label>
				<Input
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Your name"
					disabled={loading}
				/>
			</div>
			<Button
				type="submit"
				disabled={loading || !name.trim() || name.trim() === currentName}
			>
				{loading ? "Saving..." : "Save changes"}
			</Button>
		</form>
	);
}

export function PasswordForm() {
	const [current, setCurrent] = useState("");
	const [next, setNext] = useState("");
	const [confirm, setConfirm] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (next !== confirm) {
			toast.error("New passwords do not match");
			return;
		}
		if (next.length < 8) {
			toast.error("Password must be at least 8 characters");
			return;
		}

		setLoading(true);
		try {
			const result = await authClient.changePassword({
				currentPassword: current,
				newPassword: next,
				revokeOtherSessions: false,
			});
			if (result.error) {
				toast.error(result.error.message ?? "Failed to change password");
			} else {
				toast.success("Password changed");
				setCurrent("");
				setNext("");
				setConfirm("");
			}
		} catch {
			toast.error("An unexpected error occurred");
		} finally {
			setLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="current-password">Current password</Label>
				<Input
					id="current-password"
					type="password"
					value={current}
					onChange={(e) => setCurrent(e.target.value)}
					autoComplete="current-password"
					disabled={loading}
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="new-password">New password</Label>
				<Input
					id="new-password"
					type="password"
					value={next}
					onChange={(e) => setNext(e.target.value)}
					autoComplete="new-password"
					disabled={loading}
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="confirm-password">Confirm new password</Label>
				<Input
					id="confirm-password"
					type="password"
					value={confirm}
					onChange={(e) => setConfirm(e.target.value)}
					autoComplete="new-password"
					disabled={loading}
				/>
			</div>
			<Button type="submit" disabled={loading || !current || !next || !confirm}>
				{loading ? "Changing..." : "Change password"}
			</Button>
		</form>
	);
}
