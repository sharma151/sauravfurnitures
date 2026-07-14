import { type Metadata } from "next";
import Breadcrumb, { type BreadcrumbItem } from "@/components/Breadcrumb";
import { getProducts } from "@/lib/data";
import ProductGrid from "@/components/ProductGrid";
import { Search } from "lucide-react";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `Search results for "${q}"` : "Search Products",
    description: "Search our custom furniture collection.",
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = (q || "").trim().toLowerCase();
  
  const allProducts = getProducts();
  
  const normalize = (str: string) => {
    let normalized = str.toLowerCase().replace(/[\s-]/g, '');
    if (normalized.endsWith('s') && !normalized.endsWith('ss')) {
      normalized = normalized.slice(0, -1);
    }
    return normalized;
  };
  const normQuery = normalize(query);
  
  const filteredProducts = query
    ? allProducts.filter((p) => {
        const nameMatch = normalize(p.name).includes(normQuery);
        const catMatch = normalize(p.category).includes(normQuery);
        const subMatch = normalize(p.subcategory).includes(normQuery);
        const descMatch = normalize(p.shortDescription).includes(normQuery);
        
        return nameMatch || catMatch || subMatch || descMatch;
      })
    : [];

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Search", href: undefined },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-[60vh]">
      <header className="mb-12 border-b border-border pb-8">
        <Breadcrumb items={breadcrumbs} />
        <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl flex items-center gap-3">
              <Search className="h-10 w-10 text-accent" />
              {query ? `Results for "${q}"` : "Search Products"}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              {query 
                ? `Found ${filteredProducts.length} product${filteredProducts.length === 1 ? '' : 's'} matching your search.`
                : "Enter a search term to find products, categories, or specific furniture."}
            </p>
          </div>
        </div>
      </header>

      {query ? (
        filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Search className="h-16 w-16 text-muted-foreground/30 mb-4" />
            <h3 className="text-xl font-semibold text-primaryText">No products found</h3>
            <p className="mt-2 text-secondaryText">Try checking for typos or using more general terms like "bed" or "sofa".</p>
          </div>
        )
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Search className="h-16 w-16 text-muted-foreground/30 mb-4" />
          <h3 className="text-xl font-semibold text-primaryText">Start typing to search</h3>
          <p className="mt-2 text-secondaryText">Find exactly what you're looking for across our entire catalog.</p>
        </div>
      )}
    </main>
  );
}
