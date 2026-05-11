import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cloud, Cpu, Code2, Layers, LineChart, Lock } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — KOP Technology" },
      { name: "description", content: "Software engineering, cloud architecture, AI integration, and product design services from KOP Technology." },
      { property: "og:title", content: "Services — KOP Technology" },
      { property: "og:description", content: "End-to-end engineering for ambitious teams." },
    ],
  }),
});

const services = [
  { icon: Code2, title: "Product Engineering", desc: "Full-stack web and mobile products built on modern, type-safe foundations.", tags: ["TypeScript", "React", "Edge"] },
  { icon: Cloud, title: "Cloud & Platform", desc: "Architecture, migration, and platform engineering for scale-ready infrastructure.", tags: ["AWS", "GCP", "Kubernetes"] },
  { icon: Cpu, title: "AI & Automation", desc: "LLM-powered workflows, RAG systems, and agentic automation that compounds.", tags: ["OpenAI", "Vector DBs", "Agents"] },
  { icon: Layers, title: "Design Systems", desc: "Scalable design systems and component libraries that unify product surfaces.", tags: ["Figma", "Tokens", "Storybook"] },
  { icon: LineChart, title: "Data & Analytics", desc: "Pipelines, warehouses, and dashboards that turn data into decisions.", tags: ["dbt", "Snowflake", "BI"] },
  { icon: Lock, title: "Security & Compliance", desc: "SOC 2 readiness, threat modeling, and zero-trust architectures.", tags: ["SOC 2", "ISO", "GDPR"] },
];

function Services() {
  return (
    <>
      <section className="container mx-auto px-6 pt-28 pb-12">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Services</p>
          <h1 className="text-5xl md:text-6xl font-bold">Engineering across the <span className="text-gradient">entire stack</span>.</h1>
          <p className="mt-6 text-lg text-muted-foreground">From the first architecture diagram to the millionth user — we partner deeply and ship relentlessly.</p>
        </div>
      </section>
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, desc, tags }) => (
            <div key={title} className="group p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur hover:border-primary/40 transition-smooth">
              <div className="size-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-5 group-hover:shadow-glow transition-smooth">
                <Icon className="size-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-muted-foreground">{desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map(t => <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary/60 border border-border/40 text-muted-foreground">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-6 pb-20">
        <div className="rounded-3xl border border-border/60 bg-card/40 p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Need something we didn't list?</h2>
            <p className="mt-2 text-muted-foreground">We love a hard problem. Let's talk.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-glow transition-smooth whitespace-nowrap">
            Start a conversation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
