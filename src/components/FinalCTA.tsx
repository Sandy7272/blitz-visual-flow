import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="glass-card rounded-3xl p-12 md:p-20 glow-effect-lg border-2 border-primary/30">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Transform Your Product <span className="gradient-text">Videos Today</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            >
              Join 10,000+ brands creating studio-quality assets in minutes, not weeks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-xl px-12 py-8 glow-effect group">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-xl px-12 py-8"
                >
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-sm text-muted-foreground"
            >
              No credit card required • 14-day free trial • Cancel anytime
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center gap-6 mt-8 flex-wrap opacity-60"
            >
              <span className="text-xs">🔒 SOC 2 Certified</span>
              <span className="text-xs">🛡️ GDPR Compliant</span>
              <span className="text-xs">⚡ 99.9% Uptime</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
