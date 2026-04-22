import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ba-Hoang Tran — AI Engineer & Researcher",
  description:
    "Personal portfolio of Ba-Hoang Tran, AI Engineer & Researcher specialized in Multimodal Learning, Agentic Systems, and Document Understanding.",
  keywords: [
    "AI",
    "LLM",
    "Machine Learning",
    "Multimodal",
    "Research",
    "Ba-Hoang Tran",
    "GraphRAG",
    "VinFast",
    "DDI",
  ],
  authors: [{ name: "Ba-Hoang Tran" }],
  openGraph: {
    title: "Ba-Hoang Tran — AI Engineer & Researcher",
    description:
      "Advancing Multimodal Learning and Agentic Systems. Incoming M2 @ Université Paris-Saclay.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght@24,300..700&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-on-surface antialiased">
        <ScrollToTop />
        <Navigation />
        <main className="flex-1 pt-[calc(69px+1.5rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
