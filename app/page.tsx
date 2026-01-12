import Link from "next/link";

type HomeState = { name: string; abbr: string; slug: string };

const HOME_STATES: HomeState[] = [
  { name: "Minnesota", abbr: "MN", slug: "minnesota" },
  { name: "Wisconsin", abbr: "WI", slug: "wisconsin" },
  { name: "Iowa", abbr: "IA", slug: "iowa" },
  { name: "Illinois", abbr: "IL", slug: "illinois" },
  { name: "North Dakota", abbr: "ND", slug: "north-dakota" },
  { name: "South Dakota", abbr: "SD", slug: "south-dakota" },
  { name: "Michigan", abbr: "MI", slug: "michigan" },
  { name: "Indiana", abbr: "IN", slug: "indiana" },
];

export default function Home() {
  return (
    <main>
      <div className="container">
        {/* =========================
            HERO: Search-first (Legacy-like)
        ========================== */}
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">Everkind Memorials</div>

          <div className="grid grid2" style={{ alignItems: "start", gap: 18, marginTop: 10 }}>
            {/* Left: Headline + Search */}
            <div>
              <h1 className="h1" style={{ marginTop: 6 }}>
                Find a loved one. Share a memory.
              </h1>

              <p className="p" style={{ maxWidth: 680 }}>
                Search memorials by name or location, or create a respectful memorial page in minutes. Every memorial is
                reviewed by a real person.
              </p>

              {/* Search Card */}
              <div className="card" style={{ padding: 18, borderRadius: 22, marginTop: 16 }}>
                <div style={{ fontWeight: 750, marginBottom: 10 }}>Search memorials</div>

                <form action="/search" method="GET" style={{ display: "grid", gap: 10 }}>
                  <div style={{ display: "grid", gap: 10 }}>
                    <input
                      name="q"
                      placeholder="Name (e.g., Jane Doe)"
                      aria-label="Search by name"
                      style={{
                        width: "100%",
                        padding: "12px 12px",
                        borderRadius: 14,
                        border: "1px solid rgba(0,0,0,0.08)",
                        background: "rgba(255,255,255,0.7)",
                        outline: "none",
                      }}
                    />

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <input
                        name="location"
                        placeholder="City or State (optional)"
                        aria-label="Search by location"
                        style={{
                          width: "100%",
                          padding: "12px 12px",
                          borderRadius: 14,
                          border: "1px solid rgba(0,0,0,0.08)",
                          background: "rgba(255,255,255,0.7)",
                          outline: "none",
                        }}
                      />

                      <select
                        name="range"
                        aria-label="Date range"
                        defaultValue="30"
                        style={{
                          width: "100%",
                          padding: "12px 12px",
                          borderRadius: 14,
                          border: "1px solid rgba(0,0,0,0.08)",
                          background: "rgba(255,255,255,0.7)",
                          outline: "none",
                        }}
                      >
                        <option value="7">Past 7 days</option>
                        <option value="30">Past 30 days</option>
                        <option value="365">Past year</option>
                        <option value="all">All time</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
                    <button type="submit" className="btn btnPrimary">
                      Search
                    </button>

                    {/* If /recent still 404s, switch to /locations for now */}
                    <Link className="btn" href="/recent">
                      Browse recent
                    </Link>

                    <Link className="btn" href="/examples">
                      View examples
                    </Link>
                  </div>

                  <div style={{ marginTop: 10, color: "var(--muted2)", fontSize: "0.95rem" }}>
                    Tip: Try a last name + state (e.g., “Johnson”, “MN”).
                  </div>
                </form>
              </div>
            </div>

            {/* Right: Publish CTA */}
            <div className="card" style={{ padding: 18, borderRadius: 22 }}>
              <div style={{ fontWeight: 800, marginBottom: 8 }}>Publish a memorial</div>

              <div style={{ color: "var(--muted)", lineHeight: 1.65 }}>
                Create an obituary and memorial page with service details, photos, and an optional guestbook. Drafts are
                private by default.
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                <Link className="btn btnPrimary" href="/create-memorial?plan=free">
                  Create a memorial
                </Link>
                <Link className="btn" href="/pricing">
                  See pricing
                </Link>
              </div>

              <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ color: "var(--muted)", fontWeight: 700, marginBottom: 8 }}>Includes</div>
                <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.65 }}>
                  <li>Written obituary</li>
                  <li>Service details</li>
                  <li>Guestbook (optional)</li>
                  <li>Memorial giving (optional)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div style={{ height: 18 }} />

        {/* =========================
            RECENT MEMORIALS (placeholder cards)
        ========================== */}
        <section>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
            <h2 className="h2" style={{ margin: 0 }}>
              Recent memorials
            </h2>
            <Link href="/recent" className="btn">
              View all
            </Link>
          </div>

          <div style={{ height: 10 }} />

          <div className="grid grid3">
            {[
              { name: "Sample Name", dates: "1950 – 2026", place: "Minneapolis, MN", blurb: "A life remembered with love and gratitude." },
              { name: "Sample Name", dates: "1942 – 2026", place: "St. Paul, MN", blurb: "Beloved parent, grandparent, and friend." },
              { name: "Sample Name", dates: "1968 – 2026", place: "Duluth, MN", blurb: "Known for kindness, humor, and steady faith." },
            ].map((m, idx) => (
              <article key={idx} className="card" style={{ padding: 18 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div
                    aria-hidden
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: 16,
                      background: "rgba(0,0,0,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      color: "var(--muted)",
                    }}
                  >
                    EK
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 800, lineHeight: 1.2 }}>{m.name}</div>
                    <div style={{ color: "var(--muted)", fontSize: "0.98rem" }}>
                      {m.dates} · {m.place}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 10, color: "var(--muted)", lineHeight: 1.6 }}>{m.blurb}</div>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                  <Link className="btn btnPrimary" href="/examples">
                    View memorial
                  </Link>
                  <Link className="btn" href="/create-memorial?plan=free">
                    Create similar
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div style={{ height: 18 }} />

        {/* =========================
            BROWSE BY LOCATION
        ========================== */}
        <section className="card" style={{ padding: 18, borderRadius: 22 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
            <h2 className="h2" style={{ margin: 0 }}>
              Browse by location
            </h2>
            <Link href="/locations" className="btn">
              All locations
            </Link>
          </div>

          <div style={{ height: 10 }} />

          {/* Uses the same mobile-safe grid as /locations */}
          <div className="ekStateGrid">
            {HOME_STATES.map((s) => (
              <Link
                key={s.slug}
                href={`/locations/${s.slug}`}
                className="ekStateTile"
                aria-label={s.name}
                title={s.name}
              >
                <div className="ekStateAbbr">{s.abbr}</div>
                <div className="ekStateName">{s.name}</div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 12, color: "var(--muted2)", fontSize: "0.95rem" }}>
            Want your state here? We can expand browsing as we grow.
          </div>
        </section>

        <div style={{ height: 18 }} />

        {/* =========================
            TRUST / WHY EVERKIND
        ========================== */}
        <section className="grid grid3">
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Gentle &amp; simple</div>
            <div style={{ color: "var(--muted)" }}>
              A calm, guided process — no confusing packages or surprise fees.
            </div>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Human review</div>
            <div style={{ color: "var(--muted)" }}>
              Every memorial is reviewed by a real person for accuracy and respect.
            </div>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Built for trust</div>
            <div style={{ color: "var(--muted)" }}>
              No ads, clear pricing, and respectful moderation.
            </div>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
