import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "Care Homes" },
  { value: "15k+", label: "Staff Managed" },
  { value: "99.9%", label: "Uptime" },
  { value: "50%", label: "Time Saved on Audits" },
];

const StatsBar = () => (
  <section className="py-12 border-y bg-secondary/50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
