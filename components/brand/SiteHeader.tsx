import Link from "next/link";
import { primaryNav, siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-lg tracking-wide text-ink">
          {siteConfig.name}
        </Link>
        <nav className="flex gap-6 text-sm text-ink-muted">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
