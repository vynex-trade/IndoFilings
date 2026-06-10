"use client";

import React, { useState } from "react";
import {
    FiArrowRight,
    FiChevronDown,
    FiPlus,
    FiMinus,
    FiCheckCircle,
    FiFileText,
    FiShield,
    FiClock,
    FiUsers,
    FiStar,
    FiBriefcase,
    FiGlobe,
    FiCalendar,
    FiAlertTriangle,
    FiCheckSquare,
    FiActivity,
    FiAward
} from "react-icons/fi";
import { BsBuilding, BsShieldCheck, BsCurrencyRupee } from "react-icons/bs";

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

// --- Solid Blue Accordion ---
const SolidAccordion = ({
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
        <div className="mb-4 border border-[#1d3275] shadow-sm rounded-sm overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 bg-[#233a85] text-white text-left font-semibold transition-colors hover:bg-[#1d3275]"
            >
                <span className="text-[15px]">{title}</span>
                {isOpen ? (
                    <FiMinus className="w-4 h-4 flex-shrink-0 text-white" />
                ) : (
                    <FiPlus className="w-4 h-4 flex-shrink-0 text-white" />
                )}
            </button>
            {isOpen && children && (
                <div className="p-4 bg-gray-50 border-t border-gray-200 text-gray-700 text-[14px] leading-relaxed">
                    {children}
                </div>
            )}
        </div>
    );
};

