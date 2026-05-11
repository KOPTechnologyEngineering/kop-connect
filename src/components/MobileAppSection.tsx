import { motion } from "framer-motion";
import { Smartphone, Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import mobileAppMockup from "@/assets/mobile-app-mockup.png";

const MobileAppSection = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Mobile App</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            CompliCare in Your Pocket
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Manage your care home on the go. Our mobile app gives you full access to compliance checks, 
            incident reporting, staff schedules, and real-time notifications — right from your phone.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Real-time push notifications for compliance deadlines",
              "Log incidents and capture evidence with your camera",
              "View and manage staff rotas anywhere",
              "Offline mode for areas with poor connectivity",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Smartphone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="gap-2">
              <Apple className="w-5 h-5" /> App Store
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Play className="w-5 h-5" /> Google Play
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={mobileAppMockup}
            alt="CompliCare mobile app showing dashboard with compliance checks and staff schedules"
            width={512}
            height={800}
            loading="lazy"
            className="max-w-[320px] w-full h-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default MobileAppSection;
