import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[280px] md:h-[360px] bg-secondary text-white py-20 mb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Office background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center  pt-6 md:pt-10 ">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            About Communetiques
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pioneering digital convergence with integrated solutions in IPTV, Media, and Security since 2010.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Technology Partners for the Modern Era
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Communetiques is a premier technology solutions provider based in Mumbai, India. We specialize in bridging the gap between media distribution and digital security.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our team consists of industry veterans from broadcasting, telecommunications, and IT security sectors. We don't just sell products; we engineer complete ecosystems that are scalable, secure, and future-proof.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                "10+ Years Experience",
                "500+ Projects Delivered",
                "ISO 9001 Certified",
                "Pan-India Presence"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-3" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Team meeting" 
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-primary/5 p-10 rounded-3xl border border-primary/10">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower organizations with robust digital infrastructure that simplifies operations and enhances security, delivering exceptional value through innovation and dedicated support.
            </p>
          </div>

          <div className="bg-secondary text-white p-10 rounded-3xl shadow-xl">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the most trusted integrated technology partner in India for media and security convergence, recognized for our technical excellence and customer-centric approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
