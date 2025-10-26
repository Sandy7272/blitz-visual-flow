import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does the AI generate 3D models from video?",
    answer: "Our AI uses advanced computer vision to analyze your video frames, extract the product's geometry, and reconstruct a full 3D model. It identifies key features, depth, and textures to create an accurate digital twin of your product.",
  },
  {
    question: "What video quality do I need?",
    answer: "Any modern smartphone video works great! We recommend 1080p or higher, good lighting, and capturing your product from multiple angles. The AI can handle various lighting conditions and backgrounds.",
  },
  {
    question: "How long does processing take?",
    answer: "Most products are processed in under 2 minutes. Complex items with intricate details may take up to 5 minutes. You'll receive a notification when your assets are ready to download.",
  },
  {
    question: "What file formats can I export?",
    answer: "Images: PNG, JPG, WebP. 3D Models: GLTF, FBX, OBJ, USD. Videos: MP4, MOV. We also provide JSON metadata with product descriptions and SEO keywords.",
  },
  {
    question: "Can I edit the AI-generated assets?",
    answer: "Yes! All assets are fully editable. You can adjust lighting, backgrounds, colors, and compositions using our built-in editor or export to your favorite tools like Photoshop or Blender.",
  },
  {
    question: "Is there a limit on uploads?",
    answer: "Limits depend on your plan. Starter: 10 videos/month, Professional: unlimited, Enterprise: unlimited + priority processing. All plans include unlimited downloads of generated assets.",
  },
  {
    question: "Do you offer API access?",
    answer: "Yes! Professional and Enterprise plans include full API access. Integrate Blitz directly into your workflow, e-commerce platform, or custom applications. Documentation available at docs.blitz.ai",
  },
  {
    question: "What platforms do you integrate with?",
    answer: "We support 20+ platforms including Shopify, Amazon, eBay, Etsy, WooCommerce, Instagram, Facebook, Pinterest, and more. One-click export to any connected platform.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level encryption, SOC 2 certified infrastructure, and GDPR-compliant data handling. Your videos and generated assets are private and never used for training or shared with third parties.",
  },
  {
    question: "What's your refund policy?",
    answer: "We offer a 14-day money-back guarantee on all plans. If you're not satisfied, contact support for a full refund—no questions asked.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Blitz AI
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 flex items-start justify-between gap-4 text-left hover:bg-primary/5 transition-colors"
                  >
                    <span className="font-bold text-lg">{faq.question}</span>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-primary" />
                      ) : (
                        <Plus className="w-4 h-4 text-primary" />
                      )}
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 border-2 border-primary/60 text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-black transition-all"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
