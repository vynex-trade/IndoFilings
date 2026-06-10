"use client";

import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp, FiPlus, FiMinus } from "react-icons/fi";

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir",
  "Ladakh", "Lakshadweep", "Puducherry",
];

const FAQ_DATA = [
  {
    question: "1. What is ISO Certification and why is it important?",
    answer: "ISO Certification is an internationally recognized standard that ensures your business meets quality, safety, or efficiency benchmarks. It builds trust with customers, improves business processes, and can help you win contracts."
  },
  {
    question: "2. Which ISO standard is right for my business?",
    answer: "It depends on your industry and goals. For example:\n• ISO 9001 (Good for quality management)\n• ISO 27001 for information security\n• ISO 14001 for environmental management\nOur experts can guide you in choosing the right one."
  },
  {
    question: "3. Do I need to visit your office or meet someone in person?",
    answer: "No, the entire process is 100% online. Our team will assist you remotely via call, email, or chat."
  },
  {
    question: "4. What documents are required for ISO registration?",
    answer: "Documents that are required for ISO registration:\n• Business registration proof (GST, Udyam, etc.)\n• Company profile/brochure\n• History of business"
  },
  {
    question: "5. Can a small or new business get ISO certified?",
    answer: "Absolutely! ISO certification is suitable for businesses of all sizes. It can even help new businesses gain a competitive edge early on."
  },
  {
    question: "6. Will someone help me with the documentation and audit process?",
    answer: "Yes, our experts assist with everything — from preparing documents to coordinating with the certifying body for audits."
  }
];

export default function IsoCertificationPage() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    state: "",
    agreed: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [stateOpen, setStateOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Handle clicking outside custom dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setStateOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleStateSelect = (state: string) => {
    setFormData((prev) => ({ ...prev, state }));
    setErrors((prev) => ({ ...prev, state: "" }));
    setStateOpen(false);
    setSearchTerm("");
  };

  const filteredStates = INDIAN_STATES.filter((s) =>
    s.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile";
    }
    if (!formData.state) newErrors.state = "Please select a state";
    if (!formData.agreed) newErrors.agreed = "You must agree to continue";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      alert("Thank you! Our team will get in touch shortly.");
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        state: "",
        agreed: false,
      });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* 
        HERO SECTION 
      */}
      <section
        className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#233a85]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.04) 0%, transparent 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* LEFT: Form Container */}
          <div className="w-full md:w-[450px] shrink-0 relative z-10">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-2xl border border-gray-100"
            >
              <h2 className="text-xl font-bold text-[#0b1b3d] text-center mb-2">
                Talk to Our Expert
              </h2>

              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#233a85] transition-colors placeholder:text-gray-400"
                />
                {errors.fullName && <span className="text-[11px] text-red-500 px-1">{errors.fullName}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#233a85] transition-colors placeholder:text-gray-400"
                />
                {errors.email && <span className="text-[11px] text-red-500 px-1">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Your Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  maxLength={10}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#233a85] transition-colors placeholder:text-gray-400"
                />
                {errors.mobile && <span className="text-[11px] text-red-500 px-1">{errors.mobile}</span>}
              </div>

              {/* State Dropdown */}
              <div className="flex flex-col gap-1 relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setStateOpen(!stateOpen)}
                  className={`w-full flex items-center justify-between border rounded-md px-4 py-2.5 text-sm outline-none transition-colors bg-white ${stateOpen ? "border-[#233a85]" : "border-gray-300"
                    } ${formData.state ? "text-gray-900" : "text-gray-400"}`}
                >
                  <span className="truncate">{formData.state || "State"}</span>
                  <FiChevronDown className={`transition-transform duration-200 ${stateOpen ? "rotate-180 text-[#233a85]" : ""}`} />
                </button>

                {stateOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-xl z-50 overflow-hidden">
                    <div className="p-2 border-b border-gray-100">
                      <input
                        type="text"
                        placeholder="Search state..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-[#233a85]"
                        autoFocus
                      />
                    </div>
                    <ul className="max-h-48 overflow-y-auto custom-scrollbar py-1">
                      {filteredStates.map((s) => (
                        <li key={s}>
                          <button
                            type="button"
                            onClick={() => handleStateSelect(s)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#233a85]"
                          >
                            {s}
                          </button>
                        </li>
                      ))}
                      {filteredStates.length === 0 && (
                        <li className="px-4 py-3 text-sm text-gray-400 text-center">No states found</li>
                      )}
                    </ul>
                  </div>
                )}
                {errors.state && <span className="text-[11px] text-red-500 px-1">{errors.state}</span>}
              </div>

              <div className="flex items-start gap-2 mt-2">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="mt-1 shrink-0 accent-[#233a85] w-3.5 h-3.5 cursor-pointer"
                />
                <span className="text-[11px] leading-tight text-gray-500">
                  I have read & agreed to the company's Terms and Conditions, disclaimer and refund policy, and also ready to accept calls, SMS, emails, etc.
                </span>
              </div>
              {errors.agreed && <span className="text-[11px] text-red-500 -mt-2 px-1">{errors.agreed}</span>}

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold py-3.5 rounded-full text-sm transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? "Applying..." : "Apply Now"}
              </button>
            </form>
          </div>

          {/* RIGHT: Hero Text */}
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-[56px] font-bold leading-[1.15] tracking-tight mb-6">
              Looking for <br className="hidden md:block" />
              <span className="bg-[#ff6f00] text-white px-3 py-1 inline-block mt-2 mb-2 rounded-md shadow-sm">
                ISO Certification
              </span><br />
              for Your Company?
            </h1>

            <div className="space-y-4 text-blue-50">
              <p className="text-lg md:text-xl font-semibold">
                Ready to Take Your Business to the Next Level?
              </p>
              <p className="text-base md:text-lg opacity-90 max-w-2xl leading-relaxed">
                Get ISO Certified with Ease and Build Trust with Clients, Partners, and Regulators. India's Top Experts are here to help you end-to-end.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 
        FAQ SECTION 
      */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-2">
            {FAQ_DATA.map((faq, index) => (
              <div key={index} className="w-full flex flex-col bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full flex items-center justify-between text-left p-4 transition-colors ${openFaqIndex === index ? "bg-[#233a85] text-white" : "bg-white hover:bg-gray-50 text-[#0b1b3d]"
                    }`}
                >
                  <span className="font-bold text-[15px] pr-8">
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <FiMinus className="w-5 h-5 text-[#ff6f00] shrink-0" />
                  ) : (
                    <FiPlus className="w-5 h-5 text-[#233a85] shrink-0" />
                  )}
                </button>

                {/* Expandable Content */}
                {openFaqIndex === index && (
                  <div className="bg-gray-50 border-t border-gray-200 p-5">
                    <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrollbar styling for state dropdown */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </div>
  );
}