import Link from "next/link";
import { assets } from "@/lib/assets";
import { aboutParagraphs, company, faqs, programs, socialLinks, whatsapp } from "@/lib/content";
import { AssetIcon, Photo } from "./media";
import { PromoForm } from "./forms";

export function SectionTitle({ lead, title }: { lead?: string; title: string }) {
  return <div className="section-title">{lead && <p>{lead}</p>}<h2>{title}</h2></div>;
}

export function VisionCard() {
  return <div className="vision-card" aria-label="Visi, misi, dan moto Saribunga">
    {[["VISI", "visi", assets.vision.imgFrame], ["MISI", "misi", assets.vision.imgMisi], ["MOTO", "moto", assets.vision.imgMoto]].map(([label, id, src]) => <Link key={id} href={`/tentang-kami#${id}`}><AssetIcon src={src} /><span>{label}</span></Link>)}
  </div>;
}

export function AboutSection({ home = false }: { home?: boolean }) {
  return <section className={home ? "intro-section" : "about-section"} aria-label="Kenali Saribunga">
    {home && <VisionCard />}
    <div className="section-shell"><SectionTitle lead="Kenali Kami" title="Di Setiap Racikan Alami" />
      {home ? <div className="about-grid"><div className="about-photos"><Photo className="about-building" src={assets.about.imgDsc00313EditedIii4} alt="Gedung dan toko Madu Saribunga di Lembang" /><Photo className="about-shelf" src={assets.about.imgImg47611} alt="Produk minyak alami di rak toko Saribunga" /></div><div className="about-copy">{aboutParagraphs.map(p => <p key={p}>{p}</p>)}<Link className="text-link" href="/tentang-kami">Selengkapnya tentang kami <span aria-hidden="true">→</span></Link></div></div>
        : <><div className="about-page-row"><Photo src={assets.about.imgDsc00313EditedIii4} alt="Gedung Madu Saribunga" /><div>{aboutParagraphs.slice(0, 2).map(p => <p key={p}>{p}</p>)}</div></div><div className="about-page-row about-page-row-reverse"><p>{aboutParagraphs[2]}</p><Photo src={assets.about.imgImg47611} alt="Pilihan produk alami di Saribunga" /></div><Photo className="about-map" src={assets.aboutPage.imgMaps1} alt="Peta Indonesia" /></>}
    </div>
  </section>;
}

export function Strengths() {
  const cards = [
    ["MEMILIKI PABRIK BERSTANDAR PEMERINTAH", assets.strengths.imgFactory1, "factory"],
    ["DISTRIBUSI HERBAL KE SELURUH INDONESIA", assets.strengths.imgMaps1, "map"],
    ["PRODUK BERKUALITAS DAN ORIGINAL", assets.strengths.imgQuality1, "quality"],
    ["BAHAN BAKU TERBAIK GRADE A+", assets.strengths.imgGrade11, "grade"],
  ];
  return <section className="strength-section section-shell"><div className="strength-panel"><h2>Keunggulan <br />Berbelanja <br />Di Saribunga</h2><div className="strength-grid">{cards.map(([title, src, kind]) => <div className={`strength-card ${kind}`} key={kind}><h3>{title}</h3><Photo src={src} alt="" sizes="220px" /></div>)}</div></div></section>;
}

export function Testimonials() {
  // The Figma testimonials contain lorem ipsum, not approved customer quotes.
  return <section className="testimonials"><div className="section-shell"><h2>Apa Kata Mereka?</h2><p className="testimonial-notice">Cerita pelanggan akan hadir di sini.</p><div className="testimonial-grid">{[1, 2, 3, 4].map(n => <article className="testimonial-card" key={n}><div className="quote-placeholder" aria-hidden="true"><i /><i /><i /><i /><i /></div><p>Testimoni pelanggan sedang disiapkan.</p><div className="testimonial-person"><AssetIcon src={assets.testimonials.imgIxUserProfileFilled} /><span>Ulasan Saribunga</span></div><div className="testimonial-stars" aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <AssetIcon key={i} src={i % 2 ? assets.testimonials.imgBxsStar1 : assets.testimonials.imgBxsStar} />)}</div></article>)}</div></div></section>;
}

