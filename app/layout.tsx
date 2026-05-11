import type { Metadata } from "next";
import { Bodoni_Moda, Lora } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
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
    <html lang="en" className={`${bodoni.variable} ${lora.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
