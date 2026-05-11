import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import MobileAppSection from "@/components/MobileAppSection";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const Features = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-32 pb-12">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Powerful Features for <span className="text-primary">Modern Care Homes</span>
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          From compliance to care, every tool you need to run an outstanding care home — all in one platform.
        </motion.p>
      </div>
    </section>
    <FeaturesSection />
    <MobileAppSection />
    <CTASection />
    <Footer />
  </div>
);

export default Features;
