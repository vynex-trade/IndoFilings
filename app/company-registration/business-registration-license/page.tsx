"use client";

import React, { useState } from "react";
import {
    FaCheckCircle,
    FaBuilding,
    FaClipboardCheck,
    FaFileInvoiceDollar,
    FaDownload,
    FaAward,
    FaClock,
    FaBolt,
    FaShieldAlt,
    FaUserTie,
    FaUsers,
    FaChevronDown,
    FaChevronUp,
    FaGlobe,
    FaLock,
    FaRegFileAlt,
    FaFileSignature,
    FaUtensils,
    FaPercentage
} from "react-icons/fa";

// --- DATA ARRAYS ---

const regulatedElements = [
    "Hours of work",
    "Interval for rest and meals",
    "Prohibition of employment of children",
    "Employment of young person or women",
    "Opening and closing hours",
    "Close days",
    "Weekly holidays",
    "Wages for holidays",
    "Payment of wages",
    "Deductions from wages",
    "Leave policy",
    "Dismissal",
    "Cleanliness",
    "Lighting and ventilation",
    "Precautions against fire",
    "Accidents",
    "Record keeping"
];

const processes = [
    { step: "01", text: "Prerequisite: documents required.", icon: <FaRegFileAlt /> },
    { step: "02", text: "Filling the application form and submitting the same along with the required documents.", icon: <FaClipboardCheck /> },
    { step: "03", text: "Payment of fees.", icon: <FaFileInvoiceDollar /> },
    { step: "04", text: "Downloading the certificate.", icon: <FaDownload /> }
];

const whyUs = [
    { text: "Recognized by Govt. of India", icon: <FaAward /> },
    { text: "On Time Service", icon: <FaClock /> },
    { text: "Super Fast Service", icon: <FaBolt /> },
    { text: "ISO Certified", icon: <FaCheckCircle /> },
    { text: "24x7 Platform", icon: <FaGlobe /> },
    { text: "Data Security & Trust", icon: <FaShieldAlt /> },
    { text: "Expertise You Can Trust", icon: <FaLock /> },
    { text: "Trained and Professional Experts", icon: <FaUserTie /> },
    { text: "5 Lakh+ Happy Customers", icon: <FaUsers /> },
];

const popularServices = [
    { name: "Company Registration", icon: <FaBuilding /> },
    { name: "Tax Services", icon: <FaFileInvoiceDollar /> },
    { name: "Trademark Registration", icon: <FaFileSignature /> },
    { name: "Import Export Code", icon: <FaGlobe /> },
    { name: "FSSAI Food License", icon: <FaUtensils /> },
    { name: "GST Services", icon: <FaPercentage /> },
];

const faqs = [
    "Who has to apply for Business Registration under the Shop and Establishment Act?",
    "Whether the Registration certificate requires to be renewed if so at what intervals?",
    "What is the procedure for applying for registration & Renewal?",
    "What is the Mode of payment of the fee?",
    "What are the obligations of the employer in the implementation of the Act?",
    "What are the rights & privileges of the employees under the Act?",
    "What are the remedies available in the Act to get relief in certain cases like nonpayment of wages, deduction of wages, and nonpayment of service compensation?",
    "How does Shop and Establishment act benefit businesses?",
    "Any appellate authority is available under the Act to make appeals on the orders of the authorities U/s 48 and 50 of the Act?",
    "Where is the Trial of offenses for contraventions the provisions of the Act?",
    "Who are the inspectors for the implementation of the Act?",
    "How Factories Act differ from shops and establishment Acts?"
];

