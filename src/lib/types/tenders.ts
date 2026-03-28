import { z } from "zod";

export const TenderStatus = {
	DRAFT: "draft",
	PUBLISHED: "published",
	CLOSED: "closed",
} as const;

export type TenderStatusType = (typeof TenderStatus)[keyof typeof TenderStatus];

export const createTenderSchema = z.object({
	title: z
		.string()
		.min(1, "Title is required")
		.max(300, "Title must be less than 300 characters"),
	description: z.string().min(1, "Description is required"),
	documentUrl: z
		.string()
		.url("Must be a valid URL")
		.optional()
		.or(z.literal("")),
	status: z.enum([TenderStatus.DRAFT, TenderStatus.PUBLISHED, TenderStatus.CLOSED]),
	closingDate: z.string().optional().or(z.literal("")),
});

export const updateTenderSchema = createTenderSchema.partial().extend({
	id: z.string().min(1, "Tender ID is required"),
});

export type CreateTenderInput = z.infer<typeof createTenderSchema>;
export type UpdateTenderInput = z.infer<typeof updateTenderSchema>;
