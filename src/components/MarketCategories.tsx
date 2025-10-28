import { motion, useAnimation } from "framer-motion";
import { Sofa, Shirt, Smartphone, Diamond, Coffee, Car } from "lucide-react";
import chair1 from "@/assets/chair_lifestyle1.jpg";
import chair3 from "@/assets/chair_lifestyle3.jpg";
import asset1 from "@/assets/1.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";

const categories = [
  {
    icon: Sofa,
    name: "Furniture & Home Decor",
    examples: ["Tables", "Chairs", "Lamps"],
    description: "Create lifestyle renders in any room",
    image: chair1,
    inputImage: chair1,
  },
  {
    icon: Shirt,
    name: "Fashion & Apparel",
    examples: ["Clothing", "Shoes", "Bags"],
    description: "Model clothing without photoshoots",
    image: chair3,
    inputImage: chair3,
  },
  {
    icon: Smartphone,
    name: "Electronics & Gadgets",
    examples: ["Phones", "Laptops", "Cameras"],
    description: "Studio-quality tech photography",
    image: asset1,
    inputImage: asset1,
  },
  {
    icon: Diamond,
    name: "Jewelry & Accessories",
    examples: ["Rings", "Watches", "Necklaces"],
    description: "Macro detail shots & lifestyle scenes",
    image: chair1,
    inputImage: chair1,
  },
  {
    icon: Coffee,
    name: "Food & Beverages",
    examples: ["Packaged", "Drinks", "Snacks"],
    description: "Appetizing product photography",
    image: chair3,
    inputImage: chair3,
  },
  {
    icon: Car,
    name: "Automotive & Vehicles",
    examples: ["Cars", "Bikes", "Parts"],
    description: "Professional automotive photography",
    image: asset1,
    inputImage: asset1,
  },
];

const MarketCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section className="py-32 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
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

        {/* Cinematic Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayRef.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isHovered = hoveredIndex === index;
              
              return (
                <CarouselItem 
                  key={index} 
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.6, 
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.1 
                    }}
                    animate={{
                      scale: isHovered ? 1.05 : hoveredIndex !== null && hoveredIndex !== index ? 0.95 : 1,
                      y: isHovered ? -8 : 0,
                    }}
                    className="group relative h-[600px] rounded-3xl overflow-hidden cursor-pointer"
                  >
                    {/* Ken Burns Background Image */}
                    <motion.div
                      className="absolute inset-0 w-full h-full"
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{ duration: 8, ease: "linear" }}
                    >
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover ken-burns-effect"
                      />
                    </motion.div>
                    
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    
                    {/* Glow Effect on Hover */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 transition-opacity duration-300"
                      animate={{
                        opacity: isHovered ? 1 : 0,
                      }}
                      style={{
                        boxShadow: "inset 0 0 60px rgba(45, 255, 167, 0.3)",
                      }}
                    />

                    {/* Input Image Thumbnail (shows on hover) */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1 : 0.8,
                        y: isHovered ? 0 : 20,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                      <div className="relative">
                        <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-primary/60 shadow-2xl backdrop-blur-sm bg-background/20">
                          <img
                            src={category.inputImage}
                            alt="Input"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-primary text-background text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                          Input
                        </div>
                      </div>
                    </motion.div>

                    {/* Bottom Content Area */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/40 flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white">
                          {category.name}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4">
                        {category.description}
                      </p>

                      {/* Category Tags */}
                      <div className="flex gap-2 flex-wrap">
                        {category.examples.map((example, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 + 0.2 }}
                            whileHover={{ 
                              backgroundColor: "hsl(var(--primary))",
                              color: "hsl(var(--background))",
                              scale: 1.05
                            }}
                            className="text-xs px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary cursor-pointer transition-all backdrop-blur-sm"
                          >
                            {example}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Card Border Glow */}
                    <div className="absolute inset-0 rounded-3xl border border-primary/20 pointer-events-none" />
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default MarketCategories;
