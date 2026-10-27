import type { Metadata } from "next";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { celebrationBySlug } from "@/data/celebrations";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Begin a personal conversation about your wedding, engagement or family celebration with Vivaha Creations.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ event?: string }>;
}) {
  const { event } = await searchParams;
  const defaultEvent = event && celebrationBySlug(event) ? event : undefined;

  return (
    <>
      <Container className="pt-20 pb-14 md:pt-28">
        <Reveal className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Contact</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] md:text-6xl">Begin with a conversation.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Share what you know so far. Dates, guest numbers and venue can all be approximate; we will help you shape the
            rest.
          </p>
        </Reveal>
      </Container>

      <Container className="grid gap-14 pb-28 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-8">
          <EnquiryForm defaultEvent={defaultEvent} />
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-3 md:col-start-10 text-sm leading-relaxed text-ink-muted">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Email</p>
          <a href={`mailto:${siteConfig.email}`} className="mt-3 block text-ink hover:text-clay">
            {siteConfig.email}
          </a>
        </Reveal>
      </Container>
    </>
  );
}
