import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Works",
  description: "Explore our portfolio of premium custom furniture, intricate woodwork, and interior design projects.",
  openGraph: {
    title: "Our Works | Saurav Furnitures",
    description: "Explore our portfolio of premium custom furniture, intricate woodwork, and interior design projects.",
  },
};

export default function OurWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
