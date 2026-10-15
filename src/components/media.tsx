import Image from "next/image";

export function Photo({ src, alt, className = "", priority = false, sizes = "(max-width: 820px) 100vw, 50vw" }: {
  src: string; alt: string; className?: string; priority?: boolean; sizes?: string;
}) {
  return <div className={`photo ${className}`}><Image src={src} alt={alt} fill sizes={sizes} preload={priority} /></div>;
}

export function AssetIcon({ src, className = "", alt = "" }: { src: string; className?: string; alt?: string }) {
  // Retain the original exported SVG; sizing belongs to its image slot.
  return <span className={`asset-icon ${className}`}><Image src={src} alt={alt} fill unoptimized sizes="80px" /></span>;
}
