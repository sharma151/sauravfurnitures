import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helpdesk & Furniture Repair",
  description: "Book furniture repair services, structural restorations, and custom upholstery easily through our Helpdesk.",
  openGraph: {
    title: "Helpdesk & Repair | Saurav Furnitures",
    description: "Book furniture repair services, structural restorations, and custom upholstery easily through our Helpdesk.",
  },
};

export default function HelpdeskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
