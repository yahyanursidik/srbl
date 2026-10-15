import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/hero";
import { AssetIcon } from "@/components/media";
import { careers, whatsapp } from "@/lib/content";

export function generateStaticParams() { return careers.map(item => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: careers.find(p => p.slug === slug)?.name ?? "Karir" };
}
export default async function CareerDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const career = careers.find(p => p.slug === slug);
  if (!career) notFound();
  return <><Hero title="Karir di Saribunga" /><section className="career-detail section-shell"><Link className="text-link" href="/karir">← Semua bidang karir</Link><AssetIcon src={career.icon} /><h2>{career.name}</h2><p>Ingin berkarir bersama Saribunga? Tanyakan ketersediaan posisi {career.name}, kualifikasi, dan tahapan rekrutmen langsung kepada tim kami.</p><a className="button" href={whatsapp(`Halo Saribunga, saya ingin informasi lowongan ${career.name}. Apakah saat ini tersedia? Mohon informasi kualifikasi dan cara melamarnya.`)} target="_blank" rel="noopener noreferrer">Tanyakan Lowongan</a></section></>;
}
