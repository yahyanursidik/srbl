import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ, Programs, Promo } from "@/components/sections";

export const metadata: Metadata = { title: "Program Kemitraan", description: "Jelajahi program agen, distributor, reseller, makloon, apotik, dan toko herbal bersama Saribunga." };
export default function ProgramsPage() {
  return <><Hero title="Program" /><Programs /><FAQ /><Promo /></>;
}
