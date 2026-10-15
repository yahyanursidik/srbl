import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { AboutSection, Promo } from "@/components/sections";
import { AssetIcon } from "@/components/media";
import { assets } from "@/lib/assets";

export const metadata: Metadata = { title: "Tentang Kami", description: "Profil PT. Saribunga Indonesia. Mengenal komitmen, produk, dan perjalanan Saribunga sejak 2008." };
export default function AboutPage() {
  return <><Hero title="Tentang Kami" /><AboutSection /><section className="values-section section-shell" id="visi-misi"><article id="visi"><AssetIcon src={assets.vision.imgFrame} /><h2>VISI</h2><p>Menghadirkan solusi kesehatan alami melalui kekayaan tanaman obat Indonesia.</p></article><article id="misi"><AssetIcon src={assets.vision.imgMisi} /><h2>MISI</h2><p>Menjaga kualitas bahan baku dan keaslian ramuan dengan proses produksi modern dan higienis.</p></article><article id="moto"><AssetIcon src={assets.vision.imgMoto} /><h2>MOTO</h2><p>Diracik Alami<br />Disajikan Asli</p></article></section><Promo /></>;
}
