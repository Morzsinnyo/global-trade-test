'use client';

import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import StatsCounter from '@/components/StatsCounter';
import PillarCards from '@/components/PillarCards';
import ProductPreview from '@/components/ProductPreview';
import SlidingTestimonials from '@/components/SlidingTestimonials';
import AboutTeaser from '@/components/AboutTeaser';

export default function HomeContent() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <StatsCounter />
      <PillarCards />
      <ProductPreview />
      <SlidingTestimonials />
      <AboutTeaser />
    </>
  );
}
