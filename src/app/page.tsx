import { Hero } from "@/components/hero";
import { AboutSection, Promo, Programs, Strengths, Testimonials } from "@/components/sections";
import { ProductCarousel } from "@/components/products";

export default function Home() {
  return <><Hero title="Saribunga Group" home /><AboutSection home /><Strengths /><ProductCarousel /><Testimonials /><Programs home /><Promo home /></>;
}
