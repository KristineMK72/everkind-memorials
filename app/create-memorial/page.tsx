"use client";

import { useEffect, useMemo, useState } from "react";

type Package = "free" | "simple" | "memorial" | "legacy";

type Draft = {
  package: Package;

  deceasedName: string;
  preferredName: string;
  birthDate: string;
  deathDate: string;
  cityState: string;

  photoUrl: string;

  shortBio: string;
  keyMoments: string;
  familyList: string;

  serviceInfo: string;
  charityOrGiving: string;

  allowGuestbook: boolean;

  contactName: string;
  contactEmail: string;
};

/**
 * Bump storage key so old drafts don’t collide with the new Package union.
 * (Otherwise an older draft might load "memorial" but you'd still be fine;
 * the bigger risk is later if you add/remap fields.)
 */
const STORAGE_KEY = "everkind_draft_v2";

const DEFAULT_DRAFT: Draft = {
  package: "free",

  deceasedName: "",
  preferredName: "",
  birthDate: "",
  deathDate: "",
  cityState: "",

  photoUrl: "",

  shortBio: "",
  keyMoments: "",
  familyList: "",

  serviceInfo: "",
  charityOrGiving: "",

  allowGuestbook: false,

  contactName: "",
  contactEmail: "",
};

function isValidUrlMaybe(url: string) {
  if (!url.trim()) return true; // optional
  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Map pricing-page plan keys to create-page package keys.
 * Supports both:
 * - pricing terms: free | standard | plus | premium
 * - internal terms: free | simple | memorial | legacy
 */
function normalizePlanToPackage(input: string | null | undefined): Package | null {
  if (!input) return null;
  const v = input.toLowerCase().trim();

  if (v === "free") return "free";

  // pricing naming -> internal naming
  if (v === "standard") return "simple";
  if (v === "plus") return "memorial";
  if (v === "premium") return "legacy";

  // internal naming direct
  if (v === "simple" || v === "memorial" || v === "legacy") return v;

  return null;
}

function defaultGuestbookForPackage(pkg: Package): boolean {
  // Keep guestbook as a paid “community” feature
  if (pkg === "memorial" || pkg === "legacy") return true;
  return false;
}

export default function CreateMemorialPage() {
  const [draft, setDraft] = useState<Draft>(DEFAULT_DRAFT);
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Load saved draft
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<Draft>;

      // Guard against bad/old package values
      const pkg =
        parsed.package === "free" ||
        parsed.package === "simple" ||
        parsed.package === "memorial" ||
        parsed.package === "legacy"
          ? parsed.package
          : DEFAULT_DRAFT.package;

      const merged: Draft = {
        ...DEFAULT_DRAFT,
        ...parsed,
        package: pkg,
      };

      setDraft(merged);
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Apply ?plan= from URL (Pricing page) on first render
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const planParam = url.searchParams.get("plan");
      const pkg = normalizePlanToPackage(planParam);

      if (!pkg) return;

      setDraft((d) => {
        // If user already started filling out, don't clobber other fields.
        // Only change package + adjust guestbook default *if* user is still on the old default.
        const nextGuestbook = defaultGuestbookForPackage(pkg);

        const shouldAutoAdjustGuestbook =
          // If guestbook matches the default for their current package, keep auto-sync behavior
          d.allowGuestbook === defaultGuestbookForPackage(d.package);

        return {
          ...d,
          package: pkg,
          allowGuestbook: shouldAutoAdjustGuestbook ? nextGuestbook : d.allowGuestbook,
        };
      });
    } catch {
      // ignore
    }
  }, []);

  // Save draft (autosave)
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

    if (!isValidUrlMaybe(draft.photoUrl)) {
      e.photoUrl = "Please enter a valid URL starting with http:// or https://";
    }

    if (!draft.contactName.trim()) e.contactName = "Please enter your name.";
    if (!draft.contactEmail.trim()) e.contactEmail = "Please enter your email.";
    if (draft.contactEmail && !/^\S+@\S+\.\S+$/.test(draft.contactEmail))
      e.contactEmail = "Please enter a valid email address.";

    return e;
  }, [draft]);

  function update<K extends keyof Draft>(key: K, value: Draft[K]) {
    setDraft((d) => ({ ...d, [key]: value }));
  }

  function setPackage(pkg: Package) {
    setDraft((d) => {
      const nextGuestbookDefault = defaultGuestbookForPackage(pkg);

      const shouldAutoAdjustGuestbook =
        // If guestbook currently equals the default for the *current* package, keep it auto-synced
        d.allowGuestbook === defaultGuestbookForPackage(d.package);

      return {
        ...d,
        package: pkg,
        allowGuestbook: shouldAutoAdjustGuestbook ? nextGuestbookDefault : d.allowGuestbook,
      };
    });
  }

  function clearDraft() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setDraft(DEFAULT_DRAFT);
    setSavedAt(null);
  }

  function handleSubmit() {
    if (Object.keys(errors).length > 0) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8">
          <h1 className="text-3xl font-semibold">Thank you.</h1>
          <p className="mt-3 text-neutral-700">
            Your details are saved. Next we’ll connect this to publishing and (optionally) payment.
            For now, you can go back and edit anytime.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setSubmitted(false)}
              className="rounded-xl bg-neutral-900 px-5 py-2 text-sm text-white"
            >
              Edit details
            </button>
            <button
              onClick={clearDraft}
              className="rounded-xl border border-neutral-300 px-5 py-2 text-sm"
            >
              Clear draft
            </button>
          </div>

          <p className="mt-4 text-xs text-neutral-500">
            Every memorial is reviewed by a real person before publication.
          </p>
        </div>
      </section>
    );
  }

  const packageHelp =
    draft.package === "free"
      ? "Private draft + share link. No public listing."
      : draft.package === "simple"
      ? "Publish publicly after review. Basic photo included."
      : draft.package === "memorial"
      ? "Guestbook + standard gallery. Most popular."
      : "Expanded gallery + priority review + extras.";

  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <div className="rounded-2xl border border-neutral-200 bg-white p-8">
        <h1 className="text-3xl font-semibold">Create a Memorial</h1>
        <p className="mt-2 text-neutral-700">
          Share what you can. Your draft saves automatically on this device.
        </p>

        <p className="mt-3 text-xs text-neutral-500">
          Submissions are reviewed for care, clarity, and dignity. Most memorials are approved within 24–48 hours.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-8 space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-1">
            <div className="text-sm font-medium">Package</div>
            <select
              value={draft.package}
              onChange={(e) => setPackage(e.target.value as Package)}
              className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
            >
              <option value="free">Free ($0)</option>
              <option value="simple">Simple ($39)</option>
              <option value="memorial">Memorial ($79)</option>
              <option value="legacy">Legacy ($129)</option>
            </select>
            <p className="text-xs text-neutral-500">{packageHelp}</p>
          </label>

          <label className="space-y-1">
            <div className="text-sm font-medium">Guestbook</div>
            <select
              value={draft.allowGuestbook ? "yes" : "no"}
              onChange={(e) => update("allowGuestbook", e.target.value === "yes")}
              className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
            >
              <option value="yes">Yes (moderated)</option>
              <option value="no">No</option>
            </select>
            <p className="text-xs text-neutral-500">
              Tip: Guestbook is best for Memorial/Legacy. Free/Simple works great for a quiet share-by-link page.
            </p>
          </label>
        </div>

        <label className="block space-y-1">
          <div className="text-sm font-medium">Full name</div>
          <input
            value={draft.deceasedName}
            onChange={(e) => update("deceasedName", e.target.value)}
            className={`w-full rounded-xl border px-3 py-2 text-sm ${
              errors.deceasedName ? "border-red-400" : "border-neutral-300"
            }`}
            placeholder="e.g., Wayne Richard Kahler"
          />
          {errors.deceasedName && <p className="text-sm text-red-600">{errors.deceasedName}</p>}
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block space-y-1">
            <div className="text-sm font-medium">Preferred name (optional)</div>
            <input
              value={draft.preferredName}
              onChange={(e) => update("preferredName", e.target.value)}
              className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm"
              placeholder="e.g., Wayne"
            />
          </label>

          <label className="block space-y-1">
            <div className="text-sm font-medium">City &amp; State</div>
            <input
              value={draft.cityState}
              onChange={(e) => update("cityState", e.target.value)}
              className={`w-full rounded-xl border px-3 py-2 text-sm ${
                errors.cityState ? "border-red-400" : "border-neutral-300"
              }`}
              placeholder="e.g., Austin, TX"
            />
            {errors.cityState && <p className="text-sm text-red-600">{errors.cityState}</p>}
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block space-y-1">
            <div className="text-sm font-medium">Birth date (optional)</div>
            <input
              value={draft.birthDate}
              onChange={(e) => update("birthDate", e.target.value)}
              className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm"
              placeholder="YYYY-MM-DD"
            />
          </label>

          <label className="block space-y-1">
            <div className="text-sm font-medium">Death date (optional)</div>
            <input
              value={draft.deathDate}
              onChange={(e) => update("deathDate", e.target.value)}
              className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm"
              placeholder="YYYY-MM-DD"
            />
          </label>
        </div>

        {/* Photo URL */}
        <label className="block space-y-1">
          <div className="text-sm font-medium">Photo URL (optional)</div>
          <input
            value={draft.photoUrl}
            onChange={(e) => update("photoUrl", e.target.value)}
            className={`w-full rounded-xl border px-3 py-2 text-sm ${
              errors.photoUrl ? "border-red-400" : "border-neutral-300"
            }`}
            placeholder="https://example.com/photo.jpg"
            inputMode="url"
          />
          {errors.photoUrl ? (
            <p className="text-sm text-red-600">{errors.photoUrl}</p>
          ) : (
            <p className="text-xs text-neutral-500">
              For now, paste a direct image link (jpg/png/webp). Next we’ll add direct uploads.
            </p>
          )}
        </label>

        <label className="block space-y-1">
          <div className="text-sm font-medium">Short summary</div>
          <textarea
            value={draft.shortBio}
            onChange={(e) => update("shortBio", e.target.value)}
            className={`w-full rounded-xl border px-3 py-2 text-sm min-h-[120px] ${
              errors.shortBio ? "border-red-400" : "border-neutral-300"
            }`}
            placeholder="A few sentences about who they were — what mattered most to them."
          />
          {errors.shortBio && <p className="text-sm text-red-600">{errors.shortBio}</p>}
        </label>

        <label className="block space-y-1">
          <div className="text-sm font-medium">Life &amp; moments (optional)</div>
          <textarea
            value={draft.keyMoments}
            onChange={(e) => update("keyMoments", e.target.value)}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm min-h-[110px]"
            placeholder="Work, passions, service, faith, community, funny stories — anything you want included."
          />
        </label>

        <label className="block space-y-1">
          <div className="text-sm font-medium">Family (optional)</div>
          <textarea
            value={draft.familyList}
            onChange={(e) => update("familyList", e.target.value)}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm min-h-[90px]"
            placeholder="Survived by…, preceded in death by…, etc."
          />
        </label>

        <label className="block space-y-1">
          <div className="text-sm font-medium">Service details (optional)</div>
          <textarea
            value={draft.serviceInfo}
            onChange={(e) => update("serviceInfo", e.target.value)}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm min-h-[110px]"
            placeholder="Date/time, location, visitation, livestream link, etc."
          />
        </label>

        <label className="block space-y-1">
          <div className="text-sm font-medium">Memorial giving (optional)</div>
          <textarea
            value={draft.charityOrGiving}
            onChange={(e) => update("charityOrGiving", e.target.value)}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm min-h-[90px]"
            placeholder="Tree planting, charity donations, meal train, or a cause that mattered to them."
          />
          <p className="text-xs text-neutral-500">
            Next: we’ll add selectable options for tree planting + donation partners.
          </p>
        </label>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-8 space-y-4">
        <h2 className="text-xl font-semibold">Your contact</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block space-y-1">
            <div className="text-sm font-medium">Your name</div>
            <input
              value={draft.contactName}
              onChange={(e) => update("contactName", e.target.value)}
              className={`w-full rounded-xl border px-3 py-2 text-sm ${
                errors.contactName ? "border-red-400" : "border-neutral-300"
              }`}
              placeholder="Your name"
            />
            {errors.contactName && <p className="text-sm text-red-600">{errors.contactName}</p>}
          </label>

          <label className="block space-y-1">
            <div className="text-sm font-medium">Email</div>
            <input
              value={draft.contactEmail}
              onChange={(e) => update("contactEmail", e.target.value)}
              className={`w-full rounded-xl border px-3 py-2 text-sm ${
                errors.contactEmail ? "border-red-400" : "border-neutral-300"
              }`}
              placeholder="you@example.com"
            />
            {errors.contactEmail && <p className="text-sm text-red-600">{errors.contactEmail}</p>}
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={handleSubmit}
            className="rounded-xl bg-neutral-900 px-5 py-2 text-sm text-white"
          >
            Continue
          </button>

          <button
            onClick={clearDraft}
            className="rounded-xl border border-neutral-300 px-5 py-2 text-sm"
            type="button"
          >
            Clear draft
          </button>

          <div className="text-xs text-neutral-500">
            {savedAt ? <span>Saved {new Date(savedAt).toLocaleTimeString()}</span> : null}
          </div>
        </div>

        {Object.keys(errors).length > 0 ? (
          <p className="text-sm text-neutral-600">
            Tip: Fill in the required fields (name, city/state, short summary, and your contact) to continue.
          </p>
        ) : null}
      </div>
    </section>
  );
}
