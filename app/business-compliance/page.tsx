"use client";

import React, { useState } from "react";
import { FaRocket, FaCity } from "react-icons/fa";

export default function BusinessComplianceSelector() {
  const [activeSelection, setActiveSelection] = useState<
    "startup" | "corporate" | null
  >(null);

  return (
    <>
      {/* Banner */}
      <section className="w-full bg-[#17178B] py-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Business Compliance
          </h1>

          <p className="text-lg leading-relaxed text-gray-100">
            Stay compliant and grow your business with our comprehensive
            Business Compliance services. From annual filings and regulatory
            compliance to corporate governance and legal documentation, our
            experts ensure your business meets all statutory requirements
            smoothly and efficiently.
          </p>
        </div>
      </section>

      {/* Selector Section */}
      <section className="w-full py-12 flex flex-col items-center justify-center bg-white">
        <h2 className="text-xl md:text-2xl font-bold text-[#1e293b] mb-6">
          Business Compliance
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/* Proprietorship + Startup */}
          <button
            onClick={() => setActiveSelection("startup")}
            className={`flex items-center gap-3 px-6 py-3.5 rounded-full transition-all duration-300
              ${
                activeSelection === "startup"
                  ? "bg-[#ffdcc2] shadow-md scale-105 ring-2 ring-orange-200"
                  : "bg-[#feeadd] shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:bg-[#ffead1] hover:shadow-md"
              }
            `}
          >
            <div className="flex items-center justify-center text-xl text-orange-600 bg-white p-1.5 rounded-full shadow-sm">
              <FaRocket className="w-4 h-4" />
            </div>

            <span className="font-bold text-[14px] md:text-[15px] text-[#0f172a] tracking-tight">
              Proprietorship + Startup
            </span>
          </button>

          {/* Corporate + Government */}
          <button
            onClick={() => setActiveSelection("corporate")}
            className={`flex items-center gap-3 px-6 py-3.5 rounded-full transition-all duration-300
              ${
                activeSelection === "corporate"
                  ? "bg-[#ffdcc2] shadow-md scale-105 ring-2 ring-orange-200"
                  : "bg-[#feeadd] shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:bg-[#ffead1] hover:shadow-md"
              }
            `}
          >
            <div className="relative flex items-center justify-center text-xl text-[#4785c4] bg-white p-1.5 rounded-full shadow-sm">
              <FaCity className="w-4 h-4" />
              <div className="absolute bottom-1 right-0.5 w-2 h-2 bg-red-500 border border-white rounded-[2px]" />
            </div>

            <span className="font-bold text-[14px] md:text-[15px] text-[#0f172a] tracking-tight">
              Corporate + Government
            </span>
          </button>
        </div>
      </section>
    </>
  );
}