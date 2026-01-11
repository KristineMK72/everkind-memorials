import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Everkind Memorials",
  description: "A quieter place to remember.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-900">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight"
            >
              Everkind Memorials
            </Link>

            <nav className="flex items-center gap-4 text-sm">
              <Link href="/pricing" className="hover:underline">
                Pricing
              </Link>
              <Link href="/create-memorial" className="hover:underline">
                Create a Memorial
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="mx-auto w-full max-w-5xl px-4 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-16 border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-600">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <span>
                Every memorial is reviewed by a real person before publication.
              </span>

              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:underline">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:underline">
                  Terms
                </Link>
                <span className="text-neutral-500">
                  © {new Date().getFullYear()} Everkind Memorials
                </span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
