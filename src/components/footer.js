"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const recipientEmail = "info@vitraqhealthcare.com";

export default function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const body = `
Name: ${name}

Message:
${message}
    `;

    const mailto = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      "Message from Vitraq Healthcare website"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <footer>
      <section className="bg-[#1f3b57] text-white py-8 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-300 mb-6">
              Reach out for support or inquiries
            </p>

            <div className="flex items-center gap-4 text-black">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="p-2 rounded-full hover:bg-gray-100 transition text-white cursor-pointer">
                  <FaFacebookF size={18} className="hover:text-blue-600" />
                </div>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <div className="p-2 rounded-full hover:bg-gray-100 transition text-white cursor-pointer">
                  <FaInstagram size={18} className="hover:text-pink-500" />
                </div>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <div className="p-2 rounded-full hover:bg-gray-100 transition text-white cursor-pointer">
                  <FaLinkedinIn size={18} className="hover:text-blue-700" />
                </div>
              </a>

              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <div className="p-2 rounded-full hover:bg-gray-100 transition text-white cursor-pointer">
                  <FaXTwitter size={18} className="hover:text-black" />
                </div>
              </a>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-300 text-sm">Email</p>
              <p className="mt-1">{recipientEmail}</p>
            </div>

            <div>
              <p className="text-gray-300 text-sm">Phone</p>
              <p className="mt-1">+91-93100 58031</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label
                htmlFor="footer-name"
                className="text-sm text-gray-200 font-medium"
              >
                Your Full Name
              </label>

              <input
                id="footer-name"
                name="name"
                type="text"
                placeholder="Enter name here"
                className="w-full mt-2 px-5 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-400 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="footer-message"
                className="text-sm text-gray-200 font-medium"
              >
                Message
              </label>

              <textarea
                id="footer-message"
                name="message"
                rows={4}
                placeholder="Write your message"
                className="w-full mt-2 px-5 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-400 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 py-4 rounded-full font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <p className="text-sm text-gray-400 mt-12 max-w-6xl mx-auto">
          © 2026. All rights reserved.
        </p>
      </section>
    </footer>
  );
}