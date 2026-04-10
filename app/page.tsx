import Image from "next/image";
import { CountdownSection } from "./components/CountdownSection";
import { TriangleInvitationOverlay } from "./components/TriangleInvitationOverlay";

export default function Home() {
  return (
    <div className="relative flex w-full flex-1 flex-col">
      <TriangleInvitationOverlay navigateTo="/about" />
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
        <div className="absolute left-1/2 top-[46%] z-10 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-5 text-center text-[#800000]">
            <div className="flex flex-col items-center gap-3">
              <div className="-mt-2 text-xs font-semibold tracking-[0.32em] text-[#800000] sm:-mt-3 sm:text-sm">
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
              <div className="mt-4 flex w-full items-center justify-center gap-4">
                <div className="h-px flex-1 bg-[#800000]/70" />
                <span className="text-sm leading-none text-[#800000]/80" aria-hidden="true">
                  ♥
                </span>
                <div className="h-px flex-1 bg-[#800000]/70" />
              </div>
              <div className="mt-3 text-4xl font-semibold tabular-nums tracking-[0.14em] sm:text-5xl">
                25.04.26
              </div>
              <div className="mt-1 text-[11px] font-semibold tracking-[0.34em] sm:text-xs">
                SAVE THE DATE
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-8 px-6 text-center sm:bottom-10">
          <div className="text-xs font-semibold tracking-[0.32em] text-[#800000] sm:text-sm">
            CONFIRM YOUR ATTENDANCE
          </div>
        </div>
      </section>

      <CountdownSection />

      <section className="bg-amber-50">
        <div className="mx-auto w-full max-w-5xl px-6 pt-14 pb-0 text-center">
          <div className="[font-family:var(--font-great-vibes)] text-5xl leading-none text-[#800000] sm:text-6xl">
            Where WE Celebrate
          </div>
          <div className="mt-4 text-sm font-semibold tracking-[0.28em] text-[#800000] sm:text-base">
            LOCATION
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 text-center text-[#800000] shadow-sm">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-[#800000]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M8 7V3M16 7V3M4 11h16M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
                </svg>
              </div>
              <div className="mt-4 text-3xl tracking-[0.22em] sm:text-2xl">
                LAGAN CEREMONY
              </div>
              <div className="mt-2 text-xs font-semibold tracking-[0.28em] text-[#800000]">
                TIMING - 5:00PM
              </div>

              <div className="mt-5 space-y-3 text-lg leading-6 text-[#800000]">
                <div className="inline-flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4 text-[#800000]"
                    aria-hidden="true"
                  >
                    <path d="M8 7V3M16 7V3M4 11h16M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
                  </svg>
                  <span className="text-2xl leading-none text-[#800000]">23/04/26</span>
                </div>
                <div className="mx-auto max-w-md">
                  <div className="inline-flex items-start justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#800000]"
                      aria-hidden="true"
                    >
                      <path d="M12 22s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z" />
                      <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </svg>
                    <span className="text-base leading-6">
                      Rama Palace Sector-61, Haryana Road, Baharampur Naya,
                      Sector 61, Gurugram, Ghata, Haryana - 122098
                    </span>
                  </div>
                </div>
                <div>
                  <a
                    className="inline-flex items-center justify-center gap-2 text-xl text-[#800000] underline underline-offset-4"
                    href="https://www.google.com/maps/place/Rama+Palace,+Sector-61,+Haryana+Road,+Baharampur+Naya,+Sector+61,+Gurugram,+Ghata,+Haryana+122098/@28.4169184,77.0968647,15z/data=!4m6!3m5!1s0x390d23a71a97848d:0x1bc269500ec2eb2f!8m2!3d28.4169184!4d77.0968647!16s%2Fg%2F11fhryq9qk?g_ep=Eg1tbF8yMDI2MDMxMV8wIOC7DCoASAJQAg%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                  >
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
                  </a>
                </div>
                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                  <iframe
                    title="Ceremony location map"
                    className="h-40 w-full sm:h-44"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Rama%20Palace%20Sector-61%2C%20Haryana%20Road%2C%20Baharampur%20Naya%2C%20Sector%2061%2C%20Gurugram%2C%20Ghata%2C%20Haryana%20122098&output=embed"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-7 text-center text-[#800000] shadow-sm">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-[#800000]">
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
              <div className="mt-4 text-3xl tracking-[0.22em] sm:text-2xl">
                WEDDING CEREMONY
              </div>
              <div className="mt-2 text-xs font-semibold tracking-[0.28em] text-[#800000]">
                TIMING - 7:30PM
              </div>

              <div className="mt-5 space-y-3 text-lg leading-6 text-[#800000]">
                <div className="inline-flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4 text-[#800000]"
                    aria-hidden="true"
                  >
                    <path d="M8 7V3M16 7V3M4 11h16M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
                  </svg>
                  <span className="text-2xl leading-none text-[#800000]">25/04/26</span>
                </div>
                <div className="mx-auto max-w-md">
                  <div className="inline-flex items-start justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#800000]"
                      aria-hidden="true"
                    >
                      <path d="M12 22s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z" />
                      <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </svg>
                    <span className="text-base leading-6">
                      Rama Garden 2, Sector 37 C Rd, Basai Enclave, Sector 37C,
                      Gurugram, Haryana 122006
                    </span>
                  </div>
                </div>
                <div>
                  <a
                    className="inline-flex items-center justify-center gap-2 text-xl text-[#800000] underline underline-offset-4"
                    href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x390d17a368ba5a3d:0xbb2e3fcee17f3539?entry=s&sa=X&ved=2ahUKEwi788HGo6yTAxXISmwGHU-uChYQ4kB6BAgVEAA&hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
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
                  </a>
                </div>
                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                  <iframe
                    title="Wedding ceremony location map"
                    className="h-40 w-full sm:h-44"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Rama%20Garden%202%2C%20Sector%2037%20C%20Rd%2C%20Basai%20Enclave%2C%20Sector%2037C%2C%20Gurugram%2C%20Haryana%20122006&output=embed"
                    allowFullScreen
                  />
                </div>
              </div>
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

      {/* Removed starter cards/CTA section */}
    </div>
  );
}
