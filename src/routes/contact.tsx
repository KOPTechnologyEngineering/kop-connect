import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — KOP Technology" },
      { name: "description", content: "Get in touch with KOP Technology to discuss your project." },
      { property: "og:title", content: "Contact — KOP Technology" },
      { property: "og:description", content: "Let's build something." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="container mx-auto px-6 pt-28 pb-24">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="animate-fade-up">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Contact</p>
          <h1 className="text-5xl md:text-6xl font-bold">Let's build <span className="text-gradient">something real</span>.</h1>
          <p className="mt-6 text-lg text-muted-foreground">Tell us about your project. We typically respond within one business day.</p>

          <div className="mt-10 space-y-5">
            {[
              { icon: Mail, label: "Email", value: "hello@koptechnology.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 010-2024" },
              { icon: MapPin, label: "Studio", value: "Remote · Global" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="size-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                  <Icon className="size-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur shadow-elegant"
        >
          {sent ? (
            <div className="text-center py-12">
              <div className="size-14 mx-auto rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mb-4">
                <Send className="size-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Message received</h3>
              <p className="mt-2 text-muted-foreground">Thanks — we'll be in touch shortly.</p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" />
                <Field label="Email" name="email" type="email" />
              </div>
              <Field label="Company" name="company" />
              <div>
                <label className="text-sm font-medium">Project details</label>
                <textarea required rows={5} className="mt-2 w-full rounded-lg bg-background/60 border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none px-4 py-2.5 text-sm transition-smooth resize-none" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-glow transition-smooth">
                Send message <Send className="size-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input id={name} name={name} type={type} required
        className="mt-2 w-full rounded-lg bg-background/60 border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none px-4 py-2.5 text-sm transition-smooth" />
    </div>
  );
}
