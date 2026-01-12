import Link from "next/link";

type Item = {
  name: string;
  dateOfDeath: string;
  birthPlace?: string;
  deathPlace?: string;
  wikipedia?: string;
  wikidata?: string;
};

async function getRecent(days = 30): Promise<Item[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/recent?days=${days}`, {
    // if NEXT_PUBLIC_BASE_URL is not set on server, fallback to relative:
    cache: "no-store",
  }).catch(() => null);

  // fallback: relative fetch (works in production)
  const res2 =
    res ??
    (await fetch(`/api/recent?days=${days}`, {
      cache: "no-store",
    }).catch(() => null));

  if (!res2 || !res2.ok) return [];
  const data = await res2.json();
  return data.items ?? [];
}

function fmtDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export default async function RecentPage() {
  const items = await getRecent(30);

  return (
    <main>
      <div className="container">
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">Recent</div>
          <h1 className="h1" style={{ marginTop: 10 }}>Recent deaths (public data)</h1>
          <p className="p" style={{ maxWidth: 860 }}>
            This feed is powered by public Wikidata/Wikipedia entries (not local obituaries). Families can still create
            a private memorial any time.
          </p>

          <div style={{ height: 14 }} />

          <div className="card" style={{ padding: 18 }}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              <Link className="btn btnPrimary" href="/create-memorial?plan=free">Create a memorial</Link>
              <Link className="btn" href="/locations">Browse by location</Link>
            </div>
          </div>

          <div style={{ height: 14 }} />

          <div className="grid grid3">
            {items.length ? (
              items.map((m) => (
                <article key={m.wikidata || m.name} className="card" style={{ padding: 18 }}>
                  <div style={{ fontWeight: 850 }}>{m.name}</div>
                  <div style={{ color: "var(--muted)", marginTop: 6 }}>
                    Died: {fmtDate(m.dateOfDeath)}
                  </div>

                  {(m.deathPlace || m.birthPlace) ? (
                    <div style={{ color: "var(--muted2)", marginTop: 8, fontSize: "0.95rem", lineHeight: 1.5 }}>
                      {m.deathPlace ? <>Place of death: {m.deathPlace}</> : null}
                      {m.deathPlace && m.birthPlace ? <br /> : null}
                      {m.birthPlace ? <>Place of birth: {m.birthPlace}</> : null}
                    </div>
                  ) : null}

                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                    {m.wikipedia ? (
                      <a className="btn btnPrimary" href={m.wikipedia} target="_blank" rel="noreferrer">
                        Wikipedia
                      </a>
                    ) : null}
                    {m.wikidata ? (
                      <a className="btn" href={m.wikidata} target="_blank" rel="noreferrer">
                        Wikidata
                      </a>
                    ) : null}
                  </div>
                </article>
              ))
            ) : (
              <div className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 850, marginBottom: 6 }}>No results right now</div>
                <div style={{ color: "var(--muted)" }}>
                  If Wikidata is rate-limiting or temporarily unavailable, this can happen. Try again soon.
                </div>
              </div>
            )}
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
