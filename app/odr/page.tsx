"use client";

import { useState } from "react";
import {
  FaUsers,
  FaUserTie,
  FaFileInvoiceDollar,
  FaBalanceScale,
} from "react-icons/fa";

export default function ChooseYourService() {
  const [activeService, setActiveService] = useState("consumer");

  const services = [
    {
      id: "consumer",
      title: "Consumer Dispute",
      icon: <FaUsers />,
    },
    {
      id: "labour",
      title: "Labour Dispute",
      icon: <FaUserTie />,
    },
    {
      id: "insurance",
      title: "Insurance Dispute",
      icon: <FaFileInvoiceDollar />,
    },
    {
      id: "other",
      title: "Other Legal Dispute",
      icon: <FaBalanceScale />,
    },
  ];

  return (
    <section className="w-full">
      {/* Banner */}
      <div
        className="w-full py-20 px-6 text-center text-white"
        style={{ backgroundColor: "#111179" }}
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Choose Your Service
          </h1>

          <p className="max-w-4xl mx-auto text-base md:text-lg leading-8 text-gray-100">
            Whether you're facing a consumer dispute, labour issue,
            insurance claim, or any other legal concern, our team is here
            to help. Choose the service that fits your needs and receive
            professional guidance for quick, effective, and compliant
            dispute resolution.
          </p>
        </div>
      </div>

      {/* Service Selection */}
      <div className="bg-[#f8f8f8] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold text-[#1e293b] mb-12">
            Choose Your Service
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center gap-3 px-8 py-5 rounded-full font-semibold transition-all duration-300 shadow-md
                  ${
                    activeService === service.id
                      ? "bg-[#f5d8c2] scale-105 shadow-lg"
                      : "bg-[#f8dcc8] hover:bg-[#f5d8c2] hover:scale-105"
                  }`}
              >
                <span className="text-lg text-[#111179]">
                  {service.icon}
                </span>

                <span className="text-[#0f172a] text-sm md:text-base">
                  {service.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}