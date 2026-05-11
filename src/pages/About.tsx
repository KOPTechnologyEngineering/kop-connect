import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Target, Heart, Users, Award } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", description: "We exist to improve the quality of care through better technology. Every feature we build serves this purpose." },
  { icon: Heart, title: "Care First", description: "We understand the care sector intimately. Our solutions are built by people who genuinely care about care." },
  { icon: Users, title: "Partnership", description: "We work alongside care home managers, not above them. Your feedback shapes our product roadmap." },
  { icon: Award, title: "Excellence", description: "We hold ourselves to the same high standards we help our customers achieve in their inspections." },
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About <span className="text-primary">KOP Technology</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            KOP Technology was founded with a simple belief: care homes deserve better software. 
            We saw an industry overwhelmed by paperwork, outdated systems, and compliance anxiety — 
            and set out to change it. Today, CompliCare is trusted by over 200 care homes across the UK.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="p-6 rounded-xl border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                <value.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Our Story</h2>
          <div className="text-muted-foreground space-y-4 text-left leading-relaxed">
            <p>
              Founded in the UK, KOP Technology emerged from first-hand experience with the challenges care home 
              managers face daily. Our founders witnessed the burden of manual compliance tracking, paper-based 
              audits, and disconnected systems that took precious time away from resident care.
            </p>
            <p>
              CompliCare was born to solve these problems. We built a platform that brings compliance, 
              staffing, asset management, incident tracking, and reporting into one seamless experience — 
              accessible on desktop and mobile.
            </p>
            <p>
              Today, our team continues to innovate with input from care professionals across the country, 
              ensuring every update makes a real difference in the quality of care delivered.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
    <CTASection />
    <Footer />
  </div>
);

export default About;
