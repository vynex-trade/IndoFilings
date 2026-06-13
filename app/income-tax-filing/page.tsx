"use client";

import React, { ReactNode, useState } from 'react';

type AccordionItemProps = {
    title: string;
    children: ReactNode;
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

export default function IncomeTaxFiling() {
    return (
        <div className="font-sans bg-gray-50 min-h-screen flex flex-col">

            {/* 1. HERO SECTION */}
            <section className="bg-[#243c7c] relative overflow-hidden">
                {/* Background Gradients & Accents */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#243c7c] via-[#1c3065] to-[#12224f]"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[100px] -translate-y-20 translate-x-20"></div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-white">
                        <div className="inline-flex items-center gap-2 bg-red-500/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6 border border-red-500/30 uppercase text-red-100 animate-pulse">
                            <span className="text-red-400">⚠️</span> Avoid Late Penalty up to ₹5,000
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            File Your Income Tax <br />
                            <span className="text-[#ff7600]">Return (ITR) Online</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-50 font-light leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-5">
                            Maximize your tax refunds and ensure 100% compliance with the help of our dedicated Chartered Accountants. Fast, secure, and error-free filing.
                        </p>

                        <ul className="mt-8 space-y-3">
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3">✓</span>
                                Expert CA Assisted Filing
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3">✓</span>
                                Maximum Tax Savings & Refund Claim
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3">✓</span>
                                Notice Assistance & Post-Filing Support
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-[#243c7c]">Get CA Assistance</h2>
                                <p className="text-sm text-gray-500 mt-1">Fill the form to start your ITR filing</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input type="text" placeholder="Your Name *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <input type="tel" placeholder="Mobile Number *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <select required defaultValue="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px] text-gray-600 appearance-none">
                                        <option value="" disabled>Select Income Source *</option>
                                        <option>Salaried Employee</option>
                                        <option>Business / Professional</option>
                                        <option>Freelancer / Consultant</option>
                                        <option>Capital Gains (Stocks/Crypto/Property)</option>
                                        <option>Multiple Sources</option>
                                    </select>
                                </div>

                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 mt-2 text-base">
                                    File ITR Now
                                </button>
                            </form>

                            <div className="flex items-center justify-center gap-2 mt-5 text-gray-400">
                                <span className="text-lg">🔒</span>
                                <span className="text-[11px] font-bold uppercase tracking-wider">Your Financial Data is 100% Secure</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. WHY FILE ITR (Benefits) */}
            <section className="py-20 px-4 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c] mb-4">Why is Filing ITR Important?</h2>
                    <div className="w-24 h-1 bg-[#ff7600] mx-auto"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Filing your Income Tax Return is not just a legal obligation, but it also brings multiple financial benefits for your future.</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Claim TDS Refunds", desc: "If TDS has been deducted from your salary or other incomes, filing ITR is the only way to claim a refund.", icon: "💸" },
                        { title: "Easy Loan Approval", desc: "Banks mandate at least 3 years of ITR receipts for approving Home, Car, or Personal loans.", icon: "🏦" },
                        { title: "Visa Processing", desc: "Foreign embassies strongly request recent ITR documents to process your travel or work visa applications.", icon: "✈️" },
                        { title: "Carry Forward Losses", desc: "Filing ITR on time allows you to carry forward business or stock market losses to offset future gains.", icon: "📉" }
                    ].map((benefit, idx) => (
                        <div key={idx} className="bg-gray-50 border border-gray-200 hover:border-[#ff7600] hover:shadow-xl rounded-xl p-8 transition-all duration-300 group text-center">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#243c7c] mb-3">{benefit.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. PRICING PACKAGES */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c]">Choose Your Filing Plan</h2>
                        <div className="w-24 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                        {/* Salaried Plan */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Salaried Individual</h3>
                                <p className="text-sm text-gray-500 mt-1">ITR-1 / ITR-2</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#243c7c]">₹ 499</span>
                                <span className="text-xs text-gray-400 font-semibold block mt-1">+ GST</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex"><span className="text-green-500 mr-2 font-bold">✓</span> Income from Salary/Pension</li>
                                <li className="flex"><span className="text-green-500 mr-2 font-bold">✓</span> Income from 1 House Property</li>
                                <li className="flex"><span className="text-green-500 mr-2 font-bold">✓</span> Income from Other Sources (Interest)</li>
                                <li className="flex"><span className="text-green-500 mr-2 font-bold">✓</span> Form 16 Review</li>
                                <li className="flex"><span className="text-green-500 mr-2 font-bold">✓</span> CA Assisted Filing</li>
                            </ul>
                            <button className="w-full bg-white border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                Select Plan
                            </button>
                        </div>

                        {/* Capital Gains / Freelancer (Highlighted) */}
                        <div className="bg-[#243c7c] rounded-2xl shadow-2xl p-8 flex flex-col text-white transform md:-translate-y-4 relative overflow-hidden border-2 border-[#ff7600]">
                            <div className="absolute top-0 right-0 bg-[#ff7600] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>

                            <div className="text-center pb-6 border-b border-white/20 mb-6">
                                <h3 className="text-xl font-bold">Capital Gains & Freelancers</h3>
                                <p className="text-sm text-blue-200 mt-1">ITR-2 / ITR-3 / ITR-4</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#ff7600]">₹ 1,499</span>
                                <span className="text-xs text-blue-200 font-semibold block mt-1">+ GST</span>
                            </div>
                            <ul className="text-sm text-blue-50 space-y-4 mb-8 flex-grow">
                                <li className="flex"><span className="text-[#ff7600] mr-2 font-bold">✓</span> Everything in Salaried Plan</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2 font-bold">✓</span> Stock Market / Mutual Fund Gains</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2 font-bold">✓</span> Crypto Currency Trading</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2 font-bold">✓</span> Multiple House Properties</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2 font-bold">✓</span> Freelance Income (Presumptive)</li>
                            </ul>
                            <button className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3 rounded-md shadow-lg transition duration-300">
                                Select Plan
                            </button>
                        </div>

                        {/* Business Plan */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Business Income</h3>
                                <p className="text-sm text-gray-500 mt-1">ITR-3 / ITR-4</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#243c7c]">₹ 2,499</span>
                                <span className="text-xs text-gray-400 font-semibold block mt-1">+ GST</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex"><span className="text-green-500 mr-2 font-bold">✓</span> Presumptive Business Income</li>
                                <li className="flex"><span className="text-green-500 mr-2 font-bold">✓</span> Income from PGBP</li>
                                <li className="flex"><span className="text-green-500 mr-2 font-bold">✓</span> Financial Statement Prep Help</li>
                                <li className="flex"><span className="text-green-500 mr-2 font-bold">✓</span> Business Expense Deductions</li>
                                <li className="flex"><span className="text-gray-400 mr-2 font-bold">✗</span> Excludes Tax Audit cases</li>
                            </ul>
                            <button className="w-full bg-white border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                Select Plan
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. DOCUMENTS REQUIRED & PROCESS */}
            <section className="py-20 px-4 bg-white border-y border-gray-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Documents */}
                    <div className="bg-[#243c7c] p-10 rounded-2xl shadow-xl text-white">
                        <h3 className="text-2xl font-bold mb-6 text-[#ff7600]">Documents Required</h3>
                        <p className="text-blue-100 text-sm mb-8">Please keep soft copies of the following documents ready for a smooth filing process:</p>

                        <ul className="space-y-4 text-sm font-medium">
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">💳</span> PAN Card & Aadhaar Card</li>
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">📄</span> Form 16 / Form 16A (From Employer)</li>
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">🏦</span> Bank Account Statements (For the Financial Year)</li>
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">💰</span> Investment Proofs (80C, 80D - LIC, PPF, Medical)</li>
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">🏠</span> Home Loan Interest Certificate (If applicable)</li>
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">📊</span> Capital Gains Statement (From Brokers like Zerodha/Groww)</li>
                        </ul>
                    </div>

                    {/* Process */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-[#243c7c]">How It Works</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-8"></div>

                        <div className="space-y-6">
                            {[
                                { step: "1", title: "Submit Your Details", desc: "Fill the form and select your required plan. Make the secure online payment." },
                                { step: "2", title: "Document Upload", desc: "A secure portal link will be shared to safely upload your Form 16, PAN, and other docs." },
                                { step: "3", title: "CA Review & Computation", desc: "An expert CA will be assigned to review your documents and compute your tax liability/refund." },
                                { step: "4", title: "Approval & Final Filing", desc: "We will share the computation for your approval. Once approved, we will file the ITR on the IT Portal." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-[#ff7600] text-white flex items-center justify-center font-bold text-lg mr-4 shrink-0 shadow-md">
                                        {item.step}
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="font-bold text-lg text-[#243c7c]">{item.title}</h4>
                                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* 5. FAQS */}
            <section className="py-20 px-4 bg-gray-50 mt-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Frequently Asked Questions</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="What is the deadline for filing ITR?" defaultOpen={true}>
                            <p>For individuals and non-audit cases, the deadline to file the Income Tax Return for a given financial year is usually <strong>July 31st</strong> of the assessment year. Filing after this date may attract a late fee penalty of up to ₹5,000 under section 234F.</p>
                        </AccordionItem>

                        <AccordionItem title="Can I file ITR if my income is below ₹2.5 Lakhs?">
                            <p>Yes. Even if your income is below the basic exemption limit, it is highly recommended to file a "Nil Return". It acts as valid proof of income, which helps in processing bank loans, credit cards, and foreign visas.</p>
                        </AccordionItem>

                        <AccordionItem title="What happens if I miss the ITR filing deadline?">
                            <p>If you miss the July 31st deadline, you can file a "Belated Return" until December 31st. However, you will be liable to pay a late fee (₹1,000 if income is below ₹5 Lakhs, and ₹5,000 if income is above ₹5 Lakhs) and you may lose the benefit of carrying forward certain financial losses.</p>
                        </AccordionItem>

                        <AccordionItem title="What is Form 16 and Form 26AS?">
                            <p><strong>Form 16</strong> is a certificate issued by your employer detailing the salary paid and TDS deducted. <strong>Form 26AS</strong> is a consolidated tax statement generated by the Income Tax Department that shows all taxes deposited against your PAN from various sources (employers, banks, clients).</p>
                        </AccordionItem>

                        <AccordionItem title="How long does it take to get a tax refund?">
                            <p>Once the ITR is filed and successfully e-verified, the Income Tax Department processes it. Refunds are typically credited directly to your pre-validated bank account within 20 to 45 days after the return is processed.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}