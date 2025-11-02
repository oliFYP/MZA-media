import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { ImpactSection } from "./components/ImpactSection";
import { DiverseMedia } from "./components/DiverseMedia";
import { Excellence } from "./components/Excellence";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Navigation } from "./components/Navigation";
import VideoTicker from "./components/VideoTicker";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="min-h-screen ">
        <Hero />
        <VideoTicker />
        <Services />
        <ImpactSection />
        <DiverseMedia />
        <Excellence />
        <FAQ />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
