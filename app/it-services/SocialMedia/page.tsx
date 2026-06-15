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

export default function SocialMedia() {
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
                            Social Media Management
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            Turn Followers Into <br />
                            <span className="text-[#ff7600]">Loyal Customers</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-50 font-light leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-5">
                            Build a magnetic brand presence. We create scroll-stopping content, manage your community, and run highly targeted ad campaigns that drive real business growth.
                        </p>

                        <ul className="mt-8 space-y-4">
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                High-Quality Content & Reel Creation
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                Data-Driven Engagement Strategies
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                Paid Social Ads (Meta, LinkedIn, Twitter)
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-[#243c7c]">Boost Your Brand</h2>
                                <p className="text-sm text-gray-500 mt-1">Get a free social media audit & strategy</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input type="text" placeholder="Your Name *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <input type="tel" placeholder="Mobile Number *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <input type="url" placeholder="Your Website / Social Profile Link *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <select required defaultValue="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px] text-gray-600 appearance-none">
                                        <option value="" disabled>Primary Social Goal *</option>
                                        <option value="brand">Brand Awareness & Followers</option>
                                        <option value="leads">Lead Generation (B2B)</option>
                                        <option value="sales">E-Commerce Sales (B2C)</option>
                                        <option value="content">Content Creation (Reels/Posts)</option>
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
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">10M+</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Total Reach Generated</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">500+</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Campaigns Launched</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">3x</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Avg. Engagement Boost</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">100%</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Trend Optimization</p>
                    </div>
                </div>
            </section>

            {/* 3. WHAT WE DO (Services Grid) */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c] mb-4">Complete Social Media Solutions</h2>
                    <div className="w-24 h-1 bg-[#ff7600] mx-auto"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">We don't just post pictures; we craft a comprehensive digital identity that speaks directly to your target audience.</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Content Strategy & Creation", desc: "Eye-catching graphics, trending Reels, and compelling copywriting that aligns with your brand voice and goals.", icon: "🎨" },
                        { title: "Community Management", desc: "Active monitoring of comments, DMs, and mentions. We engage with your audience to build a loyal community.", icon: "💬" },
                        { title: "Paid Social Advertising", desc: "Laser-targeted ad campaigns on Meta (Facebook/IG) and LinkedIn to drive immediate leads and maximize ROI.", icon: "🚀" },
                        { title: "Influencer Marketing", desc: "We identify, negotiate, and collaborate with niche influencers to amplify your brand's reach and credibility.", icon: "🌟" }
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

            {/* 4. WHY CHOOSE US (Features Split) */}
            <section className="py-20 px-4 bg-white border-y border-gray-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-3xl font-bold text-[#243c7c] mb-6 leading-tight">
                            Why Partner With Us For <span className="text-[#ff7600]">Social Growth?</span>
                        </h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-8"></div>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Posting inconsistently without a strategy is a waste of time. We bring structure, creativity, and data-backed tactics to ensure every post serves a purpose in your sales funnel.
                        </p>

                        <ul className="space-y-6">
                            {[
                                { title: "Omni-Channel Expertise", desc: "From B2B lead gen on LinkedIn to viral B2C trends on Instagram and TikTok, we know how to hack the algorithm for every platform." },
                                { title: "Proactive Trend Jacking", desc: "We monitor social trends daily to ensure your brand participates in relevant, viral conversations quickly and effectively." },
                                { title: "Transparent Analytics", desc: "No vanity metrics. We provide monthly reports detailing follower growth, engagement rates, and most importantly, website clicks and conversions." }
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
                        <h3 className="text-2xl font-bold mb-8">Platforms We Master</h3>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { name: "Instagram", type: "Reels, Stories, Shopping" },
                                { name: "LinkedIn", type: "B2B Outreach & Articles" },
                                { name: "Facebook", type: "Community & Lead Ads" },
                                { name: "YouTube", type: "Shorts & Video SEO" },
                                { name: "Twitter / X", type: "Real-time Engagement" },
                                { name: "Pinterest", type: "Visual Discovery" },
                            ].map((tech, i) => (
                                <div key={i} className="bg-[#1c3065] p-4 rounded-lg border border-blue-800">
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
                        <p className="text-gray-500 mt-4">Consistent growth. No long-term lock-ins.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                        {/* Starter Plan */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Brand Starter</h3>
                                <p className="text-xs text-gray-500 mt-2 font-medium">For new & local businesses</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#243c7c]">₹ 14,999</span>
                                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mt-1">/ month</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> 12 Custom Posts/Graphics</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Up to 2 Platforms (e.g. IG & FB)</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Profile Optimization</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Basic Hashtag Strategy</li>
                                <li className="flex items-start"><span className="text-gray-300 mr-2 mt-0.5">✗</span> No Reel/Video Editing</li>
                            </ul>
                            <button className="w-full bg-white border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                Choose Plan
                            </button>
                        </div>

                        {/* Growth Plan (Highlighted) */}
                        <div className="bg-[#243c7c] rounded-2xl shadow-2xl p-8 flex flex-col text-white transform md:-translate-y-4 relative overflow-hidden border-2 border-[#ff7600]">
                            <div className="absolute top-0 right-0 bg-[#ff7600] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>

                            <div className="text-center pb-6 border-b border-white/20 mb-6">
                                <h3 className="text-xl font-bold">Growth & Reels</h3>
                                <p className="text-xs text-blue-200 mt-2 font-medium">For engagement & viral reach</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#ff7600]">₹ 29,999</span>
                                <span className="text-xs text-blue-200 font-bold uppercase tracking-wider block mt-1">/ month</span>
                            </div>
                            <ul className="text-sm text-blue-50 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> 20 Posts (Incl. 4 Edited Reels)</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Up to 3 Platforms</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Community Management (DMs)</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Trend Jacking & Content Calendar</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Basic Ad Management (Boosts)</li>
                            </ul>
                            <button className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3 rounded-md shadow-lg transition duration-300">
                                Choose Plan
                            </button>
                        </div>

                        {/* Omni-Channel Plan */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Omni-Channel Lead Gen</h3>
                                <p className="text-xs text-gray-500 mt-2 font-medium">For maximum ROI & conversions</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#243c7c]">₹ 49,999</span>
                                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mt-1">/ month</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Daily Posting (Posts + Reels)</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Full Meta & LinkedIn Ads Setup</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Influencer Outreach Strategy</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Comprehensive Funnel Tracking</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Dedicated Account Manager</li>
                            </ul>
                            <div className="text-center mb-4 text-[11px] text-gray-400 italic">*Ad spend is billed separately</div>
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
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-14">Our Social Media Process</h2>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
                        {[
                            { step: "1", title: "Brand Audit", desc: "We analyze your current profiles, competitors, and target demographics." },
                            { step: "2", title: "Content Strategy", desc: "Creating a monthly content calendar with pillars, themes, and formats." },
                            { step: "3", title: "Create & Publish", desc: "Designing high-quality assets and scheduling them for optimal engagement times." },
                            { step: "4", title: "Analyze & Optimize", desc: "Tracking metrics, responding to comments, and refining the strategy monthly." }
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
                        <AccordionItem title="Who creates the content and graphics?" defaultOpen={true}>
                            <p>We do! Our team consists of expert copywriters, graphic designers, and video editors. We handle the entire content creation process from ideation to the final post, based entirely on your brand guidelines.</p>
                        </AccordionItem>

                        <AccordionItem title="Do I get to review the posts before they go live?">
                            <p>Yes, absolutely. We operate on a monthly content calendar system. We will send you the upcoming month's graphics and captions for your review and approval before anything is published on your profiles.</p>
                        </AccordionItem>

                        <AccordionItem title="Do you handle video editing for Instagram Reels or YouTube Shorts?">
                            <p>Yes. If you provide us with raw video footage (or if we arrange a shoot depending on your location and package), our video editors will edit it, add trending audio, captions, and effects to optimize it for Reels, Shorts, and TikTok.</p>
                        </AccordionItem>

                        <AccordionItem title="Do you reply to comments and direct messages (DMs)?">
                            <p>Community Management (replying to comments and basic DMs) is included in our Growth and Omni-Channel packages. For complex customer service queries, we will flag them and forward them directly to your internal team.</p>
                        </AccordionItem>

                        <AccordionItem title="Are the advertising budgets included in the monthly fee?">
                            <p>No. Our package pricing covers our agency fee for designing the creatives, writing the copy, and actively managing/optimizing the ads. The actual ad spend is billed directly to your credit card by the respective platforms (Meta, Google, LinkedIn).</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}