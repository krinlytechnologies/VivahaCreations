import { media, type MediaCategory, type MediaItem } from "@/data/media";

export const categoryLabels: Record<MediaCategory, string> = {
  weddings: "Wedding",
  engagements: "Engagement",
  haldi: "Haldi",
  mehendi: "Mehendi",
  "haldi-mehendi": "Haldi & Mehendi",
  "baby-showers": "Baby shower",
  details: "Detail",
  selected: "Selected",
};

export const brandHero = {
  desktop: { src: "/assets/images/brand/hero-desktop.webp", width: 1672, height: 941 },
  mobile: { src: "/assets/images/brand/hero-mobile-overlay.webp", width: 1024, height: 1536 },
  alt: "A sunset celebration terrace with a mandap of white drapes, roses and jasmine garlands, brass lamps and candlelight",
} as const;

export function mediaFor(categories: readonly MediaCategory[]): MediaItem[] {
  return media.filter((item) => categories.includes(item.category));
}

export function altFor(item: MediaItem): string {
  return `${categoryLabels[item.category]} design by Vivaha Creations`;
}

export const portfolioFilters: readonly {
  label: string;
  categories: readonly MediaCategory[] | null;
}[] = [
  { label: "All", categories: null },
  { label: "Weddings", categories: ["weddings"] },
  { label: "Engagements", categories: ["engagements"] },
  { label: "Haldi & Mehendi", categories: ["haldi", "mehendi", "haldi-mehendi"] },
  { label: "Baby showers", categories: ["baby-showers"] },
  { label: "Details", categories: ["details"] },
  { label: "Selected", categories: ["selected"] },
];
