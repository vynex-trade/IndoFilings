"use client";

import React, { ReactNode, useState } from 'react';

type AccordionItemProps = {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
};

// --- Reusable Accordion Component for FAQs ---
const AccordionItem = ({ title, children, defaultOpen = false }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border border-gray-200 rounded-lg bg-white mb-3 shadow-sm transition-all duration-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-bold text-[#243c7c] focus:outline-none hover:bg-gray-50"
            >
                <span className="text-[15px] md:text-base pr-4">{title}</span>
                <span className="text-[#ff7600] text-2xl font-light leading-none shrink-0">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {children}
                </div>
            )}
        </div>
    );
};

export default function FssaiRegistration() {
    return (
        <div className="font-sans bg-gray-50 min-h-screen flex flex-col">

            {/* 1. HERO SECTION */}
            <section className="bg-[#243c7c] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#243c7c] to-[#1c3065]"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -translate-y-20 translate-x-20"></div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-white">
                        <div className="inline-flex items-center bg-orange-500/20 text-[#ff7600] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6 border border-[#ff7600]/30 uppercase">
                            <span className="w-2 h-2 bg-[#ff7600] rounded-full mr-2 animate-pulse"></span>
                            FSSAI Approved Service
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                            FSSAI Registration <br />
                            <span className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 block">
                                & Food License Online
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-100 mt-6 leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-4">
                            Register FSSAI with our support for certificates and licenses to run your food business flawlessly with perfect compliance.
                        </p>

                        <ul className="mt-8 space-y-3">
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3">✓</span>
                                100% Online & Paperless Process
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3">✓</span>
                                Expert Documentation & Filing
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3">✓</span>
                                Prevents Legal Penalties & Fines
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 md:p-8 border-t-4 border-[#ff7600]">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-[#243c7c]">Get Your Food License</h2>
                                <p className="text-sm text-gray-500 mt-1">Fill the form for free expert consultation</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name *"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Mobile Number *"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email Address *"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]"
                                    />
                                </div>
                                <div>
                                    <select
                                        required
                                        defaultValue=""
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px] text-gray-600 appearance-none"
                                    >
                                        <option value="" disabled>Select State *</option>
                                        <option value="maharashtra">Maharashtra</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="karnataka">Karnataka</option>
                                        <option value="gujarat">Gujarat</option>
                                        <option value="tamil-nadu">Tamil Nadu</option>
                                        <option value="other">Other State</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-500/30 transition transform hover:-translate-y-0.5 mt-2 text-base"
                                >
                                    Apply Now
                                </button>
                            </form>

                            <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-gray-100">
                                <span className="text-xl">🛡️</span>
                                <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Your data is safe & secure</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. WHY CHOOSE US (Trust Bar) */}
            <section className="bg-white border-b border-gray-200 py-10">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-[#243c7c] text-3xl mb-2">📜</div>
                        <h3 className="font-bold text-gray-800">Legal Compliance</h3>
                        <p className="text-xs text-gray-500 mt-1">100% Govt. Compliant</p>
                    </div>
                    <div>
                        <div className="text-[#243c7c] text-3xl mb-2">⏱️</div>
                        <h3 className="font-bold text-gray-800">Quick Processing</h3>
                        <p className="text-xs text-gray-500 mt-1">Fast Document Filing</p>
                    </div>
                    <div>
                        <div className="text-[#243c7c] text-3xl mb-2">👨‍💼</div>
                        <h3 className="font-bold text-gray-800">Expert Guidance</h3>
                        <p className="text-xs text-gray-500 mt-1">Dedicated FSSAI Experts</p>
                    </div>
                    <div>
                        <div className="text-[#243c7c] text-3xl mb-2">🏷️</div>
                        <h3 className="font-bold text-gray-800">Brand Trust</h3>
                        <p className="text-xs text-gray-500 mt-1">Gain Customer Confidence</p>
                    </div>
                </div>
            </section>

            {/* 3. TYPES OF FSSAI LICENSES (Pricing/Tier Cards) */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Types of FSSAI Food Licenses</h2>
                        <div className="w-20 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Depending on your annual turnover and scale of business, you will fall into one of these three categories.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Basic Registration */}
                        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-gray-100 py-4 text-center border-b border-gray-200">
                                <h3 className="text-xl font-bold text-[#243c7c]">Basic Registration</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-sm font-semibold text-gray-500 mb-4 h-12 text-center">For petty food businesses with an annual turnover up to <br /><span className="text-[#ff7600] text-lg block mt-1">₹ 12 Lakhs</span></p>
                                <ul className="text-sm text-gray-600 space-y-3 mb-8">
                                    <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Small scale manufacturers</li>
                                    <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Retailers & local vendors</li>
                                    <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Temporary stall holders</li>
                                </ul>
                                <button className="w-full bg-transparent border-2 border-[#243c7c] text-[#243c7c] font-bold py-3 rounded-md hover:bg-[#243c7c] hover:text-white transition duration-300">
                                    Apply for Basic
                                </button>
                            </div>
                        </div>

                        {/* State License */}
                        <div className="bg-white rounded-xl shadow-xl border-2 border-[#ff7600] overflow-hidden hover:shadow-2xl transition-shadow transform md:-translate-y-4 relative">
                            <div className="bg-[#ff7600] text-center py-1">
                                <span className="text-white text-xs font-bold uppercase tracking-widest">Most Common</span>
                            </div>
                            <div className="bg-[#243c7c] py-4 text-center">
                                <h3 className="text-xl font-bold text-white">State License</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-sm font-semibold text-gray-500 mb-4 h-12 text-center">For medium-sized businesses with an annual turnover between <br /><span className="text-[#ff7600] text-lg block mt-1">₹ 12 Lakhs to ₹ 20 Cr</span></p>
                                <ul className="text-sm text-gray-600 space-y-3 mb-8">
                                    <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Mid-sized manufacturers</li>
                                    <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Large restaurants & hotels</li>
                                    <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Distributors & transporters</li>
                                </ul>
                                <button className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3 rounded-md shadow-lg transition duration-300">
                                    Apply for State
                                </button>
                            </div>
                        </div>

                        {/* Central License */}
                        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-gray-100 py-4 text-center border-b border-gray-200">
                                <h3 className="text-xl font-bold text-[#243c7c]">Central License</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-sm font-semibold text-gray-500 mb-4 h-12 text-center">For large scale businesses with an annual turnover above <br /><span className="text-[#ff7600] text-lg block mt-1">₹ 20 Crores</span></p>
                                <ul className="text-sm text-gray-600 space-y-3 mb-8">
                                    <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Importers & Exporters</li>
                                    <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> 100% Export Oriented Units</li>
                                    <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> E-commerce operators</li>
                                </ul>
                                <button className="w-full bg-transparent border-2 border-[#243c7c] text-[#243c7c] font-bold py-3 rounded-md hover:bg-[#243c7c] hover:text-white transition duration-300">
                                    Apply for Central
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. WHO NEEDS FSSAI? & DOCUMENTS */}
            <section className="py-16 px-4 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Who needs it */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#243c7c] mb-6">Who requires an FSSAI License?</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-8"></div>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                            According to the Food Safety and Standards Act, 2006, obtaining an FSSAI license is mandatory for any entity involved in the food supply chain.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "Restaurants & Cafes",
                                "Cloud Kitchens (Zomato/Swiggy)",
                                "Food Manufacturers",
                                "Retailers & Grocers",
                                "Food Importers & Exporters",
                                "Food Transporters & Distributors"
                            ].map((item, i) => (
                                <div key={i} className="bg-gray-50 p-3 rounded border border-gray-100 text-sm font-semibold text-[#243c7c] flex items-center">
                                    <span className="text-[#ff7600] mr-2">✔</span> {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Documents Required */}
                    <div className="bg-[#243c7c] text-white p-8 rounded-2xl shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 text-[#ff7600]">Documents Required</h2>
                        <p className="text-sm text-blue-100 mb-6">Keep these soft copies ready for a smooth online registration process:</p>

                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0 text-lg">📄</div>
                                <div>
                                    <h4 className="font-bold text-sm">Identity Proof</h4>
                                    <p className="text-xs text-blue-200 mt-1">Aadhaar Card, Voter ID, or Passport of the proprietor/directors.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0 text-lg">🏦</div>
                                <div>
                                    <h4 className="font-bold text-sm">Address Proof</h4>
                                    <p className="text-xs text-blue-200 mt-1">Utility bills (electricity/water) or Rent Agreement for the business premise.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0 text-lg">📸</div>
                                <div>
                                    <h4 className="font-bold text-sm">Passport Size Photo</h4>
                                    <p className="text-xs text-blue-200 mt-1">Recent photograph of the applicant.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0 text-lg">📝</div>
                                <div>
                                    <h4 className="font-bold text-sm">Business Registration Proof</h4>
                                    <p className="text-xs text-blue-200 mt-1">(Only for State/Central) GST certificate, Incorporation certificate, or Partnership deed.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* 5. FAQs */}
            <section className="bg-gray-50 py-16 px-4 border-t border-gray-200 mt-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Frequently Asked Questions (FAQs)</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4 mb-8"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="Is FSSAI Registration mandatory for selling food online?" defaultOpen={true}>
                            <p>Yes. If you wish to sell food through platforms like Zomato, Swiggy, Amazon, or your own website, possessing a valid 14-digit FSSAI registration number is strictly mandatory.</p>
                        </AccordionItem>

                        <AccordionItem title="What is the validity of an FSSAI License?">
                            <p>An FSSAI License or Registration can be issued for a period ranging from <strong>1 year to 5 years</strong>, depending on what you apply for. You must renew it before it expires to avoid penalties.</p>
                        </AccordionItem>

                        <AccordionItem title="What happens if I don't get an FSSAI License?">
                            <p>Operating a food business without a valid FSSAI license is a legal offense. It can lead to severe penalties, including imprisonment of up to 6 months and fines up to ₹5,00,000.</p>
                        </AccordionItem>

                        <AccordionItem title="Do I need to physically visit the FSSAI office?">
                            <p>No! With our expert assistance, the entire FSSAI registration process is conducted 100% online through the government's FoSCoS portal. You just need to provide soft copies of your documents.</p>
                        </AccordionItem>

                        <AccordionItem title="What is the difference between FSSAI Basic, State, and Central?">
                            <p>It is based on business turnover. <strong>Basic</strong> is for businesses under ₹12 Lakhs/year. <strong>State</strong> is for businesses between ₹12 Lakhs and ₹20 Crores/year. <strong>Central</strong> is for businesses over ₹20 Crores/year or those involved in importing/exporting.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}