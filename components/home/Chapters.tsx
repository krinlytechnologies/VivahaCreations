import Link from "next/link";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { celebrationBySlug } from "@/data/celebrations";
import { chapters, type Chapter } from "@/data/chapters";
import { cn } from "@/lib/utils";

const toneClass = { wine: "bg-wine", ink: "bg-ink" } as const;

function ChapterBackground({ chapter, name }: { chapter: Chapter; name: string }) {
  if (!chapter.image) return null;
  const alt = `${name} design by Vivaha Creations`;
  const { desktop, mobile = desktop } = chapter.image;
  return (
    <>
      <ParallaxImage src={mobile} alt={alt} sizes="100vw" strength={12} className="absolute inset-0 -z-20 md:hidden" />
      <ParallaxImage
        src={desktop}
        alt={alt}
        sizes="100vw"
        strength={12}
        className="absolute inset-0 -z-20 hidden md:block"
      />
    </>
  );
}

function ChapterPanel({ chapter, position }: { chapter: Chapter; position: number }) {
  const celebration = celebrationBySlug(chapter.slug);
  if (!celebration) return null;

  return (
    <section
      className={cn(
        "sticky top-0 isolate flex h-svh min-h-[560px] items-end overflow-hidden text-wine-ink shadow-[0_-24px_60px_-12px_rgb(35_32_25/0.35)]",
        toneClass[chapter.tone],
      )}
    >
      <ChapterBackground chapter={chapter} name={celebration.name} />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-wine/90 via-wine/30 to-wine/10" />
      <Container className="pb-12 md:pb-16">
        <Reveal className="max-w-xl">
          <p className="text-xs tabular-nums tracking-[0.28em] text-wine-ink/80">
            {String(position).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">{celebration.name}</h2>
          <p className="mt-4 text-base leading-relaxed text-wine-ink/85">{celebration.summary}</p>
          <Link
            href={`/weddings-events/${celebration.slug}`}
            className="mt-7 inline-flex items-center gap-3 border-b border-wine-ink/60 pb-1 text-sm transition-colors hover:border-wine-ink"
          >
            Read the story <span aria-hidden>&rarr;</span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

export function Chapters() {
  return (
    <div>
      {chapters.map((chapter, index) => (
        <ChapterPanel key={chapter.slug} chapter={chapter} position={index + 1} />
      ))}
    </div>
  );
}
