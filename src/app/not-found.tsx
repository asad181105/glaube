import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] tracking-[0.32em] text-gold">404</p>
      <h1 className="mt-4 text-4xl">This page is not in the collection.</h1>
      <Link
        href="/"
        className="mt-10 text-[11px] tracking-[0.22em] uppercase hover:text-gold"
      >
        Return home
      </Link>
    </section>
  );
}
