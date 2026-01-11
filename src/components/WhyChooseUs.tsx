import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";

const benefits = [
  "100% Transparent Reporting",
  "Dedicated Account Manager",
  "Quick Turnaround Time",
  "Budget-Friendly Packages",
  "ROI-Focused Strategies",
  "24/7 WhatsApp Support",
];

const WhyChooseUs = () => {
  const phoneNumber = "919658591362";
  const message = encodeURIComponent("Hi Adzora! I want to grow my business with ads.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="relative px-4 py-20">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-primary">
              Why Adzora
            </span>
            <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
              We Don't Just Run Ads.{" "}
              <span className="text-gradient">We Grow Brands.</span>
            </h2>
            <p className="mb-8 max-w-lg text-muted-foreground lg:max-w-none">
              With years of experience and hundreds of successful campaigns, Adzora knows what it takes to cut through the noise and deliver results that matter.
            </p>

            {/* Benefits list */}
            <ul className="mb-8 grid gap-3 text-left sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 font-heading font-semibold text-white shadow-glow transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              Let's Talk Growth
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right stats */}
          <div className="grid w-full max-w-sm gap-4 sm:grid-cols-2 lg:max-w-xs">
            {[
              { value: "100+", label: "Happy Clients" },
              { value: "500+", label: "Campaigns Run" },
              { value: "10M+", label: "Ad Spend Managed" },
              { value: "5x", label: "Avg. ROAS" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-gradient-card p-6 text-center shadow-card"
              >
                <div className="mb-1 font-heading text-3xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
