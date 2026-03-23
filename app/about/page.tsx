import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-16">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight">
          About
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600">
          This is the About page. Add your story, mission, or any information
          you want visitors to know.
        </p>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full bg-amber-500 px-6 text-white transition-colors hover:bg-amber-400 sm:w-auto"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-200 bg-white px-6 transition-colors hover:bg-zinc-50 sm:w-auto"
            href="/"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
