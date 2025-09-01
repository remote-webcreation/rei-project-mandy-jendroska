import Image from "next/image";
import HeroSection from '@/components/Herosection';
import AboutSection from '@/components/AboutSection';
import HighlightsSection from '@/components/HighlightsSection';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <CTASection />
    </>
  );
}
