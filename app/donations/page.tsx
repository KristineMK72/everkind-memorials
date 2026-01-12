import Link from "next/link";

const LINKS = {
  oneTreePlanted: "https://onetreeplanted.org/products/plant-trees",
  arborDayDonate: "https://www.arborday.org/donate",
  namiDonate: "https://www.nami.org/get-involved/donate-to-nami/",
  wwfOneTime: "https://gifts.worldwildlife.org/gift-center/one-time-donation",
};

function ExternalButton({
  href,
  children,
  tone = "primary",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "primary" | "secondary";
}) {
  const cls = tone === "primary" ? "btn btnPrimary" : "btn";
  return (
    <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function DonationsPage() {
  return (
    <main>
      <div className="container">
        <section className="glass longform" style={{ padding: 26 }}>
          <div className="kicker">Memorial Giving</div>
          <h1 style={{ marginTop: 10 }}>Giving is optional. Always.</h1>

          <p style={{ maxWidth: 920 }}>
            Some families choose to honor a life through a small act of giving — a tree planted in memory, support for a
            cause, or a link to a nonprofit that mattered to their loved one. Everkind keeps this gentle and never
            required.
          </p>

          <div style={{ height: 14 }} />

          <div className="grid grid3">
            {/* TREE PLANTING */}
            <div className="card" style={{ padding: 18, borderRadius: 22 }}>
              <h2 style={{ fontSize: "1.25rem" }}>🌱 Tree planting</h2>
              <p>
                A living tribute that grows over time. These are widely used, reputable options for memorial tree
                planting.
              </p>

              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                <ExternalButton href={LINKS.oneTreePlanted} tone="primary">
                  One Tree Planted
                </ExternalButton>
                <ExternalButton href={LINKS.arborDayDonate} tone="secondary">
                  Arbor Day Foundation
                </ExternalButton>
              </div>

              <p style={{ marginTop: 12, color: "var(--muted2)", fontSize: "0.95rem" }}>
                Note: donations are made directly to the organization in a new tab.
              </p>
            </div>

            {/* MENTAL HEALTH */}
            <div className="card" style={{ padding: 18, borderRadius: 22 }}>
              <h2 style={{ fontSize: "1.25rem" }}>❤️ Mental health support</h2>
              <p>
                For families who want memorial giving to support care, education, and resources for mental health.
              </p>

              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                <ExternalButton href={LINKS.namiDonate} tone="primary">
                  Donate to NAMI
                </ExternalButton>
              </div>

              <p style={{ marginTop: 12, color: "var(--muted2)", fontSize: "0.95rem" }}>
                Tip: If you want local impact later, we can add a “choose your local NAMI” option.
              </p>
            </div>

            {/* WILDLIFE / NATURE */}
            <div className="card" style={{ padding: 18, borderRadius: 22 }}>
              <h2 style={{ fontSize: "1.25rem" }}>🐾 Wildlife &amp; nature</h2>
              <p>
                A gentle option for honoring someone who loved animals, the outdoors, and conservation.
              </p>

              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                <ExternalButton href={LINKS.wwfOneTime} tone="primary">
                  Donate to WWF
                </ExternalButton>
              </div>

              <p style={{ marginTop: 12, color: "var(--muted2)", fontSize: "0.95rem" }}>
                WWF donations are handled on WWF’s site.
              </p>
            </div>
          </div>

          <div style={{ height: 18 }} />

          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <h2>How this will appear on a memorial page</h2>
            <p>If a family enables memorial giving, the memorial page can show:</p>
            <ul>
              <li>A short “in lieu of flowers…” message</li>
              <li>A link to a nonprofit (or multiple links)</li>
              <li>Optional tree planting (if selected)</li>
            </ul>

            <div style={{ marginTop: 12, color: "var(--muted2)" }}>
              Everkind is not a charity. Donations go to the chosen organization or partner.
            </div>
          </div>

          <div style={{ height: 18 }} />

          <div
            className="card"
            style={{
              padding: 18,
              borderRadius: 22,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "grid", gap: 4 }}>
              <div style={{ fontWeight: 900 }}>Want to include giving on a memorial?</div>
              <div style={{ color: "var(--muted)" }}>
                You can add it while creating a memorial — or leave it off entirely.
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link className="btn btnPrimary" href="/create-memorial">
                Create a memorial
              </Link>
              <Link className="btn" href="/donation-disclaimer">
                Donation disclaimer
              </Link>
            </div>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
