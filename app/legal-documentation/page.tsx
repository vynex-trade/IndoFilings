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

export default function LegalDocumentation() {
    return (
        <div className="font-sans bg-gray-50 min-h-screen flex flex-col">

            {/* 1. HERO SECTION */}
            <section className="bg-[#243c7c] relative overflow-hidden">
                {/* Background Gradients & Accents */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#243c7c] via-[#1c3065] to-[#12224f]"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff7600]/10 rounded-full blur-[100px] -translate-y-20 translate-x-20"></div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-white">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6 border border-white/20 uppercase text-blue-100">
                            <span className="w-2 h-2 bg-[#ff7600] rounded-full"></span>
                            Expert Contract Drafting
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            Professional <br />
                            <span className="text-[#ff7600]">Legal Documentation</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-50 font-light leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-5">
                            Protect your business and personal assets with iron-clad agreements. Custom-drafted by experienced corporate lawyers, tailored to your exact needs.
                        </p>

                        <ul className="mt-8 space-y-3">
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-[#ff7600] text-white flex items-center justify-center mr-3 font-bold">✓</span>
                                No Generic Templates — 100% Custom Drafted
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-[#ff7600] text-white flex items-center justify-center mr-3 font-bold">✓</span>
                                Vetted by Expert Corporate Advocates
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-[#ff7600] text-white flex items-center justify-center mr-3 font-bold">✓</span>
                                Free Iterations & Revisions Included
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-[#243c7c]">Draft Your Document</h2>
                                <p className="text-sm text-gray-500 mt-1">Get a free quote from our legal experts</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input type="text" placeholder="Your Full Name *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <input type="tel" placeholder="Mobile Number *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <select required defaultValue="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px] text-gray-600 appearance-none">
                                        <option value="" disabled>Select Document Type *</option>
                                        <option>Non-Disclosure Agreement (NDA)</option>
                                        <option>Co-Founder / Partnership Agreement</option>
                                        <option>Employment / HR Contract</option>
                                        <option>Website T&C and Privacy Policy</option>
                                        <option>Vendor / Service Level Agreement (SLA)</option>
                                        <option>Legal Notice / Cease & Desist</option>
                                        <option>Rent / Lease Agreement</option>
                                        <option>Other / Not Sure</option>
                                    </select>
                                </div>

                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 mt-2 text-base">
                                    Request Free Consultation
                                </button>
                            </form>

                            <div className="flex items-center justify-center gap-2 mt-5 text-gray-400">
                                <span className="text-lg">⚖️</span>
                                <span className="text-[11px] font-bold uppercase tracking-wider">Confidential & Attorney-Client Privileged</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. TRUST STATS */}
            <section className="bg-white border-b border-gray-200 py-10">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-[#243c7c] text-3xl mb-2">📑</div>
                        <h3 className="font-bold text-gray-800">50,000+</h3>
                        <p className="text-xs text-gray-500 mt-1 uppercase font-semibold">Documents Drafted</p>
                    </div>
                    <div>
                        <div className="text-[#243c7c] text-3xl mb-2">👨‍⚖️</div>
                        <h3 className="font-bold text-gray-800">10+ Years</h3>
                        <p className="text-xs text-gray-500 mt-1 uppercase font-semibold">Expert Lawyer Panel</p>
                    </div>
                    <div>
                        <div className="text-[#243c7c] text-3xl mb-2">⏱️</div>
                        <h3 className="font-bold text-gray-800">3-4 Days</h3>
                        <p className="text-xs text-gray-500 mt-1 uppercase font-semibold">Fast Turnaround Time</p>
                    </div>
                    <div>
                        <div className="text-[#243c7c] text-3xl mb-2">🔄</div>
                        <h3 className="font-bold text-gray-800">100% Custom</h3>
                        <p className="text-xs text-gray-500 mt-1 uppercase font-semibold">Zero Copy-Paste Templates</p>
                    </div>
                </div>
            </section>

            {/* 3. DOCUMENTS WE DRAFT (Grid) */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c] mb-4">Legal Documents We Draft & Vet</h2>
                    <div className="w-24 h-1 bg-[#ff7600] mx-auto"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">From early-stage startup agreements to complex corporate contracts, our legal experts ensure your interests are legally binding and protected.</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Category 1 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-[#ff7600] transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl mb-5">🤝</div>
                        <h3 className="text-xl font-bold text-[#243c7c] mb-4 border-b border-gray-100 pb-2">Business & Founders</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Co-Founder Agreement</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Non-Disclosure Agreement (NDA)</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Memorandum of Understanding (MoU)</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Franchise Agreement</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Shareholder's Agreement (SHA)</li>
                        </ul>
                    </div>

                    {/* Category 2 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-[#ff7600] transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl mb-5">👥</div>
                        <h3 className="text-xl font-bold text-[#243c7c] mb-4 border-b border-gray-100 pb-2">HR & Employment</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Employment Contract</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Offer / Relieving Letters</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Non-Compete Agreement</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Freelancer / Consultant Agreement</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> HR Policy Manual / POSH Policy</li>
                        </ul>
                    </div>

                    {/* Category 3 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-[#ff7600] transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl mb-5">💻</div>
                        <h3 className="text-xl font-bold text-[#243c7c] mb-4 border-b border-gray-100 pb-2">IT, Web & Digital</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Website Terms & Conditions</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Privacy Policy (GDPR/DPDP Compliant)</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Software Development Agreement</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> SaaS Subscription Agreement</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Service Level Agreement (SLA)</li>
                        </ul>
                    </div>

                    {/* Category 4 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-[#ff7600] transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl mb-5">📦</div>
                        <h3 className="text-xl font-bold text-[#243c7c] mb-4 border-b border-gray-100 pb-2">Vendor & Commercial</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Master Service Agreement (MSA)</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Vendor / Supplier Agreement</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Distributor Agreement</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Marketing / Agency Agreement</li>
                        </ul>
                    </div>

                    {/* Category 5 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-[#ff7600] transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl mb-5">🏢</div>
                        <h3 className="text-xl font-bold text-[#243c7c] mb-4 border-b border-gray-100 pb-2">Property & Real Estate</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Commercial Lease Agreement</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Residential Rent Agreement</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Sale Deed Drafting</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Property Title Search Report</li>
                        </ul>
                    </div>

                    {/* Category 6 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-[#ff7600] transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl mb-5">⚖️</div>
                        <h3 className="text-xl font-bold text-[#243c7c] mb-4 border-b border-gray-100 pb-2">Notices & Disputes</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Legal Notice Drafting</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Cheque Bounce Notice (Sec 138)</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Cease and Desist Notice</li>
                            <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Payment Recovery Notice</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* 4. WHY CUSTOM DRAFTING (Split Section) */}
            <section className="py-20 px-4 bg-white border-y border-gray-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-3xl font-bold text-[#243c7c] mb-6 leading-tight">
                            Why Downloading Free Templates <span className="text-[#ff7600]">is a Massive Risk</span>
                        </h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-8"></div>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Business owners often download free contract templates from the internet to save money. However, a contract is only as good as its enforceability in an Indian Court of Law. Generic templates often lack jurisdiction-specific clauses, leaving massive loopholes for disputes.
                        </p>

                        <ul className="space-y-6">
                            {[
                                { title: "Tailored to Your Specific Edge Cases", desc: "Our lawyers draft clauses specific to the exact risks of your unique business model." },
                                { title: "Indian Jurisdiction Compliance", desc: "Ensuring your agreement aligns perfectly with the Indian Contract Act, 1872 and latest Supreme Court rulings." },
                                { title: "Dispute Resolution & Arbitration Clauses", desc: "Properly structured clauses that dictate exactly how and where disputes will be resolved, saving you years of court battles." }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center mr-4 mt-0.5 shrink-0 text-sm font-bold border border-red-100">!</div>
                                    <div>
                                        <h4 className="font-bold text-[#243c7c] text-lg">{item.title}</h4>
                                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#243c7c] p-10 rounded-2xl shadow-2xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff7600] opacity-20 rounded-full blur-2xl"></div>
                        <h3 className="text-2xl font-bold mb-6">Our Vetting & Drafting Guarantee</h3>
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">✓</span> Initial Consultation Call with Lawyer</li>
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">✓</span> First Draft Delivered in 3-4 Working Days</li>
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">✓</span> 2 Rounds of Free Revisions/Iterations</li>
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">✓</span> Final Formatted PDF & Editable Word File</li>
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">✓</span> Post-Drafting Execution Guidance (e-Stamping)</li>
                        </ul>
                        <div className="mt-8 pt-6 border-t border-white/20">
                            <p className="text-blue-200 italic">"A well-drafted contract doesn't just win court cases; it prevents them from happening in the first place."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. HOW IT WORKS (Process Flow) */}
            <section className="bg-gray-50 py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-14">How We Work?</h2>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
                        {[
                            { step: "1", title: "Requirement Gathering", desc: "Fill the form. Our expert calls to understand your specific clauses and needs." },
                            { step: "2", title: "Allocation to Lawyer", desc: "A domain-expert advocate is assigned to your specific document type." },
                            { step: "3", title: "Drafting & Review", desc: "We prepare the first draft and share it with you for review and feedback." },
                            { step: "4", title: "Final Delivery", desc: "After revisions, the final iron-clad legal document is delivered to your email." }
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

            {/* 6. FAQS */}
            <section className="py-20 px-4 bg-white border-t border-gray-200 mt-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Frequently Asked Questions</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="Do I need to visit a lawyer's office to get my contract drafted?" defaultOpen={true}>
                            <p>No, our entire process is 100% online and digital. Our expert lawyers will coordinate with you over phone calls and emails to understand your requirements, draft the document, and deliver it to your inbox.</p>
                        </AccordionItem>

                        <AccordionItem title="Can you review and vet a contract that I already have?">
                            <p>Yes. If you have already been handed a contract by a vendor, employer, or partner, our lawyers can perform "Contract Vetting". We will review the document, highlight risky clauses, and suggest edits to protect your interests before you sign.</p>
                        </AccordionItem>

                        <AccordionItem title="How long does it take to draft a legal document?">
                            <p>Standard documents like NDAs, Offer Letters, or Website T&Cs usually take 2-3 working days. Highly complex agreements like Founders Agreements or Commercial Leases may take 4-6 days depending on the negotiation of clauses and revisions.</p>
                        </AccordionItem>

                        <AccordionItem title="Are these documents legally valid in court?">
                            <p>Absolutely. All our documents are drafted strictly in accordance with the Indian Contract Act, 1872, and other relevant state and central laws, making them fully enforceable in Indian courts and arbitration tribunals.</p>
                        </AccordionItem>

                        <AccordionItem title="Do you provide e-stamping and signature services?">
                            <p>Yes, once the draft is finalized, we can guide you on the exact stamp duty required in your state. We also provide integrated e-stamping and digital signature services at an additional nominal cost to fully execute the contract without leaving your home.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}