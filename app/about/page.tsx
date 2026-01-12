export default function AboutPage() {
  return (
    <main>
      <div className="container">
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">About</div>
          <h1 className="h1" style={{ marginTop: 10 }}>Our mission</h1>
          <p className="p" style={{ maxWidth: 860 }}>
            Everkind Memorials was created to offer a calmer, kinder alternative to traditional obituary services.
          </p>

          <div style={{ height: 14 }} />

          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <div style={{ color: "var(--muted)", fontWeight: 800, marginBottom: 8 }}>
              In moments of loss, families should not face:
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
              <li>confusing pricing</li>
              <li>rushed decisions</li>
              <li>advertising interruptions</li>
              <li>or impersonal systems</li>
            </ul>
            <div style={{ marginTop: 12, color: "var(--muted)" }}>
              We believe remembrance should be simple, dignified, and human.
            </div>
            <div style={{ marginTop: 10, color: "var(--muted2)" }}>
              Every memorial published on Everkind is reviewed with care.
            </div>
          </div>

          <div style={{ height: 18 }} />

          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <div style={{ fontWeight: 900, marginBottom: 6 }}>Who we are</div>
            <div style={{ color: "var(--muted)" }}>
              Everkind Memorials is an independent service and a project of Grit &amp; Grace. We are not a funeral home and
              are not affiliated with newspapers.
            </div>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
