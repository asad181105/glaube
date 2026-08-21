export const siteConfig = {
  name: "Glaube Exotics",
  shortName: "GLAUBE",
  tagline: "Beyond Ordinary.",
  description:
    "Glaube Exotics specializes in premium vehicle sourcing, international automotive opportunities, bespoke customization and exceptional automotive experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://glaubeexotics.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/sourcing", label: "Global Sourcing" },
  { href: "/imports", label: "Import Services" },
  { href: "/customization", label: "Customization" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function getWhatsAppUrl(message?: string) {
  const number = siteConfig.whatsappNumber.replace(/[^\d]/g, "");
  const text = encodeURIComponent(
    message ??
      "Hello Glaube Exotics, I would like to discuss a vehicle enquiry.",
  );
  if (!number) {
    return `https://wa.me/?text=${text}`;
  }
  return `https://wa.me/${number}?text=${text}`;
}

export const sourcingRegions = [
  { code: "AE", name: "UAE" },
  { code: "EU", name: "Europe" },
  { code: "US", name: "USA" },
  { code: "GB", name: "United Kingdom" },
  { code: "JP", name: "Japan" },
  { code: "XX", name: "Other Global Markets" },
] as const;
