import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Saurav Furnitures | Trust, Comfort & Experience",
    template: "%s | Saurav Furnitures",
  },
  description:
    "Premium furniture crafted with 20+ years of expertise. Bedroom, Living Room, Dining, Mattress, Bedding & Office furniture. Trust, Comfort & Experience.",
  keywords: [
    "furniture",
    "bedroom",
    "living room",
    "dining",
    "mattress",
    "office furniture",
  ],
  authors: [{ name: "Saurav Furnitures" }],
  openGraph: {
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
