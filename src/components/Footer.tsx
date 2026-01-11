import { MessageCircle, Mail, MapPin } from "lucide-react";
import logo from "@/assets/adzora-logo.png";

const Footer = () => {
  const phoneNumber = "919658591362";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <footer className="border-t border-border bg-card px-4 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <img src={logo} alt="Adzora" className="h-10 w-auto" />

          {/* Contact info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              +91 96585 91362
            </a>
            <a
              href="mailto:hello@adzora.in"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              hello@adzora.in
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              India
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Adzora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
