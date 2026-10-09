import Script from "next/script"
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Jesús Rabanal Álvarez",
  description: "NLP · Linguistics & Technology · Researcher — projects and CV.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen font-sans">
        <ThemeProvider>
          <Nav />
          {children}
	    <Script
                src="https://stats.jr-tardis.dynv6.net/script.js"
                data-website-id="08b1a561-4d12-46e6-9e02-8662efef458c"
                strategy="afterInteractive"
              />
        </ThemeProvider>
      </body>
    </html>
  );
}
