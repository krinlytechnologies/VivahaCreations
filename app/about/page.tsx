import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "The philosophy behind Vivaha Creations: celebrations designed around the families, traditions and feelings they hold.",
};

export default function AboutPage() {
  return (
    <>
      <Container className="pt-20 pb-16 md:pt-28">
        <Reveal className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">About</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] md:text-6xl">
            Celebrations should feel like they could only have happened in one family&rsquo;s home.
          </h1>
        </Reveal>
      </Container>

      <Container className="grid gap-12 border-t border-line pt-14 pb-24 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-5">
          <h2 className="font-serif text-2xl text-ink">Our approach</h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-ink-muted md:col-span-6 md:col-start-7">
          <p>
            We begin with the people. Every family carries its own rituals, its own sense of what matters, and its own
            idea of joy. Our work is to translate those into spaces, rhythms and details that guests recognise
            immediately.
          </p>
          <p>
            We do not sell fixed packages. Each celebration is designed from its first conversation, so the decor, the
            ceremony and the flow of the day belong to the people celebrating.
          </p>
          <p>
            Culture is a source of richness, not decoration. We learn the meaning behind a ritual before we design around
            it, and we ask families to tell us what they want to preserve.
          </p>
          <p>
            <Link href="/contact" className="text-clay hover:underline">
              Begin a conversation
            </Link>
          </p>
        </Reveal>
      </Container>
    </>
  );
}
