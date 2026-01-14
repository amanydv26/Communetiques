import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
// import Logo from "../..favicon.png";
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar - Hidden on mobile for cleaner look, or keep if critical */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4 text-xs font-medium hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6 ml-9">
            <span className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-primary" /> +91 22 1234 5678
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-primary" /> info@communetiques.com
            </span>
          </div>
          <div className="flex items-center gap-2 opacity-80 mr-10">
            <MapPin className="w-3 h-3" /> Mumbai, India
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={cn(
          "w-full border-b border-transparent transition-all duration-300",
          scrolled || isOpen
            ? "bg-white/95 backdrop-blur-md border-border shadow-md py-3"
            : "bg-white/90 backdrop-blur-sm py-5 md:bg-white md:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
               <div className="w-20 h-10rounded-lg overflow-hidden shadow-lg p-1 group-hover:scale-105 transition-transform">
    <img
      src=''
      alt="logo"
      className="w-full h-full object-contain"
    
    />
  </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-primary relative py-1",
                    location === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                  {location === item.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
              <Link href="/contact">
                <button className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                  Get a Quote
                </button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-secondary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col p-4 space-y-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-lg font-medium px-4 py-2 rounded-md hover:bg-muted transition-colors",
                location === item.href ? "text-primary bg-primary/5" : "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t">
            <Link href="/contact" className="block w-full text-center py-3 bg-primary text-white rounded-lg font-bold">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
