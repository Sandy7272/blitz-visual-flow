import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Video, Cloud, Box, ArrowRight, Upload } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Floating background blobs */}
      <div className="floating-blob floating-blob-1" />
      <div className="floating-blob floating-blob-2" />
      <div className="floating-blob floating-blob-3" />

      {/* Content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              AI that converts any video into a{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                3D product
              </span>{" "}
              — instantly.
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Upload a product video. Get studio photos, 3D models, lifestyle scenes, and SEO descriptions in under 2 minutes.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button size="lg" className="text-lg px-10 min-h-[56px] w-full sm:w-auto glow-effect group">
                Try Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 min-h-[56px] w-full sm:w-auto">
                Contact Us
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>2 min processing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>4K output</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>95% time saved</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Interactive Pipeline Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative"
          >
            <div className="flex flex-col items-center gap-8 lg:gap-12">
              {/* Pipeline Step 1: Upload */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="pipeline-step w-full"
              >
                <div className="glass-card rounded-3xl p-8 w-full max-w-md hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Video className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Upload Video</h3>
                      <p className="text-sm text-muted-foreground">30-second product video</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Arrow */}
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent" />
              </motion.div>

              {/* Pipeline Step 2: AI Processing */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="pipeline-step w-full"
              >
                <div className="glass-card rounded-3xl p-8 w-full max-w-md glow-effect">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center"
                    >
                      <Cloud className="w-8 h-8 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold">AI Processing</h3>
                      <p className="text-sm text-muted-foreground">Advanced cloud pipeline</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Arrow */}
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="flex items-center justify-center"
              >
                <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent" />
              </motion.div>

              {/* Pipeline Step 3: 3D Output */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="pipeline-step w-full"
              >
                <div className="glass-card rounded-3xl p-6 w-full max-w-md hover:scale-105 transition-transform duration-300">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <Box className="w-6 h-6 text-primary" />
                    </div>
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                      <Upload className="w-6 h-6 text-accent" />
                    </div>
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center col-span-2">
                      <span className="text-xs font-semibold text-muted-foreground">SEO Description</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-center">Complete 3D Asset Pack</h3>
                  <p className="text-sm text-muted-foreground text-center">Photos, models, descriptions</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
