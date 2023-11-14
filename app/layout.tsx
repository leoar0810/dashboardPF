import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontQuicksand, fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Quicksand } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	// themeColor: [
	// 	// { media: "(prefers-color-scheme: light)", color: "white" },
	// 	// { media: "(prefers-color-scheme: dark)", color: "black" },
	// ],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="flex-grow bg-slate-50">
							{children}
						</main>
					
						<Footer/>
					</div>
				</Providers>
			</body>
		</html>
	);
}
