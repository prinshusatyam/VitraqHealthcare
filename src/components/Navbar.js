"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  HiMenu,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const serviceItems = [
    { name: "Trainings", path: "/services/trainings" },
    { name: "Medical Consumables", path: "/services/medical-consumables" },
    { name: "Training Equipments", path: "/services/training-equipments" },
  ];

  return (
    <nav className="bg-white px-8 py-4 flex items-center justify-between relative z-50 text-gray-900">

      {/* LOGO */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Vitraq"
          width={255}
          height={95}
          priority
        />
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 text-gray-800 font-medium">

        <Link href="/" className="relative group">
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link href="/about" className="relative group">
          About
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* SERVICES DROPDOWN */}
        <div
          className="relative"
          onMouseEnter={() => setServiceOpen(true)}
          onMouseLeave={() => setServiceOpen(false)}
        >
          <div className="flex items-center gap-1 cursor-pointer relative group">
            <Link href="/services">Services</Link>

            {/* Arrow changes on hover */}
            {serviceOpen ? (
              <HiChevronUp size={16} />
            ) : (
              <HiChevronDown size={16} />
            )}

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </div>

          {serviceOpen && (
          <div className="absolute top-full left-0 z-50 w-64 pt-3">
            <div className="bg-white shadow-xl rounded-xl py-3 border border-gray-100">
              {serviceItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  className="block px-5 py-3 hover:bg-gray-50 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        </div>

        <Link href="/contact" className="relative group">
          Contact
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>


        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-3 text-black ml-4">

          <a
            href="https://www.facebook.com/vitraqhealthcaresolution/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="cursor-pointer hover:text-blue-600 transition" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="cursor-pointer hover:text-blue-700 transition" />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="cursor-pointer hover:text-black transition" />
          </a>

        </div>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-3xl text-black"
        onClick={() => setOpen(true)}
      >
        <HiMenu />
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">

          <button
            className="self-end text-4xl text-black"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>

          <div className="flex flex-col gap-6 mt-12 text-2xl font-semibold text-center">

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            {/* MOBILE SERVICES */}
            <div>
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="flex items-center justify-center gap-2 w-full"
              >
                Services
                {serviceOpen ? (
                  <HiChevronUp />
                ) : (
                  <HiChevronDown />
                )}
              </button>

              {serviceOpen && (
                <div className="mt-4 flex flex-col gap-4 text-lg font-medium text-gray-700">
                  {serviceItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.path}
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>

          <div className="flex justify-center gap-6 mt-auto pb-10 text-2xl">

            <a href="https://www.facebook.com/vitraqhealthcaresolution/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-blue-600 transition" />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-blue-700 transition" />
            </a>

            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="hover:text-black transition" />
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}
