import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import kopLogo from "@/assets/kop-logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { label: "Features", to: "/features" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "Pricing", to: "/pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={kopLogo}
            alt="KOP Technology"
            className="h-10 sm:h-12 md:h-14 lg:h-[75px] w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.label} to={link.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
          <Button size="sm" onClick={() => navigate("/schedule-demo")}>Schedule a Demo</Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t bg-background overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              {links.map((link) => (
                <Link key={link.label} to={link.to} className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Button size="sm" className="w-full" onClick={() => { setMobileOpen(false); navigate("/schedule-demo"); }}>
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
