import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Jesús Rabanal",
  description:
    "NLP · Linguistics & Technology · Developer — projects, research interests, and CV.",
  openGraph: {
    title: "Jesús Rabanal",
    description:
      "NLP · Linguistics & Technology · Developer — projects, research interests, and CV.",
    url: "https://jesusrabanal.vercel.app",
    siteName: "Jesús Rabanal",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        <Nav />
        {children}
      </body>
    </html>
  );
}
