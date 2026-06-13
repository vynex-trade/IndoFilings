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

export default function InsuranceDispute() {
    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#243c7c] py-16 px-4 md:px-8 relative overflow-hidden">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                    {/* Left Side: Hero Copy */}
                    <div className="text-white space-y-6">
                        <div className="inline-block bg-[#1c3065] text-[#ff7600] text-xs font-bold px-4 py-1.5 rounded-full border border-blue-800 tracking-wider uppercase">
                            Online Dispute Resolution (ODR)
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                            Facing Trouble with Your <br />
                            <span className="text-[#ff7600]">Insurance Claim?</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 font-medium leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-4">
                            Tired of delayed or rejected insurance claims? Online Legal India helps you resolve them swiftly and professionally through Online Dispute Resolution (ODR).
                        </p>

                        <ul className="space-y-2 mt-6 text-sm text-blue-50 font-semibold">
                            <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Fast & Timely Resolutions</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> 100% Online & Confidential</li>
                        </ul>
                    </div>

                    {/* Right Side: Lead Form */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md text-gray-800 border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">File Insurance Claim Dispute</h2>
                                <p className="text-sm text-gray-500">Fill up the form for expert assistance</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input type="text" placeholder="Your Name *" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <input type="tel" placeholder="Your Mobile Number *" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <input type="email" placeholder="Your Email Address *" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm text-gray-600 appearance-none transition-all" required defaultValue="">
                                        <option value="" disabled>Select Insurance Type *</option>
                                        <option value="health">Health / Mediclaim</option>
                                        <option value="life">Life Insurance</option>
                                        <option value="vehicle">Vehicle / Motor Insurance</option>
                                        <option value="property">Property / Fire Insurance</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm text-gray-600 appearance-none transition-all" required defaultValue="">
                                        <option value="" disabled>Select State *</option>
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

            {/* 2. WHY CHOOSE ODR & COMMON DISPUTES */}
            <section className="py-16 px-4 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Why Choose ODR */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#243c7c] mb-6">Why Choose Online Dispute Resolution?</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-8"></div>
                        <div className="space-y-6">
                            {[
                                { title: "Timely Resolution", desc: "Handle disputes early and move forward without long court waits.", icon: "⏱️" },
                                { title: "Cost-Effective", desc: "Explore affordable ways to address and settle disputes.", icon: "💰" },
                                { title: "Confidential & Secure", desc: "Dispute related details and documentation are kept highly private.", icon: "🔒" },
                                { title: "Flexible Process", desc: "Participate from anywhere — home, office, or on the go.", icon: "🌍" },
                                { title: "Expert Mediators", desc: "Our experts are specialised in ODR mechanisms and insurance law.", icon: "⚖️" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start">
                                    <div className="text-2xl mr-4 bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">{item.icon}</div>
                                    <div className="pt-1">
                                        <h3 className="font-bold text-gray-900 text-lg leading-tight">{item.title}</h3>
                                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Common Disputes We Handle */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-inner border border-gray-100 h-fit">
                        <h2 className="text-2xl font-bold text-[#243c7c] mb-6">Common Insurance Disputes We Handle:</h2>
                        <ul className="space-y-4">
                            {[
                                "Wrongful claim rejection or delay",
                                "Unfair deductions in claim amount",
                                "Misinterpretation of policy terms",
                                "Non-payment of maturity or death benefits",
                                "Issues related to health, vehicle, fire, or life insurance"
                            ].map((issue, idx) => (
                                <li key={idx} className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                    <span className="text-[#ff7600] mr-3 text-xl leading-none">✔</span>
                                    <span className="text-sm font-semibold text-gray-800">{issue}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            {/* 3. WHO CAN USE ODR (Target Audience Cards) */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c] max-w-3xl mx-auto">
                            Who Can Use Online Dispute Resolution Services for Insurance Claims?
                        </h2>
                        <div className="w-24 h-1 bg-[#ff7600] mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#ff7600] hover:shadow-lg transition-all text-center group">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">👤</div>
                            <h3 className="font-bold text-[#243c7c] text-lg mb-2">Policyholders</h3>
                            <p className="text-sm text-gray-600">Facing delays, partial payments, or wrongful claim rejections.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#ff7600] hover:shadow-lg transition-all text-center group">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">👨‍👩‍👧‍👦</div>
                            <h3 className="font-bold text-[#243c7c] text-lg mb-2">Families of the Insured</h3>
                            <p className="text-sm text-gray-600">Whose legitimate death or accident claims are denied.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#ff7600] hover:shadow-lg transition-all text-center group">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
                            <h3 className="font-bold text-[#243c7c] text-lg mb-2">Businesses</h3>
                            <p className="text-sm text-gray-600">Seeking settlement for property, vehicle, or fire insurance claims.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#ff7600] hover:shadow-lg transition-all text-center group">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏦</div>
                            <h3 className="font-bold text-[#243c7c] text-lg mb-2">Insurance Companies</h3>
                            <p className="text-sm text-gray-600">Looking for fair, fast, and neutral mediation with policyholders.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. HOW IT WORKS (Process Flow) */}
            <section className="bg-white py-16 px-4 border-y border-gray-200">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-12">How It Works</h2>

                    <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-4">
                        {[
                            { title: "Fill out the online form", desc: "Submit your dispute details online." },
                            { title: "Receive a call", desc: "Our expert calls to understand your case." },
                            { title: "Your case is analysed", desc: "We review the policy and rejection grounds." },
                            { title: "Assigned to a professional", desc: "Case is assigned to an experienced mediator or arbitrator." }
                        ].map((step, index) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-full md:w-1/4 relative">
                                    <div className="w-14 h-14 rounded-full bg-[#243c7c] text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-2 border-[#ff7600]">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-base font-bold text-gray-800 mb-1 leading-snug">{step.title}</h3>
                                    <p className="text-sm text-gray-500 px-2">{step.desc}</p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden md:block text-[#ff7600] text-3xl font-light mt-4">⟶</div>
                                )}
                                {index < 3 && (
                                    <div className="md:hidden text-[#ff7600] text-3xl font-light">↓</div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. TEAM & WHY US */}
            <section className="py-16 px-4 bg-[#243c7c]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Our Team */}
                    <div className="text-white">
                        <h2 className="text-3xl font-bold mb-6">Our Team of Arbitrators & Mediators Includes:</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-8"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="bg-[#1c3065] p-5 rounded-lg border border-blue-800 flex items-center">
                                <span className="text-[#ff7600] text-2xl mr-3">✔</span>
                                <p className="font-bold text-sm">Former Judges,<br />Hon’ble High Court</p>
                            </div>
                            <div className="bg-[#1c3065] p-5 rounded-lg border border-blue-800 flex items-center">
                                <span className="text-[#ff7600] text-2xl mr-3">✔</span>
                                <p className="font-bold text-sm">Former Registrars, NCLT<br />and DRT, Govt. of India</p>
                            </div>
                        </div>

                        <div className="bg-white/10 p-5 rounded-lg border border-white/20 text-sm text-blue-100 leading-relaxed italic">
                            <strong className="text-[#ff7600] uppercase tracking-wider not-italic text-xs block mb-1">Disclaimer:</strong>
                            Our panel includes experienced, independent mediators and arbitrators, including retired judges and ex-senior tribunal officials (engaged in their private capacities). They act as neutrals and are not acting in any official judicial capacity for the Government of India.
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                        <h2 className="text-2xl font-bold text-[#243c7c] mb-6">Why Choose Us?</h2>
                        <ul className="space-y-4">
                            {[
                                "Recognised by the Government of India",
                                "5 Lakh+ Satisfied Clients Across India",
                                "ISO Certified Platform",
                                "Secure and Transparent Data Handling",
                                "Professional trained Experts and Mediators",
                                "Affordable, Timely, and Reliable Service",
                                "24×7 Support and Case Updates"
                            ].map((reason, idx) => (
                                <li key={idx} className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0 text-sm">✓</div>
                                    <span className="text-gray-700 font-semibold text-sm">{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            {/* 6. CALL TO ACTION */}
            <section className="py-16 bg-[#ff7600] text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                        Don’t Let Your Insurance Disputes Stay Unresolved
                    </h2>
                    <p className="text-orange-50 text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto">
                        Seek Professional Resolution with Online Legal India. We help you navigate complex claim issues and ensure you get what you’re entitled to — without the stress of long legal battles.
                    </p>
                    <button className="bg-white text-[#ff7600] font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1">
                        File Your Dispute Now
                    </button>
                </div>
            </section>

            {/* 7. FAQS & DISCLAIMER */}
            <section className="bg-white py-16 px-4 mt-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#243c7c]">FAQs – Frequently Asked Questions</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4 mb-8"></div>
                    </div>

                    <div className="space-y-2 mb-12">
                        <AccordionItem title="What is an Online Dispute Resolution?" defaultOpen={true}>
                            <p>ODR is a digital way to resolve disputes through mediation, conciliation, or arbitration conducted online. In simpler words, it is the conduct of the ADR (Alternative Dispute Resolution) process in an online environment. Consequently, ODR is not only legally permissible but has also gained broad recognition in India from the judiciary, the government, and business enterprises.</p>
                        </AccordionItem>
                        <AccordionItem title="Which types of insurance claims are covered?">
                            <p>We handle disputes across all major insurance categories including Health (Mediclaim), Life Insurance, Vehicle/Motor Insurance, Property, Fire, and Corporate/Business insurance policies.</p>
                        </AccordionItem>
                        <AccordionItem title="Who can file a dispute related to issues with an insurance claim?">
                            <p>Any individual policyholder, family member/nominee of an insured person, or business entity facing unfair delays, partial payments, or wrongful claim rejections can file a dispute through our platform.</p>
                        </AccordionItem>
                        <AccordionItem title="Is my data safe?">
                            <p>Yes. Online Legal India is an ISO-certified platform. We ensure that all documents, policy details, and personal information shared during the ODR process remain strictly confidential and encrypted.</p>
                        </AccordionItem>
                        <AccordionItem title="Are mediators qualified?">
                            <p>Yes, our panel consists of highly trained and certified professionals, including retired High Court judges, ex-tribunal registrars, and expert arbitrators specializing in insurance laws.</p>
                        </AccordionItem>
                    </div>

                    {/* Bottom Footer Disclaimer */}
                    <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 text-xs text-gray-500 text-justify leading-relaxed">
                        <strong className="text-gray-700 uppercase tracking-widest block mb-2">Disclaimer:</strong>
                        Online Legal India is a platform which provides ODR facilitation services. Nothing on this site constitutes legal advice. For legal representation in courts or tribunals, you are free to approach legal professionals. Results cannot be guaranteed and depend entirely on case specifics, policy terms, and the mediation process.
                    </div>

                </div>
            </section>

        </div>
    );
}