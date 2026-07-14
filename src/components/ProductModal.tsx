"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Info } from "lucide-react";
import type { Product } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [product?.id]);

  if (!product) return null;

  const images =
    product.images.length > 0 ? product.images : ["/images/placeholder.svg"];

  return (
    <Dialog open={!!product} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col md:grid md:grid-cols-[1fr_0.9fr] h-[85vh]">
          {/* 🖼 IMAGE SECTION */}
          <div className="flex flex-col bg-black/5 md:h-full md:overflow-hidden">
            {/* Main Image */}
            <div className="relative w-full h-[40vh] md:h-full">
              <Image
                src={images[activeImageIndex]}
                alt={product.name}
                fill
                className="object-cover md:object-contain"
                priority
              />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 p-3 border-t bg-background overflow-x-auto md:overflow-visible md:flex-wrap md:justify-center">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative h-14 w-14 shrink-0 rounded-md overflow-hidden border-2 ${
                      activeImageIndex === idx
                        ? "border-accent"
                        : "border-transparent"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 📄 CONTENT SECTION */}
          <div className="flex flex-col h-[60vh] md:h-full overflow-y-auto px-4 pt-5 pb-[calc(5rem+env(safe-area-inset-bottom))] md:px-10 md:pt-10 md:pb-24">
            <h2 className="text-xl md:text-3xl font-bold text-primaryText">
              {product.name}
            </h2>

            <p className="mt-3 text-sm md:text-base text-secondaryText leading-relaxed">
              {product.description}
            </p>

            <div className="mt-6 space-y-6">
              {/* Features */}
              <div>
                <h4 className="font-semibold text-primaryText">Features</h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {product.features.map((f, i) => (
                    <li
                      key={i}
                      className="rounded-full bg-highlight px-3 py-1 text-xs md:text-sm"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-primaryText">Dimensions</h4>
                  <p className="mt-1 text-xs md:text-sm text-secondaryText">
                    {product.dimensions.length} × {product.dimensions.width} ×{" "}
                    {product.dimensions.height}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primaryText">Materials</h4>
                  <p className="mt-1 text-xs md:text-sm text-secondaryText">
                    {product.materials.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Catalog Note */}
            <div className="mt-8 flex items-start gap-3 rounded-lg bg-accent/5 border border-accent/20 p-4">
              <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-secondaryText leading-relaxed">
                <strong className="text-primaryText font-medium">Made to Order:</strong> The products displayed in our catalog showcase our design and manufacturing capabilities. We craft each piece specifically for you. Please contact us to place an order. Customizations in dimensions, materials, and finishes are welcome, and pricing may vary accordingly.
              </p>
            </div>
          </div>
        </div>

        {/* 🔥 STICKY CTA (Mobile Only) */}
        {/* <div className="fixed bottom-0 left-0 w-full md:hidden bg-background border-t px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <button className="w-full bg-accent text-white py-3 rounded-lg font-semibold">
            Enquire Now
          </button>
        </div> */}
      </DialogContent>
    </Dialog>
  );
}