export function Programs({ home = false }: { home?: boolean }) {
  return <section className={`program-section ${home ? "program-home" : ""}`} id="program"><div className="program-shell"><SectionTitle lead="Jelajahi Program Kami" title="Ayo Mulai Perjalanan-Mu!" /><div className="program-grid">{programs.map(item => <article className="program-card" key={item.slug}><Link href={item.slug === "agen" ? "/agen" : `/program/${item.slug}`} tabIndex={-1} aria-hidden="true"><Photo src={home ? item.image : item.pageImage} alt="" sizes="(max-width: 600px) 80vw, (max-width: 900px) 40vw, 283px" /></Link><h3>{item.name}</h3><Link className="detail-link" href={item.slug === "agen" ? "/agen" : `/program/${item.slug}`}>Lihat Detail <span className="sr-only">program {item.name}</span><AssetIcon src={home ? assets.programHome.imgVector : assets.programPage.imgVector} /></Link></article>)}</div></div></section>;
}

export function FAQ() {
  return <section className="faq-section section-shell"><div><h2><strong>Punya pertanyaan<br />seputar program kami?</strong><br />temukan jawabannya di sini</h2><p>Beberapa orang juga menanyakan seputar apa saja yang kami miliki.</p></div><div className="faq-list">{faqs.map(item => <details key={item.q}><summary>{item.q}<span className="faq-plus" aria-hidden="true" /></summary><p>{item.a}</p></details>)}</div></section>;
}

export function Promo({ home = false }: { home?: boolean }) {
  return <section id="info-promo" className={`promo-section ${home ? "promo-home" : ""}`}><Photo src={assets.promo.img45391} alt="" sizes="100vw" /><div className="promo-content"><h2>Dapatkan<br />informasi seputar promo<br />dan keagenan</h2><PromoForm /></div></section>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-shell">
      <a className="footer-hotline" href={whatsapp("Halo Saribunga, saya ingin mendapatkan informasi lebih lanjut.")} target="_blank" rel="noopener noreferrer">
        <AssetIcon src={assets.footer.imgF7Headphones} /><span><small>INFO LEBIH LANJUT HUBUNGI</small><strong>{company.displayPhone}</strong></span>
      </a>
      <AssetIcon className="footer-rule" src={assets.footer.imgLine2} />
      <div className="footer-grid">
        <div className="footer-address"><h2>ALAMAT</h2><a href={company.maps} target="_blank" rel="noopener noreferrer"><AssetIcon src={assets.footer.imgFrame1} /><span>{company.address}</span></a><a href={`mailto:${company.email}`}><AssetIcon src={assets.footer.imgFrame} /><span>{company.email}</span></a></div>
        <div><h2>INFORMASI</h2><Link href="/tentang-kami">Tentang Kami</Link><Link href="/#info-promo">Newsletter</Link><Link href="/karir">Lowongan Kerja</Link><Link href="/kontak">Kontak</Link><Link href="/kontak?subjek=Service">Service</Link></div>
        <div><h2>KONTAK</h2><Link href="/kontak?subjek=Marketing">Marketing</Link><Link href="/agen">Keagenan</Link><Link href="/produk">Toko</Link><Link href="/kontak?subjek=Service">Service</Link></div>
        <div className="footer-social"><h2>IKUTI KAMI</h2><div>{[["Facebook", assets.footer.imgUilFacebook], ["Instagram", assets.footer.imgRiInstagramFill], ["TikTok", assets.footer.imgLineiconsTiktokAlt], ["YouTube", assets.footer.imgMdiYoutube]].map(([name, src]) => socialLinks[name]
          ? <a key={name} href={socialLinks[name]!} aria-label={`${name} Saribunga`} target="_blank" rel="noopener noreferrer"><AssetIcon src={src} /></a>
          : <span key={name} className="social-pending" role="img" aria-label={`${name} — tautan resmi belum tersedia`} title={`Tautan ${name} resmi belum tersedia`}><AssetIcon src={src} /></span>)}</div></div>
      </div>
    </div>
    <div className="copyright">Copyright © {new Date().getFullYear()} <span>saribunga</span> All Rights Reserved</div>
  </footer>;
}
