import { assets } from "./assets";

export const company = {
  name: "PT. Saribunga Indonesia",
  phone: "6281322648962",
  displayPhone: "(+62) 813-2264-8962",
  email: "saribungaofficial@gmail.com",
  address: "Jl. Wira BTN Pusdik Ajen No. A17, Kayuambon, Kec. Lembang, Kabupaten Bandung Barat, Jawa Barat 40391",
  maps: "https://www.google.com/maps/search/?api=1&query=Saribunga+Pusdik+Ajen+Lembang",
};

export function whatsapp(message: string) {
  return `https://wa.me/${company.phone}?text=${encodeURIComponent(message)}`;
}

// Fill these with the verified official profile URLs before public launch.
export const socialLinks: Record<string, string | null> = {
  Facebook: null, Instagram: null, TikTok: null, YouTube: null,
};

export const aboutParagraphs = [
  "Saribunga adalah perusahaan yang bergerak di bidang pengolahan dan penjualan obat herbal alami yang berkualitas dan terpercaya. Berdiri sejak tahun 2008, kami hadir dengan komitmen untuk menyediakan solusi kesehatan yang alami.",
  "Berangkat dari kekayaan alam Indonesia yang melimpah akan tanaman obat, kami mengembangkan produk herbal berdasarkan resep tradisional yang diwariskan secara turun-temurun, dikombinasikan dengan proses produksi modern dan higienis.",
  "Kami percaya bahwa kebaikan berasal dari alam. Itulah mengapa kami selalu menjaga kualitas bahan baku, keaslian ramuan, serta kejujuran dalam berbisnis.",
];

export const programs = [
  { slug: "agen", name: "Agen", image: assets.programHome.img21512383301, pageImage: assets.programPage.img21512383301, description: "Bergabunglah sebagai agen resmi Saribunga dan menjadi bagian dari jaringan distribusi produk herbal kami." },
  { slug: "distributor", name: "Distributor", image: assets.programHome.img30671, pageImage: assets.programPage.img30671, description: "Jelajahi peluang distribusi produk Saribunga. Diskusikan wilayah dan kebutuhan usaha Anda dengan tim kami." },
  { slug: "reseller", name: "Reseller", image: assets.programHome.imgImage, pageImage: assets.programPage.imgImage, description: "Mulai perjalanan usaha bersama produk Saribunga. Hubungi tim kami untuk informasi kerja sama reseller." },
  { slug: "makloon", name: "Makloon", image: assets.programHome.img13841, pageImage: assets.programPage.img13841, description: "Diskusikan pengembangan produk dan kebutuhan produksi merek Anda bersama tim Saribunga." },
  { slug: "apotik", name: "Apotik", image: assets.programHome.img21495652481, pageImage: assets.programPage.img21495652481, description: "Lengkapi pilihan produk di apotik Anda. Tim kami siap membantu informasi ketersediaan dan pemesanan." },
  { slug: "toko-herbal", name: "Toko Herbal", image: assets.programHome.imgImg47621, pageImage: assets.programPage.imgImg47621, description: "Temukan peluang kerja sama untuk toko herbal Anda melalui pilihan produk Saribunga." },
] as const;

export const products = [
  { slug: "al-arobi-evoo", name: "Al Arobi", variant: "Minyak Zaitun Extra Virgin Olive Oil", category: "Minyak Alami", price: 119999, image: assets.productOlive.img1604278819BaliHoney165GBaliHoney1651 },
  { slug: "al-arobi-zaitun", name: "Al Arobi", variant: "Minyak Zaitun Perasan Pertama", category: "Minyak Alami", price: 39999, image: null },
  { slug: "sunflower-oil", name: "Al Arobi", variant: "Sunflower Seed Oil", category: "Minyak Alami", price: 111999, image: null },
  { slug: "solu-v", name: "Solu V", variant: "Herbal Kewanitaan", category: "Herbal", price: 68999, image: null },
  { slug: "sabun-zaitun", name: "Saza Al Arobi", variant: "Sabun Zaitun", category: "Perawatan", price: 27999, image: null },
  { slug: "royal-jelly", name: "Saribunga", variant: "Royal Jelly Kapsul", category: "Herbal", price: 159999, image: null },
  { slug: "qusthul-hindi", name: "Saribunga", variant: "Qusthul Hindi Serbuk", category: "Herbal", price: 105999, image: null },
] as const;

export const careers = [
  { slug: "packing-staff", name: "Packing Staff", icon: assets.careers.imgStashPackSolid },
  { slug: "marketplace-specialist", name: "Marketplace Specialist", icon: assets.careers.imgGridiconsTablet },
  { slug: "driver", name: "Driver", icon: assets.careers.imgStreamlineTransferVanSolid },
  { slug: "social-media-specialist", name: "Social Media Specialist", icon: assets.careers.imgStreamlineUltimateTabletBold },
  { slug: "spv", name: "SPV", icon: assets.careers.imgIconamoonProfileFill },
  { slug: "marketing-manager", name: "Marketing Manager", icon: assets.careers.imgGroup },
  { slug: "general-staff", name: "General Staff", icon: assets.careers.imgMdiVacuumCleaner },
  { slug: "production-staff", name: "Production Staff", icon: assets.careers.imgMaterialSymbolsWarehouseRounded },
] as const;

export const faqs = [
  { q: "Apakah pengiriman ke seluruh Indonesia?", a: "Ya, pengiriman mencakup seluruh wilayah Indonesia. Hubungi tim kami untuk memeriksa jangkauan dan biaya kirim ke alamat Anda." },
  { q: "Apakah pengiriman atas nama toko saya?", a: "Silakan konsultasikan kebutuhan pengiriman atas nama toko Anda kepada tim keagenan agar skemanya dapat disesuaikan." },
  { q: "Apakah program loyalty menguntungkan?", a: "Informasi program loyalty dan ketentuannya dapat Anda tanyakan langsung kepada tim Saribunga." },
  { q: "Apakah ada promo khusus?", a: "Promo dapat berubah sesuai periode. Hubungi tim Saribunga melalui WhatsApp untuk informasi promo yang sedang berlaku." },
  { q: "Apakah support media promosi?", a: "Diskusikan kebutuhan materi promosi Anda dengan tim kami saat berkonsultasi tentang program kerja sama." },
  { q: "Apakah ada supplier yang siap membantu?", a: "Tim Saribunga siap membantu pertanyaan seputar produk, ketersediaan, dan program kemitraan melalui halaman Kontak." },
] as const;

export function rupiah(value: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
}
