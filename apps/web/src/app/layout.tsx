import type { Metadata } from "next";

import { Merriweather, Open_Sans } from "next/font/google";

import "../index.css";
import Header from "@/components/header";
import Providers from "@/components/providers";

const merriweather = Merriweather({
	variable: "--font-merriweather",
	subsets: ["latin"],
	weight: ["400", "700"],
	display: "swap",
});

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
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
		<html lang="en" className={`${merriweather.variable} ${openSans.variable}`}>
			<body className="font-sans antialiased">
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
