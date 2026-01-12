import { NextResponse } from "next/server";

export const revalidate = 3600; // cache 1 hour (server-side)

function buildSparql(days: number) {
  // Pull humans with a date of death in the last N days
  return `
SELECT ?person ?personLabel ?dod ?birthPlaceLabel ?deathPlaceLabel ?article WHERE {
  ?person wdt:P31 wd:Q5;
          wdt:P570 ?dod.
  OPTIONAL { ?person wdt:P19 ?birthPlace. }
  OPTIONAL { ?person wdt:P20 ?deathPlace. }
  OPTIONAL {
    ?article schema:about ?person;
             schema:isPartOf <https://en.wikipedia.org/>;
             schema:inLanguage "en".
  }

  FILTER(?dod >= (NOW() - P${days}D))
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
ORDER BY DESC(?dod)
LIMIT 30
`.trim();
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const days = Math.min(365, Math.max(1, Number(url.searchParams.get("days") ?? "30")));

  const sparql = buildSparql(days);
  const endpoint = "https://query.wikidata.org/sparql";
  const qs = new URLSearchParams({
    format: "json",
    query: sparql,
  });

  const res = await fetch(`${endpoint}?${qs.toString()}`, {
    headers: {
      // Wikidata asks clients to send an identifying user agent (best practice).
      // Put your domain or email here.
      "User-Agent": "EverkindMemorials/1.0 (everkind-memorials.vercel.app)",
      Accept: "application/sparql-results+json",
    },
    // Next.js server fetch cache behavior
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Wikidata query failed", status: res.status },
      { status: 502 }
    );
  }

  const data = await res.json();

  const rows = data?.results?.bindings ?? [];
  const items = rows.map((r: any) => ({
    name: r.personLabel?.value ?? "",
    dateOfDeath: r.dod?.value ?? "",
    birthPlace: r.birthPlaceLabel?.value ?? "",
    deathPlace: r.deathPlaceLabel?.value ?? "",
    wikipedia: r.article?.value ?? "",
    wikidata: r.person?.value ?? "",
  }));

  return NextResponse.json({ days, count: items.length, items });
}
