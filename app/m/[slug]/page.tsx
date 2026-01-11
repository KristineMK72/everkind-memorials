"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type MemorialDraft = {
  package?: "simple" | "memorial" | "legacy";
  deceasedName: string;
  preferredName?: string;
  birthDate?: string;
  deathDate?: string;
  cityState?: string;

  shortBio?: string;
  keyMoments?: string;
  familyList?: string;

  serviceInfo?: string;
  charityOrGiving?: string;

  allowGuestbook?: boolean;

  contactName?: string;
  contactEmail?: string;
};

export default function MemorialPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const [draft, setDraft] = useState<MemorialDraft | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(`everkind_memorial_${slug}`);
      if (!raw) {
        setDraft(null);
        return;
      }
      setDraft(JSON.parse(raw));
    } catch {
      setDraft(null);
    }
  }, [slug]);

  const title = useMemo(() => {
    if (!draft?.deceasedName) return "Memorial";
    return draft.preferredName?.trim()
      ? `${draft.deceasedName} (“${draft.preferredName}”)`
      : draft.deceasedName;
  }, [draft]);

  const datesLine = useMemo(() => {
    const b = draft?.birthDate?.trim();
    const d = draft?.deathDate?.trim();
    if (b && d) return `${b} — ${d}`;
    if (b) return `Born ${b}`;
    if (d) return `Died ${d}`;
    return "";
  }, [draft]);

  const packageLabel =
    draft?.package === "simple"
      ? "Simple"
      : draft?.package === "legacy"
      ? "Legacy"
      : "Memorial";

  if (!draft) {
    return (
      <main className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8">
          <h1 className="text-3xl font-semibold">Memorial not found</h1>
          <p className="mt-3 text-neutral-700">
            This preview exists on the device where it was created. Next we’ll publish memorials
            so anyone with the link can view them.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              className="rounded-xl bg-neutral-900 px-5 py-2 text-sm text-white"
              href="/create-memorial"
            >
              Create a Memorial
            </Link>
            <Link
              className="rounded-xl border border-neutral-300 px-5 py-2 text-sm"
              href="/"
            >
              Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl space-y-8">
      <header className="rounded-2xl border border-neutral-200 bg-white p-8">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm text-neutral-500">Everkind Memorials</div>
          <div className="text-xs text-neutral-500">
            Preview • {packageLabel} package
          </div>
        </div>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h1>

        {(datesLine || draft.cityState) && (
          <div className="mt-3 text-neutral-700">
            {datesLine ? <div>{datesLine}</div> : null}
            {draft.cityState ? <div>{draft.cityState}</div> : null}
          </div>
        )}
      </header>

      <section className="rounded-2xl border border-neutral-200 bg-white p-8 space-y-4">
        <h2 className="text-xl font-semibold">Remembering</h2>

        <p className="whitespace-pre-wrap text-neutral-800">
          {draft.shortBio?.trim() ? draft.shortBio : "—"}
        </p>

        {draft.keyMoments?.trim() ? (
          <>
            <h3 className="pt-2 text-lg font-semibold">Life & moments</h3>
            <p className="whitespace-pre-wrap text-neutral-800">{draft.keyMoments}</p>
          </>
        ) : null}

        {draft.familyList?.trim() ? (
          <>
            <h3 className="pt-2 text-lg font-semibold">Family</h3>
            <p className="whitespace-pre-wrap text-neutral-800">{draft.familyList}</p>
          </>
        ) : null}
      </section>

      {(draft.serviceInfo?.trim() || draft.charityOrGiving?.trim()) && (
        <section className="rounded-2xl border border-neutral-200 bg-white p-8 space-y-4">
          {draft.serviceInfo?.trim() ? (
            <>
              <h2 className="text-xl font-semibold">Service details</h2>
              <p className="whitespace-pre-wrap text-neutral-800">{draft.serviceInfo}</p>
            </>
          ) : null}

          {draft.charityOrGiving?.trim() ? (
            <>
              <h2 className="pt-2 text-xl font-semibold">Memorial giving</h2>
              <p className="whitespace-pre-wrap text-neutral-800">{draft.charityOrGiving}</p>
            </>
          ) : null}
        </section>
      )}

      <section className="rounded-2xl border border-neutral-200 bg-white p-8 space-y-3">
        <h2 className="text-xl font-semibold">Guestbook</h2>

        {draft.allowGuestbook === false ? (
          <p className="text-neutral-700">Guestbook is turned off for this memorial.</p>
        ) : (
          <p className="text-neutral-700">
            Guestbook is enabled (moderated). Next we’ll add real posting + moderation tools.
          </p>
        )}

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/create-memorial"
            className="rounded-xl border border-neutral-300 px-5 py-2 text-sm"
          >
            Create another
          </Link>

          <button
            className="rounded-xl bg-neutral-900 px-5 py-2 text-sm text-white"
            onClick={() => {
              const url = window.location.href;
              navigator.clipboard?.writeText(url);
              alert("Link copied!");
            }}
          >
            Copy link
          </button>
        </div>

        <p className="pt-3 text-xs text-neutral-500">
          Every memorial is reviewed by a real person before publication.
        </p>
      </section>
    </main>
  );
}
