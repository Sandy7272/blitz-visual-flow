import { motion, useScroll, useTransform } from "framer-motion";
import { Upload, Camera, Home, FileText, Box } from "lucide-react";
import { useRef } from "react";
import productStudio from "@/assets/product-studio.jpg";
import productLifestyle from "@/assets/product-lifestyle.jpg";
import product3d from "@/assets/product-3d.jpg";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Video",
    description: "Simply upload a 30-second product video from any angle. No special equipment needed.",
    image: productStudio,
  },
  {
    icon: Camera,
    title: "AI Generates Studio Shots",
    description: "Our AI creates professional studio-quality product photos with perfect lighting and backgrounds.",
    image: productStudio,
  },
  {
    icon: Home,
    title: "Lifestyle Scenes",
    description: "Get beautiful lifestyle renders showing your product in real-world environments.",
    image: productLifestyle,
  },
  {
    icon: FileText,
    title: "AI-Written Description",
    description: "SEO-optimized product descriptions generated automatically with key features highlighted.",
    image: null,
  },
  {
    icon: Box,
    title: "Interactive 3D Model",
    description: "Receive a fully interactive 3D model that customers can rotate and explore.",
    image: product3d,
  },
];

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your product video into a complete asset library in just a few clicks
          </p>
        </motion.div>

        <div className="space-y-32">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-20`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center glow-effect">
                      <StepIcon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-6xl font-bold text-primary/20">0{index + 1}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                </div>

                {/* Visual */}
                <div className="flex-1 relative">
                  {step.image ? (
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      className="relative rounded-3xl overflow-hidden glass-card p-4"
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-auto rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-3xl" />
                    </motion.div>
                  ) : (
                    <div className="glass-card rounded-3xl p-8 glow-effect">
                      <div className="space-y-4">
                        <div className="h-8 bg-primary/20 rounded-lg w-3/4 animate-glow" />
                        <div className="h-8 bg-secondary/20 rounded-lg w-full" />
                        <div className="h-8 bg-accent/20 rounded-lg w-5/6" />
                        <div className="h-8 bg-primary/20 rounded-lg w-4/5" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
