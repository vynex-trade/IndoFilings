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

export default function AndroidApps() {
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
                            Mobile App Development
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            Custom <br />
                            <span className="text-[#ff7600]">Android Apps</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-50 font-light leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-5">
                            Transform your business ideas into scalable, high-performance Android applications. We build intuitive, secure, and robust mobile experiences.
                        </p>

                        <ul className="mt-8 space-y-4">
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                Native & Cross-Platform Solutions
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                Seamless Google Play Store Deployment
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                High-Security Architecture & API Integration
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-[#243c7c]">Build Your App</h2>
                                <p className="text-sm text-gray-500 mt-1">Get a free technical consultation & quote</p>
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
                                        <option value="" disabled>Select App Category *</option>
                                        <option value="ecommerce">E-Commerce / Delivery</option>
                                        <option value="booking">Booking / Service App</option>
                                        <option value="social">Social Media / Community</option>
                                        <option value="b2b">B2B / Enterprise App</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 mt-2 text-base">
                                    Request Free Quote
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
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">200+</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Apps Launched</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">99.9%</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Crash-Free Rate</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">5M+</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Total User Downloads</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">4.8⭐</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Avg Play Store Rating</p>
                    </div>
                </div>
            </section>

            {/* 3. WHAT WE BUILD (Services Grid) */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c] mb-4">Android Solutions We Deliver</h2>
                    <div className="w-24 h-1 bg-[#ff7600] mx-auto"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">From startups to large enterprises, we engineer scalable mobile applications tailored to your specific business requirements.</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "E-Commerce & Retail", desc: "Feature-rich shopping apps with secure payment gateways, cart management, and real-time order tracking.", icon: "🛍️" },
                        { title: "On-Demand Services", desc: "Apps for food delivery, taxi booking, and home services featuring live GPS tracking and push notifications.", icon: "🚕" },
                        { title: "Enterprise (B2B)", desc: "Internal corporate apps for employee management, field tracking, CRMs, and secure data handling.", icon: "🏢" },
                        { title: "Health & EdTech", desc: "Telemedicine, fitness trackers, and e-learning platforms with video streaming and secure user profiles.", icon: "🏥" }
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
                            Why Partner With Us For <span className="text-[#ff7600]">App Development?</span>
                        </h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-8"></div>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            We don't just write code; we build scalable digital products. Our Android applications are built with a focus on battery efficiency, smooth animations, and high security.
                        </p>

                        <ul className="space-y-6">
                            {[
                                { title: "Native & Hybrid Expertise", desc: "Whether you need a pure Native app (Kotlin/Java) or a cross-platform solution (Flutter/React Native) for both Android & iOS." },
                                { title: "Scalable Cloud Backends", desc: "We build powerful admin panels and robust backend architectures (AWS, Node.js) to handle millions of users." },
                                { title: "Play Store Deployment & ASO", desc: "We handle the entire Google Play Store submission process and optimize your app listing for better search visibility." }
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
                        <h3 className="text-2xl font-bold mb-8">Our Tech Stack</h3>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { name: "Kotlin / Java", type: "Native Android" },
                                { name: "Flutter / React Native", type: "Hybrid App" },
                                { name: "Node.js / Python", type: "Backend API" },
                                { name: "Firebase / AWS", type: "Cloud & Database" },
                                { name: "MongoDB / MySQL", type: "Databases" },
                                { name: "Figma / Adobe XD", type: "UI/UX Design" },
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
                        <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c]">App Development Packages</h2>
                        <div className="w-24 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                        {/* MVP Plan */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">MVP / Startup App</h3>
                                <p className="text-xs text-gray-500 mt-2 font-medium">Perfect for testing your idea</p>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Single Platform (Android)</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Core Features & UI/UX</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Firebase Backend Setup</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> User Authentication</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Google Play Store Submission</li>
                            </ul>
                            <button className="w-full bg-white border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                Request Quote
                            </button>
                        </div>

                        {/* Business Plan (Highlighted) */}
                        <div className="bg-[#243c7c] rounded-2xl shadow-2xl p-8 flex flex-col text-white transform md:-translate-y-4 relative overflow-hidden border-2 border-[#ff7600]">
                            <div className="absolute top-0 right-0 bg-[#ff7600] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>

                            <div className="text-center pb-6 border-b border-white/20 mb-6">
                                <h3 className="text-xl font-bold">Business App</h3>
                                <p className="text-xs text-blue-200 mt-2 font-medium">For E-commerce & Growing Companies</p>
                            </div>
                            <ul className="text-sm text-blue-50 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Cross-Platform (Android + iOS)</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Payment Gateway Integration</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Custom Web Admin Panel</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Push Notifications & APIs</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> 3 Months Free Maintenance</li>
                            </ul>
                            <button className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3 rounded-md shadow-lg transition duration-300">
                                Request Quote
                            </button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Enterprise App</h3>
                                <p className="text-xs text-gray-500 mt-2 font-medium">For Complex & High-Scale Needs</p>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Fully Custom Native Apps</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Advanced Cloud Architecture</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Complex Third-Party Integrations</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Enterprise-Grade Security</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Dedicated Account Manager</li>
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
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-14">Our Development Lifecycle</h2>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
                        {[
                            { step: "1", title: "Discovery", desc: "Understanding your business goals, target audience, and feature requirements." },
                            { step: "2", title: "UI/UX Design", desc: "Creating wireframes and interactive prototypes for your approval." },
                            { step: "3", title: "Development", desc: "Writing clean, secure code and integrating robust backend APIs." },
                            { step: "4", title: "QA & Launch", desc: "Rigorous testing followed by deployment to the Google Play Store." }
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
                        <AccordionItem title="How long does it take to develop an Android App?" defaultOpen={true}>
                            <p>The timeline depends entirely on the complexity of the app. A basic MVP app might take 4 to 6 weeks, while a complex e-commerce or on-demand service app with an admin panel can take 3 to 6 months to design, develop, and thoroughly test.</p>
                        </AccordionItem>

                        <AccordionItem title="Will you upload the app to the Google Play Store?">
                            <p>Yes, Play Store deployment is included in our development process. We handle the entire submission process, including creating the app listing, uploading screenshots, and ensuring it meets all Google developer guidelines.</p>
                        </AccordionItem>

                        <AccordionItem title="Do you build iOS apps as well?">
                            <p>Yes! We highly recommend cross-platform development (using Flutter or React Native). This allows us to write the code once and deploy your app to both the Google Play Store (Android) and Apple App Store (iOS), saving you significant time and cost.</p>
                        </AccordionItem>

                        <AccordionItem title="Who will own the source code after completion?">
                            <p>You do. Once the project is completed and all payments are cleared, we hand over 100% ownership of the source code and intellectual property rights to you.</p>
                        </AccordionItem>

                        <AccordionItem title="Do you provide post-launch maintenance?">
                            <p>Yes. We offer free technical support and bug fixes for the first 30 to 90 days (depending on the package) after launch. We also offer affordable Annual Maintenance Contracts (AMC) for ongoing feature updates, OS compatibility checks, and server management.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}