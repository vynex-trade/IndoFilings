"use client";

import React, { useState } from 'react';

// --- Reusable Accordion Component ---
type AccordionItemProps = {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
};

const AccordionItem = ({ title, children, defaultOpen = false }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border border-gray-200 rounded-md bg-white mb-3 shadow-sm transition-all duration-200">
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

export default function FssaiAnnualReturn() {
    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#243c7c] py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Hero Copy */}
                    <div className="text-white space-y-6">
                        <div className="inline-block bg-[#1c3065] text-green-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-blue-800">
                            🛡️ 100% Online & Safe From Home
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                            File your FSSAI <br className="hidden md:block" />
                            <span className="text-[#ff7600]">Annual Return</span> Online
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 font-medium leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-4">
                            Let India’s Recommended FSSAI Experts file your Annual Return on-time. Avoid hefty fines and legal complications.
                        </p>
                        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 inline-block mt-4">
                            <p className="text-white text-sm font-semibold flex items-center">
                                <span className="text-red-400 text-xl mr-2">⚠️</span>
                                Avoid Rs. 100/day penalty for delay in filing the return!
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Lead Form */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md text-gray-800 border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">Need Help with FSSAI Return?</h2>
                                <p className="text-sm text-gray-500">Fill up the form to get started</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Name <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Your Name" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email <span className="text-red-500">*</span></label>
                                    <input type="email" placeholder="Your Email Address" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mobile <span className="text-red-500">*</span></label>
                                    <input type="tel" placeholder="Without 0 or +91" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Select State <span className="text-red-500">*</span></label>
                                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm text-gray-600 appearance-none transition-all" required defaultValue="">
                                        <option value="" disabled>Select State</option>
                                        <option value="maharashtra">Maharashtra</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="gujarat">Gujarat</option>
                                        <option value="karnataka">Karnataka</option>
                                        <option value="other">Other State</option>
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

            {/* 2. OVERVIEW & ELIGIBILITY */}
            <section className="py-16 px-4 max-w-4xl mx-auto text-center md:text-left">
                <h2 className="text-3xl font-bold text-[#243c7c] mb-6">Who is Eligible to File FSSAI Annual Return?</h2>
                <div className="w-16 h-1 bg-[#ff7600] mb-8 mx-auto md:mx-0"></div>

                <div className="space-y-6 text-gray-600 leading-relaxed text-[15px] md:text-base">
                    <p>
                        All Food Business Operators (FBOs) who possess a food license and have an annual turnover up to Rs. 1.5 crore should file the annual return mandatorily and within the due time. If anybody fails to file the returns within the stipulated time period, they may have to face grim penalties.
                    </p>
                    <p className="p-4 bg-orange-50 border-l-4 border-[#ff7600] rounded-r-lg font-medium text-gray-800">
                        Every business involved in food manufacturing, importing, exporting of food products, or selling is required to file for the FSSAI annual return. Also, those who are involved in the manufacturing and distribution of dairy products should file for a half-yearly return.
                    </p>
                </div>
            </section>

            {/* 3. FORM D1 vs D2 AND DETAILS REQUIRED */}
            <section className="bg-white py-16 px-4 border-t border-b border-gray-200">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Form D1 */}
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-4">
                                <h3 className="text-2xl font-bold text-[#243c7c]">FSSAI Form-D1</h3>
                                <span className="bg-[#243c7c] text-white text-xs font-bold px-3 py-1 rounded-full">Annual Return</span>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                FSSAI Form D1 as defined by the Food Safety Commissioner is made mandatory for Food Business units involved in manufacturing, importing, labelling, packing, re-labelling, and re-packing irrespective of their production volume.
                            </p>
                            <ul className="text-sm text-gray-700 font-semibold space-y-2">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Required for all general food business units</li>
                                <li className="flex items-center"><span className="text-red-500 mr-2">⏱️</span> Due Date: 31st May of every fiscal year</li>
                            </ul>
                        </div>

                        {/* Form D2 */}
                        <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center justify-between mb-4 border-b border-blue-200 pb-4">
                                <h3 className="text-2xl font-bold text-[#243c7c]">FSSAI Form-D2</h3>
                                <span className="bg-[#ff7600] text-white text-xs font-bold px-3 py-1 rounded-full">Half-Yearly Return</span>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                FSSAI Form D2 is filed specifically by licensees who are involved in the manufacturing and distribution of milk or milk products.
                            </p>
                            <ul className="text-sm text-gray-700 font-semibold space-y-2">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Specific to Milk & Dairy product businesses</li>
                                <li className="flex items-center"><span className="text-red-500 mr-2">⏱️</span> Period 1: 1st April to 30th Sept</li>
                                <li className="flex items-center"><span className="text-red-500 mr-2">⏱️</span> Period 2: 1st Oct to 31st March</li>
                            </ul>
                        </div>
                    </div>

                    {/* Details Required List */}
                    <div className="max-w-4xl mx-auto mt-12 bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                        <h3 className="text-2xl font-bold text-[#243c7c] mb-6 text-center">Details required for Filing FSSAI Annual Return</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                            <div className="flex items-start">
                                <span className="text-[#ff7600] mr-3 mt-0.5">✓</span>
                                <span>Name of the Food product manufactured, exported, imported, or handled.</span>
                            </div>
                            <div className="flex items-start">
                                <span className="text-[#ff7600] mr-3 mt-0.5">✓</span>
                                <span>Bottle size, can size or size of any other packaging.</span>
                            </div>
                            <div className="flex items-start">
                                <span className="text-[#ff7600] mr-3 mt-0.5">✓</span>
                                <span>Quantity in the metric ton.</span>
                            </div>
                            <div className="flex items-start">
                                <span className="text-[#ff7600] mr-3 mt-0.5">✓</span>
                                <span>Value of Food product.</span>
                            </div>
                            <div className="flex items-start">
                                <span className="text-[#ff7600] mr-3 mt-0.5">✓</span>
                                <span>Quantity in Kg which is being exported or imported.</span>
                            </div>
                            <div className="flex items-start">
                                <span className="text-[#ff7600] mr-3 mt-0.5">✓</span>
                                <span>Selling price per unit of packaging or per kg.</span>
                            </div>
                            <div className="flex items-start">
                                <span className="text-[#ff7600] mr-3 mt-0.5">✓</span>
                                <span>Name of the countries to where food products are exported.</span>
                            </div>
                            <div className="flex items-start">
                                <span className="text-[#ff7600] mr-3 mt-0.5">✓</span>
                                <span>Rate per unit or kg of packaging CIF/FOB.</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 4. PRICING PACKAGES */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Return Filing Packages</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                        {/* Half-Yearly Package */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl transition-all">
                            <div className="bg-gray-100 text-center py-4 border-b border-gray-200">
                                <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider">Half-Yearly Return</h3>
                                <p className="text-sm text-gray-500">Form-D2</p>
                            </div>
                            <div className="p-8 flex-grow flex flex-col text-center">
                                <div className="mb-6">
                                    <p className="text-4xl font-extrabold text-[#243c7c]">₹ 2999</p>
                                </div>
                                <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow text-left">
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 text-lg leading-none">✓</span> 1-Time Return Filing</li>
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 text-lg leading-none">✓</span> Dedicated FSSAI Expert</li>
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 text-lg leading-none">✓</span> Return Filing & Guidance</li>
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 text-lg leading-none">✓</span> Call, Email, Chat support</li>
                                </ul>
                                <button className="w-full bg-transparent border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                    Contact Now
                                </button>
                            </div>
                        </div>

                        {/* Annual Package */}
                        <div className="bg-[#243c7c] rounded-xl shadow-2xl overflow-hidden flex flex-col transform md:-translate-y-4 relative">
                            <div className="bg-[#ff7600] text-center py-1">
                                <span className="text-white text-xs font-bold uppercase tracking-widest">Most Popular</span>
                            </div>
                            <div className="bg-[#1c3065] text-center py-4 border-b border-blue-800">
                                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Annual Return</h3>
                                <p className="text-sm text-blue-200">Form-D1</p>
                            </div>
                            <div className="p-8 flex-grow flex flex-col text-center text-white">
                                <div className="mb-6">
                                    <p className="text-4xl font-extrabold text-[#ff7600]">₹ 3999</p>
                                </div>
                                <ul className="text-sm text-blue-50 space-y-4 mb-8 flex-grow text-left">
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 text-lg leading-none">✓</span> 1-Time Return Filing</li>
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 text-lg leading-none">✓</span> Dedicated FSSAI Expert</li>
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 text-lg leading-none">✓</span> Return Filing & Guidance</li>
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 text-lg leading-none">✓</span> Call, Email, Chat support</li>
                                </ul>
                                <button className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3 rounded-md transition duration-300 shadow-lg">
                                    Contact Now
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. BENEFITS GRID */}
            <section className="py-16 px-4 bg-white border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Benefits of Filing FSSAI Annual Returns by Us</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition border border-gray-100">
                            <div className="text-4xl mb-4">🎧</div>
                            <h3 className="font-bold text-[#243c7c] mb-2">Customer Support</h3>
                            <p className="text-sm text-gray-600">Customer Support available in 6 different languages including English.</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition border border-gray-100">
                            <div className="text-4xl mb-4">💬</div>
                            <h3 className="font-bold text-[#243c7c] mb-2">Consultation</h3>
                            <p className="text-sm text-gray-600">Expert Consultations are readily available whenever you need guidance.</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition border border-gray-100">
                            <div className="text-4xl mb-4">📜</div>
                            <h3 className="font-bold text-[#243c7c] mb-2">Certified Status</h3>
                            <p className="text-sm text-gray-600">We are a Startup India certified organization from DPIIT, Govt. of India.</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition border border-gray-100">
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="font-bold text-[#243c7c] mb-2">Price & Data Secure</h3>
                            <p className="text-sm text-gray-600">Recommendable Service at an Unbeatable Price along with high Data Security & Trust.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. HOW WE WORK (PROCESS) */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-12">How We Work?</h2>

                    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
                        {[
                            "Fill-up the Form & Make the Payment",
                            "Get the Call from our FSSAI Expert Panel",
                            "Upload the Documents & Details as requested",
                            "Experts take Approval for Filing process",
                            "Return filed successfully 👍"
                        ].map((step, index) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-full md:w-1/5 relative">
                                    <div className="w-14 h-14 rounded-full bg-[#243c7c] text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-2 border-[#ff7600]">
                                        {index + 1}
                                    </div>
                                    <p className="text-sm font-semibold text-gray-700 px-2 leading-snug">{step}</p>
                                </div>
                                {index < 4 && (
                                    <div className="hidden md:block text-[#ff7600] text-3xl font-light">⟶</div>
                                )}
                                {index < 4 && (
                                    <div className="md:hidden text-[#ff7600] text-3xl font-light">↓</div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FAQS */}
            <section className="bg-white py-16 px-4 border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Frequently Asked Questions (FAQ)</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4 mb-8"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="How to file an Annual Return?" defaultOpen={true}>
                            <p>Contact your FSSAI Agent, upload the required documents, and the agent will file the return online to the concerned Food Safety Commissioner within the prescribed time for each return.</p>
                        </AccordionItem>
                        <AccordionItem title="Who needs to file FSSAI annual return?">
                            <p>Every business involved in food manufacturing, importing, exporting of food products, or selling (with a turnover up to Rs. 1.5 crore) is required to file the FSSAI annual return.</p>
                        </AccordionItem>
                        <AccordionItem title="Is there any half-yearly return?">
                            <p>Yes. FSSAI Form D2 is a half-yearly return that specifically applies to licensees involved in the manufacturing and distribution of milk or milk products.</p>
                        </AccordionItem>
                        <AccordionItem title="What is the due date for filing FSSAI annual return?">
                            <p>The FSSAI Annual Return (Form D1) must be filed on or before <strong>31st May</strong> of every fiscal year.</p>
                        </AccordionItem>
                        <AccordionItem title="Entities exempted from filing FSSAI Annual Returns">
                            <p>Fast food joints, restaurants, grocery stores, and canteens are generally exempted from filing the FSSAI Annual Return. Only manufacturers, importers, and exporters are strictly mandated.</p>
                        </AccordionItem>
                        <AccordionItem title="Penalty for delay filing of annual returns">
                            <p className="text-red-600 font-semibold">A penalty of Rs. 100 will be imposed for every single day of delay beyond the due date of 31st May.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}