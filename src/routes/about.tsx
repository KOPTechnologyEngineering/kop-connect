import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — KOP Technology" },
      { name: "description", content: "KOP Technology is an engineering studio building modern software systems for ambitious teams worldwide." },
      { property: "og:title", content: "About — KOP Technology" },
      { property: "og:description", content: "An engineering studio with a craft obsession." },
    ],
  }),
});

const values = [
  { title: "Craft", desc: "We sweat the details others ignore. Quality is non-negotiable." },
  { title: "Clarity", desc: "Plain language, honest tradeoffs, and decisions you can defend." },
  { title: "Velocity", desc: "Compounding momentum beats sporadic heroics. We ship every week." },
  { title: "Ownership", desc: "We treat your product like it's ours — because, for a while, it is." },
];

function About() {
  return (
    <>
      <section className="container mx-auto px-6 pt-28 pb-16">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">About</p>
          <h1 className="text-5xl md:text-6xl font-bold">A studio of senior engineers, <span className="text-gradient">obsessed with craft</span>.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            KOP Technology was founded on a simple idea: most software is built too fast and cared for too little.
            We bring back rigor, taste, and clarity — and pair them with the speed modern teams demand.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {values.map(v => (
            <div key={v.title} className="p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur hover:border-primary/40 transition-smooth">
              <h3 className="text-2xl font-semibold text-gradient">{v.title}</h3>
              <p className="mt-3 text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="rounded-3xl border border-border/60 bg-card/40 p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl">We work alongside founders, CTOs, and product leaders who care as much as we do.</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">Whether you're rebuilding a legacy platform or launching a category-defining product, we plug in with senior talent and stay until the work is right.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-glow transition-smooth">
            Work with us <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
