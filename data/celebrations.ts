import type { MediaCategory } from "@/data/media";

export type Celebration = {
  slug: string;
  name: string;
  summary: string;
  tradition: string;
  mediaCategories: readonly MediaCategory[];
};

export const celebrations: readonly Celebration[] = [
  {
    slug: "weddings",
    name: "Weddings",
    summary:
      "The wedding is the axis of the celebration. Ceremony, procession and reception are planned as one continuous story, with the rituals your families keep at its centre.",
    tradition:
      "Many Hindu weddings are built around the sacred fire and the saptapadi, the seven steps the couple takes together. The baraat procession and the vidaai farewell mark the families' changing bonds. Traditions differ widely between regions and communities, and we design around the ones that matter to you.",
    mediaCategories: ["weddings"],
  },
  {
    slug: "engagements",
    name: "Engagements",
    summary:
      "An engagement is the first public gathering of two families. We design it as an intimate, joyful occasion that feels personal from the moment guests arrive.",
    tradition:
      "Known as sagai or nischitartham depending on the community, the engagement is when families formally exchange rings and blessings and announce the alliance. The setting often balances warmth with ceremony.",
    mediaCategories: ["engagements"],
  },
  {
    slug: "haldi",
    name: "Haldi",
    summary:
      "A bright, unhurried pre-wedding ritual. The décor is rooted in sunlight and marigold, and the ceremony is designed to be as relaxed as it is beautiful.",
    tradition:
      "Haldi is a pre-wedding ceremony in which a paste, traditionally of turmeric and often with sandalwood and rose water, is applied to the bride and groom. The décor is typically yellow, and the mood is joyful and close.",
    mediaCategories: ["haldi"],
  },
  {
    slug: "mehendi",
    name: "Mehendi",
    summary:
      "A gathering of colour and conversation. We design spaces that invite the women of both families to linger, with henna artistry as the centrepiece.",
    tradition:
      "Henna is applied to the bride's hands and feet, usually before the wedding, at a gathering that is often led by the women of the family with music and song.",
    mediaCategories: ["mehendi"],
  },
  {
    slug: "sangeet",
    name: "Sangeet",
    summary:
      "An evening of music and dance, hosted by the families and shaped around how your family performs together. We design the stage, the lighting and the flow of the night.",
    tradition:
      "Traditionally held before the wedding, the sangeet is a performance evening in which relatives and friends sing and dance together, often with a stage set up for the families to share.",
    mediaCategories: [],
  },
  {
    slug: "receptions",
    name: "Receptions",
    summary:
      "The reception welcomes the couple into a wider circle of family, friends and colleagues. We design it as a second chapter of the celebration, with its own atmosphere.",
    tradition:
      "A reception usually follows the wedding and gives extended family, friends and colleagues a chance to celebrate the couple together.",
    mediaCategories: [],
  },
  {
    slug: "baby-showers",
    name: "Baby showers & Seemantham",
    summary:
      "Celebrations for an expecting family, designed with warmth and softness. Where a family observes a traditional ceremony, we design around it with care.",
    tradition:
      "Seemantham, in Telugu tradition, and Valaikappu, in Tamil tradition, are ceremonies for an expecting mother, usually held in the later months of pregnancy. Baby showers are a related celebration with their own design language.",
    mediaCategories: ["baby-showers"],
  },
];

export function celebrationBySlug(slug: string): Celebration | undefined {
  return celebrations.find((celebration) => celebration.slug === slug);
}
