export default function ContentPolicyPage() {
  return (
    <main>
      <div className="container">
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">Memorial Content Policy</div>
          <h1 className="h1" style={{ marginTop: 10 }}>A space for dignity.</h1>
          <p className="p" style={{ maxWidth: 900 }}>
            Everkind memorial pages must be respectful and non-harmful. Guestbook entries are moderated to maintain dignity.
          </p>

          <div style={{ height: 18 }} />

          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Memorial pages must:</div>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
              <li>Be respectful and non-harmful</li>
              <li>Avoid hate speech, harassment, or misinformation</li>
              <li>Be submitted by someone with the right to do so</li>
            </ul>
          </div>

          <div style={{ height: 14 }} />

          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Moderation</div>
            <div style={{ color: "var(--muted)" }}>
              We reserve the right to edit, refuse, or remove content that is harmful, false, defamatory, or inappropriate.
            </div>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
