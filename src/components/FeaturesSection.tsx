import { motion } from "framer-motion";
import { ClipboardCheck, BarChart3, Package, Users, CalendarDays, ShieldCheck, AlertTriangle, FileBarChart, Siren, FileSearch } from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Compliance Checks",
    description: "Automated compliance workflows with real-time tracking. Never miss a regulatory deadline again.",
  },
  {
    icon: BarChart3,
    title: "Audit Management",
    description: "Comprehensive audit trails with digital evidence capture. CQC-ready reports at the click of a button.",
  },
  {
    icon: Package,
    title: "Asset Management",
    description: "Track equipment, maintenance schedules, and inventory across all your facilities in one view.",
  },
  {
    icon: Users,
    title: "Staff Management",
    description: "Manage employee records, certifications, training, and DBS checks from a single dashboard.",
  },
  {
    icon: CalendarDays,
    title: "Rota Management",
    description: "Smart scheduling that accounts for skills, availability, and compliance ratios automatically.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Management",
    description: "Identify, assess, and mitigate risks across your care home with automated risk registers and action plans.",
  },
  {
    icon: FileBarChart,
    title: "Reporting",
    description: "Generate detailed reports on compliance, incidents, staffing, and performance with customisable dashboards.",
  },
  {
    icon: Siren,
    title: "Incident Management",
    description: "Log, track, and resolve incidents with structured workflows. Ensure timely reporting and follow-up actions.",
  },
  {
    icon: FileSearch,
    title: "Document Capture",
    description: "Digitise and store policies, certificates, and records securely. Instant retrieval when inspectors come calling.",
  },
  {
    icon: ShieldCheck,
    title: "Data Security",
    description: "Enterprise-grade encryption and GDPR compliance built in. Your residents' data is always protected.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Features</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Everything Your Care Home Needs
        </h2>
        <p className="text-muted-foreground">
          CompliCare brings together all the tools care home managers need into one intuitive platform.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            className="group p-6 rounded-xl border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <feature.icon className="w-5 h-5 text-accent-foreground group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
