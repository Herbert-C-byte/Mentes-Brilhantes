import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { TeamSection } from '@/components/landing/TeamSection';
import { ContactSection } from '@/components/landing/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
