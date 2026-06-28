import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function Services() {
  const serviceCategories = [
    {
      title: "Medical Trainings",
      description: "Certified programs designed for healthcare professionals and students to master life-saving skills.",
      items: ["Basic Life Support (BLS)", "Advanced Cardiac Life Support (ACLS)", "Basic Trauma Care", "Pediatric Advanced Life Support"],
      image: "/training.jpeg", // Ensure these exist in your public folder
    },
    {
      title: "Corporate & Non-Medical",
      description: "Tailored safety programs for offices, schools, and industries to ensure workplace compliance.",
      items: ["First Aid & CPR", "AED Usage Training", "Fire Safety & Evacuation", "Disaster Management"],
      image: "/equipment.jpeg",
    },
    {
      title: "Equipments & Consumables",
      description: "High-quality medical supplies and advanced training tools for hospitals and institutions.",
      items: ["Realistic Training Manikins", "AED Trainers", "Trauma & PPE Kits", "Medical Disposables"],
      image: "/consumables.jpeg",
    }
  ];

  return (
    <main className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-[#fdf2ee] py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2E2F6E] mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Empowering healthcare with expert training and quality products. 
            We provide end-to-end solutions for medical readiness.
          </p>
        </div>
      </section>

      {/* MAIN SERVICES GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {serviceCategories.map((service, index) => (
            <div key={index} className="flex flex-col group">
              <div className="overflow-hidden rounded-3xl mb-6 shadow-lg">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h2 className="text-2xl font-bold text-[#2E2F6E] mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <FaCheckCircle className="text-[#6B73FF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* WHY OUR TRAINING? SECTION */}
      <section className="bg-[#2E2F6E] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">World-Class Training Standards</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-white/10 p-4 rounded-2xl h-fit">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Expert Instructors</h4>
                  <p className="text-gray-300">Our trainers are certified professionals with years of field experience in emergency medicine.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/10 p-4 rounded-2xl h-fit">
                  <span className="text-2xl">🛠️</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Hands-On Practice</h4>
                  <p className="text-gray-300">We use high-fidelity manikins and simulators to ensure a realistic learning experience.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/10 p-4 rounded-2xl h-fit">
                  <span className="text-2xl">📜</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Globally Recognized</h4>
                  <p className="text-gray-300">Certifications that comply with international healthcare protocols and standards.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/training-session.jpg" 
              alt="Live Training" 
              className="rounded-3xl shadow-2xl border-8 border-white/5"
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-[3rem] p-12 md:p-20 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2F6E] mb-6">
            Ready to upgrade your skills?
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Connect with us today for customized training modules or high-quality medical supplies.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#6B73FF] text-white px-10 py-4 rounded-full font-bold hover:bg-[#2E2F6E] transition-all shadow-lg hover:shadow-xl"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      {/* SIMPLE FOOTER */}
      <footer className="py-10 text-center border-t border-gray-100 text-gray-400 text-sm">
        © 2026 Vitraq Healthcare Solution Pvt Ltd. All rights reserved.
      </footer>
    </main>
  );
}
