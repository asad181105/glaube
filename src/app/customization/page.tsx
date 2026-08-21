import { BuildRequestForm } from "@/components/BuildRequestForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Customization",
  description:
    "Bespoke automotive builds — exterior styling, performance upgrades and custom interiors designed around your vision.",
  path: "/customization",
});

const groups = [
  {
    title: "Exterior",
    items: [
      "Body kits",
      "Carbon fibre components",
      "Widebody styling",
      "Wheels",
      "Exhaust systems",
    ],
  },
  {
    title: "Performance",
    items: ["ECU tuning", "Exhaust", "Suspension", "Performance upgrades"],
  },
  {
    title: "Interior",
    items: [
      "Custom leather",
      "Bespoke upholstery",
      "Ambient upgrades",
      "Personalized finishes",
    ],
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=80",
    label: "Widebody",
  },
  {
    src: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=80",
    label: "Luxury SUV",
  },
  {
    src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1400&q=80",
    label: "Performance",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
    label: "Sports car",
  },
];

export default function CustomizationPage() {
  return (
    <>
      <PageHero
        title="Make it yours."
        subtitle="Performance, presence and individuality. Explore bespoke automotive builds designed around your vision."
        image="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <SectionHeading
          title="Specified, not standardised."
          description="From subtle presence to full widebody programmes — we shape the vehicle around how you want it to look, feel and perform."
        />
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-2xl">{g.title}</h2>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                {g.items.map((item) => (
                  <li key={item} className="border-b border-white/10 pb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="border-y border-white/10">
        <div className="grid md:grid-cols-2">
          {gallery.map((g) => (
            <div key={g.label} className="relative min-h-[280px] overflow-hidden md:min-h-[380px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url(${g.src})` }}
              />
              <div className="absolute inset-0 bg-black/35" />
              <p className="absolute bottom-6 left-6 text-[11px] tracking-[0.28em] uppercase">
                {g.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24 md:px-10">
          <h2 className="text-3xl">Build request</h2>
          <p className="mt-4 mb-12 text-muted">
            Describe the vehicle and the direction. We will review feasibility
            and follow up.
          </p>
          <BuildRequestForm />
        </div>
      </section>
    </>
  );
}
