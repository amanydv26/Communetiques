import { motion } from "framer-motion";
import { Tv, Shield, Activity, Wifi, Lock, Server } from "lucide-react";
import { Link } from "wouter";
import Banner from "../../public/Our Services_Banner.jpg"
const SERVICES = [
  {
    icon: Tv,
    title: "IPTV & OTT Solutions",
    description: "Complete ecosystem for content delivery including Headends, Middleware, DRM, and Client Apps.",
    features: ["Live TV Streaming", "VOD Libraries", "Multi-screen Support", "Content Management System"]
  },
  {
    icon: Shield,
    title: "Security & Surveillance",
    description: "End-to-end security architecture protecting physical and digital assets.",
    features: ["IP CCTV Cameras", "Thermal Imaging", "Drone Surveillance", "Video Analytics"]
  },
  {
    icon: Activity,
    title: "Digital Signage",
    description: "Dynamic visual communication networks for retail, corporate, and public spaces.",
    features: ["Centralized Control", "Interactive Kiosks", "Video Walls", "Ad Scheduling"]
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Smart entry management systems for restricted areas and workforce tracking.",
    features: ["Biometric Scanners", "RFID Cards", "Visitor Management", "Time & Attendance"]
  },
  {
    icon: Wifi,
    title: "Networking Infrastructure",
    description: "Robust structured cabling and wireless networks ensuring 100% connectivity.",
    features: ["Fiber Optics", "Enterprise Wi-Fi", "Data Center Setup", "Network Security"]
  },
  {
    icon: Server,
    title: "Hospitality TV",
    description: "Specialized in-room entertainment solutions for hotels and luxury residences.",
    features: ["PMS Integration", "Custom UI/UX", "Guest Services", "Room Controls"]
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen ">
      {/* Hero Banner */}
<div className="relative h-[280px] md:h-[360px]  overflow-hidden mb-20 shadow-lg">
  <img
    src="/Our_Services_Banner.jpg"
    alt="Services Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
      Our Services
    </h1>
    <p className="text-lg md:text-xl text-white/90 max-w-3xl">
      Comprehensive technology solutions designed to scale with your business needs.
    </p>
  </div>
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              // className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group"
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group flex flex-col"

            > 
            <div className="flex-grow">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              </div>

              <Link href="/contact " >
                <button className="w-full py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-200">
                  Request Info
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
