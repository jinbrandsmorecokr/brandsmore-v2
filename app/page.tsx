
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <Footer />
    </div>
  );
}
