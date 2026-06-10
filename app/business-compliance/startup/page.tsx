"use client";

import React, { useState } from "react";
import {
    FaCheckCircle,
    FaFileInvoiceDollar,
    FaPercent,
    FaUserShield,
    FaBuilding,
    FaFileSignature,
    FaCalculator,
    FaGavel,
    FaSearchDollar,
    FaLayerGroup,
    FaUserTie,
    FaTags,
    FaLaptop,
    FaTachometerAlt,
    FaSmile,
    FaCalendarCheck,
    FaFolderOpen,
    FaUserCheck,
    FaCouch,
    FaArrowRight,
    FaChevronDown,
    FaChevronUp,
    FaExclamationTriangle,
    FaTimesCircle
} from "react-icons/fa";

// --- DATA ARRAYS ---

const services = [
    { name: "GST Filing", icon: <FaPercent /> },
    { name: "TDS Returns", icon: <FaFileInvoiceDollar /> },
    { name: "PF & ESIC Compliance", icon: <FaUserShield /> },
    { name: "ROC Filings", icon: <FaBuilding /> },
    { name: "ITR Filing", icon: <FaFileSignature /> },
    { name: "Accounting", icon: <FaCalculator /> },
    { name: "Legal Support (ODR)", icon: <FaGavel /> },
    { name: "Audit Support", icon: <FaSearchDollar /> },
];

const packages = [
    {
        name: "Starter Plan",
        price: "2,999",
        features: [
            "Business Compliance",
            "ITR (1/year)",
            "Accounting",
            "Dedicated Manager"
        ],
    },
    {
        name: "Growth Plan",
        price: "4,999",
        recommended: true,
        features: [
            "GST Filing (monthly)",
            "ITR (business + director)",
            "ROC Compliance",
            "TDS Filing",
            "Audit Support",
            "PF & ESIC Compliance",
            "Dedicated Manager",
            "Accounting"
        ],
    },
    {
        name: "Pro Plan",
        price: "7,999",
        features: [
            "Everything in Growth",
            "Tax Planning",
            "Notice Handling",
            "Dedicated Manager",
            "Priority Support"
        ],
    }
];

const whyUs = [
    { text: "All Compliance in One Place", icon: <FaLayerGroup /> },
    { text: "Dedicated Account Manager", icon: <FaUserTie /> },
    { text: "Transparent Pricing", icon: <FaTags /> },
    { text: "100% Online Process", icon: <FaLaptop /> },
    { text: "Fast Turnaround Time", icon: <FaTachometerAlt /> },
    { text: "10,000+ Businesses Served", icon: <FaSmile /> },
];

const processes = [
    { text: "Book Free Consultation", icon: <FaCalendarCheck /> },
    { text: "Share Documents", icon: <FaFolderOpen /> },
    { text: "Get Dedicated Manager", icon: <FaUserCheck /> },
    { text: "Sit Back, Stay Compliant", icon: <FaCouch /> }
];

const faqs = [
    {
        q: "Is this really all-in-one?",
        a: "Yes, GST, TDS, PF, ESIC, ROC, Audit Support, Accounting, ITR — everything is covered under one roof so you don't have to chase multiple vendors."
    },
    {
        q: "Who will handle my account?",
        a: "You will be assigned a Dedicated Account Manager who will be your single point of contact for all your compliance, tax, and accounting needs."
    },
    {
        q: "Is pricing fixed?",
        a: "Yes, our monthly pricing plans are completely transparent. There are no hidden charges. Note that statutory government fees are excluded and will be billed as actuals."
    }
];

