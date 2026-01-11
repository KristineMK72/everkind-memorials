import Link from "next/link";

type Plan = {
  key: "free" | "plus" | "premium";
  name: string;
  price: string;
  cadence: string;
  note: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    key: "free",
    name: "Free",
    price: "$0",
    cadence: "",
    note: "Start privately and share by link with close family.",
    features: [
      "Private draft (link-only)",
      "Obituary + service details",
      "Edit anytime on this device",
      "Optional guestbook later",
    ],
    cta: "Start free",
    href: "/create-memorial",
  },
  {
    key: "plus",
    name: "Plus",
    price: "$79",
    cadence: "one-time",
    note: "A full memorial page with guestbook and gallery.",
    features: [
      "Everything in Free",
      "Guestbook (moderated)",
      "Photo gallery (standard)",
      "Public publishing option (after review)",
      "Support for charity / giving links",
    ],
    cta: "Choose Plus",
    href: "/create-memorial",
    featured: true,
  },
  {
    key: "premium",
    name: "Premium",
    price: "$129",
    cadence: "one-time",
    note: "For families who want extra space and polish.",
    features: [
      "Everything in Plus",
      "Expanded gallery",
      "Priority review",
      "Custom URL (when available)",
      "Enhanced layout options",
    ],
    cta: "Choose Premium",
    href: "/create-memorial",
  },
];

export default function PricingPage() {
  return (
    <main>
      <div className="container">
        {/* Header */}
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">Pricing</div>
          <h1 className="h1" style={{ marginTop: 10 }}>
            Simple options, respectful defaults.
          </h1>
          <p className="p" style={{ maxWidth: 860 }}>
            Every memorial starts private by default. Share with a link, invite family, and publish publicly only if you
            choose — after a real person reviews it.
          </p>

          <div style={{ marginTop: 16 }} className="card">
            <div style={{ padding: 16, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ color: "var(--muted)" }}>Human review before publication</span>
              <span style={{ color: "var(--muted2)" }}>Most approvals: 24–48 hours</span>
              <span style={{ color: "var(--muted2)", marginLeft: "auto" }}>Launch pricing</span>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section style={{ marginTop: 18 }} className="grid grid3">
          {PLANS.map((plan) => (
            <PlanCard key={plan.key} plan={plan} />
          ))}
        </section>

        {/* FAQ-ish / reassurance */}
        <section style={{ marginTop: 18 }} className="glass">
          <div style={{ padding: 22 }}>
            <div className="kicker">Questions</div>
            <h2 style={{ margin: "10px 0 0", fontSize: "1.55rem", letterSpacing: "-0.02em" }}>
              What happens after I choose a plan?
            </h2>

            <div style={{ height: 14 }} />

            <div className="grid grid3">
              <div className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 850, marginBottom: 8 }}>1) Create privately</div>
                <div style={{ color: "var(--muted)" }}>
                  Draft your memorial. Share a private link with family anytime.
                </div>
              </div>

              <div className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 850, marginBottom: 8 }}>2) Review</div>
                <div style={{ color: "var(--muted)" }}>
                  If you choose to publish publicly, we review for dignity and clarity.
                </div>
              </div>

              <div className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 850, marginBottom: 8 }}>3) Publish (optional)</div>
                <div style={{ color: "var(--muted)" }}>
                  You decide whether your memorial appears in browse/search.
                </div>
              </div>
            </div>

            <div style={{ height: 16 }} />

            <div
              className="card"
              style={{
                padding: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "grid", gap: 4 }}>
                <div style={{ fontWeight: 850 }}>Not sure yet?</div>
                <div style={{ color: "var(--muted)" }}>
                  Start a draft first — you can decide on publishing later.
                </div>
              </div>

              <Link className="btn btnPrimary" href="/create-memorial">
                Start a memorial
              </Link>
            </div>

            <div style={{ marginTop: 12, color: "var(--muted2)", fontSize: "0.95rem" }}>
              Billing + payment wiring can be added next; this page is ready for launch and easy to update.
            </div>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const border = plan.featured
    ? "1px solid rgba(215,183,255,0.60)"
    : "1px solid rgba(255,255,255,0.10)";

  const glow = plan.featured
    ? "0 0 0 1px rgba(147,215,255,0.14) inset, 0 14px 50px rgba(147,215,255,0.10)"
    : "0 10px 35px rgba(0,0,0,0.28)";

  return (
    <div
      className="card"
      style={{
        padding: 18,
        borderRadius: 22,
        border,
        boxShadow: glow,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Featured badge */}
      {plan.featured ? (
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            padding: "6px 10px",
            borderRadius: 999,
            border: "1px solid rgba(215,183,255,0.55)",
            background:
              "linear-gradient(180deg, rgba(215,183,255,0.22), rgba(147,215,255,0.16))",
            color: "var(--text)",
            fontSize: "0.85rem",
            fontWeight: 800,
          }}
        >
          Most chosen
        </div>
      ) : null}

      <div style={{ display: "grid", gap: 6 }}>
        <div style={{ fontWeight: 900, fontSize: "1.1rem", letterSpacing: "-0.01em" }}>
          {plan.name}
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "baseline", flexWrap: "wrap" }}>
          <div style={{ fontWeight: 950, fontSize: "1.55rem" }}>{plan.price}</div>
          {plan.cadence ? (
            <div style={{ color: "var(--muted2)", fontWeight: 700 }}>{plan.cadence}</div>
          ) : null}
        </div>

        <div style={{ color: "var(--muted)" }}>{plan.note}</div>
      </div>

      <div style={{ height: 14 }} />

      <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
        {plan.features.map((f) => (
          <li key={f} style={{ marginBottom: 8 }}>
            {f}
          </li>
        ))}
      </ul>

      <div style={{ height: 14 }} />

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <Link className={`btn ${plan.featured ? "btnPrimary" : ""}`} href={plan.href}>
          {plan.cta}
        </Link>

        <span style={{ color: "var(--muted2)", fontSize: "0.95rem" }}>
          Starts private • publish optional
        </span>
      </div>

      <div
        style={{
          marginTop: 14,
          paddingTop: 14,
          borderTop: "1px solid rgba(255,255,255,0.10)",
          color: "var(--muted2)",
          fontSize: "0.92rem",
        }}
      >
        Every memorial is reviewed by a real person before publication.
      </div>
    </div>
  );
}
