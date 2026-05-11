import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type BillingPeriod = "monthly" | "half-yearly" | "yearly";

const discounts: Record<BillingPeriod, number> = {
  monthly: 0,
  "half-yearly": 0.1,
  yearly: 0.3,
};

const periodLabels: Record<BillingPeriod, string> = {
  monthly: "Monthly",
  "half-yearly": "Half-Yearly",
  yearly: "Yearly",
};

const periodSuffix: Record<BillingPeriod, string> = {
  monthly: "/month per home",
  "half-yearly": "/month per home",
  yearly: "/month per home",
};

const tiers = [
  {
    name: "Starter",
    basePrice: 49,
    period: "/month per home",
    description: "Essential tools for smaller care homes getting started with digital management.",
    features: [
      "Basic asset management",
      "Staff directory",
      "Incident reporting",
      "Document capture (up to 500/mo)",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    basePrice: 99,
    period: "/month per home",
    description: "Advanced features for care homes that need full operational control.",
    features: [
      "Everything in Starter",
      "Rota & shift management",
      "Risk management dashboard",
      "Advanced reporting & analytics",
      "Unlimited document capture",
      "Multi-home management",
      "Priority support",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    basePrice: null,
    period: "",
    description: "Tailored solutions for care groups managing multiple locations at scale.",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "SSO & advanced security",
      "On-site training",
      "SLA guarantee",
      "Custom reporting",
      "White-label options",
    ],
    cta: "Talk to Sales",
    popular: false,
  },
];

function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function getPriceParts(tier: typeof tiers[number], billing: BillingPeriod): { prefix: string; amount: string } {
  if (tier.basePrice === null) return { prefix: "From", amount: "Custom" };
  const discount = discounts[billing];
  const discounted = tier.basePrice * (1 - discount);
  return { prefix: "From", amount: formatPrice(discounted) };
}

function getSavingsText(tier: typeof tiers[number], billing: BillingPeriod): string | null {
  if (tier.basePrice === null) return null;
  const discount = discounts[billing];
  if (discount === 0) return null;
  const saved = tier.basePrice * discount;
  return `Save ${formatPrice(saved)}/month`;
}

const Pricing = () => {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-highlight/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-6">
              <Star className="w-3.5 h-3.5" />
              14-day free trial · No credit card required
            </div>
          </motion.div>
          <motion.h1
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Simple, Transparent <span className="text-primary">Pricing</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-lg mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the plan that fits your care home. Scale as you grow — no hidden fees.
          </motion.p>
          <motion.p
            className="text-muted-foreground/70 max-w-lg mx-auto text-sm mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            All prices are VAT exclusive.
          </motion.p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center bg-secondary rounded-full p-1 gap-1">
              {(["monthly", "half-yearly", "yearly"] as BillingPeriod[]).map((period) => (
                <button
                  key={period}
                  onClick={() => setBilling(period)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    billing === period
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {periodLabels[period]}
                  {period === "yearly" && (
                    <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full bg-highlight text-[10px] font-bold text-primary-foreground">
                      -30%
                    </span>
                  )}
                  {period === "half-yearly" && (
                    <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                      -10%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <Card
                  className={`relative h-full flex flex-col ${
                    tier.popular
                      ? "border-primary shadow-xl shadow-primary/10 scale-[1.03]"
                      : "border-border shadow-sm"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-highlight text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <CardDescription className="text-primary font-medium text-sm">
                      {tier.name}
                    </CardDescription>
                    <CardTitle className="text-foreground">
                      <span className="inline-flex items-baseline gap-1.5">
                        <span className="text-sm font-medium text-muted-foreground">
                          {getPriceParts(tier, billing).prefix}
                        </span>
                        <span className="text-4xl font-bold">
                          {getPriceParts(tier, billing).amount}
                        </span>
                      </span>
                      <span className="text-sm font-normal text-muted-foreground">{periodSuffix[billing]}</span>
                      {getSavingsText(tier, billing) && (
                        <span className="block text-sm font-semibold text-highlight mt-1">
                          {getSavingsText(tier, billing)}
                        </span>
                      )}
                      {tier.name !== "Enterprise" && billing !== "monthly" && (
                        <span className="block text-xs font-normal text-muted-foreground/70 mt-1">
                          Billed {billing === "half-yearly" ? "every 6 months" : "annually"}
                        </span>
                      )}
                      {tier.name !== "Enterprise" && (
                        <span className="block text-sm font-normal text-muted-foreground mt-1">
                          + £1.25 per resident
                        </span>
                      )}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground pt-2">{tier.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full gap-2 ${
                        tier.popular
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                          : "bg-accent text-accent-foreground hover:bg-accent/80"
                      }`}
                      size="lg"
                      onClick={() =>
                        tier.cta === "Talk to Sales"
                          ? navigate("/contact")
                          : navigate(`/free-trial?plan=${encodeURIComponent(tier.name)}`)
                      }
                    >
                      {tier.cta} <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-like trust bar */}
      <section className="border-t border-border bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">Need Something Different?</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            We offer custom plans for large care groups. Get in touch and we&apos;ll build a package that works for you.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            Contact Sales <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
