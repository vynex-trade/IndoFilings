"use client";

import React, { useState } from 'react';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

// --- Reusable Accordion Component ---
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

export default function GstCancellation() {
    return (
        <div className="font-sans bg-gray-50 min-h-screen flex flex-col">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#243c7c] relative overflow-hidden">
                {/* Background Gradients & Accents */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#243c7c] via-[#1c3065] to-[#12224f]"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[100px] -translate-y-20 translate-x-20"></div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-white">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6 border border-white/20 uppercase text-blue-100">
                            <span className="w-2 h-2 bg-[#ff7600] rounded-full"></span>
                            Easy Online Process
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            GST Surrender or <br />
                            <span className="text-[#ff7600]">Cancellation Now</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-50 font-light leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-5">
                            Your GST registration can be cancelled at anytime due to various reasons. You can easily cancel a GST registration online through Online Legal India.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-10">
                            <div className="flex items-center bg-[#1c3065] px-5 py-3 rounded-lg border border-blue-800 shadow-md">
                                <span className="text-[#ff7600] text-2xl mr-3">👥</span>
                                <div>
                                    <p className="text-xl font-bold text-white leading-none">5 Lac+</p>
                                    <p className="text-xs text-blue-200 uppercase tracking-wider mt-1">Happy Clients</p>
                                </div>
                            </div>
                            <div className="flex items-center bg-[#1c3065] px-5 py-3 rounded-lg border border-blue-800 shadow-md">
                                <span className="text-[#ff7600] text-2xl mr-3">💳</span>
                                <div>
                                    <p className="text-xl font-bold text-white leading-none">Easy EMI</p>
                                    <p className="text-xs text-blue-200 uppercase tracking-wider mt-1">Options Available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-[#243c7c]">GST Cancellation Form</h2>
                                <p className="text-sm text-gray-500 mt-1">Fill up the below mentioned form</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input type="text" placeholder="Your Name *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-sm" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Your Email Address *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-sm" />
                                </div>
                                <div>
                                    <input type="tel" placeholder="Your Phone Number (Without 0 or +91) *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-sm" />
                                </div>
                                <div>
                                    <select required defaultValue="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-sm text-gray-600 appearance-none">
                                        <option value="" disabled>Select State *</option>
                                        <option>Maharashtra</option>
                                        <option>Delhi</option>
                                        <option>Gujarat</option>
                                        <option>Karnataka</option>
                                        <option>Tamil Nadu</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                {/* File Upload UI */}
                                <div>
                                    <label className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            <span className="text-sm text-gray-500 font-medium">Attach File (Optional)</span>
                                        </div>
                                        <input type="file" className="hidden" />
                                    </label>
                                </div>

                                {/* Captcha UI */}
                                <div className="flex gap-3 items-center pt-2">
                                    <div className="bg-gray-200 text-gray-700 font-serif italic font-bold tracking-[0.4em] px-4 py-3 rounded-md border border-gray-300 select-none w-1/3 text-center text-lg">
                                        5 5 8 1
                                    </div>
                                    <input type="text" placeholder="Enter captcha here.." required className="w-2/3 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" />
                                </div>

                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 mt-2 text-base">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. OVERVIEW & REASONS FOR CANCELLATION */}
            <section className="py-20 px-4 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Overview */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#243c7c] mb-6">Overview</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-8"></div>
                        <p className="text-gray-600 leading-relaxed text-lg mb-4">
                            GST Registration can be cancelled by any person who is no longer required to file GST Return if either his annual turnover is below the GST exemption limit or the taxpayer is no longer liable to be a registered person or any other reasons.
                        </p>
                        <div className="bg-orange-50 border-l-4 border-[#ff7600] p-4 rounded-r-lg">
                            <p className="text-sm font-semibold text-gray-800 flex items-center">
                                <span className="text-[#ff7600] text-xl mr-2">⚠️</span>
                                Note: One must settle all the GST liability before they could apply for cancellation of GSTIN.
                            </p>
                        </div>
                    </div>

                    {/* Reasons List */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-bold text-[#243c7c] mb-6">When Do We Go For GST Cancellation?</h3>
                        <ul className="space-y-4">
                            {[
                                "Non-filing of GST Returns for 6 months.",
                                "Non-Filing of GST Returns for 3 months u/s 10 of GST act.",
                                "No business activity – If its close or death of the proprietor, discontinued or transferred fully, demerged, amalgamated with other legal entity.",
                                "Unlawful GST Registration (Obtained by fraud, willful misstatement or suppression of facts).",
                                "Voluntary cancellation by the taxpayer.",
                                "Non-Voluntary / SUO Moto Cancellation by Tax Officer.",
                                "Change any constitution of business or any taxable person other than u/s 25(3) and u/s 22 & 24 of GST act."
                            ].map((reason, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-[#ff7600] mt-0.5 mr-3 text-lg">✔</span>
                                    <span className="text-sm text-gray-700 font-medium leading-relaxed">{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            {/* 3. HOW WE HELP (3 Steps) */}
            <section className="bg-[#243c7c] text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How Online Legal India Help with Cancellation</h2>
                    <div className="w-24 h-1 bg-[#ff7600] mx-auto mb-6"></div>
                    <p className="text-blue-100 mb-12 max-w-2xl mx-auto">Online Legal India will help you cancel GST registration within 30-60 days, subject to Government processing times.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#1c3065] border border-blue-800 p-8 rounded-2xl hover:bg-[#152554] transition text-left">
                            <div className="w-12 h-12 bg-[#ff7600] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">1</div>
                            <h3 className="text-xl font-bold mb-3">Application Preparation</h3>
                            <p className="text-sm text-blue-100 leading-relaxed">Dedicated GST Expert will prepare your GST registration cancellation application and collect the necessary documents for filing of application with the GST Department.</p>
                        </div>

                        <div className="bg-[#1c3065] border border-blue-800 p-8 rounded-2xl hover:bg-[#152554] transition text-left">
                            <div className="w-12 h-12 bg-[#ff7600] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">2</div>
                            <h3 className="text-xl font-bold mb-3">Application Filing</h3>
                            <p className="text-sm text-blue-100 leading-relaxed">Once the application is prepared and verified, our GST expert will submit the GST registration cancellation application to the GST Department along with details of Authorized Signatory.</p>
                        </div>

                        <div className="bg-[#1c3065] border border-blue-800 p-8 rounded-2xl hover:bg-[#152554] transition text-left">
                            <div className="w-12 h-12 bg-[#ff7600] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">3</div>
                            <h3 className="text-xl font-bold mb-3">Application Tracking</h3>
                            <p className="text-sm text-blue-100 leading-relaxed">Once the application and the attached supporting documents are uploaded, the GST Department allots an ARN number. Our expert will track the ARN number to completion.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PRICING PACKAGES */}
            <section className="py-20 px-4 bg-gray-50 border-b border-gray-200">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c]">Select Packages</h2>
                        <div className="w-24 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                        {/* Basic Plan */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Basic Plan</h3>
                                <p className="text-xs text-gray-500 mt-2 font-medium">Requested by Taxpayer (If turnover below 20Lac / Closer of business / other cases)</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#243c7c]">₹ 1,499</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Application FORM GST REG 16</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Notice FORM GST REG-17</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Drafting FORM REG–18 within 7 days</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Cancellation Order FORM GST REG-19</li>
                            </ul>
                            <button className="w-full bg-white border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                Buy Now
                            </button>
                        </div>

                        {/* Standard Plan (Highlighted) */}
                        <div className="bg-[#243c7c] rounded-2xl shadow-2xl p-8 flex flex-col text-white transform md:-translate-y-4 relative overflow-hidden border-2 border-[#ff7600]">
                            <div className="absolute top-0 right-0 bg-[#ff7600] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>

                            <div className="text-center pb-6 border-b border-white/20 mb-6">
                                <h3 className="text-xl font-bold">Standard Plan</h3>
                                <p className="text-xs text-blue-200 mt-2 font-medium">Tax Officer (Suo-moto Cancellation)</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#ff7600]">₹ 2,999</span>
                            </div>
                            <ul className="text-sm text-blue-50 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Application of filing Revocation</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Application FORM GST REG-21 (30 days)</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Order FORM GST REG-22 (30 days)</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Show cause notice FORM GST REG–23</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Clarification FORM GST REG-24</li>
                            </ul>
                            <button className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3 rounded-md shadow-lg transition duration-300">
                                Buy Now
                            </button>
                        </div>

                        {/* Premium Plan */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Premium Plan</h3>
                                <p className="text-xs text-gray-500 mt-2 font-medium">Appeal for Registration / Demand Notice</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#243c7c]">₹ 4,999</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Application of filing Revocation</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> All FORM GST REG (21, 22, 23, 24)</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Drafting or Preparation of appeal</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Appeal Filing APL-01 (Online) Reply etc.</li>
                            </ul>
                            <button className="w-full bg-white border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                Buy Now
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. HOW WE WORK (Process Flow) */}
            <section className="bg-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-14">How we work?</h2>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
                        {[
                            "Fill the Form Make the Payment",
                            "GST expert will consult on surrender",
                            "Expert collects details & cancel reasons",
                            "Expert files GST REG-16 with department",
                            "Success submission & acknowledgment 👍"
                        ].map((step, index) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-full md:w-1/5 relative">
                                    <div className="w-14 h-14 rounded-full bg-[#243c7c] text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-2 border-[#ff7600] z-10">
                                        {index + 1}
                                    </div>
                                    <p className="text-sm font-semibold text-gray-700 px-2 leading-snug">{step}</p>
                                </div>
                                {index < 4 && (
                                    <div className="hidden md:block text-[#ff7600] text-3xl font-light">⟶</div>
                                )}
                                {index < 4 && (
                                    <div className="md:hidden text-[#ff7600] text-3xl font-light my-2">↓</div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQS */}
            <section className="py-20 px-4 bg-gray-50 border-t border-gray-200 mt-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Frequently Asked Questions (FAQ)</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="Should we still file the GST returns in the transaction period?" defaultOpen={true}>
                            <p>Yes, you must continue to file the returns until the final cancellation order is officially passed by the GST officer. This safeguards you from accumulating late fees and penalties during the processing period.</p>
                        </AccordionItem>

                        <AccordionItem title="How long does it take to cancel GST registration?">
                            <p>Once the application (Form GST REG-16) is filed with all the correct supporting documents, the proper officer is legally required to issue an order for cancellation within <strong>30 days</strong> from the date of submission.</p>
                        </AccordionItem>

                        <AccordionItem title="Do I need to physically present for the process?">
                            <p>No, the entire process of GST cancellation is <strong>100% online</strong>. You just need to share the required details and OTPs with our dedicated GST expert, who will handle the filing on the GST portal on your behalf.</p>
                        </AccordionItem>

                        <AccordionItem title="How will I know if my GST registration is likely to be cancelled?">
                            <p>If the tax officer initiates the cancellation (Suo Moto), they will first issue a <strong>Show Cause Notice in Form GST REG-17</strong>. You will receive this notice via email and SMS, giving you 7 days to reply and clarify why it shouldn't be cancelled.</p>
                        </AccordionItem>

                        <AccordionItem title="Can we revoke the GST registration after GST cancellation?">
                            <p>Yes. If your registration was cancelled by the tax officer (Suo Moto cancellation) and not voluntarily, you can apply for revocation using <strong>Form GST REG-21</strong>. This application must be filed within <strong>30 days</strong> of the date of the cancellation order.</p>
                        </AccordionItem>

                        <AccordionItem title="What is Suo Moto Cancellation in GST?">
                            <p>Suo Moto cancellation means the GST Officer initiates the cancellation of a taxpayer’s GST registration on their own. This usually happens if the taxpayer fails to file returns for a continuous period of 6 months, violates GST rules, or conducts business fraudulently.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}