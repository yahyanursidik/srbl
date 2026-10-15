import type { MetadataRoute } from "next";
import { careers, programs } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.saribunga.co.id";
  const paths = ["", "/tentang-kami", "/produk", "/program", "/agen", "/karir", "/kontak", "/artikel", ...programs.map(p => `/program/${p.slug}`), ...careers.map(p => `/karir/${p.slug}`)];
  return paths.map(path => ({ url: `${site}${path}` }));
}
