"use client";

import React, { useState } from 'react';

// --- Reusable Accordion Component ---
interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

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

export default function IsoCertification() {

    // Data array for the large pricing section to keep JSX clean
    const pricingPackages = [
        { title: "ISO (Q.M.S) 9001:2015", isSplit: true, iaf: "10,000", nonIaf: "6,000" },
        { title: "ISO 14001:2015 E.M.S.", isSplit: true, iaf: "14,000", nonIaf: "9,500" },
        { title: "ISO 45001:2018 OH&S M.S.", isSplit: true, iaf: "12,000", nonIaf: "9,500" },
        { title: "ISO 22000:2018 F.S.M.S.", isSplit: true, iaf: "12,000", nonIaf: "9,500" },
        { title: "ISO 29993:2017", isSplit: false, price: "14,000", type: "Compliance Certificate" },
        { title: "ISO 21001:2018", isSplit: false, price: "14,000", type: "Compliance Certificate" },
        { title: "ISO 27001:2022", isSplit: false, price: "17,000", type: "Compliance Certificate" },
        { title: "ISO 7101:2023", isSplit: false, price: "15,000", type: "Compliance Certificate" },
        { title: "ISO 10004:2018", isSplit: false, price: "14,000", type: "Compliance Certificate" },
        { title: "HACCP", isSplit: false, price: "15,000", type: "Compliance Certificate" },
        { title: "RoHS", isSplit: false, price: "14,000", type: "Compliance Certificate" },
        { title: "GMP", isSplit: false, price: "14,000", type: "Compliance Certificate" },
        { title: "CMMI", isSplit: false, price: "16,500", type: "Compliance Certificate" },
        { title: "WHO - GMP Certification", isSplit: false, price: "14,500", type: "Compliance Certificate" },
        { title: "CE Marking Certification", isSplit: false, price: "14,000", type: "Compliance Certificate" },
        { title: "SA 8000", isSplit: false, price: "17,000", type: "Compliance Certificate" },
        { title: "ISO 26000 (Social Responsibility)", isSplit: false, price: "14,999", type: "Compliance Certificate" },
        { title: "ISO 28000 (Supply Chain Security)", isSplit: false, price: "13,999", type: "Compliance Certificate" },
        { title: "ISO 31000 (Risk Management)", isSplit: false, price: "14,999", type: "Compliance Certificate" },
        { title: "ISO/IEC 20000-1 (IT Service Mgmt)", isSplit: false, price: "16,999", type: "Compliance Certificate" },
        { title: "ISO 29990:2010 (Learning Services)", isSplit: false, price: "13,999", type: "Compliance Certificate" },
        { title: "ISO 13485:2016 (Medical Device QMS)", isSplit: false, price: "16,999", type: "Compliance Certificate" },
        { title: "ISO 15378:2017 (Medicinal Packaging)", isSplit: false, price: "14,999", type: "Compliance Certificate" },
        { title: "ISO 37500:2014 (Outsourcing)", isSplit: false, price: "13,999", type: "Compliance Certificate" },
        { title: "ISO 41001:2018 (Facility Mgmt)", isSplit: false, price: "14,999", type: "Compliance Certificate" },
        { title: "ISO 22301:2019 (Business Continuity)", isSplit: false, price: "16,999", type: "Compliance Certificate" },
        { title: "All category Modification/Audit", isSplit: false, price: "Variable", type: "Depending on certificate" }
    ];

    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#243c7c] py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Hero Copy */}
                    <div className="text-white space-y-6">
                        <div className="inline-block bg-[#1c3065] text-white text-xs font-bold px-3 py-1 rounded-full border border-blue-800 tracking-wider">
                            GLOBAL STANDARDIZATION
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                            Want Company’s <br />
                            <span className="text-[#ff7600]">ISO Certification?</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 font-medium leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-4">
                            Establish reliability and credibility among consumers, clients, and investors. Grab ISO Certification Services in your budget!
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <div className="flex items-center text-sm font-semibold bg-[#1c3065] px-4 py-2 rounded-md border border-blue-800">
                                <span className="text-green-400 mr-2">✓</span> IAF Approved Available
                            </div>
                            <div className="flex items-center text-sm font-semibold bg-[#1c3065] px-4 py-2 rounded-md border border-blue-800">
                                <span className="text-green-400 mr-2">✓</span> 100% Authentic
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Lead Form */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md text-gray-800 border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">Fill up the form</h2>
                                <p className="text-sm text-gray-500">Get a free consultation today</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder="Your Full Name *" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                <input type="email" placeholder="Your Email Address *" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                <input type="tel" placeholder="Your Mobile Number *" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />

                                {/* State Dropdown */}
                                <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm text-gray-600 appearance-none transition-all" required defaultValue="">
                                    <option value="" disabled>Select State *</option>
                                    <option value="maharashtra">Maharashtra</option>
                                    <option value="delhi">Delhi</option>
                                    <option value="karnataka">Karnataka</option>
                                    <option value="gujarat">Gujarat</option>
                                    <option value="other">Other State</option>
                                </select>

                                {/* Industries Dropdown (Extracted from Screenshots) */}
                                <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm text-gray-600 appearance-none transition-all" required defaultValue="">
                                    <option value="" disabled>Industries Wise Bifurcation *</option>
                                    <option value="water">Manufacturing of package drinking water.(Cold Drinks, Carbonate soda)</option>
                                    <option value="hospitality">Hotel , Restaurants, Resorts Dhaba, Road Street Food Cart ,Tea stall pickles, spices etc.</option>
                                    <option value="auto">Automobile Industries (Service & workshop.)</option>
                                    <option value="medical">Hospital, Diagnostic Centers and Nursing Home Health care center.</option>
                                    <option value="ecommerce">E-Commerce Business, Online+offline Business</option>
                                    <option value="spices">Manufacturing of Spices and others Food Items</option>
                                    <option value="retail_medical">Retails Shop of medical store and surgical Items Retail counter.</option>
                                    <option value="it">I.T Company, Software ,Website Desining, Digital Marketing , S.E.O</option>
                                    <option value="dairy">Manufacturing of Dairy Products, Ghee,Paneer, Butter, Milk</option>
                                    <option value="electronics">Manufacturing of Electronic Products and Gadgets</option>
                                    <option value="trading">Trading , supply or any kind of retail shop /outlet Business.</option>
                                    <option value="education">Education sector, Institute, Computer center, school , Colleges.</option>
                                    <option value="agri_food">Manufacturing of Tea , Ice- Cream, Grain, flour, oil ,vegetables, Fruits,crops</option>
                                    <option value="manpower">Contractor/ Manpower Supply / H.R/Third party Outsorsing</option>
                                    <option value="pharma">Manufacturing and Packaging of Pharmaceuticals, Ayurved, medicines.</option>
                                    <option value="cosmetics">Manufacturing and Trading of cosmetic and others Beauty products .</option>
                                    <option value="import_export">Import - Export Business , Foreign Supplier.</option>
                                    <option value="construction">Construction ,Real Estate promotor, Building Material Supplier.</option>
                                    <option value="garments">Manufacturing or Trading of Garments , Handloom, Accessories</option>
                                    <option value="ngo">N.G.O .SECTION -8, Society, Trust, Any kind of charitable institution.</option>
                                    <option value="vocational">Beauty Parlour ,Computer Traning ,Dance, Yoga Vocational , Nurse Training, Trailoring</option>
                                    <option value="event">Event Management organizer, Wedding Planner, Function organizer, Film Production.</option>
                                    <option value="transport">Transport, Logistic, Freight and Container type of Business.</option>
                                    <option value="finance">Business and Financial Consultation Share market , Trading ,Mutual fund</option>
                                    <option value="farming">Agriculture anf Fish Farming , Poultry , Bee & Goat Farming .</option>
                                    <option value="heavy_machinery">Manufacturing of Heavy Equipments and Machinery and Spare Parts.</option>
                                    <option value="leather">Manufacturing and Trading of Leather & Footwear Products .</option>
                                    <option value="plastic">Business of Plastic, Drums , Containers, Polymer related products</option>
                                    <option value="packaging">Packaging Films, Labelling , Storage and Distribution Business.</option>
                                    <option value="glassware">Glassware Laboratory Equipment Manufacturing and Trading business.</option>
                                    <option value="mechanical">Machanical Engineering pump, Electro Products ,Wire, cables, Transformers.</option>
                                    <option value="chemical">Chemical Industry Paints, Caustic soda, Sulphuric Acid, Fertilisers & Pesticides</option>
                                    <option value="engineering">General Engineering , Door Closers Hex Nuts & Bolts, Fasteners, Industrial Locks & Latches</option>
                                    <option value="petroleum">Petroleum coal related products, Grece, Lubricants, Oil , Engine oil</option>
                                </select>

                                {/* Captcha */}
                                <div className="flex gap-3 items-center pt-2">
                                    <div className="bg-gray-200 text-gray-700 font-serif italic font-bold tracking-[0.3em] px-4 py-2 rounded-md border border-gray-300 select-none w-1/3 text-center text-lg">
                                        X 4 M 9
                                    </div>
                                    <input type="text" placeholder="Enter captcha here.." className="w-2/3 px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>

                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-md transition duration-300 mt-4 shadow-lg text-base">
                                    Apply Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. INTRODUCTION */}
            <section className="py-16 px-4 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#243c7c] mb-6">Grab ISO Certification Services in your Budget!</h2>
                <div className="w-16 h-1 bg-[#ff7600] mb-8 mx-auto"></div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    Online Legal India is a renowned company that offers authentic ISO certification for your organisation. ISO stands for International Organization for Standardization.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                    When your company, institute or business process gets ISO certification, it will be more credible among customers. Moreover, the ISO mark will make your service distinctive from similar organizations. It will increase your business remarkably. What are you waiting for?
                </p>
            </section>

            {/* 3. POPULAR ISO SERVICES GRID */}
            <section className="bg-white py-16 px-4 border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Popular ISO Services We Offer</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { code: "ISO 9001:2015", name: "Quality Management System (QMS)", desc: "Demonstrates the ability to meet Quality Standards for products or services." },
                            { code: "ISO 14001:2015", name: "Environment Management System (EMS)", desc: "Ensures the safety of the effective environmental system of an organization and regulates it." },
                            { code: "ISO 45001:2018", name: "Occupational Health & Safety", desc: "Ensures occupational health and safety management systems with specified guidelines." },
                            { code: "ISO 22000:2018", name: "Food Safety Management (FSMS)", desc: "Ensures quality in food safety in the food chain from the farm to the fork." },
                            { code: "ISO 29993:2017", name: "Learning Services", desc: "Specifies requirements for learning services outside formal education, including life-long learnings." },
                            { code: "ISO 21001:2018", name: "Educational Organizations (EOMS)", desc: "Demonstrates ability to support acquisition and development of competence through teaching." },
                            { code: "ISO 27001:2022", name: "Information Security (ISMS)", desc: "Ensures best practice in terms of managing information security." },
                            { code: "ISO 7101:2023", name: "Healthcare Organization Management", desc: "Management Systems for Quality in Healthcare Organizations, identifying safety and wellbeing." },
                            { code: "ISO 10004:2018", name: "Quality & Customer Satisfaction", desc: "Guidelines for Monitoring and Measuring to enhance qualitative service." }
                        ].map((iso, idx) => (
                            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-[#ff7600] transition-all group">
                                <div className="text-[#ff7600] font-black text-xl mb-1">{iso.code}</div>
                                <h3 className="font-bold text-[#243c7c] text-lg mb-3 leading-tight">{iso.name}</h3>
                                <p className="text-sm text-gray-600">{iso.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. ABOUT ISO & TYPES (Cleaned up from prompt) */}
            <section className="py-16 px-4 bg-[#243c7c] text-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div>
                        <h2 className="text-3xl font-bold mb-4">What is ISO?</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-6"></div>
                        <blockquote className="text-lg italic text-blue-200 mb-6 border-l-4 border-[#ff7600] pl-4">
                            “When things don't work as they should, it often means that standards are absent.”
                        </blockquote>
                        <p className="text-blue-50 text-sm leading-relaxed mb-4">
                            International Organization for Standardization (ISO) certification establishes reliability and credibility among consumers, clients, users, investors or business partners.
                        </p>
                        <p className="text-blue-50 text-sm leading-relaxed mb-8">
                            To compete with well-established organizations in the globalized economy, globalized standardization in manufacturing, quality maintenance, and safety helps speed up reaching your goal.
                        </p>

                        <h3 className="text-xl font-bold mb-4 text-[#ff7600]">Phases for Certification</h3>
                        <ul className="grid grid-cols-2 gap-3 text-sm font-semibold">
                            <li className="flex items-center"><span className="bg-white text-[#243c7c] rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">1</span> Documentation</li>
                            <li className="flex items-center"><span className="bg-white text-[#243c7c] rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">2</span> Validation</li>
                            <li className="flex items-center"><span className="bg-white text-[#243c7c] rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">3</span> Draft Copy Issue</li>
                            <li className="flex items-center"><span className="bg-white text-[#243c7c] rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">4</span> Client Approval</li>
                            <li className="flex items-center col-span-2 mt-2"><span className="bg-[#ff7600] text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">5</span> Final Certificate Issued</li>
                        </ul>
                    </div>

                    <div className="bg-[#1c3065] p-8 rounded-xl border border-blue-800 shadow-inner">
                        <h2 className="text-2xl font-bold mb-6">Types of ISO Certification</h2>

                        <div className="mb-6">
                            <h3 className="text-[#ff7600] font-bold text-lg mb-2 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                IAF Accreditation Body
                            </h3>
                            <p className="text-sm text-blue-100 leading-relaxed">
                                IAF stands for The International Accreditation Forum, a worldwide renowned ISO accreditation body. They assess and provide conformity, visiting the fields of management area. IAF-approved certification is a bit costlier. The certificate will specifically mention, “IAF Approved Certificate.”
                            </p>
                        </div>

                        <div>
                            <h3 className="text-green-400 font-bold text-lg mb-2 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Non-IAF Compliance Body
                            </h3>
                            <p className="text-sm text-blue-100 leading-relaxed">
                                These accreditation bodies are not members of IAF, but they still have the power to issue authentic and worldwide accepted ISO certificates. These certificates mention “ISO Certificate” without IAF branding, and are generally less costly.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* 5. PRICING PACKAGES (Massive List) */}
            <section className="bg-gray-100 py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Package Details for ISO Certification</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4 mb-4"></div>
                        <p className="text-gray-500 text-sm">Transparent pricing. No hidden charges. 18% GST Excluded.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {pricingPackages.map((pkg, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col hover:shadow-xl hover:border-[#243c7c] transition-all">
                                <h3 className="font-bold text-[#243c7c] text-lg mb-4 flex-grow border-b border-gray-100 pb-3">{pkg.title}</h3>

                                {pkg.isSplit ? (
                                    <div className="space-y-3 mb-4">
                                        <div className="flex justify-between items-center bg-blue-50 p-2 rounded border border-blue-100">
                                            <span className="text-xs font-bold text-[#243c7c]">IAF</span>
                                            <span className="font-bold text-[#ff7600]">₹ {pkg.iaf}</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-200">
                                            <span className="text-xs font-bold text-gray-600">Non-IAF</span>
                                            <span className="font-bold text-gray-800">₹ {pkg.nonIaf}</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mb-4 bg-gray-50 p-3 rounded text-center border border-gray-100">
                                        <p className="text-2xl font-black text-[#ff7600] mb-1">{pkg.price === 'Variable' ? 'Variable' : `₹ ${pkg.price}`}</p>
                                        <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">{pkg.type}</p>
                                    </div>
                                )}

                                <div className="text-xs text-gray-500 space-y-1 mt-auto pt-2 border-t border-gray-100">
                                    <p className="flex items-center"><span className="text-green-500 mr-1">✓</span> Call, Chat, Email Support</p>
                                    <p className="flex items-center"><span className="text-green-500 mr-1">✓</span> No hidden charges</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. OTHER STANDARDS (Not Matched section) */}
            <section className="bg-white py-16 px-4 border-t border-gray-200">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-[#243c7c]">Not matched? Learn more ISO services:</h2>
                        <p className="text-gray-500 mt-2">If you cannot identify which ISO matches your requirement, contact us. Our experts will suggest the right genre.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600">
                        <div>
                            <h3 className="font-bold text-[#ff7600] mb-3 border-b pb-1">Quality & Projects</h3>
                            <ul className="space-y-2 list-disc pl-5">
                                <li>ISO 10004:2012 Customer satisfaction</li>
                                <li>ISO 13485:2016 Medical devices</li>
                                <li>ISO 10006:2017 Projects</li>
                                <li>ISO 18091 Local government</li>
                                <li>ISO 90003 Software engineering</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#ff7600] mb-3 border-b pb-1">Industry & specialized</h3>
                            <ul className="space-y-2 list-disc pl-5">
                                <li>ISO/TS 16949:2009 Automotive</li>
                                <li>ISO 19443:2018 NUCLEAR energy</li>
                                <li>ISO/TS 29001 Petrochemical & Natural gas</li>
                                <li>ISO/TS 22163:2017 Business management for rail</li>
                                <li>ISO 15378:2017 Primary packaging (medicinal)</li>
                                <li>ISO 14298:2013 Security in printing processes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQS */}
            <section className="bg-gray-50 py-16 px-4 border-t border-gray-200 mt-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Frequently Asked Questions (FAQs)</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4 mb-8"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="What is an ISO for?" defaultOpen={true}>
                            <p>International standards ensure that the products and services you use in your daily life are safe, reliable, and of high quality. This organisation guides businesses in adopting suitable, sustainable and ethical practices. In short, standards seamlessly blend quality with consistency and conscience.</p>
                        </AccordionItem>
                        <AccordionItem title="What is IAF ISO vs Non-IAF ISO?">
                            <p><strong>IAF (International Accreditation Forum)</strong> is a globally recognized body. IAF-approved ISO certificates are highly recognized, especially for government tenders, but cost slightly more. <br /><br /><strong>Non-IAF</strong> certificates are issued by independent compliance bodies. They are authentic and valid for general business credibility and branding, and are usually more cost-effective.</p>
                        </AccordionItem>
                        <AccordionItem title="Why do I need ISO certification?">
                            <p>ISO certification builds trust with your clients, proves your commitment to quality/safety, helps you qualify for government and corporate tenders, improves internal business processes, and gives you a marketing edge over non-certified competitors.</p>
                        </AccordionItem>
                        <AccordionItem title="What is the validity of an ISO certification?">
                            <p>Generally, an ISO certification is valid for <strong>3 years</strong>. However, to maintain the validity during this 3-year period, the certifying body will conduct a Surveillance Audit every year.</p>
                        </AccordionItem>
                        <AccordionItem title="Is ISO a Government Organization?">
                            <p>No. ISO is an independent, non-governmental international organization with a membership of 167 national standards bodies. Through its members, it brings together experts to share knowledge and develop voluntary, consensus-based, market-relevant International Standards.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}