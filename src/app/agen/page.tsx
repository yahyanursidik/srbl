import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Photo } from "@/components/media";
import { Promo, SectionTitle } from "@/components/sections";
import { assets } from "@/lib/assets";
import { whatsapp } from "@/lib/content";

export const metadata: Metadata = { title: "Agen Saribunga", description: "Buka peluang bersama Saribunga. Bergabung dengan jaringan distribusi dan tanyakan program agen resmi kami." };
export default function AgentPage() {
  return <><Hero title="Agen Saribunga" /><section className="agent-section section-shell"><SectionTitle lead="Buka Peluang" title="Raih Keuntungan Jadi Agen Resmi Kami" /><p>Bergabunglah bersama jaringan distribusi terpercaya dan nikmati dukungan untuk mengembangkan bisnis Anda. Kami percaya kesuksesan tercipta dari kemitraan yang solid. Bergabunglah sebagai agen resmi dan jadilah bagian dari perjalanan kami dalam membawa produk berkualitas ke seluruh penjuru negeri.</p><Photo className="agent-map" src={assets.aboutPage.imgMaps1} alt="Jaringan distribusi Saribunga di Indonesia" /><a className="button" href={whatsapp("Halo Saribunga, saya tertarik menjadi agen resmi. Mohon informasi persyaratan dan cara bergabung.")} target="_blank" rel="noopener noreferrer">Daftar Jadi Agen</a></section><Promo /></>;
}
