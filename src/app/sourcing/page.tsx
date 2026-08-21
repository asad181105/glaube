import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SourcingForm } from "@/components/SourcingForm";
import { CTASection } from "@/components/CTASection";
import { createMetadata } from "@/lib/seo";
import { sourcingRegions } from "@/lib/site";

export const metadata = createMetadata({
  title: "Global Sourcing",
  description:
    "Glaube Exotics helps clients source vehicles from international markets — UAE, Europe, USA, the United Kingdom, Japan and beyond.",
  path: "/sourcing",
});

const steps = [
  {
    n: "01",
    t: "Tell Us Your Vehicle",
    d: "Share the brand, model, specification and the experience you want.",
  },
  {
    n: "02",
    t: "We Source & Verify",
    d: "We search across markets and review available opportunities with care.",
  },
  {
    n: "03",
    t: "We Present Available Opportunities",
    d: "You receive considered options — not a catalogue dump.",
  },
];

export default function SourcingPage() {
  return (
    <>
      <PageHero
        title="Find what others can't."
        subtitle="Glaube Exotics helps clients source vehicles from international markets through a personal, specification-led approach."
        image="https://images.unsplash.com/photo-1483729558449-99ef03a8c7b3?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <SectionHeading
          title="A global search, a personal brief."
          description="Looking for a specific vehicle? Our sourcing approach is built around finding the right vehicle, specification and opportunity for each client."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <article key={s.n} className="border border-white/10 p-8">
              <p className="text-[11px] tracking-[0.3em] text-gold">{s.n}</p>
              <h2 className="mt-6 text-2xl">{s.t}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{s.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sourcingRegions.map((r) => (
            <div key={r.code} className="border border-white/10 px-6 py-8">
              <p className="text-[11px] tracking-[0.28em] text-gold">{r.code}</p>
              <p className="mt-2 font-display text-xl">{r.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24 md:px-10">
          <h2 className="text-3xl">Sourcing enquiry</h2>
          <p className="mt-4 mb-12 text-muted">
            Tell us what you want. We will review the brief and respond with next
            steps.
          </p>
          <SourcingForm />
        </div>
      </section>
      <CTASection
        title="Your next vehicle is out there."
        primaryHref="/request"
        primaryLabel="Request a Vehicle"
      />
    </>
  );
}
