import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  const heroImages = [
    { src: "/g1.jpg", alt: "Medical training session" },
    { src: "/session.jpeg", alt: "Healthcare training workshop" },
    { src: "/equipment.jpeg", alt: "Medical training equipment" },
    { src: "/consumables.jpeg", alt: "Medical consumables" },
    { src: "/g1.jpeg", alt: "Healthcare supplies and training" },
    { src: "/g2.jpeg", alt: "Medical learning session" },
    { src: "/g3.jpeg", alt: "Clinical training support" },
    { src: "/g5.jpeg", alt: "Training and consumables support" },
  ];

  const glimpses = [
    { src: "g1.jpeg", alt: "Bandages, gauze, gloves, and medical consumables" },
    { src: "g2.jpeg", alt: "Hands-on healthcare training in motion" },
    { src: "g3.jpeg", alt: "Packed medical consumables for clinical use" },
    { src: "g5.jpeg", alt: "Healthcare skills training session" },
    { src: "g6.jpeg", alt: "Medical learning and practice setup" },
  ];
  return (
    <main className="bg-[#f7fbff] text-[#172033]">

      <Navbar />

      {/* HERO SECTION */}
      <section className="px-6 pt-10 pb-16">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative">

        <HeroSlider images={heroImages} />

          <div className="pointer-events-none absolute inset-x-0 bottom-16 md:bottom-20 z-20 flex items-end px-6 md:px-10">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
              Saving Lives Through Knowledge, Training &{" "}
              <br className="hidden sm:block" />
              Trusted Healthcare Supplies.
            </h1>
          </div>
        </div>
      </section>

      {/* TOP CARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-blue-100">
            <img src="/training.jpeg" className="h-48 w-full object-cover motion-image" />
            <p className="p-4 text-center text-gray-700">
              Hands-on healthcare training programs
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-blue-100">
            <img src="/equipment.jpeg" className="h-48 w-full object-cover motion-image motion-delay-1" />
            <p className="p-4 text-center text-gray-700">
              Medical training equipments
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-blue-100">
            <img src="/consumables.jpeg" className="h-48 w-full object-cover motion-image motion-delay-2" />
            <p className="p-4 text-center text-gray-700">
              High-quality medical consumables
            </p>
          </div>

        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="text-center px-6 pb-16">
        <h2 className="text-4xl font-semibold text-[#1f3b57]">Our Services</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Empowering healthcare with expert training, quality equipment, and trusted consumables.
        </p>

        <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-8">

          {/* Training */}
          <div className="bg-white text-black rounded-2xl overflow-hidden shadow-md border border-blue-100">
            <img src="/s1.jpg" className="h-56 w-full object-cover motion-image" />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold">Courses & Training</h3>
              <p className="mt-2 text-gray-600">
                Comprehensive courses designed to enhance clinical skills and knowledge.
              </p>
            </div>
          </div>

          {/* Equipment */}
          <div className="bg-white text-black rounded-2xl overflow-hidden shadow-md border border-blue-100">
            <img src="/equipment.jpeg" className="h-56 w-full object-cover motion-image motion-delay-1" />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold">Equipment</h3>
              <p className="mt-2 text-gray-600">
                Supplying cutting-edge tools that support effective medical education.
              </p>
            </div>
          </div>

          {/* Consumables */}
          <div className="bg-white text-black rounded-2xl overflow-hidden shadow-md border border-blue-100">
            <img src="/consumables.jpeg" className="h-56 w-full object-cover motion-image motion-delay-2" />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold">Consumables</h3>
              <p className="mt-2 text-gray-600">
                Manufacturing reliable consumables that meet strict safety standards.
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* GLIMPSE SECTION */}
      <section className="bg-white text-black py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[0.75fr_1.25fr] gap-12 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl font-semibold">Glimpse</h2>
            <p className="mt-4 text-gray-600 max-w-md">
              Empowering skills with real-world medical training tools
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div
            className="overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div
              className="flex gap-6"
              style={{
                width: "max-content",
                animation: "galleryMove 22s linear infinite",
              }}
            >
              {[...glimpses, ...glimpses].map((image, index) => (
                <img
                  key={`${image.src}-${index}`}
                  src={image.src}
                  alt={image.alt}
                  className="h-80 w-[260px] max-w-[46vw] flex-none rounded-2xl object-cover shadow-xl"
                />
              ))}
            </div>
          </div>

        </div>
      </section>
      {/* CONTACT */}
      {/* CONTACT SECTION */}
      <Footer />
    </main>
  );
}
