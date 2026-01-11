import { 
  Megaphone, 
  TrendingUp, 
  Palette, 
  Globe, 
  Video, 
  BarChart3, 
  Target, 
  Smartphone 
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Ads",
    description: "Facebook, Instagram, LinkedIn campaigns that convert",
  },
  {
    icon: TrendingUp,
    title: "Google Ads",
    description: "Search, Display & YouTube advertising mastery",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Eye-catching visuals that stop the scroll",
  },
  {
    icon: Globe,
    title: "SEO Services",
    description: "Rank higher, get found, grow organically",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Engaging reels, ads & brand stories",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven decisions for better ROI",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Quality leads that turn into customers",
  },
  {
    icon: Smartphone,
    title: "WhatsApp Marketing",
    description: "Direct engagement with your audience",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative px-4 py-20">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            What We Do
          </span>
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            Full-Stack <span className="text-gradient">Ad Solutions</span>
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            From basic campaigns to advanced multi-channel strategies, we've got you covered.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group rounded-xl bg-gradient-card p-6 shadow-card transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-glow/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
