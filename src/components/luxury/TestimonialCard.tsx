import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <article className="rounded-3xl border border-border bg-card p-8 shadow-[0_24px_50px_-42px_rgba(59,36,26,0.75)]">
      <Quote className="h-6 w-6 text-accent" aria-hidden="true" />
      <p className="mt-4 text-base leading-relaxed text-foreground">{quote}</p>
      <div className="mt-6 border-t border-border pt-4">
        <p className="font-semibold text-secondary-foreground">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </article>
  );
}
