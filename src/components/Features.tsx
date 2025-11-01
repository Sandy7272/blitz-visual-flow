import { motion } from "framer-motion";
import { Zap, Bot, Globe } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Automated 3D Conversion",
    description: "Turn product videos into high-quality 3D assets using advanced AI.",
    gradient: "from-primary/20 via-primary/10 to-transparent",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get 3D outputs within minutes using our AI pipeline.",
    gradient: "from-accent/20 via-accent/10 to-transparent",
  },
  {
    icon: Globe,
    title: "Seamless Integration",
    description: "Works with all major formats and platforms.",
    gradient: "from-primary/20 via-primary/10 to-transparent",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 relative bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sell More
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional product assets powered by advanced AI. No photographers, no studios, no hassle.
          </p>
        </motion.div>

        {/* 3-column grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -12, scale: 1.05 }}
                  className="glass-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Text content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-6 text-sm font-semibold text-primary flex items-center gap-2"
                  >
                    Learn more →
                  </motion.div>
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
