import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shadi",
  description: "A simple multi-page Next.js website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 font-sans text-zinc-900">
        <main className="flex flex-1 flex-col">{children}</main>

        <footer className="border-t border-zinc-200 bg-white">
          <div className="mx-auto w-full max-w-5xl px-6 py-6 text-sm text-zinc-600">
            © {new Date().getFullYear()} Shadi
          </div>
        </footer>
      </body>
    </html>
  );
}
