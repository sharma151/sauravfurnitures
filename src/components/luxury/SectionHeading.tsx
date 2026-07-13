import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <header className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow && (
        <p className="inline-flex rounded-full border border-accent/35 bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold leading-tight text-secondary-foreground sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>}
    </header>
  );
}
