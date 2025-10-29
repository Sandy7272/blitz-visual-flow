import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import productStudio from "@/assets/product-3d.png";
import productLifestyle from "@/assets/product_lifestyle_chair.png";
import heroMobile from "@/assets/hero-mobile-recording.jpg";
import beforeImage from "@/assets/before.jpg";
import afterImage from "@/assets/after.png";
import descriptionImage from "@/assets/description.png";

const BeforeAfter = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 px-4">
            From <span className="gradient-text">Video</span> to Professional Assets
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            See the transformation power of AI. Upload a simple product video and get studio-quality photos, lifestyle scenes, and 3D models.
          </p>
        </motion.div>

        {/* Main Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto mb-12 md:mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-destructive/30">
                <div className="absolute -top-4 left-6">
                  <span className="bg-destructive text-destructive-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Before
                  </span>
                </div>
                
                <img
                  src={beforeImage}
                  alt="Raw video frame"
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />
                
                <h3 className="text-2xl font-bold mb-3">Raw Video Frame</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Poor lighting & quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Distracting background</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Unprofessional appearance</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-primary/30 glow-effect">
                <div className="absolute -top-4 left-6">
                  <span className="bg-primary text-black px-4 py-1 rounded-full text-sm font-semibold">
                    After - AI Generated
                  </span>
                </div>
                
                <img
                  src={afterImage}
                  alt="AI-generated studio photo"
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />
                
                <h3 className="text-2xl font-bold mb-3">Studio-Quality Photo</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span>Professional lighting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span>Clean white background</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span>E-commerce ready</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Examples Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3">Multiple Output Formats</h3>
            <p className="text-muted-foreground">All generated automatically from your video</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all"
            >
              <img
                src={productLifestyle}
                alt="Lifestyle scene"
                className="w-full h-56 object-cover rounded-xl mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Lifestyle Scenes</h4>
              <p className="text-sm text-muted-foreground">
                Product placed in realistic environments
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all"
            >
              <iframe
                src="https://mimnsi.github.io/interactive_scenes_3d_estate_2/demo/Phoenix_Royal_Yellow.html"
                title="3D Model"
                className="w-full h-56 rounded-xl mb-4"
                allowFullScreen
              ></iframe>
              <h4 className="text-xl font-bold mb-2">3D Models</h4>
              <p className="text-sm text-muted-foreground">
                Interactive models for AR & 360° views
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all"
            >
              <img
                src={descriptionImage}
                alt="AI descriptions"
                className="w-full h-56 object-cover rounded-xl mb-4"
              />
              <h4 className="text-xl font-bold mb-2">AI Descriptions</h4>
              <p className="text-sm text-muted-foreground">
                Search-optimized copy that converts
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 min-h-[56px] rounded-xl font-semibold text-lg hover:shadow-[0_0_20px_rgba(45,255,167,0.3)] transition-all"
          >
            Try It Free
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • Transform your first video in 2 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
