import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { FloatingActions } from '../components/layout/FloatingActions';
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';
import { ComparativoSection } from '../components/sections/ComparativoSection';
import { CompromissosSection } from '../components/sections/CompromissosSection';
import { CtaSection } from '../components/sections/CtaSection';
import { DepoimentosSection } from '../components/sections/DepoimentosSection';
import { DiferenciaisSection } from '../components/sections/DiferenciaisSection';
import { GaleriaSection } from '../components/sections/GaleriaSection';
import { HeroSection } from '../components/sections/HeroSection';
import { ServicosSection } from '../components/sections/ServicosSection';
import { SobreSection } from '../components/sections/SobreSection';

export function HomePage() {
  useRevealOnScroll();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SobreSection />
        <GaleriaSection />
        <DiferenciaisSection />
        <ComparativoSection />
        <ServicosSection />
        <DepoimentosSection />
        <CompromissosSection />
        <CtaSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
