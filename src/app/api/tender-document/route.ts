import { put, del } from "@vercel/blob";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

const ALLOWED_TYPES = [
	"application/pdf",
	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

export async function POST(request: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session?.user) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const formData = await request.formData();
	const file = formData.get("file");

	if (!(file instanceof File)) {
		return NextResponse.json({ error: "No file provided" }, { status: 400 });
	}

	if (!ALLOWED_TYPES.includes(file.type)) {
		return NextResponse.json(
			{ error: "Only PDF and Word documents are allowed" },
			{ status: 400 },
		);
	}

	if (file.size > MAX_SIZE_BYTES) {
		return NextResponse.json(
			{ error: "File must be smaller than 10 MB" },
			{ status: 400 },
		);
	}

	const blob = await put(`tenders/${Date.now()}-${file.name}`, file, {
		access: "private",
		contentType: file.type,
	});

	return NextResponse.json({ url: blob.url });
}

export async function DELETE(request: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session?.user) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const { url } = await request.json();
	if (!url || typeof url !== "string") {
		return NextResponse.json({ error: "URL required" }, { status: 400 });
	}

	await del(url);
	return NextResponse.json({ success: true });
}
