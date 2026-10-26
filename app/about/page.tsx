import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description: "About Vivaha Creations.",
};

export default function AboutPage() {
  return (
    <Container className="py-24">
      <h1 className="font-serif text-3xl text-ink">About</h1>
      <p className="mt-4 max-w-xl text-ink-muted">Content coming soon.</p>
    </Container>
  );
}
