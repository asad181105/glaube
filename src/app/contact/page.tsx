import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { getWhatsAppUrl } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Enquire with Glaube Exotics about sourcing, imports, customization or a specific vehicle.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's talk automobiles."
        subtitle="Share what you are looking for. We will respond with a considered next step."
        image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] md:px-10">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
            Direct
          </p>
          <h2 className="mt-4 text-3xl">WhatsApp us</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Prefer a faster conversation? Message the house on WhatsApp.
          </p>
          <Link
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex border border-white/20 px-7 py-3.5 text-[11px] tracking-[0.22em] uppercase transition-colors hover:border-gold hover:text-gold"
          >
            WhatsApp Us
          </Link>
        </div>
        <div className="border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="text-2xl">Enquiry</h2>
          <p className="mt-3 mb-10 text-sm text-muted">
            All fields marked with * are required.
          </p>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
