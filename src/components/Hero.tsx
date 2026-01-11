import { MessageCircle, ArrowRight } from "lucide-react";
import logo from "@/assets/adzora-logo.png";

const Hero = () => {
  const phoneNumber = "919658591362";
  const message = encodeURIComponent("Hi Adzora! I'm interested in your advertising services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-16 pt-8">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
      
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={logo} 
            alt="Adzora Logo" 
            className="h-16 w-auto object-contain md:h-20"
          />
        </div>

        {/* Tagline */}
        <h1 className="mb-4 animate-fade-in font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ animationDelay: "0.1s" }}>
          Adzora{" "}
          <span className="text-gradient">Ads Agency</span>
        </h1>

        <p className="mb-8 max-w-md animate-fade-in text-lg text-muted-foreground md:max-w-xl md:text-xl" style={{ animationDelay: "0.2s" }}>
          From strategy to execution, we deliver advertising solutions that drive real results for your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex animate-fade-in flex-col gap-4 sm:flex-row" style={{ animationDelay: "0.3s" }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-heading font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
          >
            <MessageCircle className="h-5 w-5 fill-current" />
            WhatsApp Us Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="flex items-center justify-center gap-2 rounded-full border border-border bg-secondary px-8 py-4 font-heading font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-secondary/80"
          >
            Explore Services
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">Trusted by 100+ Brands</p>
          <div className="flex items-center justify-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="h-10 w-10 rounded-full border-2 border-background bg-gradient-card"
                  style={{ backgroundColor: `hsl(${i * 40}, 60%, 50%)` }}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">& many more</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
