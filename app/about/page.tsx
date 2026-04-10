import Image from "next/image";
import { CountdownSection } from "../components/CountdownSection";

export default function About() {
  return (
    <div className="relative flex w-full flex-1 flex-col">
      <section className="relative flex h-[100svh] items-center justify-center px-6 py-0 sm:min-h-[95vh] sm:py-20">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/image/hero.png"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
        <div className="pointer-events-none absolute left-1/2 top-4 z-10 flex -translate-x-1/2 flex-col items-center">
          <div className="text-sm font-semibold tracking-wide text-[#800000] drop-shadow sm:text-base">
            ।। श्री गणेशाय नमः।।
          </div>
          <div className="relative mt-2 h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44">
            <Image
              src="/image/Ganesh.png"
              alt="Ganesh"
              fill
              priority
              sizes="(min-width: 768px) 11rem, (min-width: 640px) 9rem, 7rem"
              className="object-contain drop-shadow-[0_10px_22px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
        <div className="absolute left-1/2 top-[38%] z-10 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-3 text-center text-[#800000]">
            <div className="flex flex-col items-center gap-3">
              <div className="-mt-2 text-xs font-semibold tracking-[0.32em] text-[#d4af37] sm:-mt-3 sm:text-sm">
                WEDDING INVITATION
              </div>
              <div className="mt-2 flex items-baseline justify-center gap-2 whitespace-nowrap sm:gap-3">
                <span className="[font-family:var(--font-parisienne)] text-5xl leading-none sm:text-6xl">
                  Tarun
                </span>
                <span className="[font-family:var(--font-great-vibes)] text-5xl leading-none text-[#800000] sm:text-6xl">
                  &
                </span>
                <span className="[font-family:var(--font-parisienne)] text-5xl leading-none sm:text-6xl">
                  Bhawna
                </span>
              </div>
            </div>

            <div className="flex w-full max-w-sm flex-col items-center">
              <div className="mt-1 flex w-full items-center justify-center gap-4">
                <div className="h-px flex-1 bg-[#d4af37]/80" />
                <span className="text-sm leading-none text-[#d4af37]" aria-hidden="true">
                  ♥
                </span>
                <div className="h-px flex-1 bg-[#d4af37]/80" />
              </div>
              <div className="mt-1 [font-family:var(--font-instrument-serif)] text-4xl font-semibold tabular-nums tracking-[0.14em] sm:text-5xl">
                25.04.26
              </div>
              <div className="mt-0.5 text-[11px] font-semibold tracking-[0.34em] sm:text-xs">
                SAVE THE DATE
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-8 px-6 text-center sm:bottom-10">
          <div className="text-xs font-semibold tracking-[0.32em] text-[#800000] sm:text-sm">
            WE&apos;RE GETTING MARRIED
          </div>
        </div>
      </section>

      <CountdownSection />

      <section className="bg-amber-50">
        <div className="mx-auto w-full max-w-5xl px-6 pt-14 pb-0 text-center">
          <div className="[font-family:var(--font-great-vibes)] text-5xl leading-none text-[#800000] sm:text-6xl">
            Golden Moments
          </div>
          <div className="mt-4 text-sm font-semibold tracking-[0.28em] text-[#800000] sm:text-base">
            LOCATION
          </div>

          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <div className="text-center text-[#800000]">
              <div className="text-2xl tracking-[0.34em] text-[#3b5d3a] sm:text-3xl">
                LAGAN SAGAI
              </div>
              <div className="relative mx-auto mt-2 flex w-full max-w-xs items-center justify-center">
                <div className="h-px flex-1 bg-[#d4af37]/80" />
                <div className="mx-3 flex items-center gap-2">
                  <span className="block h-1.5 w-1.5 rotate-45 bg-[#d4af37]" />
                  <span className="block h-2 w-2 rotate-45 bg-[#d4af37]" />
                  <span className="block h-1.5 w-1.5 rotate-45 bg-[#d4af37]" />
                </div>
                <div className="h-px flex-1 bg-[#d4af37]/80" />
                <span className="absolute left-1/2 top-full mt-1 block h-2 w-2 -translate-x-1/2 rotate-45 bg-[#d4af37]" />
              </div>
              <div className="mt-3 text-xl font-extrabold tracking-[0.08em] sm:text-2xl">
                23.04.26 <span className="px-1 text-[#800000]">|</span> 5:00 PM
              </div>
              <a
                className="mt-3 inline-flex flex-col items-center justify-center gap-3"
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  "Rama Palace Sector-61, Haryana Road, Baharampur Naya, Sector 61, Gurugram, Ghata, Haryana - 122098",
                )}&travelmode=driving`}
                target="_blank"
                rel="noreferrer"
                aria-label="Open directions in Google Maps"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3b5d3a]/15 text-[#3b5d3a]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M12 21s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z" />
                    <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>
                </div>
                <div className="mx-auto max-w-md px-4 text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs">
                  Rama Palace Sector-61, Haryana Road, Baharampur Naya, Sector 61,
                  Gurugram, Ghata, Haryana - 122098
                </div>
              </a>
              <a
                className="mx-auto mt-4 block w-full max-w-md overflow-hidden rounded-3xl border border-[#d4af37]/40 bg-white shadow-sm"
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  "Rama Palace Sector-61, Haryana Road, Baharampur Naya, Sector 61, Gurugram, Ghata, Haryana - 122098",
                )}&travelmode=driving`}
                target="_blank"
                rel="noreferrer"
                aria-label="Open location on map"
              >
                <div className="flex items-center justify-center px-4 py-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-[#d97706] shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                    </svg>
                    Open location on map
                  </div>
                </div>
                <div className="border-t border-zinc-200/60">
                  <iframe
                    title="Lagan sagai location map"
                    className="h-36 w-full pointer-events-none sm:h-40"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      "Rama Palace Sector-61, Haryana Road, Baharampur Naya, Sector 61, Gurugram, Ghata, Haryana - 122098",
                    )}&output=embed`}
                    allowFullScreen
                  />
                </div>
              </a>
            </div>

            <div className="text-center text-[#800000]">
              <div className="text-2xl tracking-[0.34em] text-[#3b5d3a] sm:text-3xl">
                WEDDING CEREMONY
              </div>
              <div className="relative mx-auto mt-2 flex w-full max-w-xs items-center justify-center">
                <div className="h-px flex-1 bg-[#d4af37]/80" />
                <div className="mx-3 flex items-center gap-2">
                  <span className="block h-1.5 w-1.5 rotate-45 bg-[#d4af37]" />
                  <span className="block h-2 w-2 rotate-45 bg-[#d4af37]" />
                  <span className="block h-1.5 w-1.5 rotate-45 bg-[#d4af37]" />
                </div>
                <div className="h-px flex-1 bg-[#d4af37]/80" />
                <span className="absolute left-1/2 top-full mt-1 block h-2 w-2 -translate-x-1/2 rotate-45 bg-[#d4af37]" />
              </div>
              <div className="mt-3 text-xl font-extrabold tracking-[0.08em] sm:text-2xl">
                25.04.26 <span className="px-1 text-[#800000]">|</span> 7:00 PM
              </div>
              <div className="mt-3 text-xs font-extrabold tracking-[0.26em] text-[#800000] sm:text-sm">
                CHURCHARI - 5:00PM
              </div>
              <div className="mt-2 text-[10px] font-semibold tracking-[0.24em] text-[#3b5d3a] sm:text-[11px]">
                VENUE- WAZIRABAD, GURGAON
              </div>
              <div className="mx-auto mt-2 max-w-md px-6 text-[9px] font-semibold tracking-[0.22em] text-[#3b5d3a] sm:text-[10px]">
                BARAAT WILL DEPART FROM OUR RESIDENCE TO WEDDING VENUE AT 6PM
              </div>
              <a
                className="mt-3 inline-flex flex-col items-center justify-center gap-3"
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  "Rama Garden 2, Sector 37 C Rd, Basai Enclave, Sector 37C, Gurugram, Haryana 122006",
                )}&travelmode=driving`}
                target="_blank"
                rel="noreferrer"
                aria-label="Open directions in Google Maps"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3b5d3a]/15 text-[#3b5d3a]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M12 21s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z" />
                    <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>
                </div>
                <div className="mx-auto max-w-md px-4 text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs">
                  Rama Garden 2, Sector 37 C Rd, Basai Enclave, Sector 37C,
                  Gurugram, Haryana 122006
                </div>
              </a>
              <a
                className="mx-auto mt-4 block w-full max-w-md overflow-hidden rounded-3xl border border-[#d4af37]/40 bg-white shadow-sm"
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  "Rama Garden 2, Sector 37 C Rd, Basai Enclave, Sector 37C, Gurugram, Haryana 122006",
                )}&travelmode=driving`}
                target="_blank"
                rel="noreferrer"
                aria-label="Open location on map"
              >
                <div className="flex items-center justify-center px-4 py-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-[#d97706] shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                    </svg>
                    Open location on map
                  </div>
                </div>
                <div className="border-t border-zinc-200/60">
                  <iframe
                    title="Wedding ceremony location map"
                    className="h-36 w-full pointer-events-none sm:h-40"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      "Rama Garden 2, Sector 37 C Rd, Basai Enclave, Sector 37C, Gurugram, Haryana 122006",
                    )}&output=embed`}
                    allowFullScreen
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[100svh] w-full overflow-hidden">
        <Image
          src="/image/last.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </section>
    </div>
  );
}
