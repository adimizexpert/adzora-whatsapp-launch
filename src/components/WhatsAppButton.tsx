import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919658591362";
  const message = encodeURIComponent("Hi Adzora! I'm interested in your advertising services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-heading font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 md:bottom-8 md:right-8"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
