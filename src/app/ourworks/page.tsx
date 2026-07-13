"use client";

import { useState } from "react";
import productsData from "@/data/ourworks-data.json";
import Image from "next/image";

export default function OurWorks() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const works = productsData;

  return (
    <main className="min-h-screen bg-inherit py-12 px-4 md:px-8">
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Works</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Click on any project to view the craftsmanship in detail.
        </p>
      </header>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((project) => (
          <div key={project.id} className="group flex flex-col space-y-3">
            <div
              className="relative aspect-video overflow-hidden rounded-2xl bg-gray-100 cursor-zoom-in"
              onClick={() => setSelectedImage(project.images[0])}
            >
              <Image
                src={project.images[0]}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="px-1">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-sm text-muted-foreground">
                {project.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* --- Image Modal Overlay --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-4xl font-light hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>

          {/* Large Image Container */}
          <div className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image
              src={selectedImage}
              alt="Enlarged work"
              fill
              className="object-contain" // Ensures the whole image is visible without cropping
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
