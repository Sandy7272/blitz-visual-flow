import { motion, useScroll, useTransform } from "framer-motion";
import { Upload, Sparkles, Image as ImageIcon, Type, Box } from "lucide-react";
import { useRef } from "react";
import uploadImage from "@/assets/step-1-upload.gif";
import aiProcessImage from "@/assets/step-2-ai-process.jpg";
import lifestyleImage from "@/assets/step-3-lifestyle.jpg";
import descriptionImage from "@/assets/step-4-description.jpg";
import modelImage from "@/assets/step-5-3d-model.png";

const steps = [
  {
    icon: Upload,
    title: "Record Video",
    description: "Record a 30-second video of your product from multiple angles. Our AI does the rest.",
    image: uploadImage,
  },
  {
    icon: Sparkles,
    title: "AI Processes Your Product",
    description: "Advanced AI analyzes your video, extracts key frames, and removes backgrounds automatically.",
    image: aiProcessImage,
  },
  {
    icon: ImageIcon,
    title: "Generate Lifestyle Scenes",
    description: "Choose from hundreds of professional environments. Your product is automatically placed in stunning settings.",
    image: lifestyleImage,
  },
  {
    icon: Type,
    title: "AI Writes Product Copy",
    description: "Get SEO-optimized titles, descriptions, and bullet points tailored to your marketplace.",
    image: descriptionImage,
  },
  {
    icon: Box,
    title: "Export 3D Model",
    description: "Download interactive 3D models ready for AR experiences and 360° viewers.",
    image: modelImage,
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
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20">
                    <StepIcon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-display font-bold text-primary/20">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Image/Illustration */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1"
                >
                  <div className="relative rounded-3xl overflow-hidden glass-card p-8">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
