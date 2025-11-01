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
              Convert Any Video Into{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                3D
              </span>{" "}
              — Instantly.
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              AI pipeline that turns your product videos into interactive 3D models in seconds.
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
            <div className="flex items-center gap-6 md:gap-8">
              {/* Step 1: Video Input */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl glass-card flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                  <Video className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-muted-foreground">Video</span>
              </motion.div>

              {/* Arrow 1 */}
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3], x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block"
              >
                <svg width="40" height="2" viewBox="0 0 40 2" fill="none" className="text-primary">
                  <path d="M0 1H40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                  <path d="M35 0L40 1L35 2" fill="currentColor"/>
                </svg>
              </motion.div>

              {/* Step 2: AI Processing */}
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl glass-card flex items-center justify-center glow-effect">
                  <Cloud className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-muted-foreground">AI</span>
              </motion.div>

              {/* Arrow 2 */}
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3], x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="hidden sm:block"
              >
                <svg width="40" height="2" viewBox="0 0 40 2" fill="none" className="text-primary">
                  <path d="M0 1H40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                  <path d="M35 0L40 1L35 2" fill="currentColor"/>
                </svg>
              </motion.div>

              {/* Step 3: 3D Output */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl glass-card flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                  <Box className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-muted-foreground">3D</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
