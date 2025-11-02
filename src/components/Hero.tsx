import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Cloud, Box } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Minimal background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/3" />

      {/* Content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              One Video.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Infinite Creative Outputs.
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Convert any product video into 3D models, studio-quality photos, and lifestyle visuals — everything your eCommerce listings need.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Button size="lg" className="text-base px-8 min-h-[56px] w-full sm:w-auto glow-effect group">
                Try Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 min-h-[56px] w-full sm:w-auto">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Simple Animated Pipeline Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="flex flex-col gap-8">
              {/* Input: Video */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-xl glass-card flex items-center justify-center group hover:scale-110 transition-transform duration-300"
                >
                  <Video className="w-8 h-8 text-primary" />
                </motion.div>
                <div>
                  <span className="text-sm font-semibold text-foreground block">Video Input</span>
                  <span className="text-xs text-muted-foreground">Upload product video</span>
                </div>
              </motion.div>

              {/* Arrow Down */}
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3], y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex justify-center"
              >
                <svg width="2" height="40" viewBox="0 0 2 40" fill="none" className="text-primary">
                  <path d="M1 0V40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                  <path d="M0 35L1 40L2 35" fill="currentColor"/>
                </svg>
              </motion.div>

              {/* AI Processing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                  className="w-16 h-16 rounded-xl glass-card flex items-center justify-center glow-effect"
                >
                  <Cloud className="w-8 h-8 text-primary" />
                </motion.div>
                <div>
                  <span className="text-sm font-semibold text-foreground block">AI Processing</span>
                  <span className="text-xs text-muted-foreground">Intelligent conversion</span>
                </div>
              </motion.div>

              {/* Arrow Down */}
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3], y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="flex justify-center"
              >
                <svg width="2" height="40" viewBox="0 0 2 40" fill="none" className="text-primary">
                  <path d="M1 0V40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                  <path d="M0 35L1 40L2 35" fill="currentColor"/>
                </svg>
              </motion.div>

              {/* Outputs: 3D, Studio, Lifestyle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex gap-4"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-14 h-14 rounded-lg glass-card flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                    <Box className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">3D Model</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-14 h-14 rounded-lg glass-card flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-7 h-7 text-primary rotate-90" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">Studio Photo</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-14 h-14 rounded-lg glass-card flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                    <Video className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">Lifestyle Visual</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
