import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollText } from "@/components/motion/ScrollText";
import { Chapters } from "@/components/home/Chapters";
import { Hero } from "@/components/home/Hero";
import { altFor, mediaFor } from "@/lib/media";

const process = [
  {
    step: "01",
    title: "Listen",
    body: "We begin with the people: the families, the traditions they keep, and the feeling they want guests to carry home.",
  },
  {
    step: "02",
    title: "Design",
    body: "We shape a concept for the spaces, the rituals and the rhythm of the day, then refine it until every detail earns its place.",
  },
  {
    step: "03",
    title: "Realise",
    body: "We oversee the making, the setting and the flow, so the celebration unfolds as designed and nobody has to think about logistics.",
  },
];

export default function HomePage() {
  const [pairLarge] = mediaFor(["selected"]);
  const [, pairSmall] = mediaFor(["details"]);

  return (
    <>
      <Hero />

      <section id="statement" className="relative isolate scroll-mt-20 py-32 md:py-52">
        <ParallaxImage
          src="/assets/images/celebrations/weddings/wedding-01.webp"
          alt=""
          sizes="100vw"
          strength={10}
          className="absolute inset-0 -z-20"
        />
        <div className="absolute inset-0 -z-10 bg-surface/85" />
        <Container>
          <ScrollText
            className="max-w-4xl font-serif text-3xl leading-snug text-ink md:text-5xl md:leading-[1.2]"
            text="A wedding arrives with its own rituals, families and rhythm. We begin there, not with a package."
          />
        </Container>
      </section>

      <Chapters />

      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-10 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-7">
              <ParallaxImage src={pairLarge.src} alt={altFor(pairLarge)} sizes="(min-width: 768px) 58vw, 100vw" className="relative aspect-[4/5]" />
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-4 md:col-start-9 md:mt-32">
              <ParallaxImage src={pairSmall.src} alt={altFor(pairSmall)} sizes="(min-width: 768px) 33vw, 80vw" strength={14} className="relative aspect-[3/4]" />
              <p className="mt-4 text-sm text-ink-muted">
                Detail from a Vivaha Creations celebration.{" "}
                <Link href="/portfolio" className="text-clay hover:underline">
                  View the portfolio
                </Link>
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl">How we work</h2>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.1}>
                <p className="text-xs tabular-nums text-gold">{item.step}</p>
                <h3 className="mt-3 font-serif text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-wine py-24 text-wine-ink md:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Tell us about the celebration you are imagining.
            </h2>
            <p className="mt-6 text-wine-ink/80">
              A short conversation is the best place to begin. We will ask about your families, your traditions and
              the feeling you want to create.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-block bg-wine-ink px-6 py-3 text-sm text-wine transition-opacity hover:opacity-90"
            >
              Begin a conversation
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
