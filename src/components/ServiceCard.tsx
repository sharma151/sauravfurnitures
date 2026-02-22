import type { ReactNode } from "react";

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
      className="group rounded-xl border border-border bg-card p-8 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
    >
      <div className="mb-6 inline-flex rounded-xl bg-highlight p-4 text-accent transition-colors group-hover:bg-accentLight/20 group-hover:text-accent">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primaryText">{title}</h3>
      <p className="mt-3 text-secondaryText">{shortDescription}</p>
      <ul className="mt-6 space-y-2">
        {details.map((detail, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-secondaryText">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {detail}
          </li>
        ))}
      </ul>
    </article>
  );
}
