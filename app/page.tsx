import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container">
        <section className="glass" style={{ padding: 26 }}>
          <div className="grid grid2" style={{ alignItems: "center" }}>
            <div>
              <div className="kicker">Everkind Memorials</div>
              <h1 className="h1">A beautiful place to honor a life.</h1>
              <p className="p">
                Create a memorial page, share memories, and keep their story alive — with warmth, dignity, and ease.
              </p>

              <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
                <Link className="btn btnPrimary" href="/create">
                  Create a Memorial
                </Link>
                <Link className="btn" href="/browse">
                  Browse Memorials
                </Link>
              </div>
            </div>

            <div className="card" style={{ padding: 18, borderRadius: 26 }}>
              <div style={{ color: "var(--muted)", fontWeight: 650, marginBottom: 10 }}>
                What you can include
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
                <li>Obituary & service details</li>
                <li>Photo gallery</li>
                <li>Guestbook messages</li>
                <li>Donations & links</li>
              </ul>

              <div style={{ marginTop: 14, color: "var(--muted2)", fontSize: "0.95rem" }}>
                Private by default. Share only with who you choose.
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: 18 }} className="grid grid3">
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 750, marginBottom: 8 }}>Gentle & simple</div>
            <div style={{ color: "var(--muted)" }}>Guided steps to create a page in minutes.</div>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 750, marginBottom: 8 }}>Share memories</div>
            <div style={{ color: "var(--muted)" }}>Friends and family can leave messages and stories.</div>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 750, marginBottom: 8 }}>Built for trust</div>
            <div style={{ color: "var(--muted)" }}>Respectful design, clear privacy, no clutter.</div>
          </div>
        </section>
      </div>
    </main>
  );
}
