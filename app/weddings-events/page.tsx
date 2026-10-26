import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Weddings & Events",
  description: "Wedding, engagement and reception planning by Vivaha Creations.",
};

export default function WeddingsEventsPage() {
  return (
    <Container className="py-24">
      <h1 className="font-serif text-3xl text-ink">Weddings & Events</h1>
      <p className="mt-4 max-w-xl text-ink-muted">Content coming soon.</p>
    </Container>
  );
}
