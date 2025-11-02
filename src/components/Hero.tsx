import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Cloud, Box, Sparkles, Camera, Image as ImageIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-accent/30 via-accent/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-display font-black mb-8 leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            One Video.{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Infinite Creative Outputs.
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            Turn any product video into 3D models, studio-quality photos, and lifestyle visuals — everything eCommerce listings need.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
          >
            <Button size="lg" className="text-base px-10 min-h-[60px] w-full sm:w-auto glow-effect group text-black font-bold tracking-wide">
              Try Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-10 min-h-[60px] w-full sm:w-auto font-semibold tracking-wide">
              Contact Us
            </Button>
          </motion.div>
        </div>

        {/* Pipeline Flow Visualization */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Step 1: Video Input */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.9 }}
              className="flex flex-col items-center group"
            >
              <motion.div
                className="relative w-32 h-32 rounded-2xl glass-card flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500"
                whileHover={{ scale: 1.1 }}
                animate={{ 
                  y: [0, -10, 0],
                  boxShadow: [
                    "0 0 20px rgba(45, 255, 167, 0.3)",
                    "0 0 40px rgba(45, 255, 167, 0.5)",
                    "0 0 20px rgba(45, 255, 167, 0.3)"
                  ]
                }}
                transition={{ 
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
                <Video className="w-16 h-16 text-primary relative z-10" />
              </motion.div>
              <h3 className="text-lg font-bold text-foreground tracking-wide mb-1">Video Input</h3>
              <p className="text-sm text-muted-foreground text-center">Upload product video</p>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="hidden lg:block"
            >
              <motion.div
                animate={{ 
                  x: [0, 10, 0],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-12 h-12 text-primary" />
              </motion.div>
            </motion.div>

            {/* Step 2: AI Processing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.9 }}
              className="flex flex-col items-center group"
            >
              <motion.div
                className="relative w-40 h-40 rounded-3xl glass-card flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500"
                whileHover={{ scale: 1.1 }}
                animate={{ 
                  rotate: [0, 360],
                  boxShadow: [
                    "0 0 30px rgba(45, 255, 167, 0.4)",
                    "0 0 60px rgba(160, 100, 255, 0.6)",
                    "0 0 30px rgba(45, 255, 167, 0.4)"
                  ]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/20 to-transparent rounded-3xl" />
                <Sparkles className="w-20 h-20 text-primary relative z-10" />
                <motion.div
                  className="absolute inset-0 border-2 border-primary/30 rounded-3xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground tracking-wide mb-1">AI Processing</h3>
              <p className="text-sm text-muted-foreground text-center">Intelligent conversion</p>
            </motion.div>

            {/* Arrow 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="hidden lg:block"
            >
              <motion.div
                animate={{ 
                  x: [0, 10, 0],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <ArrowRight className="w-12 h-12 text-primary" />
              </motion.div>
            </motion.div>

            {/* Step 3: Creative Outputs */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.9 }}
              className="flex flex-col items-center"
            >
              <div className="flex gap-6 mb-4">
                <motion.div
                  className="relative w-24 h-24 rounded-xl glass-card flex flex-col items-center justify-center group hover:scale-110 transition-all duration-500"
                  whileHover={{ scale: 1.15, y: -10 }}
                  animate={{ 
                    y: [0, -8, 0],
                    boxShadow: [
                      "0 0 15px rgba(45, 255, 167, 0.3)",
                      "0 0 30px rgba(45, 255, 167, 0.5)",
                      "0 0 15px rgba(45, 255, 167, 0.3)"
                    ]
                  }}
                  transition={{ 
                    y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 },
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl" />
                  <Box className="w-10 h-10 text-primary mb-1" />
                  <span className="text-[10px] font-semibold text-muted-foreground">3D Model</span>
                </motion.div>

                <motion.div
                  className="relative w-24 h-24 rounded-xl glass-card flex flex-col items-center justify-center group hover:scale-110 transition-all duration-500"
                  whileHover={{ scale: 1.15, y: -10 }}
                  animate={{ 
                    y: [0, -8, 0],
                    boxShadow: [
                      "0 0 15px rgba(45, 255, 167, 0.3)",
                      "0 0 30px rgba(45, 255, 167, 0.5)",
                      "0 0 15px rgba(45, 255, 167, 0.3)"
                    ]
                  }}
                  transition={{ 
                    y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-xl" />
                  <Camera className="w-10 h-10 text-primary mb-1" />
                  <span className="text-[10px] font-semibold text-muted-foreground">Studio Photo</span>
                </motion.div>

                <motion.div
                  className="relative w-24 h-24 rounded-xl glass-card flex flex-col items-center justify-center group hover:scale-110 transition-all duration-500"
                  whileHover={{ scale: 1.15, y: -10 }}
                  animate={{ 
                    y: [0, -8, 0],
                    boxShadow: [
                      "0 0 15px rgba(45, 255, 167, 0.3)",
                      "0 0 30px rgba(45, 255, 167, 0.5)",
                      "0 0 15px rgba(45, 255, 167, 0.3)"
                    ]
                  }}
                  transition={{ 
                    y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl" />
                  <ImageIcon className="w-10 h-10 text-primary mb-1" />
                  <span className="text-[10px] font-semibold text-muted-foreground">Lifestyle Visual</span>
                </motion.div>
              </div>
              <h3 className="text-lg font-bold text-foreground tracking-wide mb-1">Creative Outputs</h3>
              <p className="text-sm text-muted-foreground text-center">Professional assets</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
