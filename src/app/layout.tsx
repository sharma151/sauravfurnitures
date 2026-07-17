import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sauravfurniture.com"),
  title: {
    default: "Saurav Furnitures | Custom Furniture Manufacturer in Kathmandu & Lalitpur, Nepal",
    template: "%s | Saurav Furnitures",
  },
  description:
    "Saurav Furniture Udhyog is a top custom furniture manufacturer & sofa maker in Kathmandu and Lalitpur, Nepal. With 20+ years of expertise, we specialize in bespoke woodwork, sofa repair, and commercial orders.",
  keywords: [
    "Saurav Furniture",
    "Saurav Furnitures",
    "Saurav Furniture Udhyog",
    "custom furniture",
    "furniture manufacturers",
    "furniture maker",
    "custom manufacturer",
    "sofa maker",
    "sofa maker Kathmandu",
    "furniture maker Lalitpur",
    "Kathmandu Nepal",
    "Lalitpur Nepal",
    "furniture restoration",
    "interior consultation",
    "commercial orders",
    "bedroom",
    "living room",
    "dining",
    "office furniture",
    "custom wood works",
    "furniture showroom in Kathmandu",
    "custom sofa maker",
  ],
  authors: [{ name: "Saurav Furnitures" }],
  openGraph: {
    title: "Saurav Furnitures | Custom Furniture Manufacturer in Kathmandu & Lalitpur",
    description: "Saurav Furniture Udhyog is a top custom furniture manufacturer & sofa maker in Kathmandu and Lalitpur, Nepal. Discover our bespoke collections.",
    url: "https://sauravfurniture.com",
    siteName: "Saurav Furnitures",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurav Furnitures",
    description: "Saurav Furniture Udhyog is a top custom furniture manufacturer & sofa maker in Kathmandu and Lalitpur, Nepal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
