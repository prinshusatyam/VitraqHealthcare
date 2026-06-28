import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
export default function About() {
  return (
    <main>
      <Navbar />

      {/* HERO / INTRO SECTION */}
      <section className="px-6 pt-16 pb-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl font-bold mb-8 text-[#2E2F6E]">
              About Vitraq Healthcare
            </h1>

            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                At <span className="font-bold text-[#2E2F6E]">Vitraq Healthcare Solution Pvt Ltd</span>, we're more than a provider—we're your dedicated partner in transforming healthcare readiness across India. From Delhi's vibrant clinics and hospitals to healthcare centers nationwide, we deliver world-class medical training programs that empower doctors, nurses, paramedics, frontline professionals, corporates, and even non-medical personnel to become confident, life-saving heroes in critical moments.
              </p>
              <p>
                Our tailored training covers essential skills like CPR, First Aid, AED use, Fire Safety, and Basic Trauma Care, with specialized sessions for corporate teams to meet workplace safety compliance and for non-medical individuals seeking practical life-saving knowledge. We also supply premium medical consumables—such as trauma kits, disposables, and PPE—alongside advanced training equipment like realistic manikins and simulators, all sourced to the highest global standards for seamless performance.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE WITH STATS */}
          <div className="relative">
            <img
              src="/operating-room.jpg" // Replace with your image path
              alt="Medical Team"
              className="rounded-3xl w-full h-[500px] object-cover shadow-xl"
            />
            {/* STATS OVERLAY BOX (From Image 1) */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#1e2051] text-white p-8 rounded-b-3xl grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-4xl font-bold">150+</h3>
                <p className="text-gray-300 text-sm">100+ Clients</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">15</h3>
                <p className="text-gray-300 text-sm">Trusted Nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY VITRAQ STANDS OUT (Bullet points from Image 2) */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Why Vitraq Stands Out</h3>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li><span className="font-bold text-[#2E2F6E]">• Nationwide Impact:</span> Serving 100+ clients with flexible, on-site or virtual sessions.</li>
          <li><span className="font-bold text-[#2E2F6E]">• Proven Results:</span> 98% certification success rate and glowing testimonials from top hospitals.</li>
          <li><span className="font-bold text-[#2E2F6E]">• Innovation First:</span> Stay ahead with the latest protocols and tech-driven tools.</li>
        </ul>
        <p className="mt-8 text-xl italic">
          Join the Vitraq movement—where expertise meets excellence. <span className="font-bold">Ready to elevate your healthcare game?</span> Let's connect today!
        </p>
      </section>

      {/* WHY CHOOSE / MISSION / PROMISE (Image 2 bottom) */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {/* WHY CHOOSE US LIST */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#2E2F6E]">Why Choose Vitraq Healthcare?</h3>
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>✓ Certified & Industry-Compliant Training Programs</li>
              <li>✓ Experienced Healthcare Trainers & Instructors</li>
              <li>✓ Hands-On Practical Learning Sessions</li>
              <li>✓ Customized Corporate Safety Programs</li>
              <li>✓ Premium Quality Medical Consumables</li>
              <li>✓ Affordable & Scalable Solutions</li>
            </ul>
          </div>

          {/* MISSION */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#2E2F6E]">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To strengthen emergency preparedness and healthcare excellence by delivering certified life-saving training programs and supplying dependable, high-quality medical consumables that support safe healthcare environments.
            </p>
          </div>

          {/* PROMISE */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#2E2F6E]">Our Promise</h3>
            <p className="text-gray-600 leading-relaxed">
              We promise to provide practical, industry-aligned training and quality-assured healthcare products with professionalism, integrity, and unwavering commitment to safety—ensuring that our clients are always prepared.
            </p>
          </div>
        </div>
      </section>

      {/* FEEDBACK SECTION (Image 3/4) */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-[#2E2F6E] mb-2">Feedback</h2>
          <p className="text-gray-500 mb-12">What our clients say about us</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-[#6B73FF] text-white p-10 rounded-sm text-left relative">
              <div className="text-xl mb-4">★★★★★</div>
              <p className="text-lg mb-8 italic">
                "The medical equipment supplied by Vitraq is reliable and easy to use, helping us maintain high standards every day."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
                  <img src="/avatar1.jpg" alt="Ms. Sharma" className="object-cover" />
                </div>
                <div>
                  <p className="font-bold">Ms. Sharma</p>
                  <p className="text-sm opacity-80">Mumbai</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#6B73FF] text-white p-10 rounded-sm text-left relative">
              <div className="text-xl mb-4">★★★★★</div>
              <p className="text-lg mb-8 italic">
                "Vitraq's training programs transformed our staff's skills, making a real difference in patient care quality."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
                  <img src="/avatar2.jpg" alt="Dr. Mehta" className="object-cover" />
                </div>
                <div>
                  <p className="font-bold">Dr. Mehta</p>
                  <p className="text-sm opacity-80">Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}