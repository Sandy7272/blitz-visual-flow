import { motion, useAnimation } from "framer-motion";
import { Sofa, Shirt, Smartphone, Diamond, Coffee, Car, Crown, CircleAlert, Footprints, FootprintsIcon } from "lucide-react";
import chair_output from "@/assets/chair_output.png";
import chair_input from "@/assets/chair_input.png";
import shirt_output from "@/assets/shirt_output.png";
import shirt_input from "@/assets/shirt_input.jpg";
import jewelry_output from "@/assets/jewelry_output.png";
import jewelry_input from "@/assets/jewelry_input.png";
import artifact_output from "@/assets/artifact_output.png";
import artifact_input from "@/assets/artifact_input.jpg";
import food_output from "@/assets/food_output.png";
import food_input from "@/assets/food_input.png";
import footwear_output from "@/assets/footwear_output.jpeg";
import footwear_input from "@/assets/footwear_input.png";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, ElementType } from "react";

interface Category {
  icon: ElementType;
  name: string;
  examples: string[];
  description: string;
  image: string;
  inputImage: string;
}

const categories: Category[] = [
  {
    icon: Sofa,
    name: "Furniture & Home Decor",
    examples: ["Tables", "Chairs", "Lamps"],
    description: "Create lifestyle renders in any room",
    image: chair_output,
    inputImage: chair_input,
  },
  {
    icon: Shirt,
    name: "Fashion & Apparel",
    examples: ["Clothing", "Shoes", "Bags"],
    description: "Model clothing without photoshoots",
    image: shirt_output,
    inputImage: shirt_input,
  },
{
  icon:FootprintsIcon, 
  name: "Footwear",
  examples: ["Shoes", "Sandals", "Sneakers"],
  description: "High-quality lifestyle footwear visuals",
  image: footwear_output,
  inputImage: footwear_input,
},
  {
    icon: Diamond,
    name: "Jewelry & Accessories",
    examples: ["Rings", "Watches", "Necklaces"],
    description: "Macro detail shots & lifestyle scenes",
    image: jewelry_output,
    inputImage: jewelry_input,
  },
  {
    icon: Coffee,
    name: "Food & Beverages",
    examples: ["Packaged", "Drinks", "Snacks"],
    description: "Appetizing product photography",
    image: food_output,
    inputImage: food_input,
  },
  {
  icon: Crown,
  name: "Artifacts & Collectibles",
  examples: ["Sculptures", "Antiques", "Handicrafts"],
  description: "Showcase rare artifacts and collectibles in 3D.",
  image: artifact_output,
  inputImage: artifact_input,
},
];

const MarketCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 px-4">
            Perfect for <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
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
                    whileTap={{ scale: 1.02 }}
                    className="group relative h-[500px] md:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
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
                              backgroundColor: "hsl(var(--muted))",
                              color: "hsl(var(--foreground))",
                              scale: 1.05,
                              borderColor: "hsl(var(--border))"
                            }}
                            className="text-xs px-3 py-1.5 rounded-full bg-muted/20 border border-muted/40 text-muted-foreground cursor-pointer transition-all backdrop-blur-sm"
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
