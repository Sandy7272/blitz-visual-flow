import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { useState } from "react";

const AIDemo = () => {
  const [productName, setProductName] = useState("");
  const [features, setFeatures] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState("");

  const handleGenerate = () => {
    setIsGenerating(true);
    setGeneratedText("");
    
    // Simulate AI generation
    setTimeout(() => {
      const demo = `Introducing the ${productName || "innovative product"} - a revolutionary solution designed to transform your experience. ${features ? `Featuring ${features.toLowerCase()}, ` : ""}this premium product combines cutting-edge technology with elegant design. Perfect for professionals and enthusiasts alike, it delivers unmatched performance and reliability. Experience the future of innovation today.`;
      
      let index = 0;
      const interval = setInterval(() => {
        setGeneratedText(demo.slice(0, index));
        index++;
        if (index > demo.length) {
          clearInterval(interval);
          setIsGenerating(false);
        }
      }, 20);
    }, 500);
  };

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Try Our <span className="gradient-text">AI Writer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our AI creates compelling product descriptions instantly
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 glow-effect-lg">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label className="text-sm font-medium">Product Name</label>
                <Input
                  placeholder="e.g., Wireless Earbuds Pro"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="glass-card border-primary/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Key Features</label>
                <Input
                  placeholder="e.g., noise cancellation, 24h battery"
                  value={features}
                  onChange={(e) => setFeatures(e.target.value)}
                  className="glass-card border-primary/30"
                />
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full mb-8 glow-effect"
              size="lg"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              {isGenerating ? "Generating..." : "Generate Description"}
            </Button>

            {(generatedText || isGenerating) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="glass-card rounded-2xl p-6 relative overflow-hidden"
              >
                {isGenerating && (
                  <div className="absolute inset-0 border-2 border-primary rounded-2xl animate-glow" />
                )}
                <p className="text-lg leading-relaxed">
                  {generatedText}
                  {isGenerating && <span className="inline-block w-2 h-5 bg-primary ml-1 animate-glow" />}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIDemo;
