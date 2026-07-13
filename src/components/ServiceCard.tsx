import type { ReactNode } from "react";
import { Check } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  shortDescription: string;
  details: string[];
  id?: string;
}

export default function ServiceCard({ icon, title, shortDescription, details, id }: ServiceCardProps) {
  return (
    <article
      id={id}
      className="group rounded-3xl border border-border bg-card p-8 shadow-[0_25px_40px_-35px_rgba(59,36,26,0.95)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/55"
    >
      <div className="mb-6 inline-flex rounded-2xl border border-accent/35 bg-secondary p-4 text-primary transition-colors group-hover:bg-[#EFE4D7]">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-secondary-foreground">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">{shortDescription}</p>
      <ul className="mt-6 space-y-3 border-t border-border pt-6">
        {details.map((detail, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#5F6672]">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            {detail}
          </li>
        ))}
      </ul>
    </article>
  );
}
