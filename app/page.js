import HeroCarousel from "@/components/HeroCarousel";
import StatsSection from "@/components/StateSection";
import AboutSection from "@/components/AboutSection";
import InitiativesSection from "@/components/InitiativesSection";
import GallerySection from "@/components/GallerySection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <main className="w-full  dark:bg-black">
      <HeroCarousel />
      <StatsSection />
      <AboutSection />
      <InitiativesSection />
      <GallerySection />
      <FaqSection />
    </main>
  );
}
