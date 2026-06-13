"use client";

import React, { useState } from 'react';

// --- Reusable Accordion Component ---
type AccordionItemProps = React.PropsWithChildren<{
    title: string;
    defaultOpen?: boolean;
}>;

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

export default function FssaiModification() {
    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#243c7c] py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Hero Copy */}
                    <div className="text-white space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                            Conduct any Modification in your Registered <span className="text-[#ff7600]">FSSAI Food License</span> <br />
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 font-medium leading-relaxed">
                            Let the FSSAI FoSCoS Experts of Online Legal India do the FSSAI Modification for your Food Business.
                        </p>
                        <div className="inline-block bg-white text-[#243c7c] text-sm font-extrabold px-5 py-2 rounded-full shadow-lg border-2 border-[#ff7600]">
                            🚀 1-Day Processing Available
                        </div>
                    </div>

                    {/* Right Side: Lead Form */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md text-gray-800 border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">Need Help with FSSAI Food License Modification?</h2>
                                <p className="text-sm text-gray-500">Fill Up the below Mentioned Form</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Name *</label>
                                    <input type="text" placeholder="Enter Name" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Email Address *</label>
                                    <input type="email" placeholder="Enter Email" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Phone Number *</label>
                                    <input type="tel" placeholder="Without 0 or +91" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">State *</label>
                                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm text-gray-600 appearance-none transition-all" required defaultValue="">
                                        <option value="" disabled>Select State</option>
                                        <option value="maharashtra">Maharashtra</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="karnataka">Karnataka</option>
                                        <option value="gujarat">Gujarat</option>
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

            {/* 2. OVERVIEW & ACCORDIONS */}
            <section className="py-16 px-4 max-w-4xl mx-auto">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-4">What is the FSSAI Modification process?</h2>
                    <div className="w-16 h-1 bg-[#ff7600] mb-6 mx-auto md:mx-0"></div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Following the FSSAI FoSCoS registration procedure, any registered Food Business Operator (FBO) can change, alter, or modify any given information in the Food License issued by the authority. This particular process is known as the FSSAI Modification.
                    </p>
                </div>

                <div className="space-y-2">
                    <AccordionItem title="Which Act of the Indian Govt. oversees the FSSAI Modification process?">
                        <p>The modification process is overseen by the Food Safety and Standards Act, 2006, along with the rules and regulations prescribed by the Food Safety and Standards Authority of India (FSSAI).</p>
                    </AccordionItem>
                    <AccordionItem title="In case of cancellation of a Food License, can an FBO apply for a Modification?">
                        <p>No, if a Food License has been officially cancelled by the authority, it cannot be modified. The Food Business Operator will generally need to apply for a fresh new license once the cancellation period or penalties are resolved.</p>
                    </AccordionItem>
                    <AccordionItem title="In case of a change in ownership in the FBO, is it required to file an FSSAI Modification process?">
                        <p>Yes. Any change in the ownership, business name, or operational details requires an immediate modification of the existing FSSAI license to reflect the updated legal details.</p>
                    </AccordionItem>
                </div>
            </section>

            {/* 3. WHO CAN APPLY */}
            <section className="bg-white py-16 px-4 border-t border-b border-gray-200">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Who Can Apply for FSSAI Modification?</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4 mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            As per the latest Notice issued from FSSAI FoSCoS authority, only selected categories of FBOs can now apply for a Modification. They are namely:
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {[
                            "Any Registered Food Business Operator",
                            "Food Manufacturers",
                            "Food Processing units",
                            "Food Repackers",
                            "Food Re-labellers",
                            "Food Distributors"
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gray-50 border border-gray-100 rounded-lg p-5 flex items-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-[#243c7c] text-white rounded-full p-1.5 mr-4 flex-shrink-0">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <span className="font-semibold text-[#243c7c] text-sm md:text-base">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. PRICING PACKAGES */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Modification Packages</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Basic Package */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl transition-all">
                            <div className="bg-gray-100 text-center py-4 border-b border-gray-200">
                                <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wider">Basic</h3>
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="text-center mb-6">
                                    <p className="text-sm text-gray-500 font-semibold mb-1">Professional Fees</p>
                                    <p className="text-4xl font-extrabold text-[#243c7c]">₹ 999</p>
                                </div>
                                <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5">✓</span> 1 Modification Application in the Food Product Category</li>
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5">✓</span> Call, Chat, Email Support</li>
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5">✓</span> Drafting of Modification Application</li>
                                </ul>
                                <button className="w-full bg-transparent border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        {/* Standard Package (Highlighted) */}
                        <div className="bg-[#243c7c] rounded-xl shadow-2xl overflow-hidden flex flex-col transform md:-translate-y-4 relative">
                            <div className="bg-[#ff7600] text-center py-1">
                                <span className="text-white text-xs font-bold uppercase tracking-widest">Most Popular</span>
                            </div>
                            <div className="bg-[#1c3065] text-center py-4 border-b border-blue-800">
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Standard</h3>
                            </div>
                            <div className="p-8 flex-grow flex flex-col text-white">
                                <div className="text-center mb-6">
                                    <p className="text-sm text-blue-200 font-semibold mb-1">Professional Fees</p>
                                    <p className="text-4xl font-extrabold text-[#ff7600]">₹ 1499</p>
                                </div>
                                <ul className="text-sm text-blue-50 space-y-4 mb-8 flex-grow">
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5">✓</span> 1 Modification Application in Food Product Category / Business Location / Business Type</li>
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5">✓</span> Call, Chat, Email Support</li>
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5">✓</span> Drafting of Modification Application</li>
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5">✓</span> Dedicated FSSAI FoSCoS Expert</li>
                                </ul>
                                <button className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3 rounded-md transition duration-300 shadow-lg">
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        {/* Premium Package */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl transition-all">
                            <div className="bg-gray-100 text-center py-4 border-b border-gray-200">
                                <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wider">Premium</h3>
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="text-center mb-6">
                                    <p className="text-sm text-gray-500 font-semibold mb-1">Professional Fees</p>
                                    <p className="text-4xl font-extrabold text-[#243c7c]">₹ 1999</p>
                                </div>
                                <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5">✓</span> 1 Modification Application in any Given Information (Owner Name, Location, Category, etc.)</li>
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5">✓</span> Call, Chat, Email Support</li>
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5">✓</span> Drafting of Modification Application</li>
                                    <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5">✓</span> Dedicated FSSAI FoSCoS Expert</li>
                                </ul>
                                <button className="w-full bg-transparent border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                    Buy Now
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. HOW WE WORK (PROCESS) */}
            <section className="bg-white py-16 px-4 border-t border-gray-200">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-12">How we work?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Fill-up the Form & make the Payment",
                            "Get the call from FSSAI FoSCoS Expert Panel",
                            "Upload Documents and Declaration as requested",
                            "Experts take Approval for the Modification process",
                            "We Draft your FSSAI Modification Application",
                            "Get your modified FSSAI Food License"
                        ].map((step, index) => (
                            <div key={index} className="flex flex-col items-center bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                                <div className="w-12 h-12 rounded-full bg-[#ff7600] text-white flex items-center justify-center text-xl font-bold mb-4 shadow-md absolute -top-6 border-4 border-white">
                                    {index + 1}
                                </div>
                                <p className="text-gray-700 font-semibold mt-4 text-[15px]">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. DOCUMENTS & POINTS TO REMEMBER */}
            <section className="py-16 px-4 bg-[#243c7c] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left: Documents */}
                    <div className="bg-[#1c3065] p-8 rounded-xl shadow-inner border border-blue-800">
                        <h3 className="text-2xl font-bold mb-6 text-[#ff7600]">Required Documents</h3>
                        <ul className="space-y-4 text-blue-50 text-sm">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-3 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                <span>Resubmission of all the Documents submitted at the time of FSSAI License Application</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-3 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                <span>A statement notifying the Changes for which the Modification request has been filed</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-3 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                <span>Proper Evidence of Change in the Food Business</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right: Points */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Points to be Remembered</h3>
                        <ul className="space-y-4 text-blue-100 text-sm">
                            <li className="flex items-start">
                                <span className="text-[#ff7600] font-bold mr-3 mt-0.5">1.</span>
                                <span>The concerned FBO can select a single Modification Category at a time in the FSSAI Modification process, as regulated by the Food Licensing authority.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#ff7600] font-bold mr-3 mt-0.5">2.</span>
                                <span>Food Manufacturers/Processors who have already obtained a Food License but in a wrong category, are required to get their License Modified.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#ff7600] font-bold mr-3 mt-0.5">3.</span>
                                <span>For adding a new business, change of business address, change in contact details, or change in the product category – an FBO is requisite to file for FSSAI License Modification.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#ff7600] font-bold mr-3 mt-0.5">4.</span>
                                <span>The FSSAI Designated Officer (D.O.) is responsible to scrutinize the Modification Application and may seek any clarification from the FBO. The query must be responded to within the next 30 days.</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* 7. FAQS */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Frequently Asked Questions (FAQs)</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4 mb-8"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="When do I need to apply for FSSAI license modification?" defaultOpen={true}>
                            <p>If there is any change from the furnished information contained in the valid existing FSSAI Food License, an FBO shall apply for a Modification of a Food License.</p>
                        </AccordionItem>
                        <AccordionItem title="What is the process for the modification of the FSSAI license?">
                            <p>You must fill out our application form, submit the required documentary evidence of the change, and our experts will draft and submit the modification application to the FSSAI Designated Officer for approval.</p>
                        </AccordionItem>
                        <AccordionItem title="For opening a new branch of the same FBO, is it mandatory to modify the license?">
                            <p>Yes. If you are adding a new location or branch to your existing food business operations, a modification of the FSSAI license (or potentially a new State/Central license depending on jurisdiction) is legally required.</p>
                        </AccordionItem>
                        <AccordionItem title="What if my modification application gets cancelled by the licensing authority?">
                            <p>If cancelled, you will be notified of the reasons (often lack of documents or failure to respond to queries within 30 days). You may need to rectify the errors and file a fresh modification application or appeal the decision.</p>
                        </AccordionItem>
                        <AccordionItem title="For launching a new food product in the licensed FBO, is it necessary to apply for modification?">
                            <p>Yes, adding a new food product category to your manufacturing or processing unit requires you to modify your existing FSSAI license before beginning commercial production or sales.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}