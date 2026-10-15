import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/hero";
import { Photo } from "@/components/media";
import { FAQ, Promo } from "@/components/sections";
import { programs, whatsapp } from "@/lib/content";

export function generateStaticParams() { return programs.map(item => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find(p => p.slug === slug);
  return { title: program ? `Program ${program.name}` : "Program" };
}
export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs.find(p => p.slug === slug);
  if (!program) notFound();
  return <><Hero title={`Program ${program.name}`} /><section className="detail-section section-shell"><Link className="text-link" href="/program">← Semua program</Link><div className="detail-grid"><Photo src={program.pageImage} alt={`Program ${program.name} Saribunga`} /><div><h2>Mulai perjalanan Anda bersama Saribunga</h2><p>{program.description}</p><p>Diskusikan kebutuhan usaha, wilayah, serta skema kerja sama langsung dengan tim kami.</p><a className="button" href={whatsapp(`Halo Saribunga, saya tertarik dengan program ${program.name}. Mohon informasi persyaratan dan skema kerja samanya.`)} target="_blank" rel="noopener noreferrer">Konsultasi {program.name}</a></div></div></section><FAQ /><Promo /></>;
}
