"use client";

import { useState } from "react";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="space-y-4 lg:sticky lg:top-24">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-section luxury-shimmer">
        <ImageWithSkeleton
          src={images[activeImageIndex]}
          alt={productName}
          fill
          className="object-contain p-2"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImageIndex(i)}
              aria-label={`View ${productName} image ${i + 1}`}
              className={`relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-colors luxury-shimmer ${
                activeImageIndex === i ? "border-accent" : "border-transparent"
              }`}
            >
              <ImageWithSkeleton 
                src={img} 
                alt={`${productName} thumbnail ${i + 1}`} 
                fill 
                className="object-cover" 
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
