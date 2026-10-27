import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/media/Photo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { celebrationBySlug, celebrations } from "@/data/celebrations";
import { mediaFor } from "@/lib/media";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return celebrations.map((celebration) => ({ slug: celebration.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const celebration = celebrationBySlug(slug);
  if (!celebration) return {};
  return {
    title: celebration.name,
    description: celebration.summary,
  };
}

export default async function CelebrationPage({ params }: PageProps) {
  const { slug } = await params;
  const celebration = celebrationBySlug(slug);
  if (!celebration) notFound();

  const images = mediaFor(celebration.mediaCategories);
  const [lead, ...rest] = images;

  return (
    <>
      <Container className="pt-20 pb-14 md:pt-28">
        <Reveal className="max-w-3xl">
          <Link href="/weddings-events" className="text-sm text-clay hover:underline">
            All celebrations
          </Link>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] md:text-7xl">{celebration.name}</h1>
          <p className="mt-8 font-serif text-2xl leading-snug text-ink md:text-3xl">{celebration.summary}</p>
        </Reveal>
      </Container>

      <Container className="grid gap-12 border-t border-line pt-14 pb-24 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-4">
          <h2 className="text-xs uppercase tracking-[0.2em] text-gold">The tradition</h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
          <p className="text-lg leading-relaxed text-ink-muted">{celebration.tradition}</p>
        </Reveal>
      </Container>

      {lead ? (
        <Container className="pb-24">
          <Reveal>
            <Photo item={lead} sizes="(min-width: 1152px) 1152px, 100vw" preload />
          </Reveal>
          {rest.length > 0 ? (
            <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-8">
              {rest.map((item, index) => (
                <Reveal
                  key={item.src}
                  delay={index * 0.1}
                  className={index % 2 === 0 ? "md:col-span-6" : "md:col-span-5 md:col-start-8 md:mt-24"}
                >
                  <Photo item={item} sizes="(min-width: 768px) 50vw, 100vw" />
                </Reveal>
              ))}
            </div>
          ) : null}
        </Container>
      ) : null}

      <section className="bg-wine py-24 text-wine-ink">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Plan your {celebration.name.toLowerCase()} with us.
            </h2>
            <p className="mt-6 text-wine-ink/80">
              Tell us about your families, your dates and the feeling you want. We will reply with the next steps.
            </p>
            <Link
              href={`/contact?event=${celebration.slug}`}
              className="mt-10 inline-block bg-wine-ink px-6 py-3 text-sm text-wine transition-opacity hover:opacity-90"
            >
              Enquire about this celebration
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
