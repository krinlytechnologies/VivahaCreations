import Image from "next/image";
import type { MediaItem } from "@/data/media";
import { altFor } from "@/lib/media";
import { cn } from "@/lib/utils";

export function Photo({
  item,
  sizes,
  preload = false,
  className,
}: {
  item: MediaItem;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={item.src}
      width={item.width}
      height={item.height}
      alt={altFor(item)}
      sizes={sizes}
      preload={preload}
      className={cn("h-auto w-full", className)}
    />
  );
}
