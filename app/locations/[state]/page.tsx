import Link from "next/link";

function titleCaseFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function StateLocationsPage({
  params,
}: {
  params: { state: string };
}) {
  const slug = params.state;
  const stateName = titleCaseFromSlug(slug);

  return (
    <main>
      <div className="container">
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">Locations</div>
          <h1 className="h1" style={{ marginTop: 10 }}>
            {stateName}
          </h1>
          <p className="p" style={{ maxWidth: 860 }}>
            Public memorials in {stateName} will appear here once families choose to publish.
          </p>

          <div style={{ height: 14 }} />

          {/* Placeholder list area (ready for real data later) */}
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 850, marginBottom: 6 }}>No public memorials yet</div>
            <div style={{ color: "var(--muted)" }}>
              Memorials start private by default. If you&apos;re creating one, you can decide later whether to publish publicly.
            </div>

            <div style={{ height: 14 }} />

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link className="btn btnPrimary" href="/create-memorial?plan=free">
                Start a memorial
              </Link>
              <Link className="btn" href="/locations">
                Browse all states
              </Link>
            </div>
          </div>

          <div style={{ height: 16 }} />

          {/* Future-ready: search/filter bar placeholder */}
          <div className="card" style={{ padding: 18, display: "grid", gap: 8 }}>
            <div style={{ fontWeight: 850 }}>Coming next</div>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
              <li>Search by name</li>
              <li>Sort by newest</li>
              <li>Filter by city</li>
            </ul>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
