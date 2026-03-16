"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Product } from "@/types";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!product) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [product?.id]);

  if (!product) return null;

  const images = product.images.length > 0 ? product.images : ["/images/placeholder.svg"];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-card shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-card/90 p-2 text-primaryText shadow-md transition-colors hover:bg-highlight hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          aria-label="Close modal"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-section">
              <Image
                src={images[activeImageIndex]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                      activeImageIndex === idx ? "border-accent" : "border-transparent hover:border-border"
                    }`}
                  >
                    <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <h2 id="modal-title" className="text-2xl font-bold text-primaryText">
              {product.name}
            </h2>
            <div className="mt-2 flex items-center gap-4">
              <span className="flex items-center gap-1 text-secondaryText">
                <svg className="h-5 w-5 fill-amber-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {product.rating} ({product.reviews} reviews)
              </span>
              <span className="text-sm text-secondaryText">Delivery: {product.deliveryTime}</span>
            </div>
            <p className="mt-4 text-2xl font-semibold text-cta">${product.price.toLocaleString()}</p>
            <p className="mt-4 text-secondaryText">{product.description}</p>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-semibold text-primaryText">Features</h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="rounded-full bg-highlight px-3 py-1 text-sm text-primaryText">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primaryText">Dimensions</h4>
                <p className="mt-1 text-sm text-secondaryText">
                  {product.dimensions.length} × {product.dimensions.width} × {product.dimensions.height}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primaryText">Materials</h4>
                <p className="mt-1 text-sm text-secondaryText">{product.materials.join(", ")}</p>
              </div>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-lg bg-cta px-6 py-4 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-ctaHover"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
