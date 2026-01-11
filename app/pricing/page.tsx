import Link from "next/link";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    note: "For private drafts & sharing with close family.",
    features: ["Private draft page", "Share-only link", "Basic obituary + service details"],
    cta: "Start free",
  },
  {
    name: "Plus",
    price: "$19",
    note: "For a full memorial page with guestbook.",
    features: ["Everything in Free", "Guestbook messages", "Public publishing option", "Photo gallery (standard)"],
    cta: "Choose Plus",
    highlight: true,
  },
  {
    name: "Premium",
    price: "$39",
    note: "For families who want extra space and polish.",
    features: ["Everything in Plus", "Expanded gallery", "Donations & links", "Custom URL (when available)", "Priority review"],
    cta: "Choose Premium",
  },
];

export default function PricingPage() {
  return (
    <main>
      <section className="glass" style={{ padding: 26 }}>
        <div className="kicker">Pricing</div>
        <h1 className="h1" style={{ marginTop: 10 }}>Simple plans. Clear choices.</h1>
        <p className="p" style={{ maxWidth: 720 }}>
          Launch pricing shown below. You can start a memorial privately and decide later if you’d like to publish.
        </p>

        <div style={{ height: 18 }} />

        <div className="grid grid3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className="card"
              style={{
                padding: 18,
                borderRadius: 22,
                border: p.highlight ? "1px solid rgba(215,183,255,0.55)" : undefined,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
                <div style={{ fontWeight: 900, fontSize: "1.1rem" }}>{p.name}</div>
                <div style={{ fontWeight: 900, fontSize: "1.2rem" }}>{p.price}</div>
              </div>
              <div style={{ color: "var(--muted)", marginTop: 8 }}>{p.note}</div>

              <ul style={{ marginTop: 12, paddingLeft: 18, color: "var(--muted)" }}>
                {p.features.map((f) => (
                  <li key={f} style={{ marginBottom: 6 }}>{f}</li>
                ))}
              </ul>

              <div style={{ marginTop: 14 }}>
                <Link className={`btn ${p.highlight ? "btnPrimary" : ""}`} href="/create-memorial">
                  {p.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: 18 }} />

        <div className="card" style={{ padding: 18 }}>
          <div style={{ fontWeight: 850, marginBottom: 6 }}>Need help?</div>
          <div style={{ color: "var(--muted)" }}>
            If you have questions or need assistance creating a memorial, we’ll make it easy and human.
          </div>
        </div>
      </section>
    </main>
  );
}
