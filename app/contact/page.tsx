export default function ContactPage() {
  return (
    <main>
      <div className="container">
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">Contact</div>
          <h1 className="h1" style={{ marginTop: 10 }}>We’re here.</h1>
          <p className="p" style={{ maxWidth: 900 }}>
            If you need help creating a memorial or updating a page, reach out and we’ll respond with care.
          </p>

          <div style={{ height: 18 }} />

          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Email</div>
            <div style={{ color: "var(--muted)" }}>
              Add your support email here when ready.
            </div>
            <div style={{ marginTop: 12, color: "var(--muted2)", fontSize: "0.95rem" }}>
              Tip: when you create your email address, I’ll update this page + add a “mailto:” link.
            </div>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
