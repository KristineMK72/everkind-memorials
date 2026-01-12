import Link from "next/link";

type StateItem = { name: string; abbr: string; slug: string };

const STATES: StateItem[] = [
  { name: "Alabama", abbr: "AL", slug: "alabama" },
  { name: "Alaska", abbr: "AK", slug: "alaska" },
  { name: "Arizona", abbr: "AZ", slug: "arizona" },
  { name: "Arkansas", abbr: "AR", slug: "arkansas" },
  { name: "California", abbr: "CA", slug: "california" },
  { name: "Colorado", abbr: "CO", slug: "colorado" },
  { name: "Connecticut", abbr: "CT", slug: "connecticut" },
  { name: "Delaware", abbr: "DE", slug: "delaware" },
  { name: "Florida", abbr: "FL", slug: "florida" },
  { name: "Georgia", abbr: "GA", slug: "georgia" },
  { name: "Hawaii", abbr: "HI", slug: "hawaii" },
  { name: "Idaho", abbr: "ID", slug: "idaho" },
  { name: "Illinois", abbr: "IL", slug: "illinois" },
  { name: "Indiana", abbr: "IN", slug: "indiana" },
  { name: "Iowa", abbr: "IA", slug: "iowa" },
  { name: "Kansas", abbr: "KS", slug: "kansas" },
  { name: "Kentucky", abbr: "KY", slug: "kentucky" },
  { name: "Louisiana", abbr: "LA", slug: "louisiana" },
  { name: "Maine", abbr: "ME", slug: "maine" },
  { name: "Maryland", abbr: "MD", slug: "maryland" },
  { name: "Massachusetts", abbr: "MA", slug: "massachusetts" },
  { name: "Michigan", abbr: "MI", slug: "michigan" },
  { name: "Minnesota", abbr: "MN", slug: "minnesota" },
  { name: "Mississippi", abbr: "MS", slug: "mississippi" },
  { name: "Missouri", abbr: "MO", slug: "missouri" },
  { name: "Montana", abbr: "MT", slug: "montana" },
  { name: "Nebraska", abbr: "NE", slug: "nebraska" },
  { name: "Nevada", abbr: "NV", slug: "nevada" },
  { name: "New Hampshire", abbr: "NH", slug: "new-hampshire" },
  { name: "New Jersey", abbr: "NJ", slug: "new-jersey" },
  { name: "New Mexico", abbr: "NM", slug: "new-mexico" },
  { name: "New York", abbr: "NY", slug: "new-york" },
  { name: "North Carolina", abbr: "NC", slug: "north-carolina" },
  { name: "North Dakota", abbr: "ND", slug: "north-dakota" },
  { name: "Ohio", abbr: "OH", slug: "ohio" },
  { name: "Oklahoma", abbr: "OK", slug: "oklahoma" },
  { name: "Oregon", abbr: "OR", slug: "oregon" },
  { name: "Pennsylvania", abbr: "PA", slug: "pennsylvania" },
  { name: "Rhode Island", abbr: "RI", slug: "rhode-island" },
  { name: "South Carolina", abbr: "SC", slug: "south-carolina" },
  { name: "South Dakota", abbr: "SD", slug: "south-dakota" },
  { name: "Tennessee", abbr: "TN", slug: "tennessee" },
  { name: "Texas", abbr: "TX", slug: "texas" },
  { name: "Utah", abbr: "UT", slug: "utah" },
  { name: "Vermont", abbr: "VT", slug: "vermont" },
  { name: "Virginia", abbr: "VA", slug: "virginia" },
  { name: "Washington", abbr: "WA", slug: "washington" },
  { name: "West Virginia", abbr: "WV", slug: "west-virginia" },
  { name: "Wisconsin", abbr: "WI", slug: "wisconsin" },
  { name: "Wyoming", abbr: "WY", slug: "wyoming" },
];

export default function LocationsPage() {
  return (
    <main>
      <div className="container">
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">Locations</div>
          <h1 className="h1" style={{ marginTop: 10 }}>
            Browse memorials by state
          </h1>
          <p className="p" style={{ maxWidth: 860 }}>
            Memorials are private by default. Public listings appear only when families choose to publish.
          </p>

          <div style={{ height: 14 }} />

          <div className="ekStateGrid">
            {STATES.map((s) => (
              <Link
                key={s.abbr}
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

          <div style={{ height: 16 }} />

          <div
            className="card"
            style={{ padding: 18, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}
          >
            <div style={{ display: "grid", gap: 4 }}>
              <div style={{ fontWeight: 850 }}>Want to start one instead?</div>
              <div style={{ color: "var(--muted)" }}>
                Create privately first — decide on publishing later.
              </div>
            </div>

            <div style={{ marginLeft: "auto" }}>
              <Link className="btn btnPrimary" href="/create-memorial?plan=free">
                Start a memorial
              </Link>
            </div>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
