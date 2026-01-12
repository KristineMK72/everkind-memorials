import Link from "next/link";

function toTitleCaseFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function StateLocationsPage({
  params,
}: {
  params: Record<string, string | string[] | undefined>;
}) {
  // Support multiple possible param names:
  // - /locations/[state] -> params.state
  // - /locations/[slug]  -> params.slug
  // - fallback -> first key in params
  let raw =
    (params.state as any) ??
    (params.slug as any) ??
    (Object.keys(params || {}).length ? (params as any)[Object.keys(params)[0]] : undefined);

  if (Array.isArray(raw)) raw = raw[0];
  if (typeof raw !== "string" || !raw.length) raw = "unknown";

  let decoded = raw;
  try {
    decoded = decodeURIComponent(raw);
  } catch {
    // ignore
  }

  const stateName = toTitleCaseFromSlug(decoded);

  return (
    <main>
      <div className="container">
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">Locations</div>
          <h1 className="h1" style={{ marginTop: 10 }}>{stateName}</h1>

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
