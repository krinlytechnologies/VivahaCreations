"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function ParallaxImage({
  src,
  alt,
  sizes,
  strength = 10,
  preload = false,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  strength?: number;
  preload?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : [`${-strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div className="absolute inset-x-0" style={{ y, top: `${-strength}%`, bottom: `${-strength}%` }}>
        <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className="object-cover" />
      </motion.div>
    </div>
  );
}
