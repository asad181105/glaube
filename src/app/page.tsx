import {
  Compass,
  Globe2,
  Layers,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { VehicleCard } from "@/components/VehicleCard";
import { getFeaturedVehicles } from "@/lib/data/vehicles";
import { sourcingRegions } from "@/lib/site";

const services = [
  {
    index: "01",
    title: "Global Sourcing",
    description:
      "Access exceptional vehicles through our international sourcing network.",
    icon: Globe2,
  },
  {
    index: "02",
    title: "Vehicle Imports",
    description:
      "Guidance and assistance throughout the international vehicle sourcing and import process.",
    icon: Compass,
  },
  {
    index: "03",
    title: "Bespoke Builds",
    description:
      "Create something personal with curated performance, styling and luxury modifications.",
    icon: Wrench,
  },
  {
    index: "04",
    title: "Exotic Collection",
    description:
      "Discover rare, performance-focused and luxury vehicles.",
    icon: Sparkles,
  },
  {
    index: "05",
    title: "Parts & Body Kits",
    description:
      "Access premium automotive components and custom styling solutions.",
    icon: Layers,
  },
  {
    index: "06",
    title: "Personalized Acquisition",
    description: "Tell us what you want. We help you find it.",
    icon: Search,
  },
];

const steps = [
  { n: "01", t: "Tell Us What You Want" },
  { n: "02", t: "Global Sourcing" },
  { n: "03", t: "Vehicle Verification" },
  { n: "04", t: "Customization & Preparation" },
  { n: "05", t: "Import & Logistics Assistance" },
  { n: "06", t: "Delivery" },
];

const pillars = [
  {
    t: "Global Access",
    d: "Access opportunities beyond the local market.",
  },
  {
    t: "Personalized Service",
    d: "Every client and vehicle requirement is different.",
  },
  {
    t: "Premium Network",
    d: "Built around trusted automotive and international partners.",
  },
  {
    t: "Exceptional Experiences",
    d: "From the first conversation to the final delivery.",
  },
];

export default async function HomePage() {
  const featured = await getFeaturedVehicles();

  return (
    <>
      <Hero />

      <AnimatedSection
        id="introduction"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32"
      >
        <div>
          <SectionHeading
            eyebrow="The House"
            title="The extraordinary is not off the shelf."
            description="At Glaube Exotics, we believe exceptional vehicles deserve an exceptional experience. From globally sourced luxury automobiles to bespoke performance builds, we help our clients access machines that stand apart."
          />
        </div>
        <div
          className="min-h-[420px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80)",
          }}
        />
      </AnimatedSection>

      <AnimatedSection className="border-y border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <SectionHeading eyebrow="Services" title="A concierge for extraordinary machines." />
          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2 xl:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.index} {...s} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading
          eyebrow="Collection"
          title="Exceptional machines."
          description="A curated selection. Price on request."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
        <div className="mt-12">
          <ButtonLink href="/inventory" variant="outline">
            Explore Collection
          </ButtonLink>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative overflow-hidden border-y border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1524661132064-4e0a0d62a7a4?auto=format&fit=crop&w=1800&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <SectionHeading
            title="The world is your showroom."
            description="Looking for a specific vehicle? Our sourcing approach is built around finding the right vehicle, specification and opportunity for each client."
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sourcingRegions.map((region) => (
              <div
                key={region.code}
                className="border border-white/10 bg-black/50 px-6 py-8"
              >
                <p className="text-[11px] tracking-[0.3em] text-gold">{region.code}</p>
                <p className="mt-3 font-display text-2xl">{region.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <ButtonLink href="/request">Request a Vehicle</ButtonLink>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading eyebrow="Process" title="How it works." />
        <ol className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {steps.map((step) => (
            <li
              key={step.n}
              className="grid gap-4 py-8 md:grid-cols-[120px_1fr] md:items-center"
            >
              <span className="text-[11px] tracking-[0.3em] text-gold">{step.n}</span>
              <span className="font-display text-2xl md:text-3xl">{step.t}</span>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-muted">
          Processes and requirements may vary depending on the vehicle, country
          of origin and applicable regulations.
        </p>
      </AnimatedSection>

      <AnimatedSection className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2000&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-2 md:px-10 md:py-36">
          <div>
            <SectionHeading
              eyebrow="Customization"
              title="Built around you."
              description="Performance, presence and individuality. Explore bespoke automotive builds designed around your vision."
            />
            <div className="mt-8">
              <ButtonLink href="/customization">Explore Customization</ButtonLink>
            </div>
          </div>
          <ul className="space-y-4 self-end text-[11px] tracking-[0.24em] text-silver uppercase">
            <li>Widebody vehicles</li>
            <li>Luxury SUVs</li>
            <li>Performance cars</li>
            <li>Custom interiors</li>
            <li>Premium body kits</li>
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading title="Why Glaube Exotics?" />
        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2">
          {pillars.map((p, i) => (
            <article key={p.t} className="bg-background p-10">
              <p className="text-[11px] tracking-[0.28em] text-gold">0{i + 1}</p>
              <h3 className="mt-6 text-2xl">{p.t}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{p.d}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <CTASection
        title="Your next vehicle is out there."
        text="Tell us what you're looking for."
        primaryHref="/request"
        primaryLabel="Request a Vehicle"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80"
      />
    </>
  );
}
