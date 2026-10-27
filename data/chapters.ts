export type ChapterTone = "wine" | "ink";

export type Chapter = {
  slug: string;
  tone: ChapterTone;
  image?: { desktop: string; mobile?: string };
};

export const chapters: readonly Chapter[] = [
  { slug: "weddings", tone: "wine", image: { desktop: "/assets/images/chapters/wedding-desktop.webp" } },
  { slug: "engagements", tone: "wine", image: { desktop: "/assets/images/chapters/engagement-desktop.webp", mobile: "/assets/images/chapters/engagement-mobile.webp" } },
  { slug: "haldi", tone: "ink", image: { desktop: "/assets/images/chapters/haldi-desktop.webp", mobile: "/assets/images/chapters/haldi-mobile.webp" } },
  { slug: "mehendi", tone: "wine", image: { desktop: "/assets/images/chapters/mehendi-desktop.webp", mobile: "/assets/images/chapters/mehendi-mobile.webp" } },
  { slug: "sangeet", tone: "ink", image: { desktop: "/assets/images/chapters/sangeet-desktop.webp", mobile: "/assets/images/chapters/sangeet-mobile.webp" } },
  { slug: "receptions", tone: "wine", image: { desktop: "/assets/images/chapters/reception-desktop.webp", mobile: "/assets/images/chapters/reception-mobile.webp" } },
  { slug: "baby-showers", tone: "wine", image: { desktop: "/assets/images/chapters/babyshower-desktop.webp", mobile: "/assets/images/chapters/babyshower-mobile.webp" } },
];
