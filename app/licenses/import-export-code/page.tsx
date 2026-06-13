"use client";

import React, { useState, ReactNode } from 'react';

// --- Reusable Accordion Component ---

interface AccordionItemProps {
    title: string;
    children?: ReactNode;
    defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
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
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#243c7c] py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Hero Copy */}
                    <div className="text-white space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                            Importer Exporter Code <span className="text-[#ff7600] block mt-2">(IEC) Registration</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 font-medium leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-4">
                            Register your import export business under Directorate General of Foreign Trade, Ministry of Commerce and Industry, Govt. of India.
                        </p>
                        <div className="flex items-center space-x-3 mt-4">
                            <span className="bg-[#1c3065] text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center">
                                <span className="text-green-400 mr-2">✓</span> Lifetime Validity
                            </span>
                            <span className="bg-[#1c3065] text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center">
                                <span className="text-green-400 mr-2">✓</span> Expert DGFT Filing
                            </span>
                        </div>
                    </div>

                    {/* Right Side: Lead Form */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md text-gray-800 border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">Apply for IEC License</h2>
                                <p className="text-sm text-gray-500">Fill up the form to get started</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Name <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Your Name" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address <span className="text-red-500">*</span></label>
                                    <input type="email" placeholder="Your Email Address" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mobile Number <span className="text-red-500">*</span></label>
                                    <input type="tel" placeholder="Without 0 or +91" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Select State <span className="text-red-500">*</span></label>
                                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm text-gray-600 appearance-none transition-all" required defaultValue="">
                                        <option value="" disabled>Select State</option>
                                        <option value="maharashtra">Maharashtra</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="gujarat">Gujarat</option>
                                        <option value="tamil-nadu">Tamil Nadu</option>
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

            {/* 2. WHAT IS IEC SECTION */}
            <section className="py-16 px-4 max-w-4xl mx-auto">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-4">What is Import Export Code (IEC)?</h2>
                    <div className="w-16 h-1 bg-[#ff7600] mb-6 mx-auto md:mx-0"></div>
                    <p className="text-gray-600 leading-relaxed text-[15px] md:text-base text-justify">
                        An Importer Exporter Code (IEC) is a key business identification number which is mandatory for export from India or Import to India. No export or import shall be made by any person without obtaining an IEC. For services exports however, IEC shall not be necessary except when the service provider is taking benefits under the Foreign Trade Policy.
                        <br /><br />
                        An individual or a business entity needs a 10 digit code to import or export products or services. This code is known as Import Export Code or IEC and it is issued by DGFT, Ministry of Commerce and Industries, Govt. of India.
                    </p>
                </div>

                <div className="space-y-2 mt-8">
                    <AccordionItem title="When is IEC code required?">
                        <ul className="list-disc pl-5 space-y-2">
                            <li>When an importer has to clear his shipments from customs then it's needed by the customs authorities.</li>
                            <li>When an importer sends money abroad through banks then it's needed by the bank.</li>
                            <li>When an exporter has to send his shipments then it's needed by the customs port.</li>
                            <li>When an exporter receives money in foreign currency directly into his bank account then it's required by the bank.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem title="Who can apply for IEC Code?">
                        <p>Any individual acting as a Proprietor, or any business entity (Partnership Firm, LLP, Private Limited Company, Trust, HUF, or Society) that wishes to start an import/export business can apply for an IEC Code.</p>
                    </AccordionItem>
                    <AccordionItem title="What is the Fee for IEC Registration?">
                        <p>The government fee for an IEC application is nominal, but professional filing fees depend on the service package you choose. Fill the form above for a free consultation and exact quotation.</p>
                    </AccordionItem>
                    <AccordionItem title="IEC Certificate Sample">
                        <div className="bg-gray-100 border-2 border-dashed border-gray-300 p-8 text-center rounded mt-2">
                            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">[ Sample DGFT IEC Certificate Image ]</p>
                        </div>
                    </AccordionItem>
                </div>
            </section>

            {/* 3. RECENTLY ISSUED LICENSES (SOCIAL PROOF) */}
            <section className="bg-white py-16 px-4 border-t border-gray-200">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c]">Recently Issued IEC Licenses By DGFT</h2>
                    <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4 mb-10"></div>

                    {/* Simulated Grid of recent certificates */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-80">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <div key={item} className="bg-gray-50 border border-gray-200 rounded-lg h-32 flex flex-col items-center justify-center shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 w-full h-1 bg-green-500"></div>
                                <svg className="w-8 h-8 text-gray-400 mb-2 group-hover:text-[#243c7c] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                <p className="text-xs font-bold text-gray-500">IEC Issued</p>
                                <p className="text-[10px] text-green-600 font-semibold">Verified</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-6 italic">Join thousands of businesses who have successfully registered through us.</p>
                </div>
            </section>

            {/* 4. DOCUMENTS REQUIRED GRID */}
            <section className="py-16 px-4 bg-[#243c7c] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white">Documents Required for IEC License</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4 mb-2"></div>
                        <p className="text-blue-200 text-sm">Keep these documents handy for a smooth registration process.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-[#1c3065] border border-blue-800 rounded-xl p-6 hover:border-[#ff7600] transition-colors">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-[#ff7600]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Passport Photo</h3>
                            <p className="text-sm text-blue-200">Two Colour Photographs of Promoters / Individuals / Company / Director</p>
                        </div>

                        <div className="bg-[#1c3065] border border-blue-800 rounded-xl p-6 hover:border-[#ff7600] transition-colors">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-[#ff7600]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
                            </div>
                            <h3 className="font-bold text-lg mb-2">PAN Card</h3>
                            <p className="text-sm text-blue-200">PAN Card of each Shareholder and Director of the entity</p>
                        </div>

                        <div className="bg-[#1c3065] border border-blue-800 rounded-xl p-6 hover:border-[#ff7600] transition-colors">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-[#ff7600]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"></path></svg>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Aadhaar / Identity Proof</h3>
                            <p className="text-sm text-blue-200">Voter ID / Driving License / Passport / Aadhaar Card</p>
                        </div>

                        <div className="bg-[#1c3065] border border-blue-800 rounded-xl p-6 hover:border-[#ff7600] transition-colors">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-[#ff7600]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Address Proof</h3>
                            <p className="text-sm text-blue-200">Bank Statement / Electricity Bill / Mobile or Telephone Bill</p>
                        </div>

                        <div className="bg-[#1c3065] border border-blue-800 rounded-xl p-6 hover:border-[#ff7600] transition-colors">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-[#ff7600]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Rent Agreement</h3>
                            <p className="text-sm text-blue-200">Proof of Registered Office (If rented property)</p>
                        </div>

                        <div className="bg-[#1c3065] border border-blue-800 rounded-xl p-6 hover:border-[#ff7600] transition-colors">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-[#ff7600]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Electricity Bill</h3>
                            <p className="text-sm text-blue-200">Utility Bill as proof must be the latest one (Not older than 2 months)</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. HOW WE WORK (PROCESS) */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-12">How we work?</h2>

                    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
                        {[
                            "Fill the Form & Make Payment",
                            "Get a call from IEC expert",
                            "Upload Necessary Documents",
                            "Expert Applies on DGFT Portal",
                            "Code Sent to You 👍"
                        ].map((step, index) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-full md:w-1/5 relative">
                                    <div className="w-14 h-14 rounded-full bg-[#243c7c] text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-2 border-[#ff7600]">
                                        {index + 1}
                                    </div>
                                    <p className="text-sm font-semibold text-gray-700 px-2 leading-snug">{step}</p>
                                </div>
                                {/* Desktop Arrow */}
                                {index < 4 && (
                                    <div className="hidden md:block text-[#ff7600] text-3xl font-light">⟶</div>
                                )}
                                {/* Mobile Arrow */}
                                {index < 4 && (
                                    <div className="md:hidden text-[#ff7600] text-3xl font-light">↓</div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQS */}
            <section className="bg-gray-50 py-16 px-4 border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Frequently Asked Questions (FAQs)</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4 mb-8"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="What Is IEC Code?" defaultOpen={true}>
                            <p>IEC (Import Export Code) is mandatory for anyone who is looking to start his/her import/export business in India. It is issued by the DGFT (Director General of Foreign Trade). IEC is a 10-digit code which has lifetime validity.</p>
                        </AccordionItem>
                        <AccordionItem title="How to Apply For IEC Code through Online Legal India?">
                            <p>Simply fill out the form at the top of this page with your details. Our DGFT filing experts will contact you, collect your documents, and process the application on your behalf smoothly.</p>
                        </AccordionItem>
                        <AccordionItem title="What Documents Are Required To Get IEC Code Online?">
                            <p>You will need a Passport size photo, PAN Card, Aadhaar/Voter ID, and an Address Proof like a Bank Statement, Rent Agreement, or the latest Electricity Bill.</p>
                        </AccordionItem>
                        <AccordionItem title="Is it mandatory to update IEC every year?">
                            <p>Yes, as per recent DGFT notifications, all IEC holders must ensure that their details in the IEC are updated electronically every year, between April and June, even if there are no changes.</p>
                        </AccordionItem>
                        <AccordionItem title="Can a person/entity have more than 1 IEC Code?">
                            <p>No. An IEC is issued against a single PAN. Thus, only one IEC can be issued against a specific PAN card. Any proprietor can have only one IEC linked to their PAN.</p>
                        </AccordionItem>
                        <AccordionItem title="Is there any tax levied based on IE Code?">
                            <p>No, IEC is not a tax registration. However, customs duty may be levied on the goods imported/exported depending on the product category.</p>
                        </AccordionItem>
                        <AccordionItem title="Can individuals/proprietors obtain IE Code?">
                            <p>Yes, any individual acting as a sole proprietor can easily obtain an IEC code using their personal PAN card and address proof.</p>
                        </AccordionItem>
                        <AccordionItem title="What is the penalty levied for not registering for IE code?">
                            <p>If you attempt to import or export commercial goods without an IEC, the customs authorities will not clear your shipment, leading to heavy demurrage charges and potential confiscation of goods.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}