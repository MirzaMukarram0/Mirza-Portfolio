import type { Metadata } from "next";
import { Playfair_Display, IM_Fell_English, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const imFell = IM_Fell_English({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-label",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mirza Mukarram — Software Engineer | AI & Full-Stack Developer",
  description:
    "Portfolio of Mirza Mukarram Haseeb — Software Engineer specializing in web-based AI solutions, LLM pipelines, RAG architectures, and full-stack development with Next.js, Python, and React.",
  keywords: [
    "Mirza Mukarram",
    "Software Engineer",
    "AI Developer",
    "Full Stack",
    "Next.js",
    "Python",
    "LangChain",
    "RAG",
    "Portfolio",
  ],
  authors: [{ name: "Mirza Mukarram Haseeb" }],
  openGraph: {
    title: "Mirza Mukarram — Software Engineer",
    description:
      "Building production-ready AI solutions and full-stack web applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${imFell.variable} ${libreBaskerville.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
