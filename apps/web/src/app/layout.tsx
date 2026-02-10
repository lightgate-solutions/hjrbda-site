import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import "../index.css";
import Header from "@/components/header";
import Providers from "@/components/providers";

const urbanist = Urbanist({
	variable: "--font-urbanist",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "HJRBDA - Hadaija Jama'are River Basin Development Authority",
	description:
		"Hadaija Jama'are River Basin Development Authority - Promoting sustainable water resource management and development",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${urbanist.variable} font-sans antialiased`}>
				<Providers>
					<div className="flex min-h-screen flex-col">
						<Header />
						<main className="flex-1">{children}</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
