import { Hero } from '../components/sections/Hero';
import { ServicesOverview } from '../components/sections/ServicesOverview';
import { AboutIntro } from '../components/sections/AboutIntro';
import { Capabilities } from '../components/sections/Capabilities';
import { HowWeWork } from '../components/sections/HowWeWork';
import { WhyRCI } from '../components/sections/WhyRCI';
import { Testimonials } from '../components/sections/Testimonials';
import { FinalCTA } from '../components/sections/FinalCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutIntro />
      <Capabilities />
      <HowWeWork />
      <WhyRCI />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
