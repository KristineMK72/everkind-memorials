import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container">
        {/* HERO */}
        <section className="glass" style={{ padding: 28 }}>
          <div className="grid grid2" style={{ alignItems: "center", gap: 20 }}>
            <div>
              <div className="kicker">Everkind Memorials</div>
              <h1 className="h1">A beautiful place to honor a life.</h1>
              <p className="p" style={{ maxWidth: 560 }}>
                Create a memorial page, share memories, and keep their story alive — with warmth, dignity,
                and ease.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  marginTop: 18,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <Link className="btn btnPrimary" href="/create-memorial">
                  Create a Memorial
                </Link>
                <Link className="btn" href="/browse">
                  Browse Memorials
                </Link>
                <span style={{ color: "var(--muted2)", fontSize: "0.95rem" }}>
                  Private by default • Share only with who you choose
                </span>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="card" style={{ padding: 18, borderRadius: 26 }}>
              <div style={{ color: "var(--muted)", fontWeight: 750, marginBottom: 10 }}>
                What you can include
              </div>

              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
                <li>Obituary & service details</li>
                <li>Photo gallery</li>
                <li>Guestbook messages</li>
                <li>Donations & links</li>
              </ul>

              <div
                style={{
                  marginTop: 14,
                  paddingTop: 14,
                  borderTop: "1px solid rgba(255,255,255,0.10)",
                  color: "var(--muted2)",
                  fontSize: "0.95rem",
                }}
              >
                Every page is reviewed by a real person before publication.
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE STRIP */}
        <section
          className="card"
          style={{
            marginTop: 18,
            padding: 16,
            borderRadius: 22,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>Kind design. Real support.</div>
            <div style={{ color: "var(--muted)", maxWidth: 680 }}>
              Everkind is built to feel calm and respectful — not noisy or overwhelming.
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn" href="/about">
              How it works
            </Link>
            <Link className="btn" href="/pricing">
              See pricing
            </Link>
          </div>
        </section>

        {/* THREE BENEFITS */}
        <section style={{ marginTop: 18 }} className="grid grid3">
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 850, marginBottom: 8 }}>Gentle & simple</div>
            <div style={{ color: "var(--muted)" }}>
              Guided steps help you create a page in minutes.
            </div>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 850, marginBottom: 8 }}>Share memories</div>
            <div style={{ color: "var(--muted)" }}>
              Friends and family can leave messages and stories.
            </div>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 850, marginBottom: 8 }}>Built for trust</div>
            <div style={{ color: "var(--muted)" }}>
              Clear privacy, human review, and respectful defaults.
            </div>
          </div>
        </section>

        {/* PREVIEW / STARTER TEMPLATES */}
        <section style={{ marginTop: 22 }} className="glass">
          <div style={{ padding: 22 }}>
            <div className="kicker">Preview</div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
              <h2 style={{ margin: "8px 0 0", fontSize: "1.6rem", letterSpacing: "-0.02em" }}>
                What a memorial page can look like
              </h2>
              <Link href="/browse" className="btn" style={{ padding: "10px 14px", fontSize: "0.95rem" }}>
                View examples
              </Link>
            </div>

            <div style={{ marginTop: 14 }} className="grid grid3">
              {[
                {
                  title: "Photo-led",
                  desc: "A warm hero image, short obituary, service details, guestbook.",
                },
                {
                  title: "Story-first",
                  desc: "A longer narrative with sections for milestones and memories.",
                },
                {
                  title: "Private family page",
                  desc: "Share with a link only — perfect for smaller circles.",
                },
              ].map((item) => (
                <div key={item.title} className="card" style={{ padding: 18 }}>
                  <div style={{ fontWeight: 850, marginBottom: 6 }}>{item.title}</div>
                  <div style={{ color: "var(--muted)" }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn btnPrimary" href="/create-memorial">
                Start a Memorial
              </Link>
              <Link className="btn" href="/about">
                Learn more
              </Link>
            </div>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
