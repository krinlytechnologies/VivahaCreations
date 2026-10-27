import Link from "next/link";
import { primaryNav, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-ink">{siteConfig.name}</p>
          <p className="mt-3 max-w-xs text-sm text-ink-muted">{siteConfig.tagline}.</p>
        </div>
        <nav aria-label="Footer" className="md:justify-self-center">
          <ul className="grid gap-2 text-sm text-ink-muted">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm text-ink-muted md:justify-self-end">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">
            {siteConfig.email}
          </a>
          <p className="mt-6">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
