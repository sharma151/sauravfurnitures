import { Hammer } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center p-8">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-20 w-20 animate-ping rounded-full border-2 border-accent/40" />
          <div className="absolute h-24 w-24 animate-pulse rounded-full border border-primary/20" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-secondary shadow-lg">
            <Hammer className="h-7 w-7 animate-bounce text-primary" strokeWidth={1.5} />
          </div>
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground animate-pulse">
          Crafting your experience...
        </p>
      </div>
    </div>
  );
}
