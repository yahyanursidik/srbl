# PT. Saribunga Indonesia

Website portofolio perusahaan dan sales berdasarkan [Figma Web Project Saribunga](https://www.figma.com/design/qGuJrXsOwetwvCyaacvGLc/Web-Project-Saribunga?node-id=0-1).

## Stack

- Next.js 16.4.1, App Router, React 19.3.1, TypeScript.
- Turbopack untuk development dan production build.
- CSS responsif dengan token warna dari Figma di `tokens.css`.
- Metropolis lokal melalui `next/font/local`; gambar lokal melalui `next/image`.

## Menjalankan

Gunakan Node.js 20.9+ (disarankan versi LTS aktif) dan npm.

```sh
npm ci
npm run dev
```

Buka [localhost:3000](http://localhost:3000). Untuk production:

```sh
npm run build
npm run start
```

Pemeriksaan tipe: `npm run typecheck`. Perintah lint tersedia melalui `npm run lint`.

## Halaman dan fitur

- Beranda, Tentang Kami, Produk, Program, Agen, Karir, dan Kontak.
- Detail setiap program dan bidang karir; halaman Artikel dengan empty state.
- Navigasi mobile, submenu, pencarian, filter kategori, carousel manual, dan FAQ.
- CTA sales, detail produk, dan formulir yang menyiapkan pesan WhatsApp.
- Metadata SEO per halaman, sitemap, robots, font lokal, lazy loading gambar, dan reduced motion.

Formulir **tidak menyimpan data**, tidak mengirim email, dan tidak mengklaim pesan sudah terkirim. Setelah validasi, pengguna memilih tautan untuk melanjutkan pengiriman melalui WhatsApp. Tidak ada backend lead, pembayaran, atau CMS dalam versi ini.

## Mengubah konten

- `src/lib/content.ts`: profil, nomor WhatsApp, alamat, katalog, harga desain, program, FAQ, dan bidang karir.
- `src/lib/assets.ts`: pemetaan aset Figma yang sudah diunduh ke `public/assets`.
- `tokens.css`: warna, font, dan token desain.
- `src/app/globals.css`: tata letak desktop dan adaptasi mobile.
- `.env.example`: contoh domain untuk metadata; salin menjadi `.env.local` lalu sesuaikan `NEXT_PUBLIC_SITE_URL`.

Sumber font: [typehaus/metropolis](https://github.com/typehaus/metropolis). Lisensi disertakan di `public/fonts/LICENSE.md`.

## Konten yang perlu dilengkapi sebelum publikasi

1. Foto enam varian produk lain. Foto Al Arobi EVOO berhasil diambil; varian lain memakai placeholder bernama, bukan foto produk yang berbeda. Pengambilan detail tambahan berhenti karena batas Figma MCP paket Starter.
2. Testimoni asli dan artikel yang disetujui. Desain berisi lorem ipsum sehingga versi ini memakai placeholder yang jelas.
3. Tautan profil sosial resmi di `socialLinks`. Ikon ditampilkan tanpa tautan selama URL belum diberikan. Tautan marketplace saat ini membuka pencarian nama toko yang tercantum di desain; ganti dengan URL toko resmi yang sudah dikonfirmasi.
4. Konfirmasi harga terkini, rincian program, ketersediaan lowongan, serta rumusan resmi visi dan misi. Harga yang ditampilkan pada carousel berasal dari desain dan harus dikonfirmasi lewat sales.

Struktur, warna, logo, foto perusahaan, foto program, ikon, latar promo, dan tipografi mengikuti Figma. Konten dummy tidak dipresentasikan sebagai ulasan atau lowongan aktif. Versi ini berjalan lokal dan belum dipublikasikan ke domain produksi.

## Verifikasi development

- Production build Turbopack dan pemeriksaan TypeScript berhasil.
- Semua route utama, contoh detail, sitemap, dan robots mengembalikan HTTP 200; route tidak dikenal mengembalikan 404.
- Browser: menu mobile dan submenu, carousel, pencarian, filter, FAQ, validasi formulir, dan tautan pesan WhatsApp diperiksa tanpa mengirim pesan.
- Layout beranda diperiksa pada 320, 375, 414, 768, 1280 px, beserta batas tablet dan desktop hingga 1920 px. Halaman kontak, produk, program, dan karir juga diperiksa pada beberapa breakpoint.
- 79 aset Figma lokal terverifikasi ada dan tidak kosong. Audit instalasi terakhir: 0 kerentanan.
