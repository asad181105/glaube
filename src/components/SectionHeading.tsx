export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 text-[11px] tracking-[0.32em] uppercase text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
