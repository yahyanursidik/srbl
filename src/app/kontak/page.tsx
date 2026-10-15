import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { AssetIcon } from "@/components/media";
import { ContactForm } from "@/components/forms";
import { Promo } from "@/components/sections";
import { assets } from "@/lib/assets";
import { company, whatsapp } from "@/lib/content";

export const metadata: Metadata = { title: "Kontak", description: "Hubungi PT. Saribunga Indonesia di Lembang untuk informasi produk, pemesanan, dan kerja sama." };
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ subjek?: string | string[] }> }) {
  const params = await searchParams;
  const subject = typeof params.subjek === "string" ? params.subjek.slice(0, 160) : "";
  const contacts = [
    { title: "WHATSAPP", value: "081322648962", href: whatsapp("Halo Saribunga, saya ingin mendapatkan informasi."), icon: assets.contact.imgVector2 },
    { title: "ALAMAT EMAIL", value: company.email, href: `mailto:${company.email}`, icon: assets.contact.imgVector1 },
    { title: "WEBSITE", value: "www.saribunga.co.id", href: "/", icon: assets.contact.imgVector3 },
    { title: "ALAMAT", value: "Jl. Pusdik Ajen No. A17, Lembang, KBB, Jawa Barat 40391", href: company.maps, icon: assets.contact.imgVector },
  ];
  return <><Hero title="KONTAK" /><section className="contact-section section-shell"><div className="contact-copy"><AssetIcon className="contact-envelope" src={assets.contact.imgGroup9} /><h2><span>Ayo !!</span><br /><span>Biar makin dekat,</span><br /><strong>hubungi kami :)</strong></h2><p>Punya pertanyaan tentang produk, pemesanan, atau kemitraan? Tim Saribunga siap membantu Anda.</p><div className="contact-methods">{contacts.map(item => <a key={item.title} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}><AssetIcon src={item.icon} /><span><strong>{item.title}</strong><span>{item.value}</span></span></a>)}</div></div><ContactForm key={subject} defaultSubject={subject} /></section><Promo /></>;
}
