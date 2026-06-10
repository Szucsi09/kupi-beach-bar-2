import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { FullwidthBreak } from "@/components/fullwidth-break";
import { HeroSection } from "@/components/hero-section";
import { LocationSection } from "@/components/location-section";
import { MenuSection } from "@/components/menu-section";
import { Navigation } from "@/components/navigation";
import { ReviewsSection } from "@/components/reviews-section";
import { StrengthsSection } from "@/components/strengths-section";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="wrap">
        <HeroSection />
        <FullwidthBreak />
        <AboutSection />
        <StrengthsSection />
        <MenuSection />
        <ReviewsSection />
        <LocationSection />
        <Footer />
      </div>
    </>
  );
}
