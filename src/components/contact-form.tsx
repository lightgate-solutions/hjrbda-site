"use client";

import { useState } from "react";
import { toast } from "sonner";
import { submitContactForm } from "@/lib/actions/contact";

export function ContactForm() {
	const [pending, setPending] = useState(false);
	const [sent, setSent] = useState(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = {
			name: (form.elements.namedItem("name") as HTMLInputElement).value,
			email: (form.elements.namedItem("email") as HTMLInputElement).value,
			subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
			message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
		};

		setPending(true);
		try {
			const result = await submitContactForm(data);
			if (result.success) {
				setSent(true);
				toast.success("Message sent successfully");
				form.reset();
			} else {
				toast.error(result.error ?? "Failed to send message");
			}
		} catch {
			toast.error("An unexpected error occurred");
		} finally {
			setPending(false);
		}
	}

	if (sent) {
		return (
			<div className="flex flex-col items-center justify-center py-12 text-center">
				<div
					className="mb-4 flex h-14 w-14 items-center justify-center rounded-full"
					style={{ backgroundColor: "var(--accent-light)" }}
				>
					<svg
						className="h-7 w-7"
						style={{ color: "var(--accent)" }}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						aria-hidden
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
					</svg>
				</div>
				<h3 className="mb-2 font-bold font-heading text-[var(--text-primary)] text-xl">
					Message received
				</h3>
				<p className="mb-6 max-w-xs text-[var(--text-secondary)] text-body">
					Thank you for reaching out. We&apos;ll get back to you as soon as possible.
				</p>
				<button
					type="button"
					onClick={() => setSent(false)}
					className="text-[var(--accent)] text-sm underline"
				>
					Send another message
				</button>
			</div>
		);
	}

	const inputClass =
		"w-full rounded-md border border-[var(--card-border)] bg-white px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 disabled:opacity-50";

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<label
					htmlFor="name"
					className="mb-2 block font-medium text-[var(--text-primary)] text-base"
				>
					Full name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					className={inputClass}
					placeholder="Enter your full name"
					disabled={pending}
				/>
			</div>

			<div>
				<label
					htmlFor="email"
					className="mb-2 block font-medium text-[var(--text-primary)] text-base"
				>
					Email address
				</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					className={inputClass}
					placeholder="Enter your email address"
					disabled={pending}
				/>
			</div>

			<div>
				<label
					htmlFor="subject"
					className="mb-2 block font-medium text-[var(--text-primary)] text-base"
				>
					Subject
				</label>
				<input
					type="text"
					id="subject"
					name="subject"
					required
					className={inputClass}
					placeholder="Enter subject"
					disabled={pending}
				/>
			</div>

			<div>
				<label
					htmlFor="message"
					className="mb-2 block font-medium text-[var(--text-primary)] text-base"
				>
					Message
				</label>
				<textarea
					id="message"
					name="message"
					rows={5}
					required
					minLength={10}
					className={inputClass}
					placeholder="Enter your message"
					disabled={pending}
				/>
			</div>

			<button
				type="submit"
				disabled={pending}
				className="mt-2 w-full rounded-md px-6 py-4 font-semibold text-lg text-white transition-opacity hover:opacity-90 disabled:opacity-60"
				style={{ backgroundColor: "var(--accent)", minHeight: "3.25rem" }}
			>
				{pending ? "Sending..." : "Send message"}
			</button>

			<p className="text-[var(--text-muted)] text-xs leading-relaxed">
				Your name and email address will be used solely to respond to your
				message and will not be shared with third parties. Submissions are
				automatically deleted after 12 months in accordance with the Nigeria
				Data Protection Act 2023.
			</p>
		</form>
	);
}
