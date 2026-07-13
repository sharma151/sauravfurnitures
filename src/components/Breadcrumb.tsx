import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  /** Array of breadcrumb segments representing the path */
  items: BreadcrumbItem[];
}

/**
 * A semantic and accessible breadcrumb navigation component.
 * Built using <nav aria-label="Breadcrumb"> and an ordered list <ol> 
 * to ensure optimal support for SEO and screen readers.
 */
export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item, index) => {
          // Identify if this is the last item in the path (the current page)
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center gap-1.5">
              {/* Render a subtle premium chevron separator for all items except the very first one */}
              {index > 0 && (
                <ChevronRight className="h-4 w-4 " aria-hidden="true" />
              )}
              
              {item.href && !isLast ? (
                // Clickable, subdued links for parent directories
                <Link 
                  href={item.href} 
                  className="transition-all hover:text-primary hover:underline underline-offset-4"
                >
                  {item.label}
                </Link>
              ) : (
                // Unclickable, emphasized text representing the current active page
                <span 
                  className="font-semibold text-secondary-foreground" 
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
