import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";
import awsLogo from "@/assets/partnerlogos/aws-logo.svg";
import googleLogo from "@/assets/partnerlogos/google-startups-logo.svg";
import nvidiaLogo from "@/assets/partnerlogos/nvidia-logo.svg";
import samsungLogo from "@/assets/partnerlogos/samsung-logo.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="py-20 bg-card/30 border-t border-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Blitz</h3>
            <p className="text-sm text-muted-foreground mb-6">
              AI-powered product content creation for modern e-commerce.
            </p>

            <div className="mb-6">
              <p className="text-sm font-semibold mb-3">Get product updates & tips</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 rounded-lg bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-primary text-black font-semibold text-sm"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>

            <div className="flex gap-3">
              {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3, scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 border border-primary/20 transition-all"
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-sm text-muted-foreground">© 2024 Blitz AI. All rights reserved.</span>
          <div className="flex gap-6 opacity-60">
            {[awsLogo, nvidiaLogo, googleLogo, samsungLogo].map((logo, i) => (
              <img key={i} src={logo} alt="Partner" className="h-6 w-auto grayscale" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
