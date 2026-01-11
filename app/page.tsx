export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="bg-white border border-neutral-200 rounded-2xl p-8">
        <h1 className="text-3xl font-semibold mb-4">
          Honor a life with care, not pressure.
        </h1>
        <p className="text-lg text-neutral-700 mb-6">
          Everkind Memorials offers thoughtfully written online obituaries and
          memorial pages — simple, dignified, and affordable. Every memorial is
          reviewed by a real person.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/create-memorial"
            className="rounded-xl bg-neutral-900 text-white px-6 py-3 text-sm"
          >
            Create a Memorial
          </a>
          <a
            href="/pricing"
            className="rounded-xl border border-neutral-300 px-6 py-3 text-sm"
          >
            View Pricing
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-neutral-200 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">What we offer</h2>
          <ul className="list-disc list-inside space-y-1 text-neutral-700">
            <li>Professionally written obituaries</li>
            <li>Permanent, shareable memorial pages</li>
            <li>Moderated guestbooks</li>
            <li>Optional memorial giving</li>
          </ul>
          <p className="text-sm text-neutral-500 mt-4">
            No ads. No upselling. No timelines.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">How it works</h2>
          <ol className="list-decimal list-inside space-y-1 text-neutral-700">
            <li>Share details about your loved one</li>
            <li>Choose a simple package</li>
            <li>We write and review the memorial</li>
            <li>Your page goes live within 24–48 hours</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
