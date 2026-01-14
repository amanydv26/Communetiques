import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

// const CATEGORIES = [
//   {
//     id: "stb",
//     name: "Set Top Boxes",
//     description: "High-performance Android and Linux STBs supporting 4K HDR.",
//     image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=800",
//     items: ["Android TV Box", "Hybrid DVB-C/S2 Box", "IPTV Stick"]
//   },
//   {
//     id: "headend",
//     name: "Headend Equipment",
//     description: "Professional encoders, transcoders, and IRDs for broadcast.",
//     image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=800",
//     items: ["4K Encoders", "Statmux", "Satellite Receivers"]
//   },
//   {
//     id: "cctv",
//     name: "Surveillance Cameras",
//     description: "AI-powered cameras with night vision and facial recognition.",
//     image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
//     items: ["PTZ Cameras", "Dome Cameras", "Bullet Cameras"]
//   },
//   {
//     id: "drone",
//     name: "Security Drones",
//     description: "Autonomous drones for perimeter security and inspection.",
//     image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800",
//     items: ["Surveillance Drones", "Tethered Drones", "Anti-Drone Systems"]
//   }
// ];
const CATEGORIES = [
  {
    id: "stb",
    name: "Set Top Boxes & Media Players",
    description:
      "We supply Android (AOSP & ATV), Linux, and Windows-based media players for IPTV and OTT platforms in multiple CPU and memory configurations. All devices are BIS certified and built for high performance broadcasting.",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=800",
    items: [
      "Android TV Boxes",
      "Linux Media Players",
      "Windows Media Players",
      "IPTV Streaming Devices"
    ]
  },

  {
    id: "headend",
    name: "Digital Headends",
    description:
      "Authorized distributors of GSS – Grundig Satellite Systems (Germany) providing professional digital headend solutions for IPTV, OTT and Cable TV networks, along with cost-effective broadcasting equipment.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=800",
    items: [
      "IPTV Headend Systems",
      "OTT Broadcasting Platforms",
      "Cable TV Headends",
      "Satellite IRDs & Encoders"
    ]
  },

  {
    id: "displays",
    name: "HD Commercial Displays",
    description:
      "High-definition commercial displays from global OEM brands for digital signage, corporate communication, broadcast information systems and large-format installations.",
    image:
      "https://images.unsplash.com/photo-1581091012184-7c54ab98fae2?auto=format&fit=crop&q=80&w=800",
    items: [
      "Commercial HD Displays",
      "Indoor LED Displays",
      "Outdoor LED Displays",
      "Flight Information Screens"
    ]
  },

  {
    id: "videowall",
    name: "Video Walls & Touch Screen Kiosks",
    description:
      "End-to-end hardware and software solutions for video walls and interactive kiosks used in advertising, navigation, self-service and digital information systems.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    items: [
      "Video Wall Systems",
      "Touch Screen Kiosks",
      "Wayfinding Displays",
      "Interactive Menu Boards"
    ]
  },

  {
    id: "security",
    name: "Digital Security Scanners",
    description:
      "Advanced security scanning systems for high-risk and high-traffic locations including airports, banks, government facilities and border checkpoints.",
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&q=80&w=800",
    items: [
      "X-Ray Luggage Scanners",
      "E-Gate Security Systems",
      "Mobile Detection Units",
      "Signal Jamming Systems"
    ]
  },

  {
    id: "biometric",
    name: "Iris Detection & Biometric Access",
    description:
      "High-accuracy biometric authentication solutions designed for mission-critical security and enterprise-grade access control environments.",
    image:
      "https://images.unsplash.com/photo-1581091870627-3b1b6b5d2f24?auto=format&fit=crop&q=80&w=800",
    items: [
      "Iris Recognition Devices",
      "Biometric Access Controllers",
      "Enterprise Access Systems",
      "Government Security Platforms"
    ]
  }
];

export default function Products() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white  ">
{/* Hero Banner */}
<div className="relative h-[280px] md:h-[360px] overflow-hidden mb-20 shadow-lg">
  <img
    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600"
    alt="Product Catalog Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
      Product Catalog
    </h1>
    <p className="text-lg md:text-xl text-white/90 max-w-3xl">
      Hardware and software components powering the next generation of media and security.
    </p>
  </div>
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     

        <div className="space-y-20">
          {CATEGORIES.map((category, idx) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                <p className="text-lg text-gray-600">{category.description}</p>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4">Available Products:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact"  className="inline-block pt-1">
                  <button className="px-8 py-3 bg-secondary text-white font-bold rounded-lg shadow-lg hover:bg-secondary/90 transition-colors">
                    Request Pricing
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
