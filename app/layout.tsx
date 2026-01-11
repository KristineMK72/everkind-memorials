import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Everkind Memorials",
  description: "A quieter place to remember.",
};

function NavPill({
  href,
  children,
  primary,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`btn ${primary ? "btnPrimary" : ""}`}
      style={{
        padding: primary ? "12px 16px" : "10px 14px",
        fontSize: primary ? "0.98rem" : "0.95rem",
      }}
    >
      {children}
    </Link>
  );
}

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
          {/* Subtle glow line */}
          <div
            style={{
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(215,183,255,0.55), rgba(147,215,255,0.45), transparent)",
              opacity: 0.7,
            }}
          />

          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 14,
              paddingTop: 14,
              paddingBottom: 14,
            }}
          >
            {/* Brand */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
              }}
            >
              {/* Little “halo” mark */}
              <span
                aria-hidden="true"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(215,183,255,0.35), transparent 55%), radial-gradient(circle at 70% 20%, rgba(147,215,255,0.25), transparent 55%), rgba(255,255,255,0.06)",
                  boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                <span
                  style={{
                    fontSize: "1.02rem",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Everkind Memorials
                </span>
                <span style={{ fontSize: "0.82rem", color: "var(--muted2)" }}>
                  A quieter place to remember
                </span>
              </div>
            </Link>

            {/* Nav */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <NavPill href="/about">About</NavPill>
              <NavPill href="/pricing">Pricing</NavPill>
              <NavPill href="/create-memorial" primary>
                Create a Memorial
              </NavPill>
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
            <div className="card" style={{ padding: 16, borderRadius: 22 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <span style={{ color: "var(--muted)" }}>
                  Every memorial is reviewed by a real person before publication.
                </span>

                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <Link href="/privacy" className="btn" style={{ padding: "10px 14px", fontSize: "0.95rem" }}>
                    Privacy
                  </Link>
                  <Link href="/terms" className="btn" style={{ padding: "10px 14px", fontSize: "0.95rem" }}>
                    Terms
                  </Link>
                  <span style={{ color: "var(--muted2)", marginLeft: "auto" }}>
                    © {new Date().getFullYear()} Everkind Memorials
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
