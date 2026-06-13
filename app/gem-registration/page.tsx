"use client";

import React, { useState } from 'react';

// --- Reusable Accordion Component ---
interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, defaultOpen = false }) => {
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

export default function GemRegistration() {
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
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest mb-6 border border-white/20 uppercase text-blue-100">
                            <span className="w-2 h-2 bg-[#ff7600] rounded-full animate-pulse"></span>
                            Government e-Marketplace
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            Start Selling to the <br />
                            <span className="text-[#ff7600]">Govt. of India</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-50 font-light leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-5">
                            GeM enables businesses to sell products and services directly to government departments, ministries, and PSUs through a secure online marketplace.
                        </p>

                        <ul className="mt-8 space-y-3">
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3">✓</span>
                                Access to ₹3+ Lakh Crore worth of Govt. Tenders
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3">✓</span>
                                Special Preferences & Exemptions for MSMEs
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3">✓</span>
                                Zero Registration Fee on the Govt. Portal
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-[#243c7c]">GeM Registration</h2>
                                <p className="text-sm text-gray-500 mt-1">Get expert assistance for fast profile approval</p>
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
                                <div className="grid grid-cols-2 gap-4">
                                    <select required defaultValue="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px] text-gray-600 appearance-none">
                                        <option value="" disabled>State *</option>
                                        <option>Maharashtra</option>
                                        <option>Delhi</option>
                                        <option>Gujarat</option>
                                        <option>Karnataka</option>
                                        <option>Other</option>
                                    </select>
                                    <select required defaultValue="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px] text-gray-600 appearance-none">
                                        <option value="" disabled>Entity Type *</option>
                                        <option>OEM (Manufacturer)</option>
                                        <option>Reseller / Trader</option>
                                        <option>Service Provider</option>
                                    </select>
                                </div>

                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 mt-2 text-base">
                                    Register Now
                                </button>
                            </form>

                            <div className="flex items-center justify-center gap-2 mt-5 text-gray-400">
                                <span className="text-lg">🛡️</span>
                                <span className="text-[11px] font-bold uppercase tracking-wider">Your Data is 100% Secure</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. STATS / TRUST BAR */}
            <section className="bg-white border-b border-gray-200 py-10">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">65,000+</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Govt. Buyer Organizations</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">60 Lakh+</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Registered Sellers</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">11,000+</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Product Categories</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">₹ 4 Lakh Cr</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Annual GMV</p>
                    </div>
                </div>
            </section>

            {/* 3. BENEFITS OF GeM */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c] mb-4">Why Sell on GeM?</h2>
                    <div className="w-24 h-1 bg-[#ff7600] mx-auto"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">The Government of India has mandated that all ministries and departments procure goods and services exclusively through the GeM portal.</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Direct Access to Buyers", desc: "No need for middlemen. Connect directly with Central/State Govt. departments, PSUs, and defense organizations.", icon: "🎯" },
                        { title: "Transparent Bidding", desc: "Fair and fully digital process for L1 (Lowest Bidder) selection, Reverse Auctions, and direct purchases.", icon: "⚖️" },
                        { title: "MSME Preferences", desc: "Special exemptions on EMD (Earnest Money Deposit), turnover criteria, and faster payment cycles for MSMEs.", icon: "🌟" },
                        { title: "Timely Payments", desc: "Strict government guidelines ensure that buyers must process seller payments within a guaranteed timeframe.", icon: "💸" },
                        { title: "Dynamic Pricing", desc: "Prices can be changed based on market conditions, ensuring you remain competitive without long-term locks.", icon: "📈" },
                        { title: "Zero Marketing Cost", desc: "Once your catalog is approved, buyers search for your products organically. No ad spend required.", icon: "📢" }
                    ].map((benefit, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 hover:border-[#ff7600] hover:shadow-xl rounded-xl p-8 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#243c7c] mb-3">{benefit.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. WHO CAN REGISTER (Roles) */}
            <section className="py-20 px-4 bg-white border-y border-gray-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#243c7c]">Seller Categories on GeM</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-8"></div>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Whether you manufacture goods, trade in them, or offer professional services, GeM has a dedicated ecosystem for your business model.
                        </p>
                        <ul className="space-y-6">
                            {[
                                { title: "OEM (Original Equipment Manufacturer)", desc: "Manufacturers who own a registered trademark. Requires Vendor Assessment for catalog upload." },
                                { title: "Resellers & Traders", desc: "Authorized dealers or general traders selling third-party products. Requires OEM authorization code." },
                                { title: "Service Providers", desc: "Entities offering manpower, housekeeping, IT services, transportation, or consulting to government offices." }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start bg-gray-50 p-5 rounded-lg border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#243c7c] text-white flex items-center justify-center mr-4 mt-0.5 shrink-0 text-sm font-bold">✓</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-[#243c7c]">{item.title}</h4>
                                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#243c7c] p-10 rounded-2xl shadow-2xl text-white">
                        <h3 className="text-2xl font-bold mb-6 text-[#ff7600]">Documents Required</h3>
                        <p className="text-blue-100 text-sm mb-8">Keep these documents ready for a smooth, error-free GeM profile creation:</p>

                        <ul className="space-y-4 text-sm font-medium">
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">📄</span> PAN Card (Business/Proprietor)</li>
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">🪪</span> Aadhaar Card of Authorized Person</li>
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">🏢</span> Active GST Certificate</li>
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">🏦</span> Bank Account Details (Cancelled Cheque)</li>
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">📝</span> MSME / Udyam Certificate (Highly Recommended)</li>
                            <li className="flex items-center"><span className="text-[#ff7600] text-xl mr-3">📑</span> Trademark Certificate (For OEMs only)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. OUR PROCESS */}
            <section className="bg-gray-50 py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-14">How We Assist You</h2>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
                        {[
                            { step: "1", title: "Consultation", desc: "We analyze your business & determine your exact GeM category." },
                            { step: "2", title: "Documentation", desc: "We collect and verify your PAN, Aadhaar, GST & MSME certs." },
                            { step: "3", title: "Profile Creation", desc: "We create your primary seller account and link bank details." },
                            { step: "4", title: "Catalog Upload", desc: "We assist in getting your products/services approved and live." }
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
                        <AccordionItem title="What is the fee to register on GeM?" defaultOpen={true}>
                            <p>The Government of India does not charge any fee for primary GeM registration. However, you will need to pay professional consultancy fees for our experts to correctly draft, file, and manage your profile creation, catalog uploads, and vendor assessments to ensure approval.</p>
                        </AccordionItem>

                        <AccordionItem title="Is GST mandatory for GeM Registration?">
                            <p>Yes, having a valid and active GSTIN (Goods and Services Tax Identification Number) is strictly mandatory for any entity wishing to register as a seller on the GeM portal.</p>
                        </AccordionItem>

                        <AccordionItem title="What is Vendor Assessment?">
                            <p>Vendor Assessment is a mandatory quality and capacity check required for Original Equipment Manufacturers (OEMs) before they can upload their catalogs on GeM. It is conducted by the Quality Council of India (QCI). Resellers do not require vendor assessment.</p>
                        </AccordionItem>

                        <AccordionItem title="Do I need to deposit Earnest Money (EMD) for tenders?">
                            <p>Typically, participating in government tenders requires an Earnest Money Deposit (EMD). However, registered MSMEs (Micro and Small Enterprises) and Startups recognized by DPIIT are exempted from paying EMDs on GeM.</p>
                        </AccordionItem>

                        <AccordionItem title="How do I get paid for my orders?">
                            <p>GeM has strict guidelines for buyers. Payments must be processed within a specified time frame (usually 10 days after the generation of the Consignee Receipt and Acceptance Certificate - CRAC). The payment is transferred directly to your registered bank account.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}