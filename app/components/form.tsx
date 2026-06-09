"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Form() {
  const [state, setState] = useState("");

  return (
    <div className="w-full max-w-[520px] mx-auto">
      <div className="bg-[#f8f8f8] rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-10 py-10">
        
        {/* Heading */}
        <h2 className="text-center text-[26px] font-bold text-[#001c54] mb-10">
          Talk to Our Expert
        </h2>

        {/* Form Fields */}
        <div className="space-y-5">
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full h-[48px] px-5 border border-[#d7dce3] rounded-[8px] bg-white text-[15px] text-[#475569] outline-none"
          />

          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full h-[48px] px-5 border border-[#d7dce3] rounded-[8px] bg-white text-[15px] text-[#475569] outline-none"
          />

          <input
            type="text"
            placeholder="Your Mobile Number"
            className="w-full h-[48px] px-5 border border-[#d7dce3] rounded-[8px] bg-white text-[15px] text-[#475569] outline-none"
          />

          {/* State Dropdown */}
          <div className="relative">
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full h-[48px] px-5 border border-[#d7dce3] rounded-[8px] bg-white text-[15px] text-[#001c54] appearance-none outline-none cursor-pointer"
            >
              <option value="">State</option>
              <option>Delhi</option>
              <option>Maharashtra</option>
              <option>Uttar Pradesh</option>
              <option>Gujarat</option>
              <option>Karnataka</option>
            </select>

            <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] pointer-events-none text-lg" />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3 pt-1">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 border border-gray-400 rounded"
            />

            <p className="text-[12px] leading-[18px] text-[#334155]">
              I have read & agreed to the company's Terms and Conditions,
              disclaimer and refund policy, and also ready to accept calls,
              SMS, emails, etc.
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-[56px] mt-2 bg-[#ff1f1f] hover:bg-[#ea1c1c] rounded-full text-white text-[18px] font-semibold transition-all"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}