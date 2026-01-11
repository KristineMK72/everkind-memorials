import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <section className="glass" style={{ padding: 26 }}>
        <div className="kicker">About</div>
        <h1 className="h1" style={{ marginTop: 10 }}>Made for remembrance — not noise.</h1>
        <p className="p" style={{ maxWidth: 720 }}>
          Everkind Memorials is a quieter place to honor a life, share memories, and keep a story close.
          We’re building with dignity, simplicity, and privacy-first choices — because grief doesn’t need clutter.
        </p>

        <div style={{ height: 18 }} />

        <div className="grid grid3">
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 850, marginBottom: 8 }}>1) Create</div>
            <div style={{ color: "var(--muted)" }}>
              Add a name, dates, story, photos, and service details (as much or as little as you want).
            </div>
          </div>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 850, marginBottom: 8 }}>2) Share</div>
            <div style={{ color: "var(--muted)" }}>
              Share with a private link, or publish publicly — you choose.
            </div>
          </div>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 850, marginBottom: 8 }}>3) Remember</div>
            <div style={{ color: "var(--muted)" }}>
              Loved ones can leave messages, stories, and support in a gentle guestbook.
            </div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="card" style={{ padding: 18 }}>
          <div style={{ fontWeight: 850, marginBottom: 6 }}>Trust and safety</div>
          <div style={{ color: "var(--muted)" }}>
            Every memorial is reviewed by a real person before publication. We default to respectful settings and clear privacy.
          </div>
          <div style={{ marginTop: 12, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn btnPrimary" href="/create-memorial">Create a memorial</Link>
            <Link className="btn" href="/privacy">Read privacy</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
