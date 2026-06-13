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

export default function LabourDispute() {
    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#243c7c] py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Hero Copy */}
                    <div className="text-white space-y-6">
                        <div className="inline-block bg-[#1c3065] text-green-400 text-xs font-bold px-4 py-1.5 rounded-full border border-blue-800 tracking-wider">
                            ONLINE DISPUTE RESOLUTION (ODR)
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                            Say Goodbye to <br />
                            <span className="text-[#ff7600]">long legal battles</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 font-medium leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-4">
                            Online Legal India brings you a quick and smart way to resolve Labour disputes online without the hassle of traditional courts.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-6">
                            <span className="flex items-center text-sm bg-white/10 px-3 py-1.5 rounded text-blue-50">
                                <span className="text-[#ff7600] mr-2">⚖️</span> 100% Legal & Neutral
                            </span>
                            <span className="flex items-center text-sm bg-white/10 px-3 py-1.5 rounded text-blue-50">
                                <span className="text-[#ff7600] mr-2">🔒</span> Highly Confidential
                            </span>
                        </div>
                    </div>

                    {/* Right Side: Lead Form */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md text-gray-800 border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">File Labour Dispute Online</h2>
                                <p className="text-sm text-gray-500">Fill up the form to get expert assistance</p>
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

            {/* 2. ACTS COVERED */}
            <section className="py-16 px-4 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Acts Covered under Labour Dispute Resolution</h2>
                        <div className="w-24 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Industrial Disputes Act, 1947",
                            "Equal Remuneration Act, 1976",
                            "Payment of Gratuity Act, 1972",
                            "Maternity Benefit Act, 1961",
                            "Minimum Wages Act, 1948",
                            "Payment of Wages Act, 1936"
                        ].map((act, index) => (
                            <div key={index} className="flex items-center p-5 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#243c7c] hover:shadow-md transition-all group">
                                <div className="w-10 h-10 rounded-full bg-blue-100 text-[#243c7c] flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-[#243c7c] group-hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                </div>
                                <p className="font-bold text-gray-800 text-sm leading-tight">{act}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. WHY CHOOSE ODR & WHO CAN OPT (Split Section) */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Why Choose ODR */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#243c7c] mb-8">Why Choose Online Dispute Resolution?</h2>
                        <div className="space-y-6">
                            {[
                                { title: "Efficiency", desc: "Resolve disputes faster than traditional court cases", icon: "⚡" },
                                { title: "Cost-Effective", desc: "Save time and heavy legal expenses", icon: "💰" },
                                { title: "Confidentiality", desc: "Your personal and corporate information remains secure", icon: "🔒" },
                                { title: "Flexibility", desc: "Easy scheduling and less formal, rigid procedures", icon: "🗓️" },
                                { title: "Expert Mediators", desc: "Skilled professionals for effective, neutral resolutions", icon: "🤝" }
                            ].map((item, i) => (
                                <div key={i} className="flex">
                                    <div className="text-2xl mr-4 mt-1 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">{item.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Who Can Opt */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#243c7c] mb-2">Who Can Opt for Labour Dispute ODR Services?</h2>
                        <div className="w-12 h-1 bg-[#ff7600] mb-8"></div>

                        <ul className="space-y-5">
                            <li className="flex items-start bg-orange-50 p-4 rounded-lg border border-orange-100">
                                <span className="text-[#ff7600] mr-3 text-lg">✔</span>
                                <span className="text-sm font-semibold text-gray-800">Employees facing wage discrepancies or workplace harassment issues.</span>
                            </li>
                            <li className="flex items-start bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <span className="text-[#243c7c] mr-3 text-lg">✔</span>
                                <span className="text-sm font-semibold text-gray-800">Entities dealing with Employment & HR Disputes.</span>
                            </li>
                            <li className="flex items-start bg-orange-50 p-4 rounded-lg border border-orange-100">
                                <span className="text-[#ff7600] mr-3 text-lg">✔</span>
                                <span className="text-sm font-semibold text-gray-800">Cases involving breach of employment contract or unfair labour practices.</span>
                            </li>
                            <li className="flex items-start bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <span className="text-[#243c7c] mr-3 text-lg">✔</span>
                                <span className="text-sm font-semibold text-gray-800">Apprentices or trainees (in disputes about stipends or sudden termination).</span>
                            </li>
                            <li className="flex items-start bg-orange-50 p-4 rounded-lg border border-orange-100">
                                <span className="text-[#ff7600] mr-3 text-lg">✔</span>
                                <span className="text-sm font-semibold text-gray-800">Freelance or Gig Work Disagreements and contract settlements.</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* 4. HOW IT WORKS (Process) */}
            <section className="bg-white py-16 px-4 border-y border-gray-200">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-12">How It Works</h2>

                    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
                        {[
                            "Fill out the online form",
                            "Receive a call from our expert",
                            "Your case is analyzed",
                            "Assigned to a professional expert"
                        ].map((step, index) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-full md:w-1/4 relative">
                                    <div className="w-14 h-14 rounded-full bg-[#243c7c] text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-2 border-[#ff7600]">
                                        {index + 1}
                                    </div>
                                    <p className="text-[15px] font-bold text-gray-700 px-2 leading-snug">{step}</p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden md:block text-[#ff7600] text-3xl font-light">⟶</div>
                                )}
                                {index < 3 && (
                                    <div className="md:hidden text-[#ff7600] text-3xl font-light">↓</div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. WHY US (Trust Badges Grid) */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Why Us?</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { title: "Recognised by Govt. of India", icon: "🇮🇳" },
                            { title: "5 Lakh+ Happy Clients", icon: "👥" },
                            { title: "ISO Certified", icon: "🎖️" },
                            { title: "Data Security & Trust", icon: "🔐" },
                            { title: "Trained & Professional Experts", icon: "👨‍⚖️" },
                            { title: "Affordable & Time-Saving Services", icon: "⏳" }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg hover:border-[#ff7600] transition-all">
                                <div className="text-4xl mb-3">{feature.icon}</div>
                                <h3 className="font-bold text-[#243c7c] text-sm md:text-base leading-tight">{feature.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. OUR PANEL & DISCLAIMER (Dark Section) */}
            <section className="py-16 px-4 bg-[#243c7c] text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-[#ff7600]">Our Elite Panel Includes</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-[#1c3065] p-6 rounded-lg border border-blue-800">
                            <div className="text-3xl mb-2">⚖️</div>
                            <p className="font-bold text-lg">Former High Court Judges</p>
                        </div>
                        <div className="bg-[#1c3065] p-6 rounded-lg border border-blue-800">
                            <div className="text-3xl mb-2">🏛️</div>
                            <p className="font-bold text-lg">Ex-Registrars of NCLT & DRT</p>
                        </div>
                        <div className="bg-[#1c3065] p-6 rounded-lg border border-blue-800">
                            <div className="text-3xl mb-2">🤝</div>
                            <p className="font-bold text-lg">IIAM Certified Mediators, Members of APCAM</p>
                        </div>
                    </div>

                    <div className="border border-white/20 bg-white/5 p-6 rounded-lg inline-block">
                        <h4 className="text-[#ff7600] font-bold uppercase tracking-widest text-sm mb-2">Disclaimer</h4>
                        <p className="text-sm text-blue-100 font-medium">
                            Our mediators act strictly in a neutral, private, and non-judicial capacity.
                        </p>
                    </div>
                </div>
            </section>

            {/* 7. FINAL CALL TO ACTION */}
            <section className="py-12 bg-[#ff7600] text-center px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Don’t Let Labour Disputes Stay Unresolved</h2>
                <p className="text-orange-100 text-lg font-medium">Try to Solve them With Online Dispute Resolution Today</p>
            </section>

            {/* 8. FAQS */}
            <section className="bg-white py-16 px-4 mt-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#243c7c]">FAQs – Frequently Asked Questions</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4 mb-8"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="Who can use these services?" defaultOpen={true}>
                            <p>Employees with wage or harassment issues, as well as those involved in employment and HR Disputes, Breach of employment contracts, or unfair labour practices, Apprentices or trainees (in disputes about stipends or termination), or Freelance or Gig Work Disagreements can utilise our ODR services for disputes related to wages, termination, harassment, or contractual issues. This includes freelancers, contract workers, and organisations of any size.</p>
                        </AccordionItem>
                        <AccordionItem title="Are the mediators qualified?">
                            <p>Absolutely. Our panel includes highly qualified professionals, including Former High Court Judges, Ex-Registrars of NCLT & DRT, and IIAM Certified Mediators. They are experts in ensuring fair, neutral, and effective dispute resolution.</p>
                        </AccordionItem>
                        <AccordionItem title="Is the service recognised by the government?">
                            <p>Yes, Online Dispute Resolution (ODR) mechanisms are recognized and encouraged by the Indian legal system and the Government of India as a valid form of Alternative Dispute Resolution (ADR) to reduce court burdens.</p>
                        </AccordionItem>
                        <AccordionItem title="How secure is my information?">
                            <p>We maintain strict ISO-certified data security protocols. As mediation happens in a private capacity, everything discussed or shared during the ODR process remains 100% confidential and is not accessible to public records.</p>
                        </AccordionItem>
                        <AccordionItem title="Can I submit my dispute from anywhere?">
                            <p>Yes. The primary advantage of Online Dispute Resolution is that it is completely digital. You can submit your case, attend mediation sessions, and reach a resolution from the comfort of your home or office anywhere in India.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}