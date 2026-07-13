import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sauravfurniture.com"),
  title: {
    default: "Saurav Furnitures | Custom Furniture & Restoration",
    template: "%s | Saurav Furnitures",
  },
  description:
    "Custom furniture manufacturers & restoration experts with 20+ years of expertise. Specializing in bespoke woodwork, sofa repair, and commercial orders.",
  keywords: [
    "custom furniture",
    "furniture manufacturers",
    "furniture restoration",
    "interior consultation",
    "commercial orders",
    "bedroom",
    "living room",
    "dining",
    "office furniture",
    "custom wood works",
  ],
  authors: [{ name: "Saurav Furnitures" }],
  openGraph: {
    title: "Saurav Furnitures | Custom Furniture & Restoration",
    description: "Custom furniture manufacturers & restoration experts with 20+ years of expertise. Discover our bespoke collections.",
    url: "https://sauravfurniture.com",
    siteName: "Saurav Furnitures",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurav Furnitures",
    description: "Custom furniture manufacturers & restoration experts with 20+ years of expertise.",
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
      </body>
    </html>
  );
}
