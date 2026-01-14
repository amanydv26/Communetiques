import { Link } from "wouter";
import { Facebook, Twitter, Youtube, Linkedin, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="w-20 h-10rounded-lg overflow-hidden shadow-lg p-1 group-hover:scale-105 transition-transform">
    <img
      src=''
      alt="logo"
      className="w-full h-full object-contain"
    
    />
  </div>
            </div>
            <p className="text-secondary-foreground/70 leading-relaxed">
              Leading provider of IPTV, OTT, and advanced security solutions for enterprises. 
              Delivering excellence since our inception.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About Company", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Product Catalog", href: "/products" },
                { label: "Get Support", href: "/contact" },
                { label: "Privacy Policy", href: "/" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Our Solutions</h3>
            <ul className="space-y-3">
              {[
                "IPTV & OTT Platforms",
                "Digital Signage",
                "CCTV Surveillance",
                "Access Control",
                "Smart Networking",
              ].map((service) => (
                <li key={service} className="text-secondary-foreground/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>
                  123 Tech Park, Andheri East,<br />
                  Mumbai, Maharashtra 400093,<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 22 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@communetiques.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} Communetiques. All rights reserved.</p>
          <p>Designed with excellence.</p>
        </div>
      </div>
    </footer>
  );
}
