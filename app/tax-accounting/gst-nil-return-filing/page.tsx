"use client";

import React, { useState } from "react";
import {
    FiCheckCircle,
    FiArrowRight,
    FiChevronDown,
    FiPlus,
    FiMinus,
    FiFileText,
    FiPhoneCall,
    FiGlobe,
    FiUserCheck,
    FiClock,
    FiMail,
} from "react-icons/fi";
import { BsShieldCheck, BsCurrencyRupee } from "react-icons/bs";
import { FaAward, FaRegHandshake } from "react-icons/fa";

// --- Reusable Accordion Component ---
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
        <div className="bg-white mb-2 rounded-sm overflow-hidden shadow-sm border border-gray-100">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-left font-bold text-gray-800 hover:bg-gray-50 transition-colors"
            >
                <span className="text-[15px]">{title}</span>
                {isOpen ? (
                    <FiMinus className="w-4 h-4 text-gray-600 flex-shrink-0" />
                ) : (
                    <FiPlus className="w-4 h-4 text-gray-600 flex-shrink-0" />
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

// --- Pricing Card Component (since we have 2 packages) ---
const PricingCard = ({
    title,
    price,
    features,
    highlight = false,
}: {
    title: string;
    price: string;
    features: string[];
    highlight?: boolean;
}) => (
    <div
        className={`bg-white rounded-2xl shadow-xl overflow-hidden relative transform hover:scale-[1.02] transition-transform duration-300 border ${highlight ? "border-[#ff6f00]" : "border-gray-100"
            }`}
    >
        <div
            className={`${highlight ? "bg-[#ff6f00]" : "bg-[#233a85]"
                } text-white text-center py-2 font-bold text-sm tracking-wider uppercase`}
        >
            {highlight ? "Most Popular" : "Standard Plan"}
        </div>
        <div className="p-8">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <div className="flex items-center text-4xl font-extrabold text-[#233a85] mb-6">
                <BsCurrencyRupee className="w-8 h-8" />
                {price}
            </div>
            <ul className="space-y-3 mb-8">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-600 text-sm">
                        <FiCheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button
                className={`w-full ${highlight
                        ? "bg-[#ff6f00] hover:bg-[#e66400]"
                        : "bg-[#233a85] hover:bg-blue-900"
                    } text-white font-bold py-4 rounded-lg shadow-lg transition-colors`}
            >
                Request Callback
            </button>
        </div>
    </div>
);

export default function GSTNilReturnPage() {
    const packageFeatures = [
        "Personally Assigned GST Expert",
        "Zero Sales Invoices",
        "Zero Purchase Invoices",
        "No Transaction during the month",
        "Free Bank Account Updation",
        "No GST E-Way Bill",
        "No Credit Note",
        "No Debit Note",
        "Call, Chat, Email support",
        "Consultation available in 6 Languages including English",
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            {/* 1. HERO SECTION (Blue theme - Image 1 style) */}
            <section className="bg-[#233a85] text-white py-20 px-4">
                <div className="max-w-5xl mx-auto flex flex-col items-start text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        File your GST Nil Return with ease! <br />
                        Your Business, Our Responsibility.
                    </h1>
                    <p className="text-lg md:text-xl mb-6 font-medium text-gray-200">
                        Let India’s recommended Business Taxation Experts file your GST Nil
                        Returns on time. <br />
                        Digital Assistance to any Corner of the Nation.
                    </p>

                    <button className="bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold py-3 px-8 rounded shadow-md transition-colors mb-8">
                        File Now
                    </button>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center bg-[#1d3275] border border-blue-500/30 px-4 py-2 rounded text-sm font-semibold">
                            <FaAward className="text-yellow-400 w-5 h-5 mr-2" />
                            Startup India Recognized
                        </div>
                        <div className="flex items-center bg-[#1d3275] border border-blue-500/30 px-4 py-2 rounded text-sm font-semibold">
                            <FaAward className="text-yellow-400 w-5 h-5 mr-2" />
                            ISO 9001:2015 Certified
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
                {/* 2. WHAT IS NIL RETURN (Info Accordions) */}
                <section className="grid md:grid-cols-2 gap-10 items-start">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Know About GST Nil Return
                        </h2>
                        <Accordion title="What is GST Nil Return?" defaultOpen={true}>
                            As per the provisions of the taxation authority, the registered
                            business individuals and ventures are mandated to file the GST Nil
                            Return to keep a record of not paying any tax due to a few
                            regulated circumstances.
                        </Accordion>
                        <Accordion title="Which Act of the Indian Govt. oversees the GST Nil Return filing process?">
                            The GST Nil Return filing process is overseen by the Goods and
                            Services Act, 2017 of the Indian Govt.
                        </Accordion>
                        <Accordion title="Can the taxpayer change the period of filing the Nil Return?">
                            Only at the time of filing the first return for any particular
                            Fiscal Year, a registered taxpayer can change or alter the period
                            of filing the Nil Return from Quarterly to Monthly or the vice
                            versa.
                        </Accordion>
                        <Accordion title="Who is liable for GST Nil Return?">
                            As per the legal provisions, any registered taxpayer with no sales
                            or supplies recorded during the particular month or quarter for
                            GST filing, is mandated to file the GST Nil Return.
                        </Accordion>
                    </div>

                    {/* POINTS TO REMEMBER (Numbered style as per content) */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Points to Remember
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                <div className="w-10 h-10 bg-[#233a85] text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                                    1
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed pt-2">
                                    The scheduled date for GST Nil Return filing can be altered or
                                    extended by any official notification issued by the Govt. of
                                    India.
                                </p>
                            </div>
                            <div className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                <div className="w-10 h-10 bg-[#ff6f00] text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                                    2
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed pt-2">
                                    Not filing the GST Nil Return by the due date would lead to a
                                    late fine of <strong>Rs. 100/day</strong> (Rs. 50 for CGST and
                                    Rs. 20 for SGST).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* 3. SELECT PACKAGES (Full-width section) */}
            <section className="bg-gray-100 py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
                        Select Packages
                    </h2>
                    <div className="w-16 h-1 bg-[#ff6f00] mx-auto mb-12"></div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <PricingCard
                            title="Monthly GST NIL Return Filing"
                            price="799"
                            features={[
                                packageFeatures[0],
                                "Monthly Nil GSTR-1 Filing",
                                "Monthly Nil GSTR-3B Filing",
                                ...packageFeatures.slice(1),
                            ]}
                        />
                        <PricingCard
                            title="Quarterly GST NIL Return Filing"
                            price="1,499"
                            highlight={true}
                            features={[
                                packageFeatures[0],
                                "Quarterly Nil GSTR-1 Filing",
                                "Quarterly Nil GSTR-3B Filing",
                                ...packageFeatures.slice(1),
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* 4. DOCUMENTS REQUIRED (Green theme - Image 2 style) */}
            <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#eef4ff]">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <span className="text-[#f26522] font-semibold uppercase tracking-wider">
                            Required Documents
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F4D] mt-3">
                            Documents Required for GST Nil Return Filing
                        </h2>

                        <p className="text-slate-600 max-w-3xl mx-auto mt-4">
                            Keep the following information and documents ready to ensure
                            smooth and hassle-free GST Nil Return filing.
                        </p>

                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-5 rounded-full"></div>
                    </div>

                    {/* Documents Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {[
                            {
                                icon: "📄",
                                title: "GSTIN Details",
                                desc: "GST Identification Number (GSTIN) of the registered business or individual."
                            },
                            {
                                icon: "📋",
                                title: "Registration Documents",
                                desc: "Details and records generated during the GST registration process."
                            },
                            {
                                icon: "🧾",
                                title: "Purchase Invoices",
                                desc: "Copies of purchase invoices and related supporting documents."
                            },
                            {
                                icon: "💳",
                                title: "Input Tax Credit Details",
                                desc: "Information regarding available input tax credits, if applicable."
                            },
                            {
                                icon: "📊",
                                title: "Taxable Value Details",
                                desc: "Relevant GST rates and taxable value information for reporting."
                            },
                            {
                                icon: "👥",
                                title: "Consumer Information",
                                desc: "Customer or consumer-related details required for GST records."
                            },
                        ].map((doc, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-3xl mb-5">
                                    {doc.icon}
                                </div>

                                <h3 className="text-xl font-bold text-[#0B1F4D] mb-3">
                                    {doc.title}
                                </h3>

                                <p className="text-slate-600 leading-7">
                                    {doc.desc}
                                </p>
                            </div>
                        ))}

                    </div>

                    {/* Bottom Info Box */}
                    <div className="mt-14">
                        <div className="bg-[#0B1F4D] rounded-3xl p-8 md:p-10 text-center shadow-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Ready to File Your GST Nil Return?
                            </h3>

                            <p className="text-slate-300 max-w-2xl mx-auto mb-6">
                                Our GST professionals can help you file GST Nil Returns accurately
                                and on time, ensuring complete compliance with GST regulations.
                            </p>

                            <button className="bg-[#f26522] hover:bg-[#e55a1c] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                                File GST Nil Return Now
                            </button>
                        </div>
                    </div>

                </div>
            </section>
            <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
                {/* 5. HOW WE WORK (Stepper) */}
                <section className="bg-blue-50 py-12 px-6 rounded-3xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#233a85]">
                        How We Work?
                    </h2>
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center">
                        {[
                            "Fill the Form and Make the Payment",
                            "Get a Call from our GST Expert Panel",
                            "Submit the Documents as requested",
                            "Expert will take your Approval before filing the GST Nil Return",
                            "Congratulations! Your GST Nil Return has successfully Filed",
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center max-w-[160px]">
                                    <div className="w-12 h-12 bg-[#233a85] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">
                                        {index + 1}
                                    </div>
                                    <p className="text-sm font-semibold text-[#233a85]">{step}</p>
                                </div>
                                {index !== arr.length - 1 && (
                                    <>
                                        <FiArrowRight className="hidden md:block w-8 h-8 text-blue-300 flex-shrink-0" />
                                        <FiChevronDown className="md:hidden w-8 h-8 text-blue-300" />
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </section>

                {/* 6. BENEFITS */}
                <section className="pb-10">
                    <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
                        Benefits of Filing GST Nil Return with Online Legal India
                    </h2>
                    <div className="w-16 h-1 bg-[#ff6f00] mx-auto mb-12"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <FiUserCheck className="w-10 h-10" />,
                                text: "Personally assigned GST Taxation Experts",
                            },
                            {
                                icon: <FiGlobe className="w-10 h-10" />,
                                text: "100% Online Process",
                            },
                            {
                                icon: <FaRegHandshake className="w-10 h-10" />,
                                text: "Services available to any corner of India",
                            },
                            {
                                icon: <BsShieldCheck className="w-10 h-10" />,
                                text: "360° taxation guidance at Fingertips",
                            },
                            {
                                icon: <FaAward className="w-10 h-10" />,
                                text: "DPIIT, Govt. of India certified Business Portal",
                            },
                            {
                                icon: <BsCurrencyRupee className="w-10 h-10" />,
                                text: "Best services at an Unbeatable Price",
                            },
                            {
                                icon: <FiClock className="w-10 h-10" />,
                                text: "Up-to-date supervision as per the Govt. notifications",
                            },
                            {
                                icon: <FiPhoneCall className="w-10 h-10" />,
                                text: "Call, Email & Chat Support",
                            },
                            {
                                icon: <FiMail className="w-10 h-10" />,
                                text: "Availed consultation in 6 languages including English",
                            },
                        ].map((benefit, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                            >
                                <div className="text-[#233a85] mb-4">{benefit.icon}</div>
                                <p className="font-semibold text-gray-700 text-sm">
                                    {benefit.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}