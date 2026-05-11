import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

type Result = { icon: typeof TrendingUp; label: string; value: string };
type CaseStudy = {
  client: string;
  sector: string;
  title: string;
  summary: string;
  role: string[];
  results: Result[];
};

const studies: CaseStudy[] = [
  {
    client: "Maple Grove Care Group",
    sector: "Residential Care · 12 homes",
    title: "From 'Requires Improvement' to 'Outstanding' in 9 months",
    summary:
      "We replaced paper-based audits with KOP's inspection-readiness platform across 12 sites, giving managers a single live view of compliance and resident outcomes.",
    role: ["Implementation Lead", "Compliance Workflow Design", "Manager Training"],
    results: [
      { icon: Award, label: "CQC rating", value: "Outstanding" },
      { icon: Clock, label: "Audit prep time", value: "−72%" },
      { icon: TrendingUp, label: "Action closure rate", value: "98%" },
    ],
  },
  {
    client: "Riverside Living",
    sector: "Nursing & Dementia Care",
    title: "Cutting medication errors with smart eMAR workflows",
    summary:
      "Rolled out KOP's electronic medication record with role-based alerts and double-sign flows — eliminating transcription errors and giving nurses time back at every round.",
    role: ["Clinical Lead Partnership", "eMAR Rollout", "Nurse Onboarding"],
    results: [
      { icon: TrendingUp, label: "Med errors", value: "−86%" },
      { icon: Clock, label: "Time saved / round", value: "22 min" },
      { icon: Users, label: "Nurses onboarded", value: "140+" },
    ],
  },
  {
    client: "Brookline Homes",
    sector: "Supported Living · 6 sites",
    title: "A family portal that lifted resident satisfaction",
    summary:
      "Designed and launched a family communication portal with photo updates, care notes, and visit booking — strengthening trust and reducing manager inbound calls.",
    role: ["Product Design", "Family Engagement Strategy", "Site Rollout"],
    results: [
      { icon: TrendingUp, label: "Satisfaction (NPS)", value: "+41" },
      { icon: Clock, label: "Inbound calls", value: "−58%" },
      { icon: Users, label: "Families engaged", value: "92%" },
    ],
  },
  {
    client: "Northway Health Trust",
    sector: "Multi-region operator",
    title: "Unifying 28 homes on a single operations platform",
    summary:
      "Migrated 28 homes off four legacy systems onto KOP — giving the leadership team real-time KPIs across occupancy, staffing, and quality for the first time.",
    role: ["Programme Lead", "Data Migration", "Executive Dashboards"],
    results: [
      { icon: TrendingUp, label: "Occupancy", value: "+6.4%" },
      { icon: Clock, label: "Reporting cycle", value: "Daily" },
      { icon: Users, label: "Homes live", value: "28 / 28" },
    ],
  },
];

const CaseStudies = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-32 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.p
            className="text-sm uppercase tracking-[0.2em] text-primary mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Case Studies
          </motion.p>
          <motion.h1
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Real homes. <span className="text-primary">Real results.</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            How care providers are using KOP Technology to lift ratings, save time, and put residents first.
          </motion.p>
        </div>
      </div>
    </section>

    <section className="pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid gap-6">
          {studies.map((s, i) => (
            <motion.article
              key={s.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-8 md:p-10 rounded-2xl border bg-card hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {s.client}
                </span>
                <span className="text-muted-foreground">{s.sector}</span>
              </div>

              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground max-w-3xl">
                {s.title}
              </h2>
              <p className="mt-3 text-muted-foreground max-w-3xl leading-relaxed">{s.summary}</p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {s.results.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="p-4 rounded-xl border bg-background flex items-center gap-4">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">{value}</div>
                      <div className="text-xs text-muted-foreground">{label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  Our role
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.role.map((r) => (
                    <span key={r} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default CaseStudies;
