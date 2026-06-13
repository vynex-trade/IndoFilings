"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const pathname = usePathname();

  const services = [
    { name: "Company Registration", href: "/company-registration" },
    { name: "GST Registration", href: "/gst-registration" },
    { name: "Trademark Registration", href: "/Trademark" },
    { name: "Income Tax Filing", href: "/income-tax-filing" },
    { name: "Legal Documentation", href: "/legal-documentation" },
  ];

  const isServicePage = services.some(
    (service) => pathname === service.href
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo.png"
            alt="Indo Filings Logo"
            width={100}
            height={100}
            priority
          // className="sm:h-10"
          />

          <h1 className="font-bold leading-none whitespace-nowrap">
            <span className="text-lg sm:text-2xl md:text-3xl text-[#FF6B00]">
              Indo
            </span>
            <span className="text-lg sm:text-2xl md:text-3xl text-[#123C8C]">
              Filings
            </span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden h-full items-center gap-10 lg:flex">
          <Link
            href="/"
            className={`text-[15px] font-medium transition ${pathname === "/"
                ? "text-[#0B1F4D]"
                : "text-slate-700 hover:text-[#0B1F4D]"
              }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="group relative flex h-full items-center">
            <button
              className={`flex items-center gap-1 text-[15px] font-medium transition ${isServicePage
                  ? "text-[#0B1F4D]"
                  : "text-slate-700 hover:text-[#0B1F4D]"
                }`}
            >
              Services
              <HiChevronDown
                size={16}
                className="text-slate-500 transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            <div className="invisible absolute left-1/2 top-[55px] z-50 flex w-[260px] -translate-x-1/2 translate-y-2 flex-col rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl shadow-black/[0.06] transition-all duration-200 group-hover:visible group-hover:top-[65px] group-hover:translate-y-0 group-hover:opacity-100">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className={`rounded-lg px-3 py-2.5 text-[14px] font-medium transition ${pathname === service.href
                    ? "bg-blue-50 text-[#0B1F4D]"
                    : "text-slate-700 hover:bg-gray-50 hover:text-[#0B1F4D]"
                    }`}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>


          {/* About */}
          <Link
            href="/about"
            className={`text-[15px] font-medium transition ${pathname === "/about"
                ? "text-[#0B1F4D]"
                : "text-slate-700 hover:text-[#0B1F4D]"
              }`}
          >
            About Us
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={`text-[15px] font-medium transition ${pathname === "/contact"
                ? "text-[#0B1F4D]"
                : "text-slate-700 hover:text-[#0B1F4D]"
              }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="text-slate-800"
          >
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="flex flex-col gap-5 px-6 py-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-slate-700"
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() =>
                  setMobileServicesOpen(!mobileServicesOpen)
                }
                className="flex w-full items-center justify-between text-[15px] font-medium text-slate-700"
              >
                Services
                <HiChevronDown
                  size={18}
                  className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-4 flex flex-col gap-3 border-l-2 border-gray-100 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className={`text-[14px] font-medium transition ${pathname === service.href
                        ? "text-[#0B1F4D]"
                        : "text-slate-600 hover:text-[#0B1F4D]"
                        }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-slate-700"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-slate-700"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}