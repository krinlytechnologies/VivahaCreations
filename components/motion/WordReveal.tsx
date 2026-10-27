"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Fragment } from "react";
import { cn } from "@/lib/utils";

export type Segment = { text: string; emphasis?: boolean };

export function WordReveal({
  segments,
  delay = 0,
  className,
}: {
  segments: readonly Segment[];
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  let index = 0;

  return (
    <h1 className={className}>
      {segments.flatMap((segment) =>
        segment.text.split(" ").map((word) => {
          const order = index++;
          return (
            <Fragment key={order}>
              <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
              <motion.span
                  className={cn("inline-block", segment.emphasis && "italic")}
                  initial={reduceMotion ? false : { y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: delay + order * 0.09, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>{" "}
            </Fragment>
          );
        }),
      )}
    </h1>
  );
}
