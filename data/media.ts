export type MediaCategory =
  | "weddings"
  | "engagements"
  | "haldi"
  | "mehendi"
  | "haldi-mehendi"
  | "baby-showers"
  | "details"
  | "selected";

export type MediaItem = {
  src: string;
  category: MediaCategory;
  width: number;
  height: number;
};

export const media: readonly MediaItem[] = [
  { src: "/assets/images/celebrations/weddings/wedding-01.webp", category: "weddings", width: 1600, height: 1200 },
  { src: "/assets/images/celebrations/weddings/wedding-02.webp", category: "weddings", width: 1600, height: 1200 },
  { src: "/assets/images/celebrations/weddings/wedding-03.webp", category: "weddings", width: 1600, height: 1200 },
  { src: "/assets/images/celebrations/weddings/wedding-04.webp", category: "weddings", width: 1600, height: 1200 },
  { src: "/assets/images/celebrations/weddings/wedding-05.webp", category: "weddings", width: 1600, height: 1200 },
  { src: "/assets/images/celebrations/weddings/wedding-06.webp", category: "weddings", width: 1200, height: 1600 },
  { src: "/assets/images/celebrations/engagement/engagement-01.webp", category: "engagements", width: 1024, height: 559 },
  { src: "/assets/images/celebrations/engagement/engagement-02.webp", category: "engagements", width: 1600, height: 1200 },
  { src: "/assets/images/celebrations/engagement/engagement-03.webp", category: "engagements", width: 1200, height: 1600 },
  { src: "/assets/images/celebrations/engagement/engagement-04.webp", category: "engagements", width: 1600, height: 1200 },
  { src: "/assets/images/celebrations/haldi/haldi-02.webp", category: "haldi", width: 494, height: 619 },
  { src: "/assets/images/celebrations/haldi/haldi-03.webp", category: "haldi", width: 678, height: 452 },
  { src: "/assets/images/celebrations/mehendi/mehendi-02.webp", category: "mehendi", width: 480, height: 638 },
  { src: "/assets/images/celebrations/mehendi/mehendi-03.webp", category: "mehendi", width: 452, height: 678 },
  { src: "/assets/images/celebrations/baby-showers/baby-shower-03.webp", category: "baby-showers", width: 1254, height: 1254 },
  { src: "/assets/images/celebrations/baby-showers/baby-showers-01.webp", category: "baby-showers", width: 1600, height: 1200 },
  { src: "/assets/images/celebrations/baby-showers/baby-showers-02.webp", category: "baby-showers", width: 800, height: 1149 },
  { src: "/assets/images/celebrations/baby-showers/baby-showers-04.webp", category: "baby-showers", width: 1200, height: 1600 },
  { src: "/assets/images/gallery/wedding/wedding-04.webp", category: "weddings", width: 453, height: 677 },
  { src: "/assets/images/gallery/wedding/wedding-06.webp", category: "weddings", width: 1600, height: 1200 },
  { src: "/assets/images/gallery/wedding/wedding-07.webp", category: "weddings", width: 1200, height: 1600 },
  { src: "/assets/images/gallery/wedding/wedding-08.webp", category: "weddings", width: 518, height: 592 },
  { src: "/assets/images/gallery/engagements/engagemens-02.webp", category: "engagements", width: 452, height: 678 },
  { src: "/assets/images/gallery/haldi-mehendi/haldi-mehendi-06.webp", category: "haldi-mehendi", width: 678, height: 452 },
  { src: "/assets/images/gallery/details/details-01.webp", category: "details", width: 452, height: 678 },
  { src: "/assets/images/gallery/details/details-03.webp", category: "details", width: 823, height: 548 },
  { src: "/assets/images/gallery/details/details-04.webp", category: "details", width: 452, height: 678 },
  { src: "/assets/images/gallery/featured/featured-01.webp", category: "selected", width: 1200, height: 1600 },
  { src: "/assets/images/gallery/featured/featured-02.webp", category: "selected", width: 1200, height: 1600 },
  { src: "/assets/images/gallery/featured/featured-03.webp", category: "selected", width: 1200, height: 1600 },
  { src: "/assets/images/gallery/featured/featured-04.webp", category: "selected", width: 686, height: 1000 },
];
