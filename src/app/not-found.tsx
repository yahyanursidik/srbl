import Link from "next/link";
import { Hero } from "@/components/hero";

export default function NotFound() {
  return <><Hero title="Halaman Tidak Ditemukan" /><section className="empty-state section-shell"><p>Halaman yang Anda cari belum tersedia atau alamatnya telah berubah.</p><Link className="button" href="/">Kembali ke Beranda</Link></section></>;
}
