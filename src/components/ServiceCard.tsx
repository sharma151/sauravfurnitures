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
      className="group rounded-3xl border border-[#E8DCCF] bg-[#FFFCF8] p-8 shadow-[0_25px_40px_-35px_rgba(59,36,26,0.95)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A77D]/55"
    >
      <div className="mb-6 inline-flex rounded-2xl border border-[#C6A77D]/35 bg-[#F7F3EE] p-4 text-[#5B3A29] transition-colors group-hover:bg-[#EFE4D7]">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-[#3B241A]">{title}</h3>
      <p className="mt-3 leading-relaxed text-[#6B7280]">{shortDescription}</p>
      <ul className="mt-6 space-y-3 border-t border-[#E8DCCF] pt-6">
        {details.map((detail, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#5F6672]">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A77D]" aria-hidden="true" />
            {detail}
          </li>
        ))}
      </ul>
    </article>
  );
}
