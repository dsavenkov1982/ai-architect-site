import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-solution-architect-site.vercel.app"),
  title: {
    default: "Dmitry Savenkov | AI Solution Architect & Advisor",
    template: "%s | Dmitry Savenkov",
  },
  description:
    "Production AI architecture for RAG, agentic systems, AI in SDLC, AWS and Azure. Architecture reviews, advisory and fractional engagements.",
  openGraph: {
    title: "Dmitry Savenkov | AI Solution Architect & Advisor",
    description:
      "I help teams move GenAI, RAG and agentic systems from prototype to production.",
    url: "/",
    siteName: "Dmitry Savenkov — AI Solution Architect",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dmitry Savenkov | AI Solution Architect & Advisor",
    description: "Production AI architecture for RAG, agents, AWS and Azure.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
