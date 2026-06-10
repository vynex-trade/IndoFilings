"use client";

import React, { useState } from "react";
import {
    FiArrowRight,
    FiChevronDown,
    FiPlus,
    FiMinus,
    FiCheckCircle,
    FiCloud,
    FiBookOpen,
    FiFileText,
    FiDatabase,
    FiSmartphone,
    FiLock,
    FiPhoneCall,
    FiDollarSign,
    FiUsers
} from "react-icons/fi";
import { BsCurrencyRupee } from "react-icons/bs";

// --- Outline Accordion (FAQs) ---
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

// --- Solid Blue Accordion (Intro) ---
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

export default function BookkeepingPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HEADER SECTION */}
            <section className="pt-16 pb-10 px-4 text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1b3d] mb-4 leading-tight">
                    Outsource your Accounting Service
                </h1>
                <p className="text-gray-600 font-medium text-lg">
                    Let India’s Recommended Accountants Organize, Prepare and Analyze your Financial Transactions | Easy & Quick Cloud-based Bookkeeping Procedure
                </p>
            </section>

            {/* 2. MAIN CONTENT (Form Left, Accordions Right) */}
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <div className="grid md:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Lead Form + Stats */}
                    <div className="md:col-span-5">
                        <div className="bg-[#fcfcfc] p-7 rounded-sm shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-200">
                            <h3 className="text-xl font-bold text-[#0b1b3d] mb-1">
                                Need Help with Online Bookkeeping?
                            </h3>
                            <p className="text-xs text-gray-500 mb-6">
                                Fill Up the below Form
                            </p>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile</label>
                                    <input
                                        type="tel"
                                        placeholder="Mobile No."
                                        className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-gray-600 mb-1 block">State</label>
                                    <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] text-gray-600 bg-white">
                                        <option value="">Select State</option>
                                        <option value="MH">Maharashtra</option>
                                        <option value="DL">Delhi</option>
                                        <option value="KA">Karnataka</option>
                                    </select>
                                </div>

                                {/* Checkbox */}
                                <div className="flex items-start mt-2">
                                    <input type="checkbox" className="mt-1 mr-2 cursor-pointer accent-[#233a85]" defaultChecked />
                                    <p className="text-[10px] text-gray-500 leading-tight">
                                        I have read & agreed to the company's Terms and Conditions, disclaimer and refund policy, and also ready to accept calls, SMS, emails, etc.
                                    </p>
                                </div>

                                <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3 rounded transition-colors shadow-md mt-4">
                                    Get Started
                                </button>
                            </form>
                        </div>

                        {/* Stat Cards */}
                        <div className="grid grid-cols-2 gap-3 mt-4">
                            <div className="bg-[#233a85] text-white rounded-lg p-4 text-center shadow-md">
                                <p className="font-extrabold text-xl">5 Lac+</p>
                                <p className="text-[11px] text-blue-200 font-medium">Happy Clients</p>
                            </div>
                            <div className="bg-[#ff6f00] text-white rounded-lg p-4 text-center shadow-md">
                                <p className="font-extrabold text-xl">Easy EMI</p>
                                <p className="text-[11px] text-orange-100 font-medium">Options</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Accordions */}
                    <div className="md:col-span-7 pt-2">
                        <SolidAccordion title="What is the Bookkeeping Process?" defaultOpen={true}>
                            Bookkeeping is a concept of the modern accounting process maintaining data of financial transactions that include sales, purchases, receipts, and payments. It is used to Record, Analyze, and Prepare financial transactions, statements on a daily basis of a business entity. It is a set of corresponding entries that abide by the rules of GAAP (Generally Accepted Accounting Principles).
                        </SolidAccordion>

                        <SolidAccordion title="Is Bookkeeping mandatory?">
                            Yes, It is mandatory to keep the record of each transaction. All the books record needs to keep safe for the last 7 years.
                        </SolidAccordion>

                        <SolidAccordion title="Why is Bookkeeping Essential?">
                            Bookkeeping is essential for tracking the financial health of a business, ensuring accurate tax filing, maintaining compliance with legal requirements, and providing a clear picture of profits, losses, and cash flow to stakeholders and investors.
                        </SolidAccordion>

                        <SolidAccordion title="What is the service charge, and how much will I need to pay?">
                            Our service charges are designed to be highly competitive and depend on the volume of transactions and the complexity of your business. Contact us for a customized quote tailored to your specific accounting needs.
                        </SolidAccordion>
                    </div>

                </div>
            </section>

            {/* 3. BENEFITS (3x3 Grid with Icons) */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Benefits of Managing Bookkeeping from Online Legal India
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <FiCloud className="w-8 h-8" />,
                                title: "Cloud-based Accounting System",
                                desc: "Access your books from anywhere, anytime with our secure cloud-based platform."
                            },
                            {
                                icon: <FiBookOpen className="w-8 h-8" />,
                                title: "Bank Reconciliation Statement",
                                desc: "Accurate matching of bank statements with your books ensures zero discrepancies."
                            },
                            {
                                icon: <FiDatabase className="w-8 h-8" />,
                                title: "Detailed Record Maintenance",
                                desc: "Comprehensive and organized maintenance of all financial records for easy retrieval."
                            },
                            {
                                icon: <FiFileText className="w-8 h-8" />,
                                title: "Financial Transactions Record",
                                desc: "Systematic record-keeping of all financial transactions including sales, purchases, and payments."
                            },
                            {
                                icon: <FiSmartphone className="w-8 h-8" />,
                                title: "Digital Access from Any Location",
                                desc: "Access your financial data on the go from any device with internet connectivity."
                            },
                            {
                                icon: <FiLock className="w-8 h-8" />,
                                title: "Security for Financial Records",
                                desc: "Your sensitive financial data is protected with enterprise-grade encryption and security protocols."
                            },
                            {
                                icon: <FiCheckCircle className="w-8 h-8" />,
                                title: "Free Consultations",
                                desc: "Readily available free consultations with our expert accountants whenever you need."
                            },
                            {
                                icon: <FiPhoneCall className="w-8 h-8" />,
                                title: "Call, E-mail, Chat Support",
                                desc: "Multi-channel customer support to assist you with queries at any time."
                            },
                            {
                                icon: <FiDollarSign className="w-8 h-8" />,
                                title: "Unbeatable Price",
                                desc: "Recommendable professional bookkeeping service at the most competitive price across India."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-[#233a85] mr-4 flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0b1b3d] mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. HOW WE WORK (Stepper - 4 Steps) */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            How Do We Work?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 text-center relative z-10">
                        {[
                            "Fill the Form",
                            "Talk to Our Expert",
                            "Make the Payment Done",
                            "Online Accountant will be assigned to you"
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[200px]">
                                    <div className="w-16 h-16 bg-[#233a85] text-white rounded-full flex items-center justify-center font-extrabold text-2xl mb-4 shadow-lg border-4 border-blue-100">
                                        {index + 1}
                                    </div>
                                    <p className="text-[14px] font-bold text-[#0b1b3d] leading-snug">{step}</p>
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

            {/* 5. FAQs */}
            <section className="py-20 px-4 bg-[#f8f9fc] border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <Accordion title="What is Bookkeeping?" defaultOpen={true}>
                            Bookkeeping is the concept of the modern accounting process. It is used to record, analyze and prepare the financial transactions, statements on a daily basis of a business entity. It involves systematic recording of sales, purchases, receipts, and payments following GAAP principles.
                        </Accordion>
                        <Accordion title="Why is Bookkeeping required?">
                            Bookkeeping is essential for maintaining accurate financial records, ensuring compliance with tax regulations, tracking profitability and cash flow, making informed business decisions, and simplifying the annual audit and tax filing process.
                        </Accordion>
                        <Accordion title="Which are the required documents for the Bookkeeping process?">
                            The essential documents include bank statements, invoices (sales and purchase), receipts, payment vouchers, expense claims, and any other financial transaction records relevant to your business operations.
                        </Accordion>
                        <Accordion title="What is the difference between Bookkeeping and Accounting?">
                            Bookkeeping is the process of recording daily financial transactions in a systematic manner. Accounting, on the other hand, involves interpreting, classifying, summarizing, and reporting the financial data recorded through bookkeeping to provide meaningful insights for business decisions.
                        </Accordion>
                        <Accordion title="Is it mandatory to produce all the records, documents physically for Bookkeeping?">
                            No, with our advanced cloud-based accounting system, you can upload digital copies of your documents. Our platform is designed to handle digital records seamlessly, making the entire bookkeeping process remote and paperless.
                        </Accordion>
                    </div>
                </div>
            </section>

        </div>
    );
}