import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container">
        {/* Hero */}
        <section className="glass" style={{ padding: 26 }}>
          <div className="grid grid2" style={{ alignItems: "center" }}>
            <div>
              <div className="kicker">Everkind Memorials</div>

              <h1 className="h1">
                A quieter place to remember.
              </h1>

              <p className="p" style={{ maxWidth: 560 }}>
                Everkind Memorials offers thoughtfully written online obituaries and
                memorial pages — simple, dignified, and affordable.
                Every memorial is reviewed by a real person and created with care.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  marginTop: 18,
                  flexWrap: "wrap",
                }}
              >
                <Link className="btn btnPrimary" href="/create-memorial">
                  Create a memorial
                </Link>

                {/* ✅ FIXED LINK */}
                <Link className="btn" href="/examples">
                  View examples
                </Link>
              </div>
            </div>

            {/* Right-hand info card */}
            <div className="card" style={{ padding: 18, borderRadius: 26 }}>
              <div
                style={{
                  color: "var(--muted)",
                  fontWeight: 650,
                  marginBottom: 10,
                }}
              >
                What you can include
              </div>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: 18,
                  color: "var(--muted)",
                  lineHeight: 1.65,
                }}
              >
                <li>Written obituary</li>
                <li>Service details</li>
                <li>Guestbook (optional)</li>
                <li>Memorial giving (optional)</li>
              </ul>

              <div
                style={{
                  marginTop: 14,
                  color: "var(--muted2)",
                  fontSize: "0.95rem",
                }}
              >
                Drafts are private by default.
              </div>
            </div>
          </div>
        </section>

        <div style={{ height: 18 }} />

        {/* Feature cards */}
        <section className="grid grid3">
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 750, marginBottom: 8 }}>
              Gentle & simple
            </div>
            <div style={{ color: "var(--muted)" }}>
              Create a memorial in minutes — no pressure, no rush.
            </div>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 750, marginBottom: 8 }}>
              Human review
            </div>
            <div style={{ color: "var(--muted)" }}>
              Every memorial is reviewed by a real person before publication.
            </div>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 750, marginBottom: 8 }}>
              Built for trust
            </div>
            <div style={{ color: "var(--muted)" }}>
              Clear pricing, respectful moderation, no ads.
            </div>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
