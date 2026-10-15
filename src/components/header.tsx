"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { assets } from "@/lib/assets";
import { AssetIcon } from "./media";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const search = useRef<HTMLDialogElement>(null);
  const menuToggle = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLDetailsElement>(null);
  const closeNavigation = () => {
    setMenuOpen(false);
    if (dropdown.current) dropdown.current.open = false;
  };
  const active = (path: string) => pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setMenuOpen(false); menuToggle.current?.focus(); } };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menuOpen]);

  return <>
    <a className="skip-link" href="#main">Langsung ke konten</a>
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Saribunga — Beranda" onClick={closeNavigation}>
          <Image src={assets.figmaHero.imgLogoSaribungaCoId1} width={162} height={56} alt="Saribunga — Diracik alami Disajikan asli" preload />
        </Link>
        <button ref={menuToggle} className="menu-toggle icon-button" aria-controls="primary-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"} onClick={() => setMenuOpen(!menuOpen)}><span>{menuOpen ? "✕" : "☰"}</span></button>
        <nav id="primary-navigation" className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navigasi utama">
          <Link href="/" className={active("/") ? "active" : ""} aria-current={active("/") ? "page" : undefined} onClick={closeNavigation}>BERANDA</Link>
          <details className="nav-dropdown" ref={dropdown}>
            <summary className={active("/tentang-kami") || active("/program") ? "active" : ""}>TENTANG KAMI <AssetIcon src={assets.figmaHero.imgVector} /></summary>
            <div className="dropdown-links">
              <Link href="/tentang-kami" aria-current={active("/tentang-kami") ? "page" : undefined} onClick={closeNavigation}>Profil Perusahaan</Link>
              <Link href="/tentang-kami#visi-misi" onClick={closeNavigation}>Visi, Misi &amp; Moto</Link>
              <Link href="/program" aria-current={active("/program") ? "page" : undefined} onClick={closeNavigation}>Program Kemitraan</Link>
            </div>
          </details>
          {[["/produk", "PRODUK"], ["/karir", "KARIR"], ["/agen", "AGEN"], ["/kontak", "KONTAK"]].map(([href, label]) => <Link key={href} href={href} className={active(href) ? "active" : ""} aria-current={active(href) ? "page" : undefined} onClick={closeNavigation}>{label}</Link>)}
          <button className="icon-button search-button" aria-label="Cari produk Saribunga" onClick={() => { closeNavigation(); search.current?.showModal(); }}><AssetIcon src={assets.figmaHero.imgVector1} /></button>
          <Link className="article-link" href="/artikel" onClick={closeNavigation}>ARTIKEL KESEHATAN</Link>
        </nav>
      </div>
    </header>
    <dialog className="search-dialog" ref={search} aria-labelledby="search-title" onClick={e => { if (e.target === e.currentTarget) search.current?.close(); }}>
      <div className="dialog-heading"><h2 id="search-title">Temukan produk Anda</h2><button className="icon-button" aria-label="Tutup pencarian" onClick={() => search.current?.close()}>✕</button></div>
      <form action="/produk" onSubmit={() => search.current?.close()}><label htmlFor="site-search">Cari nama atau kategori produk</label><div className="search-row"><input autoFocus id="site-search" name="q" type="search" placeholder="Contoh: minyak zaitun" required maxLength={100} /><button className="button" type="submit">Cari</button></div></form>
    </dialog>
  </>;
}
