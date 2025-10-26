import { motion } from "framer-motion";
import { Sofa, Shirt, Smartphone, Diamond, Coffee, Palette } from "lucide-react";
import chair1 from "@/assets/chair_lifestyle1.jpg";
import chair3 from "@/assets/chair_lifestyle3.jpg";
import asset1 from "@/assets/1.jpg";

const categories = [
  {
    icon: Sofa,
    name: "Furniture & Home Decor",
    examples: ["Tables", "Chairs", "Lamps"],
    useCase: "Create lifestyle renders in any room",
    image: chair1,
  },
  {
    icon: Shirt,
    name: "Fashion & Apparel",
    examples: ["Clothing", "Shoes", "Bags"],
    useCase: "Model clothing without photoshoots",
    image: chair3,
  },
  {
    icon: Smartphone,
    name: "Electronics & Gadgets",
    examples: ["Phones", "Laptops", "Cameras"],
    useCase: "Studio-quality tech photography",
    image: asset1,
  },
  {
    icon: Diamond,
    name: "Jewelry & Accessories",
    examples: ["Rings", "Watches", "Necklaces"],
    useCase: "Macro detail shots & lifestyle scenes",
    image: chair1,
  },
  {
    icon: Coffee,
    name: "Food & Beverage",
    examples: ["Packaged", "Drinks", "Snacks"],
    useCase: "Appetizing product photography",
    image: chair3,
  },
  {
    icon: Palette,
    name: "Crafts & Handmade",
    examples: ["Art", "Pottery", "Decor"],
    useCase: "Showcase your creations professionally",
    image: asset1,
  },
];

const MarketCategories = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Perfect for <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by sellers across all product categories
          </p>
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="flex-none w-80 snap-center"
                >
                  <div className="glass-card rounded-3xl p-6 h-full hover:border-primary/30 transition-all group">
                    {/* Image */}
                    <div className="relative mb-6 rounded-2xl overflow-hidden h-48">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      
                      {/* Icon overlay */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>

                    {/* Examples */}
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {category.examples.map((example, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {example}
                        </span>
                      ))}
                    </div>

                    {/* Use case */}
                    <p className="text-sm text-muted-foreground">
                      {category.useCase}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-8 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-8 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">
            ← Scroll to explore all categories →
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketCategories;
