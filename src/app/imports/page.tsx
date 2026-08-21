import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Import Services",
  description:
    "Guidance and assistance throughout international vehicle sourcing, shipping, import processing and delivery — subject to applicable regulations.",
  path: "/imports",
});

const services = [
  {
    t: "International Vehicle Sourcing",
    d: "Identify vehicles that match the client brief across global markets.",
  },
  {
    t: "Documentation Guidance",
    d: "Clarity on the paperwork typically required for the selected vehicle and route.",
  },
  {
    t: "Shipping Coordination",
    d: "Coordination with logistics partners for international vehicle movement.",
  },
  {
    t: "Import Process Assistance",
    d: "Support through the import journey, aligned with current requirements.",
  },
  {
    t: "Customs Clearance Coordination",
    d: "Working with specialists to progress clearance where applicable.",
  },
  {
    t: "Delivery Coordination",
    d: "Arranging the final handover once the vehicle is ready.",
  },
];

const process = [
  "Vehicle Selection",
  "Verification",
  "Documentation",
  "Shipping",
  "Import Processing",
  "Delivery",
];

export default function ImportsPage() {
  return (
    <>
      <PageHero
        title="Global vehicles. Personalized guidance."
        subtitle="We assist clients through the sourcing, import and delivery process, subject to applicable regulations and compliance requirements."
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <SectionHeading
          title="Import, without the noise."
          description="A structured concierge for clients who want international vehicles with professional guidance — not unrealistic promises."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.t} className="border-t border-white/10 pt-8">
              <h2 className="text-xl">{s.t}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{s.d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <h2 className="text-3xl">The process</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((item, i) => (
              <li key={item} className="border border-white/10 p-8">
                <p className="text-[11px] tracking-[0.28em] text-gold">
                  0{i + 1}
                </p>
                <p className="mt-5 font-display text-2xl">{item}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-3xl text-sm leading-7 text-muted">
            Vehicle import requirements, duties, taxes, certification and
            registration requirements vary based on the vehicle and applicable
            Indian regulations. Glaube Exotics does not guarantee import
            eligibility or registration until the relevant requirements have
            been verified.
          </p>
          <div className="mt-10">
            <ButtonLink href="/request">Start Your Import Request</ButtonLink>
          </div>
        </div>
      </section>
      <CTASection
        title="Start with a conversation."
        text="Share the vehicle and we will outline a considered next step."
        primaryHref="/request"
        primaryLabel="Start Your Import Request"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
