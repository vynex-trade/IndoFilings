"use client";

import React, { ReactNode, useState } from 'react';

type AccordionItemProps = {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
};

// --- Reusable Accordion Component ---
const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, defaultOpen = false }) => {
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

export default function IecRegistration() {
    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#243c7c] py-16 px-4 md:px-8 relative overflow-hidden">
                {/* Subtle background geometric accent */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                    {/* Left Side: Hero Copy */}
                    <div className="text-white space-y-6">
                        <div className="inline-block bg-[#1c3065] text-[#ff7600] text-xs font-bold px-4 py-1.5 rounded-full border border-blue-800 tracking-widest uppercase mb-2">
                            Ministry of Commerce & Industry
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                            Import Export <br />
                            <span className="text-[#ff7600]">Code Registration</span> (IEC)
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 font-medium leading-relaxed max-w-xl">
                            Get a genuine 10-digit IEC code from the Directorate General of Foreign Trade (DGFT), Govt. of India, through our end-to-end digital support.
                        </p>

                        {/* Key Benefits Pills */}
                        <div className="flex flex-wrap gap-3 mt-4">
                            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-blue-800/30 text-sm font-semibold">
                                <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                Lifetime Validity
                            </div>
                            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-blue-800/30 text-sm font-semibold">
                                <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                Digital Process
                            </div>
                        </div>

                        {/* Stats Strip */}
                        <div className="flex gap-6 mt-8 pt-6 border-t border-blue-900/30">
                            <div>
                                <p className="text-2xl font-extrabold text-white">10+</p>
                                <p className="text-xs text-blue-300">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-2xl font-extrabold text-white">10K+</p>
                                <p className="text-xs text-blue-300">IEC Filed</p>
                            </div>
                            <div>
                                <p className="text-2xl font-extrabold text-white">98%</p>
                                <p className="text-xs text-blue-300">Success Rate</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Lead Form */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md text-gray-800 border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-xl font-bold text-gray-900 mb-1 leading-tight">Apply for Your IEC Code</h2>
                                <p className="text-xs text-gray-500">Expert DGFT Filing Assistance</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name *</label>
                                    <input type="text" placeholder="Enter business owner name" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mobile Number *</label>
                                    <input type="tel" placeholder="Without 0 or +91 (10 digits)" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address *</label>
                                    <input type="email" placeholder="official@business.com" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">State *</label>
                                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm text-gray-600 appearance-none transition-all" required defaultValue="">
                                        <option value="" disabled>Select State where registered</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="maharashtra">Maharashtra</option>
                                        <option value="karnataka">Karnataka</option>
                                        <option value="gujarat">Gujarat</option>
                                        <option value="tamil-nadu">Tamil Nadu</option>
                                        <option value="uttar-pradesh">Uttar Pradesh</option>
                                        <option value="west-bengal">West Bengal</option>
                                        <option value="other">Other States</option>
                                    </select>
                                </div>

                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-md transition duration-300 mt-2 shadow-lg text-base tracking-wide transform hover:-translate-y-0.5 active:translate-y-0">
                                    Get Free Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. WHAT IS IEC & INFO SECTION */}
            <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left Column: What is IEC */}
                <div>
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-4">What is Import Export Code?</h2>
                    <div className="w-20 h-1 bg-[#ff7600] mb-6"></div>

                    <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                        <p>
                            The <strong className="text-gray-900">Importer Exporter Code (IEC)</strong> is a unique 10-digit identification number issued by the Directorate General of Foreign Trade (DGFT), under the Ministry of Commerce and Industry, Government of India.
                        </p>
                        <p>
                            It is mandatory for any individual or business entity looking to engage in cross-border trade—either importing goods into India or exporting products to international markets.
                        </p>

                        {/* Highlight Box */}
                        <div className="bg-[#fff8f0] p-5 rounded-lg border-l-4 border-[#ff7600] mt-6">
                            <p className="font-semibold text-[#243c7c] text-sm mb-1">Why is it mandatory?</p>
                            <p className="text-sm text-gray-600">
                                Without a valid IEC number:
                                <br />• Customs will not allow clearance of shipments.
                                <br />• Banks cannot release foreign currency payments.
                                <br />• You cannot ship consignments internationally.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Key Features/Accordion Info */}
                <div className="space-y-3 lg:pl-8 lg:border-l lg:border-gray-100">
                    <AccordionItem title="Who needs to apply for IEC?" defaultOpen={true}>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Sole Proprietors / Individuals starting import-export</li>
                            <li>Partnership Firms, LLPs, Private Limited Companies</li>
                            <li>HUF (Hindu Undivided Family), Trusts</li>
                            <li>Manufacturing units wishing to export abroad</li>
                            <li>E-commerce sellers using Amazon Global/ebay</li>
                        </ul>
                    </AccordionItem>

                    <AccordionItem title="Documents Required for IEC Application">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>PAN Card of the Applicant/Business</li>
                            <li>Aadhaar Card & Identity Proof</li>
                            <li>Bank Account Details (Cancelled Cheque Copy)</li>
                            <li>Digital Signature Certificate (DSC) - Class 3</li>
                            <li>Business Address Proof (Rental Agreement/Electricity Bill)</li>
                            <li>Passport size photographs</li>
                        </ul>
                    </AccordionItem>

                    <AccordionItem title="Validity and Renewal Terms">
                        <p className="mb-2">
                            The <strong className="text-green-600">Import Export Code has Lifetime Validity!</strong> Once issued by DGFT, it does not expire or require annual renewal.
                        </p>
                        <p className="bg-yellow-50 p-3 rounded text-sm border border-yellow-100 mt-2">
                            <strong>Note:</strong> However, you must update the details in your IEC electronically once every year via the DGFT portal if there are changes in address, directors, or email.
                        </p>
                    </AccordionItem>

                    <AccordionItem title="Processing Time & Fees">
                        <p>
                            With our expert support, we ensure that your application is prepared meticulously before submission to the DGFT portal. While standard processing can take 7-15 working days, our dedicated experts minimize rejections and queries, significantly speeding up approval time.
                        </p>
                        <p className="mt-2 font-semibold text-[#243c7c] text-sm">
                            Government Fee: Nominal (approx ₹500 - ₹1000 depending on application mode).
                            <br /><span className="text-gray-500 font-normal">Professional fees apply as per package selected.</span>
                        </p>
                    </AccordionItem>
                </div>

            </section>

            {/* 3. HOW WE WORK (Process Steps) */}
            <section className="py-16 px-4 bg-white border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">How We Help You Get IEC?</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 relative">
                        {/* Connecting Line Background (Desktop only) */}
                        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-200 -z-10"></div>

                        {[
                            { num: "1", title: "Consultation", desc: "Expert reviews your eligibility." },
                            { num: "2", title: "Document Collection", desc: "We gather all necessary docs securely." },
                            { num: "3", title: "Application Drafting", desc: "Form is filled accurately by experts." },
                            { num: "4", title: "DGFT Filing", desc: "Submitted digitally to the Govt portal." },
                            { num: "5", title: "Certificate Delivered", desc: "You receive valid 10-digit IEC code." }
                        ].map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-full bg-[#f0f4f8] text-[#243c7c] flex items-center justify-center text-2xl font-black mb-4 border-2 border-gray-200 group-hover:bg-[#ff7600] group-hover:text-white group-hover:border-[#ff7600] transition-all duration-300 z-10 bg-white">
                                    {step.num}
                                </div>
                                <h3 className="font-bold text-gray-800 text-sm mb-1">{step.title}</h3>
                                <p className="text-xs text-gray-500 px-2">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. WHY CHOOSE US FOR IEC (Trust Section) */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Why Choose Us for IEC Filing?</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                            <div className="w-16 h-16 bg-[#eef2ff] text-[#243c7c] rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                🛡️
                            </div>
                            <h3 className="text-xl font-bold text-[#243c7c] mb-3">DGFT Expertise</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Our team specializes in foreign trade regulations. We handle complex DGFT portal submissions daily, ensuring zero errors and maximum first-time approval rates.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#243c7c] p-8 rounded-xl shadow-lg text-white transform md:-translate-y-4 hover:shadow-2xl transition-all duration-300 text-center border-t-4 border-[#ff7600]">
                            <div className="w-16 h-16 bg-white/10 text-[#ff7600] rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                ⚡
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Quick Turnaround</h3>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                We don't just fill forms; we optimize data entry to avoid DGFT's automated rejection flags. Get your IEC faster than doing it yourself or through generic services.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                            <div className="w-16 h-16 bg-orange-50 text-[#ff7600] rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                💬
                            </div>
                            <h3 className="text-xl font-bold text-[#243c7c] mb-3">End-to-End Support</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                From PAN verification to downloading your final certificate, we manage every step. Post-issue support for modifications or amendments is also included.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. TESTIMONIALS / SOCIAL PROOF (Visual filler) */}
            <section className="py-12 bg-white border-b border-gray-200 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="md:w-1/2 space-y-4">
                        <h3 className="text-2xl font-bold text-[#243c7c]">Trusted by Businesses Across India</h3>
                        <p className="text-gray-600 text-sm">
                            Join thousands of exporters and startups who successfully obtained their IEC code through Online Legal India's professional guidance.
                        </p>
                        <button className="bg-[#243c7c] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#1c3065] transition-colors">
                            View Success Stories →
                        </button>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <div className="flex text-yellow-400 text-xs mb-2">★★★★★</div>
                                <p className="text-xs italic text-gray-600 line-clamp-3">"Got my IEC within a week! The team handled all DGFT technicalities perfectly. Highly recommended."</p>
                                <p className="text-[10px] font-bold text-gray-400 mt-2 uppercase">Verified User • Business Owner</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQS */}
            <section className="py-16 px-4 bg-gray-50 mt-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Frequently Asked Questions</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4 mb-8"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="Is physical presence required at DGFT office?" defaultOpen={true}>
                            <p>No, the entire process is online now. You do not need to visit any DGFT office physically. Our experts file it digitally using Class 3 Digital Signatures.</p>
                        </AccordionItem>
                        <AccordionItem title="Can an NRI apply for IEC?">
                            <p>Yes, NRIs who are citizens of India but residing abroad, or foreign nationals running businesses in India, can obtain IEC. However, they need a local Indian address proof and often require a Power of Attorney (PoA) for the consultant to file on behalf.</p>
                        </AccordionItem>
                        <AccordionItem title="What if my IEC application gets rejected?">
                            <p>If rejected due to data errors, we immediately rectify the issue based on the DGFT query raised and re-submit. If rejected due to legal ineligibility (like blacklisted entities), we will inform you upfront during consultation before taking payment for ineligible cases.</p>
                        </AccordionItem>
                        <AccordionItem title="Is there an age limit to apply for IEC?">
                            <p>Generally, no specific age limit is prescribed under the Foreign Trade Policy. As long as you hold a valid PAN card (which usually requires being 18+ for individuals), you are eligible to apply.</p>
                        </AccordionItem>
                        <AccordionItem title="Can one person have multiple IEC codes?">
                            <p>No, strictly one IEC per PAN number. If an individual or entity holds multiple branches or businesses, all imports/exports must be routed through the single IEC linked to that PAN. Creating multiple fake IECs is illegal and punishable under FTDR Act.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}