import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-ink-muted">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. {siteConfig.tagline}.
        </p>
      </div>
    </footer>
  );
}
