import Link from "next/link";

const EXAMPLES = [
  {
    title: "Wayne Richard Kahler",
    subtitle: "Example memorial with giving + service details",
    href: "/m/wayne-kahler",
  },
  {
    title: "Everkind Example Memorial",
    subtitle: "Template layout (placeholder story)",
    href: "/m/anything",
  },
];

export default function ExamplesPage() {
  return (
    <main>
      <div className="container">
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">Examples</div>
          <h1 className="h1" style={{ marginTop: 10 }}>
            Sample memorial pages
          </h1>
          <p className="p">
            These examples show how a memorial can look. Drafts are private by default.
          </p>
        </section>

        <div style={{ height: 18 }} />

        <section className="grid grid2">
          {EXAMPLES.map((ex) => (
            <Link
              key={ex.href}
              href={ex.href}
              className="card"
              style={{ padding: 18, borderRadius: 22, textDecoration: "none", color: "inherit" }}
            >
              <div style={{ fontWeight: 900, marginBottom: 6 }}>{ex.title}</div>
              <div style={{ color: "var(--muted)" }}>{ex.subtitle}</div>
              <div style={{ marginTop: 12 }}>
                <span className="btn btnPrimary">Open</span>
              </div>
            </Link>
          ))}
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
