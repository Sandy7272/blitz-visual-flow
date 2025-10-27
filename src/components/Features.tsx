import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { Camera, Sparkles, Box, Type, Zap, Code, Palette, Cloud } from "lucide-react";
import productLifestyleImage from "@/assets/product_lifestyle_chair.png";
interface Feature {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  size: string;
  gradient: string;
  image?: string;
  link?: string;
}

const features: Feature[] = [
  {
    icon: Camera,
    title: "AI Studio Photography",
    description: "Perfect lighting & angles every time",
    size: "large",
    gradient: "from-primary/10 to-primary/5",
  },
    {
    icon: Box,
    title: "3D Model Export",
    description: "Interactive models for AR & 360°",
    size: "medium",
    gradient: "from-primary/10 to-primary/5",
  },
   {
    icon: Zap,
    title: "Batch Processing",
    description: "100+ products per hour",
    size: "small",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    icon: Type,
    title: "SEO Product Descriptions",
    description: "Optimized for search & conversions",
    size: "small",
    gradient: "from-accent/10 to-accent/5",
  },
  {
    icon: Sparkles,
    title: "Lifestyle Scene Generation",
    description: "Place your product in any environment",
    size: "large",
    gradient: "from-accent/10 to-accent/5",
  },
  {
    icon: Cloud,
    title: "Cloud-Powered Speed",
    description: "Results in under 2 minutes",
    size: "small",
    gradient: "from-accent/10 to-accent/5",
  },
   {
    icon: Palette,
    title: "Custom Branding",
    description: "Match your brand aesthetic",
    size: "small",
    gradient: "from-accent/10 to-accent/5",
  },
  {
    icon: Code,
    title: "Multi-Platform Export",
    description: "One-click to 20+ platforms",
    size: "medium",
    gradient: "from-primary/10 to-primary/5",
  },

];

const Features = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Everything You Need to <span className="gradient-text">Sell More</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional product assets powered by advanced AI. No photographers, no studios, no hassle.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colSpan = feature.size === "large" ? "md:col-span-2" : feature.size === "medium" ? "md:col-span-2" : "md:col-span-1";
              const rowSpan = feature.size === "large" ? "md:row-span-2" : "md:row-span-1";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`${colSpan} ${rowSpan} glass-card rounded-3xl p-8 hover:border-primary/30 transition-all group ${feature.link ? "" : "cursor-pointer"}`}
                >
                  <a href={feature.link} target="_blank" rel="noopener noreferrer" className="w-full h-full flex flex-col">
                    <div className={`w-full h-full flex flex-col ${feature.size === "large" ? "justify-between" : "justify-start"}`}>
                      {feature.image && (
                        <img src={feature.image} alt={feature.title} className="w-full h-56 object-cover rounded-xl mb-4" />
                      )}
                      <div>
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>

                      {feature.size === "large" && (
                        <div className="mt-8 pt-6 border-t border-border/50">
                          <span className="text-sm text-primary font-semibold group-hover:underline">
                            Learn more →
                          </span>
                        </div>
                      )}
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
