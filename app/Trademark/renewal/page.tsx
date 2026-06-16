"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    FiArrowRight,
    FiChevronDown,
    FiPlus,
    FiMinus,
    FiCheckCircle,
    FiFileText,
    FiShield,
    FiTrendingUp,
    FiLayers,
    FiUser,
    FiEdit3,
    FiAward,
    FiInfo,
    FiAlertCircle,
    FiRefreshCw
} from "react-icons/fi";
import { BsBuilding, BsCurrencyRupee, BsCardChecklist } from "react-icons/bs";

// ⚠️ REPLACE THIS WITH YOUR GOOGLE SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzOnJtWZ29Gr4N0-nb3wB_zyLVH3UTRue55Mik_i7SOzhYfotUNCFN_AKYCUcRf_sN_uQ/exec";

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

// --- Outline Accordion (Used for FAQs) ---
const Accordion = ({
    title,
    children,
    defaultOpen = false,
}: {
    title: string;
    children?: React.ReactNode;
    defaultOpen?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="bg-white mb-2 rounded-sm overflow-hidden shadow-sm border border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-left font-bold text-[#0b1b3d] hover:bg-gray-50 transition-colors"
            >
                <span className="text-[15px]">{title}</span>
                {isOpen ? (
                    <FiMinus className="w-4 h-4 text-[#ff6f00] flex-shrink-0" />
                ) : (
                    <FiPlus className="w-4 h-4 text-[#233a85] flex-shrink-0" />
                )}
            </button>
            {isOpen && children && (
                <div className="p-4 bg-white border-t border-gray-100 text-gray-700 text-sm leading-relaxed">
                    {children}
                </div>
            )}
        </div>
    );
};

