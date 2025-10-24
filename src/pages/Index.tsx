import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marketplaces from "@/components/Marketplaces";
import HowItWorks from "@/components/HowItWorks";
import AIDemo from "@/components/AIDemo";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Marketplaces />
      <HowItWorks />
      <AIDemo />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
