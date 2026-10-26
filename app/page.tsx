import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <Container className="py-24">
      <h1 className="font-serif text-4xl text-ink">{siteConfig.name}</h1>
      <p className="mt-4 max-w-xl text-ink-muted">{siteConfig.description}</p>
    </Container>
  );
}