export default function DPT3FilingPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#233a85] py-16 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">

                    {/* Left: Hero Text */}
                    <div className="md:col-span-7 text-white text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            Form DPT-3 Return Filing by Professional Expert Online
                        </h1>
                        <p className="text-blue-100 font-medium text-lg leading-relaxed mb-6">
                            Every company must file a return of deposits in the form of DPT-3 and must submit it to the Ministry of Corporate Affairs (MCA) by June 30 each year.
                        </p>
                        <p className="text-sm text-blue-200 leading-relaxed mb-6 border-l-4 border-[#ff6f00] pl-4">
                            We know all companies do not appoint a permanent auditor to save cost. Don’t worry, Online Legal India has Experts to create a Return Filing on behalf of your company. Stay confident that your Form DPT-3 return filing submission will be done successfully and flawlessly.
                        </p>
                        <button className="hidden md:inline-block bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold py-3 px-8 rounded shadow-lg transition-colors">
                            Get Started Today
                        </button>
                    </div>

                    {/* Right: Lead Form */}
                    <div className="md:col-span-5 bg-white p-7 rounded-lg shadow-2xl text-gray-800">
                        <h3 className="text-xl font-bold text-[#0b1b3d] mb-1">
                            We’re here to help
                        </h3>
                        <p className="text-xs text-gray-500 mb-6">
                            Fill Up the below Mentioned Form
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Mobile Number <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Email Address <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">State <span className="text-red-500">*</span></label>
                                <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] text-gray-600 bg-white">
                                    <option value="">Select State</option>
                                    <option value="MH">Maharashtra</option>
                                    <option value="DL">Delhi</option>
                                    <option value="KA">Karnataka</option>
                                </select>
                            </div>

                            {/* Captcha */}
                            <div className="flex items-center gap-3 pt-2">
                                <div className="bg-gray-200 text-xl tracking-[0.3em] font-serif italic font-bold px-6 py-2 border border-gray-300 rounded shadow-inner text-gray-700 select-none">
                                    5 9 2 1
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter the captcha here.."
                                    className="flex-grow border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3 rounded transition-colors shadow-md mt-4">
                                Submit Request
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* 2. OVERVIEW & APPLICABILITY (Accordions) */}
            <section className="py-16 px-4 bg-[#f8f9fc] border-b border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            DPT-3 Return Filing Regulations
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <SolidAccordion title="An Overview of DPT-3 Filing" defaultOpen={true}>
                        <p className="mb-3">
                            The creditors and depositors are the passive supporters of companies. Every company should respect the interests of creditors and depositors. In consultation with the Reserve Bank of India, the Central Government introduced amendments regarding “Acceptance of Deposits” Rules, 2014 through the Companies Amendment Rules 2019.
                        </p>
                        <p>
                            According to the new rules, MCA notified that all companies except government companies must file a One-Time Return through the form DPT-3 annually.
                        </p>
                    </SolidAccordion>

                    <SolidAccordion title="Which Companies Need DPT-3 Return Filing?" defaultOpen={true}>
                        <p className="font-bold text-[#0b1b3d] mb-2">Several Types of Companies Need to File DPT-3:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                            <li>One Person Companies (OPC)</li>
                            <li>Private Limited Companies</li>
                            <li>Public Limited Companies</li>
                            <li>Small and Non-Small Companies</li>
                        </ul>
                        <p className="font-bold text-[#0b1b3d] mb-2">Specific Entities receiving loans:</p>
                        <ul className="space-y-3">
                            <li><strong>Holding Company:</strong> Receiving a loan from its holding company.</li>
                            <li><strong>Subsidiary Company:</strong> Receiving a loan from any subsidiary company controlling it.</li>
                            <li><strong>Associated Company:</strong> Receiving a loan from an associated company.</li>
                        </ul>
                    </SolidAccordion>

                    <SolidAccordion title="Which Companies Do Not Need to File Form DPT-3?">
                        <p className="mb-3">Under the Acceptance of Deposits Rules of 2014, certain companies are exempted:</p>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            <li className="bg-white p-3 border border-gray-200 rounded"><strong>Government Companies:</strong> Completely owned by state or central govt.</li>
                            <li className="bg-white p-3 border border-gray-200 rounded"><strong>Banking Companies:</strong> Banks regulated by the RBI.</li>
                            <li className="bg-white p-3 border border-gray-200 rounded"><strong>NBFCs:</strong> Non-Banking Financial Companies registered under RBI.</li>
                            <li className="bg-white p-3 border border-gray-200 rounded"><strong>HFCs:</strong> Housing Finance Companies registered under NHB.</li>
                        </ul>
                    </SolidAccordion>

                    <SolidAccordion title="Form DPT-3 Applicability">
                        <p className="mb-3">Apart from exempted companies, all companies must file DPT-3 if they receive:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                            <li>Deposits from directors and/members</li>
                            <li>Loans from any bank or third parties</li>
                            <li>Advanced money for goods or services (secured or unsecured)</li>
                        </ul>
                        <p className="font-bold text-[#0b1b3d] mb-2">Types of debts requiring DPT-3:</p>
                        <ul className="space-y-2">
                            <li><strong className="text-[#ff6f00]">Unsecured Debts:</strong> Loans without collateral.</li>
                            <li><strong className="text-[#ff6f00]">Secured Debts:</strong> Loans taken against collateral/security.</li>
                            <li><strong className="text-[#ff6f00]">External Borrowing:</strong> Borrowed from external sources like banks.</li>
                            <li><strong className="text-[#ff6f00]">Commercial Borrowings:</strong> Debts obtained for commercial purposes.</li>
                        </ul>
                    </SolidAccordion>

                    <SolidAccordion title="Which Transactions Are Not Considered under DPT-3?">
                        <p className="mb-3">The following transactions are not counted as deposits for DPT-3:</p>
                        <ul className="grid sm:grid-cols-2 gap-2">
                            <li className="flex items-start"><FiCheckSquare className="text-[#ff6f00] mr-2 mt-1 flex-shrink-0" /> Share Capital (from share trading)</li>
                            <li className="flex items-start"><FiCheckSquare className="text-[#ff6f00] mr-2 mt-1 flex-shrink-0" /> Debenture Issued (from investors)</li>
                            <li className="flex items-start"><FiCheckSquare className="text-[#ff6f00] mr-2 mt-1 flex-shrink-0" /> Government Receipts</li>
                            <li className="flex items-start"><FiCheckSquare className="text-[#ff6f00] mr-2 mt-1 flex-shrink-0" /> Advances on confirmed Orders</li>
                            <li className="flex items-start"><FiCheckSquare className="text-[#ff6f00] mr-2 mt-1 flex-shrink-0" /> Intercompany Loans</li>
                            <li className="flex items-start"><FiCheckSquare className="text-[#ff6f00] mr-2 mt-1 flex-shrink-0" /> Loans from Banks</li>
                            <li className="flex items-start"><FiCheckSquare className="text-[#ff6f00] mr-2 mt-1 flex-shrink-0" /> Employee Security Deposits</li>
                            <li className="flex items-start"><FiCheckSquare className="text-[#ff6f00] mr-2 mt-1 flex-shrink-0" /> Subscription deposits in advance</li>
                        </ul>
                    </SolidAccordion>
                </div>
            </section>

            {/* 3. DUE DATE & DOCUMENTS */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                    {/* Due Date Box */}
                    <div className="bg-[#233a85] rounded-2xl p-8 text-white shadow-xl flex flex-col justify-center">
                        <div className="flex items-center mb-4">
                            <FiCalendar className="w-10 h-10 text-[#ff6f00] mr-4" />
                            <h3 className="text-2xl font-bold">Due Date for DPT-3 Filing</h3>
                        </div>
                        <p className="text-blue-100 leading-relaxed mb-4">
                            The financial year in India usually starts on April 1st and ends on March 31st of the following year. Companies have to submit the report within 3 months of the closing of the financial year.
                        </p>
                        <div className="bg-[#1d3275] p-5 rounded-lg border border-[#30489e] text-center mt-4">
                            <p className="text-sm font-semibold text-blue-200 uppercase tracking-widest mb-1">Mandatory Deadline</p>
                            <p className="text-3xl font-extrabold text-[#ff6f00]">June 30th</p>
                            <p className="text-xs text-blue-100 mt-1">of the corresponding year</p>
                        </div>
                    </div>

                    {/* Documents Box */}
                    <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-xl flex flex-col justify-center">
                        <div className="flex items-center mb-6">
                            <FiFileText className="w-8 h-8 text-[#ff6f00] mr-3" />
                            <h3 className="text-2xl font-bold text-[#0b1b3d]">Documents Required</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <FiCheckCircle className="text-[#233a85] mt-1 mr-3 flex-shrink-0 w-5 h-5" />
                                <p className="text-sm text-gray-700"><strong>Certificate of the Auditor:</strong> Essential to furnish the DPT-3. Must show the company’s deposits and outstanding balance.</p>
                            </div>
                            <p className="text-xs font-bold text-[#ff6f00] uppercase mt-2 mb-1">Optional / Conditional Documents:</p>
                            <ul className="space-y-2 pl-8 list-disc text-sm text-gray-600">
                                <li>Proof of trust deed.</li>
                                <li>Instrument creating charge (if your company creates a charge of security interest on any asset).</li>
                                <li>Details of liquid assets (documents in support of money easily converted to cash).</li>
                                <li>List of depositors (if requested by MCA).</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* 4. PENALTIES SECTION (Grid) */}
            <section className="bg-[#fff5ef] py-16 px-4 border-y border-orange-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Penalty for Non-Compliance
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            In case any company fails to comply with Rules 16 and 16A of the Companies (Acceptance of Deposits) Rules, 2014, it may be heavily penalized under the Companies Act 2013.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#ff6f00] text-center hover:-translate-y-1 transition-transform">
                            <FiAlertTriangle className="w-10 h-10 text-[#ff6f00] mx-auto mb-3" />
                            <h3 className="font-bold text-[#0b1b3d] text-lg mb-2">Fine for The Company</h3>
                            <p className="text-sm text-gray-600">A fine of up to <strong className="text-[#233a85]">5,000 rupees</strong> may be charged by law against the non-compliant company.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#ff6f00] text-center hover:-translate-y-1 transition-transform">
                            <FiUsers className="w-10 h-10 text-[#ff6f00] mx-auto mb-3" />
                            <h3 className="font-bold text-[#0b1b3d] text-lg mb-2">Fine for Officers</h3>
                            <p className="text-sm text-gray-600">A fine of up to <strong className="text-[#233a85]">5,000 rupees</strong> may be charged by law for the officers involved in this noncompliance.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#233a85] text-center hover:-translate-y-1 transition-transform">
                            <FiClock className="w-10 h-10 text-[#233a85] mx-auto mb-3" />
                            <h3 className="font-bold text-[#0b1b3d] text-lg mb-2">Dispute Continuation</h3>
                            <p className="text-sm text-gray-600">If the dispute continues, each delayed day will be charged <strong className="text-[#ff6f00]">Rs. 500 per day</strong> along with the regular fee.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRICING PACKAGE */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Charges for Filing DPT-3
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-sm mx-auto">
                        <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-[#233a85]">
                            <div className="bg-[#233a85] text-white text-center py-3 font-bold text-sm tracking-widest uppercase">
                                Onetime Charge
                            </div>
                            <div className="p-8 text-center">
                                <p className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Professional Fee</p>
                                <div className="flex justify-center items-center text-5xl font-extrabold text-[#0b1b3d] mb-2">
                                    <BsCurrencyRupee className="w-8 h-8" />
                                    3,999
                                </div>
                                <p className="text-xs text-gray-500 font-bold mb-8">+ 18% GST</p>

                                <ul className="space-y-4 mb-8 text-left">
                                    <li className="flex items-center text-gray-700 font-medium">
                                        <FiFileText className="text-[#ff6f00] w-5 h-5 mr-3" />
                                        Complete DPT-3 Return Filing
                                    </li>
                                    <li className="flex items-center text-gray-700 font-medium">
                                        <FiActivity className="text-[#ff6f00] w-5 h-5 mr-3" />
                                        Call, Chat & Email Support
                                    </li>
                                    <li className="flex items-center text-gray-700 font-medium">
                                        <FiShield className="text-[#ff6f00] w-5 h-5 mr-3" />
                                        No hidden charges
                                    </li>
                                </ul>
                                <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold py-4 rounded-md shadow-lg transition-colors">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. HOW WE WORK (7-Step Stepper) */}
            <section className="bg-[#233a85] py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-white mb-4">
                            How We Work?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-10"></div>
                    </div>

                    {/* Wrap flex container to handle 7 items elegantly */}
                    <div className="flex flex-wrap justify-center gap-y-10 gap-x-2 md:gap-x-4 text-center relative z-10">
                        {[
                            "Associates Collect Information",
                            "Payment Is Done!",
                            "We Collect Documents From You",
                            "Our Expert Apply DPT-3 Online",
                            "DPT-3 Submission to MCA Successful",
                            "We’ll Track Your Application Status",
                            "Congrats! Your DPT-3 Filing Is Accepted!"
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[130px] md:w-[140px]">
                                    <div className="w-14 h-14 bg-white text-[#233a85] rounded-full flex items-center justify-center font-extrabold text-xl mb-4 shadow-lg border-4 border-[#ff6f00]">
                                        {index + 1}
                                    </div>
                                    <p className="text-[12px] md:text-[13px] font-semibold text-blue-50 leading-snug">{step}</p>
                                </div>
                                {index !== arr.length - 1 && (
                                    <div className="hidden lg:flex items-center mt-4 text-[#ff6f00]">
                                        <FiArrowRight className="w-6 h-6" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. WHY US? */}
            <section className="bg-white py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Why Us?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
                        {[
                            { icon: <BsBuilding />, title: "Recognized by Govt. of India" },
                            { icon: <FiUsers />, title: "5 Lakh+ Happy Customers" },
                            { icon: <FiAward />, title: "ISO 9001: 2015 Certified" },
                            { icon: <FiShield />, title: "Personal Data Security & Trust" },
                            { icon: <FiCalendar />, title: "Expert Support" },
                            { icon: <FiClock />, title: "Quick Services Assured" },
                            { icon: <BsShieldCheck />, title: "Challenging Prices Across India" },
                            { icon: <FiActivity />, title: "Quick Response Team" },
                            { icon: <FiStar />, title: "Excellent Reviews & Ratings" }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-[#f8f9fc] rounded-full flex items-center justify-center text-[#233a85] text-2xl mb-3 border border-gray-200 shadow-sm">
                                    {feature.icon}
                                </div>
                                <p className="font-bold text-[#0b1b3d] text-xs uppercase tracking-wide">{feature.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. POPULAR SERVICES */}
            <section className="bg-[#f8f9fc] py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Popular Services
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            { icon: <FiAward />, title: "Trademark Registration" },
                            { icon: <FiBriefcase />, title: "GST Registration" },
                            { icon: <FiGlobe />, title: "Import Export Code" },
                            { icon: <BsBuilding />, title: "FSSAI License" },
                            { icon: <FiUsers />, title: "Company Registration" }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer">
                                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-[#ff6f00] text-xl mb-3">
                                    {service.icon}
                                </div>
                                <h4 className="font-bold text-[#0b1b3d] text-[13px]">{service.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. FAQs */}
            <section className="py-20 px-4 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <Accordion title="What is the purpose of filing DPT-3?" defaultOpen={true}>
                            DPT-3 is a form that needs to be duly filled out to submit the return of deposits. Companies must file it, mentioning the deposits and/or outstanding receipts of loans, due loan amounts, and so on. It ensures transparency regarding outstanding money or loans to the Ministry of Corporate Affairs (MCA).
                        </Accordion>
                        <Accordion title="What happens if DPT-3 is not filed?">
                            Non-compliance can lead to hefty fines. The company and the responsible officers can be fined up to Rs. 5,000. If the default continues, a further fine of Rs. 500 per day applies for every day the default continues.
                        </Accordion>
                        <Accordion title="What is the due date for filing form DPT-3?">
                            The due date for DPT-3 submission is June 30th of every year, reporting the deposits and outstanding receipts as of March 31st of that same year.
                        </Accordion>
                        <Accordion title="Who is exempt from filing DPT-3?">
                            Government Companies, Banking Companies regulated by the RBI, Non-Banking Financial Companies (NBFCs), and Housing Finance Companies (HFCs) are exempt from filing DPT-3.
                        </Accordion>
                        <Accordion title="Is auditor DSC mandatory for DPT-3?">
                            Yes, in many cases, especially when reporting deposits, an Auditor's Certificate is required, and the digital signature (DSC) of the auditor is mandatory to authenticate the details furnished in the form.
                        </Accordion>
                    </div>
                </div>
            </section>

        </div>
    );
}