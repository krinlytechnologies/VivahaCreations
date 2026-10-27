import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { celebrations } from "@/data/celebrations";

export const metadata: Metadata = {
  title: "Weddings & Events",
  description:
    "Weddings, engagements, haldi, mehendi, sangeet, receptions and baby showers, each designed around its own rituals and meaning.",
};

export default function WeddingsEventsPage() {
  return (
    <>
      <Container className="pt-20 pb-16 md:pt-28">
        <Reveal className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Weddings & Events</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] md:text-6xl">
            The celebrations we design, one by one.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Each occasion has its own rituals, families and rhythm. Choose a celebration to read how we approach it, or
            start a conversation about several at once.
          </p>
        </Reveal>
      </Container>

      <Container className="pb-28">
        <ol className="border-t border-line">
          {celebrations.map((celebration, index) => (
            <Reveal key={celebration.slug}>
              <li>
                <Link
                  href={`/weddings-events/${celebration.slug}`}
                  className="group grid gap-3 border-b border-line py-10 md:grid-cols-[5rem_1fr_1.4fr_auto] md:items-baseline md:gap-8"
                >
                  <span className="text-xs tabular-nums text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-3xl text-ink transition-colors group-hover:text-clay md:text-4xl">
                    {celebration.name}
                  </span>
                  <span className="text-base leading-relaxed text-ink-muted">{celebration.summary}</span>
                  <span className="text-sm text-clay group-hover:underline">Read the story</span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </>
  );
}
