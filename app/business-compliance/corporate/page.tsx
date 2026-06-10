"use client";

import React, { useState } from "react";
import {
    FaBuilding,
    FaFileAlt,
    FaUserCheck,
    FaPlay,
    FaPercent,
    FaCalculator,
    FaFileInvoiceDollar,
    FaUsers,
    FaMoneyBillWave,
    FaStore,
    FaSearch,
    FaShieldAlt,
    FaClipboardCheck,
    FaGlobe,
    FaCertificate,
    FaUtensils,
    FaRocket,
    FaLandmark,
    FaUniversity,
    FaLightbulb,
    FaChartLine,
    FaHandshake,
    FaGlobeAmericas,
    FaObjectGroup,
    FaTasks,
    FaBriefcase,
    FaChartBar,
    FaCoins,
    FaTools,
    FaFileContract,
    FaClock,
    FaRedo,
    FaDatabase,
    FaCogs,
    FaArrowRight,
    FaCalendarAlt,
    FaCity,
    FaSmile,
    FaCogs as FaProcess,
    FaIndustry,
    FaChevronDown,
    FaChevronUp
} from "react-icons/fa";

// --- DATA ARRAYS ---

const services = [
    {
        title: "ROC Filings & Annual Returns",
        icon: <FaBuilding />,
        items: [
            "ADT – 1: Auditor Appointment",
            "AOC – 4: Annual Return Filing (within 30 days of AGM)",
            "MGT – 7: Annual Return Filing (within 60 days of AGM)",
            "DIR – 3: KYC of the Company Director(s)",
            "INC – 20A: Declaration for commencement of business",
            "Financial statement preparation"
        ]
    },
    {
        title: "GST & Tax Compliance",
        icon: <FaPercent />,
        items: [
            "GST registration & amendments",
            "Monthly / quarterly GST returns",
            "Income tax return filing",
            "TDS returns & compliance",
            "Tax notice handling & representation",
            "GST reconciliation & audit support"
        ]
    },
    {
        title: "Labour Law Compliance",
        icon: <FaUsers />,
        items: [
            "PF & ESI registration and filings",
            "Payroll compliance management",
            "Professional Tax filings",
            "Shop & Establishment registration",
            "Labor welfare fund compliance",
            "Contract labor compliance"
        ]
    },
    {
        title: "Audit & Risk Management",
        icon: <FaSearch />,
        items: [
            "Internal compliance audits",
            "Due diligence support",
            "Risk assessment reports",
            "Compliance gap analysis",
            "Audit readiness preparation",
            "Regulatory inspection handling"
        ]
    },
    {
        title: "Industry-Specific Regulatory",
        icon: <FaIndustry />,
        items: [
            "Import Export Code (IEC) compliance",
            "MSME registration & filings - Free",
            "FSSAI licensing (for food businesses)",
            "Startup India recognition",
            "SEBI / RBI compliance (if applicable)",
            "NBFC compliance support"
        ]
    },
    {
        title: "Advisory & Strategic Compliance",
        icon: <FaLightbulb />,
        items: [
            "Business structuring for tax efficiency",
            "Compliance planning for fundraising",
            "M&A compliance support",
            "Cross-border compliance advisory",
            "Regulatory strategy consulting"
        ]
    },
    {
        title: "Merger & Acquisition Advisory",
        icon: <FaObjectGroup />,
        items: [
            "Strategic planning and structuring",
            "Regulatory and statutory compliance",
            "Transaction execution and closing"
        ]
    },
    {
        title: "Business Advisory Services",
        icon: <FaBriefcase />,
        items: [
            "Setup and structuring advisory",
            "Strategic and growth advisory",
            "Financial advisory",
            "Tax and compliance advisory",
            "Operational advisory"
        ]
    },
    {
        title: "Contract Lifecycle Management",
        icon: <FaFileContract />,
        items: [
            "Contract tracking",
            "Obligation monitoring",
            "Renewal management",
            "Repository maintenance",
            "Process coordination"
        ]
    }
];

const whyUs = [
    { title: "7+ Years", desc: "Experience in corporate compliance", icon: <FaCalendarAlt /> },
    { title: "1,200+", desc: "Indian Cities Covered", icon: <FaCity /> },
    { title: "5,00,000+", desc: "Businesses Served", icon: <FaSmile /> },
    { title: "100%", desc: "Process-Driven Execution", icon: <FaProcess /> },
    { title: "100%", desc: "All Industries Supported", icon: <FaIndustry /> },
    { title: "50+", desc: "Regulatory Areas", icon: <FaShieldAlt /> },
];