export default function TrademarkRenewalPage() {
    // --- REFS ---
    const formRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // --- FORM STATE ---
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        state: "",
        city: "",
        source: "",
        package: "Trademark Renewal (Rs 1999)"
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
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.source) newErrors.source = "Please select a source";

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

            alert("Thank you! Your renewal request has been submitted successfully.");
            setFormData({
                name: "", phone: "", email: "", state: "", city: "", source: "", package: "Trademark Renewal (Rs 1999)"
            });
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
            <section ref={formRef} className="bg-[#233a85] py-12 md:py-16 px-4 scroll-mt-10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">

                    {/* Left: Hero Text */}
                    <div className="md:col-span-7 text-white text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
                            Renew Your Trademark Online - Secured and Fast Renewal.
                        </h1>
                        <p className="text-blue-100 font-medium text-base md:text-lg leading-relaxed mb-6">
                            Trusted by over 5,00,000+ customers across India | Call or Click, as we do it quick! Renew your Trademark certificate for your brand before expiration.
                        </p>

                        <div className="bg-[#1d3275] border-l-4 border-[#ff6f00] p-4 md:p-5 rounded-r-lg mb-6 inline-block text-left shadow-md">
                            <p className="text-xs md:text-sm text-blue-50 leading-relaxed mb-3">
                                The validity of the Trademark exists for 10 years. Hence, one should renew their Trademark certificate within the mentioned period to avoid any objection & interruption. This application has to be filed on or before 6 months from the date of expiration.
                            </p>
                            <ul className="text-xs md:text-sm text-blue-100 space-y-2 list-disc pl-5 font-semibold">
                                <li>You can apply renewal to change any sign or words which is already existing trademark.</li>
                                <li>You can apply renewal without a change.</li>
                            </ul>
                        </div>

                        {/* Made badges visible on mobile with flex-wrap */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                            <div className="bg-white/10 px-4 py-2 md:px-5 md:py-3 rounded-lg border border-white/20 flex flex-col items-center flex-1 sm:flex-none min-w-[120px]">
                                <span className="text-xl md:text-2xl font-black text-[#ff6f00]">5 Lac+</span>
                                <span className="text-[10px] md:text-xs font-semibold text-blue-50 tracking-wider uppercase text-center">Happy Clients</span>
                            </div>
                            <div className="bg-white/10 px-4 py-2 md:px-5 md:py-3 rounded-lg border border-white/20 flex flex-col items-center flex-1 sm:flex-none min-w-[120px]">
                                <span className="text-xl md:text-2xl font-black text-[#ff6f00]">Easy EMI</span>
                                <span className="text-[10px] md:text-xs font-semibold text-blue-50 tracking-wider uppercase text-center">Options Available</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Lead Form */}
                    <div className="md:col-span-5 bg-white p-5 md:p-7 rounded-xl shadow-2xl">
                        <h3 className="text-lg md:text-xl font-bold text-[#0b1b3d] mb-1 text-center md:text-left">
                            Need Help with Trademark Renewal?
                        </h3>
                        <p className="text-xs text-gray-500 mb-6 text-center md:text-left">
                            Fill Up the below Mentioned Form
                        </p>

                        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Name <span className="text-red-500">*</span></label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" className={`w-full border rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] ${errors.name ? 'border-red-500' : 'border-gray-300'}`} />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>

                            {/* Changed to grid-cols-1 sm:grid-cols-2 to prevent squishing on mobile */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile Number <span className="text-red-500">*</span></label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} maxLength={10} placeholder="10 Digits" className={`w-full border rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] ${errors.phone ? 'border-red-500' : 'border-gray-300'}`} />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Email Address <span className="text-red-500">*</span></label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className={`w-full border rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                            </div>

                            {/* Changed to grid-cols-1 sm:grid-cols-2 to prevent squishing on mobile */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* CUSTOM STATE DROPDOWN */}
                                <div>
                                    <label className="text-xs font-semibold text-gray-600 mb-1 block">State <span className="text-red-500">*</span></label>
                                    <div ref={dropdownRef} className="relative">
                                        <button
                                            type="button"
                                            onClick={() => setStateOpen(!stateOpen)}
                                            className={`w-full flex items-center justify-between border rounded p-2.5 text-sm text-left bg-white focus:outline-none ${errors.state ? 'border-red-500' : 'border-gray-300'} ${!formData.state ? 'text-gray-400' : 'text-gray-900'}`}
                                        >
                                            <span className="truncate pr-2">{formData.state || "State"}</span>
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
                                                    className="w-full border-b border-gray-100 p-2.5 text-sm outline-none"
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

                                <div>
                                    <label className="text-xs font-semibold text-gray-600 mb-1 block">City <span className="text-red-500">*</span></label>
                                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Your City" className={`w-full border rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] ${errors.city ? 'border-red-500' : 'border-gray-300'}`} />
                                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">How did you hear about us? <span className="text-red-500">*</span></label>
                                <select name="source" value={formData.source} onChange={handleChange} className={`w-full border rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white ${errors.source ? 'border-red-500' : 'border-gray-300'}`}>
                                    <option value="">Select Source</option>
                                    <option value="Google Search">Google Search</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Friend / Referral">Friend / Referral</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.source && <p className="text-red-500 text-xs mt-1">{errors.source}</p>}
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Package <span className="text-red-500">*</span></label>
                                <select name="package" value={formData.package} onChange={handleChange} className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white">
                                    <option value="Trademark Renewal (Rs 1999)">Trademark Renewal (Rs 1999)</option>
                                </select>
                            </div>

                            {/* CAPTCHA - Fixed wrapping for very small phones */}
                            <div className="pt-1">
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Verify you are human <span className="text-red-500">*</span></label>
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
                                        className={`w-full sm:w-auto sm:flex-grow border rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] uppercase ${errors.captcha ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                </div>
                                {errors.captcha && <p className="text-red-500 text-xs mt-1">{errors.captcha}</p>}
                            </div>

                            <button type="submit" disabled={submitting} className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3 rounded-lg transition-colors shadow-md mt-2 disabled:opacity-70">
                                {submitting ? "Submitting..." : "Renew Trademark Now"}
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* 2. WHO CAN OBTAIN */}
            <section className="py-12 md:py-16 px-4 bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1b3d] mb-4">
                        Who Can Obtain a Trademark Renewal?
                    </h2>
                    <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-8"></div>

                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        {[
                            "Individual",
                            "Joint Owner",
                            "Limited Liability Partnership (LLP)",
                            "Trust or Society",
                            "Proprietorship Firm",
                            "Partnership Firm"
                        ].map((entity, idx) => (
                            <div key={idx} className="bg-[#f8f9fc] border border-gray-200 text-[#233a85] font-bold text-sm md:text-base px-5 py-2 md:py-3 rounded-full shadow-sm flex items-center hover:bg-[#233a85] hover:text-white transition-colors cursor-default">
                                <FiCheckCircle className="mr-2 flex-shrink-0" />
                                {entity}
                            </div>
                        ))}
                    </div>
                    <p className="mt-8 text-sm md:text-base text-gray-600 font-medium px-4">
                        We can help you file Trademark Renewal and various other services from Online Legal India and make this entire process seamless.
                    </p>
                </div>
            </section>

            {/* 3. BENEFITS */}
            <section className="bg-[#f8f9fc] py-12 md:py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10 md:mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Benefits of Trademark Renewal Service
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <FiShield className="w-8 h-8 md:w-10 md:h-10 text-[#ff6f00]" />,
                                title: "Secure Your Brand Names",
                                desc: "It gives incessant and continuous protection to the brand from getting dissolved or removed from the registry."
                            },
                            {
                                icon: <FiFileText className="w-8 h-8 md:w-10 md:h-10 text-[#ff6f00]" />,
                                title: "Eliminates Loss of Legal Rights",
                                desc: "Not renewing would lead to disapproval of legal rights not only to the owner but also to every person associated with it."
                            },
                            {
                                icon: <FiTrendingUp className="w-8 h-8 md:w-10 md:h-10 text-[#ff6f00]" />,
                                title: "Increases Brand Value",
                                desc: "With a renewal after 10 years of being in business, a brand value raises. The owner can issue a licence in return for monetary exchanges."
                            },
                            {
                                icon: <FiLayers className="w-8 h-8 md:w-10 md:h-10 text-[#ff6f00]" />,
                                title: "Diminishes Duplicity",
                                desc: "It significantly diminishes the chances of duplicity and infringement after renewal at the end of every term."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                                <div className="flex justify-center mb-3 md:mb-4">{item.icon}</div>
                                <h3 className="font-bold text-[#0b1b3d] mb-2">{item.title}</h3>
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. DOCUMENTS REQUIRED */}
            <section className="py-12 md:py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10 md:mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Documents Required
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="flex items-start bg-[#f8f9fc] p-5 md:p-6 rounded-xl border border-gray-100">
                            <div className="bg-orange-50 text-[#ff6f00] p-3 rounded-lg mr-4 border border-orange-100 flex-shrink-0">
                                <FiUser className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0b1b3d] mb-1 text-[15px] md:text-[16px]">Applicant Details</h3>
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Name, Address, and Nationality of the applicant. Corporate bodies or other entities need to provide their registration certificate.</p>
                            </div>
                        </div>

                        <div className="flex items-start bg-[#f8f9fc] p-5 md:p-6 rounded-xl border border-gray-100">
                            <div className="bg-orange-50 text-[#ff6f00] p-3 rounded-lg mr-4 border border-orange-100 flex-shrink-0">
                                <FiEdit3 className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0b1b3d] mb-1 text-[15px] md:text-[16px]">Power of Attorney</h3>
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">A candidate must sign the power of attorney rightfully if they are registering for Trademark Renewal through any advocate or legal firm.</p>
                            </div>
                        </div>

                        <div className="flex items-start bg-[#f8f9fc] p-5 md:p-6 rounded-xl border border-gray-100">
                            <div className="bg-orange-50 text-[#ff6f00] p-3 rounded-lg mr-4 border border-orange-100 flex-shrink-0">
                                <FiAward className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0b1b3d] mb-1 text-[15px] md:text-[16px]">TM Certificate</h3>
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">The original Trademark Registration Certificate issued by the Ministry.</p>
                            </div>
                        </div>

                        <div className="flex items-start bg-[#f8f9fc] p-5 md:p-6 rounded-xl border border-gray-100">
                            <div className="bg-orange-50 text-[#ff6f00] p-3 rounded-lg mr-4 border border-orange-100 flex-shrink-0">
                                <BsCardChecklist className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0b1b3d] mb-1 text-[15px] md:text-[16px]">Copy of TM-A</h3>
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">The initial application filed with the TM Registry for its registration is to be provided.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRICING & KEY FACTORS */}
            <section className="bg-[#f8f9fc] py-12 md:py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    {/* Left: Pricing Card */}
                    <div className="max-w-sm mx-auto w-full order-2 md:order-1">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 border border-[#ff6f00]">
                            <div className="bg-[#ff6f00] text-white text-center py-4 font-bold text-sm tracking-widest uppercase">
                                Trademark Renewal Package
                            </div>
                            <div className="p-6 md:p-8 text-center">
                                <p className="text-xs font-bold text-[#233a85] mb-2 uppercase tracking-wide">Professional Fees</p>
                                <div className="flex justify-center items-center text-4xl md:text-5xl font-extrabold text-[#0b1b3d] mb-2">
                                    <BsCurrencyRupee className="w-7 h-7 md:w-8 md:h-8" />
                                    1,999
                                </div>
                                <p className="text-xs text-gray-500 font-bold mb-6 md:mb-8">One Time Charges</p>

                                <ul className="space-y-4 mb-6 md:mb-8 text-left">
                                    <li className="flex items-start text-gray-700 font-medium text-sm">
                                        <FiCheckCircle className="text-[#ff6f00] w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                                        Drafting and filing of trademark renewal application.
                                    </li>
                                    <li className="flex items-start text-gray-700 font-medium text-sm">
                                        <FiCheckCircle className="text-[#ff6f00] w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                                        For individuals, proprietorships, registered SMEs and Startups.
                                    </li>
                                </ul>
                                <button
                                    onClick={scrollToForm}
                                    className="w-full bg-[#233a85] hover:bg-[#1a2b63] text-white font-bold py-3 md:py-4 rounded-xl shadow-lg transition-colors"
                                >
                                    Apply Now
                                </button>
                                <p className="text-[10px] text-gray-400 mt-3 md:mt-4">* Excluding Govt. Fees</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Key Factors */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1b3d] mb-4 text-center md:text-left">
                            Key Factors / Important Points
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mb-8 mx-auto md:mx-0"></div>

                        <div className="space-y-4 md:space-y-6">
                            <div className="flex items-start bg-blue-50 p-5 md:p-6 rounded-lg border-l-4 border-[#233a85]">
                                <FiInfo className="text-[#233a85] w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-[#0b1b3d] mb-1 text-[15px] md:text-base">Form TM-R Requirement</h4>
                                    <p className="text-xs md:text-sm text-gray-700">The application for the Trademark Renewal specifically utilizes the form <strong>TM-R</strong>.</p>
                                </div>
                            </div>

                            <div className="flex items-start bg-orange-50 p-5 md:p-6 rounded-lg border-l-4 border-[#ff6f00]">
                                <FiAlertCircle className="text-[#ff6f00] w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-[#0b1b3d] mb-1 text-[15px] md:text-base">Filing Representation</h4>
                                    <p className="text-xs md:text-sm text-gray-700">The Trademark Renewal Application does not need to be filed strictly by the registered owner of the trademark; it can be seamlessly done by an authorised representative or a legal agent (like us) on your behalf.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 6. HOW WE WORK (Stepper - 5 Steps) */}
            <section className="bg-[#233a85] py-12 md:py-16 px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10 md:mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                            How We Work?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-8 md:mb-10"></div>
                    </div>

                    <div className="flex flex-wrap justify-center items-start gap-y-8 gap-x-2 md:gap-x-4 text-center relative z-10">
                        {[
                            "Upload details and make payment.",
                            "Get a call from TM expert.",
                            "Expert analyzes and makes a report.",
                            "Drafting of Trademark Renewal done.",
                            "Expert sends you the draft for approval."
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[120px] sm:w-[140px] md:w-[160px]">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white text-[#233a85] rounded-full flex items-center justify-center font-extrabold text-lg md:text-xl mb-3 md:mb-4 shadow-lg border-4 border-[#ff6f00]">
                                        {index + 1}
                                    </div>
                                    <p className="text-[11px] md:text-[13px] font-semibold text-blue-50 leading-snug">{step}</p>
                                </div>
                                {index !== arr.length - 1 && (
                                    <div className="hidden lg:flex items-center mt-4 text-[#ff6f00]">
                                        <FiArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FAQs */}
            <section className="py-12 md:py-20 px-4 bg-white border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10 md:mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <Accordion title="What is a Trademark?" defaultOpen={true}>
                            A trademark is a kind of intellectual property which consists of a recognizable sign, design, or expression which identifies products or services of a particular source from those of others, although trademarks used to identify services are usually called service marks.
                        </Accordion>
                        <Accordion title="What if the trademark expires?">
                            If the trademark expires, you lose your exclusive legal rights to the brand name or logo. However, the Trademark Registry provides a grace period of 6 months post-expiration during which you can still renew it by paying an additional late fee.
                        </Accordion>
                        <Accordion title="What is the difference between a trademark registration and a trademark renewal?">
                            Registration is the initial process of legally securing your brand name for 10 years. Renewal is the process of extending that protection for another 10 years before or right after the current validity expires.
                        </Accordion>
                        <Accordion title="What are the consequences of failure to renew the trademark?">
                            Failure to renew within the stipulated time and grace period will result in the trademark being removed from the Register of Trademarks. You will lose all legal protection, and competitors can legally use your brand name.
                        </Accordion>
                        <Accordion title="When to file a renewal of trademark?">
                            You can file for renewal on or before 6 months prior to the expiration date of your current trademark registration.
                        </Accordion>
                        <Accordion title="What is meant by trademark 'opposed'?">
                            It means a third party has filed an objection to your trademark application or renewal, usually claiming it infringes on their existing mark or violates registry rules. A hearing is generally required to resolve this.
                        </Accordion>
                        <Accordion title="Do I need to physically present for the process?">
                            No, the entire trademark renewal process with us is 100% online. You do not need to be physically present at any office. We handle all drafting and filing digitally.
                        </Accordion>
                    </div>
                </div>
            </section>

        </div>
    );
}