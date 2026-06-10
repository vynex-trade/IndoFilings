"use client";

import React, { useState } from "react";
import {
    FiArrowRight,
    FiChevronDown,
    FiPlus,
    FiMinus,
    FiFileText,
    FiClipboard,
    FiTrendingUp,
    FiGlobe,
    FiCheckCircle,
    FiBriefcase
} from "react-icons/fi";
import { BsShieldCheck, BsFileEarmarkText } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";

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

// --- Solid Blue Accordion (Used for Hero Section - Replaces the Green) ---
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

export default function GSTR9FilingPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

            {/* 1. HEADER SECTION */}
            <section className="pt-16 pb-10 px-4 text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1b3d] mb-4 leading-tight">
                    File Your Annual GSTR-9 Return Online with India’s Very Own Business Solution Portal
                </h1>
                <p className="text-gray-600 font-medium text-lg">
                    Our Tax Experts are Never Late in Filing Annual GSTR-9 for You | Get 360° Professional Guidance in Each Step from Collecting Documents to GST Filing.
                </p>
            </section>

            {/* 2. MAIN CONTENT (Form on Left, Solid Accordions on Right) */}
            <section className="max-w-6xl mx-auto px-4 pb-20">
                <div className="grid md:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Lead Form */}
                    <div className="md:col-span-5 bg-white p-7 rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-100">
                        <h3 className="text-xl font-bold text-[#0b1b3d] mb-1">
                            Need Help with Filing GSTR-9 Annual Return?
                        </h3>
                        <p className="text-xs text-gray-500 mb-6">
                            Fill Up the below Mentioned Form
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    placeholder="Your Phone Number (Without 0 or +91)"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">State <span className="text-red-500">*</span></label>
                                <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] text-gray-600 bg-white">
                                    <option value="">State</option>
                                    <option value="MH">Maharashtra</option>
                                    <option value="DL">Delhi</option>
                                    <option value="KA">Karnataka</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Annual Turnover Range <span className="text-red-500">*</span></label>
                                <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] text-gray-600 bg-white">
                                    <option value="">Select Annual Turnover Range</option>
                                    <option value="upto2cr">Up to Rs 2Cr</option>
                                    <option value="2cr-5cr">Rs 2Cr to 5Cr</option>
                                    <option value="above5cr">Above Rs 5Cr</option>
                                </select>
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-start mt-2">
                                <input type="checkbox" className="mt-1 mr-2 cursor-pointer accent-[#233a85]" defaultChecked />
                                <p className="text-[10px] text-gray-500 leading-tight">
                                    I have read & agreed to the company's Terms and Conditions, disclaimer and refund policy, and also ready to accept calls, SMS, emails, etc.
                                </p>
                            </div>

                            {/* Captcha */}
                            <div className="flex items-center gap-3 pt-2">
                                <div className="bg-gray-200 text-xl tracking-[0.3em] font-serif italic font-bold px-6 py-2 border border-gray-300 rounded shadow-inner text-gray-700 select-none">
                                    9 6 1 9
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter the captcha here.."
                                    className="flex-grow border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3 rounded transition-colors shadow-md mt-4">
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: Information & Solid Accordions */}
                    <div className="md:col-span-7 pt-2">
                        <p className="text-gray-700 text-[14.5px] mb-6 leading-relaxed text-justify">
                            As per the Central Goods and Services Act, 2017, every registered business entity is mandated to file GSTR-9 annually. GSTR-9 contains information about all the sales, purchases, refunds, or input tax credit by all tax-payers, Special Economic Zone (SEZ) units, SEZ developers, and many more.
                        </p>

                        <SolidAccordion title="Who is Liable for GSTR-9 Filing and what is the Due Date?" defaultOpen={true}>
                            <p className="mb-3">
                                Under the new GST Regime, Voluntarily you can file your GSTR-9 for tax returns but it is mandatory above Rs 2Cr and mandatory above Rs 5Cr alongwith GSTR-9C for GST Audit.
                            </p>
                            <p>
                                The GST Return should be Filed within October 31 for the previous Financial Year period. However, the scheduled date for GSTR-9 filing can be altered or extended as per the ongoing notifications from Government of India.
                            </p>
                        </SolidAccordion>

                        <SolidAccordion title="Late Fees/Penalty for not Filing GSTR-9 On Time">
                            <p>
                                An individual or entity is liable to pay Rs. 200 per day from the scheduled last date of filing for not submitting GSTR-9 on time. As per the GST Act, 2017 of our Indian Govt. the penalty amount will be levied cumulatively with an interest at 18% per annum rate.
                            </p>
                        </SolidAccordion>

                        <SolidAccordion title="Benefits of Filing GSTR-9 with Online Legal India">
                            <ul className="space-y-2">
                                {[
                                    "Most Efficient Panel of GST Experts will be Filing and Managing your GST Return",
                                    "In-house Expert Panel always at your disposal for in-depth Tax-Audits",
                                    "Step-by-step Online guidance to get GST Certificate and Carrying Out Filing Process",
                                    "Customer Support available in 6 different languages including English",
                                    "Complete Digital Assistance in Filing all 26 Annual GST processes",
                                    "Free Consultations Available at Just a Click!",
                                    "Quickest Service at an Unbeatable Price",
                                    "Call, E-mail, Chat Support"
                                ].map((benefit, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-700">
                                        <FiCheckCircle className="text-[#ff6f00] mr-2 mt-0.5 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </SolidAccordion>
                    </div>

                </div>
            </section>

            {/* 3. WHY YOU MUST FILE GSTR-9 ON TIME (Grid) */}
            <section className="bg-white py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Why You Must File Annual GSTR-9 On Time?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <BsShieldCheck className="w-10 h-10 text-[#ff6f00]" />,
                                title: "Abolition of the Cascading Effect",
                                desc: "GSTR-9 filing simplifies the entire tax process by eliminating all the tax-on-tax or the cascading method."
                            },
                            {
                                icon: <FiTrendingUp className="w-10 h-10 text-[#ff6f00]" />,
                                title: "An Organized Taxation System",
                                desc: "The business identities are allowed here to pay the entire tax amount at a single time. GST return filing has replaced the chaotic older tax system."
                            },
                            {
                                icon: <FiGlobe className="w-10 h-10 text-[#ff6f00]" />,
                                title: "Business Opportunities",
                                desc: "By the collaboration of the Indian tax system, the business entities are now enjoying a nationwide market without paying different taxes to the State Governments."
                            },
                            {
                                icon: <FaRegLightbulb className="w-10 h-10 text-[#ff6f00]" />,
                                title: "Assisting Your Own Entity",
                                desc: "The preceding VAT was compulsory for any company with an annual turnover of Rs 5,00,000. GSTR-9 return filing has replaced VAT, benefiting entities especially SEZ Units."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                                <div className="flex justify-center mb-4">{item.icon}</div>
                                <h3 className="font-bold text-[#0b1b3d] mb-3">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. REQUIRED DOCUMENTS */}
            <section className="bg-[#f0f4fd] py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Required Documents for Annual GSTR-9 Filing
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        {[
                            {
                                icon: <FiTrendingUp className="w-6 h-6 text-[#233a85]" />,
                                title: "Inward and Outward Supplies",
                                desc: "Details of total Inward and Outward Supplies in the scheduled Financial Year"
                            },
                            {
                                icon: <FiFileText className="w-6 h-6 text-[#233a85]" />,
                                title: "Income Tax",
                                desc: "Income Tax Credit Ledger for the scheduled Financial Year"
                            },
                            {
                                icon: <FiBriefcase className="w-6 h-6 text-[#233a85]" />,
                                title: "GSTIN of Business Entity",
                                desc: "GST Identification Number of the Business Entity or Seller"
                            },
                            {
                                icon: <FiClipboard className="w-6 h-6 text-[#233a85]" />,
                                title: "GST Reconciliation Statement",
                                desc: "Detailed GST Reconciliation Statement for the period"
                            },
                            {
                                icon: <BsFileEarmarkText className="w-6 h-6 text-[#233a85]" />,
                                title: "Other Documents",
                                desc: "Details of the Block Credit, Capital Goods, and related documents"
                            }
                        ].map((doc, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-all">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                                    {doc.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#0b1b3d] mb-2">{doc.title}</h3>
                                <p className="text-[14px] text-gray-500 leading-relaxed font-medium">{doc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. HOW WE WORK (Stepper) */}
            <section className="bg-white py-16 px-6 border-b border-gray-200">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            How We Work?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-10"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 text-center relative z-10">
                        {[
                            "Fill up the Form to Complete the Payment",
                            "Receive the Call from our Tax Experts",
                            "Upload the Details & Documents",
                            "Expert Preparations & Your Approval",
                            "Successful GSTR-9 Filing Complete"
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[160px] lg:w-[180px]">
                                    <div className="w-14 h-14 bg-[#233a85] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg border-4 border-blue-100">
                                        {index + 1}
                                    </div>
                                    <p className="text-[14px] font-bold text-[#0b1b3d]">{step}</p>
                                </div>
                                {index !== arr.length - 1 && (
                                    <>
                                        <FiArrowRight className="hidden lg:block w-8 h-8 text-[#ff6f00] flex-shrink-0" />
                                        <FiChevronDown className="lg:hidden w-8 h-8 text-[#ff6f00]" />
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQs */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Frequently Asked Questions (FAQ)
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <Accordion title="What is the due date of GSTR-9 Filing?" defaultOpen={true}>
                            The due date of GSTR-9 is October 31 every year. However, the scheduled date for GSTR-9 filing can be altered or extended as per the ongoing notifications from Government of India.
                        </Accordion>
                        <Accordion title="Can I revise my already filed GSTR-9?">
                            No, currently the facility to revise a submitted GSTR-9 form is not available on the GST portal. You must ensure all data is accurate before filing.
                        </Accordion>
                        <Accordion title="What happens if GSTR-9 is not filed within the scheduled time?">
                            Late filing attracts a penalty of Rs. 200 per day (Rs. 100 SGST + Rs. 100 CGST) along with 18% per annum interest calculated on the tax payable.
                        </Accordion>
                        <Accordion title="After filing the GSTR-9, will I be able to pay my taxes?">
                            Yes, any additional tax liability identified during the GSTR-9 filing process can be paid using Form DRC-03.
                        </Accordion>
                    </div>
                </div>
            </section>

        </div>
    );
}