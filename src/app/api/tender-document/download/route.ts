import { head } from "@vercel/blob";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const blobUrl = request.nextUrl.searchParams.get("url");

	if (!blobUrl || typeof blobUrl !== "string") {
		return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
	}

	// Only allow blobs from our own store
	const { hostname } = new URL(blobUrl);
	if (!hostname.endsWith(".public.blob.vercel-storage.com") && !hostname.endsWith(".blob.vercel-storage.com")) {
		return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
	}

	const metadata = await head(blobUrl);
	const response = await fetch(blobUrl, {
		headers: { Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}` },
	});

	if (!response.ok) {
		return NextResponse.json({ error: "Document not found" }, { status: 404 });
	}

	const filename = decodeURIComponent(
		metadata.pathname.split("/").pop()?.replace(/^\d+-/, "") ?? "document",
	);

	return new NextResponse(response.body, {
		headers: {
			"Content-Type": metadata.contentType ?? "application/octet-stream",
			"Content-Disposition": `attachment; filename="${filename}"`,
			"Cache-Control": "private, max-age=3600",
		},
	});
}
