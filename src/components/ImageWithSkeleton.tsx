"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export default function ImageWithSkeleton({
  className,
  alt,
  ...props
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Image
      alt={alt}
      className={cn(
        "transition-all duration-700 ease-in-out",
        isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-md",
        className
      )}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  );
}
