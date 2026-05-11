import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ShieldCheck, Clock, CreditCard } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const PLAN_OPTIONS = ["Starter", "Professional", "Enterprise"] as const;
type Plan = (typeof PLAN_OPTIONS)[number];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  care_home: z.string().trim().max(150).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  role: z.string().trim().max(100).optional().or(z.literal("")),
  number_of_homes: z.string().optional().or(z.literal("")),
  number_of_residents: z.string().optional().or(z.literal("")),
  plan: z.string().optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const FreeTrial = () => {
  const [params] = useSearchParams();
  const initialPlan = (params.get("plan") as Plan) || "Professional";

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    care_home: "",
    phone: "",
    role: "",
    number_of_homes: "",
    number_of_residents: "",
    plan: initialPlan as string,
    message: "",
  });

  useEffect(() => {
    if (PLAN_OPTIONS.includes(initialPlan)) {
      setForm((f) => ({ ...f, plan: initialPlan }));
    }
  }, [initialPlan]);

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Please check the form",
        description: parsed.error.errors[0]?.message,
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("free_trial_requests").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      care_home: parsed.data.care_home || null,
      phone: parsed.data.phone || null,
      role: parsed.data.role || null,
      number_of_homes: parsed.data.number_of_homes ? Number(parsed.data.number_of_homes) : null,
      number_of_residents: parsed.data.number_of_residents ? Number(parsed.data.number_of_residents) : null,
      plan: parsed.data.plan || null,
      message: parsed.data.message || null,
    });

    setSubmitting(false);
    if (error) {
      toast({ title: "Submission failed", description: error.message, variant: "destructive" });
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-highlight/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              14-day free trial · No credit card required
            </motion.div>
            <motion.h1
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Start your <span className="text-primary">free trial</span>
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Get full access to CompliCare for 14 days. We'll set up your account and walk your team through it.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_320px] gap-8">
            <motion.div
              className="rounded-2xl border bg-card p-6 md:p-10 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    You're on the list
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Thanks {form.name.split(" ")[0] || "for signing up"}! We'll email{" "}
                    <span className="text-foreground font-medium">{form.email}</span> within one
                    business day with your trial details for the{" "}
                    <span className="text-foreground font-medium">{form.plan}</span> plan.
                  </p>
                  <Button asChild variant="secondary">
                    <Link to="/">Back to home</Link>
                  </Button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Full name *
                      </label>
                      <Input value={form.name} onChange={update("name")} placeholder="Jane Smith" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Work email *
                      </label>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="jane@carehome.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Care home / organisation
                      </label>
                      <Input
                        value={form.care_home}
                        onChange={update("care_home")}
                        placeholder="Sunrise Care Home"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                      <Input value={form.phone} onChange={update("phone")} placeholder="+44 ..." />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Your role</label>
                      <Input value={form.role} onChange={update("role")} placeholder="Manager" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Number of homes
                      </label>
                      <Input
                        type="number"
                        min={1}
                        value={form.number_of_homes}
                        onChange={update("number_of_homes")}
                        placeholder="1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Total residents
                      </label>
                      <Input
                        type="number"
                        min={1}
                        value={form.number_of_residents}
                        onChange={update("number_of_residents")}
                        placeholder="40"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred plan</label>
                    <select
                      value={form.plan}
                      onChange={update("plan")}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      {PLAN_OPTIONS.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Anything we should know? (optional)
                    </label>
                    <Textarea
                      value={form.message}
                      onChange={update("message")}
                      rows={4}
                      placeholder="Specific features you're hoping to test, integrations, timelines..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                    {submitting ? "Submitting..." : "Start my free trial"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to be contacted about your trial. No card required.
                  </p>
                </form>
              )}
            </motion.div>

            <motion.aside
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  What's included
                </h3>
                <ul className="space-y-3 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    Full access for 14 days
                  </li>
                  <li className="flex items-start gap-2">
                    <CreditCard className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    No credit card required
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    Free onboarding & training
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    Cancel anytime
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border bg-secondary p-6">
                <p className="text-sm text-muted-foreground">
                  Prefer a guided walkthrough first?{" "}
                  <Link to="/schedule-demo" className="text-primary font-medium underline-offset-4 hover:underline">
                    Book a demo
                  </Link>
                  .
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeTrial;