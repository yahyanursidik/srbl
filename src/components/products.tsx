"use client";

import Link from "next/link";
import { useState } from "react";
import { assets } from "@/lib/assets";
import { products, rupiah, whatsapp } from "@/lib/content";
import { AssetIcon, Photo } from "./media";

export function ProductCarousel({ shop = false }: { shop?: boolean }) {
  const [index, setIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const current = products[index];
  const select = (i: number) => { setIndex((i + products.length) % products.length); setShowDetail(false); };
  return <section className={`products-section ${shop ? "products-shop" : ""}`} aria-label="Produk Saribunga" aria-roledescription="carousel"><h2>{shop ? "Ayo Pilih Produk-Mu!" : "Produk Kami"}</h2><div className="carousel-stage" onKeyDown={event => { if (event.key === "ArrowLeft") { event.preventDefault(); select(index - 1); } if (event.key === "ArrowRight") { event.preventDefault(); select(index + 1); } }}>
    {[-2, -1, 0, 1, 2].map(offset => { const i = (index + offset + products.length) % products.length; const item = products[i]; return <div className={`product-slide slide-${offset < 0 ? `minus${-offset}` : offset}`} key={offset} aria-hidden={offset !== 0} inert={offset !== 0}>
      {item.image ? <Photo className="product-image" src={item.image} alt={`${item.name} ${item.variant}`} sizes="(max-width: 600px) 78vw, 518px" /> : <div className="product-image product-image-pending"><span>{item.name}</span><strong>{item.variant}</strong><small>Foto produk segera tersedia</small></div>}
      <div className="product-caption"><p>{item.name} — {item.variant}</p><button className="product-price" onClick={() => setShowDetail(!showDetail)} aria-expanded={showDetail}>{rupiah(item.price)} <span aria-hidden="true">↗</span></button></div>
    </div>; })}
    <button className="carousel-arrow carousel-prev" aria-label="Produk sebelumnya" onClick={() => select(index - 1)}><AssetIcon src={assets.productsHome.imgEmojioneMonotoneRightArrow1} /></button><button className="carousel-arrow carousel-next" aria-label="Produk berikutnya" onClick={() => select(index + 1)}><AssetIcon src={assets.productsHome.imgEmojioneMonotoneRightArrow} /></button>
  </div><div className="carousel-dots" aria-label="Pilih produk">{products.map((item, i) => <button key={item.slug} aria-label={`Tampilkan ${item.name} ${item.variant}`} aria-pressed={i === index} onClick={() => select(i)}><span /></button>)}</div><p className="sr-only" aria-live="polite">Produk {index + 1} dari {products.length}: {current.name} {current.variant}</p>
    {showDetail && <div className="product-quick-detail"><h3>{current.name} — {current.variant}</h3><p>Harga pada desain: {rupiah(current.price)}. Konfirmasi harga dan ketersediaan terkini kepada tim Saribunga.</p><a className="button" href={whatsapp(`Halo Saribunga, saya tertarik dengan ${current.name} ${current.variant}. Mohon informasi harga dan ketersediaannya.`)} target="_blank" rel="noopener noreferrer">Tanya Produk</a></div>}
    {!shop && <Link className="text-link catalog-link" href="/produk">Lihat semua produk <span aria-hidden="true">→</span></Link>}
  </section>;
}

export function ProductCatalog({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState("Semua");
  const filtered = products.filter(p => (category === "Semua" || p.category === category) && `${p.name} ${p.variant} ${p.category}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <section className="catalog-section section-shell" id="katalog"><div className="catalog-heading"><h2>Katalog Produk</h2><label className="catalog-search"><span className="sr-only">Cari produk</span><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Cari produk..." maxLength={100} /></label></div><div className="category-filters" aria-label="Kategori produk">{["Semua", "Minyak Alami", "Herbal", "Perawatan"].map(c => <button key={c} className={c === category ? "selected" : ""} aria-pressed={c === category} onClick={() => setCategory(c)}>{c}</button>)}</div><p className="catalog-count" role="status">{filtered.length} produk ditemukan</p><div className="catalog-grid">{filtered.map(item => <article className="catalog-card" key={item.slug}>{item.image ? <Photo src={item.image} alt={`${item.name} ${item.variant}`} sizes="(max-width: 600px) 90vw, 30vw" /> : <div className="catalog-photo-pending"><span>{item.name}</span><small>Foto produk sedang disiapkan</small></div>}<div><p className="product-category">{item.category}</p><h3>{item.name}</h3><p>{item.variant}</p><a className="text-link" href={whatsapp(`Halo Saribunga, saya ingin menanyakan ${item.name} ${item.variant}. Mohon informasi harga, ketersediaan, dan pemesanannya.`)} target="_blank" rel="noopener noreferrer">Tanya &amp; Pesan <span aria-hidden="true">↗</span></a></div></article>)}</div>{!filtered.length && <div className="empty-state"><h3>Produk belum ditemukan</h3><p>Coba kata kunci lain atau tampilkan semua produk.</p><button className="button" onClick={() => { setQuery(""); setCategory("Semua"); }}>Tampilkan Semua</button></div>}</section>;
}

export function Marketplaces() {
  return <section className="marketplaces section-shell"><p>Cek produknya di:</p><h2>saribungastoreofficial</h2><div className="marketplace-links"><a href="https://shopee.co.id/search?keyword=saribungastoreofficial" target="_blank" rel="noopener noreferrer" aria-label="Cari saribungastoreofficial di Shopee"><Photo className="shopee-logo" src={assets.productPage.imgShopeeSvg1} alt="Shopee" sizes="260px" /></a><a href="https://www.tokopedia.com/search?q=saribungastoreofficial" target="_blank" rel="noopener noreferrer" aria-label="Cari saribungastoreofficial di Tokopedia"><Photo className="tokopedia-logo" src={assets.productPage.imgLogoTokopedia1} alt="Tokopedia" sizes="307px" /></a><a href="https://www.lazada.co.id/catalog/?q=saribungastoreofficial" target="_blank" rel="noopener noreferrer" aria-label="Cari saribungastoreofficial di Lazada"><span className="lazada-logo" role="img" aria-label="Lazada">{[["g35", "imgG35"], ["g41", "imgG41"], ["g47", "imgG47"], ["g53", "imgG53"], ["g59", "imgG59"], ["g65", "imgG65"], ["g71", "imgG71"], ["g79", "imgG79"], ["g970", "imgG970"]].map(([cls, key]) => <AssetIcon key={cls} className={cls} src={assets.productPage[key as keyof typeof assets.productPage]} />)}</span></a></div></section>;
}
