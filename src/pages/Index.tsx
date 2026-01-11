import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TopBanner from "@/components/TopBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-10">
      <TopBanner />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
