import { Armchair, Search } from "lucide-react";
import PremiumButton from "@/components/luxury/PremiumButton";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-8 flex items-center justify-center">
        <div className="absolute h-32 w-32 animate-pulse rounded-full bg-accent/10 blur-xl" />
        <Armchair className="relative h-20 w-20 text-primary" strokeWidth={1} />
        <Search className="absolute -bottom-2 -right-2 h-8 w-8 text-accent" strokeWidth={1.5} />
      </div>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl">
        This Room is Empty
      </h1>
      <p className="mb-8 max-w-lg text-lg text-muted-foreground">
        We've looked under the cushions and behind the cabinets, but we can't find the page you're looking for.
      </p>
      <div className="flex flex-col justify-center sm:flex-row gap-4">
        <PremiumButton href="/">Return to Showroom</PremiumButton>
        <PremiumButton href="/products/living-room" variant="secondary">
          Browse Living Room
        </PremiumButton>
      </div>
    </div>
  );
}
