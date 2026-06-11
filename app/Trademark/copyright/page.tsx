"use client";

import React, { useState } from 'react';

// --- Reusable Accordion Component ---
interface AccordionItemProps {
    title: React.ReactNode;
    children?: React.ReactNode;
    defaultOpen?: boolean;
}

const AccordionItem = ({ title, children, defaultOpen = false }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border border-gray-200 rounded-md bg-white mb-3 shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-bold text-[#243c7c] focus:outline-none"
            >
                <span>{title}</span>
                <span className="text-[#ff7600] text-xl font-light">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                    {children}
                </div>
            )}
        </div>
    );
};

export default function CopyrightPage() {
    return (
        <div className="font-sans text-gray-800 bg-gray-50">

            {/* 1. HERO SECTION */}
            <section className="bg-[#243c7c] min-h-[600px] flex items-center py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Copy */}
                    <div className="text-white space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                            Online Copyright Registration in India <br />
                            <span className="text-[#ff7600] text-3xl md:text-4xl mt-2 block">| e-Filing Assistance</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 font-medium max-w-xl">
                            With the help of copyright expert from Online Legal India protect your creative work today before its too late. 100% online process. Start processing now!
                        </p>
                    </div>

                    {/* Right Side: Lead Generation Form */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md text-gray-800">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">Need Help with Copyright application?</h2>
                                <p className="text-sm text-gray-500">Fill Up the below Mentioned Form</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Name *</label>
                                    <input type="text" placeholder="Your Name" className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email *</label>
                                    <input type="email" placeholder="Your Email Address" className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mobile *</label>
                                    <input type="tel" placeholder="Without 0 or +91" className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm" required />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">City *</label>
                                        <input type="text" placeholder="City" className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm" required />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">State *</label>
                                        <input type="text" placeholder="State" className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm" required />
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-md transition duration-300 mt-4 shadow-lg text-base">
                                    Apply Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. INFO ACCORDIONS */}
            <section className="py-16 px-4 max-w-4xl mx-auto">
                <AccordionItem title="What is Copyright Registration?" defaultOpen={true}>
                    <p>Copyright is the process of safeguarding any form of intellectual or artistic creations from illegal imitation or usage. Grounded on the Copyright Act, 1957, the creators/producers of any original works like literature, music, cinematography, sound records, can look after their intellectual properties. Following the latest amendment, computer-related programming, content, a database can also be protected by obtaining a copyright license.</p>
                </AccordionItem>
                <AccordionItem title="The Register of Copyrights is divided into six categories:">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Part A. Literary works other than computer Programs.</li>
                        <li>Part B. Musical Works.</li>
                        <li>Part C. Artistic Works.</li>
                        <li>Part D. Cinematography Films.</li>
                        <li>Part E. Sound Recording.</li>
                        <li>Part F. Computer Programs, tables & Compilations.</li>
                    </ul>
                </AccordionItem>
                <AccordionItem title="Benefits of Copyright Registration:">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-5">
                        <li>Legal Protection</li>
                        <li>Branding or Goodwill</li>
                        <li>After The Creators Death</li>
                        <li>Prima Facie Evidence</li>
                        <li>Owner publicity</li>
                        <li>Restricts Unauthorized Reproduction</li>
                        <li>Creation of Asset</li>
                        <li>Public Record</li>
                        <li>Copyright helps in establishing credibility in Market</li>
                        <li>Global Protection</li>
                    </ul>
                </AccordionItem>
            </section>

            {/* 3. CATEGORIES GRID */}
            <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#eef4ff]">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <span className="text-[#f26522] font-semibold uppercase tracking-wider">
                            Copyright Categories
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F4D] mt-3">
                            Select Copyright Category
                        </h2>

                        <p className="text-slate-600 max-w-3xl mx-auto mt-4">
                            Protect your original creative work through copyright registration.
                            Choose the category that best matches your intellectual property.
                        </p>

                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-5 rounded-full"></div>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        {[
                            {
                                icon: "🎬",
                                title: "Cinematography Film",
                                sub: "Movies, Short Films & Videos",
                            },
                            {
                                icon: "🎵",
                                title: "Sound Recording",
                                sub: "Audio Recordings & Podcasts",
                            },
                            {
                                icon: "🎼",
                                title: "Musical Work",
                                sub: "Music Composition & Sound",
                            },
                            {
                                icon: "🎨",
                                title: "Artistic Work",
                                sub: "Paintings, Designs & Photos",
                            },
                            {
                                icon: "✍️",
                                title: "Literary Work",
                                sub: "Articles, Scripts & Content",
                            },
                            {
                                icon: "📚",
                                title: "Books",
                                sub: "Published & Unpublished Books",
                            },
                            {
                                icon: "💻",
                                title: "Computer Programs",
                                sub: "Software & Source Code",
                            },
                            {
                                icon: "🌐",
                                title: "Website",
                                sub: "Website Content & Design",
                            },
                            {
                                icon: "📺",
                                title: "Television Broadcast",
                                sub: "TV & Radio Broadcasts",
                            },
                            {
                                icon: "📰",
                                title: "Published Editions",
                                sub: "Published Works & Journals",
                            },
                            {
                                icon: "🗄️",
                                title: "Databases",
                                sub: "Structured Information Sets",
                            },
                            {
                                icon: "📢",
                                title: "Advertisements",
                                sub: "Marketing & Promotional Content",
                            },
                        ].map((cat, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
                            >
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                                    {cat.icon}
                                </div>

                                <h3 className="font-bold text-[#0B1F4D] mb-2">
                                    {cat.title}
                                </h3>

                                <p className="text-xs text-slate-500 leading-5">
                                    {cat.sub}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16">
                        <div className="bg-[#0B1F4D] rounded-3xl p-8 md:p-10 text-center shadow-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Not Sure Which Category Applies?
                            </h3>

                            <p className="text-slate-300 max-w-2xl mx-auto mb-6">
                                Our copyright experts can help you identify the correct category
                                and guide you through the complete copyright registration process.
                            </p>

                            <button className="bg-[#f26522] hover:bg-[#e55a1c] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                                Talk to Copyright Expert
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* 4. PRICING & REQUIREMENTS */}
            <section className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Pricing Card */}
                <div className="lg:col-span-1">
                    <div className="bg-[#243c7c] rounded-xl shadow-xl overflow-hidden text-white">
                        <div className="p-8 text-center border-b border-blue-800">
                            <h3 className="text-2xl font-bold mb-2">Fees</h3>
                            <p className="text-4xl font-extrabold text-[#ff7600]">₹ 2,999</p>
                            <p className="text-xs text-blue-200 mt-2">*Exclude Govt. Fees</p>
                        </div>
                        <div className="p-8 bg-[#1c3065]">
                            <p className="text-sm mb-6 text-blue-100 leading-relaxed">
                                Copyright Registration logos, software, art work, books, periodicals, magazines, videos, music, databases, advertisements, cinematography films & video games.
                            </p>
                            <ul className="space-y-3 mb-8 text-sm font-medium">
                                <li className="flex items-center">✓ Free Consultation</li>
                                <li className="flex items-center">✓ Dedicated Copyright Expert</li>
                                <li className="flex items-center">✓ Call, Chat & Email Support</li>
                                <li className="flex items-center">✓ Drafting and filing</li>
                            </ul>
                            <button className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3 rounded-md transition duration-300">
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Requirements & Documents */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-[#243c7c] mb-4">Basic Requirements</h3>
                        <p className="text-sm text-gray-600 mb-4">Registration under Copyright Act will protect any form of artistic creations or Intellectual property. It gives both the Economic & Ethical Rights to the original creator.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                <h4 className="font-bold text-[#ff7600] mb-2">1. Basic Details</h4>
                                <p className="text-xs text-gray-600">Name, Address & Nationality of creator are mandatory.</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                <h4 className="font-bold text-[#ff7600] mb-2">2. Power of Attorney</h4>
                                <p className="text-xs text-gray-600">Must sign if registering through an advocate or legal firm.</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                <h4 className="font-bold text-[#ff7600] mb-2">3. Work Sample</h4>
                                <p className="text-xs text-gray-600">Soft copy in JPEG/JPG/GIF. Software requires 4 CDs/DVDs.</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                <h4 className="font-bold text-[#ff7600] mb-2">4. Trademark Certificate</h4>
                                <p className="text-xs text-gray-600">For artistic work, need TM search certificate (TM-60) prior.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-[#243c7c] mb-4">Documents Required</h3>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 column-count-1 md:columns-2 gap-8">
                            <li>Name, Address & Nationality of Candidate – ID proof</li>
                            <li>NOC from publisher if work published & publisher is different.</li>
                            <li>Search Certificate from Trade Mark Office (TM -60) if any</li>
                            <li>NOC from person whose photograph appears on work.</li>
                            <li>Power of Attorney</li>
                            <li>2 Copies of work</li>
                            <li>KYC of author</li>
                            <li>DD/IPO of Rs. per work (as applicable)</li>
                            <li>NOC from author if candidate is different.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. COMPARISON TABLE */}
            <section className="bg-white py-16 px-4 border-t border-gray-200">
                <div className="max-w-7xl mx-auto overflow-x-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Copyright vs Trademark vs Patent</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-3"></div>
                    </div>

                    <table className="w-full text-sm text-left border-collapse min-w-[800px]">
                        <thead className="bg-[#243c7c] text-white">
                            <tr>
                                <th className="p-4 border border-[#1c3065] w-1/6">Basis</th>
                                <th className="p-4 border border-[#1c3065] w-1/4">Copyright</th>
                                <th className="p-4 border border-[#1c3065] w-1/4">Trademark</th>
                                <th className="p-4 border border-[#1c3065] w-1/4">Patent</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600">
                            <tr className="bg-gray-50">
                                <td className="p-4 border font-bold text-[#243c7c]">Meaning</td>
                                <td className="p-4 border">Legal security for original artwork (literature, music, computer programs). Ensures Economic & Ethical authority.</td>
                                <td className="p-4 border">Legally preserves words, symbols, or designs that make a business distinct.</td>
                                <td className="p-4 border">Guards invention for a limited time. Excludes others from reproducing/selling.</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold text-[#243c7c]">Protection Given For</td>
                                <td className="p-4 border">Text, music, sound, paintings, motion pictures, software.</td>
                                <td className="p-4 border">Word, logo, color, font differentiating products/identity.</td>
                                <td className="p-4 border">Shape, configuration, pattern applied to an article by industrial process.</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-4 border font-bold text-[#243c7c]">Significance</td>
                                <td className="p-4 border">Expression of Ideas</td>
                                <td className="p-4 border">Identification of brand</td>
                                <td className="p-4 border">Invention</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold text-[#243c7c]">Govern By</td>
                                <td className="p-4 border">Indian Copyright Act, 1957</td>
                                <td className="p-4 border">Trade Marks Act, 1999</td>
                                <td className="p-4 border">Indian Patent Act, 1970</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-4 border font-bold text-[#243c7c]">Validity Term</td>
                                <td className="p-4 border font-bold text-green-600">60 years</td>
                                <td className="p-4 border font-bold text-green-600">10 years (Renewable)</td>
                                <td className="p-4 border font-bold text-green-600">20 years</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 6. HOW WE WORK (STEPS) */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">How We Work?</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-3"></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-4">
                        {[
                            "Fill the form & Make the Payment",
                            "Call from a dedicated expert",
                            "Experts receive details & documents",
                            "Experts file the application",
                            "Congratulations! Successfully applied"
                        ].map((step, index) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center text-center w-full md:w-1/5">
                                    <div className="w-12 h-12 rounded-full bg-[#243c7c] text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-2 border-[#ff7600]">
                                        {index + 1}
                                    </div>
                                    <p className="text-sm font-semibold text-gray-700 px-2">{step}</p>
                                </div>
                                {index < 4 && (
                                    <div className="hidden md:block text-[#ff7600] text-3xl font-light">⟶</div>
                                )}
                                {index < 4 && (
                                    <div className="md:hidden text-[#ff7600] text-2xl font-light">↓</div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FAQS */}
            <section className="bg-white py-16 px-4 border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Frequently Asked Questions (FAQs)</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-3 mb-8"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="What is copyright?" defaultOpen={true}>
                            <p className="mb-2">Copyright registration is an intellectual property right just like a trademark and patent. It is basically a legal right which is provided to the creators for their unique work.</p>
                            <p className="mb-2">Copyright falls under the auspices of intellectual property law and protects the rights of creators of original works of authorship whether the work in question is published or not.</p>
                            <p>Original works of authorship include literary, dramatic, musical, and artistic works such as poetry, novels, movies, songs, computer software, and photography.</p>
                        </AccordionItem>
                        <AccordionItem title="What can be copyrighted?"><p>Content coming soon...</p></AccordionItem>
                        <AccordionItem title="Can I apply for Copyright registration in respect of ideas or mathematical concepts?"><p>Content coming soon...</p></AccordionItem>
                        <AccordionItem title="Can I apply for Copyright registration of my website?"><p>Content coming soon...</p></AccordionItem>
                        <AccordionItem title="Who can apply for the copyright registration?"><p>Content coming soon...</p></AccordionItem>
                        <AccordionItem title="Is Copyright Registration mandatory?"><p>Content coming soon...</p></AccordionItem>
                        <AccordionItem title="What are the benefits of Copyright Registration?"><p>Content coming soon...</p></AccordionItem>
                        <AccordionItem title="What is the validity of my copyright?"><p>The validity time in copyright is 60 years.</p></AccordionItem>
                        <AccordionItem title="What is a Copyright Diary Number?"><p>Content coming soon...</p></AccordionItem>
                        <AccordionItem title="Whether computer Software or Computer Programme can be registered?"><p>Content coming soon...</p></AccordionItem>
                        <AccordionItem title="Do you provide copyright services in my town?"><p>Yes, our process is 100% online.</p></AccordionItem>
                        <AccordionItem title="Do I need to physically present for the process?"><p>No, the process is completely online and digital.</p></AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}