import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "Glaube Exotics was created around a passion for exceptional automobiles and more personal access to the global automotive world.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Built for people who expect more."
        subtitle="A premium automotive house for sourcing, importing, customizing and delivering exceptional vehicles."
        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="mx-auto max-w-4xl px-6 py-24 md:px-10">
        <p className="text-lg leading-9 text-silver md:text-xl">
          Glaube Exotics was created around a passion for exceptional automobiles
          and the belief that access to the global automotive world should be
          more personalized. We exist for clients who want more than a
          transaction — a considered path to the right machine.
        </p>
        <p className="mt-8 text-base leading-8 text-muted">
          The company is a premium automotive concierge and specialist: exotic
          and luxury sourcing, international import assistance, bespoke
          customization and premium components. We do not claim shortcuts around
          regulation. We claim attention — to specification, to process, and to
          how the experience should feel.
        </p>
      </section>
      <section className="border-y border-white/10 bg-surface">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-3 md:px-10">
          <article>
            <p className="text-[11px] tracking-[0.28em] text-gold">01</p>
            <h2 className="mt-5 text-2xl">Our Vision</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Our vision is to build Glaube Exotics into a trusted name in
              premium automotive sourcing, bespoke builds and global vehicle
              experiences.
            </p>
          </article>
          <article>
            <p className="text-[11px] tracking-[0.28em] text-gold">02</p>
            <h2 className="mt-5 text-2xl">Our Approach</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Every vehicle begins with understanding exactly what the client
              wants.
            </p>
          </article>
          <article>
            <p className="text-[11px] tracking-[0.28em] text-gold">03</p>
            <h2 className="mt-5 text-2xl">The Future</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Building relationships across the global automotive ecosystem.
            </p>
          </article>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <SectionHeading
          title="Source. Build. Deliver."
          description="A simple mandate. Executed with care."
        />
      </section>
      <CTASection
        title="Let's talk automobiles."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/request"
        secondaryLabel="Request a Vehicle"
      />
    </>
  );
}
