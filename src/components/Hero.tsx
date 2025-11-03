import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Box, Camera, Image as ImageIcon, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Two-Column Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-left"
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              One Video.{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Endless Visuals.
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Upload a single product video and let Blitz generate <span className="text-foreground font-semibold">3D models</span>, <span className="text-foreground font-semibold">studio-quality photos</span>, and <span className="text-foreground font-semibold">lifestyle images</span> — everything your eCommerce listing needs.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button size="lg" className="text-base px-10 min-h-[56px] glow-effect group text-black font-bold">
                Try Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-10 min-h-[56px] font-semibold">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Animation Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* Video Input */}
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2"
              animate={{ 
                y: [-10, 10, -10],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <motion.div
                className="relative w-24 h-24 rounded-2xl glass-card flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(45, 255, 167, 0.2)",
                    "0 0 40px rgba(45, 255, 167, 0.4)",
                    "0 0 20px rgba(45, 255, 167, 0.2)"
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
                <Video className="w-12 h-12 text-primary relative z-10" />
              </motion.div>
              <p className="text-xs text-muted-foreground text-center mt-2 font-medium">Video Input</p>
            </motion.div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <motion.path
                d="M 100 250 Q 200 250 250 250"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 0.8, repeat: Infinity, repeatDelay: 2 }}
              />
              <motion.path
                d="M 350 250 Q 450 200 520 150"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 1.5, repeat: Infinity, repeatDelay: 2 }}
              />
              <motion.path
                d="M 350 250 Q 450 250 520 250"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 1.7, repeat: Infinity, repeatDelay: 2 }}
              />
              <motion.path
                d="M 350 250 Q 450 300 520 350"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 1.9, repeat: Infinity, repeatDelay: 2 }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(162, 100%, 59%)" stopOpacity="0" />
                  <stop offset="100%" stopColor="hsl(162, 100%, 59%)" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(162, 100%, 59%)" stopOpacity="1" />
                  <stop offset="100%" stopColor="hsl(275, 70%, 65%)" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>

            {/* AI Processing Core */}
            <motion.div
              className="relative z-10"
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <motion.div
                className="relative w-32 h-32 rounded-3xl glass-card flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(45, 255, 167, 0.3)",
                    "0 0 60px rgba(160, 100, 255, 0.5)",
                    "0 0 30px rgba(45, 255, 167, 0.3)"
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-primary/20 to-transparent rounded-3xl" />
                <Sparkles className="w-16 h-16 text-primary relative z-10" />
                <motion.div
                  className="absolute inset-0 border-2 border-primary/30 rounded-3xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <p className="text-xs text-muted-foreground text-center mt-3 font-medium">Blitz AI Core</p>
            </motion.div>

            {/* Creative Outputs */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-8">
              {/* 3D Model */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <motion.div
                  className="relative w-20 h-20 rounded-xl glass-card flex flex-col items-center justify-center group"
                  whileHover={{ scale: 1.1, x: 10 }}
                  animate={{ 
                    y: [0, -8, 0],
                    boxShadow: [
                      "0 0 15px rgba(45, 255, 167, 0.2)",
                      "0 0 30px rgba(45, 255, 167, 0.4)",
                      "0 0 15px rgba(45, 255, 167, 0.2)"
                    ]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl" />
                  <Box className="w-9 h-9 text-primary mb-1" />
                  <span className="text-[9px] font-semibold text-muted-foreground">3D Model</span>
                </motion.div>
              </motion.div>

              {/* Studio Photo */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <motion.div
                  className="relative w-20 h-20 rounded-xl glass-card flex flex-col items-center justify-center group"
                  whileHover={{ scale: 1.1, x: 10 }}
                  animate={{ 
                    y: [0, -8, 0],
                    boxShadow: [
                      "0 0 15px rgba(160, 100, 255, 0.2)",
                      "0 0 30px rgba(160, 100, 255, 0.4)",
                      "0 0 15px rgba(160, 100, 255, 0.2)"
                    ]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-xl" />
                  <Camera className="w-9 h-9 text-primary mb-1" />
                  <span className="text-[9px] font-semibold text-muted-foreground">Studio Photo</span>
                </motion.div>
              </motion.div>

              {/* Lifestyle Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                <motion.div
                  className="relative w-20 h-20 rounded-xl glass-card flex flex-col items-center justify-center group"
                  whileHover={{ scale: 1.1, x: 10 }}
                  animate={{ 
                    y: [0, -8, 0],
                    boxShadow: [
                      "0 0 15px rgba(45, 255, 167, 0.2)",
                      "0 0 30px rgba(45, 255, 167, 0.4)",
                      "0 0 15px rgba(45, 255, 167, 0.2)"
                    ]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl" />
                  <ImageIcon className="w-9 h-9 text-primary mb-1" />
                  <span className="text-[9px] font-semibold text-muted-foreground">Lifestyle</span>
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
