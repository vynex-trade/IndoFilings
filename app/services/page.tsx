"use client";

import { useState, useRef, useEffect } from "react";

// The URL for your deployed Google Apps Script
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyQCj-7tFvUCf9yUly8C0RYLDMFRUSDL-huSpFcNXGkr_IQQQB0BonZCowqi1IEVrt-MA/exec";

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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [stateOpen, setStateOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      // mode: 'no-cors' allows cross-origin requests to Google Apps Script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Thank you! Our team will get in touch shortly.");
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        state: "",
        agreed: false,
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please check your internet connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-blue-50 px-4 py-10 md:py-16">
      {/* Curved bottom decoration */}
      <svg className="pointer-events-none absolute bottom-0 left-0 z-0 w-full" viewBox="0 0 1440 140" preserveAspectRatio="none">
        <path d="M0,100 Q360,20 720,60 T1440,40 L1440,140 L0,140 Z" fill="#bfdbfe" opacity="0.5" />
        <path d="M0,120 Q360,60 720,90 T1440,80 L1440,140 L0,140 Z" fill="#93c5fd" opacity="0.4" />
      </svg>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:p-8">
            <h2 className="mb-2 text-center text-xl font-bold text-gray-900 sm:text-2xl">Get Your Free Compliance Check</h2>

            {/* Fields */}
            <div className="flex flex-col gap-1">
              <input type="text" name="fullName" placeholder="Your Full Name" value={formData.fullName} onChange={handleChange} className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm outline-none transition-colors focus:border-orange-500" />
              {errors.fullName && <span className="pl-4 text-xs text-red-600">{errors.fullName}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <input type="email" name="email" placeholder="Your Email Address" value={formData.email} onChange={handleChange} className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm outline-none transition-colors focus:border-orange-500" />
              {errors.email && <span className="pl-4 text-xs text-red-600">{errors.email}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <input type="tel" name="mobile" placeholder="Your Mobile Number" value={formData.mobile} onChange={handleChange} maxLength={10} className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm outline-none transition-colors focus:border-orange-500" />
              {errors.mobile && <span className="pl-4 text-xs text-red-600">{errors.mobile}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <div ref={dropdownRef} className="relative">
                <button type="button" onClick={() => setStateOpen(!stateOpen)} className="flex w-full items-center justify-between rounded-full border border-gray-300 bg-white px-5 py-3 text-left text-sm text-gray-400 outline-none">
                  {formData.state || "State"}
                </button>
                {stateOpen && (
                  <div className="absolute left-0 right-0 top-full z-[100] mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
                    <input type="text" autoFocus placeholder="Search state..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full border-b border-gray-100 p-3 text-sm outline-none" />
                    <ul className="custom-scrollbar max-h-56 overflow-y-auto py-1">
                      {filteredStates.map((s) => (
                        <button key={s} type="button" onClick={() => handleStateSelect(s)} className="block w-full px-5 py-2 text-left text-sm hover:bg-orange-50">{s}</button>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {errors.state && <span className="pl-4 text-xs text-red-600">{errors.state}</span>}
            </div>

            <label className="flex cursor-pointer items-start gap-2 text-xs text-gray-600">
              <input type="checkbox" name="agreed" checked={formData.agreed} onChange={handleChange} className="mt-0.5 h-4 w-4 accent-orange-500" />
              I have read &amp; agreed to the terms and conditions.
            </label>
            {errors.agreed && <span className="pl-6 text-xs text-red-600">{errors.agreed}</span>}

            <button type="submit" disabled={submitting} className="mt-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg disabled:opacity-70">
              {submitting ? "Submitting..." : "Get Free Compliance Check →"}
            </button>
          </form>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-around gap-4 rounded-xl bg-white px-5 py-4 shadow-[0_4px_14px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full text-xl font-bold text-blue-500">G</span>
              <div>
                <div className="text-sm font-bold text-gray-900">4.5 ★★★★★</div>
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
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" alt="Brand Ambassador" className="relative z-10 h-auto max-h-[650px] w-auto object-contain" />
          <div className="absolute -bottom-4 left-1/2 z-20 w-full -translate-x-1/2 rounded-xl bg-gradient-to-t from-white to-transparent px-6 py-4 text-center">
            <h3 className="text-sm font-semibold text-gray-900 sm:text-base">Aman Singh</h3>
            <p className="text-xs text-gray-600 sm:text-sm">Former Indian Team Captain &amp; Brand Ambassador</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f3f4f6; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #fb923c; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #f97316; }
      `}</style>
    </section>
  );
}