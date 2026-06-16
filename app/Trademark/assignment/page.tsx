"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    FiArrowRight,
    FiChevronDown,
    FiShield,
    FiTrendingUp,
    FiGlobe,
    FiStar,
    FiLock,
    FiAward,
    FiCheckSquare,
    FiInfo,
    FiRefreshCw
} from "react-icons/fi";
import { BsCurrencyRupee } from "react-icons/bs";

// ⚠️ REPLACE THIS WITH YOUR GOOGLE SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwRBSVfJHG-JQKOujAhxTclP64rQX3L0F7TOaYpCTmU0MI9agWNUENy2QxgHZLPypQj8g/exec";

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

export default function TrademarkAssignmentPage() {
    // --- REFS ---
    const formRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // --- FORM STATE ---
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        state: ""
    });

    const [captchaText, setCaptchaText] = useState("");
    const [captchaInput, setCaptchaInput] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitting, setSubmitting] = useState(false);

    // --- DROPDOWN STATE ---
    const [stateOpen, setStateOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // --- SCROLL TO FORM ---
    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Close state dropdown when clicking outside
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

    // --- GENERATE CAPTCHA ---
    const generateCaptcha = () => {
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let captcha = "";
        for (let i = 0; i < 5; i++) {
            captcha += chars[Math.floor(Math.random() * chars.length)];
        }
        setCaptchaText(captcha);
        setCaptchaInput("");
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    // --- INPUT HANDLERS ---
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    const handleStateSelect = (state: string) => {
        setFormData(prev => ({ ...prev, state }));
        setErrors(prev => ({ ...prev, state: "" }));
        setStateOpen(false);
        setSearchTerm("");
    };

    const filteredStates = INDIAN_STATES.filter(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    // --- VALIDATION ---
    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Mobile is required";
        } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit number";
        }
        if (!formData.state) newErrors.state = "State is required";

        if (!captchaInput.trim()) {
            newErrors.captcha = "Please enter the Captcha";
        } else if (captchaInput.toUpperCase() !== captchaText) {
            newErrors.captcha = "Incorrect Captcha";
            generateCaptcha();
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // --- SUBMIT HANDLER ---
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;

        setSubmitting(true);
        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            alert("Thank you! Your request has been submitted successfully.");
            setFormData({ name: "", email: "", phone: "", state: "" });
            generateCaptcha();
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            {/* Scrollbar CSS */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #f3f4f6; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
            `}} />

            {/* 1. HERO SECTION WITH FORM */}
            <section ref={formRef} className="bg-[#233a85] py-12 md:py-20 px-4 scroll-mt-10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">

                    {/* Left: Hero Text */}
                    <div className="md:col-span-7 text-white text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
                            Take a step forward to secure your brand!
                        </h1>
                        <p className="text-blue-100 font-medium text-base md:text-xl leading-relaxed mb-8">
                            Transfer ownership smoothly and unlock new opportunities for growth with our expert Trademark Assignment services.
                        </p>

                        <div className="hidden md:flex flex-col gap-4">
                            <div className="flex items-center text-blue-50">
                                <FiCheckSquare className="text-[#ff6f00] w-6 h-6 mr-3" />
                                <span className="font-semibold text-lg">100% Online & Hassle-Free</span>
                            </div>
                            <div className="flex items-center text-blue-50">
                                <FiCheckSquare className="text-[#ff6f00] w-6 h-6 mr-3" />
                                <span className="font-semibold text-lg">Expert Legal Drafting</span>
                            </div>
                            <div className="flex items-center text-blue-50">
                                <FiCheckSquare className="text-[#ff6f00] w-6 h-6 mr-3" />
                                <span className="font-semibold text-lg">Complete Confidentiality</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Lead Form */}
                    <div className="md:col-span-5 bg-white p-5 md:p-9 rounded-xl shadow-2xl">
                        <h3 className="text-xl md:text-2xl font-bold text-[#0b1b3d] mb-2 text-center">
                            We're here to help
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500 mb-6 text-center">
                            Fill out the form below to get started
                        </p>

                        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                            <div>
                                <label className="text-xs font-bold text-gray-600 mb-1 block uppercase tracking-wide">Name <span className="text-red-500">*</span></label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className={`w-full border rounded-md p-3 text-sm focus:outline-none focus:border-[#233a85] transition-colors ${errors.name ? 'border-red-500' : 'border-gray-300'}`} />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-gray-600 mb-1 block uppercase tracking-wide">Mobile <span className="text-red-500">*</span></label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} maxLength={10} placeholder="Mobile Number" className={`w-full border rounded-md p-3 text-sm focus:outline-none focus:border-[#233a85] transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-300'}`} />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-600 mb-1 block uppercase tracking-wide">E-Mail <span className="text-red-500">*</span></label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className={`w-full border rounded-md p-3 text-sm focus:outline-none focus:border-[#233a85] transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                            </div>

                            {/* CUSTOM STATE DROPDOWN */}
                            <div>
                                <label className="text-xs font-bold text-gray-600 mb-1 block uppercase tracking-wide">State <span className="text-red-500">*</span></label>
                                <div ref={dropdownRef} className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setStateOpen(!stateOpen)}
                                        className={`w-full flex items-center justify-between border rounded-md p-3 text-sm text-left bg-white focus:outline-none transition-colors ${errors.state ? 'border-red-500' : 'border-gray-300'} ${!formData.state ? 'text-gray-400' : 'text-gray-700'}`}
                                    >
                                        <span className="truncate pr-2">{formData.state || "Select State"}</span>
                                        <FiChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                    </button>

                                    {stateOpen && (
                                        <div className="absolute left-0 right-0 top-full z-[100] mt-1 overflow-hidden rounded border border-gray-200 bg-white shadow-xl">
                                            <input
                                                type="text"
                                                autoFocus
                                                placeholder="Search..."
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                className="w-full border-b border-gray-100 p-3 text-sm outline-none"
                                            />
                                            <ul className="custom-scrollbar max-h-48 overflow-y-auto py-1">
                                                {filteredStates.length > 0 ? (
                                                    filteredStates.map((s) => (
                                                        <button
                                                            key={s}
                                                            type="button"
                                                            onClick={() => handleStateSelect(s)}
                                                            className="block w-full px-3 py-2 text-left text-sm hover:bg-blue-50 transition-colors"
                                                        >
                                                            {s}
                                                        </button>
                                                    ))
                                                ) : (
                                                    <div className="px-4 py-3 text-sm text-gray-400 text-center">No states found</div>
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                            </div>

                            {/* CAPTCHA */}
                            <div className="pt-2">
                                <label className="text-xs font-bold text-gray-600 mb-1 block uppercase tracking-wide">Verify <span className="text-red-500">*</span></label>
                                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
                                    <div className="flex items-center gap-2">
                                        <div className="relative flex items-center justify-center bg-gray-100 min-w-[100px] px-3 py-2 border border-gray-300 rounded shadow-inner overflow-hidden">
                                            <div className="absolute w-full h-0.5 bg-gray-400 transform -rotate-12 opacity-50 z-0"></div>
                                            <span className="text-lg tracking-widest font-mono italic font-bold text-[#233a85] select-none z-10">
                                                {captchaText}
                                            </span>
                                        </div>
                                        <button type="button" onClick={generateCaptcha} className="text-gray-500 hover:text-[#ff6f00] p-2 transition-colors" title="Reload Captcha">
                                            <FiRefreshCw className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <input
                                        type="text"
                                        value={captchaInput}
                                        onChange={(e) => { setCaptchaInput(e.target.value); setErrors(prev => ({ ...prev, captcha: "" })); }}
                                        placeholder="Enter Captcha"
                                        maxLength={5}
                                        className={`w-full sm:w-auto sm:flex-grow border rounded-md p-3 text-sm focus:outline-none focus:border-[#233a85] uppercase transition-colors ${errors.captcha ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                </div>
                                {errors.captcha && <p className="text-red-500 text-xs mt-1">{errors.captcha}</p>}
                            </div>

                            <button type="submit" disabled={submitting} className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3.5 rounded-md transition-colors shadow-md mt-6 disabled:opacity-70">
                                {submitting ? "Submitting..." : "Submit Request"}
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* 2. WHAT IS TRADEMARK ASSIGNMENT */}
            <section className="py-12 md:py-24 px-4 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8 md:mb-10">
                        <h2 className="text-2xl md:text-4xl font-extrabold text-[#0b1b3d] mb-4">
                            What is Trademark Assignment?
                        </h2>
                        <div className="w-16 h-1.5 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-4 md:space-y-6 text-gray-700 text-[15px] md:text-[17px] leading-relaxed text-justify">
                        <p>
                            A trademark assignment occurs when one party, the assignor, transfers ownership of a registered trademark to another person, the assignee. It is a procedure that allows a trademark's rights and obligations to be transferred from its first owner to a new one.
                        </p>
                        <p>
                            A trademark is a unique sign, symbol, logo, word, phrase, or design used to recognise and differentiate the goods/services of one seller from those of others. It is an essential intellectual property asset that represents a brand's identity and reputation in the marketplace.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-[#233a85] p-5 md:p-6 rounded-r-xl shadow-sm mt-6 md:mt-8">
                            <p className="text-[#0b1b3d] font-medium italic text-sm md:text-base">
                                "When a company or individual decides to sell, transfer, or change ownership of their trademark, they do so through a trademark assignment. The assignment is usually a documented agreement that outlines the transfer details, including the specific rights being transferred, the effective date of the assignment, and any terms and conditions agreed upon by both parties."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHY CHOOSE US (Benefits Grid) */}
            <section className="bg-[#f8f9fc] py-12 md:py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-4xl font-extrabold text-[#0b1b3d] mb-4">
                            Why Choose Us?
                        </h2>
                        <div className="w-16 h-1.5 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600 text-base md:text-lg">Secure, scale, and protect your intellectual property with our premier services.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                icon: <FiShield />,
                                title: "Safeguard Your Brand's Identity",
                                desc: "We understand the significance of your brand's identity. Our experts ensure a smooth and efficient trademark assignment process, protecting your brand from potential infringements and unauthorised use. Confidently build a strong foundation for your future."
                            },
                            {
                                icon: <FiTrendingUp />,
                                title: "Unlocking New Opportunities",
                                desc: "Take your brand to new heights. Transferring your trademark rights opens doors to exciting partnerships, collaborations, and expansion opportunities. Embrace growth and watch your business soar beyond its boundaries."
                            },
                            {
                                icon: <FiGlobe />,
                                title: "Global Reach, Global Trust",
                                desc: "A trademark assignment not only secures your brand locally but also on an international scale. Our team helps you gain exclusive rights to your brand worldwide, enhancing your global presence and customer trust."
                            },
                            {
                                icon: <FiStar />,
                                title: "Inspire Innovation & Creativity",
                                desc: "With your brand protected, let your creativity flow! The reassurance of trademark assignment creates an environment that fosters innovation and empowers your team to think outside the box."
                            },
                            {
                                icon: <FiLock />,
                                title: "Confidentiality & Security",
                                desc: "Your brand's uniqueness and sensitive information are our utmost priorities. We value confidentiality and maintain the highest level of security throughout the entire trademark assignment process."
                            },
                            {
                                icon: <FiAward />,
                                title: "Stand Out from Competitors",
                                desc: "A trademark assignment sets you apart from your competitors. Show your customers that your brand symbolises trust, quality, and innovation. Differentiate yourself in the market and leave a lasting impression."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#233a85] to-[#ff6f00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                <div className="bg-orange-50 text-[#ff6f00] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl mb-5 md:mb-6 text-xl md:text-2xl">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-[#0b1b3d] text-lg md:text-xl mb-2 md:mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-[13px] md:text-[15px]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. PRICING SECTION */}
            <section className="py-12 md:py-24 px-4 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10 md:mb-12">
                        <h2 className="text-2xl md:text-4xl font-extrabold text-[#0b1b3d] mb-4">
                            Our Pricing
                        </h2>
                        <div className="w-16 h-1.5 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden max-w-lg mx-auto transform hover:-translate-y-2 transition-transform duration-300">
                        {/* Header */}
                        <div className="bg-[#233a85] text-white text-center py-5 md:py-6 px-4">
                            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">Trademark Assignment</h3>
                            <p className="text-blue-200 mt-1 font-medium text-sm md:text-base">Complete Package</p>
                        </div>

                        {/* Pricing Breakdown */}
                        <div className="p-6 md:p-8">
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center text-gray-700 font-medium text-sm md:text-base">
                                    <span>Our Fees (One Time Charge)</span>
                                    <span className="flex items-center"><BsCurrencyRupee /> 8,999</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-700 font-medium text-sm md:text-base">
                                    <span>GST 18%</span>
                                    <span className="flex items-center"><BsCurrencyRupee /> 1,620</span>
                                </div>
                                <div className="border-t border-dashed border-gray-300 my-4 pt-4">
                                    <div className="flex justify-between items-center text-lg md:text-xl font-black text-[#0b1b3d]">
                                        <span>Total Payable</span>
                                        <span className="flex items-center text-[#ff6f00]"><BsCurrencyRupee /> 10,619/-</span>
                                    </div>
                                </div>
                            </div>

                            {/* Warning/Note Box */}
                            <div className="bg-orange-50 rounded-lg p-4 flex items-start border border-orange-100 mb-6 md:mb-8">
                                <FiInfo className="text-[#ff6f00] w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                                <p className="text-[11px] md:text-xs font-semibold text-[#0b1b3d] leading-relaxed">
                                    Government Fee (Rs. 9,000/-) is <span className="text-[#ff6f00] uppercase">Not Included</span> in the above package.
                                </p>
                            </div>

                            <button
                                onClick={scrollToForm}
                                className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3.5 md:py-4 rounded-xl shadow-lg transition-colors"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}