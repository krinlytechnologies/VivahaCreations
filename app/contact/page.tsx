import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vivaha Creations.",
};

export default function ContactPage() {
  return (
    <Container className="py-24">
      <h1 className="font-serif text-3xl text-ink">Contact</h1>
      <p className="mt-4 max-w-xl text-ink-muted">Content coming soon.</p>
    </Container>
  );
}
