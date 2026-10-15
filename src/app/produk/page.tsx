import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Promo } from "@/components/sections";
import { Marketplaces, ProductCarousel, ProductCatalog } from "@/components/products";

export const metadata: Metadata = { title: "Produk Kami", description: "Jelajahi produk Saribunga: minyak alami, herbal, dan perawatan. Hubungi tim kami untuk informasi dan pemesanan." };
export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q.slice(0, 100) : "";
  return <><Hero title="Produk Kami" />{!query && <><ProductCarousel shop /><Marketplaces /></>}<ProductCatalog key={query} initialQuery={query} /><Promo /></>;
}
