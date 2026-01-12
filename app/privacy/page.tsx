export default function PrivacyPage() {
  return (
    <main>
      <div className="container">
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">Privacy Policy</div>
          <h1 className="h1" style={{ marginTop: 10 }}>We don’t sell your grief.</h1>
          <p className="p" style={{ maxWidth: 900 }}>
            Everkind Memorials respects your privacy. We do not sell or share personal information for advertising.
          </p>

          <div style={{ height: 18 }} />

          <div className="grid" style={{ gap: 14 }}>
            <div className="card" style={{ padding: 18, borderRadius: 22 }}>
              <div style={{ fontWeight: 900, marginBottom: 8 }}>Information we collect</div>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
                <li>Information you submit through forms</li>
                <li>Payment details (processed securely by third parties)</li>
                <li>Limited analytics for site functionality</li>
              </ul>
            </div>

            <div className="card" style={{ padding: 18, borderRadius: 22 }}>
              <div style={{ fontWeight: 900, marginBottom: 8 }}>How we use information</div>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
                <li>To create and manage memorial pages</li>
                <li>To communicate with you regarding services</li>
                <li>To process payments and donations</li>
              </ul>
            </div>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
