'use client';

import React, { useState } from "react";
import Form from "../components/form";

// --- REACT ICONS IMPORTS ---
import {
  FaPlane, FaPiggyBank, FaEnvelope, FaBriefcaseMedical, FaSuitcase,
  FaPhoneAlt, FaShoppingCart, FaShieldAlt, FaBuilding, FaHome,
  FaLightbulb, FaGasPump, FaShoppingBasket, FaCar, FaGraduationCap,
  FaBriefcase, FaWifi, FaSatelliteDish, FaRegCalendarAlt, FaUserTie,
  FaRegCompass
} from "react-icons/fa";
import { MdDevices, MdSupportAgent, MdCheckCircle } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { IoMdSpeedometer } from "react-icons/io";
import Image from "next/image";

export default function Page() {
  // FIX 1: Explicitly type the state as number | null
  const [openCard, setOpenCard] = useState<number | null>(1);

  const categories = [
    { name: "Airline Complaints", icon: <FaPlane className="w-10 h-10" /> },
    { name: "Banking Complaints", icon: <FaPiggyBank className="w-10 h-10" /> },
    { name: "Postal Complaints", icon: <FaEnvelope className="w-10 h-10" /> },
    { name: "Medical Complaints", icon: <FaBriefcaseMedical className="w-10 h-10" /> },
    { name: "Travel Complaints", icon: <FaSuitcase className="w-10 h-10" /> },
    { name: "Telecom Complaints", icon: <FaPhoneAlt className="w-10 h-10" /> },
    { name: "E-commerce Complaints", icon: <FaShoppingCart className="w-10 h-10" /> },
    { name: "Insurance Complaints", icon: <FaShieldAlt className="w-10 h-10" /> },
    { name: "Real Estate Complaints", icon: <FaBuilding className="w-10 h-10" /> },
    { name: "Home Appliances Complaints", icon: <FaHome className="w-10 h-10" /> },
    { name: "Electricity Complaints", icon: <FaLightbulb className="w-10 h-10" /> },
    { name: "LPG / Petroleum Complaints", icon: <FaGasPump className="w-10 h-10" /> },
    { name: "Food Safety Complaints", icon: <FaShoppingBasket className="w-10 h-10" /> },
    { name: "Mobile / Laptop Complaints", icon: <MdDevices className="w-10 h-10" /> },
    { name: "Automobiles Complaints", icon: <FaCar className="w-10 h-10" /> },
    { name: "Education Complaints (Private coaching institutes only)", icon: <FaGraduationCap className="w-10 h-10" /> },
    { name: "Job Services", icon: <FaBriefcase className="w-10 h-10" /> },
    { name: "ISP Complaints", icon: <FaWifi className="w-10 h-10" /> },
    { name: "D2H Complaints", icon: <FaSatelliteDish className="w-10 h-10" /> }
  ];

  // FIX 2: Add ": number" type to cardNumber parameter
  const toggleCard = (cardNumber: number) => {
    setOpenCard(openCard === cardNumber ? null : cardNumber);
  };

  return (
    <div className="w-full font-sans text-gray-800">
      {/* ================= EXISTING SECTION ================= */}
      {/* REMOVED min-h-screen from here so it doesn't leave blank space below the form */}
      <section className="bg-gradient-to-br from-[#f8fafc] to-[#eef4ff] py-14">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-[500px_1fr] gap-8 items-start">

            {/* LEFT FORM */}
            <Form />

            {/* RIGHT CONTENT */}
            <div className="space-y-5">

              {/* Heading */}
              <div>
                <span className="text-[#f26522] font-semibold uppercase tracking-wider text-sm">
                  Consumer Rights
                </span>
                <h2 className="text-3xl font-bold text-[#0B1F4D] mt-2">
                  Consumer Protection & Compensation
                </h2>
                <p className="text-slate-600 mt-2">
                  Understand your rights under the Consumer Protection Act and
                  learn about available remedies, penalties, and compensation.
                </p>
              </div>

              {/* CARD 1 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <div
                  className="bg-[#0B1F4D] text-white px-6 py-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCard(1)}
                >
                  <h3 className="font-semibold text-base">
                    Consumer Protection Act, 2019
                  </h3>

                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xl">
                    {openCard === 1 ? "−" : "+"}
                  </div>
                </div>

                {openCard === 1 && (
                  <div className="p-6 text-gray-700 leading-7">
                    <p className="mb-4">
                      The Consumer Protection Act, 2019 replaced the earlier
                      Consumer Protection Act, 1986 and introduced stronger
                      safeguards for consumers.
                    </p>

                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-[#f26522] font-bold">✓</span>
                        Protection against hazardous products and services.
                      </li>

                      <li className="flex gap-3">
                        <span className="text-[#f26522] font-bold">✓</span>
                        Access to accurate information regarding quality, quantity,
                        purity, standards, and pricing.
                      </li>

                      <li className="flex gap-3">
                        <span className="text-[#f26522] font-bold">✓</span>
                        Fair access to products and services at competitive prices.
                      </li>

                      <li className="flex gap-3">
                        <span className="text-[#f26522] font-bold">✓</span>
                        Protection against unfair trade practices and consumer exploitation.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* CARD 2 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <div
                  className="bg-[#0B1F4D] text-white px-6 py-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCard(2)}
                >
                  <h3 className="font-semibold text-base">
                    Compensation & Penalties Under the Act
                  </h3>

                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xl">
                    {openCard === 2 ? "−" : "+"}
                  </div>
                </div>

                {openCard === 2 && (
                  <div className="p-6 space-y-6 text-gray-700">

                    <div className="border-l-4 border-[#f26522] pl-4">
                      <h4 className="font-semibold text-[#0B1F4D] mb-2">
                        Misleading Advertisements
                      </h4>
                      <p>
                        The Central Consumer Protection Authority (CCPA) may impose
                        penalties up to ₹10 lakh and imprisonment up to two years for
                        false or misleading advertisements. Repeat offences may attract
                        penalties up to ₹50 lakh and imprisonment up to five years.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#f26522] pl-4">
                      <h4 className="font-semibold text-[#0B1F4D] mb-2">
                        File Complaints From Anywhere
                      </h4>
                      <p>
                        Consumers can conveniently file complaints from their place
                        of residence, workplace, or any suitable location.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#f26522] pl-4">
                      <h4 className="font-semibold text-[#0B1F4D] mb-2">
                        Product Liability Compensation
                      </h4>
                      <p>
                        Consumers can seek compensation for losses caused by defective
                        products or deficient services. Manufacturers, sellers, and
                        service providers may be held accountable under product
                        liability provisions.
                      </p>
                    </div>

                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= NEW ADD-ON SECTIONS ================= */}

      {/* 1. Why Choose Online Dispute Resolution? */}
      <section className="bg-gradient-to-br from-[#0B1F4D] via-[#102C66] to-[#1A4B8C] py-16 px-4 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-12">
            Why Choose Online Dispute Resolution?
          </h2>

          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {/* Efficiency */}
            <div className="flex flex-col items-center max-w-[250px]">
              <div className="text-[#f26522] mb-3 border-2 border-[#f26522] rounded-full p-3 bg-white/10 backdrop-blur-sm">
                <IoMdSpeedometer className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2 text-white">Efficiency</h3>
              <p className="text-sm text-slate-300">
                Resolve disputes faster than traditional court litigation.
              </p>
            </div>

            {/* Cost Effective */}
            <div className="flex flex-col items-center max-w-[250px]">
              <div className="text-[#f26522] mb-3 border-2 border-[#f26522] rounded-full p-3 w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <BiRupee className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2 text-white">Cost-Effective</h3>
              <p className="text-sm text-slate-300">
                Significantly lower expenses compared to lengthy court cases.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="flex flex-col items-center max-w-[250px]">
              <div className="text-[#f26522] mb-3 border-2 border-[#f26522] rounded-full p-3 bg-white/10 backdrop-blur-sm">
                <FaShieldAlt className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2 text-white">Confidentiality</h3>
              <p className="text-sm text-slate-300">
                Your sensitive information remains secure and protected.
              </p>
            </div>

            {/* Flexibility */}
            <div className="flex flex-col items-center max-w-[250px]">
              <div className="text-[#f26522] mb-3 border-2 border-[#f26522] rounded-full p-3 bg-white/10 backdrop-blur-sm">
                <FaRegCalendarAlt className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2 text-white">Flexibility</h3>
              <p className="text-sm text-slate-300">
                Convenient scheduling with streamlined procedures.
              </p>
            </div>

            {/* Expert Mediators */}
            <div className="flex flex-col items-center max-w-[250px]">
              <div className="text-[#f26522] mb-3 border-2 border-[#f26522] rounded-full p-3 bg-white/10 backdrop-blur-sm">
                <FaUserTie className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2 text-white">Expert Mediators</h3>
              <p className="text-sm text-slate-300">
                Experienced professionals dedicated to facilitating fair resolutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Advantages */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold inline-block border-b-2 border-[#0B1F4D] pb-1">
              Our Advantages
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="bg-gray-100 p-4 rounded-full flex-shrink-0 text-[#0B1F4D]">
                <FaPiggyBank className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Time saving</h4>
                <p className="text-sm text-gray-600">
                  Filing online consumer Dispute will save your time
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-gray-100 p-4 rounded-full flex-shrink-0 text-[#0B1F4D]">
                <MdDevices className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Cost effective</h4>
                <p className="text-sm text-gray-600">
                  Dispute resolution offers a more cost-effective and time-efficient
                  alternative to traditional litigation.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-gray-100 p-4 rounded-full flex-shrink-0 text-[#0B1F4D]">
                <FaRegCompass className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Dispute Anywhere</h4>
                <p className="text-sm text-gray-600">
                  It can be done from any location i.e. home, office or vacation trip
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-gray-100 p-4 rounded-full flex-shrink-0 text-[#0B1F4D]">
                <MdSupportAgent className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Expert Advice</h4>
                <p className="text-sm text-gray-600">
                  You will receive assistance from Consumer Dispute experts of Online
                  Legal India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who Can Use Our Services? */}
      <section className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2b3a4a] mb-2">
              Who Can Use Our Online Dispute Resolution Services?
            </h2>
            <p className="text-gray-600">Our services are ideal for resolving disputes related to</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Image Placeholder */}
            {/* Left Image */}
            <div className="relative w-full h-[300px] overflow-hidden border-l-[10px] border-b-[10px] border-yellow-400 rounded-md">
              <Image
                src="/pc.jpg"
                alt="Online Dispute Resolution"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Checklist */}
            <ul className="space-y-4">
              {[
                "Online purchases and e-commerce transactions",
                "E-commerce refund and return issues",
                "Service delivery issues",
                "Warranty and guarantee claims",
                "Billing and payment discrepancies",
                "Misleading advertisements",
                "Warranty and guarantee disputes"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <MdCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Select Category */}
      <section className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold inline-block border-b-2 border-blue-600 pb-1">
              Select Category
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 p-2 cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <div className="text-blue-600">
                  {cat.icon}
                </div>
                <span className="text-xs text-gray-600 font-medium">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How we work? */}
      <section className="bg-gradient-to-br from-[#0B1F4D] via-[#102C66] to-[#1A4B8C] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              How We Work
            </h2>
            <div className="w-20 h-1 bg-[#f26522] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Fill the Form",
              "Get a Call from Our Expert",
              "Case Analysis by Specialist",
              "Case Assigned to Professional",
            ].map((text, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 h-[240px] flex flex-col justify-center items-center text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
              >
                {/* Step Number */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#f26522] text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                {/* Large Background Number */}
                <span className="absolute -bottom-6 right-2 text-[120px] font-bold text-white/5 leading-none select-none">
                  {index + 1}
                </span>

                <h3 className="text-white text-lg font-semibold mb-4 z-10">
                  {text}
                </h3>

                <div className="w-10 h-10 rounded-full border border-[#f26522] flex items-center justify-center text-[#f26522] z-10">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Team Of Arbitrators */}
      <section className="bg-gradient-to-br from-[#0B1F4D] via-[#102C66] to-[#1A4B8C] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">

            {/* Header */}
            <div className="bg-[#081730] px-8 py-5">
              <h2 className="text-xl md:text-2xl font-bold text-white text-center">
                Our Team of Arbitrators & Mediators
              </h2>
            </div>

            {/* Content */}
            <div className="bg-white p-8 md:p-10">
              <div className="grid md:grid-cols-3 gap-6">

                <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition">
                  <div className="w-12 h-12 rounded-full bg-[#f26522]/10 flex items-center justify-center mb-4">
                    <span className="text-[#f26522] text-xl">⚖️</span>
                  </div>
                  <h3 className="font-semibold text-[#0B1F4D] mb-2">
                    Former Judge
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Hon'ble High Court professionals with extensive judicial experience.
                  </p>
                </div>

                <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition">
                  <div className="w-12 h-12 rounded-full bg-[#f26522]/10 flex items-center justify-center mb-4">
                    <span className="text-[#f26522] text-xl">🏛️</span>
                  </div>
                  <h3 className="font-semibold text-[#0B1F4D] mb-2">
                    Government Experts
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Former Registrars of NCLT, DRT and other Government institutions.
                  </p>
                </div>

                <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition">
                  <div className="w-12 h-12 rounded-full bg-[#f26522]/10 flex items-center justify-center mb-4">
                    <span className="text-[#f26522] text-xl">🎓</span>
                  </div>
                  <h3 className="font-semibold text-[#0B1F4D] mb-2">
                    Certified Professionals
                  </h3>
                  <p className="text-gray-600 text-sm">
                    IIAM Certified Mediators and Members of APCAM with proven expertise.
                  </p>
                </div>

              </div>

              {/* Disclaimer */}
              <div className="mt-8 bg-amber-50 border-l-4 border-[#f26522] rounded-xl p-5">
                <h4 className="font-semibold text-[#0B1F4D] mb-2">
                  Disclaimer
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Our Mediators and Arbitrators are independent professionals who act
                  strictly in a neutral, private, and non-judicial capacity to help
                  parties reach fair and efficient dispute resolutions.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#081730] py-5 text-center">
              <span className="text-[#f26522] font-semibold tracking-wide">
                ONLINE DISPUTE RESOLUTION
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <section className="bg-gradient-to-r from-[#0B1F4D] via-[#102C66] to-[#1A4B8C] py-20 px-4 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#f26522]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block bg-[#f26522]/20 text-[#f26522] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Online Dispute Resolution
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Resolve Consumer Disputes
            <span className="block text-[#f26522]">
              Faster & More Efficiently
            </span>
          </h2>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Don't let consumer disputes remain unresolved. Our secure Online
            Dispute Resolution platform helps individuals and businesses settle
            disputes quickly, professionally, and cost-effectively.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#f26522] hover:bg-[#e55a1c] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Submit Your Dispute
            </button>

            <button className="border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}