"use client";

import { useState } from "react";
import { whatsapp } from "@/lib/content";

export function ContactForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const [error, setError] = useState("");
  const [ready, setReady] = useState<string | null>(null);
  return <form className="contact-form" onSubmit={event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !subject || !message) { setError("Lengkapi nama, subjek, dan pesan Anda."); setReady(null); return; }
    setError("");
    setReady(whatsapp(`Halo Saribunga,\n\nNama: ${name}\nEmail: ${email}\nSubjek: ${subject}\n\n${message}`));
  }} onChange={() => setReady(null)}>
    <div className="field-pair"><label><span className="sr-only">Nama</span><input name="name" placeholder="Nama" autoComplete="name" required maxLength={100} /></label><label><span className="sr-only">Email</span><input name="email" placeholder="Email" type="email" autoComplete="email" required maxLength={160} /></label></div>
    <label><span className="sr-only">Subjek</span><input name="subject" placeholder="Subjek" defaultValue={defaultSubject} required maxLength={160} /></label>
    <label><span className="sr-only">Pesan</span><textarea name="message" placeholder="Pesan" rows={8} required maxLength={2000} /></label>
    {error && <p role="alert" className="form-error">{error}</p>}
    <button className="button button-orange" type="submit">Kirim</button>
    <p className="form-note">Pesan diteruskan melalui WhatsApp.</p>
    {ready && <div role="status" className="form-result"><p>Pesan Anda siap. Lanjutkan ke WhatsApp untuk mengirimnya kepada tim Saribunga.</p><a href={ready} target="_blank" rel="noopener noreferrer" className="text-link">Lanjutkan ke WhatsApp ↗</a></div>}
  </form>;
}

export function PromoForm() {
  const [error, setError] = useState("");
  const [ready, setReady] = useState<string | null>(null);
  return <form className="promo-form" onSubmit={event => {
    event.preventDefault();
    const raw = String(new FormData(event.currentTarget).get("phone") ?? "");
    const digits = raw.replace(/[^\d]/g, "");
    if (!/^(0|62)8\d{7,12}$/.test(digits)) { setError("Masukkan nomor WhatsApp Indonesia yang valid."); setReady(null); return; }
    setError("");
    setReady(whatsapp(`Halo Saribunga, saya ingin mendapatkan informasi promo dan keagenan. Nomor WhatsApp saya: ${digits}`));
  }} onChange={() => setReady(null)}>
    <div className="promo-form-row"><label className="sr-only" htmlFor="promo-phone">Nomor WhatsApp</label><input id="promo-phone" type="tel" name="phone" placeholder="No. WhatsApp" autoComplete="tel" inputMode="tel" required maxLength={18} aria-describedby={error ? "promo-error" : undefined} aria-invalid={!!error} /><button className="button button-yellow" type="submit">Kirim</button></div>
    {error && <p id="promo-error" role="alert" className="promo-feedback">{error}</p>}
    {ready && <div className="promo-feedback" role="status"><a href={ready} target="_blank" rel="noopener noreferrer">Lanjutkan di WhatsApp untuk meminta informasi ↗</a></div>}
  </form>;
}
