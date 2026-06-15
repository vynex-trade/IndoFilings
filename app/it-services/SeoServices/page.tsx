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

export default function SeoServices() {
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
                            Search Engine Optimization
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            Dominate Search. <br />
                            <span className="text-[#ff7600]">Drive Organic Traffic.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-50 font-light leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-5">
                            Stop losing customers to your competitors. Rank higher on Google, generate high-quality leads, and multiply your revenue with our data-driven SEO strategies.
                        </p>

                        <ul className="mt-8 space-y-4">
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                100% White-Hat SEO Techniques
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                Data-Driven Keyword Research
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                Transparent Monthly Reporting
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-[#243c7c]">Get a Free SEO Audit</h2>
                                <p className="text-sm text-gray-500 mt-1">Discover why your website isn't ranking</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input type="text" placeholder="Your Name *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <input type="tel" placeholder="Mobile Number *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <input type="url" placeholder="Your Website URL *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <select required defaultValue="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px] text-gray-600 appearance-none">
                                        <option value="" disabled>Select Target Audience *</option>
                                        <option value="local">Local (City/State targeting)</option>
                                        <option value="national">National (Pan-India targeting)</option>
                                        <option value="global">Global / International</option>
                                        <option value="ecommerce">E-Commerce Store</option>
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
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">250+</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Websites Ranked</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">300%</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Avg. Traffic Increase</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">Top 3</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Google Rankings</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">ROI</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Driven Strategies</p>
                    </div>
                </div>
            </section>

            {/* 3. WHAT WE DO (Services Grid) */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c] mb-4">Complete 360° SEO Solutions</h2>
                    <div className="w-24 h-1 bg-[#ff7600] mx-auto"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">SEO is not just about keywords; it's about building a holistic digital footprint. We cover every aspect of search engine algorithms.</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Technical SEO", desc: "We fix site speed, mobile responsiveness, XML sitemaps, and core web vitals to ensure Google can easily crawl and index your site.", icon: "⚙️" },
                        { title: "On-Page SEO", desc: "Optimizing your website's content, meta tags, headers, and internal linking structure to align perfectly with high-intent search queries.", icon: "📝" },
                        { title: "Off-Page SEO", desc: "Building high-quality, authoritative backlinks through ethical outreach, guest posting, and digital PR to boost your domain authority.", icon: "🔗" },
                        { title: "Local SEO", desc: "Optimizing your Google My Business (GMB) profile and local citations to help you dominate local map packs and \"near me\" searches.", icon: "📍" }
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
                            Why Are We the Right <span className="text-[#ff7600]">SEO Partner?</span>
                        </h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-8"></div>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            We don't sell empty promises or guarantee "Rank 1 in 24 hours". SEO is a science. We use premium tools and proven methodologies to build sustainable traffic that lasts through algorithm updates.
                        </p>

                        <ul className="space-y-6">
                            {[
                                { title: "No Black-Hat Techniques", desc: "We strictly adhere to Google's Webmaster Guidelines. No spammy links or keyword stuffing that could get your site penalized." },
                                { title: "Focus on Revenue, Not Just Traffic", desc: "We target high-intent 'buyer' keywords. Getting 1,000 visitors who don't buy is useless; we focus on conversions." },
                                { title: "Absolute Transparency", desc: "You receive detailed monthly reports tracking your keyword rankings, traffic growth, and the exact work completed." }
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
                        <h3 className="text-2xl font-bold mb-8">Premium SEO Tools We Use</h3>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { name: "Ahrefs", type: "Backlink Analysis" },
                                { name: "SEMrush", type: "Competitor Research" },
                                { name: "Google Analytics 4", type: "Traffic Insights" },
                                { name: "Google Search Console", type: "Performance Tracking" },
                                { name: "Screaming Frog", type: "Technical Audits" },
                                { name: "Surfer SEO", type: "Site Crawling" },
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
                        <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c]">Monthly SEO Packages</h2>
                        <div className="w-24 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                        <p className="text-gray-500 mt-4">Cancel anytime. No lock-in contracts.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                        {/* Local Plan */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Local SEO</h3>
                                <p className="text-xs text-gray-500 mt-2 font-medium">For local businesses & clinics</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#243c7c]">₹ 14,999</span>
                                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mt-1">/ month</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Up to 15 Target Keywords</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Google My Business Optimization</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Local Citation Building</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> On-Page SEO Fixes</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Monthly Performance Report</li>
                            </ul>
                            <button className="w-full bg-white border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                Get Started
                            </button>
                        </div>

                        {/* National Plan (Highlighted) */}
                        <div className="bg-[#243c7c] rounded-2xl shadow-2xl p-8 flex flex-col text-white transform md:-translate-y-4 relative overflow-hidden border-2 border-[#ff7600]">
                            <div className="absolute top-0 right-0 bg-[#ff7600] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>

                            <div className="text-center pb-6 border-b border-white/20 mb-6">
                                <h3 className="text-xl font-bold">National Growth</h3>
                                <p className="text-xs text-blue-200 mt-2 font-medium">For Pan-India targeting</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#ff7600]">₹ 29,999</span>
                                <span className="text-xs text-blue-200 font-bold uppercase tracking-wider block mt-1">/ month</span>
                            </div>
                            <ul className="text-sm text-blue-50 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Up to 35 Target Keywords</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Advanced Technical SEO Audit</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> High DA Link Building</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> 2 Blog Articles Written/Month</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Competitor Analysis</li>
                            </ul>
                            <button className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3 rounded-md shadow-lg transition duration-300">
                                Get Started
                            </button>
                        </div>

                        {/* E-Commerce Plan */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">E-Commerce / Enterprise</h3>
                                <p className="text-xs text-gray-500 mt-2 font-medium">For highly competitive markets</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#243c7c]">₹ 49,999</span>
                                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mt-1">/ month</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Up to 80 Target Keywords</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Product Page Optimization</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Conversion Rate Optimization (CRO)</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Premium Guest Posting</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Dedicated Account Manager</li>
                            </ul>
                            <button className="w-full bg-white border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                Get Started
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* 6. HOW WE WORK (Process Flow) */}
            <section className="bg-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-14">Our Proven SEO Process</h2>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
                        {[
                            { step: "1", title: "Comprehensive Audit", desc: "We analyze your website's health, current rankings, and technical errors." },
                            { step: "2", title: "Keyword Strategy", desc: "Identifying high-volume, low-competition keywords that drive sales." },
                            { step: "3", title: "On-Page & Tech Fixes", desc: "Optimizing code, fixing speed issues, and upgrading site content." },
                            { step: "4", title: "Link Building", desc: "Acquiring authoritative backlinks to boost your domain authority globally." }
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
                        <AccordionItem title="How long does it take to see results from SEO?" defaultOpen={true}>
                            <p>SEO is a long-term strategy. Generally, it takes between 3 to 6 months to start seeing significant improvements in rankings and organic traffic. This timeline depends on your website's current authority, the competitiveness of your industry, and the keywords targeted.</p>
                        </AccordionItem>

                        <AccordionItem title="Can you guarantee a Number 1 ranking on Google?">
                            <p>No ethical SEO agency can guarantee a #1 ranking. Google's algorithm changes constantly and is controlled strictly by them. However, we guarantee that we apply the industry's best practices, premium tools, and proven strategies to push your website to the top of page 1.</p>
                        </AccordionItem>

                        <AccordionItem title="What is the difference between On-Page and Off-Page SEO?">
                            <p><strong>On-Page SEO</strong> refers to optimizations made directly on your website (e.g., content, meta tags, URL structure, site speed). <strong>Off-Page SEO</strong> refers to actions taken outside your website to impact your rankings, primarily through acquiring high-quality backlinks from other reputable websites.</p>
                        </AccordionItem>

                        <AccordionItem title="Do I need to sign a long-term contract?">
                            <p>No. We believe our results should keep you with us, not a legal contract. All our SEO packages are billed on a month-to-month basis, and you can cancel or upgrade at any time with a 30-day notice.</p>
                        </AccordionItem>

                        <AccordionItem title="Will I receive regular reports on my campaign's progress?">
                            <p>Absolutely. Transparency is a core value for us. You will receive a detailed report at the end of every month. This report will cover keyword ranking improvements, organic traffic growth, goals completed, and the exact link-building and technical work we performed during that month.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}