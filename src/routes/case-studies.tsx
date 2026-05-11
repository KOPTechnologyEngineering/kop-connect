import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudies,
  head: () => ({
    meta: [
      { title: "Case Studies — KOP Technology" },
      { name: "description", content: "Selected work from KOP Technology — outcomes, roles, and the systems we shipped for ambitious teams." },
      { property: "og:title", content: "Case Studies — KOP Technology" },
      { property: "og:description", content: "Selected work from KOP Technology — outcomes, roles, and the systems we shipped." },
    ],
  }),
});

type CaseStudy = {
  client: string;
  industry: string;
  title: string;
  summary: string;
  role: string[];
  stack: string[];
  results: { icon: typeof TrendingUp; label: string; value: string }[];
};

const studies: CaseStudy[] = [
  {
    client: "Northwind Capital",
    industry: "Fintech",
    title: "Re-architecting a trading platform for sub-100ms execution",
    summary:
      "We replaced a brittle monolith with an event-driven, edge-deployed system — unlocking real-time analytics and a 6x improvement in order throughput.",
    role: ["Platform Engineering", "Cloud Architecture", "Performance"],
    stack: ["TypeScript", "Kafka", "Rust", "AWS"],
    results: [
      { icon: Zap, label: "p95 latency", value: "92ms" },
      { icon: TrendingUp, label: "Throughput", value: "6× faster" },
      { icon: Users, label: "Active traders", value: "+38%" },
    ],
  },
  {
    client: "Helio Health",
    industry: "Healthcare",
    title: "An AI co-pilot for clinical documentation",
    summary:
      "Built a HIPAA-compliant LLM workflow that turns ambient consultation audio into structured SOAP notes — giving 1,200+ clinicians back hours every week.",
    role: ["AI Engineering", "Product Design", "Security & Compliance"],
    stack: ["OpenAI", "RAG", "Postgres", "Next.js"],
    results: [
      { icon: Zap, label: "Time saved per visit", value: "11 min" },
      { icon: Users, label: "Clinicians onboarded", value: "1,200+" },
      { icon: TrendingUp, label: "Note accuracy", value: "96.4%" },
    ],
  },
  {
    client: "Forge Retail",
    industry: "E-commerce",
    title: "A headless commerce stack that scaled through Black Friday",
    summary:
      "Migrated a legacy storefront to a composable, edge-rendered commerce platform — handling 4.2M visitors in 48 hours with zero downtime.",
    role: ["Product Engineering", "Cloud & Platform", "Design Systems"],
    stack: ["TanStack", "Shopify", "Cloudflare", "Algolia"],
    results: [
      { icon: TrendingUp, label: "Conversion lift", value: "+27%" },
      { icon: Zap, label: "LCP", value: "1.1s" },
      { icon: Users, label: "Peak RPS", value: "48k" },
    ],
  },
  {
    client: "Atlas Logistics",
    industry: "Supply Chain",
    title: "Predictive routing for a continental fleet",
    summary:
      "Designed a data platform and ML routing engine that ingests telematics from 18,000 vehicles — cutting empty miles and fuel spend across the network.",
    role: ["Data Engineering", "ML", "Backend"],
    stack: ["dbt", "Snowflake", "Python", "GCP"],
    results: [
      { icon: TrendingUp, label: "Empty miles", value: "−21%" },
      { icon: Zap, label: "On-time delivery", value: "98.1%" },
      { icon: Users, label: "Fleet covered", value: "18k" },
    ],
  },
];

function CaseStudies() {
  return (
    <>
      <section className="container mx-auto px-6 pt-28 pb-12">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Case Studies</p>
          <h1 className="text-5xl md:text-6xl font-bold">
            Work that <span className="text-gradient">moved the numbers</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A selection of recent engagements — the role we played, the systems we shipped, and the results our partners measured.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid gap-6">
          {studies.map((s) => (
            <article
              key={s.client}
              className="group relative p-8 md:p-10 rounded-2xl border border-border/60 bg-card/40 backdrop-blur hover:border-primary/40 transition-smooth"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="px-2.5 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary font-medium">
                  {s.industry}
                </span>
                <span className="text-muted-foreground">{s.client}</span>
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold max-w-3xl">{s.title}</h2>
              <p className="mt-3 text-muted-foreground max-w-3xl">{s.summary}</p>

              <div className="mt-8 grid md:grid-cols-3 gap-4">
                {s.results.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl border border-border/60 bg-background/40 flex items-center gap-4"
                  >
                    <div className="size-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gradient">{value}</div>
                      <div className="text-xs text-muted-foreground">{label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6 pt-6 border-t border-border/40">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">Our role</div>
                  <div className="flex flex-wrap gap-2">
                    {s.role.map((r) => (
                      <span key={r} className="text-xs px-2.5 py-1 rounded-full bg-secondary/60 border border-border/40">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {s.stack.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary/60 border border-border/40 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="rounded-3xl border border-border/60 bg-card/40 p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Could your project be next?</h2>
            <p className="mt-2 text-muted-foreground">Share the problem — we'll come back with a sharp first take.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-glow transition-smooth whitespace-nowrap"
          >
            Start a conversation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
