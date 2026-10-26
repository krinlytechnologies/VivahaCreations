export const siteConfig = {
  name: "Vivaha Creations",
  tagline: "Wedding, engagement, reception and family-event management",
  url: "https://vivahacreations.in",
  description:
    "Vivaha Creations designs and manages weddings, engagements, receptions and family celebrations with a premium, editorial sensibility.",
  email: "hello@vivahacreations.in",
} as const;

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Weddings & Events", href: "/weddings-events" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
