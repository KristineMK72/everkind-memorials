"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

type StateMeta = { name: string; abbr: string; deaths: string };

/* ---------------------------------------
   All states + DC (deaths placeholder for now)
   Slugs must match your /locations/[state] URLs
---------------------------------------- */
const STATE_META: Record<string, StateMeta> = {
  alabama: { name: "Alabama", abbr: "AL", deaths: "Public statistics available" },
  alaska: { name: "Alaska", abbr: "AK", deaths: "Public statistics available" },
  arizona: { name: "Arizona", abbr: "AZ", deaths: "Public statistics available" },
  arkansas: { name: "Arkansas", abbr: "AR", deaths: "Public statistics available" },
  california: { name: "California", abbr: "CA", deaths: "Public statistics available" },
  colorado: { name: "Colorado", abbr: "CO", deaths: "Public statistics available" },
  connecticut: { name: "Connecticut", abbr: "CT", deaths: "Public statistics available" },
  delaware: { name: "Delaware", abbr: "DE", deaths: "Public statistics available" },
  florida: { name: "Florida", abbr: "FL", deaths: "Public statistics available" },
  georgia: { name: "Georgia", abbr: "GA", deaths: "Public statistics available" },
  hawaii: { name: "Hawaii", abbr: "HI", deaths: "Public statistics available" },
  idaho: { name: "Idaho", abbr: "ID", deaths: "Public statistics available" },
  illinois: { name: "Illinois", abbr: "IL", deaths: "Public statistics available" },
  indiana: { name: "Indiana", abbr: "IN", deaths: "Public statistics available" },
  iowa: { name: "Iowa", abbr: "IA", deaths: "Public statistics available" },
  kansas: { name: "Kansas", abbr: "KS", deaths: "Public statistics available" },
  kentucky: { name: "Kentucky", abbr: "KY", deaths: "Public statistics available" },
  louisiana: { name: "Louisiana", abbr: "LA", deaths: "Public statistics available" },
  maine: { name: "Maine", abbr: "ME", deaths: "Public statistics available" },
  maryland: { name: "Maryland", abbr: "MD", deaths: "Public statistics available" },
  massachusetts: { name: "Massachusetts", abbr: "MA", deaths: "Public statistics available" },
  michigan: { name: "Michigan", abbr: "MI", deaths: "Public statistics available" },
  minnesota: { name: "Minnesota", abbr: "MN", deaths: "Public statistics available" },
  mississippi: { name: "Mississippi", abbr: "MS", deaths: "Public statistics available" },
  missouri: { name: "Missouri", abbr: "MO", deaths: "Public statistics available" },
  montana: { name: "Montana", abbr: "MT", deaths: "Public statistics available" },
  nebraska: { name: "Nebraska", abbr: "NE", deaths: "Public statistics available" },
  nevada: { name: "Nevada", abbr: "NV", deaths: "Public statistics available" },
  "new-hampshire": { name: "New Hampshire", abbr: "NH", deaths: "Public statistics available" },
  "new-jersey": { name: "New Jersey", abbr: "NJ", deaths: "Public statistics available" },
  "new-mexico": { name: "New Mexico", abbr: "NM", deaths: "Public statistics available" },
  "new-york": { name: "New York", abbr: "NY", deaths: "Public statistics available" },
  "north-carolina": { name: "North Carolina", abbr: "NC", deaths: "Public statistics available" },
  "north-dakota": { name: "North Dakota", abbr: "ND", deaths: "Public statistics available" },
  ohio: { name: "Ohio", abbr: "OH", deaths: "Public statistics available" },
  oklahoma: { name: "Oklahoma", abbr: "OK", deaths: "Public statistics available" },
  oregon: { name: "Oregon", abbr: "OR", deaths: "Public statistics available" },
  pennsylvania: { name: "Pennsylvania", abbr: "PA", deaths: "Public statistics available" },
  "rhode-island": { name: "Rhode Island", abbr: "RI", deaths: "Public statistics available" },
  "south-carolina": { name: "South Carolina", abbr: "SC", deaths: "Public statistics available" },
  "south-dakota": { name: "South Dakota", abbr: "SD", deaths: "Public statistics available" },
  tennessee: { name: "Tennessee", abbr: "TN", deaths: "Public statistics available" },
  texas: { name: "Texas", abbr: "TX", deaths: "Public statistics available" },
  utah: { name: "Utah", abbr: "UT", deaths: "Public statistics available" },
  vermont: { name: "Vermont", abbr: "VT", deaths: "Public statistics available" },
  virginia: { name: "Virginia", abbr: "VA", deaths: "Public statistics available" },
  washington: { name: "Washington", abbr: "WA", deaths: "Public statistics available" },
  "west-virginia": { name: "West Virginia", abbr: "WV", deaths: "Public statistics available" },
  wisconsin: { name: "Wisconsin", abbr: "WI", deaths: "Public statistics available" },
  wyoming: { name: "Wyoming", abbr: "WY", deaths: "Public statistics available" },
  "district-of-columbia": { name: "District of Columbia", abbr: "DC", deaths: "Public statistics available" },
};

function titleCaseFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function StateLocationsPage() {
  const params = useParams<{ state?: string }>();
  const pathname = usePathname();

  let slug = params?.state ?? "";
  if (!slug && pathname) {
    const parts = pathname.split("/").filter(Boolean);
    slug = parts[parts.length - 1] ?? "";
  }

  let decoded = slug;
  try {
    decoded = decodeURIComponent(slug);
  } catch {}

  const key = decoded.toLowerCase();
  const meta = STATE_META[key];

  const stateName = meta?.name ?? titleCaseFromSlug(decoded);
  const abbr = meta?.abbr ?? "";
  const deaths = meta?.deaths ?? "Public statistics available";

  return (
    <main>
      <div className="container">
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">Locations</div>

          <h1 className="h1" style={{ marginTop: 10 }}>
            {stateName} {abbr ? `(${abbr})` : ""}
          </h1>

          <p className="p" style={{ maxWidth: 860 }}>
            Memorials in {stateName} created by families who choose to share them publicly.
          </p>

          {/* State overview (safe data) */}
          <div className="card" style={{ padding: 18, marginTop: 14 }}>
            <div style={{ fontWeight: 800, marginBottom: 6 }}>
              About deaths in {stateName}
            </div>
            <div style={{ color: "var(--muted)", lineHeight: 1.6 }}>
              According to public health statistics, approximately <strong>{deaths}</strong> occur in{" "}
              {stateName}. Everkind does not scrape obituaries — only memorials created by families
              appear here.
            </div>
          </div>

          {/* Search + Create CTAs */}
          <div
            className="card"
            style={{
              padding: 18,
              marginTop: 14,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Link
              className="btn btnPrimary"
              href={`/search?location=${encodeURIComponent(abbr || stateName)}`}
            >
              Search memorials in {abbr || stateName}
            </Link>

            <Link className="btn" href="/create-memorial?plan=free">
              Create a memorial
            </Link>

            <Link className="btn" href="/locations" style={{ marginLeft: "auto" }}>
              All locations
            </Link>
          </div>

          {/* Placeholder memorial list */}
          <div className="card" style={{ padding: 18, marginTop: 14 }}>
            <div style={{ fontWeight: 800, marginBottom: 6 }}>
              Public memorials in {stateName}
            </div>
            <div style={{ color: "var(--muted)" }}>
              No public memorials yet. Memorials begin as private drafts and appear here only if
              families choose to publish them.
            </div>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
