"use client";

import React, { useState } from 'react';
import Image from 'next/image';

type AccordionItemProps = {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
};

// --- Reusable Accordion Component ---
const AccordionItem = ({ title, children, defaultOpen = false }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border border-gray-200 rounded-md bg-white mb-3 shadow-sm transition-all duration-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-bold text-[#243c7c] focus:outline-none"
            >
                <span className="text-lg">{title}</span>
                <span className="text-[#ff7600] text-2xl font-light leading-none">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {children}
                </div>
            )}
        </div>
    );
};

export default function FssaiRenewalPage() {
    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#243c7c] py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Hero Copy */}
                    <div className="text-white space-y-6">
                        <div className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2 animate-pulse">
                            Urgent action required
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                            FSSAI License Renewal Online <br />
                            <span className="text-[#ff7600] text-2xl md:text-3xl lg:text-4xl block mt-3 font-semibold tracking-normal">| Easy Food License Renewal Support</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 font-medium max-w-xl border-l-4 border-[#ff7600] pl-4 py-1">
                            FSSAI license is mandatory to be renewed before the expiry validity time, otherwise, apply for a new license.
                        </p>
                    </div>

                    {/* Right Side: Lead Form */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md text-gray-800 border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">Need Help with FSSAI Food License Renewal?</h2>
                                <p className="text-sm text-gray-500">Fill Up the below Mentioned Form</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Name *</label>
                                    <input type="text" placeholder="Your Name" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email *</label>
                                    <input type="email" placeholder="Your Email Address" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mobile *</label>
                                    <input type="tel" placeholder="Without 0 or +91" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Select State *</label>
                                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm text-gray-600 appearance-none transition-all" required defaultValue="">
                                        <option value="" disabled>Select State</option>
                                        <option value="andhra-pradesh">Andhra Pradesh</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="karnataka">Karnataka</option>
                                        <option value="maharashtra">Maharashtra</option>
                                        <option value="tamil-nadu">Tamil Nadu</option>
                                        <option value="telangana">Telangana</option>
                                        <option value="uttar-pradesh">Uttar Pradesh</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-md transition duration-300 mt-4 shadow-lg text-base">
                                    Apply Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. INFORMATION / FAQ SECTION */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Important Information</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="Penalty for Non-Renewal of FSSAI License" defaultOpen={true}>
                            <p className="mb-2 text-red-600 font-semibold">Do not let your license expire!</p>
                            <p>
                                If a Food Business Operator (FBO) fails to renew their FSSAI license before its expiration date, they will be liable to pay a penalty. A late fee is charged for every single day of delay.
                            </p>
                            <p className="mt-2">
                                If the renewal is not filed within the specified grace period after expiration, the license will be automatically cancelled. In such a scenario, the business must completely stop its operations until a brand new FSSAI license is applied for and granted.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Difference between FSSAI & Food License?">
                            <p>
                                <strong className="text-gray-800">There is no difference between FSSAI, FoSCoS, and Food License.</strong>
                                <br /><br />
                                These terms are used interchangeably. FSSAI (Food Safety and Standards Authority of India) is the governing body that issues the Food License. FoSCoS (Food Safety Compliance System) is simply the upgraded online portal launched by the government in 2020 to process these licenses and renewals.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="What are the different types of License?">
                            <p className="mb-3">Depending on the scale and turnover of your food business, the renewal will fall under one of three categories:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Basic Registration:</strong> For petty food businesses with an annual turnover of up to Rs. 12 Lakhs.</li>
                                <li><strong>State License:</strong> For medium-sized businesses with an annual turnover between Rs. 12 Lakhs and Rs. 20 Crores.</li>
                                <li><strong>Central License:</strong> For large businesses, importers, exporters, and operators with an annual turnover exceeding Rs. 20 Crores.</li>
                            </ul>
                        </AccordionItem>
                    </div>
                </div>
            </section>

            {/* 3. SAMPLE CERTIFICATE SECTION */}
            <section className="py-16 px-4 bg-white border-t border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-8">
                        FSSAI Certificate Sample
                    </h2>

                    <div className="bg-gray-50 p-4 rounded-xl shadow-md border border-gray-200 inline-block">
                        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
                            <Image
                                src="/fssai.jpg"
                                alt="FSSAI Certificate Sample"
                                width={189}
                                height={267}
                                className="rounded-lg"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}