import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import MetaShopLogo from "@/assets/MetaShopLogo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card border-b border-primary/10 backdrop-blur-xl" : "bg-background/50 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
          >
            <img src={MetaShopLogo} alt="MetashopAI Logo" className="h-8 w-auto" />
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {["Features", "Pricing"].map((item) => {
              const id = item.toLowerCase().replace(" ", "-");
              return (
                <motion.a
                  key={item}
                  href={`#${id}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetElement = document.getElementById(id);
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item}
                </motion.a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm" variant="outline" className="glow-effect">Get Started</Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 space-y-3"
          >
            {["Features", "Pricing"].map((item) => {
              const id = item.toLowerCase().replace(" ", "-");
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetElement = document.getElementById(id);
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: "smooth" });
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              );
            })}
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" size="sm" className="w-full min-h-[44px]">Sign In</Button>
              <Button size="sm" variant="outline" className="w-full min-h-[44px] glow-effect">Get Started</Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
