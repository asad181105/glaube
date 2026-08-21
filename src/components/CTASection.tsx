import { ButtonLink } from "./ButtonLink";

export function CTASection({
  title,
  text,
  primaryHref = "/request",
  primaryLabel = "Request a Vehicle",
  secondaryHref,
  secondaryLabel,
  image,
}: {
  title: string;
  text?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      {image ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-graphite" />
      )}
      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center md:px-10 md:py-36">
        <h2 className="text-3xl sm:text-5xl md:text-6xl">{title}</h2>
        {text ? (
          <p className="mx-auto mt-6 max-w-xl text-lg text-silver">{text}</p>
        ) : null}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
          {secondaryHref && secondaryLabel ? (
            <ButtonLink href={secondaryHref} variant="outline">
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
