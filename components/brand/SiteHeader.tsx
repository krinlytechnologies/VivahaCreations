"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 32));

  const isHome = pathname === "/";
  const overHero = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-40 transition-colors duration-500",
        isHome ? "fixed" : "sticky",
        overHero
          ? "border-b border-transparent bg-transparent text-wine-ink"
          : "border-b border-line bg-surface/95 text-ink backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20">
        <Link href="/" className="font-serif text-xl tracking-tight" onClick={() => setMenuOpen(false)}>
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-8 text-sm">
            {primaryNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "transition-opacity hover:opacity-100",
                      active ? "opacity-100" : "opacity-70",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-sm md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen ? (
        <nav id="mobile-navigation" aria-label="Mobile" className="border-t border-line bg-surface text-ink md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className="block py-3 font-serif text-2xl"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
