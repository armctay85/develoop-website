import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not on the Develoop website.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="container-page pb-24 pt-32 sm:pt-40">
      <p className="text-eyebrow">404</p>
      <h1 className="mt-4 font-serif text-4xl text-foreground sm:text-6xl">This page is not here.</h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-foreground-muted">
        The link may be old. The current pages are listed below.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-primary w-full sm:w-auto">
          Home
        </Link>
        <Link href="/contact" className="btn-secondary w-full sm:w-auto">
          Book a call
        </Link>
      </div>
    </div>
  );
}
