import { motion } from "framer-motion";
import awsLogo from "@/assets/partnerlogos/aws-logo.svg";
import googleLogo from "@/assets/partnerlogos/google-startups-logo.svg";
import nvidiaLogo from "@/assets/partnerlogos/nvidia-logo.svg";
import samsungLogo from "@/assets/partnerlogos/samsung-logo.svg";

const partners = [
  { name: "AWS", logo: awsLogo },
  { name: "Google for Startups", logo: googleLogo },
  { name: "NVIDIA Inception", logo: nvidiaLogo },
  { name: "Samsung", logo: samsungLogo },
];

const TrustedByBar = () => {
  return (
    <section className="py-16 border-t border-b border-border/50 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm text-muted-foreground">
            Trusted by 10,000+ e-commerce brands worldwide
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, opacity: 1 }}
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedByBar;
