import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { media } from "@/data/media";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Photographs from celebrations designed by Vivaha Creations, filtered by ceremony.",
};

export default function PortfolioPage() {
  return (
    <>
      <Container className="pt-20 pb-14 md:pt-28">
        <Reveal className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Portfolio</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] md:text-6xl">Moments we have designed.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            A curated selection, grouped by ceremony. Open any photograph to view it at full size.
          </p>
        </Reveal>
      </Container>

      <Container className="pb-24">
        <PortfolioGallery items={media} />
      </Container>

      <section className="border-t border-line py-24">
        <Container>
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl">Film</h2>
            <video
              className="mt-10 w-full bg-ink"
              controls
              preload="metadata"
              playsInline
              aria-label="Film from a Vivaha Creations celebration"
            >
              <source src="/assets/vedios/vedios-04.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
