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
      <body>
        {/* Header */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            borderBottom: "1px solid rgba(255,255,255,0.10)",
            background: "rgba(11,16,32,0.55)",
            backdropFilter: "blur(14px)",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 16,
              paddingBottom: 16,
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: "1.05rem",
                fontWeight: 750,
                letterSpacing: "-0.02em",
                textDecoration: "none",
              }}
            >
              Everkind Memorials
            </Link>

            <nav style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <Link className="btn" href="/pricing">
                Pricing
              </Link>
              <Link className="btn btnPrimary" href="/create-memorial">
                Create a Memorial
              </Link>
              <Link className="btn" href="/about">
                About
              </Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="container" style={{ paddingTop: 26, paddingBottom: 44 }}>
          {children}
        </main>

        {/* Footer */}
        <footer
          style={{
            marginTop: 40,
            borderTop: "1px solid rgba(255,255,255,0.10)",
            background: "rgba(11,16,32,0.35)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="container" style={{ paddingTop: 18, paddingBottom: 18 }}>
            <div
              className="card"
              style={{
                padding: 16,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <span style={{ color: "var(--muted)" }}>
                Every memorial is reviewed by a real person before publication.
              </span>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/privacy" className="btn">
                  Privacy
                </Link>
                <Link href="/terms" className="btn">
                  Terms
                </Link>
                <span style={{ color: "var(--muted2)", marginLeft: "auto" }}>
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
