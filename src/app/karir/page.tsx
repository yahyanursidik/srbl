import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { AssetIcon } from "@/components/media";
import { Promo, SectionTitle } from "@/components/sections";
import { assets } from "@/lib/assets";
import { careers } from "@/lib/content";

export const metadata: Metadata = { title: "Karir", description: "Kenali peluang karir dan bidang pekerjaan di Saribunga. Hubungi tim kami untuk ketersediaan lowongan terkini." };
export default function CareerPage() {
  return <><Hero title="Karir" /><section className="career-section section-shell"><SectionTitle lead="Mulai Karir-Mu" title="Bersama Saribunga" /><div className="career-grid">{careers.map(item => <article className="career-card" key={item.slug}><AssetIcon src={item.icon} /><h3>{item.name}</h3><Link className="detail-link" href={`/karir/${item.slug}`}>Lihat Detail <span className="sr-only">{item.name}</span><AssetIcon src={assets.careers.imgVector} /></Link></article>)}</div><p className="career-note">Hubungi tim kami untuk mengetahui ketersediaan lowongan terkini.</p></section><Promo /></>;
}
