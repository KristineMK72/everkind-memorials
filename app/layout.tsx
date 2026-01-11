import "./globals.css";
import type { Metadata } from "next";

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
        <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-semibold text-lg">
              Everkind Memorials
            </a>
            <nav className="text-sm space-x-4">
              <a href="/pricing" className="hover:underline">
                Pricing
              </a>
              <a href="/create-memorial" className="hover:underline">
                Create a Memorial
              </a>
              <a href="/about" className="hover:underline">
                About
              </a>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-10">
          {children}
        </main>

        <footer className="border-t border-neutral-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-neutral-600 flex flex-col md:flex-row justify-between gap-2">
            <span>
              © {new Date().getFullYear()} Everkind Memorials — A Grit & Grace project
            </span>
            <div className="space-x-4">
              <a href="/privacy" className="hover:underline">
                Privacy
              </a>
              <a href="/terms" className="hover:underline">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
