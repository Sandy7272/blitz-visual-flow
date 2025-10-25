import { motion } from "framer-motion";
import awsLogo from "@/assets/aws-logo.svg";
import googleLogo from "@/assets/google-startups-logo.svg";
import nvidiaLogo from "@/assets/nvidia-logo.svg";
import samsungLogo from "@/assets/samsung-logo.svg";

const partners = [
  { name: "AWS", logo: awsLogo },
  { name: "Google for Startups", logo: googleLogo },
  { name: "NVIDIA Inception", logo: nvidiaLogo },
  { name: "Samsung", logo: samsungLogo },
];

const Partners = () => {
  return (
    <section className="py-16 bg-accent/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-heading">
            Partners Supporting Our Vision
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
