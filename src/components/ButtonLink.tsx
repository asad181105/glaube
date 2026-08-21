import Link from "next/link";

type Variant = "solid" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  solid:
    "bg-foreground text-background hover:bg-silver",
  outline:
    "border border-white/25 text-foreground hover:border-gold hover:text-gold",
  ghost: "text-silver hover:text-foreground",
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-7 py-3.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
