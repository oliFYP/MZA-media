import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { ImpactSection } from "../components/ImpactSection";

import { Pricing } from "../components/Pricing";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { About } from "../components/About";
import { Navigation } from "../components/Navigation";
import { Projects } from "../components/Projects";

export function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="min-h-screen ">
        <Hero />
        <Services />
        <Projects />
        <Pricing />
        <ImpactSection />

        <FAQ />
        <About />
        <Footer />
      </div>
    </div>
  );
}
