"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import PremiumButton from "@/components/luxury/PremiumButton";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error("Global Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 px-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground">
          Something went wrong
        </h2>
        <p className="text-muted-foreground">
          An unexpected error occurred while loading this page.
        </p>
      </div>
      <div className="flex gap-4">
        <PremiumButton onClick={() => reset()} size="lg">
          Try again
        </PremiumButton>
        <PremiumButton href="/" variant="secondary" size="lg">
          Return Home
        </PremiumButton>
      </div>
    </div>
  );
}
