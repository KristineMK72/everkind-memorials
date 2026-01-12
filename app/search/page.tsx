import Link from "next/link";

type SearchResult = {
  id: string;
  name: string;
  dates?: string;
  location?: string; // "City, ST"
  blurb?: string;
  source?: "everkind" | "public";
  href: string;
};

// MVP mock data (replace with DB later)
const MOCK_RESULTS: SearchResult[] = [
  {
    id: "sample-1",
    name: "Sample Name",
    dates: "1950 – 2026",
    location: "Minneapolis, MN",
    blurb: "A life remembered with love and gratitude.",
    source: "everkind",
    href: "/examples",
  },
  {
    id: "sample-2",
    name: "Sample Name",
    dates: "1942 – 2026",
    location: "St. Paul, MN",
    blurb: "Beloved parent, grandparent, and friend.",
    source: "everkind",
    href: "/examples",
  },
  {
    id: "sample-3",
    name: "Sample Name",
    dates: "1968 – 2026",
    location: "Duluth, MN",
    blurb: "Known for kindness, humor, and steady faith.",
    source: "everkind",
    href: "/examples",
  },
];

function normalize(s: string) {
  return s.trim().toLowerCase();
}

function matches(hay: string | undefined, needle: string) {
  if (!needle) return true;
  return normalize(hay ?? "").includes(normalize(needle));
}

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { q?: string; location?: string; range?: string };
}) {
  const q = searchParams?.q ?? "";
  const location = searchParams?.location ?? "";
  const range = searchParams?.range ?? "30";

  // Filter mock results for now
  const results = MOCK_RESULTS.filter((r) => {
    const nameOk = matches(r.name, q);
    const locOk = matches(r.location, location);
    return nameOk && locOk;
  });

  const hasQuery = Boolean(q.trim() || location.trim());

  return (
    <main>
      <div className="container">
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">Search</div>
          <h1 className="h1" style={{ marginTop: 10 }}>
            Search memorials
          </h1>
          <p className="p" style={{ maxWidth: 860 }}>
            Everkind shows memorials created by families who choose to publish publicly.
            We do not scrape obituaries.
          </p>

          <div style={{ height: 14 }} />

          <div className="card" style={{ padding: 18 }}>
            <form action="/search" method="GET" style={{ display: "grid", gap: 10 }}>
              <div style={{ display: "grid", gap: 10 }}>
                <input
                  name="q"
                  defaultValue={q}
                  placeholder="Name (e.g., Jane Doe)"
                  aria-label="Search by name"
                />

                <div className="row row2">
                  <input
                    name="location"
                    defaultValue={location}
                    placeholder="City or State (e.g., AK or Alaska)"
                    aria-label="Search by location"
                  />

                  <select name="range" defaultValue={range} aria-label="Date range">
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
                <Link className="btn" href="/locations">
                  Browse by location
                </Link>
                <Link className="btn" href="/create-memorial?plan=free">
                  Create a memorial
                </Link>
              </div>

              <div style={{ marginTop: 8, color: "var(--muted2)", fontSize: "0.95rem" }}>
                Tip: Try a last name + state (e.g., “Johnson”, “AK”).
              </div>
            </form>
          </div>
        </section>

        <div style={{ height: 18 }} />

        <section>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
            <h2 className="h2" style={{ margin: 0 }}>
              Results
            </h2>
            <div style={{ color: "var(--muted2)", fontSize: "0.95rem" }}>
              {hasQuery ? `${results.length} match${results.length === 1 ? "" : "es"}` : "Try searching above"}
            </div>
          </div>

          <div style={{ height: 10 }} />

          {hasQuery ? (
            results.length ? (
              <div className="grid grid3">
                {results.map((m) => (
                  <article key={m.id} className="card" style={{ padding: 18 }}>
                    <div style={{ fontWeight: 850 }}>{m.name}</div>
                    <div style={{ color: "var(--muted)", marginTop: 6 }}>
                      {m.dates ? `${m.dates} · ` : ""}
                      {m.location ?? ""}
                    </div>
                    {m.blurb ? (
                      <div style={{ color: "var(--muted)", marginTop: 10, lineHeight: 1.6 }}>
                        {m.blurb}
                      </div>
                    ) : null}

                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                      <Link className="btn btnPrimary" href={m.href}>
                        View
                      </Link>
                      <Link className="btn" href="/create-memorial?plan=free">
                        Create similar
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 850, marginBottom: 6 }}>No matches yet</div>
                <div style={{ color: "var(--muted)" }}>
                  Everkind only shows memorials created by families who choose to publish publicly.
                  You can create one now.
                </div>

                <div style={{ height: 12 }} />

                <Link className="btn btnPrimary" href="/create-memorial?plan=free">
                  Create a memorial
                </Link>
              </div>
            )
          ) : (
            <div className="card" style={{ padding: 18 }}>
              <div style={{ fontWeight: 850, marginBottom: 6 }}>Start with a name or location</div>
              <div style={{ color: "var(--muted)" }}>
                Example: “Johnson” + “AK”, or “Anchorage” + “AK”.
              </div>
            </div>
          )}
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
