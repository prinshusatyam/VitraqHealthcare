import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function ServiceSubPage({
  title,
  intro,
  items,
  image,
  imageAlt,
}) {
  return (
    <main className="bg-white min-h-screen font-sans">
      <Navbar />

      <section className="bg-[#fdf2ee] py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-[#6B73FF] mb-2">
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-600">{title}</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E2F6E] mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">{intro}</p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="overflow-hidden rounded-3xl shadow-lg">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-72 md:h-80 object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#2E2F6E] mb-6">
            What we offer
          </h2>
          <ul className="space-y-4">
            {items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 leading-relaxed"
              >
                <FaCheckCircle className="text-[#6B73FF] mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-gray-50">
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Tell us your goals - we will recommend the right modules, schedule, and
          materials for your team.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#6B73FF] text-white px-10 py-4 rounded-full font-bold hover:bg-[#2E2F6E] transition-all shadow-lg hover:shadow-xl"
        >
          Contact us
        </Link>
      </section>

      <footer className="py-10 text-center border-t border-gray-100 text-gray-400 text-sm">
        © 2026 Vitraq Healthcare Solution Pvt Ltd. All rights reserved.
      </footer>
    </main>
  );
}
