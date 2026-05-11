import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative rounded-2xl overflow-hidden p-12 md:p-16 text-center"
          style={{ background: "var(--hero-gradient)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Care Home?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
              Join hundreds of care homes already using CompliCare. Book a free demo today.
            </p>
            <div className="flex justify-center">
              <Button size="lg" variant="secondary" onClick={() => navigate("/schedule-demo")}>
                Book a Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
