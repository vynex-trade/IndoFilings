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

export default function WebDevelopment() {
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
                            Digital Transformation
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            Professional <br />
                            <span className="text-[#ff7600]">Website Development</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-50 font-light leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-5">
                            Build a powerful online presence that drives growth, establishes credibility, and converts visitors into loyal customers.
                        </p>

                        <ul className="mt-8 space-y-4">
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                100% Mobile Responsive & SEO Optimized
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                Fast Loading Speeds & High Security
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                Custom UI/UX Tailored to Your Brand
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-[#243c7c]">Start Your Project</h2>
                                <p className="text-sm text-gray-500 mt-1">Get a free technical consultation</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input type="text" placeholder="Your Name *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Your Email Address *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <input type="tel" placeholder="Mobile Number *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <select required defaultValue="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px] text-gray-600 appearance-none">
                                        <option value="" disabled>Select Website Type *</option>
                                        <option value="corporate">Corporate / Business Website</option>
                                        <option value="ecommerce">E-Commerce Store</option>
                                        <option value="portfolio">Portfolio / Landing Page</option>
                                        <option value="webapp">Custom Web Application</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 mt-2 text-base">
                                    Get Free Quote
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
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">500+</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Websites Delivered</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">99%</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Uptime Guarantee</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">3x</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Faster Load Speeds</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">24/7</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Technical Support</p>
                    </div>
                </div>
            </section>

            {/* 3. WHAT WE BUILD (Services Grid) */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c] mb-4">Web Solutions We Deliver</h2>
                    <div className="w-24 h-1 bg-[#ff7600] mx-auto"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">From simple landing pages to complex data-driven platforms, our development team has the expertise to bring your vision to life.</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Corporate Websites", desc: "Professional, trust-building websites designed to showcase your company's services, team, and legacy.", icon: "🏢" },
                        { title: "E-Commerce Stores", desc: "High-converting online stores with secure payment gateways, inventory management, and smooth checkouts.", icon: "🛒" },
                        { title: "Landing Pages", desc: "Conversion-optimized single pages designed specifically for marketing campaigns and lead generation.", icon: "🎯" },
                        { title: "Custom Web Apps", desc: "Complex, scalable web applications (SaaS, CRMs, Portals) tailored to solve your unique business problems.", icon: "💻" }
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
                            Why Choose Us For Your <span className="text-[#ff7600]">Development Needs?</span>
                        </h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-8"></div>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            We don't just write code; we build digital experiences. Our websites are built with a focus on performance, user experience, and search engine visibility.
                        </p>

                        <ul className="space-y-6">
                            {[
                                { title: "Mobile-First Approach", desc: "Over 60% of web traffic comes from mobile. We ensure your site looks and works perfectly on all devices and screen sizes." },
                                { title: "SEO-Optimized Architecture", desc: "Clean code, fast load times, and structured data implemented from day one to help you rank higher on Google." },
                                { title: "Bank-Grade Security", desc: "Free SSL certificates, regular backups, and protection against common web vulnerabilities (XSS, SQL Injection)." }
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
                        <h3 className="text-2xl font-bold mb-8">Technologies We Use</h3>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { name: "React / Next.js", type: "Frontend" },
                                { name: "Node.js", type: "Backend" },
                                { name: "WordPress", type: "CMS" },
                                { name: "Shopify / Magento", type: "E-Commerce" },
                                { name: "Tailwind CSS", type: "Styling" },
                                { name: "AWS / Vercel", type: "Hosting" },
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
                        <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c]">Transparent Pricing</h2>
                        <div className="w-24 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                        {/* Starter Plan */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Starter Website</h3>
                                <p className="text-xs text-gray-500 mt-2 font-medium">Perfect for Small Businesses & Profiles</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#243c7c]">₹ 14,999</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Up to 5 Pages</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Mobile Responsive Design</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Contact Form Integration</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Basic On-Page SEO</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> 1 Year Free Hosting & SSL</li>
                            </ul>
                            <button className="w-full bg-white border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                Get Started
                            </button>
                        </div>

                        {/* Business Plan (Highlighted) */}
                        <div className="bg-[#243c7c] rounded-2xl shadow-2xl p-8 flex flex-col text-white transform md:-translate-y-4 relative overflow-hidden border-2 border-[#ff7600]">
                            <div className="absolute top-0 right-0 bg-[#ff7600] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>

                            <div className="text-center pb-6 border-b border-white/20 mb-6">
                                <h3 className="text-xl font-bold">Business / E-Commerce</h3>
                                <p className="text-xs text-blue-200 mt-2 font-medium">For Growing Companies & Online Stores</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#ff7600]">₹ 34,999</span>
                            </div>
                            <ul className="text-sm text-blue-50 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Up to 15 Pages / Store Setup</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Payment Gateway Integration</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> CMS / Admin Panel</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Premium UI/UX Design</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Live Chat / WhatsApp Integration</li>
                            </ul>
                            <button className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3 rounded-md shadow-lg transition duration-300">
                                Get Started
                            </button>
                        </div>

                        {/* Custom Plan */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Custom Web App</h3>
                                <p className="text-xs text-gray-500 mt-2 font-medium">For SaaS, Portals & Complex Logic</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#243c7c]">Custom</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Complex Database Architecture</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Third-Party API Integrations</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Custom Dashboards & Analytics</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Scalable Cloud Infrastructure</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Dedicated Project Manager</li>
                            </ul>
                            <button className="w-full bg-white border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                Request Quote
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* 6. HOW WE WORK (Process Flow) */}
            <section className="bg-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-14">Our Development Process</h2>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
                        {[
                            { step: "1", title: "Discovery", desc: "Understanding your business goals, target audience, and feature requirements." },
                            { step: "2", title: "Design UI/UX", desc: "Creating wireframes and mockups for your approval before coding starts." },
                            { step: "3", title: "Development", desc: "Writing clean, secure code and integrating necessary plugins and APIs." },
                            { step: "4", title: "Testing & Launch", desc: "Rigorous QA testing across devices, followed by deploying to your live domain." }
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
                        <AccordionItem title="How long does it take to build a website?" defaultOpen={true}>
                            <p>The timeline depends on the complexity of the project. A standard corporate informational website typically takes 7-14 working days. An E-commerce store or a custom web application can take anywhere from 3 to 8 weeks to design, develop, and test.</p>
                        </AccordionItem>

                        <AccordionItem title="Do you provide Domain and Hosting?">
                            <p>Yes. Depending on the package you choose, we provide 1 Year of free highly-secured cloud hosting and an SSL certificate. We can also assist you in purchasing a domain name if you do not already have one.</p>
                        </AccordionItem>

                        <AccordionItem title="Will my website be mobile-friendly?">
                            <p>Absolutely. Over 60% of all internet traffic comes from mobile devices. We use a mobile-first design approach to ensure your website looks stunning and functions perfectly on smartphones, tablets, and desktops.</p>
                        </AccordionItem>

                        <AccordionItem title="Do I get a Content Management System (CMS)?">
                            <p>Yes, all our dynamic websites and E-commerce stores come with an easy-to-use Admin Panel/CMS (like WordPress, Shopify, or a custom dashboard). You will be able to easily add blog posts, update images, or manage products without any coding knowledge.</p>
                        </AccordionItem>

                        <AccordionItem title="Do you provide support after the website goes live?">
                            <p>Yes. We offer free technical support and bug fixes for the first 30 days after launch. We also offer affordable Annual Maintenance Contracts (AMC) if you require ongoing updates, security patches, and content management throughout the year.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>
        </div>
    );
}