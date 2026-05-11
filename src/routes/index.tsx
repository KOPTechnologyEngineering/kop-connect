import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cloud, Cpu, Shield, Sparkles, Zap, Code2 } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "KOP Technology — Engineering tomorrow's systems" },
      { name: "description", content: "We design and build modern software, cloud platforms, and AI-driven systems for ambitious teams." },
    ],
  }),
});

const features = [
  { icon: Cloud, title: "Cloud-Native", desc: "Resilient infrastructure designed for global scale and zero downtime." },
  { icon: Cpu, title: "AI Integration", desc: "Embed intelligent automation into the heart of your product." },
  { icon: Shield, title: "Security First", desc: "Enterprise-grade security baked into every layer of the stack." },
  { icon: Zap, title: "Performance", desc: "Sub-second experiences that delight users and drive conversion." },
  { icon: Code2, title: "Modern Stack", desc: "TypeScript, edge functions, and best-in-class developer ergonomics." },
  { icon: Sparkles, title: "Craft", desc: "Pixel-perfect interfaces that feel as good as they look." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-glow pointer-events-none" />
        <img src={heroImg} alt="" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen" />
        <div className="container mx-auto px-6 py-32 md:py-44 relative">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-card/40 backdrop-blur text-xs text-muted-foreground mb-6">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Now accepting Q3 engagements
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
              Engineering <span className="text-gradient">tomorrow's</span> systems, today.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              KOP Technology partners with ambitious teams to design, build, and scale software that defines categories.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-glow transition-smooth">
                Start a project <ArrowRight className="size-4 group-hover:translate-x-1 transition-smooth" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/40 px-6 py-3 text-sm font-medium hover:bg-card transition-smooth">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-border/40 py-12">
          {[
            ["120+", "Products shipped"],
            ["40M+", "Users served"],
            ["99.99%", "Uptime delivered"],
            ["14", "Industries served"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-3xl md:text-4xl font-bold text-gradient">{n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">What we do, exceptionally.</h2>
          <p className="mt-4 text-muted-foreground">A full-spectrum technology partner — from infrastructure to interface.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative p-6 rounded-2xl border border-border/60 bg-card/40 backdrop-blur hover:border-primary/40 hover:bg-card/80 transition-smooth">
              <div className="size-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                <Icon className="size-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-glow" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold max-w-2xl mx-auto">Have a system worth building right?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Tell us about it. We respond within one business day.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-glow transition-smooth">
              Get in touch <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
