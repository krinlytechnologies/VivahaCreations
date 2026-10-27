import type { CSSProperties } from "react";

const motes = [
  { x: 8, size: 10, duration: 14, delay: 0, sway: 24, opacity: 0.7 },
  { x: 15, size: 6, duration: 11, delay: 3, sway: -18, opacity: 0.6 },
  { x: 24, size: 14, duration: 17, delay: 6, sway: 30, opacity: 0.55 },
  { x: 33, size: 8, duration: 12, delay: 1.5, sway: -26, opacity: 0.7 },
  { x: 41, size: 5, duration: 10, delay: 8, sway: 14, opacity: 0.65 },
  { x: 52, size: 12, duration: 16, delay: 4, sway: -30, opacity: 0.5 },
  { x: 61, size: 7, duration: 13, delay: 9, sway: 20, opacity: 0.7 },
  { x: 70, size: 10, duration: 15, delay: 2, sway: -22, opacity: 0.6 },
  { x: 78, size: 6, duration: 11, delay: 7, sway: 18, opacity: 0.65 },
  { x: 86, size: 13, duration: 18, delay: 5, sway: -28, opacity: 0.5 },
  { x: 93, size: 8, duration: 12, delay: 10, sway: 16, opacity: 0.6 },
] as const;

export function GlowMotes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-screen">
      {motes.map((mote, index) => (
        <span
          key={index}
          className="mote"
          style={
            {
              "--mote-x": `${mote.x}%`,
              "--mote-size": `${mote.size}px`,
              "--mote-duration": `${mote.duration}s`,
              "--mote-delay": `${mote.delay}s`,
              "--mote-sway": `${mote.sway}px`,
              "--mote-opacity": mote.opacity,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
