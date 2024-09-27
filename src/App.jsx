import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./sections/BenefitsSection";
import Collaboration from "./sections/CollaborationSection";
import Footer from "./sections/FooterSection";
import Header from "./components/Header";
import Hero from "./sections/HeroSection";
import Pricing from "./sections/PricingSection";
import Roadmap from "./sections/RoadmapSection";
import Services from "./sections/ServicesSection";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
