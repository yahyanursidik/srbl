import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";

export const metadata: Metadata = { title: "Artikel Kesehatan" };
export default function ArticlesPage() {
  return <><Hero title="Artikel Kesehatan" /><section className="empty-state section-shell"><h2>Ruang cerita dan informasi Saribunga</h2><p>Artikel sedang disiapkan. Sementara itu, kenali pilihan produk alami dan cerita perusahaan kami.</p><div className="empty-actions"><Link className="button" href="/produk">Jelajahi Produk</Link><Link className="text-link" href="/tentang-kami">Kenali Saribunga →</Link></div></section></>;
}
