"use client";

import { useEffect, useMemo, useState } from "react";

type Package = "simple" | "memorial" | "legacy";

type Draft = {
  package: Package;
  deceasedName: string;
  preferredName: string;
  birthDate: string;
  deathDate: string;
  cityState: string;

  shortBio: string;
  keyMoments: string;
  familyList: string;

  serviceInfo: string;
  charityOrGiving: string;

  allowGuestbook: boolean;

  contactName: string;
  contactEmail: string;
};

const STORAGE_KEY = "everkind_draft_v1";

const DEFAULT_DRAFT: Draft = {
  package: "memorial",
  deceasedName: "",
  preferredName: "",
  birthDate: "",
  deathDate: "",
  cityState: "",
  shortBio: "",
  keyMoments: "",
  familyList: "",
  serviceInfo: "",
  charityOrGiving: "",
  allowGuestbook: true,
  contactName: "",
  contactEmail: "",
};

const PACKAGE_LABEL: Record<Package, string> = {
  simple: "Simple",
  memorial: "Memorial",
  legacy: "Legacy",
};

const PACKAGE_PRICE: Record<Package, string> = {
  simple: "$39",
  memorial: "$79",
  legacy: "$129",
};

export default function CreateMemorialPage() {
  const [draft, setDraft] = useState<Draft>(DEFAULT_DRAFT);
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<Draft>;
      setDraft({ ...DEFAULT_DRAFT, ...parsed });
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
      setSavedAt(Date.now());
    } catch {
      // ignore
    }
  }, [draft]);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (!draft.deceasedName.trim()) e.deceasedName = "Please enter their full name.";
    if (!draft.cityState.trim()) e.cityState = "Please enter city + state.";
    if (!draft.shortBio.trim()) e.shortBio = "Please share a short summary (a few sentences).";
    if (!draft.contactName.trim()) e.contactName = "Please enter your name.";
    if (!draft.contactEmail.trim()) e.contactEmail = "Please enter your email.";
    if (draft.contactEmail && !/^\S+@\S+\.\S+$/.test(draft.contactEmail))
      e.contactEmail = "Please enter a valid email address.";
    return e;
  }, [draft]);

  function update<K extends keyof Draft>(key: K, value: Draft[K]) {
    setDraft((d) => ({ ...d, [key]: value }));
  }

  function clearDraft() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setDraft(DEFAULT_DRAFT);
    setSavedAt(null);
    setSubmitted(false);
  }

  function handleSubmit() {
    if (Object.keys(errors).length > 0) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main>
        <div className="container">
          <section className="glass" style={{ padding: 26 }}>
            <div className="kicker">Saved</div>
            <h1 className="h1" style={{ marginTop: 10 }}>
              Thank you.
            </h1>
            <p className="p" style={{ maxWidth: 760 }}>
              Your details are saved on this device. Next we’ll connect this to publishing and (optionally) payment.
              For now, you can go back and edit anytime.
            </p>

            <div style={{ height: 16 }} />

            <div className="card" style={{ padding: 18, borderRadius: 22 }}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <button className="btn btnPrimary" type="button" onClick={() => setSubmitted(false)}>
                  Edit details
                </button>
                <button className="btn" type="button" onClick={clearDraft}>
                  Clear draft
                </button>
                <span style={{ color: "var(--muted2)", marginLeft: "auto" }}>
                  Plan: {PACKAGE_LABEL[draft.package]} • {PACKAGE_PRICE[draft.package]}
                </span>
              </div>

              <div
                style={{
                  marginTop: 14,
                  paddingTop: 14,
                  borderTop: "1px solid rgba(255,255,255,0.10)",
                  color: "var(--muted2)",
                  fontSize: "0.95rem",
                }}
              >
                Every memorial is reviewed by a real person before publication.
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <main>
      <div className="container">
        {/* Intro */}
        <section className="glass" style={{ padding: 26 }}>
          <div className="kicker">Create a memorial</div>
          <h1 className="h1" style={{ marginTop: 10 }}>
            Start privately. Share when you’re ready.
          </h1>
          <p className="p" style={{ maxWidth: 820 }}>
            Share what you can. Your draft saves automatically on this device. Public publishing is optional and reviewed.
          </p>

          <div style={{ marginTop: 14 }} className="card">
            <div style={{ padding: 16 }}>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                <span style={{ color: "var(--muted)" }}>
                  Submissions are reviewed for care, clarity, and dignity.
                </span>
                <span style={{ color: "var(--muted2)" }}>Most approvals: 24–48 hours</span>
                <span style={{ color: "var(--muted2)", marginLeft: "auto" }}>
                  {savedAt ? `Saved ${new Date(savedAt).toLocaleTimeString()}` : ""}
                </span>
              </div>
            </div>
          </div>
        </section>

        <div style={{ height: 18 }} />

        <section className="grid grid2" style={{ alignItems: "start" }}>
          {/* Left: Form */}
          <div className="card" style={{ padding: 18, borderRadius: 22 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
              <div style={{ fontWeight: 900, fontSize: "1.05rem" }}>Memorial details</div>
              <div style={{ color: "var(--muted2)", fontWeight: 700 }}>
                {PACKAGE_LABEL[draft.package]} • {PACKAGE_PRICE[draft.package]}
              </div>
            </div>

            <div style={{ height: 14 }} />

            <div className="grid" style={{ gap: 12 }}>
              <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
                <SelectField
                  label="Package"
                  value={draft.package}
                  onChange={(v) => update("package", v as Package)}
                  options={[
                    { value: "simple", label: "Simple ($39)" },
                    { value: "memorial", label: "Memorial ($79)" },
                    { value: "legacy", label: "Legacy ($129)" },
                  ]}
                />
                <SelectField
                  label="Guestbook"
                  value={draft.allowGuestbook ? "yes" : "no"}
                  onChange={(v) => update("allowGuestbook", v === "yes")}
                  options={[
                    { value: "yes", label: "Yes (moderated)" },
                    { value: "no", label: "No" },
                  ]}
                />
              </div>

              <TextField
                label="Full name"
                value={draft.deceasedName}
                onChange={(v) => update("deceasedName", v)}
                placeholder="e.g., Marlene Rose Kahler"
                error={errors.deceasedName}
                required
              />

              <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
                <TextField
                  label="Preferred name (optional)"
                  value={draft.preferredName}
                  onChange={(v) => update("preferredName", v)}
                  placeholder="e.g., Marlene"
                />
                <TextField
                  label="City & State"
                  value={draft.cityState}
                  onChange={(v) => update("cityState", v)}
                  placeholder="e.g., Minneapolis, MN"
                  error={errors.cityState}
                  required
                />
              </div>

              <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
                <TextField
                  label="Birth date (optional)"
                  value={draft.birthDate}
                  onChange={(v) => update("birthDate", v)}
                  placeholder="YYYY-MM-DD"
                />
                <TextField
                  label="Death date (optional)"
                  value={draft.deathDate}
                  onChange={(v) => update("deathDate", v)}
                  placeholder="YYYY-MM-DD"
                />
              </div>

              <TextAreaField
                label="Short summary"
                value={draft.shortBio}
                onChange={(v) => update("shortBio", v)}
                placeholder="A few sentences about who they were — what mattered most to them."
                error={errors.shortBio}
                required
                rows={5}
              />

              <TextAreaField
                label="Life & moments (optional)"
                value={draft.keyMoments}
                onChange={(v) => update("keyMoments", v)}
                placeholder="Work, passions, service, faith, community, funny stories — anything you want included."
                rows={4}
              />

              <TextAreaField
                label="Family (optional)"
                value={draft.familyList}
                onChange={(v) => update("familyList", v)}
                placeholder="Survived by…, preceded in death by…, etc."
                rows={3}
              />

              <TextAreaField
                label="Service details (optional)"
                value={draft.serviceInfo}
                onChange={(v) => update("serviceInfo", v)}
                placeholder="Date/time, location, visitation, livestream link, etc."
                rows={4}
              />

              <TextAreaField
                label="Memorial giving (optional)"
                value={draft.charityOrGiving}
                onChange={(v) => update("charityOrGiving", v)}
                placeholder="Tree planting, charity donations, meal train, or a cause that mattered to them."
                rows={3}
                helper="Next: we’ll add selectable options for tree planting + donation partners."
              />
            </div>
          </div>

          {/* Right: Contact + actions */}
          <div className="grid" style={{ gap: 14 }}>
            <div className="card" style={{ padding: 18, borderRadius: 22 }}>
              <div style={{ fontWeight: 900, marginBottom: 8 }}>Your contact</div>

              <div className="grid" style={{ gap: 12 }}>
                <TextField
                  label="Your name"
                  value={draft.contactName}
                  onChange={(v) => update("contactName", v)}
                  placeholder="Your name"
                  error={errors.contactName}
                  required
                />
                <TextField
                  label="Email"
                  value={draft.contactEmail}
                  onChange={(v) => update("contactEmail", v)}
                  placeholder="you@example.com"
                  error={errors.contactEmail}
                  required
                />
              </div>

              <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button className="btn btnPrimary" type="button" onClick={handleSubmit}>
                  Continue
                </button>
                <button className="btn" type="button" onClick={clearDraft}>
                  Clear draft
                </button>
              </div>

              {hasErrors ? (
                <div style={{ marginTop: 12, color: "var(--muted)", fontSize: "0.95rem" }}>
                  Tip: Fill in the required fields (name, city/state, short summary, and your contact) to continue.
                </div>
              ) : (
                <div style={{ marginTop: 12, color: "var(--muted2)", fontSize: "0.95rem" }}>
                  Looks good — you can continue.
                </div>
              )}
            </div>

            <div className="card" style={{ padding: 18, borderRadius: 22 }}>
              <div style={{ fontWeight: 900, marginBottom: 6 }}>Privacy by default</div>
              <div style={{ color: "var(--muted)" }}>
                Draft memorials are private (link-only). Public publishing is optional and reviewed.
              </div>
            </div>

            <div className="card" style={{ padding: 18, borderRadius: 22 }}>
              <div style={{ fontWeight: 900, marginBottom: 6 }}>What happens next?</div>
              <div style={{ color: "var(--muted)" }}>
                We’ll wire this form to saving, then add photos and a moderated guestbook — and finally publish + payment.
              </div>
            </div>
          </div>
        </section>

        <div style={{ height: 26 }} />
      </div>
    </main>
  );
}

function baseInputStyle(hasError?: boolean): React.CSSProperties {
  return {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 14,
    border: `1px solid ${hasError ? "rgba(255, 80, 80, 0.75)" : "rgba(255,255,255,0.12)"}`,
    background: "rgba(255,255,255,0.06)",
    color: "var(--text)",
    outline: "none",
  };
}

function Label({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <span style={{ color: "var(--muted)", fontWeight: 700, fontSize: "0.95rem" }}>{children}</span>
      {required ? (
        <span style={{ color: "var(--muted2)", fontSize: "0.85rem" }}>Required</span>
      ) : null}
    </div>
  );
}

function ErrorText({ text }: { text?: string }) {
  if (!text) return null;
  return <div style={{ color: "rgba(255, 140, 140, 0.95)", fontSize: "0.95rem" }}>{text}</div>;
}

function HelpText({ text }: { text?: string }) {
  if (!text) return null;
  return <div style={{ color: "var(--muted2)", fontSize: "0.92rem" }}>{text}</div>;
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  error,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <Label required={required}>{label}</Label>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} style={baseInputStyle(!!error)} />
      <ErrorText text={error} />
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  error,
  required,
  rows = 4,
  helper,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  rows?: number;
  helper?: string;
}) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <Label required={required}>{label}</Label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        style={{ ...baseInputStyle(!!error), resize: "vertical" }}
      />
      <ErrorText text={error} />
      <HelpText text={helper} />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <Label>{label}</Label>
      <select value={value} onChange={(e) => onChange(e.target.value)} style={baseInputStyle(false)}>
        {options.map((o) => (
          <option key={o.value} value={o.value} style={{ color: "black" }}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
