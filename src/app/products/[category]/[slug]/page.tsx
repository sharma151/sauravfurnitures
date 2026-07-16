import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb, { type BreadcrumbItem } from "@/components/Breadcrumb";
import ProductGallery from "@/components/ProductGallery";
import {
  getProductBySlug,
  getProductsByCategory,
  getCategoryBySlug,
} from "@/lib/data";
import CategoryProducts from "../CategoryProducts";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProductBySlug(category, slug);
  const cat = getCategoryBySlug(category);
  if (product) {
    return {
      title: product.name,
      description: product.shortDescription,
      openGraph: {
        title: product.name,
        description: product.shortDescription,
        images: product.images,
      },
    };
  }
  if (cat) {
    const sub = cat.subcategories.find((s) => s.slug === slug);
    const title = sub ? `${sub.name} | ${cat.name}` : cat.name;
    return { title, description: `Explore ${title} at Saurav Furnitures` };
  }
  return { title: "Products" };
}

export default async function SlugPage({ params }: PageProps) {
  const { category, slug } = await params;
  const product = getProductBySlug(category, slug);
  const cat = getCategoryBySlug(category);

  if (!cat) notFound();

  // Product detail page
  if (product) {
    const subcategoryName =
      cat.subcategories.find((s) => s.slug === product.subcategory)?.name ||
      product.subcategory;

    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Home", href: "/" },
      { label: cat.name, href: `/products/${category}` },
      ...(product.subcategory !== "all"
        ? [
            {
              label: subcategoryName,
              href: `/products/${category}/${product.subcategory}`,
            },
          ]
        : []),
      { label: product.name, href: undefined },
    ];

    const images =
      product.images.length > 0 ? product.images : ["/images/placeholder.svg"];
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.description,
      image: product.images,
      offers: {
        "@type": "Offer",
        price: product.price,
        priceCurrency: product.currency,
        availability:
          product.stock > 0
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: product.reviews,
      },
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 pb-24 lg:pb-8">
          <Breadcrumb items={breadcrumbs} />

          <div className="mt-8 flex flex-col lg:grid lg:grid-cols-[1fr_1fr] gap-12 lg:items-start">
            {/* 🖼 IMAGE SECTION */}
            <ProductGallery images={images} productName={product.name} />

            {/* 📄 CONTENT SECTION */}
            <div className="relative flex flex-col h-full">
              <div className="flex-1 pb-12">
                <h1 className="text-3xl font-bold text-primaryText">
                  {product.name}
                </h1>
                <div className="mt-4 flex items-center gap-4">
                  <span className="flex items-center gap-1 text-amber-600">
                    <svg className="h-5 w-5 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {product.rating} ({product.reviews} reviews)
                  </span>
                  <span className="text-sm text-secondaryText">
                    {product.deliveryTime} delivery
                  </span>
                </div>
                <p className="mt-6 text-2xl font-semibold text-cta">
                  ${product.price.toLocaleString()}
                </p>
                <p className="mt-6 text-secondaryText">{product.description}</p>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-semibold text-primaryText">Features</h3>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {product.features.map((f, i) => (
                        <li
                          key={i}
                          className="rounded-full bg-highlight px-3 py-1 text-sm text-primaryText"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primaryText">
                      Dimensions
                    </h3>
                    <p className="mt-1 text-secondaryText">
                      {product.dimensions.length} × {product.dimensions.width} ×{" "}
                      {product.dimensions.height}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primaryText">
                      Materials
                    </h3>
                    <p className="mt-1 text-secondaryText">
                      {product.materials.join(", ")}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primaryText">Care</h3>
                    <p className="mt-1 text-secondaryText">
                      {product.careInstructions}
                    </p>
                  </div>
                </div>

                {/* Catalog Note */}
                <div className="mt-8 flex items-start gap-3 rounded-lg bg-accent/5 border border-accent/20 p-4">
                  <svg
                    className="w-5 h-5 text-accent shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm text-secondaryText leading-relaxed">
                    <strong className="text-primaryText font-medium">
                      Made to Order:
                    </strong>{" "}
                    The products displayed in our catalog showcase our design
                    and manufacturing capabilities. We craft each piece
                    specifically for you. Please contact us to place an order.
                    Customizations in dimensions, materials, and finishes are
                    welcome, and pricing may vary accordingly.
                  </p>
                </div>

                {/* <Link
                  href={`/products/${category}`}
                  className="mt-6 block text-center text-sm text-secondaryText hover:text-accent pb-6"
                >
                  ← Back to {cat.name}
                </Link> */}
              </div>

              {/* STICKY CTA */}
              <div className="fixed bottom-0 left-0 w-full lg:sticky lg:bottom-0 bg-background/95 backdrop-blur border-t border-border p-4 z-50">
                <Link
                  href={`/contact?type=Product%20Inquiry&category=${encodeURIComponent(product.category)}&subcategory=${encodeURIComponent(product.subcategory)}&product=${encodeURIComponent(product.name)}`}
                  className="flex items-center justify-center w-full bg-accent text-white py-4 rounded-xl font-medium hover:bg-accent/90 transition-colors shadow-lg"
                >
                  Enquire About This Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Subcategory listing page
  const sub = cat.subcategories.find((s) => s.slug === slug);
  if (!sub) notFound();

  const products = getProductsByCategory(category, slug);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: cat.name, href: `/products/${category}` },
    { label: sub.name, href: undefined },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={breadcrumbs} />
      <h1 className="text-3xl font-bold text-primaryText">{sub.name}</h1>
      <p className="mt-2 text-secondaryText">
        {products.length} {products.length === 1 ? "product" : "products"} found
      </p>
      <CategoryProducts products={products} categorySlug={category} />
    </div>
  );
}
