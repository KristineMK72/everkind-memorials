const EFFECTIVE_DATE = "January 11, 2026";

export default function TermsPage() {
  return (
    <main>
      <div className="container">
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">Terms of Service</div>
          <h1 className="h1" style={{ marginTop: 10 }}>Respectful use</h1>
          <p className="p" style={{ maxWidth: 900 }}>
            Effective Date: {EFFECTIVE_DATE}
          </p>

          <div style={{ height: 18 }} />

          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Use of Services</div>
            <div style={{ color: "var(--muted)" }}>
              Everkind Memorials (“Everkind,” “we,” “our”) provides online memorial and obituary services.
              By using this website, you agree to these terms.
            </div>
            <div style={{ marginTop: 12, color: "var(--muted)" }}>
              You affirm that you have the legal right to submit content for publication and that the information
              provided is truthful and respectful.
            </div>
          </div>

          <div style={{ height: 14 }} />

          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Memorial Pages</div>
            <div style={{ color: "var(--muted)" }}>
              Memorial pages are intended for remembrance and reflection. Everkind does not guarantee perpetual hosting
              unless explicitly stated.
            </div>
          </div>

          <div style={{ height: 14 }} />

          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Payments</div>
            <div style={{ color: "var(--muted)" }}>
              All payments are processed securely. Due to the nature of the service, refunds are handled on a case-by-case basis.
            </div>
          </div>

          <div style={{ height: 14 }} />

          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Limitation of Liability</div>
            <div style={{ color: "var(--muted)" }}>
              Everkind is not responsible for user-submitted content, third-party services, or external links.
            </div>
            <div style={{ marginTop: 12, color: "var(--muted)" }}>
              Everkind reserves the right to edit, refuse, or remove content that is harmful, false, defamatory, or inappropriate.
            </div>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
