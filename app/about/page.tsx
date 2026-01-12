export default function AboutPage() {
  return (
    <main>
      <div className="container">
        <section className="glass longform" style={{ padding: 26 }}>
          <div className="kicker">About</div>

          <h1 className="h1" style={{ marginTop: 10 }}>
            Our mission
          </h1>

          <p className="p" style={{ maxWidth: 860 }}>
            Everkind Memorials was created to offer a calmer, kinder alternative to traditional
            obituary and memorial services — one that respects grief, time, and human dignity.
          </p>

          <div style={{ height: 14 }} />

          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <div style={{ color: "var(--muted)", fontWeight: 800, marginBottom: 8 }}>
              In moments of loss, families should not face:
            </div>

            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
              <li>confusing or inflated pricing</li>
              <li>rushed or pressured decisions</li>
              <li>advertising interruptions</li>
              <li>impersonal or automated systems</li>
            </ul>

            <div style={{ marginTop: 12, color: "var(--muted)" }}>
              We believe remembrance should be simple, dignified, and human.
            </div>

            <div style={{ marginTop: 10, color: "var(--muted2)" }}>
              Every memorial published on Everkind is reviewed with care by a real person.
            </div>
          </div>

          <div style={{ height: 18 }} />

          {/* Social sustainability */}
          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <div style={{ fontWeight: 900, marginBottom: 6 }}>
              Our commitment to social sustainability
            </div>

            <div style={{ color: "var(--muted)", lineHeight: 1.65 }}>
              Social sustainability means building systems that support people — especially during
              vulnerable moments — without exploitation, exclusion, or unnecessary complexity.
            </div>

            <div style={{ marginTop: 10, color: "var(--muted)", lineHeight: 1.65 }}>
              At Everkind, this commitment shows up in practical ways:
            </div>

            <ul style={{ marginTop: 10, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.65 }}>
              <li>Clear, upfront pricing with no subscriptions or hidden fees</li>
              <li>Optional memorial giving that never pressures families or guests</li>
              <li>Design choices that prioritize accessibility, readability, and calm</li>
              <li>Moderation practices that protect dignity and reduce harm</li>
              <li>Respect for privacy — no ads, no data selling, no tracking grief</li>
            </ul>

            <div style={{ marginTop: 12, color: "var(--muted2)" }}>
              We aim to create a space that is sustainable not just technically, but emotionally and
              socially — for families today and for remembrance over time.
            </div>
          </div>

          <div style={{ height: 18 }} />

          {/* Who we are */}
          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <div style={{ fontWeight: 900, marginBottom: 6 }}>
              Who we are
            </div>

            <div style={{ color: "var(--muted)", lineHeight: 1.65 }}>
              Everkind Memorials is an independent service and a project of Grit &amp; Grace.
              We are not a funeral home and are not affiliated with newspapers or advertising networks.
            </div>

            <div style={{ marginTop: 10, color: "var(--muted2)" }}>
              Our work is guided by care, clarity, and respect — not volume or automation.
            </div>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
