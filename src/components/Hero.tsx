import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Box, Image as ImageIcon, Sparkles, FileText } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import chairOutput from "@/assets/chair_output.png";
import shirtOutput from "@/assets/shirt_output.png";
import jewelryOutput from "@/assets/jewelry_output.png";

const products = [
  { name: "Chair", image: chairOutput },
  { name: "Shirt", image: shirtOutput },
  { name: "Jewelry", image: jewelryOutput },
];

const outputBadges = [
  { icon: Box, label: "3D Model", position: { top: "10%", left: "5%" }, delay: 0.6 },
  { icon: ImageIcon, label: "Studio Photo", position: { top: "10%", right: "5%" }, delay: 0.7 },
  { icon: Sparkles, label: "Lifestyle Scene", position: { bottom: "15%", left: "5%" }, delay: 0.8 },
  { icon: FileText, label: "SEO Copy", position: { bottom: "15%", right: "5%" }, delay: 0.9 },
];

const Hero = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null);

  // Auto-rotate products
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Simplified Background with Gradient Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Floating Orbs - Light parallax on mobile */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-12 md:pb-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-tight drop-shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              From Video to <span className="gradient-text">Storefront</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-10 font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              AI transforms your product video into complete listings in seconds
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button size="lg" className="text-lg px-10 min-h-[56px] w-full sm:w-auto glow-effect group">
                Start Free Photoshoot
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 min-h-[56px] w-full sm:w-auto">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Interactive Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Center Product Card */}
            <motion.div
              key={currentProduct}
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-80 h-80 lg:w-96 lg:h-96"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="glass-card rounded-3xl p-6 w-full h-full flex items-center justify-center border-2 border-primary/30 glow-effect">
                <motion.img
                  src={products[currentProduct].image}
                  alt={products[currentProduct].name}
                  className="w-full h-full object-contain rounded-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Connecting Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ overflow: "visible" }}
              >
                {outputBadges.map((badge, i) => {
                  const centerX = 50;
                  const centerY = 50;
                  const badgeX = badge.position.left ? 10 : 90;
                  const badgeY = badge.position.top ? 20 : 80;
                  
                  return (
                    <motion.line
                      key={i}
                      x1={`${centerX}%`}
                      y1={`${centerY}%`}
                      x2={`${badgeX}%`}
                      y2={`${badgeY}%`}
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      opacity="0.3"
                      initial={{ pathLength: 0 }}
                      animate={{ 
                        pathLength: 1,
                        opacity: hoveredBadge === i ? 0.6 : 0.3
                      }}
                      transition={{ duration: 1, delay: badge.delay }}
                    />
                  );
                })}
              </svg>
            </motion.div>

            {/* Orbiting Output Badges */}
            {outputBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: hoveredBadge === i ? 1.15 : 1,
                    y: hoveredBadge === i ? -5 : 0,
                  }}
                  transition={{ delay: badge.delay, duration: 0.5 }}
                  onHoverStart={() => setHoveredBadge(i)}
                  onHoverEnd={() => setHoveredBadge(null)}
                  className="absolute glass-card rounded-2xl p-4 cursor-pointer hover:border-primary/50 transition-all group"
                  style={badge.position}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-xs font-semibold whitespace-nowrap">{badge.label}</p>
                  </motion.div>

                  {/* Pulse Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                    className="absolute inset-0 rounded-2xl border-2 border-primary"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
