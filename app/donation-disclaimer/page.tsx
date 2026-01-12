export default function DonationDisclaimerPage() {
  return (
    <main>
      <div className="container">
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">Donation Disclaimer</div>
          <h1 className="h1" style={{ marginTop: 10 }}>Memorial giving is optional.</h1>
          <p className="p" style={{ maxWidth: 900 }}>
            Everkind Memorials facilitates optional memorial giving through trusted nonprofit partners.
            Everkind is not a charity and does not claim ownership of donated funds.
          </p>

          <div style={{ height: 18 }} />

          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>How giving works</div>
            <div style={{ color: "var(--muted)" }}>
              When giving options are enabled, donations are forwarded according to selected preferences and disclosed practices.
              Everkind may provide links to third-party donation pages or partners.
            </div>
          </div>

          <div style={{ height: 14 }} />

          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Third-party services</div>
            <div style={{ color: "var(--muted)" }}>
              Everkind is not responsible for third-party services, external links, or partner policies.
            </div>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
