import Link from "next/link";

const DONATION_LINKS = {
  oneTreePlanted: "https://onetreeplanted.org/products/plant-trees",
  arborDay: "https://www.arborday.org/donate",
  nami: "https://www.nami.org/get-involved/donate-to-nami/",
  wwf: "https://gifts.worldwildlife.org/gift-center/one-time-donation",
};

type GivingChoice = "trees" | "mental-health" | "wildlife";

type Memorial = {
  slug: string;
  name: string;
  preferredName?: string;
  birth?: string;
  death?: string;
  cityState?: string;

  obituary: string;
  lifeMoments?: string[];
  family?: string[];

  service?: {
    title?: string;
    details?: string;
  };

  guestbookEnabled?: boolean;

  memorialGivingEnabled?: boolean;
  givingChoice?: GivingChoice;
  givingNote?: string;
};

function getDemoMemorial(slug: string): Memorial {
  // Wayne memorial (demo + example)
  if (slug === "wayne-kahler" || slug === "example" || slug === "demo" || slug === "uncle") {
    return {
      slug,
      name: "Wayne Richard Kahler",
      preferredName: "Wayne",
      birth: "1943-09-15",
      death: "2025-06-15",
      cityState: "Austin, TX",

      obituary:
        "Wayne Richard Kahler, a devoted son, brother, uncle, and friend, passed away peacefully on June 15, 2025, in Austin, Texas, at the age of 81. Born on September 15, 1943, in Martin County, Minnesota, Wayne was the son of Richard and Laura (Hartmann) Kahler.\n\n" +
        "Wayne grew up in Truman, Minnesota, alongside his sister Sandra and brother Warren, where he developed lifelong values of service, independence, and quiet strength. After graduating from high school, Wayne enlisted in the United States Air Force during the Vietnam War, and was stationed in Japan, proudly serving his country during a time of global transformation. His experiences overseas left an enduring impression—broadening his perspective and shaping his steadfast nature.\n\n" +
        "Throughout his life, Wayne called many places home—Minnesota, Florida, and eventually Texas—carving out a unique path and building friendships wherever he went.\n\n" +
        "In his free time, Wayne found joy in spending time with friends and family, cheering on many sports teams including but not limited to the Minnesota Vikings, Twins, Gophers, and Wild. Whether through a quiet act of kindness or a sharp one-liner, Wayne left a lasting impression. He was a loyal friend, a steady presence, and someone who always made time to listen.\n\n" +
        "Wayne was preceded in death by his parents, Richard and Laura, and his sister, Sandra (Dean) Williams. He is lovingly remembered by his brother Warren Kahler, brother-in-law Dean Williams, nieces Denise (Steven) Fitch, Kristine Kahler, and Emily (Christopher) McCann, nephews Dean (Brenda) Williams, Daniel (Stacey) Williams, Dwight (Melissa) Williams, Thomas (Michelle) Kahler, Michael Kahler, and Stephen Kahler, as well as many great-nieces and great-nephews. He also leaves behind many dear friends in Austin, including his cherished friend, William Garcia.",

      lifeMoments: [
        "Proud veteran of the United States Air Force, stationed in Japan during the Vietnam War",
        "Lived in Minnesota, Florida, and Texas — building friendships wherever he went",
        "A loyal friend with quiet strength and a sharp one-liner",
        "Loved cheering on Minnesota teams: Vikings, Twins, Gophers, and Wild",
      ],

      family: [
        "Preceded in death by his parents, Richard and Laura (Hartmann) Kahler, and his sister, Sandra (Dean) Williams",
        "Lovingly remembered by his brother Warren Kahler and brother-in-law Dean Williams",
        "Nieces: Denise (Steven) Fitch, Kristine Kahler, Emily (Christopher) McCann",
        "Nephews: Dean (Brenda) Williams, Daniel (Stacey) Williams, Dwight (Melissa) Williams, Thomas (Michelle) Kahler, Michael Kahler, Stephen Kahler",
        "Also remembered by many great-nieces and great-nephews",
        "And many dear friends in Austin, including his cherished friend, William Garcia",
      ],

      service: {
        title: "Celebration of Life",
        details: "A celebration of Wayne’s life was held in Austin, Texas, on September 13, 2025.",
      },

      guestbookEnabled: true,

      memorialGivingEnabled: true,
      givingChoice: "trees",
      givingNote:
        "In lieu of flowers, the family invites those who wish to honor Wayne’s memory through a small act of giving.",
    };
  }

  // Default fallback (until you wire real data)
  return {
    slug,
    name: "Everkind Example Memorial",
    preferredName: "Everkind",
    cityState: "—",
    obituary:
      "This is a sample memorial page layout. When you connect memorial creation to publishing, this page will display the memorial’s story, service details, photos, guestbook, and optional memorial giving — all with dignity and care.",
    lifeMoments: ["Private by default", "Reviewed by a real person", "Optional guestbook and giving"],
    guestbookEnabled: true,
    memorialGivingEnabled: true,
    givingChoice: "mental-health",
    givingNote:
      "In lieu of flowers, the family invites those who wish to honor this life through a gentle act of giving.",
  };
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a className="btn" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default async function MemorialPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const memorial = getDemoMemorial(slug);

  const displayName = memorial.preferredName?.trim()
    ? `${memorial.name} (${memorial.preferredName})`
    : memorial.name;

  return (
    <main>
      <div className="container">
        {/* Header */}
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">Memorial</div>

          <h1 className="h1" style={{ marginTop: 10 }}>
            {displayName}
          </h1>

          <p className="p" style={{ maxWidth: 900 }}>
            {memorial.birth ? memorial.birth : ""}
            {memorial.birth || memorial.death ? " — " : ""}
            {memorial.death ? memorial.death : ""}
            {memorial.cityState ? ` • ${memorial.cityState}` : ""}
          </p>

          <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn btnPrimary" href="/create-memorial">
              Create a memorial
            </Link>
            <Link className="btn" href="/donations">
              Memorial giving
            </Link>
          </div>

          <div style={{ marginTop: 14, color: "var(--muted2)", fontSize: "0.95rem" }}>
            Drafts are private by default. Public publishing is optional and reviewed.
          </div>
        </section>

        <div style={{ height: 18 }} />

        {/* Main content */}
        <section className="grid grid2" style={{ alignItems: "start" }}>
          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <div style={{ fontWeight: 900, marginBottom: 10 }}>Obituary</div>

            {/* IMPORTANT: makes \n\n display as paragraphs */}
            <div style={{ color: "var(--muted)", lineHeight: 1.7, whiteSpace: "pre-line" }}>
              {memorial.obituary}
            </div>

            {memorial.lifeMoments?.length ? (
              <>
                <div style={{ height: 14 }} />
                <div style={{ fontWeight: 900, marginBottom: 10 }}>Life &amp; moments</div>
                <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
                  {memorial.lifeMoments.map((m) => (
                    <li key={m} style={{ marginBottom: 8 }}>
                      {m}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {memorial.family?.length ? (
              <>
                <div style={{ height: 14 }} />
                <div style={{ fontWeight: 900, marginBottom: 10 }}>Family</div>
                <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
                  {memorial.family.map((f) => (
                    <li key={f} style={{ marginBottom: 8 }}>
                      {f}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>

          <div className="grid" style={{ gap: 14 }}>
            {/* Service */}
            <div className="card" style={{ padding: 18, borderRadius: 22 }}>
              <div style={{ fontWeight: 900, marginBottom: 8 }}>
                {memorial.service?.title || "Service details"}
              </div>
              <div style={{ color: "var(--muted)", lineHeight: 1.7, whiteSpace: "pre-line" }}>
                {memorial.service?.details || "Service details can be added here."}
              </div>
            </div>

            {/* Memorial Giving */}
            {memorial.memorialGivingEnabled ? (
              <div className="card" style={{ padding: 18, borderRadius: 22 }}>
                <div style={{ fontWeight: 900, marginBottom: 8 }}>Memorial giving</div>

                <div style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                  <div style={{ marginBottom: 10 }}>
                    <strong style={{ color: "var(--text)" }}>In lieu of flowers</strong>,{" "}
                    {memorial.givingNote ||
                      `the family invites those who wish to honor ${
                        memorial.preferredName || memorial.name
                      }'s memory through a gentle act of giving.`}
                  </div>

                  <div style={{ color: "var(--muted2)", fontSize: "0.95rem" }}>
                    Donations are made directly to the organization in a new tab. Everkind does not process or receive
                    funds.
                  </div>
                </div>

                <div style={{ height: 12 }} />

                {memorial.givingChoice === "trees" ? (
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <ExternalLink href={DONATION_LINKS.oneTreePlanted}>🌱 One Tree Planted</ExternalLink>
                    <ExternalLink href={DONATION_LINKS.arborDay}>🌱 Arbor Day Foundation</ExternalLink>
                  </div>
                ) : memorial.givingChoice === "mental-health" ? (
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <ExternalLink href={DONATION_LINKS.nami}>❤️ Donate to NAMI</ExternalLink>
                  </div>
                ) : (
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <ExternalLink href={DONATION_LINKS.wwf}>🐾 Donate to WWF</ExternalLink>
                  </div>
                )}

                <div
                  style={{
                    marginTop: 14,
                    paddingTop: 14,
                    borderTop: "1px solid rgba(255,255,255,0.10)",
                    color: "var(--muted2)",
                    fontSize: "0.92rem",
                  }}
                >
                  Want to learn more about memorial giving? Visit the{" "}
                  <Link href="/donations" className="hover:underline">
                    Donations page
                  </Link>
                  .
                </div>
              </div>
            ) : null}

            {/* Guestbook preview */}
            {memorial.guestbookEnabled ? (
              <div className="card" style={{ padding: 18, borderRadius: 22 }}>
                <div style={{ fontWeight: 900, marginBottom: 8 }}>Guestbook</div>
                <div style={{ color: "var(--muted)" }}>
                  Messages are moderated to keep this space respectful.
                </div>

                <div style={{ marginTop: 12 }} className="grid">
                  <div className="card" style={{ padding: 14, borderRadius: 18 }}>
                    <div style={{ fontWeight: 800 }}>“Thinking of your family with love.”</div>
                    <div style={{ color: "var(--muted2)", marginTop: 6 }}>— A friend</div>
                  </div>

                  <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <button className="btn btnPrimary" type="button">
                      Leave a message (coming soon)
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}
