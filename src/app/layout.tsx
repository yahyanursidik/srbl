import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections";
import "./globals.css";

const metropolis = localFont({
  src: [
    { path: "../../public/fonts/Metropolis-100.woff2", weight: "100", style: "normal" },
    { path: "../../public/fonts/Metropolis-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Metropolis-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Metropolis-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Metropolis-700.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Metropolis-800.woff2", weight: "800", style: "normal" },
  ], variable: "--font-metropolis", display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.saribunga.co.id"),
  title: { default: "PT. Saribunga Indonesia — Diracik Alami Disajikan Asli", template: "%s | Saribunga Indonesia" },
  description: "Kenali PT. Saribunga Indonesia, jelajahi produk herbal alami dan peluang kemitraan. Diracik alami, disajikan asli.",
  openGraph: { type: "website", locale: "id_ID", siteName: "Saribunga Indonesia", title: "PT. Saribunga Indonesia", description: "Diracik Alami Disajikan Asli. Produk herbal alami dan peluang kemitraan Saribunga." },
  twitter: { card: "summary", title: "PT. Saribunga Indonesia", description: "Diracik Alami Disajikan Asli." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id" className={metropolis.variable} data-scroll-behavior="smooth"><body><Header /><main id="main" tabIndex={-1}>{children}</main><Footer /></body></html>;
}
