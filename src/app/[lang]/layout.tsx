import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "../globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { Locale } from "@/lib/get-dictionary";

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

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ru" }, { lang: "de" }];
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as Locale;
  const { children } = props;

  return (
    <html lang={lang} className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght@24,300..700&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-on-surface antialiased">
        <ScrollToTop />
        <Navigation lang={lang} />
        <main className="flex-1 pt-[calc(69px+1.5rem)]">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
