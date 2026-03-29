import { type NextRequest, NextResponse } from "next/server";
import { deleteExpiredContacts } from "@/lib/actions/contact";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
	const authHeader = request.headers.get("authorization");
	const cronSecret = process.env.CRON_SECRET;

	// Vercel sets CRON_SECRET automatically and sends it as a Bearer token
	if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const { deleted } = await deleteExpiredContacts();
	return NextResponse.json({ success: true, deleted });
}
