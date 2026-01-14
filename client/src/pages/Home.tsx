import { HeroSlider } from "@/components/HeroSlider";
import { Shield, Tv, Users, Headset, ChevronRight, Activity, Globe, Lock } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FEATURES = [
  {
    icon: Activity,
    title: "Advanced Technology",
    description: "State-of-the-art solutions leveraging the latest in IPTV and security tech."
  },
  {
    icon: Shield,
    title: "Quality of Service",
    description: "Guaranteed 99.9% uptime with enterprise-grade infrastructure."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Decades of combined experience in media and security sectors."
  },
  {
    icon: Headset,
    title: "24x7 Support",
    description: "Round-the-clock technical assistance for critical operations."
  }
];

const INDUSTRIES = [
  { name: "Airports & Metro", icon: Globe, img: "https://images.unsplash.com/photo-1542296332-2e44a996aa0d?auto=format&fit=crop&q=80&w=800" },
  { name: "Hospitals", icon: Activity, img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
  { name: "Banks & Finance", icon: Lock, img: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800" },
  { name: "Railways", icon: Users, img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800" }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSlider />

      {/* Key Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">Why Choose Communetiques?</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We deliver integrated technology solutions that empower businesses to operate more efficiently and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Industry Leading Solutions</h2>
            </div>
            <Link href="/services">
              <button className="hidden md:flex items-center gap-2 text-white hover:text-primary transition-colors font-semibold mt-4 md:mt-0">
                View All Services <ChevronRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl h-80">
          
              <img 
                src="https://pixabay.com/get/g6135f50d9a99be3d3bcdbd03522813097eb668022bf08c924323b838402f6932d8280a64868f60c6a9855b85a1494072_1280.jpg" 
                alt="IPTV" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                <Tv className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">IPTV & OTT</h3>
                <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  End-to-end streaming infrastructure for media companies.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl h-80">
             
              <img 
                src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800" 
                alt="Security" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">Security Systems</h3>
                <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Advanced surveillance including CCTV, drones, and access control.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl h-80">
        
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
                alt="Digital Signage" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                <Activity className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">Digital Signage</h3>
                <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Interactive display solutions for retail and corporate spaces.
                </p>
              </div>
            </div>
          </div>
           */}
<div className="relative">
           <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={24}
  loop
  autoplay={{ delay: 3500, disableOnInteraction: false }}
  navigation
  pagination={{ clickable: true }}
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="w-full pb-12"
>
  {/* IPTV */}
  <SwiperSlide>
    <ServiceCard
      img="https://pixabay.com/get/g6135f50d9a99be3d3bcdbd03522813097eb668022bf08c924323b838402f6932d8280a64868f60c6a9855b85a1494072_1280.jpg"
      icon={<Tv className="w-10 h-10 text-primary mb-4" />}
      title="IPTV & OTT"
      desc="End-to-end streaming infrastructure for media companies."
    />
  </SwiperSlide>

  {/* Security */}
  <SwiperSlide>
    <ServiceCard
      img="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800"
      icon={<Shield className="w-10 h-10 text-primary mb-4" />}
      title="Security Systems"
      desc="Advanced surveillance including CCTV, drones, and access control."
    />
  </SwiperSlide>

  {/* Digital Signage */}
  <SwiperSlide>
    <ServiceCard
      img="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
      icon={<Activity className="w-10 h-10 text-primary mb-4" />}
      title="Digital Signage"
      desc="Interactive display solutions for retail and corporate spaces."
    />
  </SwiperSlide>
  <SwiperSlide>
  <ServiceCard
    img="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    icon={<Users className="w-10 h-10 text-primary mb-4" />}
    title="Logistics & Transport"
    desc="Smart logistics solutions for tracking and supply chain optimization."
  />
</SwiperSlide>
</Swiper>
</div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/services">
              <button className="w-full py-3 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/10 transition-colors">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored solutions for critical infrastructure and public sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {INDUSTRIES.map((industry, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden aspect-square mb-4 shadow-md">
                  <img 
                    src={industry.img} 
                    alt={industry.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-center font-bold text-gray-800 group-hover:text-primary transition-colors">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6  leading-snug md:leading-tight ">Ready to upgrade your infrastructure?</h2>
          <p className="text-xl opacity-90 mb-10">Get a custom quote for your specific requirements today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg shadow-lg hover:bg-gray-100 hover:-translate-y-1 transition-all duration-200">
                Contact Sales
              </button>
            </Link>
            <Link href="/products">
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-200">
                View Catalog
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
interface ServiceCardProps {
  img: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function ServiceCard({ img, icon, title, desc }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl h-80">
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
        {icon}
        <h3 className="text-2xl font-bold mb-2">{title}</h3>

        <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          {desc}
        </p>
      </div>
    </div>
  );
}
