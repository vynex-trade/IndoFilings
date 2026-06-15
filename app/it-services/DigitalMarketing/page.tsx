"use client";

import React, { useState } from 'react';

// --- Reusable Accordion Component with TypeScript Props ---
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

export default function DigitalMarketing() {
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
                            <span className="w-2 h-2 bg-[#ff7600] rounded-full animate-pulse"></span>
                            360° Growth Agency
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            Accelerate Growth with <br />
                            <span className="text-[#ff7600]">Digital Marketing</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-50 font-light leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-5">
                            Stop guessing and start growing. We use data-driven strategies across SEO, Social Media, and Performance Ads to scale your revenue and brand visibility.
                        </p>

                        <ul className="mt-8 space-y-4">
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                Data-Backed ROI & ROAS Optimization
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                Targeted Lead Generation Campaigns
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                Transparent Monthly Performance Reporting
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-[#243c7c]">Get a Growth Strategy</h2>
                                <p className="text-sm text-gray-500 mt-1">Book a free digital audit call</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input type="text" placeholder="Your Name *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <input type="tel" placeholder="Mobile Number *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Business Email *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <select required defaultValue="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px] text-gray-600 appearance-none">
                                        <option value="" disabled>Select Primary Goal *</option>
                                        <option value="leads">Lead Generation (B2B/Services)</option>
                                        <option value="sales">E-Commerce Sales</option>
                                        <option value="seo">Organic Traffic (SEO)</option>
                                        <option value="social">Social Media Branding</option>
                                        <option value="full">Full Stack Marketing</option>
                                    </select>
                                </div>
                                <div>
                                    <select required defaultValue="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px] text-gray-600 appearance-none">
                                        <option value="" disabled>Monthly Marketing Budget *</option>
                                        <option value="10-30k">₹15,000 - ₹30,000</option>
                                        <option value="30-50k">₹30,000 - ₹60,000</option>
                                        <option value="50-1L">₹60,000 - ₹1,00,000</option>
                                        <option value="1L+">Above ₹1,00,000</option>
                                    </select>
                                </div>

                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 mt-2 text-base">
                                    Request Free Audit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. STATS / TRUST BAR */}
            <section className="bg-white border-b border-gray-200 py-10">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">₹50Cr+</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Ad Spend Managed</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">350%</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Average ROI</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">200+</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Active Clients</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">5M+</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Leads Generated</p>
                    </div>
                </div>
            </section>

            {/* 3. CORE SERVICES (Grid) */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c] mb-4">Omnichannel Marketing Solutions</h2>
                    <div className="w-24 h-1 bg-[#ff7600] mx-auto"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">We don't rely on just one channel. We build a comprehensive digital ecosystem that turns strangers into loyal customers.</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Performance Marketing", desc: "High-converting Google Ads and Meta (Facebook/IG) Ads designed to minimize CPA and maximize your Return on Ad Spend (ROAS).", icon: "📈" },
                        { title: "Search Engine Optimization", desc: "Technical, On-Page, and Off-Page SEO strategies to dominate Google search results and drive high-intent, free organic traffic.", icon: "🔍" },
                        { title: "Social Media Management", desc: "Engaging content creation, community management, and brand building across Instagram, LinkedIn, Facebook, and Twitter.", icon: "📱" },
                        { title: "Content & Email Marketing", desc: "Nurture leads with automated email drip campaigns, high-quality blog posts, and persuasive copywriting that converts.", icon: "✉️" }
                    ].map((service, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 hover:border-[#ff7600] hover:shadow-xl rounded-xl p-8 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#243c7c] mb-3">{service.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. WHY CHOOSE US (Features & Tech Stack) */}
            <section className="py-20 px-4 bg-white border-y border-gray-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-3xl font-bold text-[#243c7c] mb-6 leading-tight">
                            Why Partner With Us For <span className="text-[#ff7600]">Digital Growth?</span>
                        </h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-8"></div>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Vanity metrics like "likes" and "impressions" don't pay the bills. We focus entirely on metrics that matter: Leads, Sales, Cost Per Acquisition (CPA), and overall Revenue.
                        </p>

                        <ul className="space-y-6">
                            {[
                                { title: "We Are Data Obsessed", desc: "Every decision, from ad copy changes to budget scaling, is backed by A/B testing and deep analytics data." },
                                { title: "Platform Certified Experts", desc: "Our team consists of Google Ads Certified Professionals and Meta Blueprint Blueprint experts." },
                                { title: "No Hidden Agendas", desc: "You have full ownership of your ad accounts. We provide live dashboards so you can see exactly where every Rupee is spent." }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 text-[#243c7c] flex items-center justify-center mr-4 mt-0.5 shrink-0 text-sm font-bold border border-blue-100">✓</div>
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
                        <h3 className="text-2xl font-bold mb-8">Platforms & Tools We Master</h3>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { name: "Google Ads & Analytics", type: "Search & Tracking" },
                                { name: "Meta (FB/IG) Ads", type: "Social Performance" },
                                { name: "LinkedIn Ads", type: "B2B Lead Gen" },
                                { name: "SEMrush / Ahrefs", type: "SEO Intelligence" },
                                { name: "Mailchimp / HubSpot", type: "Email & CRM" },
                                { name: "Canva / Adobe CC", type: "Creative Design" },
                            ].map((tech, i) => (
                                <div key={i} className="bg-[#1c3065] p-4 rounded-lg border border-blue-800 hover:bg-[#152554] transition">
                                    <p className="font-bold text-[#ff7600] text-sm">{tech.name}</p>
                                    <p className="text-xs text-blue-200 mt-1">{tech.type}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRICING PACKAGES */}
            <section className="py-20 px-4 bg-gray-50 border-b border-gray-200">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c]">Monthly Retainer Packages</h2>
                        <div className="w-24 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                        <p className="text-gray-500 mt-4">Transparent pricing. No long-term lock-ins.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                        {/* Social Media Plan */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Social Presence</h3>
                                <p className="text-xs text-gray-500 mt-2 font-medium">For Brand Awareness & Engagement</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#243c7c]">₹ 15,999</span>
                                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mt-1">/ month</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> 12 High-Quality Posts/Reels</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> 2 Platforms (IG + FB/LinkedIn)</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Caption Copywriting & Hashtags</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Page Optimization</li>
                                <li className="flex items-start"><span className="text-gray-300 mr-2 mt-0.5">✗</span> No Paid Ads Management</li>
                            </ul>
                            <button className="w-full bg-white border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                Choose Plan
                            </button>
                        </div>

                        {/* Growth Plan (Highlighted) */}
                        <div className="bg-[#243c7c] rounded-2xl shadow-2xl p-8 flex flex-col text-white transform md:-translate-y-4 relative overflow-hidden border-2 border-[#ff7600]">
                            <div className="absolute top-0 right-0 bg-[#ff7600] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>

                            <div className="text-center pb-6 border-b border-white/20 mb-6">
                                <h3 className="text-xl font-bold">Performance Growth</h3>
                                <p className="text-xs text-blue-200 mt-2 font-medium">For Lead Gen & E-Commerce Sales</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#ff7600]">₹ 29,999</span>
                                <span className="text-xs text-blue-200 font-bold uppercase tracking-wider block mt-1">/ month</span>
                            </div>
                            <ul className="text-sm text-blue-50 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Google Ads OR Meta Ads Setup</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Daily Bid & Budget Optimization</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Custom Ad Creatives & Copy</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Remarketing Campaigns</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Basic SEO (On-Page)</li>
                            </ul>
                            <div className="text-center mb-4 text-[11px] text-blue-200 italic">*Ad spend is billed separately</div>
                            <button className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3 rounded-md shadow-lg transition duration-300">
                                Choose Plan
                            </button>
                        </div>

                        {/* Omni-Channel Plan */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">360° Omni-Channel</h3>
                                <p className="text-xs text-gray-500 mt-2 font-medium">For Aggressive Market Dominance</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#243c7c]">₹ 54,999</span>
                                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mt-1">/ month</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Google Ads + Meta Ads Management</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Advanced SEO (On-Page + Link Building)</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> 15 Social Media Posts/Reels</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Dedicated Account Manager</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Bi-Weekly Live Dashboards</li>
                            </ul>
                            <button className="w-full bg-white border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                Contact Sales
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* 6. HOW WE WORK (Process Flow) */}
            <section className="bg-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-14">Our Growth Framework</h2>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
                        {[
                            { step: "1", title: "Audit & Research", desc: "We analyze your current digital presence, competitors, and target audience." },
                            { step: "2", title: "Strategy Creation", desc: "Developing a customized marketing funnel and media plan for your goals." },
                            { step: "3", title: "Execution & Launch", desc: "Designing creatives, writing copy, and launching campaigns across platforms." },
                            { step: "4", title: "Analyze & Scale", desc: "Continuous A/B testing, cutting wasted ad spend, and scaling winning ads." }
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

            {/* 7. FAQS */}
            <section className="py-20 px-4 bg-gray-50 border-t border-gray-200 mt-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Frequently Asked Questions</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="How long does it take to see results?" defaultOpen={true}>
                            <p>For Performance Marketing (Google/Facebook Ads), you can start seeing leads and sales within the first 7 to 14 days of launch. For organic strategies like SEO and Content Marketing, it typically takes 3 to 6 months to build authority and see significant traffic growth.</p>
                        </AccordionItem>

                        <AccordionItem title="Is the Ad Spend included in the monthly package?">
                            <p>No. The package pricing covers our agency management fee, creative design, copywriting, and daily optimization. The actual Ad Spend (budget for Google/Meta) is paid directly by you to the advertising platforms.</p>
                        </AccordionItem>

                        <AccordionItem title="Do you provide guarantees on leads or sales?">
                            <p>While we cannot mathematically guarantee a specific number of sales (as product quality, pricing, and market demand play a huge role), we do guarantee the delivery of highly targeted traffic, continuous optimization of your Cost Per Acquisition (CPA), and 100% transparency in our efforts.</p>
                        </AccordionItem>

                        <AccordionItem title="Will I get a dedicated account manager?">
                            <p>Yes. Depending on your package, you will be assigned a dedicated Account Manager who will be your single point of contact. They will hold weekly or bi-weekly review calls with you to discuss performance and strategy.</p>
                        </AccordionItem>

                        <AccordionItem title="Can I cancel my contract if I'm not happy?">
                            <p>Yes. We don't believe in forcing clients to stay through long-term lock-in contracts. Our services operate on a month-to-month retainer basis. If you wish to pause or cancel, we simply require a 30-day notice period.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}