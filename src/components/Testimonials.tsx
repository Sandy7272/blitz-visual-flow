import { motion } from "framer-motion";
import { Star, TrendingUp, Award } from "lucide-react";
import productStudio from "@/assets/product-studio.jpg";
import productLifestyle from "@/assets/product-lifestyle.jpg";
import product3d from "@/assets/product-3d.jpg";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "E-commerce Manager",
    company: "Modern Furniture Co.",
    industry: "Furniture",
    content:
      "Blitz transformed how we create product content. What used to take weeks now takes hours. The quality is incredible!",
    rating: 5,
    results: "80% cost reduction",
    image: productStudio,
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder",
    company: "Artisan Goods",
    industry: "Crafts",
    content:
      "As a small business, we can't afford professional photo shoots. Blitz gives us studio-quality images at a fraction of the cost.",
    rating: 5,
    results: "10x faster workflow",
    image: productLifestyle,
  },
  {
    name: "Emily Watson",
    role: "Marketing Director",
    company: "TechGear Plus",
    industry: "Electronics",
    content:
      "The 3D models are game-changing for our AR features. Our conversion rate increased by 40% after implementing Blitz.",
    rating: 5,
    results: "40% higher conversions",
    image: product3d,
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Loved by <span className="gradient-text">10,000+ Brands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses transforming their product content
          </p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-8 mt-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold">4.9/5 Rating</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold">Verified Reviews</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-3xl overflow-hidden hover:border-primary/30 transition-all group"
            >
              {/* Result image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.company} result`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Results badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">
                      {testimonial.results}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Industry badge */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
