import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <article className="rounded-3xl border border-[#E8DCCF] bg-[#FFFCF8] p-8 shadow-[0_24px_50px_-42px_rgba(59,36,26,0.75)]">
      <Quote className="h-6 w-6 text-[#C6A77D]" aria-hidden="true" />
      <p className="mt-4 text-base leading-relaxed text-[#2B2B2B]">{quote}</p>
      <div className="mt-6 border-t border-[#E8DCCF] pt-4">
        <p className="font-semibold text-[#3B241A]">{author}</p>
        <p className="text-sm text-[#6B7280]">{role}</p>
      </div>
    </article>
  );
}
