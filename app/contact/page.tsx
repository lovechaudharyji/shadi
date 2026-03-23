import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-16">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight">
          Contact
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600">
          This is the Contact page. Add your email, phone number, or a contact
          form.
        </p>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <div className="grid gap-3 text-sm text-zinc-700">
            <div>
              <span className="font-medium text-zinc-900">
                Email:
              </span>{" "}
              <a
                className="underline underline-offset-4"
                href="mailto:hello@example.com"
              >
                hello@example.com
              </a>
            </div>
            <div>
              <span className="font-medium text-zinc-900">
                Phone:
              </span>{" "}
              <a
                className="underline underline-offset-4"
                href="tel:+10000000000"
              >
                +1 (000) 000-0000
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full bg-amber-500 px-6 text-white transition-colors hover:bg-amber-400 sm:w-auto"
            href="/"
          >
            Back to Home
          </Link>
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-200 bg-white px-6 transition-colors hover:bg-zinc-50 sm:w-auto"
            href="/about"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
