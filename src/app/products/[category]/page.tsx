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
import CategoryProducts from "./CategoryProducts";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Products" };
  return {
    title: cat.name,
    description: `Explore our ${cat.name} collection. Premium furniture with Trust, Comfort & Experience.`,
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
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={breadcrumbs} />
      <h1 className="text-3xl font-bold text-primaryText">{cat.name}</h1>
      <p className="mt-2 text-secondaryText">
        {products.length} {products.length === 1 ? "product" : "products"} found
      </p>
      <CategoryProducts products={products} categorySlug={category} />
    </div>
  );
}
