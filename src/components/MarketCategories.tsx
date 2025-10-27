import { motion } from "framer-motion";
import { Sofa, Shirt, Smartphone, Diamond, Coffee, Palette, Upload, Sparkles } from "lucide-react";
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
    uploadPlaceholder: "Upload furniture photo",
    sampleOutput: chair1,
  },
  {
    icon: Shirt,
    name: "Fashion & Apparel",
    examples: ["Clothing", "Shoes", "Bags"],
    useCase: "Model clothing without photoshoots",
    image: chair3,
    uploadPlaceholder: "Upload garment photo",
    sampleOutput: chair3,
  },
  {
    icon: Smartphone,
    name: "Electronics & Gadgets",
    examples: ["Phones", "Laptops", "Cameras"],
    useCase: "Studio-quality tech photography",
    image: asset1,
    uploadPlaceholder: "Upload device photo",
    sampleOutput: asset1,
  },
  {
    icon: Diamond,
    name: "Jewelry & Accessories",
    examples: ["Rings", "Watches", "Necklaces"],
    useCase: "Macro detail shots & lifestyle scenes",
    image: chair1,
    uploadPlaceholder: "Upload jewelry photo",
    sampleOutput: chair1,
  },
  {
    icon: Coffee,
    name: "Food & Beverage",
    examples: ["Packaged", "Drinks", "Snacks"],
    useCase: "Appetizing product photography",
    image: chair3,
    uploadPlaceholder: "Upload food photo",
    sampleOutput: chair3,
  },
  {
    icon: Palette,
    name: "Crafts & Handmade",
    examples: ["Art", "Pottery", "Decor"],
    useCase: "Showcase your creations professionally",
    image: asset1,
    uploadPlaceholder: "Upload craft photo",
    sampleOutput: asset1,
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

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(8px)" }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  filter: "blur(0px)" 
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.1 
                }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group"
              >
                <div className="category-card-premium rounded-3xl overflow-hidden h-[500px] flex flex-col hover:border-primary/30 transition-all duration-300 hover:shadow-glow-lg">
                  {/* Image Area - 60% height */}
                  <div className="relative h-[60%] overflow-hidden">
                    {/* Hero Image */}
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Image Overlay Gradient */}
                    <div className="image-overlay-gradient absolute inset-0" />
                    
                    {/* Icon Badge - Bottom Left */}
                    <motion.div 
                      className="absolute bottom-4 left-4 z-10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <div className="glass-icon-badge w-14 h-14 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </motion.div>
                    
                    {/* Upload Placeholder - Center Overlay */}
                    <motion.div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.5, 0.8, 0.5] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <div className="upload-placeholder-dashed rounded-2xl px-6 py-4 flex flex-col items-center justify-center gap-2 min-w-[200px]">
                        <Upload className="w-6 h-6 text-primary" />
                        <span className="text-xs text-primary font-medium">
                          {category.uploadPlaceholder}
                        </span>
                      </div>
                    </motion.div>
                    
                    {/* Sample Output Thumbnail - Top Right */}
                    <motion.div 
                      className="absolute top-4 right-4 z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-primary/40 shadow-lg">
                        <img
                          src={category.sampleOutput}
                          alt="AI Generated Sample"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm px-1 py-0.5 flex items-center justify-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-background" />
                          <span className="text-[8px] font-bold text-background">AI</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Area - 40% height */}
                  <div className="h-[40%] p-6 flex flex-col justify-between bg-card/50 backdrop-blur-sm">
                    {/* Title with inline icon */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                        <Icon className="w-5 h-5" />
                        {category.name}
                      </h3>

                      {/* Example Pills */}
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {category.examples.map((example, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 + 0.2 }}
                            whileHover={{ 
                              backgroundColor: "hsl(var(--primary))",
                              color: "hsl(var(--primary-foreground))",
                              scale: 1.05
                            }}
                            className="text-xs px-3 py-1 rounded-full border border-primary/50 text-primary cursor-pointer transition-all"
                          >
                            {example}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Use Case */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.useCase}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarketCategories;
