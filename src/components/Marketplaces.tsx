import { motion } from "framer-motion";
import { ShoppingBag, Package, Globe, Image, Code, Video } from "lucide-react";

const platforms = [
  { name: "Shopify", icon: ShoppingBag },
  { name: "Amazon", icon: Package },
  { name: "eBay", icon: Globe },
  { name: "Etsy", icon: ShoppingBag },
  { name: "WooCommerce", icon: Package },
  { name: "Instagram", icon: Image },
];

const exportFormats = [
  { name: "PNG/JPG", icon: Image },
  { name: "3D (GLTF)", icon: Code },
  { name: "Video", icon: Video },
];

const Marketplaces = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Suitable for all marketplaces, platforms, and channels
          </h2>
          <p className="text-muted-foreground">Export anywhere, in any format</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-sm text-muted-foreground text-center mb-6 uppercase tracking-wider">
              Marketplaces & Platforms
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {platforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card rounded-xl p-6 flex flex-col items-center justify-center gap-3 transition-smooth hover:border-primary/30"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                    <span className="text-sm font-medium text-center">{platform.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Export Formats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm text-muted-foreground text-center mb-6 uppercase tracking-wider">
              Export Formats
            </p>
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {exportFormats.map((format, index) => {
                const Icon = format.icon;
                return (
                  <motion.div
                    key={format.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card rounded-xl p-6 flex flex-col items-center justify-center gap-3 transition-smooth hover:border-primary/30"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                    <span className="text-sm font-medium text-center">{format.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Marketplaces;
