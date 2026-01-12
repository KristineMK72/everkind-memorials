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
  params: { state?: string | string[] };
}) {
  // Guard: Next can sometimes represent params as string[] in edge cases.
  const raw = Array.isArray(params?.state) ? params.state[0] : params?.state;

  // Guard: never crash
  const safeSlug = typeof raw === "string" && raw.length ? raw : "unknown";

  // Decode (in case something was encoded in a link)
  let decoded = safeSlug;
  try {
    decoded = decodeURIComponent(safeSlug);
  } catch {
    // ignore bad URI sequences
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
