import { Hero } from './components/Hero';
import { ServicesCarousel } from './components/ServicesCarousel';
import { ImpactSection } from './components/ImpactSection';
import { DiverseMedia } from './components/DiverseMedia';
import { Excellence } from './components/Excellence';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesCarousel />
      <ImpactSection />
      <DiverseMedia />
      <Excellence />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
