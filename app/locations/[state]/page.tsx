"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

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

  // Primary: dynamic param
  let slug = params?.state ?? "";

  // Fallback: parse from URL (/locations/alabama -> "alabama")
  if (!slug && pathname) {
    const parts = pathname.split("/").filter(Boolean);
    slug = parts[parts.length - 1] ?? "";
  }

  // Final guard
  if (!slug) slug = "unknown";

  let decoded = slug;
  try {
    decoded = decodeURIComponent(slug);
  } catch {
    // ignore malformed URI
  }

  const stateName = titleCaseFromSlug(decoded);

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

          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 850, marginBottom: 6 }}>No public memorials yet</div>
            <div style={{ color: "var(--muted)" }}>
              Memorials start private by default. You can create one now and decide later whether to publish publicly.
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
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