export default function BusinessRegistration() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">

            {/* HERO SECTION */}
            <section className="bg-gradient-to-r from-[#0B1F4D] to-[#1A3673] py-20 px-5 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Quickest Business Registration in India.
                    </h1>
                    <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Get Your Business Registered at lowest fees. Online Legal India is an <span className="font-bold text-white">MCA (Ministry of Corporate Affairs)</span> & <span className="font-bold text-white">MSME</span> registered company in India.
                    </p>
                    <div className="mt-8">
                        <button className="bg-[#f26522] hover:bg-[#d9551a] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1">
                            Register Now
                        </button>
                    </div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section className="py-20 px-5 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-[#0B1F4D]">Overview</h2>
                            <div className="w-16 h-1 bg-[#f26522] mt-3 rounded-full"></div>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Thinking about getting your business registered? Our team of experts helps you create a distinct business identity.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Any entrepreneur who wants to start a business in India always faces a unique set of hurdles. At every level of the business, an owner must make informed decisions. The form of corporate entity that the business should mature into is one of the essential decisions that must be made at the earliest stages.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            While the process of registering a business is difficult and time-consuming, it does come with a number of indisputable benefits when done with the guidance of specialists from Online Legal India.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-[#0B1F4D] p-5 rounded-r-xl">
                            <p className="text-[#0B1F4D] font-medium leading-relaxed">
                                The Shop and Establishment Act in India, one of the most important regulations under which all businesses fall, helps in regulating key business elements.
                            </p>
                        </div>
                    </div>

                    {/* Regulated Elements Grid */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold text-[#0B1F4D] mb-6">Key Elements Regulated:</h3>
                        <div className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
                            {regulatedElements.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <FaCheckCircle className="text-[#10a850] mt-1 shrink-0" />
                                    <span className="text-sm text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="py-20 px-5 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#0B1F4D]">Process to Get Business Registration License</h2>
                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processes.map((proc, idx) => (
                            <div key={idx} className="relative flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow group">
                                <div className="absolute -top-5 w-12 h-12 bg-[#0B1F4D] text-white font-black text-xl rounded-full flex items-center justify-center border-4 border-white shadow-sm group-hover:bg-[#f26522] transition-colors">
                                    {proc.step}
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-[#0B1F4D]/5 text-[#f26522] flex items-center justify-center text-3xl mt-6 mb-4">
                                    {proc.icon}
                                </div>
                                <p className="text-sm font-medium text-slate-700 leading-relaxed">{proc.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING SECTION */}
            <section className="py-20 px-5 bg-slate-50">
                <div className="max-w-md mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#0B1F4D]">Our Fees</h2>
                        <div className="w-16 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-3xl p-10 text-center shadow-xl border-t-8 border-[#f26522] relative overflow-hidden">
                        {/* Decorative background circle */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-10 -mt-10 z-0"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-[#0B1F4D] mb-2">Business Registration License</h3>
                            <p className="text-slate-500 font-medium mb-6 uppercase tracking-widest">Only</p>
                            <div className="flex justify-center items-end gap-1 mb-2">
                                <span className="text-5xl font-black text-[#f26522]">₹2999/-</span>
                            </div>
                            <p className="text-lg font-bold text-slate-700 mb-1">+ GST</p>
                            <p className="text-xs text-red-500 font-medium mb-8">(excluding govt. fees)</p>

                            <button className="w-full bg-[#0B1F4D] hover:bg-[#1A3673] text-white font-bold py-4 rounded-xl shadow-md transition-colors text-lg">
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY US & POPULAR SERVICES GRID */}
            <section className="py-20 px-5 bg-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                    {/* Why Us */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-[#0B1F4D]">Why Us?</h2>
                            <div className="w-16 h-1 bg-[#f26522] mt-3 rounded-full"></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {whyUs.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-[#f26522]/10 text-[#f26522] flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm font-semibold text-[#0B1F4D] leading-tight">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Popular Services */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-[#0B1F4D]">Popular Services</h2>
                            <div className="w-16 h-1 bg-[#f26522] mt-3 rounded-full"></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {popularServices.map((service, idx) => (
                                <div key={idx} className="flex flex-col justify-center gap-3 bg-gradient-to-br from-[#0B1F4D] to-[#1A3673] p-6 rounded-2xl text-white hover:-translate-y-1 transition-transform shadow-md cursor-pointer">
                                    <div className="text-3xl text-blue-200">
                                        {service.icon}
                                    </div>
                                    <span className="font-bold">{service.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* FAQ SECTION (MATCHING THE PROVIDED IMAGE EXACTLY) */}
            <section className="py-20 px-5 bg-[#fcfcfc] border-t border-slate-200">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800">FAQ</h2>
                        <div className="w-10 h-[3px] bg-[#10a850] mx-auto mt-2"></div>
                    </div>

                    <div className="space-y-[10px]">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.02)] overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 shrink-0 rounded-full bg-[#75B26A] text-white flex items-center justify-center font-bold text-sm">
                                            ?
                                        </div>
                                        <span className="text-[15px] text-gray-700 font-medium">{faq}</span>
                                    </div>
                                    {openFAQ === index ? (
                                        <FaChevronUp className="text-[#75B26A] shrink-0 text-sm ml-4" />
                                    ) : (
                                        <FaChevronDown className="text-[#75B26A] shrink-0 text-sm ml-4" />
                                    )}
                                </button>

                                {/* Dummy Answer logic */}
                                {openFAQ === index && (
                                    <div className="p-4 pt-0 pl-13 text-sm text-gray-600 bg-white border-t border-gray-100 leading-relaxed ml-9">
                                        This is a placeholder answer for the selected FAQ. Our legal experts will guide you completely regarding this query once you connect with us.
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Register Now Button matching the image */}
                    <div className="mt-12 flex justify-center">
                        <button className="bg-[#10a850] hover:bg-[#0e8f43] text-white font-bold text-[15px] px-8 py-2.5 rounded-full shadow-md transition-colors flex items-center justify-center min-w-[150px]">
                            Register Now
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}