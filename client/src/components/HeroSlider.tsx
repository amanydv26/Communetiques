import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const SLIDES = [
  {
    id: 1,
    title: "Integrated Solutions for Modern Enterprises",
    subtitle: "For Media, OOH Advertising, ISP and Security Companies - We Have the Right Solutions at Right Prices!",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000", // Tech/Server room
    cta: "Explore Services",
    link: "/services"
  },
  {
    id: 2,
    title: "Next-Gen IPTV & OTT Platforms",
    subtitle: "End-to-end solutions including Set Top Boxes, Headends, DRM, and Hospitality TV systems designed for scale.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=2000", // Smart TV/Media
    cta: "View Products",
    link: "/products"
  },
  {
    id: 3,
    title: "Advanced Security & Surveillance",
    subtitle: "Comprehensive protection with CCTV, Thermal Imaging, RFID, GPS tracking, and autonomous Drone surveillance.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2000", // Security Camera
    cta: "Contact Us",
    link: "/contact"
  }
];

export function HeroSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000 })]);

  return (
    <div className="overflow-hidden bg-secondary relative h-[600px] md:h-[700px]" ref={emblaRef}>
      <div className="flex h-full">
        {SLIDES.map((slide) => (
          <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              {/* Desriptive comment for Unsplash usage above */}
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl text-white pt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-semibold mb-6 backdrop-blur-sm">
                    Premium Solutions Partner
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Link href={slide.link}>
                    <button className="group px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
                      {slide.cta}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Decorative Bottom Curve */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div> */}
    </div>
  );
}
