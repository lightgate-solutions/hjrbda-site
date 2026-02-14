"use client";

import * as React from "react";
import { createContext, useCallback, useContext, useState } from "react";

import { cn } from "@/lib/utils";

const AlertDialogContext = createContext<{
	open: boolean;
	setOpen: (open: boolean) => void;
} | null>(null);

function useAlertDialog() {
	const ctx = useContext(AlertDialogContext);
	if (!ctx)
		throw new Error("AlertDialog components must be used within AlertDialog");
	return ctx;
}

function AlertDialog({
	open: controlledOpen,
	onOpenChange,
	children,
}: {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
}) {
	const [internalOpen, setInternalOpen] = useState(false);
	const isControlled = controlledOpen !== undefined;
	const open = isControlled ? controlledOpen : internalOpen;

	const setOpen = useCallback(
		(value: boolean) => {
			if (!isControlled) setInternalOpen(value);
			onOpenChange?.(value);
		},
		[isControlled, onOpenChange],
	);

	return (
		<AlertDialogContext.Provider value={{ open, setOpen }}>
			{children}
		</AlertDialogContext.Provider>
	);
}

function AlertDialogTrigger({
	asChild,
	children,
	...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
	const { setOpen } = useAlertDialog();
	if (asChild && React.isValidElement(children)) {
		const childProps = children.props as Record<string, unknown>;
		const existingOnClick = childProps?.onClick as
			| ((e: React.MouseEvent) => void)
			| undefined;
		return React.cloneElement(children, {
			...props,
			onClick: (e: React.MouseEvent) => {
				existingOnClick?.(e);
				setOpen(true);
			},
		} as React.HTMLAttributes<HTMLElement>);
	}
	return (
		<button type="button" onClick={() => setOpen(true)} {...props}>
			{children}
		</button>
	);
}

function AlertDialogContent({
	className,
	children,
	...props
}: React.ComponentProps<"div">) {
	const { open, setOpen } = useAlertDialog();

	if (!open) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center"
			aria-modal
			role="dialog"
		>
			<div
				className="fixed inset-0 bg-black/50"
				onClick={() => setOpen(false)}
				aria-hidden
			/>
			<div
				data-slot="alert-dialog-content"
				className={cn(
					"relative z-50 w-full max-w-lg rounded-none border bg-background p-6 shadow-lg",
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>
	);
}

function AlertDialogHeader({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-dialog-header"
			className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
			{...props}
		/>
	);
}

function AlertDialogFooter({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-dialog-footer"
			className={cn(
				"mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				className,
			)}
			{...props}
		/>
	);
}

function AlertDialogTitle({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-dialog-title"
			className={cn("font-medium text-sm", className)}
			{...props}
		/>
	);
}

function AlertDialogDescription({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-dialog-description"
			className={cn("text-muted-foreground text-xs", className)}
			{...props}
		/>
	);
}

function AlertDialogCancel({
	className,
	children = "Cancel",
	...props
}: React.ComponentProps<"button">) {
	const { setOpen } = useAlertDialog();
	return (
		<button
			type="button"
			className={cn(
				"inline-flex h-8 items-center justify-center rounded-none border border-input bg-background px-4 font-medium text-xs hover:bg-muted",
				className,
			)}
			onClick={() => setOpen(false)}
			{...props}
		>
			{children}
		</button>
	);
}

function AlertDialogAction({
	className,
	...props
}: React.ComponentProps<"button">) {
	return (
		<button
			type="button"
			className={cn(
				"inline-flex h-8 items-center justify-center rounded-none border border-transparent bg-primary px-4 font-medium text-primary-foreground text-xs hover:bg-primary/90",
				className,
			)}
			{...props}
		/>
	);
}

export {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogCancel,
	AlertDialogAction,
};
