"use client";

import { useState, useRef, useEffect } from "react";

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

export default function FreeCompliancePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    state: "",
    agreed: false,
  });

  // FIX: Added Record<string, string> to allow dynamic string keys for errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [stateOpen, setStateOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // FIX: Added HTMLDivElement type to the ref
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // FIX: Added type MouseEvent to 'e'
    const handleClickOutside = (e: MouseEvent) => {
      // FIX: Cast e.target to Node so .contains() accepts it
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setStateOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // FIX: Added type React.ChangeEvent<HTMLInputElement> to 'e'
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // FIX: Added type string to 'state'
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

  // FIX: Added type React.FormEvent<HTMLFormElement> to 'e'
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-blue-50 px-4 py-10 md:py-16">
      {/* Curved bottom decoration */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 z-0 w-full"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 Q360,20 720,60 T1440,40 L1440,140 L0,140 Z"
          fill="#bfdbfe"
          opacity="0.5"
        />
        <path
          d="M0,120 Q360,60 720,90 T1440,80 L1440,140 L0,140 Z"
          fill="#93c5fd"
          opacity="0.4"
        />
      </svg>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* LEFT - Form & Stats */}
        <div className="flex flex-col gap-6">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:p-8"
          >
            <h2 className="mb-2 text-center text-xl font-bold text-gray-900 sm:text-2xl">
              Get Your Free Compliance Check
            </h2>

            {/* Full Name */}
            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="fullName"
                placeholder="Your Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm outline-none transition-colors focus:border-orange-500 sm:text-base"
              />
              {errors.fullName && (
                <span className="pl-4 text-xs text-red-600">{errors.fullName}</span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm outline-none transition-colors focus:border-orange-500 sm:text-base"
              />
              {errors.email && (
                <span className="pl-4 text-xs text-red-600">{errors.email}</span>
              )}
            </div>

            {/* Mobile */}
            <div className="flex flex-col gap-1">
              <input
                type="tel"
                name="mobile"
                placeholder="Your Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                maxLength={10}
                className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm outline-none transition-colors focus:border-orange-500 sm:text-base"
              />
              {errors.mobile && (
                <span className="pl-4 text-xs text-red-600">{errors.mobile}</span>
              )}
            </div>

            {/* State - Custom Dropdown */}
            <div className="flex flex-col gap-1">
              <div ref={dropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => setStateOpen((prev) => !prev)}
                  className={`flex w-full items-center justify-between rounded-full border bg-white px-5 py-3 text-left text-sm outline-none transition-colors sm:text-base ${stateOpen
                      ? "border-orange-500"
                      : "border-gray-300 hover:border-gray-400"
                    } ${formData.state ? "text-gray-900" : "text-gray-400"}`}
                >
                  <span className="truncate">
                    {formData.state || "State"}
                  </span>
                  <svg
                    className={`ml-2 h-4 w-4 flex-shrink-0 text-gray-500 transition-transform ${stateOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {stateOpen && (
                  <div className="absolute left-0 right-0 top-full z-[100] mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
                    {/* Search Input */}
                    <div className="border-b border-gray-100 p-2">
                      <input
                        type="text"
                        autoFocus
                        placeholder="Search state..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-orange-400 focus:bg-white"
                      />
                    </div>

                    {/* Options List */}
                    <ul className="custom-scrollbar max-h-56 overflow-y-auto py-1">
                      {filteredStates.length > 0 ? (
                        filteredStates.map((s) => (
                          <li key={s}>
                            <button
                              type="button"
                              onClick={() => handleStateSelect(s)}
                              className={`block w-full px-5 py-2.5 text-left text-sm transition-colors hover:bg-orange-50 hover:text-orange-600 ${formData.state === s
                                  ? "bg-orange-50 font-medium text-orange-600"
                                  : "text-gray-700"
                                }`}
                            >
                              {s}
                            </button>
                          </li>
                        ))
                      ) : (
                        <li className="px-5 py-3 text-center text-sm text-gray-400">
                          No states found
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
              {errors.state && (
                <span className="pl-4 text-xs text-red-600">{errors.state}</span>
              )}
            </div>

            {/* Checkbox */}
            <label className="flex cursor-pointer items-start gap-2 text-xs text-gray-600 sm:text-[13px]">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mt-0.5 h-4 w-4 cursor-pointer accent-orange-500"
              />
              <span className="leading-relaxed">
                I have read &amp; agreed to the company&apos;s Terms and Conditions,
                disclaimer and refund policy, and also ready to accept calls, SMS,
                emails, etc.
              </span>
            </label>
            {errors.agreed && (
              <span className="-mt-2 pl-6 text-xs text-red-600">{errors.agreed}</span>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-400/30 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
            >
              {submitting ? "Submitting..." : "Get Free Compliance Check →"}
            </button>
          </form>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-around gap-4 rounded-xl bg-white px-5 py-4 shadow-[0_4px_14px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full text-xl font-bold text-blue-500">
                G
              </span>
              <div>
                <div className="text-sm font-bold text-gray-900">
                  4.5 <span className="text-yellow-400">★★★★★</span>
                </div>
                <div className="text-xs text-gray-500">Rating On Google</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🏢</span>
              <div>
                <div className="text-sm font-bold text-gray-900">5 Lakh +</div>
                <div className="text-xs text-gray-500">Businesses Served</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">👥</span>
              <div>
                <div className="text-sm font-bold text-gray-900">6000+</div>
                <div className="text-xs text-gray-500">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - Brand Ambassador */}
        <div className="relative flex h-full min-h-[600px] items-end justify-center">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
            alt="Brand Ambassador"
            className="relative z-10 h-auto max-h-[650px] w-auto object-contain"
          />

          <div className="absolute -bottom-4 left-1/2 z-20 w-full -translate-x-1/2 rounded-xl bg-gradient-to-t from-white to-transparent px-6 py-4 text-center">
            <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
              Aman Singh
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm">
              Former Indian  Team Captain &amp; Brand Ambassador
            </p>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #fb923c;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #f97316;
        }
      `}</style>
    </section>
  );
}