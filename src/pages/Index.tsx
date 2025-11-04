import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustedByBar from "@/components/TrustedByBar";
import BeforeAfter from "@/components/BeforeAfter";
import Features from "@/components/Features";
import MarketCategories from "@/components/MarketCategories";
import WorkflowVisualization from "@/components/WorkflowVisualization";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TrustedByBar />
      <BeforeAfter />
      <Features />
      <MarketCategories />
      <WorkflowVisualization />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
