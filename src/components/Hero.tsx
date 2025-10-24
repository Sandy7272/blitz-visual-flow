import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-mobile-recording.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Mobile recording product illustration" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Floating orbs - subtle */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            One 30-Second Video.{" "}
            <span className="gradient-text">
              A Complete Product Listing.
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transform your product video into studio photos, lifestyle renders, 
            3D models, and SEO-ready descriptions — all powered by AI in seconds.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button size="lg" className="text-lg px-10 group">
              Start Free Photoshoot
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">30s</div>
              <div className="text-sm text-muted-foreground">Processing Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Assets Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-glow" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
