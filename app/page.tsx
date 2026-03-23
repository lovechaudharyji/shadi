import Link from "next/link";
import Image from "next/image";
import { CountdownSection } from "./components/CountdownSection";

export default function Home() {
  return (
    <div className="relative flex w-full flex-1 flex-col">
      <section className="relative flex min-h-[85vh] items-center justify-center px-6 py-20 sm:min-h-[95vh]">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/image/1.jpeg"
            alt=""
            aria-hidden="true"
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-zinc-50" />
        </div>
        <div className="w-full max-w-3xl">
          <div className="flex flex-col items-center gap-6 text-center text-white">
            <div className="flex flex-col items-center gap-3">
              <div className="text-4xl tracking-[0.22em] sm:text-2xl">
                NOS CASAMOS
              </div>
              <div className="[font-family:var(--font-great-vibes)] text-5xl leading-none sm:text-6xl">
                Tarun
              </div>
              <div className="text-4xl leading-none text-amber-500 sm:text-5xl">
                &
              </div>
              <div className="[font-family:var(--font-great-vibes)] text-7xl leading-none sm:text-6xl">
                Bhawna
              </div>
              <div className="mt-2 flex w-full max-w-sm items-center justify-center gap-4">
                <div className="h-px flex-1 bg-white/60" />
                <span
                  className="text-sm leading-none text-amber-500 drop-shadow"
                  aria-hidden="true"
                >
                  ★
                </span>
                <div className="h-px flex-1 bg-white/60" />
              </div>
            </div>

            <div className="[font-family:var(--font-great-vibes)] text-4xl leading-none text-white/90 drop-shadow sm:text-3xl">
              Date - 25/04/26
            </div>
            <div className="text-xs font-semibold tracking-[0.32em] text-white/85 sm:text-sm">
              CONFIRM YOUR ATTENDANCE
            </div>
          </div>
        </div>
      </section>

      <CountdownSection />

      <section className="bg-amber-50">
        <div className="mx-auto w-full max-w-5xl px-6 py-14 text-center">
          <div className="[font-family:var(--font-great-vibes)] text-5xl leading-none text-zinc-900 sm:text-6xl">
            Where WE Celebrate
          </div>
          <div className="mt-4 text-sm font-semibold tracking-[0.28em] text-zinc-700 sm:text-base">
            LOCATION
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 text-center text-zinc-900 shadow-sm">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-700">
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
                CEREMONY
              </div>

              <div className="mt-5 space-y-3 text-lg leading-6 text-zinc-700">
                <div className="inline-flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4 text-amber-600"
                    aria-hidden="true"
                  >
                    <path d="M8 7V3M16 7V3M4 11h16M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
                  </svg>
                  <span className="text-2xl leading-none text-zinc-900">23/04/26</span>
                </div>
                <div className="mx-auto max-w-md">
                  <div className="inline-flex items-start justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mt-0.5 h-4 w-4 shrink-0 text-amber-600"
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
                    className="inline-flex items-center justify-center gap-2 text-xl text-amber-600 underline underline-offset-4 hover:text-amber-500"
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

            <div className="rounded-3xl border border-zinc-200 bg-white p-7 text-center text-zinc-900 shadow-sm">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-700">
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

              <div className="mt-5 space-y-3 text-lg leading-6 text-zinc-700">
                <div className="inline-flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4 text-amber-600"
                    aria-hidden="true"
                  >
                    <path d="M8 7V3M16 7V3M4 11h16M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
                  </svg>
                  <span className="text-2xl leading-none text-zinc-900">25/04/26</span>
                </div>
                <div className="mx-auto max-w-md">
                  <div className="inline-flex items-start justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mt-0.5 h-4 w-4 shrink-0 text-amber-600"
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
                    className="inline-flex items-center justify-center gap-2 text-xl text-amber-600 underline underline-offset-4 hover:text-amber-500"
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

      <div className="relative mx-auto w-full max-w-5xl px-6 pb-16">
        <section className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="text-sm font-medium text-zinc-900">
              Clear structure
            </div>
            <div className="mt-2 text-sm leading-6 text-zinc-600">
              A simple layout with consistent spacing, typography, and
              navigation.
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="text-sm font-medium text-zinc-900">
              Fast navigation
            </div>
            <div className="mt-2 text-sm leading-6 text-zinc-600">
              Dedicated pages for About and Contact, with smooth internal
              routing.
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="text-sm font-medium text-zinc-900">
              Professional look
            </div>
            <div className="mt-2 text-sm leading-6 text-zinc-600">
              Soft backgrounds, subtle borders, and a polished card-based hero.
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-zinc-200 bg-white p-8 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Where do you want to go next?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
                Use these quick links or the top navigation to explore the
                website.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                className="flex h-12 w-full items-center justify-center rounded-full bg-amber-500 px-6 text-white transition-colors hover:bg-amber-400 sm:w-auto"
                href="/about"
              >
                About
              </Link>
              <Link
                className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-200 bg-white px-6 transition-colors hover:bg-zinc-50 sm:w-auto"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
