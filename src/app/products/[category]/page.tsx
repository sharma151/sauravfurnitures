import { notFound } from "next/navigation";
import { type Metadata } from "next";
import Breadcrumb, { type BreadcrumbItem } from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import {
  getProductsByCategory,
  getCategoryBySlug,
  getCategories,
} from "@/lib/data";
import ProductGrid from "@/components/ProductGrid";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Products" };
  return {
    title: cat.name,
    description: `Explore our custom ${cat.name} collection. Handcrafted furniture manufacturing and restoration services.`,
    openGraph: {
      title: `${cat.name} | Saurav Furnitures`,
      description: `Explore our custom ${cat.name} collection. Handcrafted furniture manufacturing and restoration services.`,
    },
  };
}

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((c) => ({ category: c.slug }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const products = getProductsByCategory(category);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: cat.name, href: undefined },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-12 border-b border-border pb-8">
        <Breadcrumb items={breadcrumbs} />
        <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl">
              {cat.name}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              {cat?.description}
            </p>
          </div>
          <div className="mt-6 sm:mt-0">
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-secondary-foreground">
              {products.length} Products
            </span>
          </div>
        </div>
      </header>

      <ProductGrid products={products} />
    </main>
  );
}
