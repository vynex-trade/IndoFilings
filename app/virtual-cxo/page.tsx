"use client";

import React, { useState } from 'react';

// --- Reusable Accordion Component ---
type AccordionItemProps = {
    title: React.ReactNode;
    children?: React.ReactNode;
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

export default function VirtualCXO() {
    return (
        <div className="font-sans bg-white min-h-screen flex flex-col">

            {/* 1. HERO SECTION */}
            <section className="bg-[#243c7c] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#243c7c] via-[#2d4a87] to-[#1c3065]"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff7600]/5 rounded-full blur-[100px] -translate-y-32 translate-x-32"></div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-white">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest mb-8 border border-white/20 uppercase text-blue-100">
                            <span className="w-2 h-2 bg-[#ff7600] rounded-full animate-pulse"></span>
                            Leadership as a Service
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.1] mb-6">
                            Virtual <br />
                            <span className="text-[#ff7600]">CXO</span> Services
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-50 font-light leading-relaxed max-w-xl">
                            Virtual CXO leadership support to help startups and MSMEs decide faster, scale with confidence, and avoid costly growth mistakes.
                        </p>

                        <div className="mt-10 space-y-4">
                            <div className="flex items-center gap-4 bg-white/5 backdrop-blur p-3 rounded-r-lg border-l-4 border-[#ff7600]">
                                <div className="w-10 h-10 rounded-full bg-[#ff7600] text-white flex items-center justify-center font-bold text-sm shrink-0">01</div>
                                <span className="font-semibold">Strategic Business Planning & Roadmaps</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/5 backdrop-blur p-3 rounded-r-lg border-l-4 border-white/30 ml-4 opacity-80 hover:opacity-100 transition">
                                <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-sm shrink-0">02</div>
                                <span className="font-semibold">Operational Excellence & Scaling</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/5 backdrop-blur p-3 rounded-r-lg border-l-4 border-white/30 ml-8 opacity-80 hover:opacity-100 transition">
                                <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-sm shrink-0">03</div>
                                <span className="font-semibold">Risk Mitigation & Financial Oversight</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                            {/* Decorative line */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#243c7c] to-[#ff7600]"></div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-[#243c7c]">Get Expert Guidance</h2>
                                <p className="text-sm text-gray-500 mt-1">Book your free strategic consultation call</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Name *</label>
                                    <input type="text" placeholder="Full name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mobile Number *</label>
                                    <input type="tel" placeholder="+91 XXXXX XXXXX" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Work Email *</label>
                                    <input type="email" placeholder="name@company.com" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Business Type *</label>
                                    <select required defaultValue="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-gray-600 appearance-none">
                                        <option value="" disabled>Select category...</option>
                                        <option>Startup (Pre-seed / Seed)</option>
                                        <option>MSME / SMB</option>
                                        <option>Growth Stage Company</option>
                                        <option>Sole Proprietorship</option>
                                    </select>
                                </div>

                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 mt-2 text-base">
                                    Book Free Consultation
                                </button>
                            </form>

                            <p className="text-[11px] text-gray-400 text-center mt-4 leading-tight">
                                By submitting, you agree to our Privacy Policy & Terms of Service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. WHY DO YOU NEED A VIRTUAL CXO? */}
            <section className="py-20 px-4 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Visual Context */}
                    <div className="relative hidden lg:block">
                        <div className="bg-[#243c7c] w-full aspect-[4/3] rounded-2xl shadow-2xl flex items-center justify-center p-12">
                            <div className="grid grid-cols-2 gap-4 w-full text-center">
                                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                                    <div className="text-3xl mb-2">📊</div>
                                    <div className="font-bold text-sm text-white">Data Driven Decisions</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                                    <div className="text-3xl mb-2">📈</div>
                                    <div className="font-bold text-sm text-white">Scalable Growth</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                                    <div className="text-3xl mb-2">⚡</div>
                                    <div className="font-bold text-sm text-white">Faster Execution</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                                    <div className="text-3xl mb-2">🛡️</div>
                                    <div className="font-bold text-sm text-white">Risk Reduction</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c] mb-6 leading-tight">
                            Why Startups & MSMEs need a <span className="text-[#ff7600]">Virtual CXO?</span>
                        </h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-8"></div>

                        <p className="text-gray-600 text-[17px] leading-relaxed mb-8">
                            Hiring a full-time C-Suite executive costs lakhs per month and takes months of interviewing. Our Virtual CXOs provide:
                        </p>

                        <ul className="space-y-5">
                            {[
                                {
                                    title: "Decision Faster",
                                    desc: "Access decades of senior management experience immediately without the hiring lag or high salary burn rate.",
                                    icon: "🚀"
                                },
                                {
                                    title: "Scale With Confidence",
                                    desc: "Expertise in building processes, SOPs, and systems that allow you to grow from Rs. 1 Cr to Rs. 100 Cr without breaking operations.",
                                    icon: "🏗️"
                                },
                                {
                                    title: "Avoid Costly Mistakes",
                                    desc: "Steer clear of common pitfalls like bad cash flow management, wrong market fit assumptions, or regulatory missteps that kill startups.",
                                    icon: "⚠️"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="text-3xl shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-[#243c7c] text-lg">{item.title}</h3>
                                        <p className="text-sm text-gray-600 mt-1 leading-snug">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. SERVICES WE OFFER */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c] mb-4">Our CXO Specializations</h2>
                    <div className="w-24 h-1 bg-[#ff7600] mx-auto"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">We provide fractional leadership across key business functions so you get enterprise-level expertise on a startup budget.</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { role: "Virtual CFO", full: "Chief Financial Officer", icon: "💰", scope: ["Fundraising Strategy", "Financial Modeling", "Cash Flow Management", "Compliance & Audits", "Cost Optimization"] },
                        { role: "Virtual CTO", full: "Chief Technology Officer", icon: "💻", scope: ["Tech Architecture", "Agile Transformation", "DevOps Setup", "Vendor Selection", "Product Roadmapping"] },
                        { role: "Virtual COO", full: "Chief Operating Officer", icon: "⚙️", scope: ["Process Re-engineering", "Team Building", "Supply Chain Ops", "KPI Dashboards", "SOP Documentation"] },
                        { role: "Virtual CMO", full: "Chief Marketing Officer", icon: "📢", scope: ["Digital Strategy", "Brand Positioning", "Lead Generation Systems", "Market Analysis", "Content Operations"] }
                    ].map((service, idx) => (
                        <div key={idx} className="bg-gray-50 hover:bg-white border border-gray-200 hover:border-[#ff7600] hover:shadow-xl rounded-xl p-6 text-left transition-all duration-300 group">
                            <div className="text-4xl mb-4 group-hover:scale-110 inline-block transition-transform">{service.icon}</div>
                            <h3 className="text-xl font-bold text-[#243c7c] mb-1">{service.role}</h3>
                            <p className="text-xs font-semibold text-[#ff7600] mb-4 uppercase tracking-wide">{service.full}</p>
                            <ul className="space-y-2">
                                {service.scope.map((point, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-600">
                                        <span className="text-green-500 mr-2 mt-0.5 text-xs">✔</span>{point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. HOW IT WORKS (Process Flow) */}
            <section className="py-16 px-4 bg-[#243c7c] text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
                        {[
                            { step: "01", title: "Discovery Call", desc: "We understand your pain points, goals, and current setup." },
                            { step: "02", title: "Audit & Plan", desc: "Our expert analyzes data and creates a custom CXO roadmap." },
                            { step: "03", title: "Weekly Sprints", desc: "Dedicated meetings, strategy sessions, and execution support." },
                            { step: "04", title: "Results & Scale", desc: "Measure impact, iterate, and watch your business grow." }
                        ].map((phase, index) => (
                            <React.Fragment key={index}>
                                <div className="flex-1 text-center relative group">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-[#1c3065] border-2 border-[#ff7600] text-white flex items-center justify-center text-2xl font-black mb-4 shadow-[0_0_15px_rgba(255,118,0,0.3)] group-hover:scale-110 transition-transform duration-300 z-10 relative">
                                        {phase.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                                    <p className="text-sm text-blue-200 px-2">{phase.desc}</p>

                                    {/* Connector Line (Desktop only) */}
                                    {index < 3 && (
                                        <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-[2px] bg-gradient-to-r from-[#ff7600] to-[#ff7600]/20 z-0"></div>
                                    )}
                                    {/* Arrow (Mobile only) */}
                                    {index < 3 && <div className="md:hidden text-[#ff7600] text-2xl my-[-10px]">↓</div>}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. PRICING / PACKAGES (Simplified) */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c]">Flexible Engagement Models</h2>
                        <div className="w-24 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                        {/* Starter */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Starter Pack</h3>
                                <p className="text-sm text-gray-500 mt-1">For Early-Stage Founders</p>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex"><span className="text-green-500 mr-2">✓</span> 1 Virtual CXO Role</li>
                                <li className="flex"><span className="text-green-500 mr-2">✓</span> 4 Hours/Month</li>
                                <li className="flex"><span className="text-green-500 mr-2">✓</span> Email & WhatsApp Support</li>
                                <li className="flex"><span className="text-gray-300 mr-2">✗</span> No Dedicated Team</li>
                                <li className="flex"><span className="text-gray-300 mr-2">✗</span> Monthly Reports</li>
                            </ul>
                            <div className="text-center pt-4 border-t border-gray-100">
                                <span className="text-3xl font-bold text-[#243c7c] block mb-2">₹19,999</span>
                                <span className="text-xs text-gray-400 font-semibold">per month</span>
                            </div>
                        </div>

                        {/* Growth (Highlighted) */}
                        <div className="bg-[#243c7c] rounded-2xl shadow-2xl p-8 flex flex-col text-white transform md:-translate-y-4 relative overflow-hidden border-2 border-[#ff7600]">
                            <div className="absolute top-0 right-0 bg-[#ff7600] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>

                            <div className="text-center pb-6 border-b border-white/20 mb-6">
                                <h3 className="text-xl font-bold">Growth Suite</h3>
                                <p className="text-sm text-blue-200 mt-1">For Scaling MSMEs</p>
                            </div>
                            <ul className="text-sm text-blue-50 space-y-4 mb-8 flex-grow">
                                <li className="flex"><span className="text-[#ff7600] mr-2 font-bold">✓</span> Multi-CXO Roles (CFO + COO)</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2 font-bold">✓</span> 8 Hours/Month</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2 font-bold">✓</span> Dedicated Project Manager</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2 font-bold">✓</span> Weekly Strategy Calls</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2 font-bold">✓</span> Execution Support</li>
                            </ul>
                            <div className="text-center pt-4 border-t border-white/20">
                                <span className="text-3xl font-bold text-[#ff7600] block mb-2">₹49,999</span>
                                <span className="text-xs text-blue-200 font-semibold">per month</span>
                            </div>
                        </div>

                        {/* Enterprise */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Enterprise Pro</h3>
                                <p className="text-sm text-gray-500 mt-1">Custom Requirements</p>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex"><span className="text-green-500 mr-2">✓</span> Full-Time CXO Cover</li>
                                <li className="flex"><span className="text-green-500 mr-2">✓</span> 20 Hours+/Month</li>
                                <li className="flex"><span className="text-green-500 mr-2">✓</span> On-Site Visit (Optional)</li>
                                <li className="flex"><span className="text-green-500 mr-2">✓</span> Board Advisory Seat</li>
                                <li className="flex"><span className="text-green-500 mr-2">✓</span> End-to-End Execution</li>
                            </ul>
                            <div className="text-center pt-4 border-t border-gray-100">
                                <span className="text-3xl font-bold text-[#243c7c] block mb-2">Custom</span>
                                <button className="mt-3 text-[#ff7600] text-sm font-bold underline decoration-dotted">Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ SECTION */}
            <section className="py-20 px-4 bg-white mt-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Frequently Asked Questions</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="What exactly does a Virtual CXO do?" defaultOpen={true}>
                            <p>A Virtual CXO acts as a part-time Chief X Officer (like CFO, CTO, or COO) for your company on a retainer basis. They attend board meetings, create strategies, fix operational bottlenecks, and advise founders—but without the cost burden of a full-time C-suite hire.</p>
                        </AccordionItem>

                        <AccordionItem title="Is this suitable for early-stage startups?">
                            <p>Yes! In fact, it's highly recommended for Seed/Series A startups who cannot afford a ₹5 Lakh/month C-suite hire but desperately need their experience to build solid foundations before they grow too big.</p>
                        </AccordionItem>

                        <AccordionItem title="How is this different from a normal consultant?">
                            <p>Consultants typically give advice and disappear. A Virtual CXO works alongside you continuously (weekly/monthly), takes partial ownership of outcomes, ensures execution happens, and keeps you accountable—much more hands-on than a standard consultant.</p>
                        </AccordionItem>

                        <AccordionItem title="How quickly can I expect results?">
                            <p>In most cases, within the first 30 days we identify quick-win operational fixes. Within 90 days, you'll see visible improvements in financial discipline, team productivity, or marketing ROI depending on which domain we are hired for.</p>
                        </AccordionItem>

                        <AccordionItem title="What if I am not happy with the assigned CXO?">
                            <p>We offer a happiness guarantee. If there isn't a cultural fit between you and the expert assigned in the first 2 weeks, we will replace them immediately at no extra cost.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}