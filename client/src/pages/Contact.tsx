import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 ">

      {/* Hero Banner */}
<div className="relative h-[280px] md:h-[360px] overflow-hidden mb-16 shadow-lg">
  <img
    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600"
    alt="Contact Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
      Contact Us
    </h1>
    <p className="text-lg md:text-xl text-white/90 max-w-2xl">
      Have a project in mind? Our team of experts is ready to assist you.
    </p>
  </div>
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Our team of experts is ready to assist you.
          </p>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 lg:col-span-1"
          >
            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Office</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                123 Tech Park, Andheri East,
                <br />
                Mumbai, Maharashtra 400093,
                <br />
                India
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Phone & Email
                </h3>
              </div>
              <p className="text-gray-600 mb-2">+91 22 1234 5678</p>
              <p className="text-primary font-medium">info@communetiques.com</p>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Business Hours
                </h3>
              </div>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Sat: 10:00 AM - 2:00 PM</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-lg h-[400px] border border-gray-200 bg-gray-200 relative">
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
            {/* In a real app, embed Google Maps iframe here */}
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Interactive Map Loading...</p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709901234567!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
