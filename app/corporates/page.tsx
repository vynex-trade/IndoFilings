"use client";

import React, { useState } from 'react';

type AccordionItemProps = {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
};

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

export default function CorporateAdvisory() {
    return (
        <div className="font-sans bg-gray-50 min-h-screen flex flex-col">

            {/* 1. HERO SECTION */}
            <section className="bg-[#243c7c] relative overflow-hidden">
                {/* Background Gradients & Accents */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#243c7c] via-[#1c3065] to-[#12224f]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-5 rounded-full blur-[120px] -translate-y-40 translate-x-40"></div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-white">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest mb-6 border border-white/20 uppercase text-blue-100">
                            <span className="w-2 h-2 bg-[#ff7600] rounded-full"></span>
                            Corporate Services
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.15] mb-6">
                            Strategic Advisory for <br />
                            <span className="text-[#ff7600]">Enterprises & Corporates</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-50 font-light leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-5">
                            Empowering institutional businesses to navigate complex legal frameworks, ensure strict compliance, and drive sustainable, risk-free growth.
                        </p>

                        <div className="mt-10 grid grid-cols-2 gap-6 max-w-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-[#ff7600]/20 flex items-center justify-center text-[#ff7600] font-bold text-lg">⚖️</div>
                                <span className="text-sm font-semibold text-blue-50 leading-tight">Legal & <br />Compliance</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-[#ff7600]/20 flex items-center justify-center text-[#ff7600] font-bold text-lg">📈</div>
                                <span className="text-sm font-semibold text-blue-50 leading-tight">M&A <br />Advisory</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-[#ff7600]/20 flex items-center justify-center text-[#ff7600] font-bold text-lg">🛡️</div>
                                <span className="text-sm font-semibold text-blue-50 leading-tight">Risk <br />Mitigation</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-[#ff7600]/20 flex items-center justify-center text-[#ff7600] font-bold text-lg">🏢</div>
                                <span className="text-sm font-semibold text-blue-50 leading-tight">Corporate <br />Restructuring</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM (B2B Focused) */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#ff7600]"></div>

                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-[#243c7c]">Request a Consultation</h2>
                                <p className="text-sm text-gray-500 mt-1">Connect with our corporate advisors</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input type="text" placeholder="Your Full Name *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-sm" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Company Name *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-sm" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Official Work Email *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-sm" />
                                </div>
                                <div>
                                    <input type="tel" placeholder="Mobile Number *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-sm" />
                                </div>
                                <div>
                                    <select required defaultValue="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-sm text-gray-600 appearance-none">
                                        <option value="" disabled>Select Primary Requirement *</option>
                                        <option>Corporate Compliance & Audit</option>
                                        <option>Mergers & Acquisitions (M&A)</option>
                                        <option>Intellectual Property Strategy</option>
                                        <option>Contract Drafting & Vetting</option>
                                        <option>General Corporate Advisory</option>
                                    </select>
                                </div>

                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 mt-2 text-base">
                                    Schedule Call
                                </button>
                            </form>

                            <div className="flex items-center justify-center gap-2 mt-5 text-gray-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                <span className="text-[11px] font-semibold uppercase tracking-wider">100% Confidential & Secure</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. CORE ADVISORY SERVICES GRID */}
            <section className="py-20 px-4 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c] mb-4">Core Advisory Solutions</h2>
                    <div className="w-24 h-1 bg-[#ff7600] mx-auto"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Comprehensive legal, financial, and strategic support tailored specifically for institutional businesses and large enterprises.</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: "Corporate Governance",
                            icon: "🏛️",
                            desc: "Ensuring board compliance, director duties, shareholder agreements, and strict adherence to the Companies Act."
                        },
                        {
                            title: "Mergers & Acquisitions",
                            icon: "🤝",
                            desc: "End-to-end M&A support including legal due diligence, term sheet drafting, and post-merger integration strategies."
                        },
                        {
                            title: "Regulatory Compliance",
                            icon: "📋",
                            desc: "Navigating complex sectoral regulations, RBI/FEMA guidelines, labor laws, and environmental compliances."
                        },
                        {
                            title: "Commercial Contracts",
                            icon: "✍️",
                            desc: "Drafting, vetting, and negotiating complex vendor agreements, NDAs, master service agreements, and joint ventures."
                        }
                    ].map((service, idx) => (
                        <div key={idx} className="bg-gray-50 border border-gray-200 hover:border-[#ff7600] hover:shadow-xl rounded-xl p-8 text-center transition-all duration-300 group">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#243c7c] mb-3">{service.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. WHY PARTNER WITH US */}
            <section className="py-20 px-4 bg-[#243c7c] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Enterprises Trust Our Advisory</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-8"></div>
                        <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                            Large corporations require precision, speed, and absolute confidentiality. Our dedicated enterprise team acts as an extension of your in-house legal and strategic departments.
                        </p>
                        <ul className="space-y-6">
                            {[
                                { title: "Specialized Industry Desks", desc: "Advisors with deep domain knowledge in IT, Manufacturing, Healthcare, and Finance." },
                                { title: "Pan-India Jurisdiction Support", desc: "Seamless handling of multi-state regulatory frameworks and localized compliances." },
                                { title: "Strict Data Confidentiality", desc: "ISO-certified infrastructure ensuring your corporate data is unbreachable." }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-[#ff7600] flex items-center justify-center mr-4 mt-0.5 shrink-0 text-sm font-bold">✓</div>
                                    <div>
                                        <h4 className="font-bold text-lg">{item.title}</h4>
                                        <p className="text-sm text-blue-200 mt-1">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#1c3065] p-8 rounded-xl border border-blue-800 text-center hover:bg-[#152554] transition">
                            <div className="text-4xl font-extrabold text-[#ff7600] mb-2">500+</div>
                            <div className="text-sm font-semibold text-blue-100 uppercase tracking-wider">Corporate Clients</div>
                        </div>
                        <div className="bg-[#1c3065] p-8 rounded-xl border border-blue-800 text-center hover:bg-[#152554] transition">
                            <div className="text-4xl font-extrabold text-[#ff7600] mb-2">₹10K Cr+</div>
                            <div className="text-sm font-semibold text-blue-100 uppercase tracking-wider">Deals Advised</div>
                        </div>
                        <div className="bg-[#1c3065] p-8 rounded-xl border border-blue-800 text-center hover:bg-[#152554] transition">
                            <div className="text-4xl font-extrabold text-[#ff7600] mb-2">15+</div>
                            <div className="text-sm font-semibold text-blue-100 uppercase tracking-wider">Years Experience</div>
                        </div>
                        <div className="bg-[#1c3065] p-8 rounded-xl border border-blue-800 text-center hover:bg-[#152554] transition">
                            <div className="text-4xl font-extrabold text-[#ff7600] mb-2">24/7</div>
                            <div className="text-sm font-semibold text-blue-100 uppercase tracking-wider">Priority Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. OUR PROCESS */}
            <section className="bg-gray-50 py-20 px-4 border-b border-gray-200">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-14">Our Engagement Process</h2>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
                        {[
                            { step: "1", title: "Discovery", desc: "Initial high-level briefing with your leadership team." },
                            { step: "2", title: "Audit & Due Diligence", desc: "Deep dive into existing legal frameworks and risks." },
                            { step: "3", title: "Strategy Formulation", desc: "Crafting a bespoke, compliant corporate strategy." },
                            { step: "4", title: "Execution & Oversight", desc: "Ongoing retainer support for seamless implementation." }
                        ].map((phase, index) => (
                            <React.Fragment key={index}>
                                <div className="flex-1 text-center relative group">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-white border-2 border-[#243c7c] text-[#243c7c] flex items-center justify-center text-xl font-bold mb-4 shadow-md group-hover:bg-[#ff7600] group-hover:border-[#ff7600] group-hover:text-white transition-all duration-300 z-10 relative">
                                        {phase.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{phase.title}</h3>
                                    <p className="text-sm text-gray-500 px-2">{phase.desc}</p>

                                    {index < 3 && (
                                        <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-[2px] bg-gray-300 z-0"></div>
                                    )}
                                    {index < 3 && <div className="md:hidden text-gray-300 text-2xl my-2">↓</div>}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FAQS */}
            <section className="py-20 px-4 bg-white mt-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Frequently Asked Questions</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="Who is this advisory service designed for?" defaultOpen={true}>
                            <p>Our Corporate Advisory services are exclusively tailored for mid-to-large cap enterprises, institutional businesses, multinational corporations (MNCs), and rapidly scaling high-growth companies that require dedicated legal, compliance, and strategic structuring.</p>
                        </AccordionItem>

                        <AccordionItem title="Do you provide ongoing retainer services?">
                            <p>Yes. While we handle one-off projects like M&A deals or corporate restructuring, the majority of our enterprise clients engage with us on a monthly retainer basis to act as an extension of their in-house legal and compliance teams.</p>
                        </AccordionItem>

                        <AccordionItem title="How do you handle confidentiality and data security?">
                            <p>We adhere to strict non-disclosure agreements (NDAs) before any discussions begin. Furthermore, our platform and data-handling protocols are ISO certified, ensuring enterprise-grade security for all your sensitive corporate data.</p>
                        </AccordionItem>

                        <AccordionItem title="Can you assist with foreign direct investment (FDI) compliances?">
                            <p>Absolutely. Our team includes experts in FEMA (Foreign Exchange Management Act) and RBI guidelines, helping institutional businesses structure foreign investments, joint ventures, and cross-border transactions compliantly.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}