export default function BusinessCompliance() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">

            {/* HERO SECTION */}
            <section className="bg-gradient-to-br from-[#0B1F4D] to-[#1A3673] py-20 px-5 relative overflow-hidden">
                {/* Background shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#f26522]/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="text-white">
                        <span className="inline-block bg-[#f26522] text-white font-bold px-4 py-1.5 rounded-full text-sm tracking-wider uppercase mb-6 shadow-md">
                            Complete Compliance Solution
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                            Outsource Your Business Compliance. <br />
                            <span className="text-blue-200">Stay Focused on Growth.</span>
                        </h1>
                        <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-lg">
                            Stop juggling between multiple CAs and vendors. Get end-to-end accounting, tax, and legal compliance managed by experts.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-[#f26522] hover:bg-[#d9551a] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1">
                                Book Free Consultation
                            </button>
                        </div>
                    </div>

                    {/* Pain vs Solution Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-2xl">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-red-600 flex items-center gap-2 mb-4">
                                <FaExclamationTriangle /> Still Managing with Multiple Vendors?
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-600"><FaTimesCircle className="text-red-400" /> One vendor for GST</li>
                                <li className="flex items-center gap-3 text-slate-600"><FaTimesCircle className="text-red-400" /> Another for TDS</li>
                                <li className="flex items-center gap-3 text-slate-600"><FaTimesCircle className="text-red-400" /> Someone else for PF/ESIC</li>
                                <li className="flex items-center gap-3 text-red-600 font-bold bg-red-50 p-3 rounded-lg mt-2">
                                    Missed deadlines = Heavy penalties
                                </li>
                            </ul>
                        </div>

                        <div className="border-t border-slate-200 pt-8">
                            <h3 className="text-xl font-bold text-[#10a850] flex items-center gap-2 mb-4">
                                <FaCheckCircle /> With Online Legal India, you get:
                            </h3>
                            <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                                {services.map((service, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm font-medium text-[#0B1F4D]">
                                        <div className="text-[#f26522] shrink-0">{service.icon}</div>
                                        <span>{service.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING PACKAGES */}
            <section className="py-20 px-5 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D]">Professional Fees</h2>
                        <div className="w-24 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {packages.map((pkg, idx) => (
                            <div key={idx} className={`bg-slate-50 rounded-3xl p-8 border shadow-sm flex flex-col relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl ${pkg.recommended ? 'border-[#f26522] ring-2 ring-[#f26522]/20 bg-white md:scale-105 z-10 shadow-xl' : 'border-slate-200'}`}>
                                {pkg.recommended && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#f26522] to-[#e85510] text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-[#0B1F4D] text-center mb-4">{pkg.name}</h3>
                                <div className="text-center mb-6">
                                    <div className="flex justify-center items-end gap-1">
                                        <span className="text-4xl font-black text-[#f26522]">₹{pkg.price}</span>
                                        <span className="text-slate-500 font-bold mb-1">/month</span>
                                    </div>
                                </div>
                                <ul className="flex-1 space-y-4 mb-8">
                                    {pkg.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="text-sm text-slate-600 flex items-start gap-3">
                                            <FaCheckCircle className="text-[#10a850] mt-1 shrink-0 text-base" />
                                            <span className="leading-relaxed font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3.5 rounded-xl font-bold transition-colors shadow-md ${pkg.recommended ? 'bg-[#f26522] hover:bg-[#d9551a] text-white' : 'bg-[#0B1F4D] hover:bg-[#163785] text-white'}`}>
                                    Contact Now
                                </button>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-slate-500 font-medium mt-10">* Excluding Govt. fees</p>
                </div>
            </section>

            {/* WHY US */}
            <section className="py-20 px-5 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D]">Why Online Legal India</h2>
                        <div className="w-24 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyUs.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-5 bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 rounded-full bg-[#0B1F4D]/5 text-[#f26522] flex items-center justify-center shrink-0 text-2xl">
                                    {item.icon}
                                </div>
                                <span className="font-bold text-[#0B1F4D] text-lg leading-tight">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW WE WORK */}
            <section className="py-20 px-5 bg-[#0B1F4D] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">How we work?</h2>
                        <div className="w-24 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative">
                        {processes.map((proc, idx) => (
                            <React.Fragment key={idx}>
                                <div className="flex flex-col items-center text-center max-w-[200px] z-10 group">
                                    <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-4xl mb-6 group-hover:bg-[#f26522] group-hover:border-[#f26522] group-hover:scale-110 transition-all duration-300 shadow-lg">
                                        {proc.icon}
                                    </div>
                                    <p className="text-lg text-white font-bold leading-snug">{proc.text}</p>
                                </div>
                                {idx !== processes.length - 1 && (
                                    <div className="hidden lg:block w-full h-[2px] bg-white/20 -mx-10 mt-[-40px] relative z-0">
                                        <FaArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50" />
                                    </div>
                                )}
                                {idx !== processes.length - 1 && (
                                    <FaArrowRight className="lg:hidden text-[#f26522] text-3xl shrink-0 rotate-90" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="bg-gradient-to-r from-[#f26522] to-[#e85510] py-16 px-5 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Avoid penalties. Stay compliant.
                    </h2>
                    <p className="text-xl text-orange-100 font-medium mb-8">
                        Limited Time Offer: 👉 Free consultation + compliance check
                    </p>
                    <button className="bg-white text-[#f26522] hover:bg-slate-50 font-bold text-lg px-10 py-4 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        Claim Your Free Consultation
                    </button>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-20 px-5 bg-white border-b border-slate-200">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0B1F4D]">FAQ</h2>
                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${openFAQ === index ? 'border-[#0B1F4D] shadow-md' : 'border-slate-200'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                                >
                                    <span className="font-semibold text-slate-800 pr-4">{faq.q}</span>
                                    {openFAQ === index ? (
                                        <FaChevronUp className="text-[#f26522] shrink-0" />
                                    ) : (
                                        <FaChevronDown className="text-slate-400 shrink-0" />
                                    )}
                                </button>

                                {openFAQ === index && (
                                    <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed bg-white border-t border-slate-100">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DISCLAIMER SECTION */}
            <section className="bg-slate-100 py-12 px-5">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-lg font-bold text-slate-700 mb-4 border-b border-slate-300 pb-2">
                        General Disclaimer
                    </h3>
                    <div className="text-[11px] sm:text-xs text-slate-500 leading-relaxed space-y-4 text-justify">
                        <p>
                            Online Legal India is an advisory and support platform providing business, corporate, regulatory, and compliance-related assistance to enterprises and institutional clients. Online Legal India does not operate as a statutory audit firm, investment advisory firm, or valuation firm, except to the extent services are expressly rendered through duly authorized and regulated professionals in accordance with applicable Indian laws. Any audit, accounting, valuation, forensic, certification, or assurance-related support is provided through appropriately qualified and registered professionals, including Chartered Accountants and Registered Valuers, where required under the Companies Act, 2013, the Chartered Accountants Act, 1949, and applicable rules and regulations. Services relating to investments, fundraising, transactions, and capital structuring are limited to compliance, documentation, process support, and regulatory facilitation and do not constitute investment advice or investment advisory services as defined under the Securities and Exchange Board of India (Investment Advisers) Regulations, 2013, or any other applicable SEBI regulations.
                        </p>
                        <p>
                            Any reference to “audit,” “valuation,” “certification,” “review,” or similar terms shall be construed as advisory support, coordination, or facilitation services and shall not be interpreted as statutory audit, statutory valuation, or regulated certification unless expressly stated and carried out by an authorized professional under applicable law.
                        </p>
                        <p>
                            Where a service requires the involvement of a regulated professional, it will be carried out independently by that professional. The billing, invoicing, and payment for such services will be handled directly between you and the respective professional.
                        </p>
                        <p>
                            Online Legal India does not provide any assurance, guarantee, or warranty as to outcomes, approvals, timelines, or results, which are dependent on multiple factors including factual circumstances, regulatory review, third-party actions, and decisions of statutory or governmental authorities.
                        </p>
                        <p>
                            Information and documents shared are handled in accordance with contractual confidentiality obligations and applicable laws, including the Information Technology Act, 2000 and related rules. This material is provided for general informational purposes only and does not constitute professional assurance or a substitute for independent professional consultation.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}