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

export default function GraphicDesign() {
    return (
        <div className="font-sans bg-gray-50 min-h-screen flex flex-col">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#243c7c] relative overflow-hidden">
                {/* Background Gradients & Accents */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#243c7c] via-[#1c3065] to-[#12224f]"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff7600] opacity-10 rounded-full blur-[120px] -translate-y-20 translate-x-20"></div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-white">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6 border border-white/20 uppercase text-blue-100">
                            <span className="w-2 h-2 bg-[#ff7600] rounded-full"></span>
                            Creative Studio
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            Elevate Your Brand with <br />
                            <span className="text-[#ff7600]">Custom Graphic Design</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-50 font-light leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-5">
                            Stop using generic templates. Let our expert designers create stunning, high-converting visuals that capture attention and communicate your brand's true value.
                        </p>

                        <ul className="mt-8 space-y-4">
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                100% Custom, Original Artwork
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                Unlimited Revisions on Premium Plans
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 font-bold">✓</span>
                                Full Copyrights & Source Files Included
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-[#243c7c]">Discuss Your Project</h2>
                                <p className="text-sm text-gray-500 mt-1">Get a free design consultation</p>
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
                                        <option value="" disabled>Select Design Requirement *</option>
                                        <option value="logo">Logo & Brand Identity</option>
                                        <option value="social">Social Media Post Creatives</option>
                                        <option value="print">Marketing Collaterals (Flyers/Brochures)</option>
                                        <option value="packaging">Product Packaging Design</option>
                                        <option value="uiux">Website UI / UX Design</option>
                                        <option value="full">Monthly Dedicated Designer</option>
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
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">10k+</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Designs Delivered</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">50+</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">In-House Designers</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">24-48h</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Fast Turnaround</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-black text-[#243c7c] mb-1">98%</div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Client Satisfaction</p>
                    </div>
                </div>
            </section>

            {/* 3. CORE SERVICES (Grid) */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c] mb-4">Our Graphic Design Services</h2>
                    <div className="w-24 h-1 bg-[#ff7600] mx-auto"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">From creating your brand's core identity to designing high-performing ad creatives, we offer comprehensive design solutions.</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Logo & Branding", desc: "Custom logo design, brand guidelines, typography, and color palettes that make your business instantly recognizable.", icon: "🎯" },
                        { title: "Social Media Creatives", desc: "High-engagement Instagram posts, Facebook carousels, and LinkedIn banners designed to boost interaction and sales.", icon: "📱" },
                        { title: "Marketing Collaterals", desc: "Professional brochures, flyers, company profiles, business cards, and banners ready for digital sharing or high-quality print.", icon: "📄" },
                        { title: "Packaging Design", desc: "Eye-catching product labels, box designs, and packaging artwork that stand out on retail shelves and e-commerce stores.", icon: "📦" }
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
                            Why Are We the Right <span className="text-[#ff7600]">Design Partner?</span>
                        </h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-8"></div>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Freelancers can be unreliable, and hiring a full-time designer is expensive. We give you the reliability of an agency at prices that make sense for growing businesses.
                        </p>

                        <ul className="space-y-6">
                            {[
                                { title: "Full Ownership & Source Files", desc: "Unlike others, we don't hold your files hostage. Once approved, you get 100% copyright ownership along with vector source files (.AI, .PSD, .EPS)." },
                                { title: "Brand Consistency", desc: "We don't just design random posts. We study your brand guidelines to ensure every pixel perfectly aligns with your corporate identity." },
                                { title: "Hassle-Free Revisions", desc: "Design is subjective. We offer structured revision rounds to ensure the final output is exactly what you envisioned." }
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
                        <h3 className="text-2xl font-bold mb-8">Tools We Master</h3>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { name: "Adobe Illustrator", type: "Vector Graphics / Logos" },
                                { name: "Adobe Photoshop", type: "Image Editing / Banners" },
                                { name: "Adobe InDesign", type: "Brochures / Print" },
                                { name: "Figma", type: "UI/UX & Web Design" },
                                { name: "CorelDRAW", type: "Publishing / Layouts" },
                                { name: "After Effects", type: "Motion Graphics" },
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
                        <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c]">Design Packages</h2>
                        <div className="w-24 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                        <p className="text-gray-500 mt-4">Transparent pricing for one-off projects or monthly retainers.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                        {/* Starter Brand Plan */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Brand Starter Kit</h3>
                                <p className="text-xs text-gray-500 mt-2 font-medium">Perfect for new businesses</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#243c7c]">₹ 5,999</span>
                                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mt-1">One-Time</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> 3 Custom Logo Concepts</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Business Card Design</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Letterhead Design</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> 3 Rounds of Revisions</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> All Source Files Included</li>
                            </ul>
                            <button className="w-full bg-white border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                Choose Plan
                            </button>
                        </div>

                        {/* Social Media Retainer (Highlighted) */}
                        <div className="bg-[#243c7c] rounded-2xl shadow-2xl p-8 flex flex-col text-white transform md:-translate-y-4 relative overflow-hidden border-2 border-[#ff7600]">
                            <div className="absolute top-0 right-0 bg-[#ff7600] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>

                            <div className="text-center pb-6 border-b border-white/20 mb-6">
                                <h3 className="text-xl font-bold">Social Media Retainer</h3>
                                <p className="text-xs text-blue-200 mt-2 font-medium">Ongoing monthly creatives</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#ff7600]">₹ 14,999</span>
                                <span className="text-xs text-blue-200 font-bold uppercase tracking-wider block mt-1">/ month</span>
                            </div>
                            <ul className="text-sm text-blue-50 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> 15 Custom Posts / Creatives</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Story & Reel Cover Designs</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> High-Converting Ad Creatives</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Brand Guideline Adherence</li>
                                <li className="flex items-start"><span className="text-[#ff7600] mr-2 mt-0.5 font-bold">✓</span> Dedicated Account Manager</li>
                            </ul>
                            <button className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3 rounded-md shadow-lg transition duration-300">
                                Choose Plan
                            </button>
                        </div>

                        {/* Complete Corporate Plan */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Corporate Identity</h3>
                                <p className="text-xs text-gray-500 mt-2 font-medium">Full offline & online branding</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-black text-[#243c7c]">₹ 24,999</span>
                                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mt-1">One-Time</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-4 mb-8 flex-grow">
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Premium Logo & Guidelines Book</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Full Stationery (Cards, Envelopes)</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> 4-Page Company Profile / Brochure</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Social Media Branding Kit</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">✓</span> Unlimited Revisions</li>
                            </ul>
                            <button className="w-full bg-white border-2 border-[#243c7c] text-[#243c7c] hover:bg-[#243c7c] hover:text-white font-bold py-3 rounded-md transition duration-300">
                                Choose Plan
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* 6. HOW WE WORK (Process Flow) */}
            <section className="bg-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-14">Our Design Process</h2>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
                        {[
                            { step: "1", title: "Creative Brief", desc: "You share your requirements, brand guidelines, and visual inspirations with us." },
                            { step: "2", title: "Brainstorming", desc: "Our designers conceptualize layouts, color schemes, and initial rough drafts." },
                            { step: "3", title: "Review & Revise", desc: "We share the drafts. You provide feedback, and we refine the designs until perfect." },
                            { step: "4", title: "Final Delivery", desc: "You receive the final high-res files in all required formats (AI, PDF, PNG, JPG)." }
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
                        <AccordionItem title="In what file formats will I receive my designs?" defaultOpen={true}>
                            <p>Upon final approval, we provide all standard high-resolution file formats. For print materials and logos, you receive vector source files (.AI or .EPS) and print-ready PDFs. For web and social media, you receive optimized .JPG and .PNG files.</p>
                        </AccordionItem>

                        <AccordionItem title="Who owns the copyright to the designs?">
                            <p>You do. Once the project is fully paid for and finalized, 100% of the copyright and intellectual property rights are transferred to you. We do not hold any rights to your completed logos or brand assets.</p>
                        </AccordionItem>

                        <AccordionItem title="What if I don't like the initial design concepts?">
                            <p>Design is a collaborative process. If the initial concepts don't hit the mark, we highly encourage honest feedback. Depending on your package, we offer multiple rounds of revisions where we will tweak fonts, colors, and layouts until you are 100% satisfied.</p>
                        </AccordionItem>

                        <AccordionItem title="How long does it take to get a logo designed?">
                            <p>For a standard logo design, you can expect to see the first round of initial concepts within 48 to 72 working hours. Once you select a concept, final revisions and file delivery usually take another 24 to 48 hours.</p>
                        </AccordionItem>

                        <AccordionItem title="Can you print the designs for me?">
                            <p>We are a digital creative studio focusing purely on the design aspect. While we do not print the materials in-house, we provide you with perfect "Print-Ready" files (with correct bleeds, margins, and CMYK color profiles) that you can hand over to any local or online printer.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}