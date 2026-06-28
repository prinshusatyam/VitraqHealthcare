"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

const recipientEmail = "info@vitraqhealthcare.com";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "";
    const message = formData.get("message") || "";

    const mailto = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      "New contact form submission - Vitraq Healthcare"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailto;
    setStatus("email");
  };

  return (
    <main className="bg-[#f5f5f5] text-gray-800">
      <Navbar />

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-14 items-start">
        {/* LEFT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-8">
            Contact Us
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
            Reach out to Vitraq Healthcare Solutions for expert training,
            premium medical consumables, and healthcare equipment support.
          </p>

          <div className="mt-10 space-y-5 text-lg">
            <p>
              <strong>Address:</strong> D-4/71-A, Ground Floor, Sangam Vihar,
              New Delhi
            </p>

            <p>
              <strong>Phone:</strong> +91 93100 58031
            </p>

            <p>
              <strong>Email:</strong> info@vitraqhealthcare.com
            </p>

            <p>
              <strong>Hours:</strong> Mon - Fri | 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="_subject"
              value="New contact form submission - Vitraq Healthcare"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex="-1" />

            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email Address*</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message*</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your message here"
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#4f46e5] hover:bg-[#4338ca] disabled:opacity-60 disabled:cursor-not-allowed text-white px-10 py-4 rounded-full font-semibold transition"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "email" && (
              <p className="text-green-700 font-medium">
                Your email app should open with the message ready to send.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="bg-[#1f1f73] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 mb-14">
            <div>
              <h2 className="text-5xl font-light mb-6">Our Location</h2>

              <p className="text-xl text-gray-200 leading-relaxed max-w-xl">
                Find us in the heart of Delhi, delivering trusted healthcare
                solutions and certified emergency training services.
              </p>
            </div>

            <div className="space-y-8 text-lg">
              <div>
                <h4 className="font-semibold text-xl mb-2">Address</h4>
                <p>D-4/71-A, Ground Floor, Sangam Vihar, New Delhi</p>
              </div>

              <div>
                <h4 className="font-semibold text-xl mb-2">Hours</h4>
                <p>Mon-Fri 9am-6pm</p>
              </div>
            </div>
          </div>

          {/* EMBED MAP */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps?q=Sangam+Vihar+New+Delhi&output=embed"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* TERMS SECTION */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-24">
        <h2 className="text-5xl font-light text-black mb-12">
          Terms & Conditions
        </h2>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <p>
            Welcome to <strong>Vitraq Healthcare Solutions</strong>.
          </p>

          <p>
            By accessing this website, you agree to comply with and be bound by
            the following terms and conditions of use.
          </p>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-3">
              Cookies
            </h3>
            <p>
              We use cookies to improve your browsing experience and analyze
              website traffic. You may disable cookies in your browser settings.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-3">
              License
            </h3>
            <p>
              All content, branding, text, images, and materials on this website
              are owned by Vitraq Healthcare Solutions unless otherwise stated.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-3">
              Restrictions
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Do not copy or republish website material.</li>
              <li>Do not misuse content for commercial use.</li>
              <li>Do not damage or interfere with website functionality.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-3">
              Disclaimer
            </h3>
            <p>
              We strive to keep all information accurate, but do not guarantee
              completeness or uninterrupted website availability.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
