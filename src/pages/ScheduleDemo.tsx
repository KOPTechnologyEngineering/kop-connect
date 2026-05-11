import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  care_home: z.string().trim().max(150).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  preferred_date: z.string().optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const ScheduleDemo = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    care_home: "",
    phone: "",
    preferred_date: "",
    message: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Please check the form", description: parsed.error.errors[0]?.message, variant: "destructive" });
      return;
    }

    setSubmitting(true);
    const id = crypto.randomUUID();
    const { error } = await supabase.from("demo_requests").insert({
      id,
      name: parsed.data.name,
      email: parsed.data.email,
      care_home: parsed.data.care_home || null,
      phone: parsed.data.phone || null,
      preferred_date: parsed.data.preferred_date || null,
      message: parsed.data.message || null,
    });

    if (error) {
      setSubmitting(false);
      toast({ title: "Submission failed", description: error.message, variant: "destructive" });
      return;
    }

    // Notify the sales inbox (best-effort; will start sending once email domain is verified)
    try {
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "demo-request-notification",
          recipientEmail: "demo@resourcescheduler.co.uk",
          idempotencyKey: `demo-notify-${id}`,
          templateData: {
            name: parsed.data.name,
            email: parsed.data.email,
            careHome: parsed.data.care_home || "",
            phone: parsed.data.phone || "",
            preferredDate: parsed.data.preferred_date || "",
            message: parsed.data.message || "",
          },
        },
      });
    } catch {
      // Non-fatal — submission is recorded.
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              Free 30-minute walkthrough
            </motion.div>
            <motion.h1
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Schedule a <span className="text-primary">Demo</span>
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Tell us a little about your care home and we'll be in touch within 24 hours to set up a personalised demo of CompliCare.
            </motion.p>
          </div>

          <motion.div
            className="max-w-2xl mx-auto rounded-2xl border bg-card p-6 md:p-10 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">Request received</h2>
                <p className="text-muted-foreground">
                  Thanks {form.name.split(" ")[0] || "for reaching out"}! Our team will email you at{" "}
                  <span className="text-foreground font-medium">{form.email}</span> shortly to confirm your demo.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Full name *</label>
                    <Input value={form.name} onChange={update("name")} placeholder="Jane Smith" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Work email *</label>
                    <Input type="email" value={form.email} onChange={update("email")} placeholder="jane@carehome.com" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Care home</label>
                    <Input value={form.care_home} onChange={update("care_home")} placeholder="Sunrise Care Home" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                    <Input value={form.phone} onChange={update("phone")} placeholder="+44 ..." />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred date</label>
                  <Input type="date" value={form.preferred_date} onChange={update("preferred_date")} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">What would you like to see?</label>
                  <Textarea value={form.message} onChange={update("message")} rows={4} placeholder="Compliance, audits, mobile app..." />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Sending..." : "Request my demo"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  We'll only use your details to coordinate your demo. No spam.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ScheduleDemo;