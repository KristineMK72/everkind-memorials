import Link from "next/link";

export default function DonationsPage() {
  return (
    <main>
      <div className="container">
        <section className="glass longform" style={{ padding: 26 }}>
          <div className="kicker">Memorial Giving</div>
          <h1 style={{ marginTop: 10 }}>Giving is optional. Always.</h1>

          <p style={{ maxWidth: 900 }}>
            Some families choose to honor a life through a small act of giving — a tree planted in memory,
            support for a cause, or a link to a nonprofit that mattered to their loved one.
            Everkind keeps this gentle and never required.
          </p>

          <div style={{ marginTop: 18 }} className="grid grid3">
            <div className="card" style={{ padding: 18, borderRadius: 22 }}>
              <h3 style={{ marginBottom: 8 }}>🌱 Tree planting</h3>
              <p style={{ margin: 0 }}>
                A living tribute that grows over time. (Partner integrations can be added next.)
              </p>
            </div>

            <div className="card" style={{ padding: 18, borderRadius: 22 }}>
              <h3 style={{ marginBottom: 8 }}>❤️ Mental health support</h3>
              <p style={{ margin: 0 }}>
                Honor someone’s story by supporting mental health resources and care.
              </p>
            </div>

            <div className="card" style={{ padding: 18, borderRadius: 22 }}>
              <h3 style={{ marginBottom: 8 }}>🐾 Wildlife & nature</h3>
              <p style={{ margin: 0 }}>
                Support conservation, rescue, and protection of the natural world.
              </p>
            </div>
          </div>

          <div style={{ height: 18 }} />

          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <h2>How it will work on a memorial page</h2>
            <p>
              If a family enables memorial giving, the memorial page can show:
            </p>
            <ul>
              <li>A short “in lieu of flowers…” message</li>
              <li>A link to a nonprofit (or multiple links)</li>
              <li>Optional “plant a tree” remembrance (when available)</li>
            </ul>

            <div style={{ marginTop: 12, color: "var(--muted2)" }}>
              Everkind is not a charity. Donations go to the chosen organization or partner.
            </div>
          </div>

          <div style={{ height: 18 }} />

          <div
            className="card"
            style={{
              padding: 18,
              borderRadius: 22,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "grid", gap: 4 }}>
              <div style={{ fontWeight: 900 }}>Want to include giving on a memorial?</div>
              <div style={{ color: "var(--muted)" }}>
                You can add it when you create a memorial — or leave it off entirely.
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link className="btn btnPrimary" href="/create-memorial">
                Create a memorial
              </Link>
              <Link className="btn" href="/donation-disclaimer">
                Donation disclaimer
              </Link>
            </div>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
