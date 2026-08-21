import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  index,
  title,
  description,
  icon: Icon,
}: {
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <article className="group border border-white/10 bg-surface p-8 transition-colors duration-500 hover:border-gold/40">
      <div className="flex items-start justify-between">
        <span className="text-[11px] tracking-[0.28em] text-gold">{index}</span>
        <Icon className="h-5 w-5 text-silver transition-colors group-hover:text-gold" />
      </div>
      <h3 className="mt-10 text-xl">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
    </article>
  );
}
