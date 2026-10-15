import Link from "next/link";
import { assets } from "@/lib/assets";
import { whatsapp } from "@/lib/content";
import { Photo } from "./media";

export function Hero({ title, home = false }: { title: string; home?: boolean }) {
  return <section className={`hero ${home ? "hero-home" : "hero-page"}`} aria-labelledby="page-title">
    <Photo className="hero-building" src={assets.figmaHero.imgDsc00313EditedIii3} alt="" priority sizes="100vw" />
    {home && <Photo className="hero-meeting" src={assets.figmaHero.imgGambarWhatsApp20250506Pukul1924165E5967011} alt="" priority sizes="100vw" />}
    <div className="hero-shade" />
    <div className="hero-content"><h1 id="page-title">{title}</h1>{home && <><p>Diracik Alami Disajikan Asli</p><div className="hero-actions"><Link className="button" href="/produk">LIHAT PRODUK</Link><a className="button" href={whatsapp("Halo Saribunga, saya ingin informasi dan pemesanan produk.")} target="_blank" rel="noopener noreferrer">BELI SEKARANG</a></div></>}</div>
  </section>;
}
