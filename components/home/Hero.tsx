"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { getImageProps } from "next/image";
import Link from "next/link";
import { useRef, type PointerEvent } from "react";
import { GlowMotes } from "@/components/home/GlowMotes";
import { WordReveal, type Segment } from "@/components/motion/WordReveal";
import { Container } from "@/components/ui/Container";
import { celebrations } from "@/data/celebrations";
import { brandHero } from "@/lib/media";

const headline: readonly Segment[] = [
  { text: "Each celebration, designed around" },
  { text: "its own meaning.", emphasis: true },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "14%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.14]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "-12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, reduceMotion ? 1 : 0]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const driftX = useSpring(pointerX, { stiffness: 60, damping: 20 });
  const driftY = useSpring(pointerY, { stiffness: 60, damping: 20 });

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    pointerX.set(-((event.clientX - left) / width - 0.5) * 28);
    pointerY.set(-((event.clientY - top) / height - 0.5) * 18);
  }

  const common = { alt: brandHero.alt, fill: true, sizes: "100vw", fetchPriority: "high" } as const;
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: brandHero.desktop.src });
  const {
    props: { srcSet: mobileSrcSet, ...imageProps },
  } = getImageProps({ ...common, src: brandHero.mobile.src });

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative isolate h-svh min-h-[640px] overflow-hidden bg-wine text-wine-ink"
    >
      <motion.div className="absolute -inset-x-6 -inset-y-6 -z-20" style={{ y: imageY, scale: imageScale }}>
        <motion.div
          className="h-full w-full"
          style={{ x: driftX, y: driftY }}
          initial={reduceMotion ? false : { scale: 1.22 }}
          animate={{ scale: 1.06 }}
          transition={{ duration: 3.2, ease }}
        >
          <picture>
            <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
            <source srcSet={mobileSrcSet} />
            <img {...imageProps} alt={brandHero.alt} className="object-cover object-[28%_center] md:object-center" />
          </picture>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-linear-to-t from-wine/90 via-wine/25 to-wine/40 md:bg-linear-to-r md:from-wine/80 md:via-wine/25 md:to-transparent" />
      <div className="absolute inset-0 -z-10 hidden bg-linear-to-t from-wine/70 via-transparent to-transparent md:block" />
      <GlowMotes />

      <motion.div className="relative flex h-full flex-col justify-end" style={{ y: contentY, opacity: contentOpacity }}>
        <Container className="pb-10 md:pb-14">
          <WordReveal
            segments={headline}
            delay={0.7}
            className="max-w-4xl font-serif text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          />

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7, ease }}
          >
            <p className="mt-7 max-w-md text-base leading-relaxed text-wine-ink/85 md:text-lg">
              From the first conversation to the final farewell, every ritual, family and detail is designed with care.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-wine-ink px-7 py-3.5 text-sm text-wine transition-colors hover:bg-white"
              >
                Start an enquiry
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
              <Link
                href="/portfolio"
                className="border border-wine-ink/50 px-7 py-3.5 text-sm text-wine-ink transition-colors hover:border-wine-ink hover:bg-wine-ink/10"
              >
                View the portfolio
              </Link>
            </div>
          </motion.div>

          <motion.nav
            aria-label="Celebrations"
            className="mt-12 flex items-center justify-between gap-8 border-t border-wine-ink/25 pt-5"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 2.1 }}
          >
            <ul className="hidden flex-wrap gap-x-7 gap-y-2 text-xs uppercase tracking-[0.18em] text-wine-ink/75 md:flex">
              {celebrations.map((celebration) => (
                <li key={celebration.slug}>
                  <Link href={`/weddings-events/${celebration.slug}`} className="transition-colors hover:text-wine-ink">
                    {celebration.name.split(" ")[0]}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="#statement"
              className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-wine-ink/75 transition-colors hover:text-wine-ink"
            >
              Scroll
              <span aria-hidden className="relative block h-10 w-px overflow-hidden bg-wine-ink/25">
                <motion.span
                  className="absolute inset-x-0 top-0 h-1/2 bg-wine-ink"
                  animate={reduceMotion ? undefined : { y: ["-100%", "200%"] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
            </a>
          </motion.nav>
        </Container>
      </motion.div>
    </section>
  );
}
