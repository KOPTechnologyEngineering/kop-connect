import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialSection = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
        <blockquote className="font-display text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
          "CompliCare transformed how we manage compliance. What used to take us days now takes hours. Our CQC rating improved within six months."
        </blockquote>
        <div>
          <div className="font-semibold text-foreground">Sarah Mitchell</div>
          <div className="text-sm text-muted-foreground">Registered Manager, Oakwood Care Group</div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TestimonialSection;