const faqs = [
    {
        q: "What is Corporate Compliance & Governance?",
        a: "Corporate Compliance & Governance means following laws, rules, and ethical practices while managing a company. It helps businesses operate properly, transparently, and in a responsible way."
    },
    {
        q: "Why is Corporate Compliance & Governance important for companies?",
        a: "It ensures business stability, avoids penalties, builds investor trust, and creates a structured framework for sustainable growth while mitigating legal risks."
    },
    {
        q: "What are the key elements of Corporate Compliance & Governance?",
        a: "Key elements include ROC filings, tax compliance, labor law adherence, internal audits, risk management, board structure, and transparent reporting mechanisms."
    },
    {
        q: "Who is responsible for Corporate Compliance & Governance in an organization?",
        a: "While the Board of Directors holds ultimate responsibility, day-to-day compliance is typically managed by Company Secretaries, CFOs, and dedicated compliance officers."
    },
    {
        q: "How does Corporate Compliance & Governance help business growth?",
        a: "Strong compliance ensures business stability. By outsourcing to experienced partners like Online Legal India, organizations can focus on core business priorities while we handle audit-ready compliance."
    }
];

export default function ProfessionalServices() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="font-sans text-slate-800 bg-slate-50 min-h-screen pb-20">

            {/* HERO SECTION */}
            <section className="bg-gradient-to-br from-[#0B1F4D] to-[#1A3673] py-20 px-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#f26522]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <span className="inline-block bg-[#f26522] text-white font-bold px-4 py-1.5 rounded-full text-sm tracking-wider uppercase mb-6 shadow-md">
                        End-to-End Solutions
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Professional Services
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive Corporate Compliance & Governance solutions tailored for enterprises, startups, and institutional clients across India.
                    </p>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="py-20 px-5 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-xl bg-[#0B1F4D]/5 text-[#f26522] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#f26522] group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#0B1F4D] mb-4">{service.title}</h3>
                            <ul className="space-y-3">
                                {service.items.map((item, iIdx) => (
                                    <li key={iIdx} className="flex items-start gap-3 text-sm text-slate-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#f26522] mt-2 shrink-0"></div>
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* And Many More Card */}
                    <div className="bg-gradient-to-br from-[#0B1F4D] to-[#163785] p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center items-center text-center text-white group cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-3xl mb-6 group-hover:bg-[#f26522] transition-colors">
                            <FaArrowRight />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">And Many More</h3>
                        <p className="text-blue-200 text-sm">Custom solutions for your specific industry needs</p>
                    </div>
                </div>
            </section>

            {/* WHY US SECTION */}
            <section className="py-20 px-5 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D]">Why Online Legal India</h2>
                        <div className="w-24 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyUs.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#f26522]/30 hover:shadow-md transition-all">
                                <div className="text-4xl text-[#f26522] mb-4">
                                    {stat.icon}
                                </div>
                                <h3 className="text-3xl font-black text-[#0B1F4D] mb-2">{stat.title}</h3>
                                <p className="text-slate-600 font-medium">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-20 px-5 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#0B1F4D] mb-6">Strong compliance ensures business stability.</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    By outsourcing regulatory and statutory compliance management to an experienced company like Online Legal India, organizations can ensure timely, accurate, and audit-ready compliance without the need to build or maintain an in-house compliance function. This allows internal teams to stay focused on core business priorities while compliance obligations are handled with consistency and accountability.
                </p>
            </section>

            {/* CTA BANNER */}
            <section className="bg-gradient-to-r from-[#f26522] to-[#e85510] py-16 px-5 text-center mb-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Stop Worrying About Compliance.
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-bold text-orange-100 mb-8">
                        Start focusing on scaling your business.
                    </h3>
                    <button className="bg-white text-[#f26522] hover:bg-slate-50 font-bold text-lg px-10 py-4 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        Get Started Today
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
                                className={`bg-slate-50 border rounded-xl overflow-hidden transition-all duration-300 ${openFAQ === index ? 'border-[#0B1F4D] shadow-md' : 'border-slate-200'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none bg-white"
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
                            Any reference to "audit," "valuation," "certification," "review," or similar terms shall be construed as advisory support, coordination, or facilitation services and shall not be interpreted as statutory audit, statutory valuation, or regulated certification unless expressly stated and carried out by an authorized professional under applicable law.
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