"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import type { MediaItem } from "@/data/media";
import { altFor, categoryLabels, portfolioFilters } from "@/lib/media";
import { cn } from "@/lib/utils";

export function PortfolioGallery({ items }: { items: readonly MediaItem[] }) {
  const [filterIndex, setFilterIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const categories = portfolioFilters[filterIndex].categories;
  const visible = categories ? items.filter((item) => categories.includes(item.category)) : items;
  const active = activeIndex === null ? null : visible[activeIndex];

  function open(index: number) {
    setActiveIndex(index);
    dialogRef.current?.showModal();
  }

  function step(delta: number) {
    setActiveIndex((index) => {
      if (index === null) return null;
      return (index + delta + visible.length) % visible.length;
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  }

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by celebration">
        {portfolioFilters.map((filter, index) => {
          const pressed = index === filterIndex;
          return (
            <button
              key={filter.label}
              type="button"
              aria-pressed={pressed}
              onClick={() => setFilterIndex(index)}
              className={cn(
                "border px-4 py-2 text-sm transition-colors",
                pressed ? "border-wine bg-wine text-wine-ink" : "border-line text-ink-muted hover:border-ink hover:text-ink",
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {visible.map((item, index) => (
          <li key={item.src} className="mb-6 break-inside-avoid">
            <button
              type="button"
              onClick={() => open(index)}
              className="group block w-full cursor-zoom-in"
              aria-label={`Open ${categoryLabels[item.category]} photograph ${index + 1} of ${visible.length}`}
            >
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt={altFor(item)}
                sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw"
                className="h-auto w-full transition-opacity duration-500 group-hover:opacity-90"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setActiveIndex(null)}
        onKeyDown={handleKeyDown}
        aria-label="Photograph viewer"
        className="m-auto max-h-none w-[min(96vw,72rem)] bg-surface p-0 text-ink backdrop:bg-wine/95"
      >
        {active ? (
          <div className="flex flex-col">
            <div className="flex items-center justify-between border-b border-line px-5 py-3 text-sm text-ink-muted">
              <span>
                {categoryLabels[active.category]} · {(activeIndex ?? 0) + 1} / {visible.length}
              </span>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="px-2 py-1 text-ink hover:text-clay"
              >
                Close
              </button>
            </div>
            <div className="relative flex items-center justify-center bg-surface-raised p-4 md:p-8">
              <Image
                src={active.src}
                width={active.width}
                height={active.height}
                alt={altFor(active)}
                sizes="90vw"
                className="h-auto max-h-[72svh] w-auto max-w-full"
              />
            </div>
            <div className="flex justify-between px-5 py-3 text-sm">
              <button type="button" onClick={() => step(-1)} className="px-2 py-1 text-ink hover:text-clay">
                Previous
              </button>
              <button type="button" onClick={() => step(1)} className="px-2 py-1 text-ink hover:text-clay">
                Next
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
